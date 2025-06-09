import { Flex, Text } from '@chakra-ui/react';

interface DraftHeaderProps {
  roundNumber: number;
  totalRounds: number;
  groupName: string;
}

export const DraftHeader = ({
  roundNumber,
  totalRounds,
  groupName,
}: DraftHeaderProps) => {
  return (
    <Flex justify="space-between" align="center" mb={6}>
      <Text fontSize="lg" fontWeight="bold" _dark={{ color: 'white' }}>
        Round {roundNumber}/{totalRounds}
      </Text>
      <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
        {groupName}
      </Text>
    </Flex>
  );
};
