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
import { LuTarget, LuUsers, LuZap } from 'react-icons/lu';

const FEATURE_ICONS = [
  { icon: LuTarget, color: 'blue.500' },
  { icon: LuUsers, color: 'green.500' },
  { icon: LuZap, color: 'orange.500' },
];

export const ServiceSection = () => {
  const t = useTranslations('top');
  const features = t.raw('service.features') as {
    title: string;
    description: string;
  }[];

  return (
    <Box as="section" bg="white" py={[12, 16]}>
      <Container maxW="4xl">
        <VStack gap={[8, 10]}>
          <VStack gap={4} textAlign="center">
            <Heading as="h2" size={['xl', '2xl']} color="gray.800">
              {t('service.heading')}
            </Heading>
            <Text
              fontSize={['md', 'lg']}
              color="gray.600"
              maxW="2xl"
              whiteSpace="pre-line"
            >
              {t('service.description')}
            </Text>
          </VStack>

          <Grid
            templateColumns={['1fr', 'repeat(3, 1fr)']}
            gap={[4, 6]}
            w="full"
          >
            {features.map((feature, index) => (
              <Card.Root key={feature.title} variant="elevated" size="md">
                <Card.Body>
                  <VStack gap={3} py={4}>
                    <Box
                      as={FEATURE_ICONS[index].icon}
                      boxSize={[10, 12]}
                      color={FEATURE_ICONS[index].color}
                    />
                    <Text
                      fontSize={['lg', 'xl']}
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {feature.title}
                    </Text>
                    <Text
                      fontSize={['sm', 'md']}
                      color="gray.600"
                      textAlign="center"
                    >
                      {feature.description}
                    </Text>
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
