'use client';

import { SAMPLE_DATA } from '@/src/constants/app/sample-data';
import { GRID_COLUMNS } from '@/src/constants/ui/layouts';
import { HStack, SimpleGrid, Text } from '@chakra-ui/react';

export default function UseCaseGrid() {
  return (
    <SimpleGrid columns={GRID_COLUMNS.useCases} gap={4} w="full">
      {SAMPLE_DATA.USE_CASES.map((useCase, index) => (
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
