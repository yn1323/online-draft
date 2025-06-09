import { Grid, Text, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeCard } from './index';

const meta = {
  title: 'Atoms/Cards/ThemeCard',
  component: ThemeCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['blue', 'green', 'purple', 'orange', 'teal', 'pink'],
    },
    variant: {
      control: 'select',
      options: ['elevated', 'outline', 'filled', 'glow'],
    },
    hoverable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ThemeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorScheme: 'blue',
    variant: 'elevated',
    children: (
      <VStack gap={2}>
        <Text fontSize="lg" fontWeight="bold">
          🎮 ゲーム作成
        </Text>
        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.300' }}>
          新しいドラフト会議を開始
        </Text>
      </VStack>
    ),
  },
};

export const AllColorSchemes: Story = {
  args: { children: 'Content' },
  render: () => (
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
      {(['blue', 'green', 'purple', 'orange', 'teal', 'pink'] as const).map(
        (colorScheme) => (
          <ThemeCard key={colorScheme} colorScheme={colorScheme}>
            <VStack gap={2}>
              <Text fontSize="md" fontWeight="bold">
                {colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}
              </Text>
              <Text fontSize="sm" opacity={0.8}>
                カラースキーム
              </Text>
            </VStack>
          </ThemeCard>
        ),
      )}
    </Grid>
  ),
};

export const AllVariants: Story = {
  args: { children: 'Content' },
  render: () => (
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
      {(['elevated', 'outline', 'filled', 'glow'] as const).map((variant) => (
        <ThemeCard key={variant} variant={variant} colorScheme="green">
          <VStack gap={2}>
            <Text fontSize="md" fontWeight="bold">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Text>
            <Text fontSize="sm" opacity={0.8}>
              バリアント
            </Text>
          </VStack>
        </ThemeCard>
      ))}
    </Grid>
  ),
};

export const NonHoverable: Story = {
  args: {
    colorScheme: 'purple',
    variant: 'filled',
    hoverable: false,
    children: (
      <VStack gap={2}>
        <Text fontSize="md" fontWeight="bold">
          ホバー無効
        </Text>
        <Text fontSize="sm" opacity={0.8}>
          静的なカード
        </Text>
      </VStack>
    ),
  },
};
