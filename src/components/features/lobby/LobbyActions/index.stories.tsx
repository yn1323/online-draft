import type { Meta, StoryObj } from '@storybook/react';
import { LobbyActions } from './index';

const meta: Meta<typeof LobbyActions> = {
  title: 'Features/Lobby/LobbyActions',
  component: LobbyActions,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基本のロビーアクション表示
 */
export const Basic: Story = {
  args: {
    onLeaveRoom: () => console.log('Leave room clicked'),
  },
};
