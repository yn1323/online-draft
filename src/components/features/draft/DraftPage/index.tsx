'use client';

import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Tabs,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { LuList, LuMessageSquare } from 'react-icons/lu';
import { Loading } from '@/src/components/atoms/Loading';
import {
  type ChatMessageUIType,
  useRealtimeChat,
} from '@/src/hooks/firebase/chat/useRealtimeChat';
import { useRealtimeGroup } from '@/src/hooks/firebase/group/useRealtimeGroup';
import { useRealtimeSelection } from '@/src/hooks/firebase/selection/useRealtimeSelection';
import type { SelectionItemType } from '@/src/hooks/firebase/selection/useSelection';
import { useRealtimeUsers } from '@/src/hooks/firebase/user/useRealtimeUsers';
import { ChatInputForm } from '../ChatInputForm';
import { ChatMessageList } from '../ChatMessageList';
import { CurrentRoundStatus } from '../CurrentRoundStatus';
import { useDraftChat } from '../hooks/useDraftChat';
import { type EditingPickType, useDraftPicks } from '../hooks/useDraftPicks';
import { useDraftResult } from '../hooks/useDraftResult';
import {
  type DraftRoundType,
  type ParticipantType,
  pastDraftResults,
} from '../mockData';
import { ItemSelectModal, useItemSelectModal } from '../modals/ItemSelectModal';
import { OpenResultModal, useOpenResultModal } from '../modals/OpenResultModal';
import { StageModal, useStageModal } from '../modals/StageModal';
import { PastDraftResults } from '../PastDraftResults';

type DraftPageInnerProps = {
  // データ
  currentRound: number;
  participants: ParticipantType[];
  pastResults: DraftRoundType[];
  realtimeChatMessages: ChatMessageUIType[];
  selections: SelectionItemType[];
  // Firestore関連
  groupId: string;
  userId: string;
};

/**
 * ドラフト実行画面Innerコンポーネント（Presenter）
 * UI描画と状態管理を担当、新しいhooks構造を使用
 */
