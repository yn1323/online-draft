import type { Meta, StoryObj } from '@storybook/react';
import { DraftHeader } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/DraftHeader',
  component: DraftHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DraftHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    roundNumber: 3,
    totalRounds: 5,
    groupName: 'ドラフト会議 TEST',
  },
};