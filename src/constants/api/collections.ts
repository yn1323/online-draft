/**
 * Firebase/API関連定数
 */

export const FIREBASE_CONFIG = {
  /** Firestore コレクション */
  COLLECTIONS: {
    DRAFT_GROUPS: 'draftGroups',
    USERS: 'users',
    ROUNDS: 'rounds',
    SELECTIONS: 'selections',
    MESSAGES: 'messages',
    DEV_TEST: 'yn1323test', // legacy互換
  },
  
  /** API設定 */
  ENDPOINTS: {
    BASE_URL: process.env.NODE_ENV === 'production' ? '' : '',
  },
  
  /** 環境設定 */
  ENV: {
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
    LANG: process.env.REACT_APP_LANG || 'ja',
  },
} as const;

/** ローカルストレージキー */
export const STORAGE_KEYS = {
  USER_ID: 'onlineDraft_userId',
  USER_NAME: 'onlineDraft_userName',
  USER_AVATAR: 'onlineDraft_userAvatar',
  RECENT_MEETINGS: 'onlineDraft_recentMeetings',
  THEME_MODE: 'onlineDraft_themeMode',
  DRAFT_PREFERENCES: 'onlineDraft_preferences',
} as const;

/** API レスポンス定数 */
export const API_CONSTANTS = {
  /** HTTP ステータスコード */
  STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
  
  /** リクエストタイムアウト */
  TIMEOUTS: {
    DEFAULT: 10000,
    UPLOAD: 30000,
    DOWNLOAD: 60000,
  },
  
  /** ページネーション */
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
  },
} as const;

/** Firebase Auth エラーコード */
export const AUTH_ERROR_CODES = {
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password',
  EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
  WEAK_PASSWORD: 'auth/weak-password',
  TOO_MANY_REQUESTS: 'auth/too-many-requests',
  NETWORK_REQUEST_FAILED: 'auth/network-request-failed',
  INVALID_EMAIL: 'auth/invalid-email',
} as const;