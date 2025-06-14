'use client';

import {
  Box,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Button } from '@/src/components/atoms/Button';
import { Input } from '@/src/components/atoms/Input';

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
            <Heading size={["2xl", "3xl"]} color="gray.800" textAlign="center">
              オンラインドラフト会議
            </Heading>
            <Text color="gray.600" fontSize={["md", "lg"]} textAlign="center">
              みんなでワイワイ！リアルタイムドラフト
            </Text>
          </VStack>

          {/* 説明エリア */}
          <Box
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="sm"
            maxW="md"
            w="full"
          >
            <Text textAlign="center" color="gray.700">
              URLを共有するだけで簡単参加！
              <br />
              音声通話しながらドラフトを楽しもう！
            </Text>
          </Box>

          {/* アクションエリア */}
          <VStack gap={6} w="full" maxW="sm">
            {/* ルーム作成ボタン */}
            <Button
              variant="primary"
              size="lg"
              width="full"
            >
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
              <Text color="gray.700" fontSize={["xs", "sm"]}>
                既存のルームに参加
              </Text>
              <HStack w="full">
                <Input
                  placeholder="ルームURLまたはID"
                  size="lg"
                />
                <Button
                  variant="secondary"
                  size="lg"
                >
                  参加
                </Button>
              </HStack>
            </VStack>
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
