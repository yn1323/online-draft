/**
 * ドラフト機能型定義
 */

import type { BaseEntity, ID, Timestamp } from '../common/base';

// ドラフトゲーム状態
export type DraftStatus = 'waiting' | 'active' | 'completed';
export type RoundStatus = 'waiting' | 'active' | 'completed';
export type SelectionStatus = 'draft' | 'submitted' | 'confirmed';

// ドラフトグループ
export interface DraftGroup extends BaseEntity {
  name: string;
  description?: string;
  ownerId: ID;
  currentRound: number;
  totalRounds: number;
  status: DraftStatus;
  settings: DraftSettings;
}

export interface DraftSettings {
  maxParticipants: number;
  timeLimit?: number;
  allowLateJoin: boolean;
  topics: string[];
}

// 参加者
export interface Participant {
  userId: ID;
  userName: string;
  avatar: string;
  status: 'online' | 'away' | 'offline';
  joinedAt: Timestamp;
  isOwner: boolean;
}

// ラウンド
export interface Round {
  id: ID;
  groupId: ID;
  roundNumber: number;
  topic: string;
  status: RoundStatus;
  startTime?: Timestamp;
  endTime?: Timestamp;
  timeLimit?: number;
}

// 選択
export interface Selection {
  id: ID;
  groupId: ID;
  roundId: ID;
  roundNumber: number;
  userId: ID;
  userName: string;
  item: string;
  comment?: string;
  status: SelectionStatus;
  submittedAt?: Timestamp;
  confirmedAt?: Timestamp;
}

// ラウンド結果
export interface RoundResult {
  roundNumber: number;
  topic: string;
  selections: Selection[];
  conflicts: ConflictGroup[];
  winners: Selection[];
  completedAt: Timestamp;
}

export interface ConflictGroup {
  item: string;
  participants: Selection[];
  resolution?: 'pending' | 'resolved';
  winner?: Selection;
}

// ドラフト履歴
export interface DraftHistory {
  groupId: ID;
  groupName: string;
  rounds: RoundResult[];
  participants: Participant[];
  completedAt: Timestamp;
  finalResults: {
    userId: ID;
    userName: string;
    selections: Selection[];
    score: number;
  }[];
}

// UI状態
export interface DraftPageState {
  selectedTab: 'current' | 'history' | 'chat';
  currentSelection: string;
  selectionComment: string;
  isSubmitting: boolean;
  showConfirmModal: boolean;
  showOptionsModal: boolean;
}

export interface ChatState {
  messages: ChatMessage[];
  newMessage: string;
  isLoading: boolean;
  hasMore: boolean;
}

export interface ChatMessage {
  id: ID;
  groupId: ID;
  userId: ID;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: Timestamp;
  type: 'user' | 'system';
  metadata?: {
    roundNumber?: number;
    selectionChange?: {
      before: string;
      after: string;
    };
  };
}

// フォーム
export interface SelectionFormData {
  item: string;
  comment?: string;
}

export interface GroupCreateFormData {
  name: string;
  description?: string;
  maxParticipants: number;
  timeLimit?: number;
  topics: string[];
}

// API Request/Response
export interface CreateGroupRequest {
  name: string;
  description?: string;
  settings: DraftSettings;
}

export interface JoinGroupRequest {
  groupId: ID;
  userId: ID;
  userName: string;
  avatar: string;
}

export interface SubmitSelectionRequest {
  groupId: ID;
  roundId: ID;
  userId: ID;
  item: string;
  comment?: string;
}

export interface UpdateSelectionRequest {
  selectionId: ID;
  item?: string;
  comment?: string;
}

// リアルタイム更新
export interface RealtimeEvent {
  type:
    | 'round_start'
    | 'round_end'
    | 'selection_submitted'
    | 'participant_joined'
    | 'participant_left'
    | 'message_sent';
  payload: unknown;
  timestamp: Timestamp;
}

export interface ParticipantPresence {
  userId: ID;
  status: 'online' | 'away' | 'offline';
  lastSeen: Timestamp;
  currentRound?: number;
}
