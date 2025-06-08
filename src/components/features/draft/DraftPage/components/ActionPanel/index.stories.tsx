import type { Meta, StoryObj } from '@storybook/react';
import { ActionPanel } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/ActionPanel',
  component: ActionPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentUserSelection: 'ゼルダの伝説',
    onOpenInputModal: () => console.log('Open input modal!'),
  },
};