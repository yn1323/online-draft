import { expect, test } from '@playwright/test';

test.describe('サンプルページ - ホームページテスト', () => {
  test('ホームページに「online-draft」が表示されている', async ({ page }) => {
    // ルートページに遷移
    await page.goto('/');

    // 「online-draft」というテキストが表示されていることを確認
    await expect(page.getByText('online-draft')).toBeVisible();
  });

  test('ホームページにh1要素として「online-draft」が表示されている', async ({
    page,
  }) => {
    // ルートページに遷移
    await page.goto('/');

    // h1要素として「online-draft」が表示されていることを確認
    await expect(
      page.getByRole('heading', { name: 'online-draft', level: 1 }),
    ).toBeVisible();
  });

  test('ホームページのh1要素にborderクラスが適用されている', async ({
    page,
  }) => {
    // ルートページに遷移
    await page.goto('/');

    // h1要素にborderとtext-gray-500クラスが適用されていることを確認
    const heading = page.getByRole('heading', { name: 'online-draft' });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveClass(/border/);
    await expect(heading).toHaveClass(/text-gray-500/);
  });

  test('ホームページから「ログイン」リンクが利用可能', async ({ page }) => {
    // ルートページに遷移
    await page.goto('/');

    // 「online-draft」が表示されていることを確認
    await expect(page.getByText('online-draft')).toBeVisible();

    // 「ログイン」リンクが表示されていることを確認
    await expect(page.getByRole('link', { name: 'ログイン' })).toBeVisible();
  });
});
