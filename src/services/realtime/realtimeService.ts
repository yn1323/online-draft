/**
 * リアルタイム同期サービス
 */

export interface RealtimeSubscription {
  unsubscribe: () => void;
}

export interface UserPresence {
  userId: string;
  userName: string;
  status: 'online' | 'away' | 'offline';
  lastSeen: Date;
  currentRound?: number;
}

export interface GroupPresence {
  groupId: string;
  users: UserPresence[];
  lastUpdated: Date;
}

/**
 * ユーザープレゼンス更新
 */
export const updateUserPresence = async (
  _groupId: string,
  _userId: string,
  _presence: Partial<UserPresence>
): Promise<void> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ユーザープレゼンス監視
 */
export const subscribeToUserPresence = (
  _groupId: string,
  _callback: (users: UserPresence[]) => void
): RealtimeSubscription => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ドラフトラウンド監視
 */
export const subscribeToRounds = (
  _groupId: string,
  _callback: (rounds: unknown[]) => void
): RealtimeSubscription => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * チャットメッセージ監視
 */
export const subscribeToChatMessages = (
  _groupId: string,
  _callback: (messages: unknown[]) => void
): RealtimeSubscription => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ユーザー選択監視
 */
export const subscribeToUserSelections = (
  _groupId: string,
  _roundNumber: number,
  _callback: (selections: unknown[]) => void
): RealtimeSubscription => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * グループ状態監視
 */
export const subscribeToGroupState = (
  _groupId: string,
  _callback: (state: unknown) => void
): RealtimeSubscription => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * ユーザー接続開始
 */
export const connectUser = async (
  groupId: string,
  userId: string,
  userName: string
): Promise<void> => {
  await updateUserPresence(groupId, userId, {
    userId,
    userName,
    status: 'online',
    lastSeen: new Date(),
  });
};

/**
 * ユーザー接続終了
 */
export const disconnectUser = async (
  groupId: string,
  userId: string
): Promise<void> => {
  await updateUserPresence(groupId, userId, {
    status: 'offline',
    lastSeen: new Date(),
  });
};