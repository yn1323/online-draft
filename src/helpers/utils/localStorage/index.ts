/**
 * LocalStorage ユーティリティ
 * ユーザー情報の永続化のためのシンプルなヘルパー
 */

const STORAGE_KEYS = {
  CURRENT_USER: 'onlinedraft_current_user',
  RECENT_GROUPS: 'onlinedraft_recent_groups',
} as const;

export interface StoredUser {
  userId: string;
  userName: string;
  avatar: string;
  timestamp: number;
}

export interface StoredGroup {
  groupId: string;
  groupName: string;
  lastJoined: number;
}

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
    console.warn('⚠️ JSON parse error:', error);
    return defaultValue;
  }
};

/**
 * 現在のユーザー情報を保存
 */
export const saveCurrentUser = (user: Omit<StoredUser, 'timestamp'>): void => {
  try {
    const userData: StoredUser = {
      ...user,
      timestamp: Date.now(),
    };

    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(userData));
    console.log('💾 ユーザー情報をLocalStorageに保存:', userData);
  } catch (error) {
    console.error('❌ ユーザー情報保存エラー:', error);
  }
};

/**
 * 現在のユーザー情報を取得
 */
export const getCurrentUser = (): StoredUser | null => {
  try {
    const userJson = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    const userData = safeJsonParse<StoredUser | null>(userJson, null);

    if (!userData) {
      return null;
    }

    // 7日間で期限切れ
    const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
    const isExpired = Date.now() - userData.timestamp > SEVEN_DAYS_MS;

    if (isExpired) {
      console.log('⏰ ユーザー情報の有効期限切れ');
      clearCurrentUser();
      return null;
    }

    console.log('📱 LocalStorageからユーザー情報を復元:', userData);
    return userData;
  } catch (error) {
    console.error('❌ ユーザー情報取得エラー:', error);
    return null;
  }
};

/**
 * 現在のユーザー情報をクリア
 */
export const clearCurrentUser = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    console.log('🗑️ ユーザー情報をクリア');
  } catch (error) {
    console.error('❌ ユーザー情報クリアエラー:', error);
  }
};

/**
 * 最近参加したグループを保存
 */
export const saveRecentGroup = (group: StoredGroup): void => {
  try {
    const recentGroups = getRecentGroups();

    // 重複を削除し、新しいものを先頭に追加
    const filteredGroups = recentGroups.filter(
      (g) => g.groupId !== group.groupId,
    );
    const updatedGroups = [group, ...filteredGroups].slice(0, 5); // 最大5件

    localStorage.setItem(
      STORAGE_KEYS.RECENT_GROUPS,
      JSON.stringify(updatedGroups),
    );
    console.log('💾 最近のグループ情報を保存:', group);
  } catch (error) {
    console.error('❌ グループ情報保存エラー:', error);
  }
};

/**
 * 最近参加したグループ一覧を取得
 */
export const getRecentGroups = (): StoredGroup[] => {
  try {
    const groupsJson = localStorage.getItem(STORAGE_KEYS.RECENT_GROUPS);
    return safeJsonParse<StoredGroup[]>(groupsJson, []);
  } catch (error) {
    console.error('❌ グループ情報取得エラー:', error);
    return [];
  }
};

/**
 * LocalStorageが利用可能かチェック
 */
export const isLocalStorageAvailable = (): boolean => {
  try {
    const test = '__test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
};
