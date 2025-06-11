'use client';

import { saveRecentGroup } from '@/src/helpers/utils/localStorage';
import { useDraftAuth } from '@/src/hooks/auth/useDraftAuth';
import { useRealtimeChat } from '@/src/hooks/chat/useRealtimeChat';
import { useSendMessage } from '@/src/hooks/chat/useSendMessage';
import { useGroupData } from '@/src/hooks/data/useGroupData';
import { useParticipantStatus } from '@/src/hooks/draft/useParticipantStatus';
import { useRealtimeUsers } from '@/src/hooks/realtime/useRealtimeUsers';
import { saveUserSelection } from '@/src/services/draft/selectionService';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DraftAuthGuard } from '../DraftAuthGuard';
import { UserRoundDetailModal } from '../UserRoundDetailModal';
import { ChatLogSection } from './components/chat/ChatLogSection';
import { DraftHeader } from './components/layout/DraftHeader';
import { TabNavigation } from './components/layout/TabNavigation';
import { InputModal } from './components/modals/InputModal';
import { OptionsModal } from './components/modals/OptionsModal';
import { RoundHistoryTable } from './components/rounds/RoundHistoryTable';
import { mockPastRounds } from './mocks';

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

const DraftPageContent = ({
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
  const _router = useRouter();
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

  // 認証統合フック（Firebase認証 + SessionUser管理）
  const { currentUser } = useDraftAuth(draftId);

  // Firestore連携でグループ情報とユーザー情報を取得
  const { groupData, groupLoading, groupError } = useGroupData(draftId);
  const { groupUsers } = useRealtimeUsers(draftId);

  // デフォルト値の設定（Firestoreデータを優先、なければモック）
  const roundNumber = propRoundNumber ?? groupData?.round ?? 1;

  // 参加者ステータス管理
  const { participants: statusParticipants, updateMyStatus } =
    useParticipantStatus(draftId, roundNumber);

  // チャット機能
  const { messages } = useRealtimeChat(draftId, groupUsers);
  const { sendMessage } = useSendMessage();

  // 最近のグループとして保存（認証完了後）
  useEffect(() => {
    if (currentUser && groupData && !groupLoading) {
      saveRecentGroup({
        groupId: draftId,
        groupName: groupData.groupName || `ドラフト会議 ${draftId}`,
        lastJoined: Date.now(),
      });
    }
  }, [currentUser, groupData, groupLoading, draftId]);

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
        return;
      }

      try {
        // Firestoreに選択データを保存
        await saveUserSelection(
          currentUser.id || '',
          draftId,
          roundNumber,
          selection,
          comment || '',
        );

        setInternalCurrentUserSelection(selection);
      } catch (error) {
        // エラーの場合は内部状態のみ更新（フォールバック）
        setInternalCurrentUserSelection(selection);
      }
    });

  const handleSubmit = async () => {
    if (selection.trim() && currentUser) {
      // 選択を提出
      handleSubmitSelection(selection.trim(), comment.trim() || undefined);

      // ステータスを 'entered' に更新
      const success = await updateMyStatus(currentUser.id || '', 'entered');

      if (success) {
        setIsInputModalOpen(false);
        setSelection('');
        setComment('');
      }
    }
  };

  const handleRoundClick = (roundNumber: number) => {
    // 従来のラウンド全体クリック（必要に応じて削除可能）
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
    // 実際の実装では、ここでFirestoreに保存
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
    // 設定画面を開く（今後実装）
  };

  const handleOpenHelp = () => {
    // ヘルプ画面を開く（今後実装）
  };

  // チャット関連のハンドラー
  const handleSendMessage = async (message: string) => {
    if (!currentUser || !draftId) {
      return;
    }

    await sendMessage({
      groupId: draftId,
      userId: currentUser.id || '',
      message,
    });
  };

  // ローディング中（グループデータ取得中）
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

  // グループデータエラー
  if (groupError || !groupData) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Box fontSize="48px">❌</Box>
          <VStack gap={2} textAlign="center">
            <Text fontSize="xl" fontWeight="bold" color="red.500">
              ドラフト情報の取得に失敗
            </Text>
            <Text color="gray.500">
              {groupError || 'ドラフト情報を読み込めませんでした'}
            </Text>
          </VStack>
        </VStack>
      </Container>
    );
  }

  // currentUserは認証ガードで保証されているため、ここでは存在チェックのみ
  if (!currentUser) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Spinner size="lg" color="blue.500" />
          <Text color="gray.500">ユーザー情報を確認中...</Text>
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
          messages={messages.map((msg) => ({
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
            isMyMessage: msg.userId === currentUser?.id,
          }))}
          onSendMessage={handleSendMessage}
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
              isMyMessage: msg.userId === currentUser?.id,
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

/**
 * DraftPage - 認証ガード統合版
 * Firebase認証 + SessionUser管理による統合認証フローを提供
 */
export const DraftPage = (props: DraftPageProps) => {
  const params = useParams();
  const draftId = props.groupId ?? (params?.id as string);

  if (!draftId) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Box fontSize="48px">⚠️</Box>
          <Text fontSize="xl" fontWeight="bold" color="orange.500">
            グループIDが不正です
          </Text>
        </VStack>
      </Container>
    );
  }

  return (
    <DraftAuthGuard groupId={draftId}>
      <DraftPageContent {...props} />
    </DraftAuthGuard>
  );
};
