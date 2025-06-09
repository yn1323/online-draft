import type { Page } from '@playwright/test';
import { SELECTORS, TEST_DATA, TIMEOUTS } from '../constants';

/**
 * ユーザー作成・選択機能のoperations
 */

export interface UserData {
  userName: string;
  avatarIndex: number;
}

export interface ExistingUser {
  userId: string;
  userName: string;
  avatarIndex: number;
}

/**
 * 新規ユーザー作成ボタンをクリック
 * ユーザー選択ステップ → ユーザー作成ステップに遷移
 */
export async function clickCreateNewUser(page: Page): Promise<void> {
  const createButton = page.getByRole('button', { name: '新しいユーザーを作成' });
  await createButton.click();
  
  // ページ遷移の待機
  await page.waitForTimeout(TIMEOUTS.MODAL_ANIMATION);
}

/**
 * 既存ユーザー選択操作
 */
export async function selectExistingUser(page: Page, userName: string): Promise<void> {
  const userButton = page.getByText(userName).locator('..').getByRole('button');
  await userButton.click();
}

/**
 * ユーザー名入力操作
 */
export async function fillUserName(page: Page, userName?: string): Promise<void> {
  // テスト用ユーザー名を使用（指定がない場合）
  const testUserName = userName || TEST_DATA.USERS[0].name;
  const nameInput = page.getByPlaceholder('名前を入力してください');
  await nameInput.clear();
  await nameInput.fill(testUserName);
}

/**
 * アバター選択操作
 * 1-18のアバターインデックスから選択
 */
export async function selectAvatar(page: Page, avatarIndex?: string): Promise<void> {
  // テスト用アバターを使用（指定がない場合）
  const testAvatarIndex = avatarIndex || TEST_DATA.USERS[0].avatar;
  const avatarNum = Number.parseInt(testAvatarIndex, 10);
  
  if (avatarNum < 1 || avatarNum > 18) {
    throw new Error(`Invalid avatar index: ${testAvatarIndex}. Must be between 1 and 18.`);
  }
  
  // アバターを直接選択（親要素のBoxがクリック可能）
  const avatarButton = page.locator(`img[alt="Avatar ${testAvatarIndex}"]`).locator('..');
  await avatarButton.click();
}

/**
 * ユーザー作成実行操作
 */
export async function submitUserCreation(page: Page): Promise<void> {
  const submitButton = page.getByText('作成して参加');
  await submitButton.click();
}

/**
 * ユーザー作成の完全フロー
 * 名前入力 → アバター選択 → 作成実行
 */
export async function createUser(page: Page, userData?: UserData): Promise<void> {
  await fillUserName(page, userData?.userName);
  await selectAvatar(page, userData?.avatarIndex.toString());
  await submitUserCreation(page);
}

/**
 * 戻るボタンをクリック
 * ユーザー作成ステップ → ユーザー選択ステップに遷移
 */
export async function clickBackButton(page: Page): Promise<void> {
  const backButton = page.getByRole('button', { name: '戻る' });
  await backButton.click();
}

/**
 * エラーメッセージの取得
 */
export async function getErrorMessage(page: Page): Promise<string | null> {
  try {
    const errorElement = page.locator(SELECTORS.COMMON.ERROR_MESSAGE);
    return await errorElement.textContent();
  } catch {
    return null;
  }
}

/**
 * ユーザー名の文字数制限チェック
 */
export async function getUserNameCharacterCount(page: Page): Promise<string> {
  const counterElement = page.locator('text*="/12"');
  const text = await counterElement.textContent();
  return text || '0/12';
}

/**
 * フォームバリデーション状態の確認
 */
export async function isSubmitButtonEnabled(page: Page): Promise<boolean> {
  const submitButton = page.getByRole('button', { name: '作成して参加' });
  return !(await submitButton.isDisabled());
}

/**
 * 既存ユーザーの一覧取得
 */
export async function getExistingUsers(page: Page): Promise<ExistingUser[]> {
  const users: ExistingUser[] = [];
  
  try {
    const userButtons = page.locator('button:has-text("このユーザーで参加")');
    const count = await userButtons.count();
    
    for (let i = 0; i < count; i++) {
      const button = userButtons.nth(i);
      const userName = await button.locator('text').first().textContent();
      const avatarSrc = await button.locator('img').getAttribute('src');
      const avatarMatch = avatarSrc?.match(/(\d+)\.png/);
      
      if (userName && avatarMatch) {
        users.push({
          userId: `user-${i}`,
          userName: userName.trim(),
          avatarIndex: Number.parseInt(avatarMatch[1], 10)
        });
      }
    }
  } catch {
    // ユーザーが存在しない場合は空配列を返す
  }
  
  return users;
}