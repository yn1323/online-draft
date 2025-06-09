import { HStack, Text, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedButton } from './index';

const meta = {
  title: 'Atoms/Buttons/AnimatedButton',
  component: AnimatedButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    animationType: {
      control: 'select',
      options: ['lift', 'bounce', 'pulse', 'glow', 'scale'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'subtle'],
    },
    colorPalette: {
      control: 'select',
      options: ['blue', 'green', 'red', 'purple', 'teal', 'orange'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof AnimatedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'クリックしてね！',
    animationType: 'lift',
    colorPalette: 'blue',
  },
};

export const AllAnimations: Story = {
  args: { children: 'ボタン' },
  render: () => (
    <VStack gap={6}>
      <Text fontSize="lg" fontWeight="bold">
        アニメーションタイプ
      </Text>
      <VStack gap={4}>
        {(['lift', 'bounce', 'pulse', 'glow', 'scale'] as const).map(
          (animationType) => (
            <VStack key={animationType} gap={2}>
              <Text
                fontSize="sm"
                color="gray.600"
                _dark={{ color: 'gray.300' }}
              >
                {animationType}
              </Text>
              <AnimatedButton
                animationType={animationType}
                colorPalette="green"
                glowColor={animationType === 'glow' ? '#10b981' : undefined}
              >
                {animationType.charAt(0).toUpperCase() + animationType.slice(1)}{' '}
                ボタン
              </AnimatedButton>
            </VStack>
          ),
        )}
      </VStack>
    </VStack>
  ),
};

export const DifferentSizes: Story = {
  args: { children: 'ボタン' },
  render: () => (
    <VStack gap={4}>
      <Text fontSize="lg" fontWeight="bold">
        サイズバリエーション
      </Text>
      <HStack gap={4} align="center">
        <AnimatedButton size="xs" animationType="bounce" colorPalette="purple">
          XS
        </AnimatedButton>
        <AnimatedButton size="sm" animationType="bounce" colorPalette="purple">
          SM
        </AnimatedButton>
        <AnimatedButton size="md" animationType="bounce" colorPalette="purple">
          MD
        </AnimatedButton>
        <AnimatedButton size="lg" animationType="bounce" colorPalette="purple">
          LG
        </AnimatedButton>
        <AnimatedButton size="xl" animationType="bounce" colorPalette="purple">
          XL
        </AnimatedButton>
      </HStack>
    </VStack>
  ),
};

export const CustomGlow: Story = {
  args: { children: 'ボタン' },
  render: () => (
    <VStack gap={4}>
      <Text fontSize="lg" fontWeight="bold">
        カスタムグロー
      </Text>
      <HStack gap={4}>
        <AnimatedButton
          animationType="glow"
          colorPalette="blue"
          glowColor="#3b82f6"
        >
          青いグロー
        </AnimatedButton>
        <AnimatedButton
          animationType="glow"
          colorPalette="green"
          glowColor="#10b981"
        >
          緑のグロー
        </AnimatedButton>
        <AnimatedButton
          animationType="glow"
          colorPalette="purple"
          glowColor="#8b5cf6"
        >
          紫のグロー
        </AnimatedButton>
      </HStack>
    </VStack>
  ),
};

export const DisabledState: Story = {
  args: { children: 'ボタン' },
  render: () => (
    <VStack gap={4}>
      <Text fontSize="lg" fontWeight="bold">
        無効状態
      </Text>
      <HStack gap={4}>
        <AnimatedButton animationType="lift" colorPalette="gray" disabled>
          無効なボタン
        </AnimatedButton>
        <AnimatedButton
          animationType="glow"
          colorPalette="blue"
          disabled
          glowColor="#3b82f6"
        >
          無効なグローボタン
        </AnimatedButton>
      </HStack>
    </VStack>
  ),
};
