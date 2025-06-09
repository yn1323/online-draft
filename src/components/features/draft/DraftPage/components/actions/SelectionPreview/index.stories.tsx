import type { Meta, StoryObj } from '@storybook/react';
import { SelectionPreview } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/SelectionPreview',
  component: SelectionPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectionPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selection: 'ゼルダの伝説',
    onEdit: () => console.log('Edit clicked!'),
  },
};
