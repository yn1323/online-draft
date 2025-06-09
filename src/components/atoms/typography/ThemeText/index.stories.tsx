import { VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeText } from './';

const meta: Meta<typeof ThemeText> = {
  title: 'Atoms/Typography/ThemeText',
  component: ThemeText,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['body', 'caption', 'label', 'helper', 'error', 'success'],
    },
    responsive: {
      control: 'boolean',
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'これはデフォルトのテキストです。',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'これは本文テキストです。通常のコンテンツに使用します。',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'これはキャプションテキストです。補足情報に使用します。',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'これはラベルテキストです。フォームのラベルなどに使用します。',
  },
};

export const Helper: Story = {
  args: {
    variant: 'helper',
    children: 'これはヘルパーテキストです。追加の説明に使用します。',
  },
};

export const ErrorText: Story = {
  args: {
    variant: 'error',
    children: 'これはエラーテキストです。エラーメッセージに使用します。',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'これは成功テキストです。成功メッセージに使用します。',
  },
};

export const Responsive: Story = {
  args: {
    children:
      'これはレスポンシブテキストです。画面サイズに応じてフォントサイズが変わります。',
    responsive: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <VStack gap={4} align="stretch">
      <ThemeText variant="body">
        <strong>Body:</strong>{' '}
        これは本文テキストです。通常のコンテンツに使用します。
      </ThemeText>
      <ThemeText variant="caption">
        <strong>Caption:</strong>{' '}
        これはキャプションテキストです。補足情報に使用します。
      </ThemeText>
      <ThemeText variant="label">
        <strong>Label:</strong>{' '}
        これはラベルテキストです。フォームのラベルなどに使用します。
      </ThemeText>
      <ThemeText variant="helper">
        <strong>Helper:</strong>{' '}
        これはヘルパーテキストです。追加の説明に使用します。
      </ThemeText>
      <ThemeText variant="error">
        <strong>Error:</strong>{' '}
        これはエラーテキストです。エラーメッセージに使用します。
      </ThemeText>
      <ThemeText variant="success">
        <strong>Success:</strong>{' '}
        これは成功テキストです。成功メッセージに使用します。
      </ThemeText>
    </VStack>
  ),
};

export const ResponsiveComparison: Story = {
  render: () => (
    <VStack gap={4} align="stretch">
      <div>
        <ThemeText variant="label" mb={2}>
          通常テキスト（固定サイズ）:
        </ThemeText>
        <ThemeText variant="body" responsive={false}>
          このテキストは固定サイズです。画面サイズが変わってもフォントサイズは変わりません。
        </ThemeText>
      </div>
      <div>
        <ThemeText variant="label" mb={2}>
          レスポンシブテキスト:
        </ThemeText>
        <ThemeText variant="body" responsive={true}>
          このテキストはレスポンシブです。画面サイズに応じてフォントサイズが変わります。
        </ThemeText>
      </div>
    </VStack>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <VStack gap={4} align="stretch" w="full">
      <ThemeText variant="body" textAlign="left">
        左寄せテキスト
      </ThemeText>
      <ThemeText variant="body" textAlign="center">
        中央寄せテキスト
      </ThemeText>
      <ThemeText variant="body" textAlign="right">
        右寄せテキスト
      </ThemeText>
      <ThemeText variant="body" textAlign="justify">
        両端揃えテキスト。このテキストは長めに書いてあり、両端揃えの効果を確認できます。テキストが複数行にわたる場合に、左右の端が揃うように調整されます。
      </ThemeText>
    </VStack>
  ),
};
