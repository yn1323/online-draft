import { expect, test } from '@playwright/test';

test.describe('TOPページ', () => {
  test('ページが正常に表示される', async ({ page }) => {
    await page.goto('/');

    // ページタイトルの確認
    await expect(
      page.getByRole('heading', { name: 'オンラインドラフト会議' }),
    ).toBeVisible();
  });
});
