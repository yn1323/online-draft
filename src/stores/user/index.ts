import type { User } from 'firebase/auth';
import { atom } from 'jotai';
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

// 現在のユーザー情報（ドラフト参加用）
export const currentUserAtom = atom<UserDocument | null>(null);

// グループ内のユーザー一覧
export const groupUsersAtom = atom<UserDocument[]>([]);

// ユーザー登録のローディング状態
export const userRegistrationLoadingAtom = atom(false);

// ユーザー登録のエラー状態
export const userRegistrationErrorAtom = atom<string | null>(null);
