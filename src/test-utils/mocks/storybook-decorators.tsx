/**
 * Storybook デコレーター関連のモック
 */

import type { Decorator } from '@storybook/react';
import type { User } from 'firebase/auth';
import { Provider as JotaiProvider } from 'jotai';
import type React from 'react';
import { createMockFirebaseUser } from './firebase-user';
import { createMockJotaiStore } from './jotai-store';

/**
 * 認証状態付きJotaiプロバイダーデコレーター
 */
export const withMockAuth =
  (options?: {
    user?: User | null;
    loading?: boolean;
  }): Decorator =>
  (Story: React.ComponentType) => {
    const mockStore = createMockJotaiStore(options);

    return (
      <JotaiProvider store={mockStore}>
        <Story />
      </JotaiProvider>
    );
  };

/**
 * 認証済みユーザー用デコレーター
 */
export const withAuthenticatedUser: Decorator = withMockAuth({
  user: createMockFirebaseUser(),
  loading: false,
});

/**
 * 未認証ユーザー用デコレーター
 */
export const withUnauthenticatedUser: Decorator = withMockAuth({
  user: null,
  loading: false,
});

/**
 * 認証ローディング中用デコレーター
 */
export const withAuthLoading: Decorator = withMockAuth({
  user: null,
  loading: true,
});

/**
 * カスタムユーザー用デコレーター作成
 */
export const withCustomUser = (userOverrides: Partial<User>): Decorator =>
  withMockAuth({
    user: createMockFirebaseUser(userOverrides),
    loading: false,
  });
