import type { Meta, StoryObj } from '@storybook/react';
import { mockParticipants, mockPastRounds } from '../../../mocks';
import { mockLogs } from '../../chat/ChatLogSection/mocks';
import { TabNavigation } from './index';

// ChatLogSection の LogMessage 型を TabNavigation の messages 型に変換
const convertLogsToMessages = (logs: typeof mockLogs) => {
  return logs
    .filter((log) => log.type === 'chat' || log.type === 'system')
    .map((log) => ({
      id: log.id,
      type: log.type as 'chat' | 'system',
      timestamp: log.timestamp,
      content: log.content,
      user: log.user,
      isMyMessage: log.isMyMessage,
    }));
};

const mockMessages = convertLogsToMessages(mockLogs);

const meta = {
  title: 'Features/Draft/DraftPage/Components/TabNavigation',
  component: TabNavigation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    roundNumber: 3,
    participants: mockParticipants,
    pastRounds: mockPastRounds,
    onRoundClick: (roundNumber: number) =>
      console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) =>
      console.log('User clicked:', roundNumber, userId),
    onOpenInputModal: () => console.log('Input modal opened'),
    messages: mockMessages,
    onSendMessage: (message: string) => console.log('Message sent:', message),
  },
};

export const WithoutPastRounds: Story = {
  args: {
    roundNumber: 1,
    participants: mockParticipants,
    pastRounds: [],
    onRoundClick: (roundNumber: number) =>
      console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) =>
      console.log('User clicked:', roundNumber, userId),
    onOpenInputModal: () => console.log('Input modal opened'),
    messages: mockMessages,
    onSendMessage: (message: string) => console.log('Message sent:', message),
  },
};

export const WithoutMessages: Story = {
  args: {
    roundNumber: 2,
    participants: mockParticipants,
    pastRounds: mockPastRounds,
    onRoundClick: (roundNumber: number) =>
      console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) =>
      console.log('User clicked:', roundNumber, userId),
    onOpenInputModal: () => console.log('Input modal opened'),
    messages: [],
    onSendMessage: (message: string) => console.log('Message sent:', message),
  },
};
