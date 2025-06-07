/**
 * ドラフト作成・参加に関する操作をまとめたクラス
 */

import { type Page, expect } from '@playwright/test';
import { selectors } from '../utils/selectors';
import { timeouts, testUrls } from '../utils/test-data';

export class DraftOperations {
  constructor(private page: Page) {}

  /**
   * TOPページからドラフトを作成
   */
  async createNewDraft(): Promise<void> {
    // TOPページに移動
    await this.page.goto(testUrls.top);
    
    // ドラフト作成ボタンをクリック
    const createButton = this.page.locator(selectors.top.createDraftButton);
    await expect(createButton).toBeVisible();
    await createButton.click();
    
    // ロビーページへの遷移を待つ
    await this.page.waitForURL(/\/lobby\/[a-zA-Z0-9-]+/, {
      timeout: timeouts.navigation,
    });
  }

  /**
   * 4桁コードでドラフトに参加
   */
  async joinWithCode(code: string): Promise<void> {
    // 参加ページに移動
    await this.page.goto(testUrls.join);
    
    // コード入力フィールドに入力
    const codeInput = this.page.locator(selectors.join.codeInput);
    await expect(codeInput).toBeVisible();
    await codeInput.fill(code);
    
    // 参加ボタンをクリック
    const submitButton = this.page.locator(selectors.join.submitButton);
    await submitButton.click();
    
    // ロビーページへの遷移を待つ
    await this.page.waitForURL(/\/lobby\/[a-zA-Z0-9-]+/, {
      timeout: timeouts.navigation,
    });
  }

  /**
   * URLでドラフトに参加
   */
  async joinWithUrl(url: string): Promise<void> {
    // 参加ページに移動
    await this.page.goto(testUrls.join);
    
    // URL入力フィールドに入力
    const urlInput = this.page.locator(selectors.join.urlInput);
    await expect(urlInput).toBeVisible();
    await urlInput.fill(url);
    
    // 参加ボタンをクリック
    const submitButton = this.page.locator(selectors.join.submitButton);
    await submitButton.click();
    
    // ロビーページへの遷移を待つ
    await this.page.waitForURL(/\/lobby\/[a-zA-Z0-9-]+/, {
      timeout: timeouts.navigation,
    });
  }

  /**
   * 履歴から参加
   */
  async joinFromHistory(groupId: string): Promise<void> {
    // 参加ページに移動
    await this.page.goto(testUrls.join);
    
    // 履歴リストが表示されるまで待つ
    const recentList = this.page.locator(selectors.join.recentMeetingsList);
    await expect(recentList).toBeVisible();
    
    // 特定のグループをクリック
    const meetingItem = this.page.locator(selectors.join.recentMeetingItem(groupId));
    await expect(meetingItem).toBeVisible();
    await meetingItem.click();
    
    // ロビーページへの遷移を待つ
    await this.page.waitForURL(`/lobby/${groupId}`, {
      timeout: timeouts.navigation,
    });
  }

  /**
   * 現在のグループIDを取得
   */
  async getCurrentGroupId(): Promise<string> {
    const url = this.page.url();
    const match = url.match(/\/lobby\/([a-zA-Z0-9-]+)/);
    if (!match) {
      throw new Error('グループIDが取得できません');
    }
    return match[1];
  }

  /**
   * 現在のグループコードを取得（ロビーページから）
   */
  async getGroupCode(): Promise<string> {
    // ロビーページにいることを確認
    await expect(this.page).toHaveURL(/\/lobby\/[a-zA-Z0-9-]+/);
    
    // グループコードを表示している要素を探す（通常は見出しやコード表示エリアに含まれる）
    const codeElement = this.page.locator('text=/\\d{4}/').first();
    const code = await codeElement.textContent();
    
    if (!code) {
      throw new Error('グループコードが取得できません');
    }
    
    // 4桁の数字のみを抽出
    const match = code.match(/\d{4}/);
    if (!match) {
      throw new Error('有効なグループコードが見つかりません');
    }
    
    return match[0];
  }

  /**
   * グループ情報が正しく表示されているか確認
   */
  async verifyGroupInfo(expectedTitle?: string): Promise<void> {
    const titleElement = this.page.locator(selectors.lobby.groupInfo.title).first();
    await expect(titleElement).toBeVisible();
    
    if (expectedTitle) {
      await expect(titleElement).toContainText(expectedTitle);
    }
    
    // 参加者リストが表示されているか確認
    const participantList = this.page.locator(selectors.lobby.groupInfo.participantList);
    await expect(participantList).toBeVisible();
  }

  /**
   * エラーメッセージが表示されているか確認
   */
  async verifyErrorMessage(expectedMessage: string): Promise<void> {
    // エラーメッセージは通常role="alert"またはaria-live="polite"で実装される
    const errorElement = this.page.locator('[role="alert"], [aria-live="polite"]').filter({ hasText: expectedMessage });
    await expect(errorElement).toBeVisible();
  }

  /**
   * ローディング状態が解消されるまで待つ
   */
  async waitForLoadingComplete(): Promise<void> {
    // ローディングインジケーターは通常role="status"やaria-busy="true"で実装される
    const loading = this.page.locator('[role="status"][aria-busy="true"], [role="progressbar"]');
    
    // ローディングが表示されている場合は非表示になるまで待つ
    if (await loading.isVisible()) {
      await expect(loading).toBeHidden({ timeout: timeouts.long });
    }
  }
}