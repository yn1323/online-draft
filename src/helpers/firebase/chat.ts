import {
  Timestamp,
  addDoc,
  collection,
  limit as firestoreLimit,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';

/**
 * Firestoreコレクション構造 (Legacy互換)
 * app/onlinedraft/log/{logId}
 */
const getChatCollection = () => {
  return collection(db, 'app', 'onlinedraft', 'log');
};

/**
 * Legacy互換チャットメッセージ型
 */
export interface ChatDocument {
  groupId: string;
  userId: string;
  message: string;
  date: Timestamp;
  deleteFlg: boolean;
}

/**
 * メッセージを送信する (Legacy互換)
 */
export const createChatMessage = async (
  chatData: Omit<ChatDocument, 'date' | 'deleteFlg'>,
): Promise<string> => {
  try {
    const docRef = await addDoc(getChatCollection(), {
      groupId: chatData.groupId,
      userId: chatData.userId,
      message: chatData.message,
      date: Timestamp.now(),
      deleteFlg: false,
    });

    console.log('✅ チャットメッセージ送信成功:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('❌ チャットメッセージ送信エラー:', error);
    throw new Error('チャットメッセージの送信に失敗しました');
  }
};

/**
 * グループ内のメッセージ一覧を取得する
 */
export const getChatMessages = async (
  groupId: string,
  limit = 50,
): Promise<(ChatDocument & { id: string })[]> => {
  try {
    const q = query(
      getChatCollection(),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false),
      orderBy('date', 'desc'),
      firestoreLimit(limit),
    );

    const querySnapshot = await getDocs(q);

    const messages = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      groupId: doc.data().groupId,
      userId: doc.data().userId,
      message: doc.data().message,
      date: doc.data().date,
      deleteFlg: doc.data().deleteFlg,
    }));

    // 時系列順に並び替え（古い順）
    return messages.reverse();
  } catch (error) {
    console.error('❌ チャットメッセージ取得エラー:', error);
    throw new Error('チャットメッセージの取得に失敗しました');
  }
};

/**
 * グループ内のメッセージをリアルタイムで監視する
 */
export const subscribeChatMessages = (
  groupId: string,
  callback: (messages: (ChatDocument & { id: string })[]) => void,
): (() => void) => {
  try {
    const q = query(
      getChatCollection(),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false),
      orderBy('date', 'asc'), // リアルタイムでは古い順で取得
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages: (ChatDocument & { id: string })[] = [];

      snapshot.forEach((doc) => {
        messages.push({
          id: doc.id,
          groupId: doc.data().groupId,
          userId: doc.data().userId,
          message: doc.data().message,
          date: doc.data().date,
          deleteFlg: doc.data().deleteFlg,
        });
      });

      console.log('💬 チャットメッセージ更新:', messages.length, '件');
      callback(messages);
    });

    return unsubscribe;
  } catch (error) {
    console.error('❌ チャットメッセージ監視エラー:', error);
    throw new Error('チャットメッセージの監視に失敗しました');
  }
};
