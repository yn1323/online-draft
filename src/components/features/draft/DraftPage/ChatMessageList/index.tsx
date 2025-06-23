import { Avatar } from '@/src/components/atoms/Avatar';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import type { ChatMessageType } from '../mockData';

type ChatMessageListProps = {
  messages: ChatMessageType[];
};

/**
 * チャットメッセージ一覧を表示する共通コンポーネント
 * 見やすいボックススタイルで統一
 */
export const ChatMessageList = ({ messages }: ChatMessageListProps) => {
  return (
    <VStack gap={3} align="stretch">
      {messages.map((message) => {
        const content = message.content;

        // 統一ボックススタイル（旧PC版デザイン）
        return (
          <HStack key={message.id} align="start" gap={2}>
            <Avatar
              avatarNumber={message.avatar}
              name={message.userName}
              size="xs"
            />
            <Box
              p={3}
              borderRadius="lg"
              bg={message.isSystem ? 'orange.50' : 'gray.50'}
              border="1px solid"
              borderColor={message.isSystem ? 'orange.200' : 'gray.200'}
              flex={1}
            >
              <HStack>
                <Text
                  fontSize="xs"
                  color={message.isSystem ? 'orange.600' : 'gray.700'}
                  fontWeight="bold"
                >
                  {message.userName}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {message.timestamp}
                </Text>
              </HStack>
              <Text
                fontSize={['xs', 'sm']}
                color={message.isSystem ? 'orange.800' : 'gray.800'}
                mt={1}
              >
                {content}
              </Text>
            </Box>
          </HStack>
        );
      })}
    </VStack>
  );
};
