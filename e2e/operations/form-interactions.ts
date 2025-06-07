import type { Page } from '@playwright/test';

/**
 * ユーザー作成・選択操作のoperations
 *
 * 責務: フォーム入力・ユーザー操作の抽象化
 * - ユーザー選択操作
 * - ユーザー作成操作（名前・アバター）
 * - ステップ遷移操作
 * - バリデーション・エラー処理
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

export class FormInteractionsOperations {
  /**
   * 新規ユーザー作成ボタンをクリック
   * ユーザー選択ステップ → ユーザー作成ステップに遷移
   */
  async clickCreateNewUser(page: Page): Promise<void> {
    const createButton = page.getByRole('button', {
      name: '新しいユーザーを作成',
    });
    await createButton.click();

    // ユーザー作成ステップに遷移することを確認
    await page.getByText('ユーザー作成').waitFor();
  }

  /**
   * 既存ユーザー選択操作
   * 表示されている既存ユーザーから選択
   */
  async selectExistingUser(page: Page, userName: string): Promise<void> {
    // ユーザー名を含むボタンを探してクリック
    const userButton = page
      .getByText(userName)
      .locator('..')
      .getByRole('button');
    await userButton.click();
  }

  /**
   * ユーザー名入力操作
   */
  async fillUserName(page: Page, userName: string): Promise<void> {
    const nameInput = page.getByAltText('ユーザー名');
    await nameInput.clear();
    await nameInput.fill(userName);
  }

  /**
   * アバター選択操作
   * 1-18のアバターインデックスから選択
   */
  async selectAvatar(page: Page, avatarIndex: number): Promise<void> {
    // アバターインデックスは1-18の範囲
    if (avatarIndex < 1 || avatarIndex > 18) {
      throw new Error(
        `Invalid avatar index: ${avatarIndex}. Must be between 1 and 18.`,
      );
    }

    // アバター画像をクリック（実装に応じて調整が必要）
    const avatarButton = page.locator(`img[src*="${avatarIndex}.png"]`);
    await avatarButton.click();
  }

  /**
   * ユーザー作成実行操作
   * フォーム入力後に作成ボタンをクリック
   */
  async submitUserCreation(page: Page): Promise<void> {
    const submitButton = page.getByRole('button', { name: '作成して参加' });
    await submitButton.click();
  }

  /**
   * ユーザー作成の完全フロー
   * 名前入力 → アバター選択 → 作成実行
   */
  async createUser(page: Page, userData: UserData): Promise<void> {
    // ユーザー名を入力
    await this.fillUserName(page, userData.userName);

    // アバターを選択
    await this.selectAvatar(page, userData.avatarIndex);

    // 作成ボタンをクリック
    await this.submitUserCreation(page);
  }

  /**
   * 戻るボタンをクリック
   * ユーザー作成ステップ → ユーザー選択ステップに遷移
   */
  async clickBackButton(page: Page): Promise<void> {
    const backButton = page.getByRole('button', { name: '戻る' });
    await backButton.click();

    // ユーザー選択ステップに戻ることを確認
    await page.getByText('ユーザー選択').waitFor();
  }

  /**
   * エラーメッセージの確認
   */
  async getErrorMessage(page: Page): Promise<string | null> {
    try {
      const errorElement = page
        .locator('[data-testid="error-message"]')
        .or(page.locator('text*="❌"'));
      return await errorElement.textContent();
    } catch {
      return null;
    }
  }

  /**
   * ローディング状態の確認
   */
  async waitForLoadingToComplete(page: Page): Promise<void> {
    // ローディングスピナーが消えるまで待機
    try {
      await page
        .locator('[data-testid="loading-spinner"]')
        .waitFor({ state: 'hidden', timeout: 5000 });
    } catch {
      // スピナーが見つからない場合はスキップ
    }
  }

  /**
   * ユーザー一覧の表示確認
   */
  async waitForUserListLoad(page: Page): Promise<void> {
    // ユーザー一覧エリアの表示を待機
    await page.getByText('登録済みのユーザーで参加').waitFor({ timeout: 5000 });
  }

  /**
   * ユーザー作成フォームの表示確認
   */
  async waitForUserCreateFormLoad(page: Page): Promise<void> {
    // ユーザー作成フォームの表示を待機
    await page.getByAltText('ユーザー名').waitFor();
    await page.locator('img[src*=".png"]').first().waitFor();
  }

  /**
   * ユーザー名の文字数制限チェック
   */
  async getUserNameCharacterCount(page: Page): Promise<string> {
    const counterElement = page.locator('text*="/12"');
    return (await counterElement.textContent()) || '0/12';
  }

  /**
   * 選択されたアバターの確認
   */
  async getSelectedAvatarIndex(page: Page): Promise<number | null> {
    try {
      // 選択状態のアバターを探す（実装に応じて調整が必要）
      const selectedAvatar = page
        .locator('img[src*=".png"]')
        .locator('..')
        .locator('[data-selected="true"]');
      const src = await selectedAvatar.locator('img').getAttribute('src');
      const match = src?.match(/(\d+)\.png/);
      return match ? Number.parseInt(match[1], 10) : null;
    } catch {
      return null;
    }
  }

  /**
   * フォームバリデーション状態の確認
   */
  async isSubmitButtonEnabled(page: Page): Promise<boolean> {
    const submitButton = page.getByRole('button', { name: '作成して参加' });
    return !(await submitButton.isDisabled());
  }

  /**
   * 既存ユーザーの一覧取得
   */
  async getExistingUsers(page: Page): Promise<ExistingUser[]> {
    const users: ExistingUser[] = [];

    try {
      // 既存ユーザーのボタン要素を取得
      const userButtons = page.locator('button:has-text("このユーザーで参加")');
      const count = await userButtons.count();

      for (let i = 0; i < count; i++) {
        const button = userButtons.nth(i);
        const userName = await button.locator('text').first().textContent();
        const avatarSrc = await button.locator('img').getAttribute('src');
        const avatarMatch = avatarSrc?.match(/(\d+)\.png/);

        if (userName && avatarMatch) {
          users.push({
            userId: `user-${i}`, // 実際のuserIdは実装に応じて取得
            userName: userName.trim(),
            avatarIndex: Number.parseInt(avatarMatch[1], 10),
          });
        }
      }
    } catch {
      // ユーザーが存在しない場合は空配列を返す
    }

    return users;
  }
}

// デフォルトエクスポート（テストファイルで import しやすく）
export const formInteractions = new FormInteractionsOperations();
