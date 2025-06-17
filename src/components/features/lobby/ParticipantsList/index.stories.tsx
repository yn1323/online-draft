import type { Meta, StoryObj } from '@storybook/react';
import { Timestamp } from 'firebase/firestore';
import { ParticipantsList } from './index';

const meta: Meta<typeof ParticipantsList> = {
  title: 'Features/Lobby/ParticipantsList',
  component: ParticipantsList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockUsers = [
  {
    userId: 'user1',
    userName: 'たろう',
    groupId: 'group123',
    avatar: '1',
    joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:00:00Z')),
    updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:00:00Z')),
    isActive: true,
  },
  {
    userId: 'user2',
    userName: 'はなこ',
    groupId: 'group123',
    avatar: '2',
    joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:05:00Z')),
    updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:05:00Z')),
    isActive: true,
  },
  {
    userId: 'user3',
    userName: 'じろう',
    groupId: 'group123',
    avatar: '3',
    joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:10:00Z')),
    updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:10:00Z')),
    isActive: false,
  },
];

/**
 * 基本の参加者一覧表示（3人）
 */
export const Basic: Story = {
  args: {
    users: mockUsers,
    onJoinClick: () => console.log('Join clicked'),
  },
};

/**
 * 参加者なし（新規ルーム）
 */
export const Empty: Story = {
  args: {
    users: [],
    onJoinClick: () => console.log('Join clicked'),
  },
};

/**
 * 多くの参加者（6人）
 */
export const ManyParticipants: Story = {
  args: {
    users: [
      ...mockUsers,
      {
        userId: 'user4',
        userName: 'さぶろう',
        groupId: 'group123',
        avatar: '4',
        joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:15:00Z')),
        updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:15:00Z')),
        isActive: true,
      },
      {
        userId: 'user5',
        userName: 'みか',
        groupId: 'group123',
        avatar: '5',
        joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:20:00Z')),
        updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:20:00Z')),
        isActive: true,
      },
      {
        userId: 'user6',
        userName: 'けんじ',
        groupId: 'group123',
        avatar: '6',
        joinedAt: Timestamp.fromDate(new Date('2024-06-17T10:25:00Z')),
        updatedAt: Timestamp.fromDate(new Date('2024-06-17T10:25:00Z')),
        isActive: false,
      },
    ],
    onJoinClick: () => console.log('Join clicked'),
  },
};
