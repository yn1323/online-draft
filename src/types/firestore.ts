/**
 * Firestore データ型定義 (Legacy 互換)
 */

/**
 * Users 型定義 (Legacy 互換)
 */
export type Users = {
  userId: string;
  userName: string;
  avatar: string; // アバターインデックス ("1", "2", etc.)
  avatarIndex: string; // 同じくアバターインデックス
};

/**
 * Groups コレクション (Legacy 互換)
 */
export type Groups = {
  groupName: string;
  round: number; // 現在のラウンド (1から開始)
  finishedRound: number[]; // 完了したラウンドの配列
  deleteFlg: boolean;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * 参加者ステータス型
 */
export type ParticipantStatus = 'thinking' | 'entered' | 'completed';

/**
 * Users コレクション (Legacy 互換)
 */
export type UserDocument = {
  userId?: string; // FirestoreドキュメントID（新規作成時は未定義）
  groupId: string;
  userName: string;
  avatar: string; // アバターインデックス ("1", "2", etc.)
  deleteFlg: boolean;
  status?: ParticipantStatus; // 現在のラウンドでの参加者ステータス
  currentRound?: number; // 現在のラウンド番号
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Log コレクション (チャット) (Legacy 互換)
 */
export type LogDocument = {
  groupId: string;
  userId: string;
  message: string;
  date: Date;
  deleteFlg: boolean;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Selection コレクション (Legacy 互換)
 */
export type SelectionDocument = {
  userId: string;
  selection: Selection[];
  createdAt: Date;
  updatedAt: Date;
};

export type Selection = {
  randomNumber: number; // 競合解決用
  item: string; // 選択したアイテム名
  round: number; // どのラウンドの選択か
  comment: string; // ユーザーのコメント
};

/**
 * Firestore Collection 名 (Legacy 互換)
 */
export const COLLECTIONS = {
  BASE: ['app', 'onlinedraft'],
  GROUP: 'group',
  USER: 'user',
  LOG: 'log',
  SELECTION: 'selection',
} as const;

/**
 * アバター関連定数
 */
export const AVATAR_CONFIG = {
  COUNT: 18, // メインアバター数
  SPECIAL: '99', // 特別アバター
  PATH_PREFIX: '/img/',
  PATH_SUFFIX: '.png',
} as const;
