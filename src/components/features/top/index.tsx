'use client';

import { ThemeToggle } from '@/src/components/layout/ThemeToggle';
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const TopPage = () => {
  const router = useRouter();

  return (
    <Box minHeight="100vh" bg="bg">
      {/* デバッグ用テーマ切り替え */}
      <ThemeToggle />

      <Container maxW="container.lg" py={8}>
        <VStack gap={8} align="stretch">
          {/* ヒーローセクション */}
          <VStack gap={4} textAlign="center" py={8}>
            <Heading
              as="h1"
              size={{ base: '2xl', md: '4xl' }}
              fontWeight="bold"
              color="gray.800"
              _dark={{ color: 'gray.100' }}
            >
              推しを選んで、かぶったら勝負！
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              _dark={{ color: 'gray.400' }}
              maxW="600px"
            >
              みんなでオンラインドラフトを楽しもう
            </Text>

            <HStack justify="center" gap={3} flexWrap="wrap" mt={2}>
              <Badge colorPalette="green" variant="subtle" size="lg">
                簡単セットアップ
              </Badge>
              <Badge colorPalette="blue" variant="subtle" size="lg">
                リアルタイム
              </Badge>
              <Badge colorPalette="gray" variant="subtle" size="lg">
                スマホ対応
              </Badge>
            </HStack>
          </VStack>

          {/* メインアクション */}
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={6}
            maxW="600px"
            mx="auto"
            w="full"
          >
            {/* グループを作る */}
            <Button
              size="lg"
              height={{ base: '120px', md: '150px' }}
              width="full"
              colorPalette="green"
              onClick={() => {
                // 仮実装：ランダムIDでグループページへ遷移
                const tempGroupId = Math.random().toString(36).substring(7);
                router.push(`/entry/${tempGroupId}`);
              }}
              flexDirection="column"
              gap={3}
              p={6}
              borderRadius="xl"
              transition="all 0.2s"
              _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
            >
              <Text fontSize={{ base: '3xl', md: '4xl' }}>＋</Text>
              <VStack gap={1}>
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                  グループを作る
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  新しいドラフトを始める
                </Text>
              </VStack>
            </Button>

            {/* グループに参加 */}
            <Button
              size="lg"
              height={{ base: '120px', md: '150px' }}
              width="full"
              colorPalette="blue"
              onClick={() => {
                // 仮実装：サンプルIDでグループページへ遷移
                const sampleGroupId = 'sample123';
                router.push(`/entry/${sampleGroupId}`);
              }}
              flexDirection="column"
              gap={3}
              p={6}
              borderRadius="xl"
              transition="all 0.2s"
              _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
            >
              <Text fontSize={{ base: '3xl', md: '4xl' }}>参加</Text>
              <VStack gap={1}>
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                  グループに参加
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  IDで参加
                </Text>
              </VStack>
            </Button>
          </SimpleGrid>

          {/* 使い方説明 */}
          <Box mt={16} mb={8}>
            <VStack gap={6} textAlign="center">
              <Heading size="xl" color="gray.700" _dark={{ color: 'gray.300' }}>
                使い方はとっても簡単！
              </Heading>

              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                gap={8}
                maxW="800px"
                w="full"
              >
                {/* ステップ1 */}
                <VStack
                  gap={4}
                  p={6}
                  bg="green.50"
                  _dark={{ bg: 'green.900/20' }}
                  borderRadius="xl"
                >
                  <Box
                    bg="green.500"
                    color="white"
                    borderRadius="full"
                    width="60px"
                    height="60px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    1
                  </Box>
                  <Heading
                    size="md"
                    color="green.700"
                    _dark={{ color: 'green.300' }}
                  >
                    グループを作る
                  </Heading>
                  <Text
                    color="gray.600"
                    _dark={{ color: 'gray.400' }}
                    textAlign="center"
                  >
                    「グループを作る」ボタンを押して、みんなでドラフトするグループを作成しよう！
                  </Text>
                </VStack>

                {/* ステップ2 */}
                <VStack
                  gap={4}
                  p={6}
                  bg="orange.50"
                  _dark={{ bg: 'orange.900/20' }}
                  borderRadius="xl"
                >
                  <Box
                    bg="orange.500"
                    color="white"
                    borderRadius="full"
                    width="60px"
                    height="60px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    2
                  </Box>
                  <Heading
                    size="md"
                    color="orange.700"
                    _dark={{ color: 'orange.300' }}
                  >
                    友達を招待
                  </Heading>
                  <Text
                    color="gray.600"
                    _dark={{ color: 'gray.400' }}
                    textAlign="center"
                  >
                    グループIDを友達にシェア！QRコードでの参加も対応予定だよ〜
                  </Text>
                </VStack>

                {/* ステップ3 */}
                <VStack
                  gap={4}
                  p={6}
                  bg="blue.50"
                  _dark={{ bg: 'blue.900/20' }}
                  borderRadius="xl"
                >
                  <Box
                    bg="blue.500"
                    color="white"
                    borderRadius="full"
                    width="60px"
                    height="60px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    3
                  </Box>
                  <Heading
                    size="md"
                    color="blue.700"
                    _dark={{ color: 'blue.300' }}
                  >
                    ドラフト開始！
                  </Heading>
                  <Text
                    color="gray.600"
                    _dark={{ color: 'gray.400' }}
                    textAlign="center"
                  >
                    みんなで推しを選んで、かぶったら勝負！誰が一番のお気に入りを選べるかな？
                  </Text>
                </VStack>
              </SimpleGrid>

              {/* 追加情報 */}
              <VStack gap={4} maxW="600px">
                <Heading
                  size="lg"
                  color="gray.700"
                  _dark={{ color: 'gray.300' }}
                >
                  こんな時におすすめ！
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                  <HStack
                    gap={3}
                    p={4}
                    bg="gray.50"
                    _dark={{ bg: 'gray.800' }}
                    borderRadius="lg"
                  >
                    <Text fontSize="lg">🍕</Text>
                    <Text fontSize="sm">今日のお昼ご飯選び</Text>
                  </HStack>
                  <HStack
                    gap={3}
                    p={4}
                    bg="gray.50"
                    _dark={{ bg: 'gray.800' }}
                    borderRadius="lg"
                  >
                    <Text fontSize="lg">🎬</Text>
                    <Text fontSize="sm">映画館で見る映画選び</Text>
                  </HStack>
                  <HStack
                    gap={3}
                    p={4}
                    bg="gray.50"
                    _dark={{ bg: 'gray.800' }}
                    borderRadius="lg"
                  >
                    <Text fontSize="lg">🎮</Text>
                    <Text fontSize="sm">オンラインゲーム選び</Text>
                  </HStack>
                  <HStack
                    gap={3}
                    p={4}
                    bg="gray.50"
                    _dark={{ bg: 'gray.800' }}
                    borderRadius="lg"
                  >
                    <Text fontSize="lg">📚</Text>
                    <Text fontSize="sm">読書会の本選び</Text>
                  </HStack>
                </SimpleGrid>

                <Text fontSize="sm" color="gray.500" mt={4}>
                  使い方は無限大！友達や家族と一緒に楽しもう
                </Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
