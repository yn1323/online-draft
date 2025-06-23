import type { Meta, StoryObj } from '@storybook/react';
import { mockParticipants, pastDraftResults } from '../mockData';
import { PastDraftResults } from './index';

const meta: Meta<typeof PastDraftResults> = {
  title: 'Features/DraftPage/PastDraftResults',
  component: PastDraftResults,
  parameters: {
    layout: 'centered',
  },
  args: {
    pastResults: pastDraftResults,
    participants: mockParticipants,
    onEditClick: (round, playerId, playerName, pick, category) =>
      console.log('編集クリック:', {
        round,
        playerId,
        playerName,
        pick,
        category,
      }),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * PC版スタイル（テーブル形式）
 */
export const PC: Story = {
  args: {
    variant: 'pc',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * SP版スタイル（アコーディオン形式）
 */
export const SP: Story = {
  args: {
    variant: 'sp',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '500px' }}>
        <Story />
      </div>
    ),
  ],
};
