'use client';

import { Box, Text } from '@chakra-ui/react';

export default function JoinHint() {
  return (
    <Box
      p={3}
      bg="blue.50"
      _dark={{ bg: 'blue.900/10' }}
      borderRadius="md"
      borderLeft="3px solid"
      borderColor="blue.400"
    >
      <Text fontSize="sm" color="blue.700" _dark={{ color: 'blue.200' }}>
        💡 主催者から参加コードか招待リンクをもらってください
      </Text>
    </Box>
  );
}
