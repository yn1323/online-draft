import type { Meta, StoryObj } from '@storybook/react';
import RecentMeetingsList from './RecentMeetingsList';

const mockMeetings = [
  { id: 'abc123', name: '今日のランチドラフト', lastJoined: '2時間前' },
  { id: 'def456', name: '映画選びドラフト', lastJoined: '1日前' },
  { id: 'ghi789', name: 'チームドラフト', lastJoined: '3日前' },
];

// Mock function for stories
const mockOnJoinMeeting = async (id: string) => {
  console.log('Join meeting:', id);
  return Promise.resolve();
};

const meta: Meta<typeof RecentMeetingsList> = {
  title: 'Features/Join/Components/RecentMeetingsList',
  component: RecentMeetingsList,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    meetings: mockMeetings,
    onJoinMeeting: mockOnJoinMeeting,
  },
};

export const Loading: Story = {
  args: {
    meetings: mockMeetings,
    onJoinMeeting: mockOnJoinMeeting,
    loadingMeetingId: 'abc123',
  },
};

export const Empty: Story = {
  args: {
    meetings: [],
    onJoinMeeting: mockOnJoinMeeting,
  },
};

export const SingleMeeting: Story = {
  args: {
    meetings: [mockMeetings[0]],
    onJoinMeeting: mockOnJoinMeeting,
  },
};
