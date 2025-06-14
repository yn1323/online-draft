'use client';

import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';

/**
 * ドラフト実行画面コンポーネント（PC版）
 * 2カラムレイアウト: 左側にドラフトリスト、右側にチャット
 */
export const DraftPagePC = () => {
  // モックデータ
  const mockParticipants = [
    { id: '1', name: '田中太郎', avatar: '1', currentPick: 'トラウト (外野手)' },
    { id: '2', name: '山田花子', avatar: '3', currentPick: '大谷翔平 (投手)' },
    { id: '3', name: '佐藤次郎', avatar: '5', currentPick: '投手を選択中...' },
  ];

  const mockChatMessages = [
    {
      id: '1',
      userName: '田中太郎',
      message: 'トラウト指名！',
      timestamp: '14:32',
    },
    {
      id: '2',
      userName: '山田花子',
      message: '大谷で行きます！',
      timestamp: '14:35',
    },
    {
      id: '3',
      userName: 'システム',
      message: '佐藤次郎さんの選択中です（1分30秒）',
      timestamp: '14:38',
      isSystem: true,
    },
  ];

  return (
    <Box bg="gray.50" minH="100vh" py={[4, 8]}>
      <Container maxW="container.xl">
        {/* ヘッダー */}
        <HStack mb={6}>
          <Text fontSize="2xl" fontWeight="bold" color="gray.800">
            2025年プロ野球ドラフト会議
          </Text>
          <Spacer />
          <Text fontSize="lg" color="blue.600" fontWeight="medium">
            Round 1 / 12
          </Text>
        </HStack>

        <Grid templateColumns="2fr 1fr" gap={6} h="calc(100vh - 200px)">
          {/* 左側: ドラフトリスト */}
          <GridItem>
            <Card.Root h="full">
              <Card.Header>
                <Text fontSize="lg" fontWeight="bold">
                  参加者とドラフト状況
                </Text>
              </Card.Header>
              <Card.Body overflow="auto">
                <VStack gap={4} align="stretch">
                  {mockParticipants.map((participant, index) => (
                    <Box
                      key={participant.id}
                      p={4}
                      borderRadius="lg"
                      bg={index === 2 ? 'blue.50' : 'white'}
                      border="2px solid"
                      borderColor={index === 2 ? 'blue.300' : 'gray.200'}
                      transition="all 0.15s"
                    >
                      <HStack gap={4}>
                        <Avatar.Root size="lg">
                          <Avatar.Image src={`/img/${participant.avatar}.png`} />
                          <Avatar.Fallback>
                            {participant.name.charAt(0)}
                          </Avatar.Fallback>
                        </Avatar.Root>

                        <VStack align="start" flex={1} gap={1}>
                          <HStack>
                            <Text fontWeight="bold" fontSize="lg">
                              {participant.name}
                            </Text>
                            {index === 2 && (
                              <Box
                                bg="blue.400"
                                color="white"
                                px={3}
                                py={1}
                                borderRadius="full"
                                fontSize="xs"
                                fontWeight="bold"
                              >
                                選択中
                              </Box>
                            )}
                          </HStack>
                          <Text
                            color={index === 2 ? 'blue.600' : 'gray.600'}
                            fontSize="md"
                          >
                            {participant.currentPick}
                          </Text>
                        </VStack>

                        <VStack align="end" gap={1}>
                          <Text fontSize="sm" color="gray.500">
                            順番 #{index + 1}
                          </Text>
                          {index === 2 && (
                            <Text
                              fontSize="sm"
                              color="orange.500"
                              fontWeight="medium"
                            >
                              残り 1:30
                            </Text>
                          )}
                        </VStack>
                      </HStack>
                    </Box>
                  ))}

                  {/* 選択中プレイヤーのアクション */}
                  <Box
                    p={4}
                    bg="blue.100"
                    borderRadius="lg"
                    border="2px dashed"
                    borderColor="blue.300"
                  >
                    <VStack gap={3}>
                      <Text
                        fontWeight="bold"
                        color="blue.800"
                        textAlign="center"
                      >
                        あなたの選択順です！
                      </Text>
                      <HStack w="full">
                        <Input
                          placeholder="選手名を入力..."
                          bg="white"
                          size="lg"
                          _placeholder={{ color: 'gray.400' }}
                        />
                        <Button
                          bg="blue.400"
                          color="white"
                          size="lg"
                          px={8}
                          _hover={{
                            bg: 'blue.500',
                          }}
                          _active={{
                            bg: 'blue.600',
                          }}
                        >
                          決定
                        </Button>
                      </HStack>
                    </VStack>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>
          </GridItem>

          {/* 右側: チャット */}
          <GridItem>
            <Card.Root h="full" display="flex" flexDirection="column">
              <Card.Header>
                <Text fontSize="lg" fontWeight="bold">
                  チャット
                </Text>
              </Card.Header>
              <Card.Body flex="1" overflow="auto">
                <VStack gap={3} align="stretch" h="full">
                  <Box flex="1" overflow="auto">
                    <VStack gap={3} align="stretch">
                      {mockChatMessages.map((message) => (
                        <Box
                          key={message.id}
                          p={3}
                          borderRadius="lg"
                          bg={message.isSystem ? 'yellow.50' : 'gray.50'}
                          border="1px solid"
                          borderColor={
                            message.isSystem ? 'yellow.200' : 'gray.200'
                          }
                        >
                          <HStack align="start" gap={2}>
                            <Text
                              fontSize="xs"
                              color={
                                message.isSystem ? 'yellow.600' : 'blue.600'
                              }
                              fontWeight="bold"
                              minWidth="fit-content"
                            >
                              {message.userName}
                            </Text>
                            <Text
                              fontSize="xs"
                              color="gray.500"
                              minWidth="fit-content"
                            >
                              {message.timestamp}
                            </Text>
                          </HStack>
                          <Text
                            fontSize="sm"
                            color={message.isSystem ? 'yellow.800' : 'gray.800'}
                            mt={1}
                          >
                            {message.message}
                          </Text>
                        </Box>
                      ))}
                    </VStack>
                  </Box>

                  {/* チャット入力エリア */}
                  <Box pt={3} borderTop="1px solid" borderColor="gray.200">
                    <HStack>
                      <Input
                        placeholder="メッセージを入力..."
                        size="sm"
                        bg="white"
                        _placeholder={{ color: 'gray.400' }}
                      />
                      <Button
                        bg="green.400"
                        color="white"
                        size="sm"
                        px={4}
                        _hover={{
                          bg: 'green.500',
                        }}
                        _active={{
                          bg: 'green.600',
                        }}
                      >
                        送信
                      </Button>
                    </HStack>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};