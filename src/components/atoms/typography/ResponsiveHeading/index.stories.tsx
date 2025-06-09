import { VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveHeading } from './';

const meta: Meta<typeof ResponsiveHeading> = {
  title: 'Atoms/Typography/ResponsiveHeading',
  component: ResponsiveHeading,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent'],
    },
    responsive: {
      control: 'boolean',
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'デフォルトの見出し',
  },
};

export const Level1: Story = {
  args: {
    level: 1,
    children: 'レベル1の見出し（最大）',
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    children: 'レベル2の見出し',
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    children: 'レベル3の見出し',
  },
};

export const Level4: Story = {
  args: {
    level: 4,
    children: 'レベル4の見出し',
  },
};

export const Level5: Story = {
  args: {
    level: 5,
    children: 'レベル5の見出し',
  },
};

export const Level6: Story = {
  args: {
    level: 6,
    children: 'レベル6の見出し（最小）',
  },
};

export const PrimaryVariant: Story = {
  args: {
    variant: 'primary',
    children: 'プライマリ見出し',
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: 'secondary',
    children: 'セカンダリ見出し',
  },
};

export const AccentVariant: Story = {
  args: {
    variant: 'accent',
    children: 'アクセント見出し',
  },
};

export const NonResponsive: Story = {
  args: {
    level: 2,
    responsive: false,
    children: '非レスポンシブ見出し（固定サイズ）',
  },
};

export const AllLevels: Story = {
  render: () => (
    <VStack gap={4} align="stretch">
      <ResponsiveHeading level={1}>レベル1: メインタイトル</ResponsiveHeading>
      <ResponsiveHeading level={2}>レベル2: セクション見出し</ResponsiveHeading>
      <ResponsiveHeading level={3}>
        レベル3: サブセクション見出し
      </ResponsiveHeading>
      <ResponsiveHeading level={4}>レベル4: 小見出し</ResponsiveHeading>
      <ResponsiveHeading level={5}>レベル5: 項目見出し</ResponsiveHeading>
      <ResponsiveHeading level={6}>レベル6: 最小見出し</ResponsiveHeading>
    </VStack>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <VStack gap={4} align="stretch">
      <ResponsiveHeading level={2} variant="primary">
        プライマリバリアント見出し
      </ResponsiveHeading>
      <ResponsiveHeading level={2} variant="secondary">
        セカンダリバリアント見出し
      </ResponsiveHeading>
      <ResponsiveHeading level={2} variant="accent">
        アクセントバリアント見出し
      </ResponsiveHeading>
    </VStack>
  ),
};

export const ResponsiveComparison: Story = {
  render: () => (
    <VStack gap={6} align="stretch">
      <div>
        <ResponsiveHeading level={3} responsive={false} mb={2}>
          固定サイズ見出し
        </ResponsiveHeading>
        <p>この見出しは画面サイズに関係なく一定のサイズです。</p>
      </div>
      <div>
        <ResponsiveHeading level={3} responsive={true} mb={2}>
          レスポンシブ見出し
        </ResponsiveHeading>
        <p>
          この見出しは画面サイズに応じてサイズが変わります。画面を縮小・拡大して確認してください。
        </p>
      </div>
    </VStack>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <VStack gap={4} align="stretch" w="full">
      <ResponsiveHeading level={3} textAlign="left">
        左寄せ見出し
      </ResponsiveHeading>
      <ResponsiveHeading level={3} textAlign="center">
        中央寄せ見出し
      </ResponsiveHeading>
      <ResponsiveHeading level={3} textAlign="right">
        右寄せ見出し
      </ResponsiveHeading>
    </VStack>
  ),
};

export const PageStructure: Story = {
  render: () => (
    <VStack gap={4} align="stretch">
      <ResponsiveHeading level={1} variant="primary">
        ページタイトル
      </ResponsiveHeading>
      <p>これはページの説明文です。</p>

      <ResponsiveHeading level={2} variant="accent">
        メインセクション
      </ResponsiveHeading>
      <p>メインセクションの内容です。</p>

      <ResponsiveHeading level={3} variant="secondary">
        サブセクション
      </ResponsiveHeading>
      <p>サブセクションの内容です。</p>

      <ResponsiveHeading level={4}>詳細項目</ResponsiveHeading>
      <p>詳細項目の説明です。</p>
    </VStack>
  ),
};
