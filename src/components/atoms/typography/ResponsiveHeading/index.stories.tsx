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

export const LevelsAndVariants: Story = {
  render: () => (
    <VStack gap={6} align="stretch">
      <div>
        <h3 style={{ marginBottom: '1rem' }}>レベル別見出し</h3>
        <VStack gap={3} align="stretch">
          <ResponsiveHeading level={1}>
            レベル1: メインタイトル
          </ResponsiveHeading>
          <ResponsiveHeading level={2}>
            レベル2: セクション見出し
          </ResponsiveHeading>
          <ResponsiveHeading level={3}>
            レベル3: サブセクション見出し
          </ResponsiveHeading>
          <ResponsiveHeading level={4}>レベル4: 小見出し</ResponsiveHeading>
          <ResponsiveHeading level={5}>レベル5: 項目見出し</ResponsiveHeading>
          <ResponsiveHeading level={6}>レベル6: 最小見出し</ResponsiveHeading>
        </VStack>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>バリアント</h3>
        <VStack gap={3} align="stretch">
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
      </div>
    </VStack>
  ),
};

export const AdvancedFeatures: Story = {
  render: () => (
    <VStack gap={6} align="stretch">
      <div>
        <h3 style={{ marginBottom: '1rem' }}>レスポンシブ比較</h3>
        <VStack gap={4} align="stretch">
          <div>
            <ResponsiveHeading level={3} responsive={false} mb={2}>
              固定サイズ見出し
            </ResponsiveHeading>
            <p style={{ fontSize: '0.875rem', color: 'gray' }}>
              この見出しは画面サイズに関係なく一定のサイズです。
            </p>
          </div>
          <div>
            <ResponsiveHeading level={3} responsive={true} mb={2}>
              レスポンシブ見出し
            </ResponsiveHeading>
            <p style={{ fontSize: '0.875rem', color: 'gray' }}>
              この見出しは画面サイズに応じてサイズが変わります。
            </p>
          </div>
        </VStack>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>テキスト配置</h3>
        <VStack gap={3} align="stretch" w="full">
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
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>ページ構造例</h3>
        <VStack gap={3} align="stretch">
          <ResponsiveHeading level={1} variant="primary">
            ページタイトル
          </ResponsiveHeading>
          <p style={{ fontSize: '0.875rem' }}>これはページの説明文です。</p>
          <ResponsiveHeading level={2} variant="accent">
            メインセクション
          </ResponsiveHeading>
          <p style={{ fontSize: '0.875rem' }}>メインセクションの内容です。</p>
          <ResponsiveHeading level={3} variant="secondary">
            サブセクション
          </ResponsiveHeading>
          <p style={{ fontSize: '0.875rem' }}>サブセクションの内容です。</p>
          <ResponsiveHeading level={4}>詳細項目</ResponsiveHeading>
          <p style={{ fontSize: '0.875rem' }}>詳細項目の説明です。</p>
        </VStack>
      </div>
    </VStack>
  ),
};
