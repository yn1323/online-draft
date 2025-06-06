import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { db, DEV_COLLECTION } from '../../lib/firebase';
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
export const createUser = async (userData: Omit<UserDocument, 'userId'>): Promise<string> => {
  try {
    const docRef = await addDoc(getUserCollection(), {
      groupId: userData.groupId,
      userName: userData.userName,
      avatar: userData.avatar,
      deleteFlg: false,
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
  userName: string
): Promise<boolean> => {
  try {
    const q = query(
      getUserCollection(),
      where('groupId', '==', groupId),
      where('userName', '==', userName),
      where('deleteFlg', '==', false)
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
    const q = query(
      getUserCollection(),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false)
    );
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map((doc) => ({
      userId: doc.id,
      groupId: doc.data().groupId,
      userName: doc.data().userName,
      avatar: doc.data().avatar,
      deleteFlg: doc.data().deleteFlg,
    }));
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
  callback: (users: UserDocument[]) => void
): (() => void) => {
  try {
    const q = query(
      getUserCollection(),
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const users: UserDocument[] = [];
      
      snapshot.forEach((doc) => {
        users.push({
          userId: doc.id,
          groupId: doc.data().groupId,
          userName: doc.data().userName,
          avatar: doc.data().avatar,
          deleteFlg: doc.data().deleteFlg,
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