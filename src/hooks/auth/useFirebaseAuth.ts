'use client';

import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { getDraftGroup } from '@/src/services/firestore/draftGroups';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

/**
 * Firebase匿名認証とグループ存在確認を行うフック
 * Legacy の AnonymousAuth.tsx と同等の機能を提供
 */
interface UseFirebaseAuthReturn {
  // 認証状態
  isAuthenticated: boolean;
  groupExists: boolean;
  loading: boolean;
  
  // エラー情報
  authError: string | null;
  groupError: string | null;
  
  // 再実行用
  retry: () => void;
}

export const useFirebaseAuth = (groupId: string): UseFirebaseAuthReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [groupExists, setGroupExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [groupError, setGroupError] = useState<string | null>(null);
  const router = useRouter();

  /**
   * Firebase匿名認証を実行
   */
  const authenticateUser = useCallback(async (): Promise<boolean> => {
    try {
      const auth = getAuth();
      
      // 既に認証済みかチェック
      if (auth.currentUser) {
        console.log('✅ 既にFirebase認証済み:', {
          uid: auth.currentUser.uid,
          isAnonymous: auth.currentUser.isAnonymous,
        });
        setIsAuthenticated(true);
        setAuthError(null);
        return true;
      }
      
      // 匿名ログイン実行
      console.log('🔄 Firebase匿名認証開始...');
      const userCredential = await signInAnonymously(auth);
      console.log('✅ Firebase匿名認証成功:', {
        uid: userCredential.user.uid,
        isAnonymous: userCredential.user.isAnonymous,
      });
      
      setIsAuthenticated(true);
      setAuthError(null);
      return true;
      
    } catch (error) {
      console.error('❌ Firebase認証エラー:', error);
      setAuthError('回線が混み合っています。しばらく経ってから再度お試しください。');
      setIsAuthenticated(false);
      return false;
    }
  }, []);

  /**
   * グループ存在確認を実行
   */
  const checkGroupExists = useCallback(async (groupId: string): Promise<boolean> => {
    try {
      console.log('🔍 グループ存在確認開始:', { groupId });
      
      const groupData = await getDraftGroup(groupId);
      
      if (groupData) {
        console.log('✅ グループ存在確認成功:', {
          id: groupData.id,
          name: groupData.groupName,
          round: groupData.round,
        });
        setGroupExists(true);
        setGroupError(null);
        return true;
      }
      
      console.log('❌ グループが存在しません:', { groupId });
      setGroupError('指定されたグループが見つかりません');
      setGroupExists(false);
      return false;
      
    } catch (error) {
      console.error('❌ グループ存在確認エラー:', error);
      setGroupError('グループ情報の取得に失敗しました');
      setGroupExists(false);
      return false;
    }
  }, []);

  /**
   * 統合認証処理フロー
   */
  const initializeAuth = useCallback(async () => {
    setLoading(true);
    setAuthError(null);
    setGroupError(null);
    setIsAuthenticated(false);
    setGroupExists(false);
    
    try {
      // Step 1: Firebase認証
      const authSuccess = await authenticateUser();
      if (!authSuccess) {
        return;
      }
      
      // Step 2: グループ存在確認
      const groupSuccess = await checkGroupExists(groupId);
      if (!groupSuccess) {
        return;
      }
      
      console.log('🎉 Firebase認証・グループ確認 完了');
      
    } catch (error) {
      console.error('❌ 認証初期化エラー:', error);
    } finally {
      setLoading(false);
    }
  }, [groupId, authenticateUser, checkGroupExists]);

  /**
   * retry関数
   */
  const retry = () => {
    console.log('🔄 Firebase認証を再実行します...');
    initializeAuth();
  };

  // Storybook環境では処理をスキップ
  useEffect(() => {
    if (isStorybookEnvironment()) {
      console.log('📚 Storybook環境のためFirebase認証をスキップ');
      setLoading(false);
      setIsAuthenticated(true);
      setGroupExists(true);
      return;
    }

    if (!groupId) {
      console.log('⚠️ groupIdが指定されていません');
      setLoading(false);
      return;
    }

    initializeAuth();
  }, [groupId, initializeAuth]);

  // Legacy同等のエラーハンドリング
  useEffect(() => {
    if (authError && !loading) {
      // 認証エラー時のアラート表示（Legacy準拠）
      alert(authError);
    }
  }, [authError, loading]);

  useEffect(() => {
    if (groupError && !loading && !groupExists) {
      // グループ不存在時のリダイレクト（Legacy準拠）
      console.log('🔄 グループが見つからないため/にリダイレクト');
      router.push('/');
    }
  }, [groupError, loading, groupExists, router]);

  return {
    isAuthenticated,
    groupExists,
    loading,
    authError,
    groupError,
    retry,
  };
};