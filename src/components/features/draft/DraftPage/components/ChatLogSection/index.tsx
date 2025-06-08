import { Box, Text, VStack } from '@chakra-ui/react';

export const ChatLogSection = () => {
  return (
    <Box
      p={4}
      borderRadius="lg"
      bgGradient="linear(to-br, gray.50, blue.50)"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 4px 15px -3px rgba(0, 0, 0, 0.1)"
      _dark={{
        bgGradient: 'linear(to-br, gray.800/60, blue.900/40)',
        borderColor: 'gray.600',
        boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Text fontSize="lg" fontWeight="bold" mb={4} color="gray.700" _dark={{ color: 'gray.300' }}>
        💬 ログ・コメント
      </Text>
      <Box
        h="200px"
        overflowY="auto"
        bg="white"
        borderRadius="md"
        border="1px solid"
        borderColor="gray.200"
        p={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        _dark={{
          bg: 'gray.800',
          borderColor: 'gray.600',
        }}
      >
        <VStack gap={2}>
          <Text fontSize="sm" color="gray.500" textAlign="center" _dark={{ color: 'gray.400' }}>
            📝 コメントやログがここに表示されます
          </Text>
          <Text fontSize="sm" color="gray.500" textAlign="center" _dark={{ color: 'gray.400' }}>
            （チャット機能は後で実装予定）
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};