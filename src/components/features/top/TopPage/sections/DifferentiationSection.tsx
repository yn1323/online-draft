'use client';

import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { LuCheck } from 'react-icons/lu';

export const DifferentiationSection = () => {
  const t = useTranslations('top');
  const points = t.raw('differentiation.points') as {
    title: string;
    description: string;
  }[];

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
            {t('differentiation.heading')}
          </Heading>

          <VStack gap={[3, 4]} align="stretch" w="full">
            {points.map((point) => (
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
