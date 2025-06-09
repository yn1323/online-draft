import type { Meta, StoryObj } from '@storybook/react';
import { DraftHeader } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/DraftHeader',
  component: DraftHeader,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onOpenOptions: { action: 'open options' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DraftHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupName: 'ドラフト会議 TEST',
  },
};

export const LongName: Story = {
  args: {
    groupName: '第3回 推しキャラクター最強決定戦ドラフト大会',
  },
};

export const ShortName: Story = {
  args: {
    groupName: 'お試し',
  },
};