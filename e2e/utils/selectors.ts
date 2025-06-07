/**
 * E2Eテスト用のアクセシブルなセレクター定義
 * ロール、ラベル、テキストによる要素選択を優先
 */

export const selectors = {
  // TOPページ
  top: {
    createDraftButton: 'button:has-text("ドラフトを作成")',
  },

  // 参加ページ
  join: {
    codeInput: 'input[placeholder*="コード"]',
    urlInput: 'input[placeholder*="URL"]',
    submitButton: 'button:has-text("参加")',
    recentMeetingsList: 'text=/最近参加したドラフト/',
    recentMeetingItem: (id: string) => `[data-meeting-id="${id}"]`, // IDは必要時のみdata属性使用
  },

  // ロビーページ
  lobby: {
    // ユーザー選択ステップ
    userSelect: {
      existingUserList: 'text=/既存のユーザー/',
      userItem: (id: string) => `[data-user-id="${id}"]`, // IDは必要時のみdata属性使用
      createNewButton: 'button:has-text("新規作成")',
    },
    
    // ユーザー作成ステップ
    userCreate: {
      nameInput: 'input[placeholder*="名前"]',
      avatarOption: (id: number) => `img[alt*="アバター${id}"]`,
      confirmButton: 'button:has-text("決定")',
    },
    
    // グループ情報
    groupInfo: {
      title: 'h1, h2', // 見出し要素
      participantCount: 'text=/参加者数:/',
      participantList: 'text=/参加者一覧/',
    },
  },
} as const;