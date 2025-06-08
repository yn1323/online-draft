import type { Meta, StoryObj } from '@storybook/react';
import { CurrentRoundRow } from './index';
import { mockParticipants } from '../../../mocks';

const meta = {
  title: 'Features/Draft/DraftPage/Components/CurrentRoundRow',
  component: CurrentRoundRow,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CurrentRoundRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    roundNumber: 3,
    participants: mockParticipants,
  },
};