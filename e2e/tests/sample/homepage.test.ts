import { expect, test } from '@playwright/test';

test.describe('サンプルページ - ホームページテスト', () => {
  test('ホームページに「オンラインドラフト会議」が表示されている', async ({
    page,
  }) => {
    // ルートページに遷移
    await page.goto('/');

    // 「online-draft」というテキストが表示されていることを確認
    await expect(page.getByText('オンラインドラフト会議')).toBeVisible();
  });
});
