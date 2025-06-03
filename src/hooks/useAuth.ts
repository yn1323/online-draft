"use client";

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/src/lib/firebase';
import { authUserAtom, authLoadingAtom, authErrorAtom } from '@/src/stores/user';

/**
 * Firebase認証の状態を監視するカスタムフック
 * アプリ全体でユーザーの認証状態を管理します
 */
export function useAuth() {
  const [user, setUser] = useAtom(authUserAtom);
  const [loading, setLoading] = useAtom(authLoadingAtom);
  const [error, setError] = useAtom(authErrorAtom);

  useEffect(() => {
    console.log('🔄 Firebase認証状態の監視を開始...');

    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        console.log('🔥 認証状態変更:', firebaseUser ? `UID: ${firebaseUser.uid}` : 'ログアウト');
        
        setUser(firebaseUser);
        setLoading(false);
        setError(null);
      },
      (error) => {
        console.error('❌ 認証状態監視エラー:', error);
        setError(error.message);
        setLoading(false);
      }
    );

    return () => {
      console.log('👋 Firebase認証状態の監視を停止');
      unsubscribe();
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