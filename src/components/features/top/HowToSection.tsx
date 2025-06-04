'use client';

import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { MdCreate, MdPlayArrow, MdShare } from 'react-icons/md';
import StepCard from './components/StepCard';
import UseCaseGrid from './components/UseCaseGrid';

export default function HowToSection() {
  return (
    <Box mt={16} mb={8}>
      <VStack gap={6} textAlign="center">
        <Heading size="xl" color="gray.700" _dark={{ color: 'gray.300' }}>
          使い方はとっても簡単！
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} maxW="800px" w="full">
          {/* ステップ1 */}
          <StepCard
            icon={<MdCreate size={24} />}
            stepNumber={1}
            title="会議を作成"
            description="ドラフト会議を作成して、メンバーを招待しよう"
            colorScheme="green"
          />

          {/* ステップ2 */}
          <StepCard
            icon={<MdShare size={24} />}
            stepNumber={2}
            title="メンバー招待"
            description="会議IDをメンバーにシェアして参加してもらおう"
            colorScheme="orange"
          />

          {/* ステップ3 */}
          <StepCard
            icon={<MdPlayArrow size={24} />}
            stepNumber={3}
            title="ドラフト実行"
            description="メンバー全員で選択し、重複したら話し合って決定"
            colorScheme="blue"
          />
        </SimpleGrid>

        {/* 追加情報 */}
        <VStack gap={4} maxW="600px">
          <Heading size="lg" color="gray.700" _dark={{ color: 'gray.300' }}>
            こんな時におすすめ
          </Heading>

          <UseCaseGrid />

          <Text fontSize="sm" color="gray.500" mt={4}>
            使い方は無限大！チームやグループで決定しよう
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
