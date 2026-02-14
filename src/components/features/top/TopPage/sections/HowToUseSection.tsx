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
import { useTranslations } from 'next-intl';
import { LuArrowRight, LuLink, LuPenLine, LuPlay } from 'react-icons/lu';

import { Button } from '@/src/components/atoms/Button';

const STEP_ICONS = [LuPenLine, LuLink, LuPlay];

type HowToUseSectionProps = {
  onCreateRoom: () => void;
};

export const HowToUseSection = ({ onCreateRoom }: HowToUseSectionProps) => {
  const t = useTranslations('top');
  const steps = t.raw('howToUse.steps') as {
    title: string;
    description: string;
  }[];

  return (
    <Box as="section" bg="white" py={[12, 16]}>
      <Container maxW="4xl">
        <VStack gap={[8, 10]}>
          <Heading
            as="h2"
            size={['xl', '2xl']}
            color="gray.800"
            textAlign="center"
          >
            {t('howToUse.heading')}
          </Heading>

          <Grid
            templateColumns={['1fr', 'repeat(3, 1fr)']}
            gap={[6, 4]}
            w="full"
            alignItems="start"
          >
            {steps.map((step, index) => (
              <VStack key={step.title} gap={4} position="relative">
                <Circle
                  size={[14, 16]}
                  bg="blue.500"
                  color="white"
                  fontWeight="bold"
                  fontSize={['xl', '2xl']}
                >
                  {index + 1}
                </Circle>
                <Box
                  as={STEP_ICONS[index]}
                  boxSize={[8, 10]}
                  color="gray.600"
                />
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

                {index < steps.length - 1 && (
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
            {t('howToUse.cta')}
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
