import type { Meta, StoryObj } from '@storybook/react';
import UserSelectStep from './';

// Mock functions for stories
const mockOnUserSelect = (userId: string) => {
  console.log('User selected:', userId);
};
const mockOnCreateNewUser = () => {
  console.log('Create new user clicked');
};

const mockUsers = [
  { userId: '1', userName: '田中太郎', avatarIndex: '1', avatar: '/img/1.png' },
  { userId: '2', userName: '山田花子', avatarIndex: '5', avatar: '/img/5.png' },
];

const meta: Meta<typeof UserSelectStep> = {
  title: 'Features/Lobby/UserSelectStep',
  component: UserSelectStep,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithExistingUsers: Story = {
  args: {
    users: mockUsers,
    onUserSelect: mockOnUserSelect,
    onCreateNewUser: mockOnCreateNewUser,
  },
};

export const NoExistingUsers: Story = {
  args: {
    users: [],
    onUserSelect: mockOnUserSelect,
    onCreateNewUser: mockOnCreateNewUser,
  },
};

export const Loading: Story = {
  args: {
    users: mockUsers,
    onUserSelect: mockOnUserSelect,
    onCreateNewUser: mockOnCreateNewUser,
    isLoading: true,
  },
};
