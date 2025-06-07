import { expect, test } from '@playwright/test';

/**
 * ドラフト作成操作のE2Eテスト
 *
 * テスト対象操作:
 * TOPページ → 「ドラフトを作る」ボタン → Firebase自動認証 → ロビーページ遷移
 */

test.describe('ドラフト作成操作', () => {
  test('ドラフト作成ボタンクリックでロビーページに遷移する', async ({
    page,
  }) => {
    // TOPページに移動
    await page.goto('/');

    // ドラフト作成ボタンを取得
    const createDraftButton = page.getByRole('button', {
      name: 'ドラフトを作る',
    });

    // ドラフト作成ボタンをクリック
    await createDraftButton.click();

    // ロビーページに遷移することを確認
    await page.waitForURL('/lobby/*');

    // URLからgroupIdを取得
    const url = page.url();
    const groupId = url.split('/lobby/')[1];
    expect(groupId).toBeTruthy();
    expect(groupId).toMatch(/^[a-zA-Z0-9_-]+$/); // 有効なFirestore ID形式

    // 動的な情報が表示されることを確認（要素が分かれているのでgroupIdのみチェック）
    await expect(page.getByText(groupId)).toBeVisible();
  });

  test('複数回のドラフト作成で異なるgroupIdが生成される', async ({ page }) => {
    const groupIds = new Set();

    // 3回ドラフト作成を実行
    for (let i = 0; i < 3; i++) {
      await page.goto('/');

      // ドラフト作成ボタンをクリック
      await page.getByRole('button', { name: 'ドラフトを作る' }).click();

      // ロビーページに遷移するまで待機
      await page.waitForURL('/lobby/*');

      // groupIdを取得
      const url = page.url();
      const groupId = url.split('/lobby/')[1];

      // 一意なgroupIdが生成されることを確認
      expect(groupIds.has(groupId)).toBe(false);
      groupIds.add(groupId);
    }

    expect(groupIds.size).toBe(3);
  });

  test('ネットワーク遅延がある場合でもドラフト作成が正常に動作する', async ({
    page,
  }) => {
    // ネットワーク遅延をシミュレート
    await page.route('**', async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 100)); // 100ms遅延
      await route.continue();
    });

    await page.goto('/');

    // ドラフト作成ボタンをクリック
    const createDraftButton = page.getByRole('button', {
      name: 'ドラフトを作る',
    });
    await createDraftButton.click();

    // 遅延があってもロビーページに遷移することを確認（タイムアウト延長）
    await page.waitForURL('/lobby/*', { timeout: 10000 });
  });

  test('ページリロード後でもロビーページが正常に表示される', async ({
    page,
  }) => {
    // ドラフト作成
    await page.goto('/');
    await page.getByRole('button', { name: 'ドラフトを作る' }).click();
    await page.waitForURL('/lobby/*');

    // 現在のURLを保存
    const lobbyUrl = page.url();

    // ページをリロード
    await page.reload();

    // URLが変わらないことを確認
    expect(page.url()).toBe(lobbyUrl);
  });

  test('ブラウザの戻るボタンでTOPページに戻れる', async ({ page }) => {
    // ドラフト作成
    await page.goto('/');
    await page.getByRole('button', { name: 'ドラフトを作る' }).click();
    await page.waitForURL('/lobby/*');

    // ブラウザの戻るボタンを押す
    await page.goBack();

    // TOPページに戻ることを確認
    await expect(page).toHaveURL('/');
  });
});
