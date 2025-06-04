import { mswHandlers, withAuthenticatedUser } from '@/src/test-utils/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import LobbyPage from './index';

const meta: Meta<typeof LobbyPage> = {
  title: 'Features/Lobby/LobbyPage',
  component: LobbyPage,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: mswHandlers.common,
    },
  },
  decorators: [withAuthenticatedUser],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupId: 'ABC123',
  },
  parameters: {
    docs: {
      description: {
        story: 'ロビーページの通常表示状態（Firestoreから取得）',
      },
    },
  },
};

export const LongGroupName: Story = {
  args: {
    groupId: 'XYZ789',
  },
  parameters: {
    docs: {
      description: {
        story: '長いグループ名での表示状態（Firestoreから取得）',
      },
    },
  },
};

export const ShortGroupId: Story = {
  args: {
    groupId: '12',
  },
  parameters: {
    docs: {
      description: {
        story: '短いグループIDでの表示状態（Firestoreから取得）',
      },
    },
  },
};

export const NonExistentGroup: Story = {
  args: {
    groupId: 'nonexistent',
  },
  parameters: {
    docs: {
      description: {
        story: 'グループが存在しない場合のエラー表示状態',
      },
    },
  },
};
