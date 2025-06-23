import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';
import { Stage } from './index';

const meta: Meta<typeof Stage> = {
  title: 'features/draft/Stage',
  component: Stage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['card', 'typing', 'slot'],
    },
    hasConflict: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CompetitionMode: Story = {
  render: () => {
    const [currentVariant, setCurrentVariant] = useState<
      'card' | 'typing' | 'slot'
    >('card');
    const [hasConflict, setHasConflict] = useState(false);
    const [isRevealing, setIsRevealing] = useState(false);

    const handleStartReveal = () => {
      setIsRevealing(true);
    };

    const handleReset = () => {
      setIsRevealing(false);
    };

    const variants = [
      { key: 'card', label: 'Card Flip', color: 'purple' },
      { key: 'typing', label: 'Terminal Type', color: 'gray' },
      { key: 'slot', label: 'Slot Machine', color: 'red' },
    ] as const;

    return (
      <Box bg="gray.50" minH="100vh" p={6}>
        <VStack gap={6} maxW="800px" mx="auto">
          <VStack gap={4}>
            <Text fontSize="3xl" fontWeight="bold" color="gray.800">
              Opening Result Animation Competition
            </Text>
            <Text color="gray.600" textAlign="center">
              Compare 4 different animation patterns and choose the most
              exciting one!
            </Text>
          </VStack>

          <HStack gap={4} wrap="wrap" justify="center">
            {variants.map((variant) => (
              <Button
                key={variant.key}
                colorPalette={variant.color}
                variant={currentVariant === variant.key ? 'solid' : 'outline'}
                onClick={() => {
                  setCurrentVariant(variant.key);
                  setIsRevealing(false);
                }}
                size="lg"
              >
                {variant.label}
              </Button>
            ))}
          </HStack>

          <VStack gap={3}>
            <Box
              bg="white"
              p={4}
              borderRadius="lg"
              boxShadow="md"
              textAlign="center"
            >
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                Currently Selected:{' '}
                {variants.find((v) => v.key === currentVariant)?.label}
              </Text>
            </Box>

            <HStack gap={4}>
              <Button
                colorPalette={hasConflict ? 'gray' : 'blue'}
                variant={hasConflict ? 'outline' : 'solid'}
                onClick={() => {
                  setHasConflict(false);
                  setIsRevealing(false);
                }}
              >
                Normal Pattern
              </Button>
              <Button
                colorPalette={hasConflict ? 'red' : 'gray'}
                variant={hasConflict ? 'solid' : 'outline'}
                onClick={() => {
                  setHasConflict(true);
                  setIsRevealing(false);
                }}
              >
                Conflict Pattern
              </Button>
            </HStack>
          </VStack>

          <Box bg="white" borderRadius="xl" boxShadow="xl" p={6} w="full">
            <Stage
              variant={currentVariant}
              hasConflict={hasConflict}
              isRevealing={isRevealing}
              onStartReveal={handleStartReveal}
              onReset={handleReset}
            />
          </Box>

          <Box bg="blue.50" p={6} borderRadius="lg" w="full" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="blue.800" mb={2}>
              What's your rating?
            </Text>
            <Text color="blue.600">
              Try each animation and tell us which one excites you the most!
            </Text>
          </Box>
        </VStack>
      </Box>
    );
  },
};

export const CardReveal: Story = {
  args: {
    variant: 'card',
    hasConflict: false,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};

export const CardRevealConflict: Story = {
  args: {
    variant: 'card',
    hasConflict: true,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};

export const Typing: Story = {
  args: {
    variant: 'typing',
    hasConflict: false,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};

export const TypingConflict: Story = {
  args: {
    variant: 'typing',
    hasConflict: true,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};

export const SlotMachine: Story = {
  args: {
    variant: 'slot',
    hasConflict: false,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};

export const SlotMachineConflict: Story = {
  args: {
    variant: 'slot',
    hasConflict: true,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};
