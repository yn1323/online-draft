import { Grid, Flex, Text, Box, VStack } from '@chakra-ui/react';

interface PastRoundRowProps {
  round: {
    roundNumber: number;
    topic: string;
    selections: {
      userId: string;
      userName: string;
      item: string;
      comment?: string;
    }[];
  };
  participants: {
    id: string;
    name: string;
    avatar: string;
    status: 'thinking' | 'entered' | 'completed';
  }[];
  onRoundClick: (roundNumber: number) => void;
}

export const PastRoundRow = ({ round, participants, onRoundClick }: PastRoundRowProps) => {
  return (
    <Grid
      templateColumns={`60px repeat(${participants.length}, 1fr)`}
      gap={3}
      p={3}
      bg="white"
      border="1px solid"
      borderColor="purple.200"
      borderRadius="lg"
      transition="all 0.2s ease"
      cursor="pointer"
      onClick={() => onRoundClick(round.roundNumber)}
      _hover={{ 
        bg: 'purple.50',
        borderColor: 'purple.300',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px -4px rgba(128, 90, 213, 0.15)'
      }}
      _dark={{
        bg: 'gray.800/80',
        borderColor: 'purple.700',
        _hover: {
          bg: 'purple.900/40',
          borderColor: 'purple.600',
          boxShadow: '0 4px 12px -4px rgba(168, 85, 247, 0.25)',
        },
      }}
      alignItems="center"
    >
      <Flex align="center" justify="center" h="full">
        <Text
          fontWeight="bold"
          color="purple.800"
          fontSize="lg"
          _dark={{ color: 'purple.200' }}
        >
          {round.roundNumber}
        </Text>
      </Flex>
      {participants.map((participant) => {
        const selection = round.selections.find(
          (s) => s.userId === participant.id,
        );
        return (
          <Box
            key={participant.id}
            textAlign="center"
            px={1}
          >
            {selection ? (
              <VStack gap={0.5}>
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  color="gray.800"
                  lineHeight="1.2"
                  _dark={{ color: 'gray.200' }}
                >
                  {selection.item}
                </Text>
                {selection.comment && (
                  <Text
                    fontSize="xs"
                    color="purple.600"
                    fontStyle="italic"
                    lineHeight="1.2"
                    _dark={{ color: 'purple.300' }}
                  >
                    💬{' '}
                    {selection.comment.length > 8
                      ? `${selection.comment.slice(0, 8)}...`
                      : selection.comment}
                  </Text>
                )}
              </VStack>
            ) : (
              <Text
                fontSize="sm"
                color="gray.400"
                fontWeight="medium"
                _dark={{ color: 'gray.500' }}
              >
                未参加
              </Text>
            )}
          </Box>
        );
      })}
    </Grid>
  );
};