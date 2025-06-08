'use client';

import { RoundDetailModal } from '../RoundDetailModal';
import { Container, Grid, GridItem, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { mockParticipants, mockPastRounds } from './mocks';
import { DraftHeader } from './components/DraftHeader';
import { RoundHistoryTable } from './components/RoundHistoryTable';
import { ChatLogSection } from './components/ChatLogSection';
import { ActionPanel } from './components/ActionPanel';
import { InputModal } from './components/InputModal';
import { TabNavigation } from './components/TabNavigation';
import { FloatingActionButton } from './components/FloatingActionButton';

interface DraftPageProps {
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
  onUpdateSelections?: (roundNumber: number, selections: {
    userId: string;
    userName: string;
    item: string;
    comment?: string;
  }[]) => void;
}

export const DraftPage = ({
  roundNumber: propRoundNumber,
  totalRounds: propTotalRounds,
  groupName: propGroupName,
  participants: propParticipants,
  currentUserSelection: propCurrentUserSelection,
  onSubmitSelection: propOnSubmitSelection,
  pastRounds: propPastRounds,
  currentRoundTopic: propCurrentRoundTopic,
  onUpdateSelections: propOnUpdateSelections,
}: DraftPageProps = {}) => {
  // useParamsでルートパラメータを取得
  const params = useParams();
  const draftId = params?.id as string;

  // 内部状態の初期化
  const [internalCurrentUserSelection, setInternalCurrentUserSelection] = useState('');
  const [selection, setSelection] = useState('');
  const [comment, setComment] = useState('');
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [roundDetailModal, setRoundDetailModal] = useState<{
    isOpen: boolean;
    selectedRound: number | null;
  }>({
    isOpen: false,
    selectedRound: null,
  });

  // デフォルト値の設定（propsがある場合はpropsを優先、ない場合はモックとuseParamsを使用）
  const roundNumber = propRoundNumber ?? 3;
  const totalRounds = propTotalRounds ?? 5;
  const groupName = propGroupName ?? `ドラフト会議 ${draftId}`;
  const participants = propParticipants ?? mockParticipants;
  const currentUserSelection = propCurrentUserSelection ?? internalCurrentUserSelection;
  const pastRounds = propPastRounds ?? mockPastRounds;
  const currentRoundTopic = propCurrentRoundTopic ?? '好きなゲーム';

  // イベントハンドラーの設定
  const handleSubmitSelection = propOnSubmitSelection ?? ((selection: string, comment?: string) => {
    console.log('選択:', selection, 'コメント:', comment);
    setInternalCurrentUserSelection(selection);
    // 実際の実装では、ここでFirestoreに保存
  });

  const handleUpdateSelections = propOnUpdateSelections ?? ((roundNumber: number, selections: {
    userId: string;
    userName: string;
    item: string;
    comment?: string;
  }[]) => {
    console.log('ラウンド', roundNumber, 'の選択を更新:', selections);
    // 実際の実装では、ここでFirestoreに保存
    // 今回はコンソールログのみ
  });

  const handleSubmit = () => {
    if (selection.trim()) {
      handleSubmitSelection(selection.trim(), comment.trim() || undefined);
      setIsInputModalOpen(false);
    }
  };

  const handleRoundClick = (roundNumber: number) => {
    setRoundDetailModal({
      isOpen: true,
      selectedRound: roundNumber,
    });
  };

  const handleCloseRoundDetail = () => {
    setRoundDetailModal({
      isOpen: false,
      selectedRound: null,
    });
  };

  const handleSaveSelections = (roundNumber: number, selections: {
    userId: string;
    userName: string;
    item: string;
    comment?: string;
  }[]) => {
    handleUpdateSelections(roundNumber, selections);
  };

  const handleOpenInputModal = () => {
    setSelection(currentUserSelection);
    setIsInputModalOpen(true);
  };

  return (
    <Container 
      maxW="1600px" 
      p={4} 
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
      <DraftHeader 
        roundNumber={roundNumber}
        totalRounds={totalRounds}
        groupName={groupName}
      />

      {/* Main Layout - Responsive Design */}
      {/* Mobile: Tab Navigation */}
      <VStack 
        gap={6} 
        align="stretch" 
        display={{ base: 'flex', lg: 'none' }}
      >
        <TabNavigation
          roundNumber={roundNumber}
          participants={participants}
          pastRounds={pastRounds}
          onRoundClick={handleRoundClick}
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
            onOpenInputModal={handleOpenInputModal}
          />
        </GridItem>

        {/* Right: Communication (35%) */}
        <GridItem>
          <ChatLogSection />
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

      {/* Round Detail Modal */}
      <RoundDetailModal
        isOpen={roundDetailModal.isOpen}
        onClose={handleCloseRoundDetail}
        roundData={roundDetailModal.selectedRound ? pastRounds.find(r => r.roundNumber === roundDetailModal.selectedRound) || null : null}
        participants={participants}
        onSaveSelections={handleSaveSelections}
      />

      {/* Floating Action Button - Mobile Only */}
      <FloatingActionButton onClick={handleOpenInputModal} />
    </Container>
  );
};