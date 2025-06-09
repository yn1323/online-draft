'use client';

import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { auth } from '@/src/lib/firebase';
import { signInAnonymously } from 'firebase/auth';
import { useEffect } from 'react';
import { useAuth } from './useAuth';

/**
 * ロビーページでの自動匿名ログイン処理
 * Storybook環境では自動ログインをスキップ
 */
export const useAutoAuth = () => {
  const { isAuthenticated, loading: authLoading } = useAuth();

  useEffect(() => {
    if (isStorybookEnvironment()) {
      console.log('📚 Storybook環境のため自動ログインをスキップ');
      return;
    }

    const autoLogin = async () => {
      if (!authLoading && !isAuthenticated) {
        try {
          console.log('🔄 ロビーページ - 自動匿名ログイン開始...');
          const userCredential = await signInAnonymously(auth);
          console.log('✅ 自動ログイン成功:', {
            uid: userCredential.user.uid,
            isAnonymous: userCredential.user.isAnonymous,
          });
        } catch (error) {
          console.error('❌ 自動ログインエラー:', error);
        }
      }
    };

    autoLogin();
  }, [authLoading, isAuthenticated]);
};
