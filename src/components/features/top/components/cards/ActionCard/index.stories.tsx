import type { Meta, StoryObj } from '@storybook/react';
import { IoEnter } from 'react-icons/io5';
import { MdAdd } from 'react-icons/md';
import ActionCard from './';

// Mock function for stories
const mockOnClick = () => {
  console.log('Action card clicked');
};

const meta: Meta<typeof ActionCard> = {
  title: 'Features/Top/Components/ActionCard',
  component: ActionCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    colorScheme: {
      control: { type: 'select' },
      options: ['green', 'blue'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CreateAction: Story = {
  args: {
    icon: <MdAdd size={32} />,
    title: 'ドラフトを作る',
    description: '新しい会議を作成',
    colorScheme: 'green',
    onClick: mockOnClick,
  },
};

export const JoinAction: Story = {
  args: {
    icon: <IoEnter size={32} />,
    title: '会議に参加',
    description: 'IDで参加してドラフト',
    colorScheme: 'blue',
    onClick: mockOnClick,
  },
};
