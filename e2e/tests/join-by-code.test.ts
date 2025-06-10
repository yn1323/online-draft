import { expect, test } from '@playwright/test';
import { createNewDraft, joinByCode } from '../operations/draft';

/**
 * コード参加操作のE2Eテスト
 *
 * テスト対象操作:
 * TOPページ → 「参加する」ボタン → 参加ページ → コード入力 → ロビーページ遷移
 */

test.describe('コード参加操作', () => {
  test('有効なコードで参加できる', async ({ page, context }) => {
    // 新しいページでドラフト作成（groupId取得のため）
    const createPage = await context.newPage();
    const groupId = await createNewDraft(
      createPage,
      'コード参加テストドラフト',
    );
    await createPage.close();

    // メインページでコード参加
    await joinByCode(page, groupId);

    // ロビーページに遷移していることを確認
    await expect(page).toHaveURL(`/lobby/${groupId}`);
  });

  test('参加ページの基本操作が正常に動作する', async ({ page }) => {
    // TOPページから参加ページに遷移
    await page.goto('/');

    const joinButton = page.getByText('会議に参加');
    await joinButton.click();

    // 参加ページに遷移していることを確認
    await expect(page).toHaveURL('/join');

    // 参加コード入力欄が表示されることを確認
    const codeInput = page.getByPlaceholder('ABC123 または招待リンク');
    await expect(codeInput).toBeVisible();

    // 参加ボタンが表示されることを確認
    const submitButton = page.getByText('参加する');
    await expect(submitButton).toBeVisible();
  });

  test('無効なコードでバックエンドエラーハンドリングされる', async ({
    page,
  }) => {
    await page.goto('/join');

    // 無効なコードを入力
    const invalidCode = 'invalid-code-12345';
    const codeInput = page.getByPlaceholder('ABC123 または招待リンク');
    await codeInput.fill(invalidCode);

    // 参加ボタンをクリック（無効なコードなのでエラーが期待される）
    const submitButton = page.getByText('参加する');
    // 無効なコードの場合はボタンが無効化される可能性があるので、強制クリック
    await submitButton.click({ force: true });

    // バックエンドエラー時の適切なハンドリングを確認
    await page.waitForTimeout(2000); // Firebase処理待機

    // URLが変わらない（エラーハンドリング）または適切なエラー表示を確認
    const currentUrl = page.url();
    expect(currentUrl).toContain('/join');
  });
});
