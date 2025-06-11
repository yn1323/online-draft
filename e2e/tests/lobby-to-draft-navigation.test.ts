import { expect, test } from '@playwright/test';
import { createNewDraft } from '../operations/draft';
import { createNewUser, selectExistingUser } from '../operations/user';

test.describe('ロビーからドラフトページへの画面遷移', () => {
  test('新規ユーザー作成後、ドラフトページへ遷移する', async ({ page }) => {
    // ドラフト作成してロビーへ
    const groupName = 'E2Eテストグループ';
    const groupId = await createNewDraft(page, groupName);

    // 新規ユーザー作成
    await createNewUser(page, {
      userName: 'テストユーザー',
      avatarIndex: 5,
    });

    // ドラフトページへ遷移したことを確認
    await expect(page).toHaveURL(new RegExp(`/draft/${groupId}`));

    // ドラフトページのグループ名が表示されるまで待機
    await expect(page.getByText(groupName)).toBeVisible({
      timeout: 10000,
    });
  });

  test('既存ユーザー選択後、ドラフトページへ遷移する', async ({ page }) => {
    // ドラフト作成してロビーへ
    const groupName = 'E2Eテストグループ';
    const groupId = await createNewDraft(page, groupName);

    // 新規ユーザー作成してドラフトページへ
    await createNewUser(page, {
      userName: '既存テストユーザー',
      avatarIndex: 3,
    });

    // ドラフトページへ遷移を確認
    await page.waitForURL(new RegExp(`/draft/${groupId}`));

    // SessionStorageをクリアしてからロビーページに直接アクセス
    await page.evaluate(() => {
      sessionStorage.clear();
    });
    await page.goto(`/lobby/${groupId}`);

    // ページの読み込み完了を待機
    await page.waitForSelector('text=既存テストユーザー', { timeout: 10000 });

    // 既存ユーザーを選択
    await selectExistingUser(page, '既存テストユーザー');

    // ドラフトページへ遷移したことを確認
    await expect(page).toHaveURL(new RegExp(`/draft/${groupId}`));
  });

  test('グループが存在しない場合、エラーメッセージが表示される', async ({
    page,
  }) => {
    await page.goto('/lobby/non-existent-group-id');

    await expect(
      page.getByRole('heading', { name: 'グループが見つかりません' }),
    ).toBeVisible();
  });
});
