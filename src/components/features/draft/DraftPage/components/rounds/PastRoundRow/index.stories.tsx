import type { Meta, StoryObj } from '@storybook/react';
import { PastRoundRow } from './index';
import { mockParticipants } from '../../../mocks';

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
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId),
  },
};

// 競馬の馬名を使った長い選択肢のケース
const horseRaceRound = {
  roundNumber: 2,
  topic: '好きな競走馬',
  selections: [
    { userId: '1', userName: 'たけし', item: 'キングカメハメハ', comment: '無敗の三冠馬' },
    { userId: '2', userName: 'みさき', item: 'メイショウサムソン', comment: '最強世代の覇者' },
    { userId: '3', userName: 'ひろし', item: 'ゴールドシップ' },
    { userId: '4', userName: 'あやか', item: 'ジャスタウェイ', comment: 'ドバイ制覇' },
  ],
};

export const LongHorseNames: Story = {
  name: '長い馬名の表示',
  args: {
    round: horseRaceRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId),
  },
};

// 6人参加の超長い馬名ケース
const sixParticipantsRound = {
  roundNumber: 3,
  topic: '印象に残った競走馬',
  selections: [
    { userId: '1', userName: 'たけし', item: 'ウインバリアシオン', comment: '奇跡の復活' },
    { userId: '2', userName: 'みさき', item: 'フサイチコンコルド', comment: '天皇賞春3連覇' },
    { userId: '3', userName: 'ひろし', item: 'サクラローレル' },
    { userId: '4', userName: 'あやか', item: 'タイキシャトル', comment: '最強の三冠馬' },
    { userId: '5', userName: 'けんじ', item: 'エルコンドルパサー', comment: '日本ダービー感動' },
    { userId: '6', userName: 'ゆき', item: 'グラスワンダー', comment: '逃げ切りの美学' },
  ],
};

const sixParticipants = [
  ...mockParticipants,
  { id: '5', name: 'けんじ', avatar: '🦊', status: 'completed' as const },
  { id: '6', name: 'ゆき', avatar: '🐰', status: 'completed' as const },
];

export const SixParticipantsLongNames: Story = {
  name: '6人参加×長い馬名',
  args: {
    round: sixParticipantsRound,
    participants: sixParticipants,
    onRoundClick: (roundNumber: number) => console.log('Round clicked:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId),
  },
};

// 折りたたみ機能のテスト
export const CollapsedState: Story = {
  name: 'SP版折りたたみ状態（✏️編集ボタン付き）',
  args: {
    round: horseRaceRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('詳細モーダル開く:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId),
    isExpanded: false,
    onToggleExpand: () => console.log('折りたたみトグル'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const ExpandedState: Story = {
  name: 'SP版展開状態（✏️編集ボタン付き）',
  args: {
    round: horseRaceRound,
    participants: mockParticipants,
    onRoundClick: (roundNumber: number) => console.log('詳細モーダル開く:', roundNumber),
    onUserClick: (roundNumber: number, userId: string) => console.log('User clicked:', roundNumber, userId),
    isExpanded: true,
    onToggleExpand: () => console.log('折りたたみトグル'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};