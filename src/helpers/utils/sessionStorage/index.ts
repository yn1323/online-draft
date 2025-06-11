/**
 * SessionStorage ユーティリティ
 * DraftUserの一時的なセッション管理のためのヘルパー（Legacy互換）
 */

import type { SessionUser } from '@/src/types/auth';

const SESSION_KEYS = {
  CURRENT_USER: 'currentUser',  // Legacy互換のためキー名はそのまま
  GROUP_ID: 'groupId',
} as const;

/**
 * 安全にJSONをパースする
 */
const safeJsonParse = <T>(jsonString: string | null, defaultValue: T): T => {
  if (!jsonString) {
    return defaultValue;
  }

  try {
    return JSON.parse(jsonString) as T;
  } catch (error) {
    console.warn('⚠️ SessionStorage JSON parse error:', error);
    return defaultValue;
  }
};

/**
 * SessionStorageが利用可能かチェック
 */
export const isSessionStorageAvailable = (): boolean => {
  try {
    const test = '__session_test__';
    sessionStorage.setItem(test, test);
    sessionStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
};

/**
 * 現在のDraftUserをSessionStorageに保存（Legacy互換）
 */
export const setSessionUser = (user: SessionUser): void => {
  if (!isSessionStorageAvailable()) {
    console.warn('⚠️ SessionStorage is not available');
    return;
  }

  try {
    sessionStorage.setItem(SESSION_KEYS.CURRENT_USER, JSON.stringify(user));
    sessionStorage.setItem(SESSION_KEYS.GROUP_ID, user.groupId);
    
    console.log('💾 DraftUserをSessionStorageに保存:', {
      id: user.id,
      name: user.name,
      groupId: user.groupId,
    });
  } catch (error) {
    console.error('❌ SessionUser保存エラー:', error);
  }
};

/**
 * SessionStorageからDraftUserを取得（Legacy互換）
 */
export const getSessionUser = (): SessionUser | null => {
  if (!isSessionStorageAvailable()) {
    return null;
  }

  try {
    const userJson = sessionStorage.getItem(SESSION_KEYS.CURRENT_USER);
    const user = safeJsonParse<SessionUser | null>(userJson, null);

    if (!user) {
      return null;
    }

    // 基本的なバリデーション
    if (!user.id || !user.name || !user.groupId || !user.avatar) {
      console.warn('⚠️ SessionUser data is incomplete:', user);
      clearSessionUser();
      return null;
    }

    console.log('📱 SessionStorageからDraftUserを復元:', {
      id: user.id,
      name: user.name,
      groupId: user.groupId,
    });
    
    return user;
  } catch (error) {
    console.error('❌ SessionUser取得エラー:', error);
    return null;
  }
};

/**
 * SessionStorageのDraftUserをクリア（Legacy互換）
 */
export const clearSessionUser = (): void => {
  if (!isSessionStorageAvailable()) {
    return;
  }

  try {
    sessionStorage.removeItem(SESSION_KEYS.CURRENT_USER);
    sessionStorage.removeItem(SESSION_KEYS.GROUP_ID);
    console.log('🗑️ SessionUser情報をクリア');
  } catch (error) {
    console.error('❌ SessionUserクリアエラー:', error);
  }
};

/**
 * SessionStorageの保存されたgroupIdを取得
 */
export const getSessionGroupId = (): string | null => {
  if (!isSessionStorageAvailable()) {
    return null;
  }

  try {
    return sessionStorage.getItem(SESSION_KEYS.GROUP_ID);
  } catch (error) {
    console.error('❌ SessionGroupId取得エラー:', error);
    return null;
  }
};

/**
 * 現在のgroupIdとSessionStorageのgroupIdが一致するかチェック
 */
export const isValidSessionForGroup = (currentGroupId: string): boolean => {
  const sessionGroupId = getSessionGroupId();
  const isValid = sessionGroupId === currentGroupId;
  
  if (!isValid && sessionGroupId) {
    console.log('⚠️ GroupID不整合検出:', {
      current: currentGroupId,
      session: sessionGroupId,
    });
  }
  
  return isValid;
};