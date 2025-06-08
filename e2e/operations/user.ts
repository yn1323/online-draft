import type { Page } from '@playwright/test';

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
export async function fillUserName(page: Page, userName: string): Promise<void> {
  const nameInput = page.getByPlaceholder('名前を入力してください');
  await nameInput.clear();
  await nameInput.fill(userName);
}

/**
 * アバター選択操作
 * 1-18のアバターインデックスから選択
 */
export async function selectAvatar(page: Page, avatarIndex: number): Promise<void> {
  if (avatarIndex < 1 || avatarIndex > 18) {
    throw new Error(`Invalid avatar index: ${avatarIndex}. Must be between 1 and 18.`);
  }
  
  const avatarButton = page.locator(`img[src*="${avatarIndex}.png"]`);
  await avatarButton.click();
}

/**
 * ユーザー作成実行操作
 */
export async function submitUserCreation(page: Page): Promise<void> {
  const submitButton = page.getByRole('button', { name: '作成して参加' });
  await submitButton.click();
}

/**
 * ユーザー作成の完全フロー
 * 名前入力 → アバター選択 → 作成実行
 */
export async function createUser(page: Page, userData: UserData): Promise<void> {
  await fillUserName(page, userData.userName);
  await selectAvatar(page, userData.avatarIndex);
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
    const errorElement = page.locator('text*="❌"');
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