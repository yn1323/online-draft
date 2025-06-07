/**
 * ドラフト作成・参加に関する操作をまとめたクラス
 */

import { type Page, expect } from '@playwright/test';
import { selectors, getByText } from '../utils/selectors';
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
    const createButton = this.page.locator(selectors.top.createDraftButton).first();
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
    const codeInput = this.page.locator(selectors.join.codeInput).first();
    await expect(codeInput).toBeVisible();
    await codeInput.fill(code);
    
    // 参加ボタンをクリック
    const submitButton = this.page.locator(selectors.join.submitButton).first();
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
    const urlInput = this.page.locator(selectors.join.urlInput).first();
    await expect(urlInput).toBeVisible();
    await urlInput.fill(url);
    
    // 参加ボタンをクリック
    const submitButton = this.page.locator(selectors.join.submitButton).first();
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
    const recentList = this.page.locator(selectors.join.recentMeetingsList).first();
    await expect(recentList).toBeVisible();
    
    // 特定のグループをクリック
    // 履歴アイテムは実際のグループ名でクリック
    const meetingItem = this.page.getByRole('button', { name: new RegExp(groupId) });
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
    
    // グループコードを表示している要素を探す
    // 実際のコード表示部分を探す（例: "コード: 1234" のような表示）
    const codeElement = this.page.locator('text=/コード.*\\d{4}/');
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
    const participantList = this.page.locator(selectors.lobby.groupInfo.participantList).first();
    await expect(participantList).toBeVisible();
  }

  /**
   * エラーメッセージが表示されているか確認
   */
  async verifyErrorMessage(expectedMessage: string): Promise<void> {
    // role="alert"またはaria-invalid="true"の要素を探す
    const errorElement = this.page.locator('[role="alert"], [aria-invalid="true"]').first();
    await expect(errorElement).toBeVisible();
    await expect(errorElement).toContainText(expectedMessage);
  }

  /**
   * ローディング状態が解消されるまで待つ
   */
  async waitForLoadingComplete(): Promise<void> {
    // role="status"またはaria-busy="true"の要素を探す
    const loading = this.page.locator('[role="status"], [aria-busy="true"]').first();
    
    // ローディングが表示されている場合は非表示になるまで待つ
    try {
      if (await loading.isVisible({ timeout: 1000 })) {
        await expect(loading).toBeHidden({ timeout: timeouts.long });
      }
    } catch {
      // ローディングが表示されていない場合は何もしない
    }
  }
}