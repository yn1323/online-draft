'use client';

import {
  Accordion,
  Box,
  HStack,
  Spacer,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Avatar } from '@/src/components/atoms/Avatar';
import { Button } from '@/src/components/atoms/Button';
import { Input } from '@/src/components/atoms/Input';

/**
 * ドラフト実行画面コンポーネント（スマホ版）
 * タブ形式でリストとチャットを切り替え
 */
export const DraftPage = () => {
  // モックデータ
  const mockParticipants = [
    {
      id: '1',
      name: '田中太郎',
      avatar: '1',
      acquisitions: [
        { name: '大谷翔平', comment: 'やっぱり二刀流！' },
        { name: '佐々木朗希', comment: '完全試合の実績' },
      ],
    },
    {
      id: '2',
      name: '山田花子',
      avatar: '3',
      acquisitions: [{ name: '山本由伸', comment: '最強のエース' }],
    },
    {
      id: '3',
      name: '佐藤次郎',
      avatar: '5',
      acquisitions: [],
    },
  ];

  const mockMessages = [
    {
      id: '1',
      userName: 'システム',
      avatar: '99',
      content: 'ドラフトを開始しました！',
      timestamp: '14:00',
      isSystem: true,
    },
    {
      id: '2',
      userName: '田中太郎',
      avatar: '1',
      content: '今年は投手中心でいきます！',
      timestamp: '14:01',
    },
    {
      id: '3',
      userName: 'システム',
      avatar: '99',
      content: '第1巡目が完了しました',
      timestamp: '14:05',
      isSystem: true,
    },
    {
      id: '4',
      userName: '山田花子',
      avatar: '3',
      content: '大谷取られた〜😭',
      timestamp: '14:05',
    },
  ];

  return (
    <VStack h="100vh" gap={0}>
      {/* ヘッダー（固定） */}
      <Box
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        p={4}
        w="full"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <HStack justify="space-between">
          <VStack align="start" gap={0}>
            <Text fontSize={["md", "lg"]} fontWeight="bold">
              第2巡目
            </Text>
            <Text fontSize={["xs", "sm"]} color="gray.500">
              入力状況: 1/3人
            </Text>
          </VStack>
          <Button size="sm" variant="ghost">
            参加者
          </Button>
        </HStack>
      </Box>

      {/* タブエリア */}
      <Tabs.Root
        defaultValue="list"
        flex={1}
        display="flex"
        flexDirection="column"
        w="full"
      >
        <Tabs.List>
          <Tabs.Trigger value="list" flex={1}>
            取得リスト
          </Tabs.Trigger>
          <Tabs.Trigger value="chat" flex={1}>
            チャット
          </Tabs.Trigger>
        </Tabs.List>

        <Box flex={1} overflow="hidden">
          {/* 取得済みリストタブ */}
          <Tabs.Content value="list" h="full" overflow="auto" p={4}>
            <Accordion.Root multiple>
              {mockParticipants.map((participant) => (
                <Accordion.Item key={participant.id} value={participant.id}>
                  <Accordion.ItemTrigger>
                    <HStack flex={1}>
                      <Avatar
                        avatarNumber={participant.avatar}
                        name={participant.name}
                        size="xs"
                      />
                      <Text fontSize={["sm", "md"]}>{participant.name}</Text>
                      <Spacer />
                      <Text fontSize={["xs", "sm"]} color="gray.500">
                        ({participant.acquisitions.length}/5)
                      </Text>
                    </HStack>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent pb={4}>
                    {participant.acquisitions.length > 0 ? (
                      <VStack align="start" gap={2}>
                        {participant.acquisitions.map((item, index) => (
                          <Box key={index}>
                            <HStack>
                              <Text fontSize="sm">🏆</Text>
                              <Text fontSize="sm" fontWeight="medium">
                                {item.name}
                              </Text>
                            </HStack>
                            {item.comment && (
                              <Text fontSize="xs" color="gray.600" ml={6}>
                                {item.comment}
                              </Text>
                            )}
                          </Box>
                        ))}
                      </VStack>
                    ) : (
                      <Text fontSize="sm" color="gray.500">
                        まだ獲得なし
                      </Text>
                    )}
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Tabs.Content>

          {/* チャット・ログタブ */}
          <Tabs.Content value="chat" h="full" overflow="auto" p={4}>
            <VStack gap={3} align="stretch">
              {mockMessages.map((msg) => (
                <HStack key={msg.id} align="start">
                  <Avatar
                    avatarNumber={msg.avatar}
                    name={msg.userName}
                    size="xs"
                  />
                  <VStack align="start" gap={0} flex={1}>
                    <HStack>
                      <Text 
                        fontSize="xs" 
                        fontWeight="medium"
                        color={msg.isSystem ? 'orange.600' : 'gray.700'}
                      >
                        {msg.userName}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {msg.timestamp}
                      </Text>
                    </HStack>
                    <Text 
                      fontSize={["xs", "sm"]}
                      color={msg.isSystem ? 'orange.700' : 'gray.800'}
                    >
                      {msg.content}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

      {/* 入力エリア（固定） */}
      <Box
        bg="white"
        borderTop="1px"
        borderColor="gray.200"
        p={4}
        w="full"
        position="sticky"
        bottom={0}
      >
        <VStack gap={3}>
          <HStack w="full">
            <Input 
              placeholder="選択したいアイテム" 
              size="md" 
            />
            <Button
              variant="primary"
              size="md"
            >
              送信
            </Button>
          </HStack>
          <Input 
            placeholder="コメント（選択理由など）" 
            size="sm" 
          />
        </VStack>
      </Box>
    </VStack>
  );
};
