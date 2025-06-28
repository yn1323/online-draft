import type { Meta, StoryObj } from '@storybook/react';
import { ChatInputForm } from './index';

const meta: Meta<typeof ChatInputForm> = {
  title: 'Features/draft/ChatInputForm',
  component: ChatInputForm,
  parameters: {
    layout: 'centered',
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示
 * 通常のチャット入力フォーム
 */
export const Default: Story = {
  args: {
    placeholder: 'メッセージを入力...',
  },
};
