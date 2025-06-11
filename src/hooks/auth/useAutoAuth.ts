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
      return;
    }

    const autoLogin = async () => {
      if (!authLoading && !isAuthenticated) {
        try {
          const userCredential = await signInAnonymously(auth);
        } catch (error) {
        }
      }
    };

    autoLogin();
  }, [authLoading, isAuthenticated]);
};
