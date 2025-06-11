/**
 * SessionStorage ユーティリティ
 * DraftUserの一時的なセッション管理のためのヘルパー（Legacy互換）
 */

import type { SessionUser } from '@/src/types/auth';

const SESSION_KEYS = {
  CURRENT_USER: 'currentUser', // Legacy互換のためキー名はそのまま
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
    return;
  }

  try {
    sessionStorage.setItem(SESSION_KEYS.CURRENT_USER, JSON.stringify(user));
    sessionStorage.setItem(SESSION_KEYS.GROUP_ID, user.groupId);

  } catch (error) {
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
      clearSessionUser();
      return null;
    }


    return user;
  } catch (error) {
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
  } catch (error) {
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
  }

  return isValid;
};
