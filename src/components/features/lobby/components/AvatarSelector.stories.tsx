import type { Meta, StoryObj } from '@storybook/react';
import AvatarSelector from './AvatarSelector';

// Mock function for stories
const mockOnAvatarSelect = (index: string) => {
  console.log('Avatar selected:', index);
};

const mockAvatars = Array.from({ length: 18 }, (_, i) => ({
  index: `${i + 1}`,
  path: `/img/${i + 1}.png`,
}));

const meta: Meta<typeof AvatarSelector> = {
  title: 'Features/Lobby/Components/AvatarSelector',
  component: AvatarSelector,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selectedAvatarIndex: {
      control: { type: 'select' },
      options: ['', '1', '5', '10'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatars: mockAvatars,
    onAvatarSelect: mockOnAvatarSelect,
  },
};

export const WithSelection: Story = {
  args: {
    avatars: mockAvatars,
    selectedAvatarIndex: '5',
    onAvatarSelect: mockOnAvatarSelect,
  },
};

export const WithError: Story = {
  args: {
    avatars: mockAvatars,
    onAvatarSelect: mockOnAvatarSelect,
    errorMessage: 'アバターを選択してください',
  },
};

export const SmallSet: Story = {
  args: {
    avatars: mockAvatars.slice(0, 6),
    selectedAvatarIndex: '3',
    onAvatarSelect: mockOnAvatarSelect,
  },
};
