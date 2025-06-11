'use client';

import { getUserById } from '@/src/helpers/firebase/user';
import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import {
  clearSessionUser,
  getSessionUser,
  isValidSessionForGroup,
  setSessionUser,
} from '@/src/helpers/utils/sessionStorage';
import type { SessionUser } from '@/src/types/auth';
import type { UserDocument } from '@/src/types/firestore';
import { useCallback, useEffect, useState } from 'react';

/**
 * SessionStorage ベースのDraftUser管理フック
 * Legacy の UserExistanceCheck.tsx と同等の機能を提供
 */
interface UseSessionUserReturn {
  // 現在の状態
  sessionUser: SessionUser | null;
  currentUser: SessionUser | null; // Legacy互換のため同じものを提供
  loading: boolean;
  error: string | null;

  // 状態判定
  isUserSelected: boolean; // ユーザーが選択済みかどうか
  hasValidSession: boolean; // 有効なセッションがあるか
  needsUserSelection: boolean; // ユーザー選択が必要か

  // 操作関数
  selectUser: (userId: string) => Promise<void>;
  clearUser: () => void;
  retry: () => void;
}

export const useSessionUser = (groupId: string): UseSessionUserReturn => {
  const [sessionUser, setSessionUserState] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * UserDocumentをSessionUserに変換
   */
  const convertToSessionUser = useCallback(
    (userDoc: UserDocument): SessionUser => {
      return {
        id: userDoc.userId || '',
        groupId: userDoc.groupId,
        name: userDoc.userName,
        avatar: userDoc.avatar,
        createdAt: userDoc.createdAt,
      };
    },
    [],
  );

  /**
   * SessionStorageからユーザー情報を復元
   */
  const loadSessionUser = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // SessionStorageから既存ユーザー情報を取得
      const storedUser = getSessionUser();

      if (!storedUser) {
        setSessionUserState(null);
        return;
      }

      // GroupID整合性チェック
      if (!isValidSessionForGroup(groupId)) {
        clearSessionUser();
        setSessionUserState(null);
        return;
      }

      // Firestoreから最新のユーザー情報を取得して検証
      const userDoc = await getUserById(storedUser.id);

      if (!userDoc || userDoc.deleteFlg) {
        clearSessionUser();
        setSessionUserState(null);
        return;
      }

      // GroupIDが変更されていないかチェック
      if (userDoc.groupId !== groupId) {
        clearSessionUser();
        setSessionUserState(null);
        return;
      }


      setSessionUserState(storedUser);
    } catch (error) {
      setError('ユーザー情報の復元に失敗しました');
      clearSessionUser();
      setSessionUserState(null);
    } finally {
      setLoading(false);
    }
  }, [groupId]);

  /**
   * ユーザーを選択してSessionStorageに保存
   */
  const selectUser = useCallback(
    async (userId: string): Promise<void> => {
      setLoading(true);
      setError(null);

      try {

        // Firestoreからユーザー情報を取得
        const userDoc = await getUserById(userId);

        if (!userDoc) {
          throw new Error('指定されたユーザーが見つかりません');
        }

        if (userDoc.deleteFlg) {
          throw new Error('このユーザーは削除されています');
        }

        if (userDoc.groupId !== groupId) {
          throw new Error('このユーザーは別のグループに所属しています');
        }

        // SessionUser形式に変換
        const sessionUser = convertToSessionUser(userDoc);

        // SessionStorageに保存
        setSessionUser(sessionUser);

        // 状態を更新
        setSessionUserState(sessionUser);

      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'ユーザーの選択に失敗しました';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [groupId, convertToSessionUser],
  );

  /**
   * SessionStorageをクリアしてユーザー選択をリセット
   */
  const clearUser = useCallback(() => {
    clearSessionUser();
    setSessionUserState(null);
    setError(null);
  }, []);

  /**
   * 再実行用関数
   */
  const retry = useCallback(() => {
    loadSessionUser();
  }, [loadSessionUser]);

  // 初期化処理
  useEffect(() => {
    if (isStorybookEnvironment()) {
      setLoading(false);

      // Storybook環境ではwindowのSessionStorageを確認
      const key = `draft_user_${groupId}`;
      const storedData = window.sessionStorage.getItem(key);

      if (storedData) {
        // SessionStorageにデータがある場合はそれを使用
        try {
          const userData = JSON.parse(storedData);
          setSessionUserState(userData);
        } catch (_e) {
          setSessionUserState(null);
        }
      } else {
        // SessionStorageにデータがない場合はnull
        setSessionUserState(null);
      }
      return;
    }

    if (!groupId) {
      setLoading(false);
      return;
    }

    loadSessionUser();
  }, [groupId, loadSessionUser]);

  // 計算プロパティ
  const isUserSelected = !!sessionUser;
  const hasValidSession = isUserSelected && !error;
  const needsUserSelection = !loading && !isUserSelected;

  return {
    sessionUser,
    currentUser: sessionUser, // Legacy互換
    loading,
    error,
    isUserSelected,
    hasValidSession,
    needsUserSelection,
    selectUser,
    clearUser,
    retry,
  };
};
