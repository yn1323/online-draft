import type { Meta, StoryObj } from '@storybook/react';
import { StageModal } from './index';
import type { ParticipantResult } from './stage';

const meta: Meta<typeof StageModal> = {
  title: 'Features/draft/modals/StageModal',
  component: StageModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StageModal>;

// モック参加者データ
const mockParticipants: ParticipantResult[] = [
  {
    id: '1',
    name: '田中太郎',
    avatar: 1,
    choice: '大谷翔平',
    willLose: false,
  },
  {
    id: '2',
    name: '佐藤花子',
    avatar: 2,
    choice: '大谷翔平',
    willLose: true,
  },
  {
    id: '3',
    name: '鈴木一郎',
    avatar: 3,
    choice: '山田太郎',
    willLose: false,
  },
  {
    id: '4',
    name: '高橋次郎',
    avatar: 4,
    choice: '佐々木朗希',
    willLose: false,
  },
  {
    id: '5',
    name: '山田美咲',
    avatar: 5,
    choice: '村上宗隆',
    willLose: false,
  },
  {
    id: '6',
    name: '中村翔太',
    avatar: 6,
    choice: 'ダルビッシュ有',
    willLose: false,
  },
];

/**
 * カードめくり演出パターン
 */
export const Card: Story = {
  args: {
    isOpen: true,
    variant: 'card',
    participants: mockParticipants,
    onClose: () => console.log('Modal closed'),
  },
};

/**
 * タイピング演出パターン
 */
export const Typing: Story = {
  args: {
    isOpen: true,
    variant: 'typing',
    participants: mockParticipants,
    onClose: () => console.log('Modal closed'),
  },
};

/**
 * スロットマシン演出パターン
 */
export const SlotMachine: Story = {
  args: {
    isOpen: true,
    variant: 'slot',
    participants: mockParticipants,
    onClose: () => console.log('Modal closed'),
  },
};
