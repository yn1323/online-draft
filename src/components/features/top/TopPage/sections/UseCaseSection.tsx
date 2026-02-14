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
import { useTranslations } from 'next-intl';

export const UseCaseSection = () => {
  const t = useTranslations('top');
  const cases = t.raw('useCases.cases') as {
    emoji: string;
    category: string;
    title: string;
    description: string;
  }[];

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
            {t('useCases.heading')}
          </Heading>

          <Grid
            templateColumns={['1fr', 'repeat(2, 1fr)']}
            gap={[4, 6]}
            w="full"
          >
            {cases.map((useCase) => (
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
