import type { Meta, StoryObj } from '@storybook/react';
import ExistingUserList from './ExistingUserList';

// Mock function for stories
const mockOnUserSelect = (userId: string) => {
  console.log('User selected:', userId);
};

const mockUsers = [
  { userId: '1', userName: '田中太郎', avatarIndex: '1', avatar: '/img/1.png' },
  { userId: '2', userName: '山田花子', avatarIndex: '5', avatar: '/img/5.png' },
  {
    userId: '3',
    userName: '佐藤次郎',
    avatarIndex: '10',
    avatar: '/img/10.png',
  },
];

const meta: Meta<typeof ExistingUserList> = {
  title: 'Features/Lobby/Components/ExistingUserList',
  component: ExistingUserList,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    users: mockUsers,
    onUserSelect: mockOnUserSelect,
  },
};

export const Loading: Story = {
  args: {
    users: mockUsers,
    onUserSelect: mockOnUserSelect,
    isLoading: true,
  },
};

export const SingleUser: Story = {
  args: {
    users: [mockUsers[0]],
    onUserSelect: mockOnUserSelect,
  },
};

export const Empty: Story = {
  args: {
    users: [],
    onUserSelect: mockOnUserSelect,
  },
};
