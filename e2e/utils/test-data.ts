/**
 * E2Eテスト用のテストデータ定義
 */

/**
 * テスト用ユーザー情報
 */
export interface TestUser {
  id: string;
  name: string;
  avatarId: number;
}

/**
 * テスト用グループ情報
 */
export interface TestGroup {
  id: string;
  name: string;
  code: string;
  createdBy: string;
}

/**
 * テスト用ユーザーを生成
 */
export function createTestUser(overrides?: Partial<TestUser>): TestUser {
  const randomAvatarId = Math.floor(Math.random() * 18) + 1; // 1-18
  return {
    id: crypto.randomUUID(),
    name: `テストユーザー_${Date.now()}`,
    avatarId: randomAvatarId,
    ...overrides,
  };
}

/**
 * テスト用グループを生成
 */
export function createTestGroup(overrides?: Partial<TestGroup>): TestGroup {
  const id = overrides?.id || crypto.randomUUID();
  return {
    id,
    name: `テストドラフト_${Date.now()}`,
    code: generateTestCode(),
    createdBy: 'test-user',
    ...overrides,
  };
}

/**
 * テスト用の4桁コードを生成
 */
export function generateTestCode(): string {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

/**
 * 事前定義されたテストユーザー
 */
export const predefinedUsers = {
  organizer: createTestUser({
    name: '主催者テスト',
    avatarId: 1,
  }),
  participant1: createTestUser({
    name: '参加者1',
    avatarId: 2,
  }),
  participant2: createTestUser({
    name: '参加者2',
    avatarId: 3,
  }),
  latecomer: createTestUser({
    name: '途中参加者',
    avatarId: 4,
  }),
};

/**
 * テスト用のドラフトアイテム（将来実装用）
 */
export const draftItems = [
  { id: '1', name: 'アイテムA', category: 'カテゴリ1' },
  { id: '2', name: 'アイテムB', category: 'カテゴリ1' },
  { id: '3', name: 'アイテムC', category: 'カテゴリ2' },
  { id: '4', name: 'アイテムD', category: 'カテゴリ2' },
  { id: '5', name: 'アイテムE', category: 'カテゴリ3' },
];

/**
 * テスト用のチャットメッセージ
 */
export const testMessages = {
  greeting: 'こんにちは！よろしくお願いします',
  ready: '準備OK!',
  thinking: 'どれにしようかな...',
  decided: '決めました！',
  conflict: 'かぶっちゃった！',
};

/**
 * テスト用のエラーメッセージ
 */
export const errorMessages = {
  invalidCode: 'コードが無効です',
  groupNotFound: 'グループが見つかりません',
  connectionError: '接続エラーが発生しました',
  nameRequired: '名前を入力してください',
  avatarRequired: 'アバターを選択してください',
};

/**
 * タイムアウト設定（ミリ秒）
 */
export const timeouts = {
  short: 1000,
  medium: 3000,
  long: 5000,
  extraLong: 10000,
  navigation: 5000,
  animation: 500,
};

/**
 * テスト環境のURL
 */
export const testUrls = {
  base: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
  top: '/',
  join: '/join',
  lobby: (id: string) => `/lobby/${id}`,
  draft: (id: string) => `/draft/${id}`,
};