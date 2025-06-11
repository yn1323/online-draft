import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { DEV_COLLECTION, db } from '../../lib/firebase';
import type { UserDocument } from '../../types/firestore';

/**
 * Firestoreコレクション構造
 * app/onlinedraft/user/{userId}
 */
const getUserCollection = () => {
  return collection(db, 'app', 'onlinedraft', 'user');
};

/**
 * ユーザーを作成する
 */
export const createUser = async (
  userData: Omit<UserDocument, 'userId' | 'createdAt' | 'updatedAt'>,
): Promise<string> => {
  try {
    const now = new Date();
    const docRef = await addDoc(getUserCollection(), {
      groupId: userData.groupId,
      userName: userData.userName,
      avatar: userData.avatar,
      deleteFlg: false,
      status: userData.status || 'thinking',
      currentRound: userData.currentRound || 1,
      createdAt: now,
      updatedAt: now,
    });

    return docRef.id;
  } catch (error) {
    console.error('CREATEUSER:', error);
    throw new Error('ユーザーの作成に失敗しました');
  }
};

/**
 * グループ内でのユーザー名重複をチェックする
 */
export const checkUserNameExists = async (
  groupId: string,
  userName: string,
): Promise<boolean> => {
  try {
    const q = query(
      getUserCollection(),
      where('groupId', '==', groupId),
      where('userName', '==', userName),
      where('deleteFlg', '==', false),
    );

    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('CHECKUSERNAMEEXISTS:', error);
    throw new Error('ユーザー名の重複チェックに失敗しました');
  }
};

/**
 * グループ内のユーザー一覧を取得する
 */
export const getUsers = async (groupId: string): Promise<UserDocument[]> => {
  try {
    console.log('🔍 ユーザー一覧取得開始:', { groupId });

    const q = query(
      getUserCollection(),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false),
    );

    const querySnapshot = await getDocs(q);
    console.log('📊 ユーザークエリ結果:', {
      groupId,
      docCount: querySnapshot.docs.length,
      docs: querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
    });

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        userId: doc.id,
        groupId: data.groupId,
        userName: data.userName,
        avatar: data.avatar,
        deleteFlg: data.deleteFlg,
        status: data.status || 'thinking',
        currentRound: data.currentRound || 1,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      };
    });
  } catch (error) {
    console.error('GETUSERS:', error);
    throw new Error('ユーザー一覧の取得に失敗しました');
  }
};

/**
 * グループ内のユーザー一覧をリアルタイムで監視する
 */
export const subscribeUsers = (
  groupId: string,
  callback: (users: UserDocument[]) => void,
): (() => void) => {
  try {
    const q = query(
      getUserCollection(),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const users: UserDocument[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
        users.push({
          userId: doc.id,
          groupId: data.groupId,
          userName: data.userName,
          avatar: data.avatar,
          deleteFlg: data.deleteFlg,
          status: data.status || 'thinking',
          currentRound: data.currentRound || 1,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date(),
        });
      });

      callback(users);
    });

    return unsubscribe;
  } catch (error) {
    console.error('SUBSCRIBEUSERS:', error);
    throw new Error('ユーザー一覧の監視に失敗しました');
  }
};

/**
 * ユーザーIDから特定のユーザー情報を取得する
 */
export const getUserById = async (
  userId: string,
): Promise<UserDocument | null> => {
  try {
    console.log('🔍 ユーザー情報取得開始:', { userId });

    const docRef = doc(getUserCollection(), userId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.log('❌ ユーザーが存在しません:', { userId });
      return null;
    }

    const data = docSnap.data();
    const user: UserDocument = {
      userId: docSnap.id,
      groupId: data.groupId,
      userName: data.userName,
      avatar: data.avatar,
      deleteFlg: data.deleteFlg,
      status: data.status || 'thinking',
      currentRound: data.currentRound || 1,
      createdAt: data.createdAt?.toDate() || new Date(),
      updatedAt: data.updatedAt?.toDate() || new Date(),
    };

    console.log('✅ ユーザー情報取得成功:', {
      userId: user.userId,
      name: user.userName,
      groupId: user.groupId,
    });

    return user;
  } catch (error) {
    console.error('❌ ユーザー情報取得エラー:', error);
    throw new Error('ユーザー情報の取得に失敗しました');
  }
};
