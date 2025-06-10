'use client';

import { saveRecentGroup } from '@/src/helpers/utils/localStorage';
import { useRealtimeChat } from '@/src/hooks/chat/useRealtimeChat';
import { useSendMessage } from '@/src/hooks/chat/useSendMessage';
import { useGroupData } from '@/src/hooks/data/useGroupData';
import { useParticipantStatus } from '@/src/hooks/draft/useParticipantStatus';
import { useRealtimeUsers } from '@/src/hooks/realtime/useRealtimeUsers';
import { saveUserSelection } from '@/src/services/draft/selectionService';
import { currentUserAtom, setCurrentUserAtom } from '@/src/stores/user';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useAtomValue, useSetAtom } from 'jotai';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UserRoundDetailModal } from '../UserRoundDetailModal';
import { ActionPanel } from './components/actions/ActionPanel';
import { FloatingActionButton } from './components/actions/FloatingActionButton';
import { ChatLogSection } from './components/chat/ChatLogSection';
import { DraftHeader } from './components/layout/DraftHeader';
import { TabNavigation } from './components/layout/TabNavigation';
import { InputModal } from './components/modals/InputModal';
import { OptionsModal } from './components/modals/OptionsModal';
import { RoundHistoryTable } from './components/rounds/RoundHistoryTable';
import { mockParticipants, mockPastRounds } from './mocks';

interface DraftPageProps {
  groupId?: string;
  roundNumber?: number;
  totalRounds?: number;
  groupName?: string;
  participants?: {
    id: string;
    name: string;
    avatar: string;
    status: 'thinking' | 'entered' | 'completed';
  }[];
  currentUserSelection?: string;
  onSubmitSelection?: (selection: string, comment?: string) => void;
  pastRounds?: {
    roundNumber: number;
    topic: string;
    selections: {
      userId: string;
      userName: string;
      item: string;
      comment?: string;
    }[];
  }[];
  currentRoundTopic?: string;
  logCount?: number;
  onUpdateSelections?: (
    roundNumber: number,
    selections: {
      userId: string;
      userName: string;
      item: string;
      comment?: string;
    }[],
  ) => void;
}

