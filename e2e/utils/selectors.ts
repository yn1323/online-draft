/**
 * E2Eテスト用のセレクター定義
 * data-testid属性を使用した要素選択の一元管理
 */

export const selectors = {
  // 共通要素
  common: {
    themeToggle: 'theme-toggle',
    loading: 'loading-spinner',
    errorMessage: 'error-message',
  },

  // TOPページ
  top: {
    heroSection: 'hero-section',
    createDraftButton: 'create-draft-button',
    joinDraftButton: 'join-draft-button',
    howToSection: 'how-to-section',
    stepCard: (step: number) => `step-card-${step}`,
  },

  // 参加ページ
  join: {
    joinForm: 'join-form',
    codeInput: 'join-code-input',
    urlInput: 'join-url-input',
    submitButton: 'join-submit-button',
    recentMeetingsList: 'recent-meetings-list',
    recentMeetingItem: (id: string) => `recent-meeting-${id}`,
    joinHint: 'join-hint',
  },

  // ロビーページ
  lobby: {
    container: 'lobby-container',
    stepIndicator: 'step-indicator',
    currentStep: (step: number) => `step-${step}`,
    
    // ユーザー選択ステップ
    userSelect: {
      container: 'user-select-container',
      existingUserList: 'existing-user-list',
      userItem: (id: string) => `user-item-${id}`,
      createNewButton: 'create-new-user-button',
    },
    
    // ユーザー作成ステップ
    userCreate: {
      container: 'user-create-container',
      nameInput: 'user-name-input',
      avatarSelector: 'avatar-selector',
      avatarOption: (id: number) => `avatar-${id}`,
      confirmButton: 'user-create-confirm',
      backButton: 'user-create-back',
    },
    
    // グループ情報
    groupInfo: {
      title: 'group-title',
      participantCount: 'participant-count',
      participantList: 'participant-list',
      participantItem: (id: string) => `participant-${id}`,
    },
  },

  // ドラフトページ（将来実装用）
  draft: {
    container: 'draft-container',
    chatArea: 'chat-area',
    chatInput: 'chat-input',
    chatSendButton: 'chat-send-button',
    slotArea: 'slot-area',
    slotItem: (index: number) => `slot-${index}`,
    submitButton: 'draft-submit-button',
  },

  // モーダル・ダイアログ
  modal: {
    container: 'modal-container',
    closeButton: 'modal-close-button',
    confirmButton: 'modal-confirm-button',
    cancelButton: 'modal-cancel-button',
  },
} as const;

/**
 * data-testid属性セレクターを生成
 */
export function getTestId(selector: string): string {
  return `[data-testid="${selector}"]`;
}

/**
 * Playwrightのlocator用セレクターを生成
 */
export function getLocator(selector: string): string {
  return `data-testid=${selector}`;
}