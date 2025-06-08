import type { Meta, StoryObj } from '@storybook/react';
import { InputModal } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/InputModal',
  component: InputModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    roundNumber: 3,
    currentRoundTopic: '好きなゲーム',
    selection: '',
    comment: '',
    onClose: () => console.log('Close'),
    onSelectionChange: (value: string) => console.log('Selection:', value),
    onCommentChange: (value: string) => console.log('Comment:', value),
    onSubmit: () => console.log('Submit'),
  },
};