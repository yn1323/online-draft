import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ChatInputForm } from './index';

const meta: Meta<typeof ChatInputForm> = {
  title: 'Features/DraftPage/ChatInputForm',
  component: ChatInputForm,
  parameters: {
    layout: 'centered',
  },
  args: {
    onSendMessage: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示
 * 通常のチャット入力フォーム
 */
export const Default: Story = {
  args: {
    variant: 'sp',
    placeholder: 'メッセージを入力...',
  },
};

/**
 * カスタムプレースホルダー
 */
export const CustomPlaceholder: Story = {
  args: {
    variant: 'sp',
    placeholder: 'ここにコメントを入力してください...',
  },
};
