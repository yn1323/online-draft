// テスト用セレクター（ロール・テキスト・アクセシビリティベース）
export const SELECTORS = {
  // モーダル
  MODAL: {
    CONTAINER: '[role="dialog"]',
  },

  // 共通UI
  COMMON: {
    ERROR_MESSAGE: '[role="alert"], .error, [aria-live="assertive"]',
  },
} as const;

// テスト用データ
export const TEST_DATA = {
  DRAFT_ROOM: {
    NAME: 'E2Eテスト用ドラフトルーム',
    DESCRIPTION: 'テスト用の説明文です',
  },

  USERS: [
    { name: 'Alice', avatar: '1' },
    { name: 'Bob', avatar: '2' },
    { name: 'Charlie', avatar: '3' },
    { name: 'Diana', avatar: '4' },
  ],

  SAMPLE_CODES: ['ABC123', 'XYZ789', 'TEST01'],

  SAMPLE_URLS: [
    'https://localhost:3000/join/ABC123',
    'https://example.com/draft/XYZ789',
  ],
} as const;

// タイムアウト設定
export const TIMEOUTS = {
  SHORT: 1000,
  MEDIUM: 5000,
  LONG: 10000,
  NAVIGATION: 30000,
  MODAL_ANIMATION: 1000,
  NETWORK_DELAY: 30000,
} as const;
