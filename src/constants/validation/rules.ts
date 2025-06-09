/**
 * バリデーションルール定数
 */

export const VALIDATION_RULES = {
  /** ユーザー名 */
  USER_NAME: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 12,
    PATTERN: /^[^\s].*[^\s]$|^[^\s]$/,
    MESSAGES: {
      MIN: 'ユーザー名を入力してください',
      MAX: 'ユーザー名は12文字以内で入力してください',
      PATTERN: '先頭と末尾にスペースは使用できません',
    },
  },

  /** グループ名 */
  GROUP_NAME: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 30,
    MESSAGES: {
      MIN: 'グループ名を入力してください',
      MAX: 'グループ名は30文字以内で入力してください',
    },
  },

  /** 会議ID */
  MEETING_ID: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 20,
    PATTERN: /^[a-zA-Z0-9]{6,20}$/,
    URL_PATTERN: /^https:\/\/.+/,
    MESSAGES: {
      REQUIRED: '会議IDまたはURLを入力してください',
      INVALID: '有効な会議IDまたはURLを入力してください',
      MIN: '会議IDは6文字以上で入力してください',
      MAX: '会議IDは20文字以内で入力してください',
    },
  },

  /** アバター */
  AVATAR: {
    PATTERN: /^[1-9]|1[0-8]|99$/,
    MESSAGE: '有効なアバターを選択してください',
  },

  /** ドラフト選択項目 */
  DRAFT_ITEM: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 50,
    MESSAGES: {
      MIN: '選択項目を入力してください',
      MAX: '選択項目は50文字以内で入力してください',
    },
  },

  /** コメント */
  COMMENT: {
    MAX_LENGTH: 200,
    MESSAGES: {
      MAX: 'コメントは200文字以内で入力してください',
    },
  },

  /** グループ設定 */
  GROUP_SETTINGS: {
    MAX_PARTICIPANTS: {
      MIN: 2,
      MAX: 8,
      MESSAGES: {
        MIN: '参加者は2人以上で設定してください',
        MAX: '参加者は8人以下で設定してください',
      },
    },
    ROUNDS: {
      MIN: 1,
      MAX: 10,
      MESSAGES: {
        MIN: 'ラウンド数は1以上で設定してください',
        MAX: 'ラウンド数は10以下で設定してください',
      },
    },
    TIME_LIMIT: {
      MIN: 30,
      MAX: 600,
      MESSAGES: {
        MIN: '制限時間は30秒以上で設定してください',
        MAX: '制限時間は10分以下で設定してください',
      },
    },
  },

  /** パスワード（legacy互換） */
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 24,
    PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,24}$/,
    MESSAGES: {
      MIN: 'パスワードは8文字以上で入力してください',
      MAX: 'パスワードは24文字以内で入力してください',
      PATTERN: 'パスワードは大文字・小文字・数字を含む必要があります',
    },
  },

  /** メールアドレス */
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    MAX_LENGTH: 254,
    MESSAGES: {
      PATTERN: '有効なメールアドレスを入力してください',
      MAX: 'メールアドレスは254文字以内で入力してください',
    },
  },
} as const;

/** エラーメッセージテンプレート */
export const ERROR_MESSAGES = {
  REQUIRED: '{field}は必須項目です',
  INVALID: '{field}が正しくありません',
  TOO_SHORT: '{field}は{min}文字以上で入力してください',
  TOO_LONG: '{field}は{max}文字以内で入力してください',
  OUT_OF_RANGE: '{field}は{min}から{max}の範囲で入力してください',
  NETWORK_ERROR: 'ネットワークエラーが発生しました',
  SERVER_ERROR: 'サーバーエラーが発生しました',
  UNKNOWN_ERROR: '予期しないエラーが発生しました',
} as const;
