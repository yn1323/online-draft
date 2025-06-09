import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BaseCard } from './';

const meta: Meta<typeof BaseCard> = {
  title: 'Atoms/Layout/BaseCard',
  component: BaseCard,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'outlined', 'filled', 'subtle'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    interactive: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    clickable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <Text fontWeight="bold" mb={2}>
          デフォルトカード
        </Text>
        <Text fontSize="sm">これはデフォルトのカードコンポーネントです。</Text>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <Text fontWeight="bold" mb={2}>
          Elevatedカード
        </Text>
        <Text fontSize="sm">
          影付きのカードです。浮いている感じを表現します。
        </Text>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <Text fontWeight="bold" mb={2}>
          Outlinedカード
        </Text>
        <Text fontSize="sm">
          境界線付きのカードです。すっきりとした見た目です。
        </Text>
      </div>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: (
      <div>
        <Text fontWeight="bold" mb={2}>
          Filledカード
        </Text>
        <Text fontSize="sm">
          背景色付きのカードです。コンテンツを強調します。
        </Text>
      </div>
    ),
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: (
      <div>
        <Text fontWeight="bold" mb={2}>
          Subtleカード
        </Text>
        <Text fontSize="sm">控えめなカードです。背景に溶け込みます。</Text>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    children: (
      <div>
        <Text fontWeight="bold" mb={2}>
          インタラクティブカード
        </Text>
        <Text fontSize="sm">
          ホバーすると反応します。クリック可能な要素として使用できます。
        </Text>
      </div>
    ),
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    interactive: true,
    children: (
      <div>
        <Text fontWeight="bold" mb={2}>
          選択済みカード
        </Text>
        <Text fontSize="sm">
          選択状態のカードです。青いボーダーと背景色が付きます。
        </Text>
      </div>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <VStack gap={4} align="stretch">
      <BaseCard size="sm">
        <Text fontWeight="bold" mb={1}>
          Smallカード
        </Text>
        <Text fontSize="sm">小さなパディングです。</Text>
      </BaseCard>
      <BaseCard size="md">
        <Text fontWeight="bold" mb={2}>
          Mediumカード
        </Text>
        <Text fontSize="sm">標準的なパディングです。</Text>
      </BaseCard>
      <BaseCard size="lg">
        <Text fontWeight="bold" mb={3}>
          Largeカード
        </Text>
        <Text fontSize="sm">
          大きなパディングです。ゆったりとしたレイアウトに適しています。
        </Text>
      </BaseCard>
    </VStack>
  ),
};

export const Variants: Story = {
  render: () => (
    <VStack gap={4} align="stretch">
      <BaseCard variant="elevated">
        <Text fontWeight="bold" mb={2}>
          Elevated
        </Text>
        <Text fontSize="sm">影付きで浮いている感じ</Text>
      </BaseCard>
      <BaseCard variant="outlined">
        <Text fontWeight="bold" mb={2}>
          Outlined
        </Text>
        <Text fontSize="sm">境界線付きですっきり</Text>
      </BaseCard>
      <BaseCard variant="filled">
        <Text fontWeight="bold" mb={2}>
          Filled
        </Text>
        <Text fontSize="sm">背景色付きで強調</Text>
      </BaseCard>
      <BaseCard variant="subtle">
        <Text fontWeight="bold" mb={2}>
          Subtle
        </Text>
        <Text fontSize="sm">控えめで背景に溶け込む</Text>
      </BaseCard>
    </VStack>
  ),
};

export const SelectableCards: Story = {
  render: () => {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    return (
      <VStack gap={4} align="stretch">
        <Text fontWeight="bold" mb={2}>
          選択可能なカード（クリックして選択）
        </Text>
        <HStack gap={4}>
          {[1, 2, 3].map((cardNum) => (
            <BaseCard
              key={cardNum}
              interactive
              selected={selectedCard === cardNum}
              onClick={() => setSelectedCard(cardNum)}
              flex={1}
            >
              <Text fontWeight="bold" mb={2}>
                カード {cardNum}
              </Text>
              <Text fontSize="sm">
                {selectedCard === cardNum ? '選択済み' : 'クリックして選択'}
              </Text>
            </BaseCard>
          ))}
        </HStack>
      </VStack>
    );
  },
};

export const ContentExamples: Story = {
  render: () => (
    <VStack gap={4} align="stretch">
      {/* ユーザーカード */}
      <BaseCard variant="elevated" interactive>
        <HStack gap={3}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            U
          </div>
          <div>
            <Text fontWeight="bold">ユーザー名</Text>
            <Text fontSize="sm" color="gray.600">
              user@example.com
            </Text>
          </div>
        </HStack>
      </BaseCard>

      {/* 統計カード */}
      <BaseCard variant="filled" size="lg">
        <Text fontSize="2xl" fontWeight="bold" color="blue.600">
          1,234
        </Text>
        <Text fontSize="sm" color="gray.600">
          合計訪問者数
        </Text>
        <Text fontSize="xs" color="green.500">
          +12% 先月比
        </Text>
      </BaseCard>

      {/* アクションカード */}
      <BaseCard variant="outlined" interactive>
        <VStack gap={3} align="stretch">
          <Text fontWeight="bold">新規作成</Text>
          <Text fontSize="sm">新しいプロジェクトを開始します。</Text>
          <Button colorPalette="blue" size="sm">
            作成する
          </Button>
        </VStack>
      </BaseCard>
    </VStack>
  ),
};
