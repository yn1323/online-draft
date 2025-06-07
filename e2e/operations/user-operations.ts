/**
 * ユーザー作成・選択に関する操作をまとめたクラス
 */

import { type Page, expect } from '@playwright/test';
import { selectors } from '../utils/selectors';
import { timeouts } from '../utils/test-data';
import type { TestUser } from '../utils/test-data';

export class UserOperations {
  constructor(private page: Page) {}

  /**
   * 新規ユーザーを作成
   */
  async createNewUser(user: TestUser): Promise<void> {
    // ロビーページにいることを確認
    await expect(this.page).toHaveURL(/\/lobby\/[a-zA-Z0-9-]+/);
    
    // ユーザー選択ステップで「新規作成」ボタンをクリック
    const createNewButton = this.page.getByRole('button', { name: '新しいユーザーを作成' });
    await expect(createNewButton).toBeVisible();
    await createNewButton.click();
    
    // ユーザー作成ステップに遷移したことを確認
    const createContainer = this.page.locator(selectors.lobby.userCreate.container);
    await expect(createContainer).toBeVisible();
    
    // 名前を入力
    const nameInput = this.page.getByLabel('ユーザー名');
    await nameInput.fill(user.name);
    
    // アバターを選択
    const avatarOption = this.page.getByRole('radio', { name: `アバター${user.avatarId}` });
    await avatarOption.click();
    
    // 確定ボタンをクリック
    const confirmButton = this.page.getByRole('button', { name: '作成' });
    await confirmButton.click();
    
    // ドラフトページへの遷移を待つ（または次のステップへ）
    await this.waitForUserCreationComplete();
  }

  /**
   * 既存ユーザーを選択
   */
  async selectExistingUser(userId: string): Promise<void> {
    // ロビーページにいることを確認
    await expect(this.page).toHaveURL(/\/lobby\/[a-zA-Z0-9-]+/);
    
    // ユーザー選択ステップが表示されていることを確認
    const selectContainer = this.page.locator(selectors.lobby.userSelect.container);
    await expect(selectContainer).toBeVisible();
    
    // ユーザーリストから選択
    // userIdではなくユーザー名でボタンを探す
    const userItem = this.page.getByRole('button', { name: new RegExp(`.*を選択`) });
    await expect(userItem).toBeVisible();
    await userItem.click();
    
    // 選択完了を待つ
    await this.waitForUserSelectionComplete();
  }

  /**
   * 現在のステップを確認
   */
  async verifyCurrentStep(stepNumber: number): Promise<void> {
    const stepIndicator = this.page.locator(selectors.lobby.currentStep(stepNumber));
    await expect(stepIndicator).toHaveAttribute('aria-current', 'step');
  }

  /**
   * 参加者リストに特定のユーザーが表示されているか確認
   */
  async verifyUserInParticipantList(userName: string): Promise<void> {
    const participantList = this.page.locator(selectors.lobby.groupInfo.participantList);
    await expect(participantList).toBeVisible();
    
    // 参加者リスト内にユーザー名が含まれているか確認
    await expect(participantList).toContainText(userName);
  }

  /**
   * 参加者数を確認
   */
  async verifyParticipantCount(expectedCount: number): Promise<void> {
    const countElement = this.page.locator(selectors.lobby.groupInfo.participantCount);
    await expect(countElement).toBeVisible();
    await expect(countElement).toContainText(expectedCount.toString());
  }

  /**
   * アバター選択状態を確認
   */
  async verifyAvatarSelected(avatarId: number): Promise<void> {
    const avatarOption = this.page.getByRole('radio', { name: `アバター${avatarId}` });
    // 選択状態を示す属性やクラスを確認（実装に応じて調整）
    await expect(avatarOption).toBeChecked();
  }

  /**
   * 名前入力のバリデーションエラーを確認
   */
  async verifyNameValidationError(errorMessage: string): Promise<void> {
    // 名前入力フィールド周辺のエラーメッセージを確認
    const nameInput = this.page.getByLabel('ユーザー名');
    const errorElement = nameInput.locator('..').locator('[role="alert"]');
    await expect(errorElement).toBeVisible();
    await expect(errorElement).toContainText(errorMessage);
  }

  /**
   * ユーザー作成完了を待つ
   */
  private async waitForUserCreationComplete(): Promise<void> {
    // ドラフトページへの遷移、または完了メッセージを待つ
    await Promise.race([
      this.page.waitForURL(/\/draft\/[a-zA-Z0-9-]+/, {
        timeout: timeouts.navigation,
      }),
      // または次のステップへの遷移を待つ
      this.page.waitForSelector(
        selectors.lobby.userSelect.container,
        { state: 'hidden', timeout: timeouts.medium }
      ),
    ]);
  }

  /**
   * ユーザー選択完了を待つ
   */
  private async waitForUserSelectionComplete(): Promise<void> {
    // ドラフトページへの遷移を待つ
    await this.page.waitForURL(/\/draft\/[a-zA-Z0-9-]+/, {
      timeout: timeouts.navigation,
    });
  }

  /**
   * 戻るボタンをクリック
   */
  async clickBackButton(): Promise<void> {
    const backButton = this.page.getByRole('button', { name: '戻る' });
    await expect(backButton).toBeVisible();
    await backButton.click();
    
    // ユーザー選択ステップに戻ったことを確認
    const selectContainer = this.page.locator(selectors.lobby.userSelect.container);
    await expect(selectContainer).toBeVisible();
  }
}