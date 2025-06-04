import type { UserCreateForm } from '@/src/constants/schemas';
import type { Meta, StoryObj } from '@storybook/react';
import UserCreateStep from './UserCreateStep';

// Mock functions for stories
const mockOnBack = () => {
  console.log('Back button clicked');
};
const mockOnSubmit = async (data: UserCreateForm) => {
  console.log('Form submitted:', data);
  return Promise.resolve();
};

const mockAvatars = Array.from({ length: 18 }, (_, i) => ({
  index: `${i + 1}`,
  path: `/img/${i + 1}.png`,
}));

const meta: Meta<typeof UserCreateStep> = {
  title: 'Features/Lobby/UserCreateStep',
  component: UserCreateStep,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatars: mockAvatars,
    onBack: mockOnBack,
    onSubmit: mockOnSubmit,
  },
};

export const Loading: Story = {
  args: {
    avatars: mockAvatars,
    onBack: mockOnBack,
    onSubmit: mockOnSubmit,
    isLoading: true,
  },
};

export const SmallAvatarSet: Story = {
  args: {
    avatars: mockAvatars.slice(0, 6),
    onBack: mockOnBack,
    onSubmit: mockOnSubmit,
  },
};
