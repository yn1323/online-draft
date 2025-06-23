import type { Meta, StoryObj } from '@storybook/react';
import { mockParticipants } from '../mockData';
import { CurrentRoundStatus } from './index';

const meta: Meta<typeof CurrentRoundStatus> = {
  title: 'Features/draft/CurrentRoundStatus',
  component: CurrentRoundStatus,
  parameters: {
    layout: 'centered',
  },
  args: {
    participants: mockParticipants,
    currentRound: 4,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示
 * アイテム選択ボタン付きの標準的な表示
 */
export const Default: Story = {
  args: {
    variant: 'sp',
    onItemSelect: () => console.log('アイテム選択'),
  },
};
