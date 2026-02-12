'use client';

import {
  Box,
  Circle,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LuArrowRight, LuLink, LuPenLine, LuPlay } from 'react-icons/lu';

import { Button } from '@/src/components/atoms/Button';

const STEPS = [
  {
    number: 1,
    icon: LuPenLine,
    title: 'ルームを作成',
    description: 'ルーム名を入力するだけ',
  },
  {
    number: 2,
    icon: LuLink,
    title: 'URLをシェア',
    description: 'LINEやDiscordで友達に共有',
  },
  {
    number: 3,
    icon: LuPlay,
    title: 'ドラフト開始',
    description: '全員揃ったらスタート！',
  },
] as const;

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'みんなでドラフトの使い方',
  step: STEPS.map((step) => ({
    '@type': 'HowToStep',
    name: step.title,
    text: step.description,
  })),
};

type HowToUseSectionProps = {
  onCreateRoom: () => void;
};

export const HowToUseSection = ({ onCreateRoom }: HowToUseSectionProps) => {
  return (
    <Box as="section" bg="white" py={[12, 16]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToJsonLd),
        }}
      />
      <Container maxW="4xl">
        <VStack gap={[8, 10]}>
          <Heading
            as="h2"
            size={['xl', '2xl']}
            color="gray.800"
            textAlign="center"
          >
            かんたん3ステップ
          </Heading>

          <Grid
            templateColumns={['1fr', 'repeat(3, 1fr)']}
            gap={[6, 4]}
            w="full"
            alignItems="start"
          >
            {STEPS.map((step, index) => (
              <VStack key={step.number} gap={4} position="relative">
                <Circle
                  size={[14, 16]}
                  bg="blue.500"
                  color="white"
                  fontWeight="bold"
                  fontSize={['xl', '2xl']}
                >
                  {step.number}
                </Circle>
                <Box as={step.icon} boxSize={[8, 10]} color="gray.600" />
                <VStack gap={1}>
                  <Text
                    fontSize={['md', 'lg']}
                    fontWeight="bold"
                    color="gray.800"
                    textAlign="center"
                  >
                    {step.title}
                  </Text>
                  <Text
                    fontSize={['sm', 'md']}
                    color="gray.600"
                    textAlign="center"
                  >
                    {step.description}
                  </Text>
                </VStack>

                {index < STEPS.length - 1 && (
                  <Box
                    display={['none', 'flex']}
                    position="absolute"
                    right={['-20%', '-25%']}
                    top="30px"
                    color="gray.300"
                  >
                    <LuArrowRight size={24} />
                  </Box>
                )}
              </VStack>
            ))}
          </Grid>

          <Button variant="primary" size="lg" onClick={onCreateRoom}>
            今すぐ始める
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
