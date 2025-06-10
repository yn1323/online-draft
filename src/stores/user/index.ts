import type { User } from 'firebase/auth';
import { atom } from 'jotai';
import {
  clearCurrentUser,
  getCurrentUser,
  saveCurrentUser,
} from '../../helpers/utils/localStorage';
import type { UserDocument } from '../../types/firestore';

// 認証ユーザーの状態管理
export const authUserAtom = atom<User | null>(null);

// 認証状態のローディング管理
export const authLoadingAtom = atom(true);

// 認証エラーの管理
export const authErrorAtom = atom<string | null>(null);

// 既存のuserAtom（下位互換性のため残す）
export const userAtom = atom({
  uid: '',
});

// ===== ユーザー登録機能用のatom =====

// 現在のユーザー情報（ドラフト参加用）- LocalStorage連携
export const currentUserAtom = atom<UserDocument | null>(
  // 初期値はLocalStorageから復元
  (() => {
    if (typeof window === 'undefined') {
      return null; // SSR対応
    }

    const storedUser = getCurrentUser();
    if (storedUser) {
      return {
        userId: storedUser.userId,
        userName: storedUser.userName,
        avatar: storedUser.avatar,
        groupId: '', // groupIdは別途設定
        deleteFlg: false, // 必須プロパティ
      };
    }
    return null;
  })(),
);

// currentUserAtom への書き込み時にLocalStorageも更新
export const setCurrentUserAtom = atom(
  null,
  (get, set, user: UserDocument | null) => {
    set(currentUserAtom, user);

    if (user) {
      // LocalStorageに保存
      saveCurrentUser({
        userId: user.userId || '',
        userName: user.userName,
        avatar: user.avatar,
      });
    } else {
      // LocalStorageからクリア
      clearCurrentUser();
    }
  },
);

// グループ内のユーザー一覧
export const groupUsersAtom = atom<UserDocument[]>([]);

// ユーザー登録のローディング状態
export const userRegistrationLoadingAtom = atom(false);

// ユーザー登録のエラー状態
export const userRegistrationErrorAtom = atom<string | null>(null);
