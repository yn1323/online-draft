import { Box, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import { SelectionButton } from '../../actions/SelectionButton';
import { CurrentRoundRow } from '../CurrentRoundRow';
import { PastRoundRow } from '../PastRoundRow';

interface RoundHistoryTableProps {
  roundNumber: number;
  participants: {
    id: string;
    name: string;
    avatar: string;
    status: 'thinking' | 'entered' | 'completed';
  }[];
  pastRounds: {
    roundNumber: number;
    topic: string;
    selections: {
      userId: string;
      userName: string;
      item: string;
      comment?: string;
    }[];
  }[];
  onRoundClick: (roundNumber: number) => void;
  onUserClick: (roundNumber: number, userId: string) => void;
  onOpenInputModal: () => void;
}

export const RoundHistoryTable = ({
  roundNumber,
  participants,
  pastRounds,
  onRoundClick,
  onUserClick,
  onOpenInputModal,
}: RoundHistoryTableProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // SP版折りたたみ状態管理（最新2ラウンドのみデフォルト展開）
  const [expandedRounds, setExpandedRounds] = useState<Set<number>>(() => {
    if (pastRounds.length === 0) {
      return new Set();
    }
    const latestRounds = pastRounds
      .slice(-2) // 最新2ラウンド
      .map((round) => round.roundNumber);
    return new Set(latestRounds);
  });

  // 折りたたみトグル関数
  const toggleRound = (roundNumber: number) => {
    setExpandedRounds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(roundNumber)) {
        newSet.delete(roundNumber);
      } else {
        newSet.add(roundNumber);
      }
      return newSet;
    });
  };
  return (
    <Box
      p={{ base: 4, md: 5, lg: 6 }}
      borderRadius="xl"
      bgGradient="linear(135deg, green.50, teal.50)"
      border="2px solid"
      borderColor="green.300"
      boxShadow="0 10px 30px -10px rgba(34, 197, 94, 0.25)"
      position="relative"
      overflow="hidden"
      _dark={{
        bgGradient: 'linear(135deg, green.900/40, teal.900/40)',
        borderColor: 'green.600',
        boxShadow:
          '0 0 30px rgba(34, 197, 94, 0.3), 0 0 60px rgba(34, 197, 94, 0.1)',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        bgGradient: 'linear(to-r, green.400, teal.400, green.400)',
        _dark: {
          bgGradient: 'linear(to-r, green.300, teal.300, green.300)',
        },
      }}
    >
      {/* Header with Action Button */}
      <Box position="relative" mb={{ base: 4, md: 5, lg: 6 }}>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="bold"
          color="green.700"
          _dark={{ color: 'green.200' }}
        >
          📊 ラウンド ({pastRounds.length})
        </Text>

        {/* Selection Button - PC Only, positioned absolutely */}
        <Box
          position="absolute"
          top="-8px"
          right={0}
          display={{ base: 'none', lg: 'block' }}
          zIndex={2}
        >
          <SelectionButton onClick={onOpenInputModal} />
        </Box>
      </Box>
      <VStack gap={4} align="stretch">
        {/* Current Round Row - 常に表示 */}
        <CurrentRoundRow
          roundNumber={roundNumber}
          participants={participants}
        />

        {/* Past Rounds */}
        {pastRounds.length === 0 ? (
          <Box
            p={8}
            textAlign="center"
            bg="white"
            borderRadius="lg"
            border="2px dashed"
            borderColor="green.300"
            opacity={0.8}
            _dark={{
              bg: 'gray.800',
              borderColor: 'green.600',
              opacity: 0.9,
            }}
          >
            <Text
              fontSize="md"
              color="green.500"
              fontWeight="medium"
              _dark={{ color: 'green.300' }}
            >
              📝 ラウンドがまだ開始されていません
            </Text>
            <Text
              fontSize="sm"
              color="green.400"
              mt={2}
              _dark={{ color: 'green.400' }}
            >
              ラウンドが開始されると、各ラウンドの情報が表示されます
            </Text>
          </Box>
        ) : (
          pastRounds.map((round) => (
            <PastRoundRow
              key={round.roundNumber}
              round={round}
              participants={participants}
              onRoundClick={onRoundClick}
              onUserClick={onUserClick}
              isExpanded={
                isMobile ? expandedRounds.has(round.roundNumber) : true
              }
              onToggleExpand={
                isMobile ? () => toggleRound(round.roundNumber) : undefined
              }
            />
          ))
        )}
      </VStack>
    </Box>
  );
};
