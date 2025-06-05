/**
 * Firebase User関連のモック
 */

import type { User } from 'firebase/auth';

/**
 * モック用のFirebaseユーザーオブジェクト作成
 */
export const createMockFirebaseUser = (overrides?: Partial<User>): User =>
  ({
    uid: 'mock-user-id',
    isAnonymous: true,
    displayName: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: 'firebase',
    refreshToken: 'mock-refresh-token',
    tenantId: null,
    emailVerified: false,
    metadata: {
      creationTime: undefined,
      lastSignInTime: undefined,
    },
    providerData: [],
    delete: async () => {},
    getIdToken: async () => 'mock-token',
    getIdTokenResult: async () => ({}) as import('firebase/auth').IdTokenResult,
    reload: async () => {},
    toJSON: () => ({}),
    ...overrides,
  }) as User;

/**
 * よく使われるユーザーパターン
 */
export const mockUsers = {
  // 通常の匿名ユーザー
  anonymous: createMockFirebaseUser(),

  // カスタムUIDのユーザー
  withCustomUid: (uid: string) => createMockFirebaseUser({ uid }),

  // 認証済みユーザー（メールアドレス付き）
  authenticated: createMockFirebaseUser({
    isAnonymous: false,
    email: 'test@example.com',
    displayName: 'テストユーザー',
    emailVerified: true,
  }),
};
