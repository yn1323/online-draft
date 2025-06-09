'use client';

import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { auth } from '@/src/lib/firebase';
import {
  authErrorAtom,
  authLoadingAtom,
  authUserAtom,
} from '@/src/stores/user';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

/**
 * Firebase認証の状態を監視するカスタムフック
 * アプリ全体でユーザーの認証状態を管理します
 */
export function useAuth() {
  const [user, setUser] = useAtom(authUserAtom);
  const [loading, setLoading] = useAtom(authLoadingAtom);
  const [error, setError] = useAtom(authErrorAtom);

  useEffect(() => {
    if (isStorybookEnvironment()) {
      console.log('📚 Storybook環境のためFirebase認証監視をスキップ');
      setLoading(false);
      setUser(null);
      setError(null);
      return;
    }

    console.log('🔄 Firebase認証状態の監視を開始...');

    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        console.log(
          '🔥 認証状態変更:',
          firebaseUser ? `UID: ${firebaseUser.uid}` : 'ログアウト',
        );

        setUser(firebaseUser);
        setLoading(false);
        setError(null);
      },
      (error) => {
        console.error('❌ 認証状態監視エラー:', error);
        setError(error.message);
        setLoading(false);
      },
    );

    // 他サイト離脱時の自動ログアウト（Storybook環境以外）
    const handleBeforeUnload = async () => {
      if (auth.currentUser) {
        console.log('🚪 他サイト離脱検知 - 自動ログアウト実行');
        try {
          await signOut(auth);
        } catch (error) {
          console.error('❌ 自動ログアウトエラー:', error);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      console.log('👋 Firebase認証状態の監視を停止');
      unsubscribe();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [setUser, setLoading, setError]);

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    isAnonymous: user?.isAnonymous || false,
  };
}
