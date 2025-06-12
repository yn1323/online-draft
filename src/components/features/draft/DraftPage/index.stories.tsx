import { withMockAppRouter } from '@/src/test-utils/mocks';
import type { Meta, StoryObj } from '@storybook/react';
import { DraftPage } from './index';
import { mockParticipants, mockPastRounds } from './mocks';

const meta = {
  title: 'Features/Draft/DraftPage',
  component: DraftPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withMockAppRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof DraftPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    roundNumber: 3,
    totalRounds: 5,
    groupName: 'ドラフト会議 TEST',
    participants: mockParticipants,
    pastRounds: mockPastRounds,
    currentRoundTopic: '好きなゲーム',
    currentUserSelection: 'ゼルダの伝説',
    onSubmitSelection: (selection: string, comment?: string) => {
      console.log('選択:', selection, 'コメント:', comment);
    },
    onUpdateSelections: (roundNumber: number, selections) => {
      console.log('ラウンド', roundNumber, 'の選択を更新:', selections);
    },
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    roundNumber: 1,
    pastRounds: [],
    currentUserSelection: '',
    currentRoundTopic: '好きな食べ物',
  },
};
