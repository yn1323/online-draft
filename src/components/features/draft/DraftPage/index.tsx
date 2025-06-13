'use client';

import {
  Center,
  Container,
  Grid,
  GridItem,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useSessionUser } from '../../../../hooks/auth/useSessionUser';
import { useDraftData } from '../../../../hooks/draft/useDraftData';
import { UserRoundDetailModal } from '../UserRoundDetailModal';
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
  groupName: propGroupName,
  participants: propParticipants,
  currentUserSelection: propCurrentUserSelection,
  onSubmitSelection: propOnSubmitSelection,
  pastRounds: propPastRounds,
  currentRoundTopic: propCurrentRoundTopic,
}: DraftPageProps = {}) => {
  // groupIdが渡されない場合はuseParamsから取得（後方互換性）
  const params = useParams();
  const draftId = groupId ?? (params?.id as string);

  // セッションユーザー情報
  const { sessionUser } = useSessionUser(draftId || '');
  const userId = sessionUser?.id;
  const userName = sessionUser?.name || 'ユーザー';
  const userAvatar = sessionUser?.avatar || '1';

  // Firestoreデータ統合（userIdがある場合に使用）
  const shouldUseFirestore = draftId && userId;
  const {
    rounds: firestoreRounds,
    currentRound: firestoreCurrentRound,
    currentRoundNumber: firestoreCurrentRoundNumber,
    participants: firestoreParticipants,
    loading: firestoreLoading,
    error: firestoreError,
  } = useDraftData({
    groupId: draftId || '',
    enableRealtime: !!shouldUseFirestore,
  });

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

  // データソースの決定（propsがある場合はprops優先、ない場合はFirestore）
  const roundNumber = propRoundNumber ?? firestoreCurrentRoundNumber ?? 3;
  const groupName = propGroupName ?? `ドラフト会議 ${draftId}`;

  // 参加者データの変換（UserDocument → 表示用形式）
  const displayParticipants =
    propParticipants ??
    (shouldUseFirestore
      ? firestoreParticipants.map((participant) => ({
          id: participant.userId || '',
          name: participant.userName,
          avatar: `/img/${participant.avatar}.png`,
          status: participant.status || 'thinking',
        }))
      : mockParticipants);

  const currentUserSelection =
    propCurrentUserSelection ?? internalCurrentUserSelection;

  // 過去ラウンドデータの変換（Round[] → 表示用形式）
  const displayPastRounds = useMemo(() => {
    if (propPastRounds) {
      return propPastRounds;
    }
    if (!shouldUseFirestore) {
      return mockPastRounds;
    }

    return firestoreRounds
      .filter((round) => round.status === 'completed')
      .map((round) => ({
        roundNumber: round.roundNumber,
        topic: round.topic,
        selections: [], // TODO: 選択データとの連携
      }));
  }, [propPastRounds, shouldUseFirestore, firestoreRounds]);

  const currentRoundTopic =
    propCurrentRoundTopic ?? (firestoreCurrentRound?.topic || '好きなゲーム');

  console.log('📍 DraftPage - 統合データ:', {
    draftId,
    shouldUseFirestore,
    roundNumber,
    participantsCount: displayParticipants.length,
    pastRoundsCount: displayPastRounds.length,
    loading: firestoreLoading,
    error: firestoreError,
  });

  // イベントハンドラーの設定
  const handleSubmitSelection =
    propOnSubmitSelection ??
    ((selection: string, comment?: string) => {
      console.log('選択:', selection, 'コメント:', comment);
      setInternalCurrentUserSelection(selection);
      // 実際の実装では、ここでFirestoreに保存
    });

  const handleSubmit = () => {
    if (selection.trim()) {
      handleSubmitSelection(selection.trim(), comment.trim() || undefined);
      setIsInputModalOpen(false);
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

  // 認証中の表示（モック表示防止）
  if (!userId && draftId) {
    return (
      <Container maxW="1600px" p={4} minH="100vh">
        <Center h="50vh">
          <VStack gap={4}>
            <Spinner size="xl" color="blue.500" />
            <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.300' }}>
              認証中...
            </Text>
          </VStack>
        </Center>
      </Container>
    );
  }

  // ローディング状態の表示
  if (shouldUseFirestore && firestoreLoading) {
    return (
      <Container maxW="1600px" p={4} minH="100vh">
        <Center h="50vh">
          <VStack gap={4}>
            <Spinner size="xl" color="green.500" />
            <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.300' }}>
              ドラフトデータを読み込み中...
            </Text>
          </VStack>
        </Center>
      </Container>
    );
  }

  // エラー状態の表示
  if (shouldUseFirestore && firestoreError) {
    return (
      <Container maxW="1600px" p={4} minH="100vh">
        <Center h="50vh">
          <VStack gap={4}>
            <Text fontSize="xl" color="red.500">
              ⚠️ エラーが発生しました
            </Text>
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
              {firestoreError}
            </Text>
          </VStack>
        </Center>
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
          participants={displayParticipants}
          pastRounds={displayPastRounds}
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
            participants={displayParticipants}
            pastRounds={displayPastRounds}
            onRoundClick={handleRoundClick}
            onUserClick={handleUserClick}
            onOpenInputModal={handleOpenInputModal}
          />
        </GridItem>

        {/* Right: Communication (35%) */}
        <GridItem>
          <ChatLogSection
            groupId={shouldUseFirestore ? draftId : undefined}
            userId={shouldUseFirestore ? userId : undefined}
            userName={shouldUseFirestore ? userName : undefined}
            userAvatar={shouldUseFirestore ? userAvatar : undefined}
            enableFirestore={!!shouldUseFirestore}
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
              displayParticipants.find(
                (p) => p.id === userRoundDetailModal.selectedUserId,
              ) || displayParticipants[0]
            }
            initialSelection={displayPastRounds
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
