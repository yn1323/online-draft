import type { Page } from '@playwright/test';

/**
 * ドラフト作成・参加操作のoperations
 *
 * 責務: 複雑な画面遷移操作の抽象化
 * - ドラフト作成フロー
 * - 各種参加方法（コード・URL・履歴）
 * - 画面遷移の確認
 */

export class PageNavigationOperations {
  /**
   * ドラフト作成操作
   * TOPページ → ドラフト作成ボタン → ロビーページ遷移
   */
  async createNewDraft(page: Page): Promise<string> {
    // TOPページに移動
    await page.goto('/');

    // ドラフト作成ボタンをクリック
    const createDraftButton = page.getByRole('button', {
      name: 'ドラフトを作る',
    });
    await createDraftButton.click();

    // ロビーページに遷移するまで待機
    await page.waitForURL('/lobby/*');

    // URLからgroupIdを抽出して返却
    const url = page.url();
    const groupId = url.split('/lobby/')[1];

    return groupId;
  }

  /**
   * コード参加操作
   * TOPページ → 参加ボタン → 参加ページ → コード入力 → ロビーページ遷移
   */
  async joinByCode(page: Page, code: string): Promise<void> {
    // TOPページに移動
    await page.goto('/');

    // 参加ボタンをクリック
    const joinButton = page.getByRole('button', { name: '参加する' });
    await joinButton.click();

    // 参加ページに遷移することを確認
    await page.waitForURL('/join');

    // コード入力フィールドを探してコードを入力
    const codeInput = page.getByPlaceholder('参加コードを入力');
    await codeInput.fill(code);

    // 参加実行ボタンをクリック
    const submitButton = page.getByRole('button', { name: '参加' });
    await submitButton.click();

    // ロビーページに遷移することを確認
    await page.waitForURL(`/lobby/${code}`);
  }

  /**
   * URL直接参加操作
   * 直接ロビーURLにアクセス
   */
  async joinByDirectUrl(page: Page, groupId: string): Promise<void> {
    // 直接ロビーページのURLにアクセス
    await page.goto(`/lobby/${groupId}`);

    // ページ読み込み完了を待機
    await page.waitForLoadState('networkidle');
  }

  /**
   * 履歴参加操作
   * TOPページ → 参加ボタン → 参加ページ → 履歴選択 → ロビーページ遷移
   */
  async joinByHistory(page: Page, groupId: string): Promise<void> {
    // TOPページに移動
    await page.goto('/');

    // 参加ボタンをクリック
    const joinButton = page.getByRole('button', { name: '参加する' });
    await joinButton.click();

    // 参加ページに遷移することを確認
    await page.waitForURL('/join');

    // 履歴からグループを選択（実装に応じて調整が必要）
    const historyButton = page.getByText(groupId).first();
    await historyButton.click();

    // ロビーページに遷移することを確認
    await page.waitForURL(`/lobby/${groupId}`);
  }

  /**
   * TOPページに戻る操作
   * ブラウザの戻るボタンまたは直接遷移
   */
  async goBackToTop(page: Page): Promise<void> {
    await page.goBack();
    await page.waitForURL('/');
  }

  /**
   * ページリロード操作
   */
  async reloadPage(page: Page): Promise<void> {
    await page.reload();
    await page.waitForLoadState('networkidle');
  }

  /**
   * ロビーページの基本要素が表示されるまで待機
   */
  async waitForLobbyLoad(page: Page): Promise<void> {
    // ロビーページの主要要素が表示されるまで待機
    await page.getByText('ユーザー選択').waitFor();
  }

  /**
   * 参加ページの基本要素が表示されるまで待機
   */
  async waitForJoinPageLoad(page: Page): Promise<void> {
    // 参加ページの主要要素が表示されるまで待機
    await page.getByText('ドラフトに参加').waitFor();
  }

  /**
   * ネットワーク遅延をシミュレート
   */
  async setupNetworkDelay(page: Page, delayMs = 100): Promise<void> {
    await page.route('**', async (route) => {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      await route.continue();
    });
  }
}

// デフォルトエクスポート（テストファイルで import しやすく）
export const pageNavigation = new PageNavigationOperations();
