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
    const createNewButton = this.page.locator(selectors.lobby.userSelect.createNewButton);
    await expect(createNewButton).toBeVisible();
    await createNewButton.click();
    
    // ユーザー作成ステップに遷移したことを確認（見出しで確認）
    await expect(this.page.locator('text=/ユーザー作成|新規作成/')).toBeVisible();
    
    // 名前を入力
    const nameInput = this.page.locator(selectors.lobby.userCreate.nameInput);
    await nameInput.fill(user.name);
    
    // アバターを選択
    const avatarOption = this.page.locator(
      selectors.lobby.userCreate.avatarOption(user.avatarId)
    );
    await avatarOption.click();
    
    // 確定ボタンをクリック
    const confirmButton = this.page.locator(selectors.lobby.userCreate.confirmButton);
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
    
    // ユーザー選択ステップが表示されていることを確認（見出しで確認）
    await expect(this.page.locator(selectors.lobby.userSelect.existingUserList)).toBeVisible();
    
    // ユーザーリストから選択
    const userItem = this.page.locator(selectors.lobby.userSelect.userItem(userId));
    await expect(userItem).toBeVisible();
    await userItem.click();
    
    // 選択完了を待つ
    await this.waitForUserSelectionComplete();
  }

  /**
   * 現在のステップを確認
   */
  async verifyCurrentStep(stepNumber: number): Promise<void> {
    // ステップインジケーターは通常 aria-current 属性で現在のステップを示す
    const stepIndicator = this.page.locator(`[aria-current="step"]`).filter({ hasText: stepNumber.toString() });
    await expect(stepIndicator).toBeVisible();
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
    const avatarOption = this.page.locator(
      selectors.lobby.userCreate.avatarOption(avatarId)
    );
    // 選択状態は通常 aria-checked、aria-selected、または特定のクラスで示される
    await expect(avatarOption).toHaveAttribute('aria-checked', 'true').or(avatarOption).toHaveAttribute('aria-selected', 'true');
  }

  /**
   * 名前入力のバリデーションエラーを確認
   */
  async verifyNameValidationError(errorMessage: string): Promise<void> {
    // 名前入力フィールド周辺のエラーメッセージを確認
    const nameInput = this.page.locator(selectors.lobby.userCreate.nameInput);
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
      // または既存ユーザーリストが非表示になるのを待つ
      this.page.waitForSelector(
        selectors.lobby.userSelect.existingUserList,
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
    // 戻るボタンは通常「戻る」というテキストを持つ
    const backButton = this.page.locator('button:has-text("戻る")');
    await expect(backButton).toBeVisible();
    await backButton.click();
    
    // ユーザー選択ステップに戻ったことを確認
    await expect(this.page.locator(selectors.lobby.userSelect.existingUserList)).toBeVisible();
  }
}