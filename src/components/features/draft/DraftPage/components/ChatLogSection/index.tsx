import { Box, Text, VStack } from '@chakra-ui/react';
import { LogItem, type LogMessage } from './LogItem';
import { MessageInput } from './MessageInput';
import { mockLogs } from './mocks';

interface ChatLogSectionProps {
  logs?: LogMessage[];
  onSendMessage?: (message: string) => void;
}

export const ChatLogSection = ({
  logs = mockLogs,
  onSendMessage,
}: ChatLogSectionProps = {}) => {
  return (
    <Box
      p={4}
      borderRadius="lg"
      bgGradient="linear(to-br, gray.50, blue.50)"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 4px 15px -3px rgba(0, 0, 0, 0.1)"
      h={{ base: 'auto', lg: '400px' }}
      display="flex"
      flexDirection="column"
      _dark={{
        bgGradient: 'linear(to-br, gray.800/60, blue.900/40)',
        borderColor: 'gray.600',
        boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        mb={4}
        color="gray.700"
        flexShrink={0}
        _dark={{ color: 'gray.300' }}
      >
        💬 ログ・コメント
      </Text>

      <Box
        flex={1}
        overflowY="auto"
        bg="white"
        borderRadius="md"
        border="1px solid"
        borderColor="gray.200"
        p={4}
        mb={3}
        minH={0}
        _dark={{
          bg: 'gray.700',
          borderColor: 'gray.500',
        }}
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            bg: 'gray.100',
          },
          '&::-webkit-scrollbar-thumb': {
            bg: 'gray.300',
            borderRadius: '999px',
          },
        }}
      >
        <VStack gap={0} align="stretch">
          {logs.map((log) => (
            <LogItem key={log.id} log={log} />
          ))}
        </VStack>
      </Box>

      <Box flexShrink={0}>
        <MessageInput onSendMessage={onSendMessage} />
      </Box>
    </Box>
  );
};
