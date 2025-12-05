'use client';

import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LuCheck } from 'react-icons/lu';

const DIFFERENTIATION_POINTS = [
  {
    title: '何でもドラフトできる',
    description: '野球、アニメ、音楽、食べ物...ジャンル自由',
  },
  {
    title: '順番待ちなし！全員同時選択',
    description: '一斉入力だから待ち時間ゼロ',
  },
  {
    title: 'スロット演出で盛り上がる',
    description: '開票時のドキドキ感がたまらない！',
  },
  {
    title: '登録不要、URLだけで即参加',
    description: 'アカウント作成の手間なし',
  },
] as const;

export const DifferentiationSection = () => {
  return (
    <Box as="section" bg="blue.50" py={[12, 16]}>
      <Container maxW="3xl">
        <VStack gap={[8, 10]}>
          <Heading
            as="h2"
            size={['xl', '2xl']}
            color="gray.800"
            textAlign="center"
          >
            オンラインドラフト会議が選ばれる理由
          </Heading>

          <VStack gap={[3, 4]} align="stretch" w="full">
            {DIFFERENTIATION_POINTS.map((point) => (
              <Box
                key={point.title}
                bg="white"
                p={[4, 5]}
                borderRadius="lg"
                boxShadow="sm"
              >
                <HStack gap={3} align="start">
                  <Box
                    as={LuCheck}
                    boxSize={6}
                    color="green.500"
                    flexShrink={0}
                    mt={0.5}
                  />
                  <VStack align="start" gap={1}>
                    <Text
                      fontSize={['md', 'lg']}
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {point.title}
                    </Text>
                    <Text fontSize={['sm', 'md']} color="gray.600">
                      {point.description}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
