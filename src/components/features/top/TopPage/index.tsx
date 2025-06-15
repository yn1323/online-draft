'use client';

import { Button } from '@/src/components/atoms/Button';
import { Card } from '@/src/components/atoms/Card';
import { Input } from '@/src/components/atoms/Input';
import {
  Box,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

/**
 * トップページコンポーネント
 * URLシェアによる簡単参加と音声通話併用を前提としたシンプルなUI
 */
export const TopPage = () => {
  return (
    <Box bg="gray.50" minH="100vh" py={16}>
      <Container maxW="container.md">
        <VStack gap={8} align="center">
          {/* ヘッダーエリア */}
          <VStack gap={2}>
            <Heading size={['2xl', '3xl']} color="gray.800" textAlign="center">
              オンラインドラフト会議
            </Heading>
            <Text color="gray.600" fontSize={['md', 'lg']} textAlign="center">
              みんなでワイワイ！リアルタイムドラフト
            </Text>
          </VStack>

          {/* アクションエリア */}
          <VStack gap={6} w="full" maxW="sm">
            {/* ルーム作成ボタン */}
            <Button variant="primary" size="lg" width="full">
              ルームを作成
            </Button>

            {/* 区切り線 */}
            <HStack w="full">
              <Box flex={1} h="1px" bg="gray.200" />
              <Text color="gray.500" fontSize="sm" px={4}>
                または
              </Text>
              <Box flex={1} h="1px" bg="gray.200" />
            </HStack>

            {/* ルーム参加 */}
            <VStack gap={3} w="full">
              <Text color="gray.700" fontSize={['xs', 'sm']}>
                既存のルームに参加
              </Text>
              <HStack w="full">
                <Input placeholder="ルームURLまたはID" size="lg" />
                <Button variant="secondary" size="lg">
                  参加
                </Button>
              </HStack>
            </VStack>
          </VStack>

          {/* 説明エリア */}
          <VStack gap={6} w="full" maxW="lg">
            {/* メインキャッチ */}
            <Card variant="elevated" size="md">
              <Text
                textAlign="center"
                color="blue.600"
                fontSize={['lg', 'xl']}
                fontWeight="bold"
              >
                みんなで同じものを狙う、白熱のドラフトゲーム！
              </Text>
            </Card>

            {/* ゲーム説明 */}
            <VStack gap={4} w="full">
              <Card variant="elevated" size="sm">
                <HStack align="start" w="full">
                  <Text fontSize="2xl">🎯</Text>
                  <VStack align="start" gap={1}>
                    <Text
                      fontWeight="bold"
                      color="gray.800"
                      fontSize={['sm', 'md']}
                    >
                      被ったら取れない！
                    </Text>
                    <Text color="gray.600" fontSize={['xs', 'sm']}>
                      好きなものを選ぶけど、他の人と同じだと競合で失敗
                    </Text>
                  </VStack>
                </HStack>
              </Card>

              <Card variant="elevated" size="sm">
                <HStack align="start" w="full">
                  <Text fontSize="2xl">👥</Text>
                  <VStack align="start" gap={1}>
                    <Text
                      fontWeight="bold"
                      color="gray.800"
                      fontSize={['sm', 'md']}
                    >
                      2-8人で同時選択
                    </Text>
                    <Text color="gray.600" fontSize={['xs', 'sm']}>
                      URLシェアで簡単参加、みんなでリアルタイム
                    </Text>
                  </VStack>
                </HStack>
              </Card>

              <Card variant="elevated" size="sm">
                <HStack align="start" w="full">
                  <Text fontSize="2xl">⚡</Text>
                  <VStack align="start" gap={1}>
                    <Text
                      fontWeight="bold"
                      color="gray.800"
                      fontSize={['sm', 'md']}
                    >
                      1ゲーム10-15分
                    </Text>
                    <Text color="gray.600" fontSize={['xs', 'sm']}>
                      サクッと楽しめる、音声通話しながらプレイ
                    </Text>
                  </VStack>
                </HStack>
              </Card>
            </VStack>

            {/* 使用例 */}
            <Box
              p={3}
              bg="pink.50"
              border="2px solid"
              borderColor="pink.200"
              borderRadius="lg"
            >
              <Text
                textAlign="center"
                color="pink.700"
                fontSize={['sm', 'md']}
                fontWeight="medium"
              >
                プロ野球選手、アニメキャラ、好きな食べ物...
                <br />
                なんでもドラフトして盛り上がろう！
              </Text>
            </Box>
          </VStack>

          {/* フッター情報 */}
          <VStack gap={2} pt={8}>
            <Text color="gray.500" fontSize="xs" textAlign="center">
              対応ブラウザ: Chrome, Safari, Firefox, Edge
            </Text>
            <Text color="gray.500" fontSize="xs" textAlign="center">
              © 2025 オンラインドラフト会議
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
