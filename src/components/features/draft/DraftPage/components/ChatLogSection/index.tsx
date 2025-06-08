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
      p={{ base: 4, md: 5, lg: 6 }}
      borderRadius="xl"
      bgGradient="linear(135deg, blue.50, cyan.50)"
      border="2px solid"
      borderColor="blue.300"
      boxShadow="0 10px 30px -10px rgba(59, 130, 246, 0.25)"
      h={{ 
        base: 'calc(100vh - 140px)', 
        md: 'calc(100vh - 150px)',
        lg: 'calc(100vh - 160px)' 
      }}
      minH={{ base: '350px', md: '450px', lg: '500px' }}
      display="flex"
      flexDirection="column"
      position="relative"
      overflow="hidden"
      _dark={{
        bgGradient: 'linear(135deg, blue.900/40, cyan.900/40)',
        borderColor: 'blue.600',
        boxShadow: '0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        bgGradient: 'linear(to-r, blue.400, cyan.400, blue.400)',
        _dark: {
          bgGradient: 'linear(to-r, blue.300, cyan.300, blue.300)',
        },
      }}
    >
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        fontWeight="bold"
        mb={{ base: 4, md: 5, lg: 6 }}
        color="blue.700"
        flexShrink={0}
        _dark={{ color: 'blue.200' }}
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
        p={{ base: 3, md: 4 }}
        mb={{ base: 2, md: 3 }}
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
