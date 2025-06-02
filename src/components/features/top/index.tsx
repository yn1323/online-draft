'use client';

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
import Link from 'next/link';
import { useState } from 'react';
import { IoEnter } from 'react-icons/io5';
import {
  MdAdd,
  MdCreate,
  MdDevices,
  MdFastForward,
  MdPlayArrow,
  MdShare,
  MdSpeed,
} from 'react-icons/md';
import { CreateDraftModal } from '../entry/entryModal';

export const TopPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateSuccess = (groupId: string) => {
    // 作成成功時は直接ページ遷移
    window.location.href = `/entry/${groupId}`;
  };
  return (
    <Box minHeight="100vh" bg="bg">
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
              オンラインドラフト会議
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              _dark={{ color: 'gray.400' }}
              maxW="600px"
            >
              オンラインでみんなでドラフト
            </Text>

            <HStack justify="center" gap={3} flexWrap="wrap" mt={2}>
              <Badge colorPalette="green" variant="subtle" size="lg">
                <HStack gap={1}>
                  <MdFastForward size="16" />
                  <Text>簡単セットアップ</Text>
                </HStack>
              </Badge>
              <Badge colorPalette="blue" variant="subtle" size="lg">
                <HStack gap={1}>
                  <MdSpeed size="16" />
                  <Text>リアルタイム</Text>
                </HStack>
              </Badge>
              <Badge colorPalette="gray" variant="subtle" size="lg">
                <HStack gap={1}>
                  <MdDevices size="16" />
                  <Text>スマホ対応</Text>
                </HStack>
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
              flexDirection="column"
              gap={3}
              p={6}
              borderRadius="xl"
              transition="all 0.2s"
              _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
              onClick={() => setIsModalOpen(true)}
            >
              <Box
                p={3}
                bg="green.100"
                borderRadius="full"
                color="green.700"
                _dark={{ bg: 'green.900/30', color: 'green.300' }}
              >
                <MdAdd size={32} />
              </Box>
              <VStack gap={1}>
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                  ドラフトを作る
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  新しい会議を作成
                </Text>
              </VStack>
            </Button>

            {/* グループに参加 */}
            <Button
              asChild
              size="lg"
              height={{ base: '120px', md: '150px' }}
              width="full"
              colorPalette="blue"
              flexDirection="column"
              gap={3}
              p={6}
              borderRadius="xl"
              transition="all 0.2s"
              _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
            >
              <Link href="/join">
                <Box
                  p={3}
                  bg="blue.100"
                  borderRadius="full"
                  color="blue.700"
                  _dark={{ bg: 'blue.900/30', color: 'blue.300' }}
                >
                  <IoEnter size={32} />
                </Box>
                <VStack gap={1}>
                  <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                    会議に参加
                  </Text>
                  <Text fontSize="sm" opacity={0.8}>
                    IDで参加してドラフト
                  </Text>
                </VStack>
              </Link>
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
                    position="relative"
                  >
                    <MdCreate size={24} />
                    <Box
                      position="absolute"
                      bottom="-2px"
                      right="-2px"
                      bg="green.600"
                      borderRadius="full"
                      width="20px"
                      height="20px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="xs"
                    >
                      1
                    </Box>
                  </Box>
                  <Heading
                    size="md"
                    color="green.700"
                    _dark={{ color: 'green.300' }}
                  >
                    会議を作成
                  </Heading>
                  <Text
                    color="gray.600"
                    _dark={{ color: 'gray.400' }}
                    textAlign="center"
                  >
                    ドラフト会議を作成して、メンバーを招待しよう
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
                    position="relative"
                  >
                    <MdShare size={24} />
                    <Box
                      position="absolute"
                      bottom="-2px"
                      right="-2px"
                      bg="orange.600"
                      borderRadius="full"
                      width="20px"
                      height="20px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="xs"
                    >
                      2
                    </Box>
                  </Box>
                  <Heading
                    size="md"
                    color="orange.700"
                    _dark={{ color: 'orange.300' }}
                  >
                    メンバー招待
                  </Heading>
                  <Text
                    color="gray.600"
                    _dark={{ color: 'gray.400' }}
                    textAlign="center"
                  >
                    会議IDをメンバーにシェアして参加してもらおう
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
                    position="relative"
                  >
                    <MdPlayArrow size={24} />
                    <Box
                      position="absolute"
                      bottom="-2px"
                      right="-2px"
                      bg="blue.600"
                      borderRadius="full"
                      width="20px"
                      height="20px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="xs"
                    >
                      3
                    </Box>
                  </Box>
                  <Heading
                    size="md"
                    color="blue.700"
                    _dark={{ color: 'blue.300' }}
                  >
                    ドラフト実行
                  </Heading>
                  <Text
                    color="gray.600"
                    _dark={{ color: 'gray.400' }}
                    textAlign="center"
                  >
                    メンバー全員で選択し、重複したら話し合って決定
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
                  こんな時におすすめ
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
                  使い方は無限大！チームやグループで決定しよう
                </Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
      
      {/* モーダル */}
      <CreateDraftModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateSuccess={handleCreateSuccess}
      />
    </Box>
  );
};

