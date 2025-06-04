'use client';

import { HStack, SimpleGrid, Text } from '@chakra-ui/react';

const USE_CASES = [
  { emoji: '🍕', text: '今日のお昼ご飯選び' },
  { emoji: '🎬', text: '映画館で見る映画選び' },
  { emoji: '🎮', text: 'オンラインゲーム選び' },
  { emoji: '📚', text: '読書会の本選び' },
];

export default function UseCaseGrid() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
      {USE_CASES.map((useCase, index) => (
        <HStack
          key={index}
          gap={3}
          p={4}
          bg="gray.50"
          _dark={{ bg: 'gray.800' }}
          borderRadius="lg"
        >
          <Text fontSize="lg">{useCase.emoji}</Text>
          <Text fontSize="sm">{useCase.text}</Text>
        </HStack>
      ))}
    </SimpleGrid>
  );
}
