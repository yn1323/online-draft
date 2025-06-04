/**
 * Jotaiストア関連のモック
 */

import type { User } from 'firebase/auth';
import { createStore } from 'jotai';
import { authLoadingAtom, authUserAtom, userAtom } from '../../stores/user';
import { createMockFirebaseUser } from './firebase-user';

/**
 * モック用のJotaiストア作成
 */
export const createMockJotaiStore = (options?: {
  user?: User | null;
  loading?: boolean;
}) => {
  const store = createStore();
  const mockUser = options?.user ?? createMockFirebaseUser();
  const loading = options?.loading ?? false;

  // 認証状態を設定
  store.set(authUserAtom, mockUser);
  store.set(authLoadingAtom, loading);
  store.set(userAtom, {
    uid: mockUser?.uid ?? 'mock-user-id',
  });

  return store;
};

/**
 * よく使われるストアパターン
 */
export const mockStores = {
  // 認証済み状態
  authenticated: () =>
    createMockJotaiStore({
      user: createMockFirebaseUser(),
      loading: false,
    }),

  // 未認証状態
  unauthenticated: () =>
    createMockJotaiStore({
      user: null,
      loading: false,
    }),

  // ローディング中
  loading: () =>
    createMockJotaiStore({
      user: null,
      loading: true,
    }),
};
