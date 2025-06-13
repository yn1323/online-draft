/**
 * リアルタイム同期サービス
 * 統合Firestore基盤 - 各種サービスを組み合わせたリアルタイム機能
 */

import type {
  ChatMessage,
  ParticipantPresence,
  Round,
} from '@/src/types/draft';
import type { UserDocument } from '../../types/firestore';
import { subscribeToMessages } from '../draft/chatService';
import { subscribeGroupParticipantsStatus } from '../draft/participantService';
import { subscribeToRounds as roundSubscribeToRounds } from '../draft/roundService';
import { subscribeRoundSelections } from '../draft/selectionService';

export interface RealtimeSubscription {
  unsubscribe: () => void;
}

export interface GroupPresence {
  groupId: string;
  users: ParticipantPresence[];
  lastUpdated: Date;
}

/**
 * UserDocumentをParticipantPresenceに変換
 */
const userDocumentToParticipantPresence = (
  userDoc: UserDocument,
): ParticipantPresence => {
  return {
    userId: userDoc.userId || '',
    status: 'online', // 参加者がいる時点でオンライン
    lastSeen: userDoc.updatedAt,
    currentRound: userDoc.currentRound,
  };
};

/**
 * ユーザープレゼンス更新（参加者ステータス経由）
 */
export const updateUserPresence = async (
  groupId: string,
  userId: string,
  presence: Partial<ParticipantPresence>,
): Promise<void> => {
  // 実際の実装では、participantServiceの更新機能を使用
  console.log('🔄 ユーザープレゼンス更新:', { groupId, userId, presence });
  // TODO: 必要に応じてparticipantServiceの機能拡張
};

/**
 * ユーザープレゼンス監視（参加者ステータス経由）
 */
export const subscribeToUserPresence = (
  groupId: string,
  callback: (users: ParticipantPresence[]) => void,
): RealtimeSubscription => {
  const unsubscribe = subscribeGroupParticipantsStatus(
    groupId,
    (participants) => {
      const presences = participants.map(userDocumentToParticipantPresence);
      callback(presences);
    },
  );

  return { unsubscribe };
};

/**
 * ドラフトラウンド監視（roundService経由）
 */
export const subscribeToRounds = (
  groupId: string,
  callback: (rounds: Round[]) => void,
): RealtimeSubscription => {
  const unsubscribe = roundSubscribeToRounds(groupId, callback);
  return { unsubscribe };
};

/**
 * チャットメッセージ監視（chatService経由）
 */
export const subscribeToChatMessages = (
  groupId: string,
  callback: (messages: ChatMessage[]) => void,
): RealtimeSubscription => {
  const unsubscribe = subscribeToMessages(groupId, callback);
  return { unsubscribe };
};

/**
 * ユーザー選択監視（selectionService経由）
 */
export const subscribeToUserSelections = (
  groupId: string,
  roundNumber: number,
  callback: (selections: unknown[]) => void,
): RealtimeSubscription => {
  const unsubscribe = subscribeRoundSelections(
    groupId,
    roundNumber,
    (selections) => {
      callback(selections); // SelectionDocumentをそのまま渡す
    },
  );

  return { unsubscribe };
};

/**
 * グループ状態監視（複数サービス統合）
 */
export const subscribeToGroupState = (
  groupId: string,
  callback: (state: {
    rounds: Round[];
    participants: UserDocument[];
    messages: ChatMessage[];
  }) => void,
): RealtimeSubscription => {
  let rounds: Round[] = [];
  let participants: UserDocument[] = [];
  let messages: ChatMessage[] = [];

  const updateState = () => {
    callback({ rounds, participants, messages });
  };

  // ラウンド監視
  const roundsUnsubscribe = roundSubscribeToRounds(groupId, (newRounds) => {
    rounds = newRounds;
    updateState();
  });

  // 参加者監視
  const participantsUnsubscribe = subscribeGroupParticipantsStatus(
    groupId,
    (newParticipants) => {
      participants = newParticipants;
      updateState();
    },
  );

  // メッセージ監視
  const messagesUnsubscribe = subscribeToMessages(groupId, (newMessages) => {
    messages = newMessages;
    updateState();
  });

  return {
    unsubscribe: () => {
      roundsUnsubscribe();
      participantsUnsubscribe();
      messagesUnsubscribe();
    },
  };
};

/**
 * ユーザー接続開始
 */
export const connectUser = async (
  groupId: string,
  userId: string,
  userName: string,
): Promise<void> => {
  console.log('🔗 ユーザー接続開始:', { groupId, userId, userName });
  await updateUserPresence(groupId, userId, {
    userId,
    status: 'online',
    lastSeen: new Date(),
  });
};

/**
 * ユーザー接続終了
 */
export const disconnectUser = async (
  groupId: string,
  userId: string,
): Promise<void> => {
  console.log('🔌 ユーザー接続終了:', { groupId, userId });
  await updateUserPresence(groupId, userId, {
    status: 'offline',
    lastSeen: new Date(),
  });
};
