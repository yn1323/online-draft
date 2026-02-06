import type { Meta, StoryObj } from '@storybook/react';
import { Timestamp } from 'firebase/firestore';
import { RoomInfo } from './index';

const meta: Meta<typeof RoomInfo> = {
  title: 'features/lobby/RoomInfo',
  component: RoomInfo,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockGroup = {
  groupName: '2024年プロ野球ドラフト',
  deleteFlg: false,
  finishedRound: [] as number[],
  round: 1,
  createdAt: Timestamp.fromDate(new Date('2024-06-17T10:00:00Z')),
  updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:00:00Z')),
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
