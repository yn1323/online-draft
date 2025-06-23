import type { Meta, StoryObj } from '@storybook/react';
import { mockChatMessages } from '../mockData';
import { ChatMessageList } from './index';

const meta: Meta<typeof ChatMessageList> = {
  title: 'Features/DraftPage/ChatMessageList',
  component: ChatMessageList,
  parameters: {
    layout: 'centered',
  },
  args: {
    messages: mockChatMessages,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示
 * 統一されたボックススタイル
 */
export const Default: Story = {};

/**
 * 空のメッセージリスト
 */
export const Empty: Story = {
  args: {
    messages: [],
  },
};
