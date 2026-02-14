import { Avatar } from '@/src/components/atoms/Avatar';
import {
  chatsAtom,
  currentUserIdAtom,
  usersAtom,
} from '@/src/components/features/draft/states';
import type { ChatMessageUIType } from '@/src/hooks/firebase/chat/useRealtimeChat';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { atom, useAtomValue } from 'jotai';
import { useTranslations } from 'next-intl';

/**
 * チャットメッセージをUI表示用に変換するAtom
 */
const chatMessageUIAtom = atom<ChatMessageUIType[]>((get) => {
  const chats = get(chatsAtom);
  const users = get(usersAtom);
  const currentUserId = get(currentUserIdAtom);

  return chats.map((chat) => {
    const user = users.find((u) => u.id === chat.userId);
    const isCurrentUser = chat.userId === currentUserId;
    const isSystem = chat.userId === 'system';

    // biome-ignore lint/suspicious/noExplicitAny: tmp
    const date = new Date(chat.date as any);
    const formatted = dayjs(date).format('MM/DD HH:mm');

    return {
      id: `${chat.userId}-${Math.random()}`,
      userName: isSystem ? '' : (user?.name ?? ''),
      avatar: isSystem ? '99' : (user?.avatar ?? '1'),
      content: chat.message,
      timestamp: formatted,
      isCurrentUser,
      isSystem,
    };
  });
});

/**
 * チャットメッセージ一覧を表示する共通コンポーネント
 * 見やすいボックススタイルで統一
 */
export const ChatMessageList = () => {
  const t = useTranslations('draft');
  // Atomから派生したUIメッセージを取得（propsのmessagesよりも優先）
  const chatMessages = useAtomValue(chatMessageUIAtom);

  return (
    <VStack gap={3} align="stretch">
      {chatMessages.map((message) => {
        const content = message.content;
        const isCurrentUser = message.isCurrentUser || false;
        const isSystem = message.isSystem || false;
        const displayName = isSystem ? t('chat.systemLog') : message.userName;

        // 常に[左要素, メッセージボックス, 右要素]の3要素構造
        return (
          <HStack key={message.id} align="start" gap={2} w="full">
            {/* 左要素: 他人の場合はアバター、自分の場合は空のスペーサー */}
            {isCurrentUser ? (
              <Box w="32px" flexShrink={0} /> // Avatar size="xs"と同じ幅のスペーサー
            ) : (
              <Avatar
                avatarNumber={message.avatar}
                name={message.userName}
                size="xs"
              />
            )}

            {/* 中央: メッセージボックス（残りの幅を全て使用） */}
            <Box
              p={3}
              borderRadius="lg"
              bg={
                isSystem ? 'orange.50' : isCurrentUser ? 'blue.50' : 'gray.50'
              }
              border="1px solid"
              borderColor={
                isSystem
                  ? 'orange.200'
                  : isCurrentUser
                    ? 'blue.200'
                    : 'gray.200'
              }
              flex={1}
            >
              <HStack>
                <Text
                  fontSize="xs"
                  color={
                    isSystem
                      ? 'orange.600'
                      : isCurrentUser
                        ? 'blue.700'
                        : 'gray.700'
                  }
                  fontWeight="bold"
                >
                  {displayName}
                </Text>
                <Text fontSize="2xs" color="gray.700">
                  {message.timestamp}
                </Text>
              </HStack>
              <Text
                fontSize={['xs', 'sm']}
                color={
                  isSystem
                    ? 'orange.800'
                    : isCurrentUser
                      ? 'blue.800'
                      : 'gray.800'
                }
                mt={1}
              >
                {content}
              </Text>
            </Box>

            {/* 右要素: 自分の場合はアバター、他人の場合は空のスペーサー */}
            {isCurrentUser ? (
              <Avatar
                avatarNumber={message.avatar}
                name={message.userName}
                size="xs"
              />
            ) : (
              <Box w="32px" flexShrink={0} /> // Avatar size="xs"と同じ幅のスペーサー
            )}
          </HStack>
        );
      })}
    </VStack>
  );
};
