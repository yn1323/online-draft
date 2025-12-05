'use client';

import {
  Box,
  Card,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const USE_CASES = [
  {
    emoji: '\u26be',
    category: '\u91ce\u7403',
    title: '\u30d7\u30ed\u91ce\u7403\u9078\u624b\u30c9\u30e9\u30d5\u30c8',
    description:
      '\u30b7\u30fc\u30ba\u30f3\u524d\u306b\u4ef2\u9593\u3068\u4e88\u60f3',
  },
  {
    emoji: '\ud83c\udfac',
    category: '\u30a2\u30cb\u30e1',
    title:
      '\u4eca\u671f\u30a2\u30cb\u30e1\u30ad\u30e3\u30e9\u30c9\u30e9\u30d5\u30c8',
    description:
      '\u65b0\u30af\u30fc\u30eb\u958b\u59cb\u6642\u306b\u63a8\u3057\u30ad\u30e3\u30e9\u3092\u9078\u629c',
  },
  {
    emoji: '\ud83c\udfb5',
    category: '\u97f3\u697d',
    title: '\u5e74\u9593\u30d9\u30b9\u30c8\u30bd\u30f3\u30b0',
    description: '\u5e74\u672b\u306e\u6052\u4f8b\u884c\u4e8b\u306b',
  },
  {
    emoji: '\ud83c\udfc7',
    category: '競馬',
    title: 'POG（ペーパーオーナーゲーム）',
    description: '新馬をドラフトして年間成績を競う',
  },
] as const;

export const UseCaseSection = () => {
  return (
    <Box as="section" bg="gray.50" py={[12, 16]}>
      <Container maxW="4xl">
        <VStack gap={[8, 10]}>
          <Heading
            as="h2"
            size={['xl', '2xl']}
            color="gray.800"
            textAlign="center"
          >
            こんな場面で使われています
          </Heading>

          <Grid
            templateColumns={['1fr', 'repeat(2, 1fr)']}
            gap={[4, 6]}
            w="full"
          >
            {USE_CASES.map((useCase) => (
              <Card.Root
                key={useCase.category}
                variant="elevated"
                size="md"
                _hover={{ transform: 'scale(1.02)' }}
                transition="all 0.15s ease"
                cursor="default"
              >
                <Card.Body>
                  <VStack gap={3} py={2}>
                    <Text fontSize={['3xl', '4xl']}>{useCase.emoji}</Text>
                    <VStack gap={1}>
                      <Text fontSize="sm" fontWeight="medium" color="gray.500">
                        {useCase.category}
                      </Text>
                      <Text
                        fontSize={['md', 'lg']}
                        fontWeight="bold"
                        color="gray.800"
                        textAlign="center"
                      >
                        {useCase.title}
                      </Text>
                      <Text
                        fontSize={['sm', 'md']}
                        color="gray.600"
                        textAlign="center"
                      >
                        {useCase.description}
                      </Text>
                    </VStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};
