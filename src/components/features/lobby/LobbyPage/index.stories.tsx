import type { Meta, StoryObj } from '@storybook/react';
import { Timestamp } from 'firebase/firestore';
import { LobbyPageInner } from './index';

// LobbyPageInner用のmeta
const metaInner: Meta<typeof LobbyPageInner> = {
  title: 'features/lobby/LobbyPage',
  component: LobbyPageInner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default metaInner;
type Story = StoryObj<typeof metaInner>;

const mockGroup = {
  groupName: '2024年プロ野球ドラフト',
  createdAt: new Date('2024-06-17T10:00:00Z'),
  updatedAt: new Date('2024-06-17T10:00:00Z'),
  status: 'waiting' as const,
  maxParticipants: 8,
};

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
 * 基本のロビーページ表示（3人参加）
 * Firebaseロジックを含まない純粋なUIテスト
 */
export const Basic: Story = {
  args: {
    group: mockGroup,
    users: mockUsers,
    roomUrl: 'https://onlinedraft.com/lobby/abc123',
    loading: false,
    isAvatarModalOpen: false,
    usedAvatars: ['1', '2', '3'],
    onJoinClick: () => console.log('Join clicked'),
    onLeaveRoom: () => console.log('Leave room clicked'),
    onAvatarModalClose: () => console.log('Avatar modal closed'),
    onJoinConfirm: (userData: { name: string; avatar: string }) =>
      console.log('Join confirmed:', userData),
  },
};

/**
 * ルームが見つからない状態
 */
export const RoomNotFound: Story = {
  args: {
    group: null,
    users: null,
    roomUrl: '',
    loading: false,
    isAvatarModalOpen: false,
    usedAvatars: [],
    onJoinClick: () => {},
    onLeaveRoom: () => {},
    onAvatarModalClose: () => {},
    onJoinConfirm: () => {},
  },
};

/**
 * 参加者なし（新規ルーム）
 */
export const EmptyRoom: Story = {
  args: {
    group: {
      ...mockGroup,
      groupName: '新規作成ルーム',
    },
    users: [],
    roomUrl: 'https://onlinedraft.com/lobby/newroom123',
    loading: false,
    isAvatarModalOpen: false,
    usedAvatars: [],
    onJoinClick: () => console.log('Join clicked'),
    onLeaveRoom: () => console.log('Leave room clicked'),
    onAvatarModalClose: () => console.log('Avatar modal closed'),
    onJoinConfirm: (userData: { name: string; avatar: string }) =>
      console.log('Join confirmed:', userData),
  },
};
