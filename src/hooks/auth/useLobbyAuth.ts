'use client';

import type { SessionUser } from '@/src/types/auth';
import { useCallback, useMemo } from 'react';
import { useFirebaseAuth } from './useFirebaseAuth';
import { useSessionUser } from './useSessionUser';

/**
 * LobbyPage用の統合認証フック
 * Firebase認証 + SessionUser管理を統合してLobbyPage専用の認証フローを提供
 */
interface UseLobbyAuthReturn {
  // 統合認証状態
  isReady: boolean; // Firebase認証完了 + グループ存在確認完了
  hasActiveSession: boolean; // 有効なセッションが存在（ドラフトリダイレクト用）
  needsUserSelection: boolean; // ユーザー選択画面を表示する必要がある
  hasAuthError: boolean; // Firebase認証エラーまたはグループ不存在
  loading: boolean; // 認証処理中（Firebase認証 or SessionUser復元中）

  // エラー情報
  authError: string | null; // Firebase認証エラー
  groupError: string | null; // グループエラー
  userError: string | null; // SessionUser関連エラー

  // ユーザー情報
  currentUser: SessionUser | null;

  // 操作関数
  selectUser: (userId: string) => Promise<void>;
  retry: () => void;
  clearSession: () => void;
}

export const useLobbyAuth = (groupId: string): UseLobbyAuthReturn => {
  // Step 1: Firebase匿名認証 + グループ存在確認
  const {
    isAuthenticated: firebaseAuthenticated,
    groupExists,
    loading: firebaseLoading,
    authError,
    groupError,
    retry: retryFirebase,
  } = useFirebaseAuth(groupId);

  // Step 2: SessionUser管理（Firebase認証完了後に実行）
  const {
    sessionUser,
    loading: sessionLoading,
    error: userError,
    needsUserSelection,
    hasValidSession,
    selectUser,
    clearUser,
    retry: retrySession,
  } = useSessionUser(groupId);

  // 統合状態の計算
  const isFirebaseReady = firebaseAuthenticated && groupExists;
  const hasAuthError = !!authError || !!groupError;
  const loading = firebaseLoading || (isFirebaseReady && sessionLoading);

  // LobbyPage表示準備完了条件：Firebase認証OK + グループ存在
  const isReady = useMemo(() => {
    return isFirebaseReady;
  }, [isFirebaseReady]);

  // 有効セッション存在（ドラフトリダイレクト用）：認証OK + 有効セッション + ユーザー情報
  const hasActiveSession = useMemo(() => {
    return isFirebaseReady && hasValidSession && !!sessionUser;
  }, [isFirebaseReady, hasValidSession, sessionUser]);

  // ユーザー選択が必要な条件：Firebase認証OK + グループ存在 + ユーザー未選択
  const needsUserSelectionComputed = useMemo(() => {
    return isFirebaseReady && needsUserSelection;
  }, [isFirebaseReady, needsUserSelection]);

  // 統合リトライ関数
  const retry = useCallback(() => {
    retryFirebase();
    retrySession();
  }, [retryFirebase, retrySession]);

  // セッションクリア関数
  const clearSession = useCallback(() => {
    clearUser();
  }, [clearUser]);


  return {
    isReady,
    hasActiveSession,
    needsUserSelection: needsUserSelectionComputed,
    hasAuthError,
    loading,
    authError, // Firebase認証エラーのみ
    groupError, // グループエラーは別途返す
    userError,
    currentUser: sessionUser,
    selectUser,
    retry,
    clearSession,
  };
};
