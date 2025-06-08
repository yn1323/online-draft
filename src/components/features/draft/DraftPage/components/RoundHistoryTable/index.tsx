import { Box, Text, VStack } from '@chakra-ui/react';
import { CurrentRoundRow } from '../CurrentRoundRow';
import { PastRoundRow } from '../PastRoundRow';
import { SelectionButton } from '../SelectionButton';

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
  onOpenInputModal: () => void;
}

export const RoundHistoryTable = ({ 
  roundNumber, 
  participants, 
  pastRounds, 
  onRoundClick,
  onOpenInputModal
}: RoundHistoryTableProps) => {
  return (
    <Box
      p={{ base: 4, md: 5, lg: 6 }}
      borderRadius="xl"
      bgGradient="linear(135deg, purple.50, pink.50)"
      border="2px solid"
      borderColor="purple.300"
      boxShadow="0 10px 30px -10px rgba(128, 90, 213, 0.25)"
      position="relative"
      overflow="hidden"
      _dark={{
        bgGradient: 'linear(135deg, purple.900/40, pink.900/40)',
        borderColor: 'purple.600',
        boxShadow: '0 0 30px rgba(168, 85, 247, 0.3), 0 0 60px rgba(168, 85, 247, 0.1)',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        bgGradient: 'linear(to-r, purple.400, pink.400, purple.400)',
        _dark: {
          bgGradient: 'linear(to-r, purple.300, pink.300, purple.300)',
        },
      }}
    >
      {/* Header with Action Button */}
      <Box position="relative" mb={{ base: 4, md: 5, lg: 6 }}>
        <Text 
          fontSize={{ base: 'lg', md: 'xl' }} 
          fontWeight="bold" 
          color="purple.700" 
          _dark={{ color: 'purple.200' }}
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
      {pastRounds.length === 0 ? (
        <Box
          p={8}
          textAlign="center"
          bg="white"
          borderRadius="lg"
          border="2px dashed"
          borderColor="purple.300"
          opacity={0.8}
          _dark={{
            bg: 'gray.800',
            borderColor: 'purple.600',
            opacity: 0.9,
          }}
        >
          <Text fontSize="md" color="purple.500" fontWeight="medium" _dark={{ color: 'purple.300' }}>
            📝 ラウンドがまだ開始されていません
          </Text>
          <Text fontSize="sm" color="purple.400" mt={2} _dark={{ color: 'purple.400' }}>
            ラウンドが開始されると、各ラウンドの情報が表示されます
          </Text>
        </Box>
      ) : (
        <VStack gap={4} align="stretch">
          {/* Current Round Row */}
          <CurrentRoundRow roundNumber={roundNumber} participants={participants} />

          {/* Past Rounds */}
          {pastRounds.map((round) => (
            <PastRoundRow
              key={round.roundNumber}
              round={round}
              participants={participants}
              onRoundClick={onRoundClick}
            />
          ))}
        </VStack>
      )}
    </Box>
  );
};