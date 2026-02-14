'use client';

import {
  Box,
  Container,
  Heading,
  HStack,
  List,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import {
  LuCircleCheckBig,
  LuMessageCircle,
  LuSparkles,
  LuUsers,
} from 'react-icons/lu';

const STEP_ICONS = [
  { icon: LuSparkles, color: 'blue' },
  { icon: LuUsers, color: 'green' },
  { icon: LuCircleCheckBig, color: 'purple' },
] as const;

const FEATURE_ICONS = [LuMessageCircle, LuSparkles] as const;

export const GuidePage = () => {
  const t = useTranslations('guide');

  const steps = t.raw('steps') as {
    title: string;
    description: string;
  }[];
  const rules = t.raw('rules') as {
    title: string;
    description: string;
  }[];
  const features = t.raw('features') as {
    title: string;
    description: string;
  }[];
  const tips = t.raw('tips') as string[];

  return (
    <Box py={[8, 12]}>
      <Container maxW="container.md">
        <VStack gap={[10, 14]} align="stretch">
          {/* ヘッダー */}
          <VStack gap={4} textAlign="center">
            <Heading as="h1" size={['2xl', '3xl']} color="gray.800">
              {t('pageTitle')}
            </Heading>
            <Text fontSize={['md', 'lg']} color="gray.600">
              {t('pageSubtitle')}
            </Text>
          </VStack>

          {/* みんなでドラフトとは？ */}
          <Box
            bg="blue.50"
            p={[6, 8]}
            borderRadius="xl"
            border="1px solid"
            borderColor="blue.100"
          >
            <VStack gap={4} align="start">
              <Heading as="h2" size={['lg', 'xl']} color="blue.700">
                {t('aboutHeading')}
              </Heading>
              <Text
                fontSize={['sm', 'md']}
                color="gray.700"
                lineHeight="tall"
                dangerouslySetInnerHTML={{ __html: t.raw('aboutContent') }}
              />
            </VStack>
          </Box>

          {/* オンラインドラフト会議の始め方（3ステップ） */}
          <VStack gap={6} align="stretch">
            <Heading as="h2" size={['lg', 'xl']} color="gray.800">
              {t('stepsHeading')}
            </Heading>

            <VStack gap={4}>
              {steps.map((step, index) => {
                const { icon, color } = STEP_ICONS[index];
                return (
                  <Box
                    key={index}
                    w="full"
                    p={[5, 6]}
                    bg="white"
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="sm"
                  >
                    <HStack gap={4} align="start">
                      <Box
                        p={3}
                        borderRadius="full"
                        bg={`${color}.100`}
                        color={`${color}.600`}
                      >
                        <Box as={icon} boxSize={6} />
                      </Box>
                      <VStack align="start" gap={2} flex={1}>
                        <HStack>
                          <Text
                            fontSize="sm"
                            fontWeight="bold"
                            color={`${color}.600`}
                          >
                            {t('stepLabel', { step: index + 1 })}
                          </Text>
                          <Heading as="h3" size="md" color="gray.800">
                            {step.title}
                          </Heading>
                        </HStack>
                        <Text fontSize={['sm', 'md']} color="gray.600">
                          {step.description}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                );
              })}
            </VStack>
          </VStack>

          {/* ドラフトのルール */}
          <VStack gap={6} align="stretch">
            <Heading as="h2" size={['lg', 'xl']} color="gray.800">
              {t('rulesHeading')}
            </Heading>

            <VStack gap={3}>
              {rules.map((rule, index) => (
                <Box
                  key={index}
                  w="full"
                  p={[4, 5]}
                  bg="gray.50"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <VStack align="start" gap={2}>
                    <Heading as="h3" size="sm" color="gray.800">
                      {rule.title}
                    </Heading>
                    <Text fontSize={['sm', 'md']} color="gray.600">
                      {rule.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </VStack>

          {/* みんなでドラフトの便利な機能 */}
          <VStack gap={6} align="stretch">
            <Heading as="h2" size={['lg', 'xl']} color="gray.800">
              {t('featuresHeading')}
            </Heading>

            <HStack gap={4} flexWrap="wrap">
              {features.map((feature, index) => (
                <Box
                  key={index}
                  flex="1"
                  minW={['full', '280px']}
                  p={[4, 5]}
                  bg="purple.50"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="purple.100"
                >
                  <HStack gap={3} align="start">
                    <Box color="purple.500">
                      <Box as={FEATURE_ICONS[index]} boxSize={5} />
                    </Box>
                    <VStack align="start" gap={1}>
                      <Heading as="h3" size="sm" color="purple.700">
                        {feature.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600">
                        {feature.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </HStack>
          </VStack>

          {/* ドラフト会議を楽しむTips */}
          <Box
            bg="green.50"
            p={[6, 8]}
            borderRadius="xl"
            border="1px solid"
            borderColor="green.100"
          >
            <VStack gap={4} align="start">
              <Heading as="h2" size={['lg', 'xl']} color="green.700">
                {t('tipsHeading')}
              </Heading>
              <List.Root gap={2}>
                {tips.map((tip, index) => (
                  <List.Item
                    key={index}
                    fontSize={['sm', 'md']}
                    color="gray.700"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Box as={LuCircleCheckBig} color="green.500" boxSize={4} />
                    {tip}
                  </List.Item>
                ))}
              </List.Root>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
