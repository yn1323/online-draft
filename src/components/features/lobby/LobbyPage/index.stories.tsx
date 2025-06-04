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
};

export const LongGroupName: Story = {
  args: {
    groupId: 'XYZ789',
  },
};

export const ShortGroupId: Story = {
  args: {
    groupId: '12',
  },
};

export const NonExistentGroup: Story = {
  args: {
    groupId: 'nonexistent',
  },
};
