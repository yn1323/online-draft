import type { Meta, StoryObj } from '@storybook/react';
import LobbyPage from './index';

const meta: Meta<typeof LobbyPage> = {
  title: 'Features/Lobby/LobbyPage',
  component: LobbyPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupId: 'ABC123',
    groupName: 'サンプルグループ',
  },
};

export const LongGroupName: Story = {
  args: {
    groupId: 'XYZ789',
    groupName: 'とても長いグループ名のサンプルグループです',
  },
};

export const ShortGroupId: Story = {
  args: {
    groupId: '12',
    groupName: '短いIDグループ',
  },
};
