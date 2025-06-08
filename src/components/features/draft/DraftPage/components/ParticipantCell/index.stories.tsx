import type { Meta, StoryObj } from '@storybook/react';
import { ParticipantCell } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/ParticipantCell',
  component: ParticipantCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ParticipantCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStatuses: Story = {
  args: {
    participant: { id: '1', name: 'たけし', avatar: '1', status: 'thinking' },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <ParticipantCell participant={{ id: '1', name: 'たけし', avatar: '1', status: 'thinking' }} />
      <ParticipantCell participant={{ id: '2', name: 'みさき', avatar: '2', status: 'entered' }} />
      <ParticipantCell participant={{ id: '3', name: 'ひろし', avatar: '3', status: 'completed' }} />
    </div>
  ),
};