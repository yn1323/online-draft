import type { Meta, StoryObj } from '@storybook/react';
import { PastRoundRow } from './index';
import { mockParticipants } from '../../mocks';

const meta = {
  title: 'Features/Draft/DraftPage/Components/PastRoundRow',
  component: PastRoundRow,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PastRoundRow>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleRound = {
  roundNumber: 1,
  topic: '好きな食べ物',
  selections: [
    { userId: '1', userName: 'たけし', item: 'ラーメン', comment: '深夜に食べたくなる定番' },
    { userId: '2', userName: 'みさき', item: '寿司', comment: '新鮮なネタが最高' },
    { userId: '3', userName: 'ひろし', item: 'カレー' },
    { userId: '4', userName: 'あやか', item: 'ピザ', comment: 'みんなでシェアできる' },
  ],
};

export const Default: Story = {
  args: {
    round: sampleRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
  },
};