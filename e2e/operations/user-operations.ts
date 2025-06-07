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
    const createNewButton = this.page.locator(selectors.lobby.userSelect.createNewButton).first();
    await expect(createNewButton).toBeVisible();
    await createNewButton.click();
    
    // ユーザー作成ステップに遷移したことを確認
    const createContainer = this.page.locator(selectors.lobby.userCreate.container).first();
    await expect(createContainer).toBeVisible();
    
    // 名前を入力
    const nameInput = this.page.locator(selectors.lobby.userCreate.nameInput).first();
    await nameInput.fill(user.name);
    
    // アバターを選択
    const avatarOption = this.page.getByRole('radio', { name: new RegExp(`アバター.*${user.avatarId}`) })
      .or(this.page.locator(`img[alt*="${user.avatarId}"]`).first());
    await avatarOption.click();
    
    // 確定ボタンをクリック
    const confirmButton = this.page.locator(selectors.lobby.userCreate.confirmButton).first();
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
    const selectContainer = this.page.locator(selectors.lobby.userSelect.container).first();
    await expect(selectContainer).toBeVisible();
    
    // ユーザーリストから選択
    const userItem = this.page.getByRole('button', { name: new RegExp(userId) })
      .or(this.page.locator(selectors.lobby.userSelect.existingUserList).getByText(userId));
    await expect(userItem).toBeVisible();
    await userItem.click();
    
    // 選択完了を待つ
    await this.waitForUserSelectionComplete();
  }

  /**
   * 現在のステップを確認
   */
  async verifyCurrentStep(stepNumber: number): Promise<void> {
    // ステップインジケーターの現在のステップを確認
    const stepText = `ステップ${stepNumber}`;
    const currentStep = this.page.locator('[aria-current="step"]')
      .or(this.page.locator(`text=${stepText}`).filter({ hasText: /現在/ }));
    await expect(currentStep).toBeVisible();
  }

  /**
   * 参加者リストに特定のユーザーが表示されているか確認
   */
  async verifyUserInParticipantList(userName: string): Promise<void> {
    const participantList = this.page.locator(selectors.lobby.groupInfo.participantList).first();
    await expect(participantList).toBeVisible();
    
    // 参加者リスト内にユーザー名が含まれているか確認
    await expect(participantList).toContainText(userName);
  }

  /**
   * 参加者数を確認
   */
  async verifyParticipantCount(expectedCount: number): Promise<void> {
    // 参加者数の表示を確認（例: "参加者: 3人"）
    const countText = new RegExp(`参加者.*${expectedCount}`);
    const countElement = this.page.getByText(countText);
    await expect(countElement).toBeVisible();
  }

  /**
   * アバター選択状態を確認
   */
  async verifyAvatarSelected(avatarId: number): Promise<void> {
    // アバターの選択状態を確認
    const avatarOption = this.page.getByRole('radio', { name: new RegExp(`アバター.*${avatarId}`), checked: true })
      .or(this.page.locator(`[aria-checked="true"] img[alt*="${avatarId}"]`));
    await expect(avatarOption).toBeVisible();
  }

  /**
   * 名前入力のバリデーションエラーを確認
   */
  async verifyNameValidationError(errorMessage: string): Promise<void> {
    // 名前入力フィールド周辺のエラーメッセージを確認
    const errorElement = this.page.locator('[role="alert"]').filter({ hasText: errorMessage });
    await expect(errorElement).toBeVisible();
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
      this.page.locator(selectors.lobby.userSelect.container).waitFor({
        state: 'hidden',
        timeout: timeouts.medium,
      }),
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
    const backButton = this.page.getByText('戻る')
      .or(this.page.getByRole('button', { name: /戻る/ }));
    await expect(backButton).toBeVisible();
    await backButton.click();
    
    // ユーザー選択ステップに戻ったことを確認
    const selectContainer = this.page.locator(selectors.lobby.userSelect.container).first();
    await expect(selectContainer).toBeVisible();
  }
}