import { expect, test } from '@playwright/test';
import { createNewDraft } from '../operations/draft';
import { createNewUser, selectExistingUser } from '../operations/user';

test.describe('ロビーからドラフトページへの画面遷移', () => {
  test('新規ユーザー作成後、ドラフトページへ遷移する', async ({
    page,
  }) => {
    // ドラフト作成してロビーへ
    const groupId = await createNewDraft(page, 'E2Eテストグループ');
    
    // 新規ユーザー作成
    await createNewUser(page, {
      userName: 'テストユーザー',
      avatarIndex: 5,
    });

    // ドラフトページへ遷移したことを確認
    await expect(page).toHaveURL(new RegExp(`/draft/${groupId}`));
    await expect(
      page.getByText(`ドラフト会議 ${groupId}`),
    ).toBeVisible();
  });

  test('既存ユーザー選択後、ドラフトページへ遷移する', async ({
    page,
  }) => {
    // ドラフト作成してロビーへ
    const groupId = await createNewDraft(page, 'E2Eテストグループ');
    
    // 新規ユーザー作成してドラフトページへ
    await createNewUser(page, {
      userName: '既存テストユーザー',
      avatarIndex: 3,
    });

    // ドラフトページへ遷移を確認
    await page.waitForURL(new RegExp(`/draft/${groupId}`));

    // ロビーページに直接アクセス
    await page.goto(`/lobby/${groupId}`);

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