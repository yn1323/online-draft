/**
 * E2Eテスト用のアクセシブルなセレクター定義
 * role属性、aria-label、テキストコンテンツを優先的に使用
 */

import { type Page } from '@playwright/test';

// よく使うアクセシブルなセレクター
export const selectors = {
  // 共通要素
  common: {
    themeToggle: 'button[aria-label*="テーマ切替"], button[aria-label*="theme"]',
    loading: '[role="status"], [aria-busy="true"]',
    errorMessage: '[role="alert"], [aria-invalid="true"]',
  },

  // TOPページ
  top: {
    heroSection: 'main section:first-child',
    createDraftButton: 'button:has-text("ドラフトを作成"), a:has-text("ドラフトを作成")',
    joinDraftButton: 'button:has-text("ドラフトに参加"), a:has-text("ドラフトに参加")',
    howToSection: 'section:has(h2:has-text("使い方"))',
    // stepCardは個別に指定（一度しか使わないため）
  },

  // 参加ページ
  join: {
    joinForm: 'form[aria-label*="参加"], form:has(input[placeholder*="コード"])',
    codeInput: 'input[placeholder*="コード"], input[aria-label*="コード"]',
    urlInput: 'input[placeholder*="URL"], input[aria-label*="URL"]',
    submitButton: 'button[type="submit"]:has-text("参加"), button:has-text("参加する")',
    recentMeetingsList: 'ul[aria-label*="履歴"], div:has(h3:has-text("最近の参加"))',
    joinHint: 'aside, [role="complementary"]',
  },

  // ロビーページ
  lobby: {
    container: 'main',
    stepIndicator: 'nav[aria-label*="ステップ"], ol[role="list"]',
    
    // ユーザー選択ステップ
    userSelect: {
      container: 'section:has(h2:has-text("ユーザー選択"))',
      existingUserList: 'ul[aria-label*="ユーザー一覧"], div:has(button[aria-label*="ユーザー"])',
      createNewButton: 'button:has-text("新しいユーザーを作成")',
    },
    
    // ユーザー作成ステップ
    userCreate: {
      container: 'section:has(h2:has-text("ユーザー作成"))',
      nameInput: 'input[placeholder*="名前"], input[aria-label*="ユーザー名"]',
      avatarSelector: '[role="radiogroup"], fieldset:has(legend:has-text("アバター"))',
      confirmButton: 'button:has-text("確定"), button:has-text("作成")',
      backButton: 'button:has-text("戻る"), button[aria-label*="戻る"]',
    },
    
    // グループ情報
    groupInfo: {
      title: 'h1, h2:has-text("グループ")',
      participantCount: 'span:has-text("参加者"), [aria-label*="参加者数"]',
      participantList: 'ul[aria-label*="参加者"], div:has(h3:has-text("参加者"))',
    },
  },

  // ドラフトページ（将来実装用）
  draft: {
    container: 'main',
    chatArea: '[role="log"], section:has(h2:has-text("チャット"))',
    chatInput: 'input[placeholder*="メッセージ"], textarea[aria-label*="チャット"]',
    chatSendButton: 'button[aria-label*="送信"], button:has-text("送信")',
    slotArea: 'section:has(h2:has-text("選択"))',
    submitButton: 'button:has-text("確定"), button:has-text("提出")',
  },

  // モーダル・ダイアログ
  modal: {
    container: '[role="dialog"], [role="alertdialog"]',
    closeButton: 'button[aria-label*="閉じる"], button:has-text("×")',
    confirmButton: 'button:has-text("確認"), button:has-text("OK")',
    cancelButton: 'button:has-text("キャンセル"), button:has-text("戻る")',
  },
} as const;

/**
 * アクセシブルなロケーター取得のヘルパー関数
 */
export const getByRole = (page: Page, role: string, options?: { name?: string | RegExp }) => {
  return page.getByRole(role as any, options);
};

export const getByLabel = (page: Page, label: string | RegExp) => {
  return page.getByLabel(label);
};

export const getByText = (page: Page, text: string | RegExp) => {
  return page.getByText(text);
};

export const getByPlaceholder = (page: Page, placeholder: string | RegExp) => {
  return page.getByPlaceholder(placeholder);
};