export const DraftPage = ({
  groupId,
  roundNumber: propRoundNumber,
  totalRounds: propTotalRounds,
  groupName: propGroupName,
  participants: propParticipants,
  currentUserSelection: propCurrentUserSelection,
  onSubmitSelection: propOnSubmitSelection,
  pastRounds: propPastRounds,
  currentRoundTopic: propCurrentRoundTopic,
}: DraftPageProps = {}) => {
  // groupIdが渡されない場合はuseParamsから取得（後方互換性）
  const params = useParams();
  const router = useRouter();
  const draftId = groupId ?? (params?.id as string);

  // 内部状態の初期化
  const [internalCurrentUserSelection, setInternalCurrentUserSelection] =
    useState('');
  const [selection, setSelection] = useState('');
  const [comment, setComment] = useState('');
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [userRoundDetailModal, setUserRoundDetailModal] = useState<{
    isOpen: boolean;
    selectedRound: number | null;
    selectedUserId: string | null;
  }>({
    isOpen: false,
    selectedRound: null,
    selectedUserId: null,
  });
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);

  // Firestore連携でグループ情報とユーザー情報を取得
  const { groupData, groupLoading, groupError } = useGroupData(draftId);
  const { groupUsers } = useRealtimeUsers(draftId);
  const currentUser = useAtomValue(currentUserAtom);
  const setCurrentUser = useSetAtom(setCurrentUserAtom);

  // デフォルト値の設定（Firestoreデータを優先、なければモック）
  const roundNumber = propRoundNumber ?? groupData?.round ?? 1;

  // 参加者ステータス管理
  const { participants: statusParticipants, updateMyStatus } =
    useParticipantStatus(draftId, roundNumber);

  // チャット機能
  const { messages } = useRealtimeChat(draftId, groupUsers);
  const { sendMessage } = useSendMessage();

  console.log('📍 DraftPage - groupId:', draftId);
  console.log('📍 DraftPage - groupData:', groupData);
  console.log('📍 DraftPage - groupUsers:', groupUsers);
  console.log('📍 DraftPage - currentUser:', currentUser);
  console.log('💬 DraftPage - messages:', messages);

  // リロード時の再接続処理：currentUserがnullかつgroupDataがロードされた場合
  useEffect(() => {
    // ローディング中は処理しない
    if (groupLoading || !draftId) {
      return;
    }

    if (currentUser) {
      // currentUserがある場合は最近のグループとして保存
      if (groupData) {
        saveRecentGroup({
          groupId: draftId,
          groupName: groupData.groupName || `ドラフト会議 ${draftId}`,
          lastJoined: Date.now(),
        });

        // groupIdの設定
        if (currentUser.groupId !== draftId) {
          setCurrentUser({
            ...currentUser,
            groupId: draftId,
          });
        }
      }
    } else {
      console.log(
        '⚠️ currentUserがnull：ユーザー情報復元またはリダイレクト判定',
      );

      // GroupDataがある場合はユーザー情報再接続を試みる
      if (groupData) {
        console.log(
          '📍 GroupData存在：LocalStorageからユーザー情報を確認済み（復元失敗）',
        );
        console.log('🔄 ロビーページにリダイレクト');
        router.push(`/lobby/${draftId}`);
      }
      // GroupDataもない場合はエラー表示（下記のエラーハンドリングで処理）
    }
  }, [currentUser, groupData, groupLoading, draftId, router, setCurrentUser]);

  const _totalRounds = propTotalRounds ?? groupData?.round ?? 5;
  const groupName =
    propGroupName ?? groupData?.groupName ?? `ドラフト会議 ${draftId}`;

  // グループユーザーを participants 形式に変換（ステータス情報を統合）
  const participants =
    propParticipants ??
    groupUsers.map((user) => {
      // ステータス参加者情報から該当ユーザーのステータスを取得
      const statusUser = statusParticipants.find(
        (sp) => sp.userId === user.userId,
      );

      return {
        id: user.userId || '',
        name: user.userName,
        avatar: user.avatar,
        status: statusUser?.status || 'thinking',
      };
    });

  const currentUserSelection =
    propCurrentUserSelection ?? internalCurrentUserSelection;
  const pastRounds = propPastRounds ?? mockPastRounds;
  const currentRoundTopic = propCurrentRoundTopic ?? '好きなゲーム';

  // イベントハンドラーの設定
  const handleSubmitSelection =
    propOnSubmitSelection ??
    (async (selection: string, comment?: string) => {
      if (!currentUser || !draftId) {
        console.error('❌ ユーザー情報またはグループIDが不正');
        return;
      }

      try {
        console.log('🔄 選択データ保存開始:', { selection, comment });

        // Firestoreに選択データを保存
        await saveUserSelection(
          currentUser.userId || '',
          draftId,
          roundNumber,
          selection,
          comment || '',
        );

        console.log('✅ 選択データ保存成功');
        setInternalCurrentUserSelection(selection);
      } catch (error) {
        console.error('❌ 選択データ保存エラー:', error);
        // エラーの場合は内部状態のみ更新（フォールバック）
        setInternalCurrentUserSelection(selection);
      }
    });

  const handleSubmit = async () => {
    if (selection.trim() && currentUser) {
      // 選択を提出
      handleSubmitSelection(selection.trim(), comment.trim() || undefined);

      // ステータスを 'entered' に更新
      const success = await updateMyStatus(currentUser.userId || '', 'entered');

      if (success) {
        console.log('✅ 選択提出＆ステータス更新成功');
        setIsInputModalOpen(false);
        setSelection('');
        setComment('');
      } else {
        console.error('❌ ステータス更新失敗（モーダルは開いたまま）');
      }
    }
  };

  const handleRoundClick = (roundNumber: number) => {
    // 従来のラウンド全体クリック（必要に応じて削除可能）
    console.log('ラウンド全体クリック:', roundNumber);
  };

  const handleUserClick = (roundNumber: number, userId: string) => {
    setUserRoundDetailModal({
      isOpen: true,
      selectedRound: roundNumber,
      selectedUserId: userId,
    });
  };

  const handleCloseUserRoundDetail = () => {
    setUserRoundDetailModal({
      isOpen: false,
      selectedRound: null,
      selectedUserId: null,
    });
  };

  const handleSaveUserSelection = (
    roundNumber: number,
    selection: {
      userId: string;
      userName: string;
      item: string;
      comment?: string;
    },
  ) => {
    console.log('ユーザー選択保存:', { roundNumber, selection });
    // 実際の実装では、ここでFirestoreに保存
    // 今回はコンソールログのみ
  };

  const handleOpenInputModal = () => {
    setSelection(currentUserSelection);
    setIsInputModalOpen(true);
  };

  const handleOpenOptions = () => {
    setIsOptionsModalOpen(true);
  };

  const handleLeaveDraft = () => {
    // TOPページに戻る
    window.location.href = '/';
  };

  const handleOpenSettings = () => {
    console.log('設定画面を開く（今後実装）');
  };

  const handleOpenHelp = () => {
    console.log('ヘルプ画面を開く（今後実装）');
  };

  // チャット関連のハンドラー
  const handleSendMessage = async (message: string) => {
    if (!currentUser || !draftId) {
      console.error('❌ ユーザー情報またはグループIDが不正');
      return;
    }

    const success = await sendMessage({
      groupId: draftId,
      userId: currentUser.userId || '',
      message,
    });

    if (success) {
      console.log('✅ メッセージ送信成功');
    }
  };

  // currentUserがnull（未認証）の場合
  if (!currentUser && draftId) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Spinner size="lg" color="blue.500" />
          <Text color="gray.500">ロビーページにリダイレクト中...</Text>
        </VStack>
      </Container>
    );
  }

  // ローディング中の表示
  if (groupLoading) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Spinner size="lg" color="blue.500" />
          <Text color="gray.500">ドラフト情報を読み込み中...</Text>
        </VStack>
      </Container>
    );
  }

  // エラー時の表示
  if (groupError || !groupData) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Box fontSize="48px">❌</Box>
          <VStack gap={2} textAlign="center">
            <Text fontSize="xl" fontWeight="bold" color="red.500">
              ドラフトが見つかりません
            </Text>
            <Text color="gray.500">
              {groupError ||
                '指定されたドラフトは存在しないか、削除されている可能性があります。'}
            </Text>
          </VStack>
        </VStack>
      </Container>
    );
  }

  return (
    <Container
      maxW="1600px"
      p={{ base: 2, md: 3, lg: 4 }}
      minH="100vh"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: 'linear(to-br, purple.50, blue.50, pink.50)',
        opacity: 0.3,
        zIndex: -1,
        _dark: {
          bgGradient: 'linear(to-br, purple.900/30, blue.900/30, pink.900/30)',
          opacity: 0.5,
        },
      }}
    >
      {/* Header */}
      <DraftHeader groupName={groupName} onOpenOptions={handleOpenOptions} />

      {/* Main Layout - Responsive Design */}
      {/* Mobile: Tab Navigation */}
      <VStack
        gap={{ base: 3, md: 4 }}
        align="stretch"
        display={{ base: 'flex', lg: 'none' }}
      >
        <TabNavigation
          roundNumber={roundNumber}
          participants={participants}
          pastRounds={pastRounds}
          onRoundClick={handleRoundClick}
          onUserClick={handleUserClick}
          onOpenInputModal={handleOpenInputModal}
        />
      </VStack>

      {/* Desktop: 2-Column Layout */}
      <Grid
        templateColumns="65fr 35fr"
        gap={8}
        minH="70vh"
        display={{ base: 'none', lg: 'grid' }}
      >
        {/* Left: Strategy Information (65%) */}
        <GridItem>
          <RoundHistoryTable
            roundNumber={roundNumber}
            participants={participants}
            pastRounds={pastRounds}
            onRoundClick={handleRoundClick}
            onUserClick={handleUserClick}
            onOpenInputModal={handleOpenInputModal}
          />
        </GridItem>

        {/* Right: Communication (35%) */}
        <GridItem>
          <ChatLogSection
            logs={messages.map((msg) => ({
              id: msg.id,
              type: msg.type === 'system' ? 'system' : 'chat',
              timestamp: msg.timestamp,
              content: msg.message,
              user:
                msg.type === 'user'
                  ? {
                      id: msg.userId,
                      name: msg.userName,
                      avatar: msg.user?.avatar || '/img/1.png',
                    }
                  : undefined,
              isMyMessage: msg.userId === currentUser?.userId,
            }))}
            onSendMessage={handleSendMessage}
          />
        </GridItem>
      </Grid>

      {/* Input Modal */}
      <InputModal
        isOpen={isInputModalOpen}
        onClose={() => setIsInputModalOpen(false)}
        roundNumber={roundNumber}
        currentRoundTopic={currentRoundTopic}
        selection={selection}
        comment={comment}
        onSelectionChange={setSelection}
        onCommentChange={setComment}
        onSubmit={handleSubmit}
      />

      {/* User Round Detail Modal */}
      {userRoundDetailModal.selectedRound &&
        userRoundDetailModal.selectedUserId && (
          <UserRoundDetailModal
            isOpen={userRoundDetailModal.isOpen}
            onClose={handleCloseUserRoundDetail}
            roundNumber={userRoundDetailModal.selectedRound}
            participant={
              participants.find(
                (p) => p.id === userRoundDetailModal.selectedUserId,
              ) || participants[0]
            }
            initialSelection={pastRounds
              .find((r) => r.roundNumber === userRoundDetailModal.selectedRound)
              ?.selections.find(
                (s) => s.userId === userRoundDetailModal.selectedUserId,
              )}
            onSaveSelection={handleSaveUserSelection}
          />
        )}

      {/* Options Modal */}
      <OptionsModal
        isOpen={isOptionsModalOpen}
        onClose={() => setIsOptionsModalOpen(false)}
        onLeaveDraft={handleLeaveDraft}
        onOpenSettings={handleOpenSettings}
        onOpenHelp={handleOpenHelp}
      />
    </Container>
  );
};
