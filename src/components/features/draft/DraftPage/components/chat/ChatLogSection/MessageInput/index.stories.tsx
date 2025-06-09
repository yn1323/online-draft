import type { Meta, StoryObj } from '@storybook/react';
import { MessageInput } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/ChatLogSection/MessageInput',
  component: MessageInput,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof MessageInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSendMessage: (message: string) => {
      console.log('Sent message:', message);
    },
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'コメントを入力してください...',
    onSendMessage: (message: string) => {
      console.log('Sent message:', message);
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '送信できません',
  },
};