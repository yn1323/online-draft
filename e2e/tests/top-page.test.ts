import { expect, test } from '@playwright/test';

test.describe('TOPページ', () => {
  test('ページが正常に表示される', async ({ page }) => {
    await page.goto('/');

    // ページタイトルの確認
    await expect(
      page.getByRole('heading', { name: 'オンラインドラフト会議' }),
    ).toBeVisible();
  });

  test('ルーム作成からロビーページへ遷移', async ({ page }) => {
    await page.goto('/');

    // ルーム作成ボタンクリック
    await page.getByRole('button', { name: 'ルームを作成する' }).click();

    // モーダルが表示されることを確認
    await expect(page.getByText('新しいルームを作成')).toBeVisible();

    // ルーム名入力
    await page
      .getByPlaceholder('例: 2024年プロ野球ドラフト')
      .fill('E2Eテストルーム');

    // ルーム作成ボタンクリック
    await page.getByRole('button', { name: 'ルームを作成' }).click();

    // ロビーページに遷移することを確認（URLパターンマッチ）
    await page.waitForURL(/\/lobby\/[a-zA-Z0-9]+/);

    // URLからgroupIdを抽出して検証
    const url = page.url();
    const groupId = url.match(/\/lobby\/([a-zA-Z0-9]+)/)?.[1];
    expect(groupId).toBeTruthy();
    expect(groupId).toMatch(/^[a-zA-Z0-9]+$/);
  });

  test('既存ルームに参加してロビーページへ遷移', async ({ page }) => {
    // まず別タブでルームを作成
    const context = page.context();
    const creatorPage = await context.newPage();

    await creatorPage.goto('/');
    await creatorPage.getByRole('button', { name: 'ルームを作成する' }).click();
    await creatorPage
      .getByPlaceholder('例: 2024年プロ野球ドラフト')
      .fill('参加用テストルーム');
    await creatorPage.getByRole('button', { name: 'ルームを作成' }).click();

    // ロビーページのURLからgroupIdを取得
    await creatorPage.waitForURL(/\/lobby\/[a-zA-Z0-9]+/);
    const creatorUrl = creatorPage.url();
    const groupId = creatorUrl.match(/\/lobby\/([a-zA-Z0-9]+)/)?.[1] as string;

    // 作成者ページを閉じる
    await creatorPage.close();

    // メインページでルーム参加テスト
    await page.goto('/');

    // ルーム参加の入力欄にgroupIdを入力
    const joinInput = page.getByPlaceholder('ルームURLまたはID');
    await joinInput.fill(groupId);

    // 参加ボタンクリック
    await page.getByRole('button', { name: '参加' }).click();

    // ロビーページに遷移することを確認
    await page.waitForURL(`/lobby/${groupId}`);

    // 正しいロビーページに遷移したことを確認
    expect(page.url()).toContain(`/lobby/${groupId}`);
  });
});
