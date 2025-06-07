/**
 * E2Eテスト用のアクセシブルなセレクター定義
 * アクセシビリティを考慮し、role、aria-label、テキストコンテンツなどを優先的に使用
 */

export const selectors = {
  // 共通要素
  common: {
    themeToggle: 'button[aria-label="テーマ切り替え"]',
    loading: '[role="status"][aria-label="読み込み中"]',
    errorMessage: '[role="alert"]',
  },

  // TOPページ
  top: {
    heroSection: 'section[aria-label="ヒーローセクション"]',
    createDraftButton: 'button:has-text("ドラフトを作成")',
    joinDraftButton: 'button:has-text("ドラフトに参加")',
    howToSection: 'section[aria-label="使い方"]',
    stepCard: (step: number) => `article[aria-label="ステップ${step}"]`,
  },

  // 参加ページ
  join: {
    joinForm: 'form[aria-label="参加フォーム"]',
    codeInput: 'input[aria-label="参加コード"]',
    urlInput: 'input[aria-label="参加URL"]',
    submitButton: 'button[type="submit"]:has-text("参加")',
    recentMeetingsList: 'ul[aria-label="最近参加したドラフト"]',
    recentMeetingItem: (id: string) => `li[aria-label*="${id}"]`,
    joinHint: '[role="note"]',
  },

  // ロビーページ
  lobby: {
    container: 'main[aria-label="ロビー"]',
    stepIndicator: 'nav[aria-label="ステップインジケーター"]',
    currentStep: (step: number) => `[aria-label="ステップ${step}"][aria-current="step"]`,
    
    // ユーザー選択ステップ
    userSelect: {
      container: 'section[aria-label="ユーザー選択"]',
      existingUserList: 'ul[aria-label="既存ユーザー一覧"]',
      userItem: (name: string) => `button[aria-label="${name}を選択"]`,
      createNewButton: 'button:has-text("新しいユーザーを作成")',
    },
    
    // ユーザー作成ステップ
    userCreate: {
      container: 'section[aria-label="ユーザー作成"]',
      nameInput: 'input[aria-label="ユーザー名"]',
      avatarSelector: '[role="radiogroup"][aria-label="アバター選択"]',
      avatarOption: (id: number) => `[role="radio"][aria-label="アバター${id}"]`,
      confirmButton: 'button:has-text("作成")',
      backButton: 'button[aria-label="戻る"]',
    },
    
    // グループ情報
    groupInfo: {
      title: 'h1, h2',
      participantCount: '[aria-label="参加者数"]',
      participantList: 'ul[aria-label="参加者一覧"]',
      participantItem: (name: string) => `li:has-text("${name}")`,
    },
  },

  // ドラフトページ（将来実装用）
  draft: {
    container: 'main[aria-label="ドラフト"]',
    chatArea: 'section[aria-label="チャット"]',
    chatInput: 'input[aria-label="メッセージ入力"]',
    chatSendButton: 'button[aria-label="送信"]',
    slotArea: 'section[aria-label="スロットエリア"]',
    slotItem: (index: number) => `[role="listitem"][aria-label="スロット${index}"]`,
    submitButton: 'button:has-text("確定")',
  },

  // モーダル・ダイアログ
  modal: {
    container: '[role="dialog"]',
    closeButton: 'button[aria-label="閉じる"]',
    confirmButton: 'button:has-text("確認")',
    cancelButton: 'button:has-text("キャンセル")',
  },
} as const;

