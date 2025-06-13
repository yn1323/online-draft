/**
 * ドラフトチャット処理サービス
 * Firebase Firestore リアルタイム同期対応
 */

import type { ChatMessage } from '@/src/types/draft';
import {
  addDoc,
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import type { LogDocument } from '../../types/firestore';

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
 * Legacy互換のログコレクション取得
 */
const getLogCollection = () => {
  return collection(db, 'app', 'onlinedraft', 'log');
};

/**
 * LogDocumentをChatMessageに変換
 */
const logDocumentToChatMessage = (
  docId: string,
  logDoc: LogDocument,
  metadata?: ChatMessage['metadata'],
): ChatMessage => {
  return {
    id: docId,
    groupId: logDoc.groupId,
    userId: logDoc.userId,
    userName: '参加者', // LogDocumentにはuserNameがないため、別途取得が必要
    userAvatar: '1', // LogDocumentにはuserAvatarがないため、別途取得が必要
    content: logDoc.message,
    timestamp: logDoc.date,
    type: logDoc.userId === 'system' ? 'system' : 'user',
    metadata,
  };
};

/**
 * メッセージ送信
 */
export const sendMessage = async (
  request: SendMessageRequest,
): Promise<ChatMessage> => {
  try {
    console.log('💬 メッセージ送信開始:', request);

    const logData: Omit<LogDocument, 'createdAt' | 'updatedAt'> = {
      groupId: request.groupId,
      userId: request.userId,
      message: request.content,
      date: new Date(),
      deleteFlg: false,
    };

    const docRef = await addDoc(getLogCollection(), {
      ...logData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    const chatMessage: ChatMessage = {
      id: docRef.id,
      groupId: request.groupId,
      userId: request.userId,
      userName: request.userName,
      userAvatar: request.userAvatar,
      content: request.content,
      timestamp: new Date(),
      type: request.type || 'user',
      metadata: request.metadata,
    };

    console.log('✅ メッセージ送信成功:', chatMessage);
    return chatMessage;
  } catch (error) {
    console.error('❌ メッセージ送信エラー:', error);
    throw new Error('メッセージの送信に失敗しました');
  }
};

/**
 * メッセージ一覧取得
 */
export const getMessages = async (
  groupId: string,
  options: GetMessagesOptions = {},
): Promise<{
  messages: ChatMessage[];
  nextCursor?: string;
}> => {
  try {
    const { limit: messageLimit = 50 } = options;

    const q = query(
      getLogCollection(),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false),
      orderBy('date', 'desc'),
      limit(messageLimit),
    );

    const querySnapshot = await getDocs(q);
    const messages: ChatMessage[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as LogDocument;
      const chatMessage = logDocumentToChatMessage(doc.id, data);
      messages.push(chatMessage);
    });

    // 時系列順に並び替え（新しいものが下）
    messages.reverse();

    console.log('📊 メッセージ一覧取得:', messages.length, '件');
    return {
      messages,
      nextCursor: undefined, // TODO: ページネーション実装時に設定
    };
  } catch (error) {
    console.error('❌ メッセージ取得エラー:', error);
    return { messages: [] };
  }
};

/**
 * メッセージリアルタイム監視
 */
export const subscribeToMessages = (
  groupId: string,
  callback: (messages: ChatMessage[]) => void,
): (() => void) => {
  try {
    const q = query(
      getLogCollection(),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false),
      orderBy('date', 'asc'), // リアルタイム監視では昇順で取得
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages: ChatMessage[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data() as LogDocument;
        const chatMessage = logDocumentToChatMessage(doc.id, data);
        messages.push(chatMessage);
      });

      console.log('🔄 メッセージ更新:', messages.length, '件');
      callback(messages);
    });

    return unsubscribe;
  } catch (error) {
    console.error('❌ メッセージ監視エラー:', error);
    throw new Error('メッセージの監視に失敗しました');
  }
};

/**
 * システムメッセージ送信
 */
export const sendSystemMessage = async (
  groupId: string,
  content: string,
  metadata?: ChatMessage['metadata'],
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
  topic: string,
): Promise<ChatMessage> => {
  return sendSystemMessage(groupId, `Round ${roundNumber} 開始: ${topic}`, {
    roundNumber,
  });
};

/**
 * 選択変更メッセージ
 */
export const sendSelectionChangeMessage = async (
  groupId: string,
  userName: string,
  roundNumber: number,
  before: string,
  after: string,
): Promise<ChatMessage> => {
  return sendSystemMessage(groupId, `${userName}が選択を変更しました`, {
    roundNumber,
    selectionChange: { before, after },
  });
};

/**
 * 選択完了メッセージ
 */
export const sendSelectionCompleteMessage = async (
  groupId: string,
  userName: string,
  roundNumber: number,
): Promise<ChatMessage> => {
  return sendSystemMessage(groupId, `${userName}が選択を完了しました`, {
    roundNumber,
  });
};
