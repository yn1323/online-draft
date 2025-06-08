import type { Meta, StoryObj } from '@storybook/react';
import { RoundHistoryTable } from './index';
import { mockParticipants, mockPastRounds } from '../../mocks';

const meta = {
  title: 'Features/Draft/DraftPage/Components/RoundHistoryTable',
  component: RoundHistoryTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RoundHistoryTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    roundNumber: 3,
    participants: mockParticipants,
    pastRounds: mockPastRounds,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
    onOpenInputModal: () => console.log('Input modal opened'),
  },
};

export const Empty: Story = {
  args: {
    roundNumber: 1,
    participants: mockParticipants,
    pastRounds: [],
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
    onOpenInputModal: () => console.log('Input modal opened'),
  },
};