export const DraftPageInner = ({
  currentRound,
  participants,
  pastResults,
  realtimeChatMessages,
  selections,
  groupId,
  userId,
}: DraftPageInnerProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // タブ状態（SP版用）- DraftPageInner内で管理
  const [activeTab, setActiveTab] = useState('draft');

  // モーダル状態管理
  const itemSelectModal = useItemSelectModal();
  const openResultModal = useOpenResultModal();
  const stageModal = useStageModal();

  // 演出完了フラグ管理
  const [shouldExecuteOpenResult, setShouldExecuteOpenResult] = useState(false);

  // 編集用のstate
  const [editingPick, setEditingPick] = useState<EditingPickType | null>(null);

  // 現在ユーザーの選択データを取得
  const currentUserSelection = selections.find(
    (selection) =>
      selection.userId === userId && selection.round === currentRound,
  );

  // Firestore処理hooks
  const { selectItem } = useDraftPicks(groupId, userId, currentRound);
  const { sendMessage } = useDraftChat(groupId, userId);
  const { executeOpenResult, checkParticipantStatus } = useDraftResult(
    participants,
    selections,
    currentRound,
  );

  // ParticipantType → ParticipantResult 変換関数
  const convertToParticipantResults = () => {
    // 現在ラウンドの選択データを取得
    const currentRoundSelections = selections.filter(
      (selection) => selection.round === currentRound,
    );

    // 選択アイテム別にグループ化
    const itemGroups: Record<string, typeof currentRoundSelections> = {};
    for (const selection of currentRoundSelections) {
      const item = selection.item;
      if (!itemGroups[item]) {
        itemGroups[item] = [];
      }
      itemGroups[item].push(selection);
    }

    // 競合判定とwillLoseフラグの設定
    const participantResults = participants.map((participant) => {
      const userSelection = currentRoundSelections.find(
        (selection) => selection.userId === participant.id,
      );

      // 選択していない場合は空文字とwillLose=true
      if (!userSelection) {
        return {
          id: participant.id,
          name: participant.name,
          avatar: Number(participant.avatar),
          choice: '',
          willLose: true,
        };
      }

      const selectedItem = userSelection.item;
      const competingSelections = itemGroups[selectedItem] || [];

      // 競合がない場合（1人だけが選択）はwillLose=false
      if (competingSelections.length === 1) {
        return {
          id: participant.id,
          name: participant.name,
          avatar: Number(participant.avatar),
          choice: selectedItem,
          willLose: false,
        };
      }

      // 競合がある場合はrandomNumberで勝者判定
      const isWinner = competingSelections.every(
        (selection) =>
          selection.randomNumber >= (userSelection.randomNumber || 0),
      );

      return {
        id: participant.id,
        name: participant.name,
        avatar: Number(participant.avatar),
        choice: selectedItem,
        willLose: !isWinner,
      };
    });

    return participantResults;
  };

  // ハンドラー関数
  const handleItemSelect = async (data: { item: string; comment: string }) => {
    try {
      await selectItem(data.item, data.comment);
    } catch (error) {
      console.error('アイテム選択エラー:', error);
    }
  };

  const handleEditSave = async (data: { item: string; comment: string }) => {
    try {
      await selectItem(data.item, data.comment); // 編集もコメント含めて保存
      setEditingPick(null);
      itemSelectModal.close();
    } catch (error) {
      console.error('編集保存エラー:', error);
    }
  };

  const handleEditClick = (
    round: number,
    playerId: string,
    playerName: string,
    currentPick: string,
    category: string,
  ) => {
    setEditingPick({ round, playerId, playerName, currentPick, category });
    itemSelectModal.open();
  };

  const handleOpenResult = async () => {
    try {
      const status = await checkParticipantStatus();
      if (status.allCompleted) {
        // 開票処理フラグを立ててからStageModalを表示
        setShouldExecuteOpenResult(true);
        stageModal.open();
      } else {
        openResultModal.open();
      }
    } catch (error) {
      console.error('開票処理エラー:', error);
    }
  };

  const handleExecuteOpenResult = async () => {
    try {
      // OpenResultModalからもStageModalを表示（開票処理フラグあり）
      openResultModal.close();
      setShouldExecuteOpenResult(true);
      stageModal.open();
    } catch (error) {
      console.error('開票実行エラー:', error);
    }
  };

  // 手動でStageModalを閉じる（開票処理なし）
  const handleStageModalClose = () => {
    setShouldExecuteOpenResult(false); // フラグをリセット
    stageModal.close();
  };

  // 演出完了後の開票処理
  const handleStageRevealComplete = useCallback(async () => {
    try {
      await executeOpenResult();
      stageModal.close();
    } catch (error) {
      console.error('開票処理エラー:', error);
      stageModal.close();
    }
  }, [executeOpenResult, stageModal]);

  // StageModalの状態変化を監視して演出完了を検知
  useEffect(() => {
    // StageModalが閉じられて、かつ開票処理フラグが立っている場合
    if (!stageModal.isOpen && shouldExecuteOpenResult) {
      handleStageRevealComplete();
      setShouldExecuteOpenResult(false); // フラグをリセット
    }
  }, [stageModal.isOpen, shouldExecuteOpenResult, handleStageRevealComplete]);

  const handleSendMessage = async (message: string) => {
    try {
      await sendMessage(message);
    } catch (error) {
      console.error('チャット送信エラー:', error);
    }
  };

  if (isMobile) {
    // SP版: タブレイアウト
    return (
      <VStack h="100vh" gap={0}>
        {/* ヘッダー（固定） */}
        <Box
          bg="white"
          borderBottom="1px"
          borderColor="gray.200"
          p={4}
          w="full"
          position="sticky"
          top={0}
          zIndex={10}
        >
          <Text fontSize="lg" fontWeight="bold" textAlign="center">
            オンラインドラフト会議
          </Text>
        </Box>

        {/* タブエリア */}
        <Tabs.Root
          value={activeTab}
          onValueChange={(details) => setActiveTab(details.value)}
          flex={1}
          display="flex"
          flexDirection="column"
          w="full"
          overflow="hidden"
        >
          <Tabs.List
            bg="gray.50"
            borderBottom="2px solid"
            borderColor="gray.200"
            flexShrink={0}
          >
            <Tabs.Trigger
              value="draft"
              flex={1}
              py={3}
              px={4}
              _selected={{
                bg: 'white',
                color: 'blue.600',
                borderBottom: '2px solid',
                borderColor: 'blue.500',
                fontWeight: 'bold',
              }}
              transition="all 0.15s ease"
            >
              <HStack gap={2} justify="center" w="full">
                <LuList size={18} />
                <Text fontSize="sm">取得リスト</Text>
              </HStack>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="chat"
              flex={1}
              py={3}
              px={4}
              _selected={{
                bg: 'white',
                color: 'blue.600',
                borderBottom: '2px solid',
                borderColor: 'blue.500',
                fontWeight: 'bold',
              }}
              transition="all 0.15s ease"
            >
              <HStack gap={2} justify="center" w="full">
                <LuMessageSquare size={18} />
                <Text fontSize="sm">チャット</Text>
              </HStack>
            </Tabs.Trigger>
          </Tabs.List>

          <Box flex={1} overflow="hidden" minH={0}>
            {/* ドラフト状況タブ */}
            <Tabs.Content value="draft" h="full" overflow="auto">
              <VStack gap={3} p={3}>
                {/* 現在ラウンドセクション */}
                <CurrentRoundStatus
                  participants={participants}
                  currentRound={currentRound}
                  variant="sp"
                  currentUserId={userId}
                  selections={selections}
                  onItemSelect={itemSelectModal.open}
                  onOpenResult={handleOpenResult}
                />

                {/* 過去ラウンド結果 */}
                <PastDraftResults
                  currentRound={currentRound}
                  pastResults={pastResults}
                  participants={participants}
                  variant="sp"
                  onEditClick={handleEditClick}
                />
              </VStack>
            </Tabs.Content>

            {/* チャット・ログタブ */}
            <Tabs.Content
              value="chat"
              h="full"
              overflow="hidden"
              display="flex"
              flexDirection="column"
            >
              <Box flex={1} overflow="auto" p={3}>
                <ChatMessageList messages={realtimeChatMessages} />
              </Box>
            </Tabs.Content>
          </Box>
        </Tabs.Root>

        {/* 入力エリア（固定） - チャット専用 */}
        {activeTab === 'chat' && (
          <Box
            bg="white"
            borderTop="1px"
            borderColor="gray.200"
            p={3}
            w="full"
            position="sticky"
            bottom={0}
          >
            <ChatInputForm onSendMessage={handleSendMessage} />
          </Box>
        )}

        {/* モーダル群 */}
        <ItemSelectModal
          isOpen={itemSelectModal.isOpen}
          onClose={() => {
            itemSelectModal.close();
            setEditingPick(null);
          }}
          onSubmit={editingPick ? handleEditSave : handleItemSelect}
          modalTitle={
            editingPick
              ? 'ピックを編集'
              : currentUserSelection
                ? '選択を編集'
                : 'アイテムを選択'
          }
          defaultItem={editingPick?.currentPick || currentUserSelection?.item}
          defaultComment={
            editingPick?.category || currentUserSelection?.comment
          }
          editContext={
            editingPick
              ? {
                  round: editingPick.round,
                  playerName: editingPick.playerName,
                }
              : undefined
          }
        />
        <OpenResultModal
          isOpen={openResultModal.isOpen}
          onClose={openResultModal.close}
          onExecuteOpenResult={handleExecuteOpenResult}
        />
        <StageModal
          isOpen={stageModal.isOpen}
          onClose={handleStageModalClose}
          variant={stageModal.variant}
          participants={convertToParticipantResults()}
        />
      </VStack>
    );
  }

  // PC版: 2カラムレイアウト
  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="container.xl">
        {/* ヘッダー */}
        <Box mb={6}>
          <Text fontSize="2xl" fontWeight="bold" color="gray.800">
            オンラインドラフト会議
          </Text>
        </Box>

        <Grid templateColumns="7fr 3fr" gap={6} h="calc(100vh - 130px)">
          {/* 左側: ドラフト状況エリア */}
          <GridItem h="100%">
            <VStack gap={4} h="100%" w="full" align="stretch">
              {/* 上部: 現在ラウンドの選択状況 */}
              <CurrentRoundStatus
                participants={participants}
                currentRound={currentRound}
                variant="pc"
                currentUserId={userId}
                selections={selections}
                onItemSelect={itemSelectModal.open}
                onOpenResult={handleOpenResult}
              />

              {/* 下部: 過去のドラフト結果 */}
              <PastDraftResults
                currentRound={currentRound}
                pastResults={pastResults}
                participants={participants}
                variant="pc"
                onEditClick={handleEditClick}
              />
            </VStack>
          </GridItem>

          {/* 右側: チャット */}
          <GridItem h="100%">
            <Box
              h="100%"
              maxH="calc(100vh - 130px)"
              bg="white"
              boxShadow="lg"
              p={4}
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              overflow="hidden"
            >
              <Text fontSize="lg" fontWeight="bold" mb={4} flexShrink={0}>
                チャット
              </Text>
              {/* チャットメッセージエリア */}
              <Box flex="1" overflow="auto" mb={3} minH={0}>
                <ChatMessageList messages={realtimeChatMessages} />
              </Box>

              {/* チャット入力エリア */}
              <Box flexShrink={0}>
                <ChatInputForm onSendMessage={handleSendMessage} />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* モーダル群 */}
      <ItemSelectModal
        isOpen={itemSelectModal.isOpen}
        onClose={() => {
          itemSelectModal.close();
          setEditingPick(null);
        }}
        onSubmit={editingPick ? handleEditSave : handleItemSelect}
        modalTitle={
          editingPick
            ? 'ピックを編集'
            : currentUserSelection
              ? '選択を編集'
              : 'アイテムを選択'
        }
        defaultItem={editingPick?.currentPick || currentUserSelection?.item}
        defaultComment={editingPick?.category || currentUserSelection?.comment}
        editContext={
          editingPick
            ? {
                round: editingPick.round,
                playerName: editingPick.playerName,
              }
            : undefined
        }
      />
      <OpenResultModal
        isOpen={openResultModal.isOpen}
        onClose={openResultModal.close}
        onExecuteOpenResult={handleExecuteOpenResult}
      />
      <StageModal
        isOpen={stageModal.isOpen}
        onClose={handleStageModalClose}
        variant={stageModal.variant}
        participants={convertToParticipantResults()}
      />
    </Box>
  );
};

