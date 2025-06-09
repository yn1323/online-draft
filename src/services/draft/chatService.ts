/**
 * ドラフトチャット処理サービス
 */

import type { ChatMessage } from '@/src/types/draft';

export interface SendMessageRequest {
  groupId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  type?: 'user' | 'system';
  metadata?: ChatMessage['metadata'];
}

export interface GetMessagesOptions {
  limit?: number;
  cursor?: string;
  roundNumber?: number;
}

/**
 * メッセージ送信
 */
export const sendMessage = async (request: SendMessageRequest): Promise<ChatMessage> => {
  // TODO: Firestore実装
  console.log('sendMessage called with:', request);
  throw new Error('Not implemented');
};

/**
 * メッセージ一覧取得
 */
export const getMessages = async (
  _groupId: string,
  _options: GetMessagesOptions = {}
): Promise<{
  messages: ChatMessage[];
  nextCursor?: string;
}> => {
  // TODO: Firestore実装
  throw new Error('Not implemented');
};

/**
 * システムメッセージ送信
 */
export const sendSystemMessage = async (
  groupId: string,
  content: string,
  metadata?: ChatMessage['metadata']
): Promise<ChatMessage> => {
  return sendMessage({
    groupId,
    userId: 'system',
    userName: 'システム',
    userAvatar: '99',
    content,
    type: 'system',
    metadata,
  });
};

/**
 * ラウンド開始メッセージ
 */
export const sendRoundStartMessage = async (
  groupId: string,
  roundNumber: number,
  topic: string
): Promise<ChatMessage> => {
  return sendSystemMessage(
    groupId,
    `Round ${roundNumber} 開始: ${topic}`,
    { roundNumber }
  );
};

/**
 * 選択変更メッセージ
 */
export const sendSelectionChangeMessage = async (
  groupId: string,
  userName: string,
  roundNumber: number,
  before: string,
  after: string
): Promise<ChatMessage> => {
  return sendSystemMessage(
    groupId,
    `${userName}が選択を変更しました`,
    {
      roundNumber,
      selectionChange: { before, after },
    }
  );
};

/**
 * 選択完了メッセージ
 */
export const sendSelectionCompleteMessage = async (
  groupId: string,
  userName: string,
  roundNumber: number
): Promise<ChatMessage> => {
  return sendSystemMessage(
    groupId,
    `${userName}が選択を完了しました`,
    { roundNumber }
  );
};