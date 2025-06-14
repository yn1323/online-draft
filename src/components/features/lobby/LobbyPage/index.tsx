'use client';

import { Avatar } from '@/src/components/atoms/Avatar';
import { Button } from '@/src/components/atoms/Button';
import { Card } from '@/src/components/atoms/Card';
import {
  Box,
  Container,
  HStack,
  IconButton,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LuCopy } from 'react-icons/lu';

/**
 * ロビー画面コンポーネント
 * 参加者待機・ドラフト開始準備画面
 */
export const LobbyPage = () => {
  // モックデータ
  const mockParticipants = [
    { id: '1', name: '田中太郎', avatar: '1' },
    { id: '2', name: '山田花子', avatar: '3' },
    { id: '3', name: '佐藤次郎', avatar: '5' },
  ];

  const roomUrl = 'https://example.com/lobby/AbCdEfGhIjKlMnOpQrSt';

  return (
    <Box bg="gray.50" minH="100vh" py={[4, 8]}>
      <Container maxW="container.lg">
        <VStack gap={6}>
          {/* ヘッダー */}
          <Text fontSize={['xl', '2xl']} fontWeight="bold" color="gray.800">
            ドラフトルーム
          </Text>

          {/* ルーム情報カード */}
          <Card variant="elevated" size="md">
            <Box w="full">
              <VStack gap={4} align="stretch">
                <Text fontSize="lg" fontWeight="bold">
                  2025年プロ野球ドラフト会議
                </Text>

                {/* URL共有エリア */}
                <Box>
                  <Text fontSize="sm" color="gray.600" mb={2}>
                    このURLを友達にシェアしよう！
                  </Text>
                  <HStack>
                    <Text
                      fontSize="sm"
                      bg="gray.100"
                      p={2}
                      borderRadius="md"
                      flex={1}
                      truncate
                    >
                      {roomUrl}
                    </Text>
                    <IconButton
                      aria-label="URLをコピー"
                      bg="blue.400"
                      color="white"
                      size="sm"
                      _hover={{
                        bg: 'blue.500',
                      }}
                      _active={{
                        bg: 'blue.600',
                      }}
                    >
                      <LuCopy />
                    </IconButton>
                  </HStack>
                </Box>

                <Text fontSize={['xs', 'sm']} color="gray.500">
                  音声通話アプリ（LINE、Discord等）を併用してお楽しみください
                </Text>
              </VStack>
            </Box>
          </Card>

          {/* 参加者一覧カード */}
          <Card variant="elevated" size="md">
            <Box w="full">
              <HStack mb={4}>
                <Text fontWeight="bold" fontSize={['md', 'lg']}>
                  参加者 ({mockParticipants.length}人)
                </Text>
                <Spacer />
                <Text fontSize={['xs', 'sm']} color="gray.500">
                  最小2人から開始可能
                </Text>
              </HStack>
              <VStack gap={4} align="stretch">
                <SimpleGrid columns={[2, 3]} gap={4}>
                  {mockParticipants.map((participant) => (
                    <Box
                      key={participant.id}
                      p={4}
                      borderRadius="lg"
                      bg="white"
                      border="2px solid"
                      borderColor="gray.200"
                      cursor="pointer"
                      transition="all 0.15s"
                      _hover={{
                        borderColor: 'blue.400',
                        transform: 'translateY(-2px)',
                        boxShadow: 'md',
                      }}
                      _active={{
                        transform: 'translateY(0)',
                        boxShadow: 'sm',
                      }}
                    >
                      <HStack gap={3}>
                        <Avatar
                          avatarNumber={participant.avatar}
                          name={participant.name}
                          size="md"
                        />
                        <VStack align="start" gap={0}>
                          <Text fontSize={['xs', 'sm']} fontWeight="medium">
                            {participant.name}
                          </Text>
                          <Text fontSize="xs" color="green.500">
                            参加中
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                  ))}

                  {/* 空き枠表示 */}
                  {[...Array(8 - mockParticipants.length)].map((_, index) => (
                    <Box
                      key={`empty-${index}`}
                      p={4}
                      borderRadius="lg"
                      bg="gray.50"
                      border="2px dashed"
                      borderColor="gray.300"
                    >
                      <HStack gap={3}>
                        <Box
                          w="48px"
                          h="48px"
                          borderRadius="full"
                          bg="gray.200"
                        />
                        <Text fontSize={['xs', 'sm']} color="gray.400">
                          参加待ち...
                        </Text>
                      </HStack>
                    </Box>
                  ))}
                </SimpleGrid>

                <Box textAlign="center" pt={2}>
                  <Text
                    fontSize={['xs', 'sm']}
                    color="blue.500"
                    fontWeight="medium"
                  >
                    参加者をタップしてドラフトを開始
                  </Text>
                  <Text fontSize="xs" color="gray.500" mt={1}>
                    全員が揃ったら誰でも開始できます
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Card>

          {/* 退室ボタン */}
          <Button variant="outline" size="sm">
            ルームを退出
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
