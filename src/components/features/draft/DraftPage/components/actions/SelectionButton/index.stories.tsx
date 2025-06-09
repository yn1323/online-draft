import type { Meta, StoryObj } from '@storybook/react';
import { SelectionButton } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/SelectionButton',
  component: SelectionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log('Selection button clicked!'),
  },
};