/**
 * ドラフト実行画面コンポーネント（Container）
 * モックデータの提供のみを担当
 */
export const DraftPage = ({ groupId }: { groupId: string }) => {
  const router = useRouter();

  // sessionStorageからuserIdを取得
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    // クライアントサイドでのみ実行
    const storedUserId = sessionStorage.getItem('onlinedraft_user_id');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // userIdがない場合はロビーへリダイレクト（認証チェック）
      router.push(`/lobby/${groupId}`);
    }
  }, [groupId, router]);

  // Firestoreから参加者情報をリアルタイム取得
  const { users: realtimeUsers, loading: usersLoading } =
    useRealtimeUsers(groupId);

  // ユーザー情報のlookupオブジェクト生成
  const userLookup = useMemo(() => {
    return realtimeUsers.reduce(
      (acc, user) => {
        acc[user.userId] = {
          name: user.userName,
          avatar: user.avatar,
        };
        return acc;
      },
      {} as Record<string, { name: string; avatar: string }>,
    );
  }, [realtimeUsers]);

  // リアルタイムチャット監視
  const { messages: realtimeChatMessages } = useRealtimeChat(
    groupId,
    userLookup,
    userId,
  );

  const { group } = useRealtimeGroup(groupId);

  // リアルタイム選択監視
  const { selections } = useRealtimeSelection(groupId);

  // userIdが設定されるまで、またはユーザー情報取得中はローディング表示
  if (!userId || usersLoading || !group) {
    return (
      <Box bg="gray.50" minH="100vh" py={[4, 8]}>
        <Container maxW="container.lg">
          <Loading message="ローディング中..." />
        </Container>
      </Box>
    );
  }
  const { round: currentRound } = group;

  // Firestore形式からアプリ形式に変換
  const participants: ParticipantType[] = realtimeUsers.map((user) => {
    // 現在ラウンドでのユーザーの選択を取得
    const currentSelection = selections.find(
      (selection) =>
        selection.userId === user.userId && selection.round === currentRound,
    );

    return {
      id: user.userId,
      name: user.userName,
      avatar: user.avatar,
      // TODO: 実際の取得アイテム情報と連携
      acquisitions: [],
      currentPick: currentSelection?.item || '選択中...',
    };
  });

  return (
    <DraftPageInner
      currentRound={currentRound}
      participants={participants}
      pastResults={pastDraftResults}
      realtimeChatMessages={realtimeChatMessages}
      selections={selections}
      groupId={groupId}
      userId={userId}
    />
  );
};
