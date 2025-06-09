/**
 * 認証サービス
 */

import { auth } from '@/src/lib/firebase';
import type { AuthUser } from '@/src/types/auth';
import {
  type User,
  signOut as firebaseSignOut,
  signInAnonymously,
} from 'firebase/auth';

/**
 * Firebase Userを内部AuthUserに変換
 */
export const convertFirebaseUser = (user: User): AuthUser => {
  return {
    uid: user.uid,
    displayName: user.displayName || undefined,
    email: user.email || undefined,
    photoURL: user.photoURL || undefined,
    isAnonymous: user.isAnonymous,
  };
};

/**
 * 匿名ログイン
 */
export const signInAnonymous = async (): Promise<AuthUser> => {
  try {
    const userCredential = await signInAnonymously(auth);
    return convertFirebaseUser(userCredential.user);
  } catch (error) {
    console.error('Anonymous sign in failed:', error);
    throw error;
  }
};

/**
 * ログアウト
 */
export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Sign out failed:', error);
    throw error;
  }
};

/**
 * 現在のユーザー取得
 */
export const getCurrentUser = (): AuthUser | null => {
  const user = auth.currentUser;
  return user ? convertFirebaseUser(user) : null;
};

/**
 * 認証状態監視
 */
export const onAuthStateChanged = (
  callback: (user: AuthUser | null) => void,
) => {
  return auth.onAuthStateChanged((user) => {
    callback(user ? convertFirebaseUser(user) : null);
  });
};
