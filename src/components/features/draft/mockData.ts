/**
 * DraftPage用の共通モックデータ
 * PC版・SP版両方で使用
 */

import type { ChatMessageUIType } from '@/src/hooks/firebase/chat/useRealtimeChat';

export type ParticipantType = {
  id: string;
  name: string;
  avatar: string;
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
  playerId: string;
  playerName: string;
  avatar: string;
  pick: string;
  category: string;
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
        playerId: '2',
        playerName: '山田花子',
        avatar: '3',
        pick: '候補アイテムG',
        category: 'タイプA',
      },
      {
        order: 2,
        playerId: '3',
        playerName: '佐藤次郎',
        avatar: '5',
        pick: '候補アイテムH',
        category: 'タイプB',
      },
      {
        order: 3,
        playerId: '1',
        playerName: '田中太郎',
        avatar: '1',
        pick: '候補アイテムI',
        category: 'タイプC',
      },
    ],
  },
  {
    round: 2,
    picks: [
      {
        order: 1,
        playerId: '3',
        playerName: '佐藤次郎',
        avatar: '5',
        pick: '候補アイテムD',
        category: 'タイプA',
      },
      {
        order: 2,
        playerId: '1',
        playerName: '田中太郎',
        avatar: '1',
        pick: '候補アイテムE',
        category: 'タイプB',
      },
      {
        order: 3,
        playerId: '2',
        playerName: '山田花子',
        avatar: '3',
        pick: '候補アイテムF',
        category: 'タイプC',
      },
    ],
  },
  {
    round: 1,
    picks: [
      {
        order: 1,
        playerId: '1',
        playerName: '田中太郎',
        avatar: '1',
        pick: '候補アイテムA',
        category: 'タイプA',
      },
      {
        order: 2,
        playerId: '2',
        playerName: '山田花子',
        avatar: '3',
        pick: '候補アイテムB',
        category: 'タイプB',
      },
      {
        order: 3,
        playerId: '3',
        playerName: '佐藤次郎',
        avatar: '5',
        pick: '候補アイテムC',
        category: 'タイプC',
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
