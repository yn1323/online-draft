import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';
import { Stage } from './index';

// サンプルデータ
const sampleParticipants = [
  {
    id: '1',
    name: '田中太郎',
    avatar: '1',
    choice: 'ポケットモンスターブラック',
    willLose: false,
  },
  {
    id: '2',
    name: '佐藤花子',
    avatar: '2',
    choice: 'ドラゴンクエストXI',
    willLose: false,
  },
  {
    id: '3',
    name: '鈴木一郎',
    avatar: '3',
    choice: 'ファイナルファンタジーXIV',
    willLose: false,
  },
  {
    id: '4',
    name: '高橋次郎',
    avatar: '4',
    choice: 'スーパーマリオオデッセイ',
    willLose: false,
  },
  {
    id: '5',
    name: '山田美咲',
    avatar: '5',
    choice: 'ゼルダの伝説ブレスオブザワイルド',
    willLose: false,
  },
  {
    id: '6',
    name: '中村健太',
    avatar: '6',
    choice: 'スプラトゥーン3',
    willLose: false,
  },
];

const conflictParticipants = [
  {
    id: '1',
    name: '田中太郎',
    avatar: '1',
    choice: 'ポケットモンスターブラック',
    willLose: false,
  },
  {
    id: '2',
    name: '佐藤花子',
    avatar: '2',
    choice: 'ポケットモンスターブラック',
    willLose: true,
  },
  {
    id: '3',
    name: '鈴木一郎',
    avatar: '3',
    choice: 'ファイナルファンタジーXIV',
    willLose: false,
  },
  {
    id: '4',
    name: '高橋次郎',
    avatar: '4',
    choice: 'スーパーマリオオデッセイ',
    willLose: false,
  },
  {
    id: '5',
    name: '山田美咲',
    avatar: '5',
    choice: 'ゼルダの伝説ブレスオブザワイルド',
    willLose: false,
  },
  {
    id: '6',
    name: '中村健太',
    avatar: '6',
    choice: 'ファイナルファンタジーXIV',
    willLose: true,
  },
];

const meta: Meta<typeof Stage> = {
  title: 'features/draft/modals/StageModal/Stage',
  component: Stage,
  parameters: {
    layout: 'fullscreen',
    skip: true,
  },
  tags: ['autodocs', 'skip-test'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['card', 'typing', 'slot'],
    },
    participants: {
      control: 'object',
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
    const currentParticipants = hasConflict
      ? conflictParticipants
      : sampleParticipants;
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
              participants={currentParticipants}
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
    participants: sampleParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};

export const CardRevealConflict: Story = {
  args: {
    variant: 'card',
    participants: conflictParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};

export const Typing: Story = {
  args: {
    variant: 'typing',
    participants: sampleParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};

export const TypingConflict: Story = {
  args: {
    variant: 'typing',
    participants: conflictParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};

export const SlotMachine: Story = {
  args: {
    variant: 'slot',
    participants: sampleParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};

export const SlotMachineConflict: Story = {
  args: {
    variant: 'slot',
    participants: conflictParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
  },
};
