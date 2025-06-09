import type { Meta, StoryObj } from '@storybook/react';
import { LogItem } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/ChatLogSection/LogItem',
  component: LogItem,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof LogItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChatMessage: Story = {
  args: {
    log: {
      id: '1',
      type: 'chat',
      timestamp: new Date('2025-01-08T10:01:00'),
      content: 'よろしくお願いします！',
      user: { id: 'user1', name: 'ユーザー1', avatar: '1' },
      isMyMessage: true,
    },
  },
};

export const OtherUserMessage: Story = {
  args: {
    log: {
      id: '2',
      type: 'chat',
      timestamp: new Date('2025-01-08T10:01:30'),
      content: 'こちらこそ！頑張りましょう',
      user: { id: 'user2', name: '山田太郎', avatar: '2' },
      isMyMessage: false,
    },
  },
};

export const SystemNotification: Story = {
  args: {
    log: {
      id: '3',
      type: 'system',
      timestamp: new Date('2025-01-08T10:00:00'),
      content: 'Round 1 開始',
    },
  },
};

export const DraftResult: Story = {
  args: {
    log: {
      id: '4',
      type: 'draft_result',
      timestamp: new Date('2025-01-08T10:02:00'),
      content: '山田太郎が選択を完了しました',
    },
  },
};

export const SelectionChange: Story = {
  args: {
    log: {
      id: '5',
      type: 'selection_change',
      timestamp: new Date('2025-01-08T10:02:30'),
      content: 'ユーザー1が選択を変更しました',
      selectionChange: {
        roundNumber: 2,
        before: '山田太郎',
        after: '田中花子',
        userName: 'ユーザー1',
      },
    },
  },
};
