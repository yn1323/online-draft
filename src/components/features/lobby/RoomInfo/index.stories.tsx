import type { Meta, StoryObj } from '@storybook/react';
import { RoomInfo } from './index';

const meta: Meta<typeof RoomInfo> = {
  title: 'Features/Lobby/RoomInfo',
  component: RoomInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockGroup = {
  groupName: '2024年プロ野球ドラフト',
  createdAt: new Date('2024-06-17T10:00:00Z'),
  updatedAt: new Date('2024-06-17T10:00:00Z'),
  status: 'waiting' as const,
  maxParticipants: 8,
};

/**
 * 基本のルーム情報表示
 */
export const Basic: Story = {
  args: {
    group: mockGroup,
    roomUrl: 'https://onlinedraft.com/lobby/abc123',
  },
};

/**
 * 長いルーム名の場合
 */
export const LongRoomName: Story = {
  args: {
    group: {
      ...mockGroup,
      groupName:
        '2024年度プロ野球ドラフト会議とセ・パ両リーグ戦力分析セッション',
    },
    roomUrl: 'https://onlinedraft.com/lobby/abc123',
  },
};
