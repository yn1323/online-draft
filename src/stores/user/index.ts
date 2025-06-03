import { atom } from 'jotai';
import type { User } from 'firebase/auth';

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
