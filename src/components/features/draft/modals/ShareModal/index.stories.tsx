import type { Meta, StoryObj } from '@storybook/react';
import { ShareModal } from './index';

const meta: Meta<typeof ShareModal> = {
  title: 'Features/draft/modals/ShareModal',
  component: ShareModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ShareModal>;

/**
 * 基本パターン
 */
export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    groupId: 'example-group-id',
    groupName: 'テストドラフトグループ',
  },
  parameters: {
    // ナビゲーションエラー回避のためクリップボードアクセスを無効化
    mockData: {
      navigator: {
        clipboard: {
          writeText: () => Promise.resolve(),
        },
      },
    },
  },
};

/**
 * 長いグループ名パターン
 */
export const LongGroupName: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    groupId: 'example-group-id',
    groupName:
      'とても長いグループ名のドラフト会議室です。この名前は非常に長いので表示がどうなるかテストしています。',
  },
  parameters: {
    // ナビゲーションエラー回避のためクリップボードアクセスを無効化
    mockData: {
      navigator: {
        clipboard: {
          writeText: () => Promise.resolve(),
        },
      },
    },
  },
};
