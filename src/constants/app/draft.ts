/**
 * ドラフト関連定数
 */

export const DRAFT_CONFIG = {
  /** デフォルト設定 */
  DEFAULT_ROUND: 1,
  DEFAULT_TOTAL_ROUNDS: 5,
  DEFAULT_CURRENT_ROUND: 3, // Storybook用

  /** 制限値 */
  MAX_ROUNDS: 10,
  MIN_ROUNDS: 1,
  MAX_PARTICIPANTS: 8,
  MIN_PARTICIPANTS: 2,

  /** タイミング設定 */
  TIMINGS: {
    SLOT_TIME: 3000,
    DOKIDOKI_TIME: 5000,
    STORYBOOK_LOADING: 800,
    TOAST_SUCCESS: 3000,
    TOAST_ERROR: 5000,
    AUTO_SUBMIT: 60000,
  },
} as const;

/** ステータス設定 */
export const STATUS_CONFIG = {
  thinking: {
    colorPalette: 'yellow' as const,
    emoji: '🤔',
    text: '検討中',
  },
  entered: {
    colorPalette: 'blue' as const,
    emoji: '✏️',
    text: '入力済',
  },
  completed: {
    colorPalette: 'green' as const,
    emoji: '✅',
    text: '完了',
  },
  pending: {
    colorPalette: 'gray' as const,
    emoji: '⏳',
    text: '待機中',
  },
  active: {
    colorPalette: 'orange' as const,
    emoji: '🔥',
    text: 'アクティブ',
  },
  done: {
    colorPalette: 'green' as const,
    emoji: '🎉',
    text: '完了',
  },
  waiting: {
    colorPalette: 'gray' as const,
    emoji: '⏰',
    text: '待機中',
  },
  submitted: {
    colorPalette: 'blue' as const,
    emoji: '📝',
    text: '提出済',
  },
  confirmed: {
    colorPalette: 'green' as const,
    emoji: '✅',
    text: '確定',
  },
  conflict: {
    colorPalette: 'red' as const,
    emoji: '⚔️',
    text: '競合',
  },
  winner: {
    colorPalette: 'purple' as const,
    emoji: '👑',
    text: '勝者',
  },
} as const;

/** タブ設定 */
export const DRAFT_TABS = {
  current: {
    key: 'current',
    label: '現在のラウンド',
  },
  history: {
    key: 'history',
    label: '過去のラウンド',
  },
  chat: {
    key: 'chat',
    label: 'チャット',
  },
} as const;

/** ラウンド設定テンプレート */
export const ROUND_TEMPLATES = {
  quick: {
    name: 'クイックドラフト',
    rounds: 3,
    timeLimit: 60,
  },
  standard: {
    name: 'スタンダード',
    rounds: 5,
    timeLimit: 120,
  },
  extended: {
    name: 'エクステンデッド',
    rounds: 8,
    timeLimit: 180,
  },
} as const;
