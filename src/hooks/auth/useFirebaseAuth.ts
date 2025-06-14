'use client';

import { auth } from '@/src/lib/firebase';
import { type User, signInAnonymously } from 'firebase/auth';
import { useEffect, useState } from 'react';

type AuthStateType = {
  user: User | null;
  loading: boolean;
  error: Error | null;
};

/**
 * Firebase匿名認証カスタムフック
 * ユーザーの認証状態を管理し、匿名サインイン機能を提供
 */
export const useFirebaseAuth = () => {
  const [authState, setAuthState] = useState<AuthStateType>({
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setAuthState({
          user,
          loading: false,
          error: null,
        });
      },
      (error) => {
        setAuthState({
          user: null,
          loading: false,
          error,
        });
      },
    );

    return unsubscribe;
  }, []);

  /**
   * 匿名認証サインイン
   * Firebase Authenticationによる匿名ユーザー作成
   */
  const signInAnonymous = async () => {
    try {
      setAuthState((prev) => ({ ...prev, loading: true, error: null }));
      const result = await signInAnonymously(auth);
      return result.user;
    } catch (error) {
      // 型ガードで安全に処理
      if (error instanceof Error) {
        // Firebase特化エラーハンドリング
        let errorMessage = '予期しないエラーが発生しました';

        if (error.message.includes('permission-denied')) {
          errorMessage = '認証権限エラー - この操作は許可されていません';
        } else if (error.message.includes('unavailable')) {
          errorMessage = '接続エラー - インターネット接続を確認してください';
        }

        const authError = new Error(errorMessage);
        setAuthState((prev) => ({ ...prev, loading: false, error: authError }));
        throw authError;
      }

      // Error以外の場合の汎用エラー
      const genericError = new Error('認証処理中にエラーが発生しました');
      setAuthState((prev) => ({
        ...prev,
        loading: false,
        error: genericError,
      }));
      throw genericError;
    }
  };

  return {
    user: authState.user,
    loading: authState.loading,
    error: authState.error,
    signInAnonymous,
    isAuthenticated: !!authState.user,
  };
};
