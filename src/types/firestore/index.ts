/**
 * Firestore関連型定義
 */

import type { BaseEntity, ID, Timestamp } from '../common/base';

// Firestoreコレクション名
export const COLLECTIONS = {
  GROUPS: 'groups',
  USERS: 'users',
  ROUNDS: 'rounds',
  SELECTIONS: 'selections',
  MESSAGES: 'messages',
} as const;

export type CollectionName = (typeof COLLECTIONS)[keyof typeof COLLECTIONS];

// Firestoreドキュメント基底型
export interface FirestoreDocument extends BaseEntity {
  docId: string;
}

// グループ関連
export interface Groups extends FirestoreDocument {
  name: string;
  description?: string;
  ownerId: ID;
  members: GroupMember[];
  settings: GroupSettings;
  status: 'waiting' | 'active' | 'completed';
  currentRound?: number;
  totalRounds: number;
}

export interface GroupMember {
  userId: ID;
  userName: string;
  avatar: string;
  role: 'owner' | 'member';
  joinedAt: Timestamp;
  status: 'online' | 'away' | 'offline';
}

export interface GroupSettings {
  maxMembers: number;
  allowJoinAfterStart: boolean;
  timeLimit?: number;
  topics: string[];
}

// ユーザー関連
export interface Users extends FirestoreDocument {
  name: string;
  avatar: string;
  email?: string;
  lastLoginAt: Timestamp;
}

// ラウンド関連
export interface Rounds extends FirestoreDocument {
  groupId: ID;
  roundNumber: number;
  topic: string;
  status: 'waiting' | 'active' | 'completed';
  startTime?: Timestamp;
  endTime?: Timestamp;
  selections: RoundSelection[];
}

export interface RoundSelection {
  userId: ID;
  userName: string;
  item: string;
  comment?: string;
  timestamp: Timestamp;
  status: 'draft' | 'submitted' | 'confirmed';
}

// 選択関連
export interface FirestoreSelection extends FirestoreDocument {
  groupId: ID;
  roundId: ID;
  userId: ID;
  userName: string;
  item: string;
  comment?: string;
  status: 'draft' | 'submitted' | 'confirmed';
}

// メッセージ関連
export interface Messages extends FirestoreDocument {
  groupId: ID;
  userId: ID;
  userName: string;
  userAvatar: string;
  content: string;
  type: 'user' | 'system';
  metadata?: MessageMetadata;
}

export interface MessageMetadata {
  roundNumber?: number;
  selectionChange?: {
    before: string;
    after: string;
  };
}

// クエリヘルパー型
export interface FirestoreQuery {
  collection: CollectionName;
  where?: Array<{
    field: string;
    operator: '==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not-in';
    value: unknown;
  }>;
  orderBy?: Array<{
    field: string;
    direction: 'asc' | 'desc';
  }>;
  limit?: number;
  cursor?: string;
}
