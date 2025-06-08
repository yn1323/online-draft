// 環境変数
export const Email = process.env.TEST_USER_EMAIL ?? '';
export const Password = process.env.TEST_USER_PASSWORD ?? '';
export const UserName = process.env.TEST_USER_NAME ?? '';
export const UserId = process.env.TEST_USER_ID ?? '';

// テスト用セレクター（ロール・テキスト・アクセシビリティベース）
export const SELECTORS = {
  // ドラフト作成
  DRAFT: {
    CREATE_BUTTON: 'button:has-text("ドラフト会議を作成")',
    NAME_INPUT: 'input[placeholder*="ドラフト名"], input[aria-label*="ドラフト名"]',
    DESCRIPTION_INPUT: 'textarea[placeholder*="説明"], textarea[aria-label*="説明"]',
    START_BUTTON: 'button:has-text("開始")',
  },
  
  // 参加
  JOIN: {
    CODE_INPUT: 'input[placeholder*="会議ID"], input[placeholder*="URL"]',
    URL_INPUT: 'input[placeholder*="URL"]',
    JOIN_BUTTON: 'button:has-text("参加")',
    NAME_INPUT: 'input[placeholder*="名前"], input[aria-label*="ユーザー名"]',
    AVATAR_SELECTOR: '[role="grid"] img[alt*="Avatar"], [role="radiogroup"] img[alt*="Avatar"]',
  },
  
  // ユーザー作成
  USER: {
    NAME_INPUT: 'input[placeholder*="名前"], input[aria-label*="名前"]',
    AVATAR_GRID: '[role="grid"], [role="radiogroup"]',
    AVATAR_OPTION: 'img[alt*="Avatar"]',
    CONTINUE_BUTTON: 'button:has-text("続ける"), button:has-text("次へ")',
  },
  
  // モーダル
  MODAL: {
    CONTAINER: '[role="dialog"]',
    TITLE: '[role="dialog"] h1, [role="dialog"] h2, [role="dialog"] [aria-labelledby]',
    CLOSE_BUTTON: 'button[aria-label*="閉じる"], button[aria-label*="Close"]',
    CANCEL_BUTTON: 'button:has-text("キャンセル"), button:has-text("戻る")',
    SUBMIT_BUTTON: 'button[type="submit"], button:has-text("保存"), button:has-text("作成")',
  },
  
  // 共通UI
  COMMON: {
    LOADING: '[role="status"], [aria-label*="読み込み"], .loading',
    ERROR_MESSAGE: '[role="alert"], .error, [aria-live="assertive"]',
    SUCCESS_MESSAGE: '[role="status"][aria-live], .success',
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
  
  SAMPLE_CODES: [
    'ABC123',
    'XYZ789',
    'TEST01',
  ],
  
  SAMPLE_URLS: [
    'https://localhost:3000/join/ABC123',
    'https://example.com/draft/XYZ789',
  ],
} as const;

// タイムアウト設定
export const TIMEOUTS = {
  SHORT: 2000,
  MEDIUM: 5000,
  LONG: 10000,
  NAVIGATION: 15000,
  MODAL_ANIMATION: 500,
} as const;

// 待機設定
export const WAIT_CONDITIONS = {
  NETWORK_IDLE: 'networkidle',
  DOM_CONTENT_LOADED: 'domcontentloaded',
  LOAD: 'load',
} as const;
