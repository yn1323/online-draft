/**
 * DraftPage用の共通モックデータ
 * PC版・SP版両方で使用
 */

import type { ChatMessageUIType } from '@/src/hooks/firebase/chat/useRealtimeChat';
import type { BaseParticipant } from './shared/types';

export type ParticipantType = BaseParticipant & {
  acquisitions?: AcquisitionType[];
  currentPick?: string;
};

export type AcquisitionType = {
  name: string;
  comment: string;
  round?: number;
  timestamp?: string;
};

export type DraftPickType = {
  order: number;
  userId: string;
  userName: string;
  avatar: string;
  item: string;
  comment: string;
};

export type DraftRoundType = {
  round: number;
  picks: DraftPickType[];
};

export type ChatMessageType = {
  id: string;
  userName: string;
  avatar: string;
  content: string;
  timestamp: string;
  isSystem?: boolean;
};

// 参加者データ
export const mockParticipants: ParticipantType[] = [
  {
    id: '1',
    name: '田中太郎',
    avatar: '1',
    currentPick: '候補A (タイプB)',
    acquisitions: [
      { name: '大谷翔平', comment: 'やっぱり二刀流！' },
      { name: '佐々木朗希', comment: '完全試合の実績' },
    ],
  },
  {
    id: '2',
    name: '山田花子',
    avatar: '3',
    currentPick: '候補B (タイプA)',
    acquisitions: [{ name: '山本由伸', comment: '最強のエース' }],
  },
  {
    id: '3',
    name: '佐藤次郎',
    avatar: '5',
    currentPick: '選択中...',
    acquisitions: [],
  },
];

// 過去のドラフト結果
export const pastDraftResults: DraftRoundType[] = [
  {
    round: 3,
    picks: [
      {
        order: 1,
        userId: '2',
        userName: '山田花子',
        avatar: '3',
        item: '候補アイテムG',
        comment: 'タイプA',
      },
      {
        order: 2,
        userId: '3',
        userName: '佐藤次郎',
        avatar: '5',
        item: '候補アイテムH',
        comment: 'タイプB',
      },
      {
        order: 3,
        userId: '1',
        userName: '田中太郎',
        avatar: '1',
        item: '候補アイテムI',
        comment: 'タイプC',
      },
    ],
  },
  {
    round: 2,
    picks: [
      {
        order: 1,
        userId: '3',
        userName: '佐藤次郎',
        avatar: '5',
        item: '候補アイテムD',
        comment: 'タイプA',
      },
      {
        order: 2,
        userId: '1',
        userName: '田中太郎',
        avatar: '1',
        item: '候補アイテムE',
        comment: 'タイプB',
      },
      {
        order: 3,
        userId: '2',
        userName: '山田花子',
        avatar: '3',
        item: '候補アイテムF',
        comment: 'タイプC',
      },
    ],
  },
  {
    round: 1,
    picks: [
      {
        order: 1,
        userId: '1',
        userName: '田中太郎',
        avatar: '1',
        item: '候補アイテムA',
        comment: 'タイプA',
      },
      {
        order: 2,
        userId: '2',
        userName: '山田花子',
        avatar: '3',
        item: '候補アイテムB',
        comment: 'タイプB',
      },
      {
        order: 3,
        userId: '3',
        userName: '佐藤次郎',
        avatar: '5',
        item: '候補アイテムC',
        comment: 'タイプC',
      },
    ],
  },
];

// チャットメッセージ（ChatMessageUIType対応版）
export const mockChatMessages: ChatMessageUIType[] = [
  {
    id: '1',
    userName: 'システム',
    avatar: '99',
    content: 'ドラフトを開始しました！',
    timestamp: '14:00',
    isSystem: true,
    isCurrentUser: false,
  },
  {
    id: '2',
    userName: '田中太郎',
    avatar: '1',
    content: '今年は投手中心でいきます！',
    timestamp: '14:01',
    isSystem: false,
    isCurrentUser: true, // テスト用に自分のメッセージとして設定
  },
  {
    id: '3',
    userName: 'システム',
    avatar: '99',
    content: '第1巡目が完了しました',
    timestamp: '14:05',
    isSystem: true,
    isCurrentUser: false,
  },
  {
    id: '4',
    userName: '山田花子',
    avatar: '3',
    content: '大谷取られた〜😭',
    timestamp: '14:05',
    isSystem: false,
    isCurrentUser: false,
  },
  {
    id: '5',
    userName: 'システム',
    avatar: '99',
    content: '佐藤次郎さんの選択中です',
    timestamp: '14:38',
    isSystem: true,
    isCurrentUser: false,
  },
];

// 現在のラウンド
export const currentRound = 4;

// ドラフト名
export const draftName = 'ドラフト名がここに入ります';
