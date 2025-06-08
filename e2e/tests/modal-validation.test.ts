import { expect, test } from '@playwright/test';

/**
 * ドラフト作成モーダルのバリデーションE2Eテスト
 *
 * テスト対象:
 * CreateDraftModal の基本動作とバックエンドエラーハンドリング
 */

test.describe('ドラフト作成モーダル', () => {
  test.beforeEach(async ({ page }) => {
    // TOPページに移動
    await page.goto('/');
    
    // ドラフト作成ボタンをクリックしてモーダルを開く
    const createDraftButton = page.getByRole('button', { name: 'ドラフトを作る' });
    await createDraftButton.click();
    
    // モーダルが表示されることを確認
    const modal = page.getByRole('dialog', { name: 'ドラフトを作成' });
    await modal.waitFor({ state: 'visible' });
  });

  test('正常なドラフト作成フローが動作する', async ({ page }) => {
    const nameInput = page.getByPlaceholder('例: 〇〇ドラフト会議');
    const createButton = page.getByRole('button', { name: '作成する' });
    
    // 有効なドラフト名を入力
    await nameInput.fill('テストドラフト');
    
    // 作成ボタンが有効になることを確認
    await expect(createButton).toBeEnabled();
    
    // 作成を実行
    await createButton.click();
    
    // ロビーページに遷移することを確認
    await page.waitForURL('/lobby/*');
    
    // ドラフト名が表示されることを確認（heading要素で限定）
    await expect(page.getByRole('heading', { name: 'テストドラフト' })).toBeVisible();
  });

  test('Firebase接続エラー時の適切なハンドリング', async ({ page }) => {
    const nameInput = page.getByPlaceholder('例: 〇〇ドラフト会議');
    const createButton = page.getByRole('button', { name: '作成する' });
    
    // ネットワークを完全にブロック（Firebase接続エラーをシミュレート）
    await page.route('**/*', route => route.abort());
    
    // ドラフト名を入力
    await nameInput.fill('エラーテストドラフト');
    
    // 作成ボタンをクリック
    await createButton.click();
    
    // バックエンドエラー時の適切なハンドリングを確認
    await page.waitForTimeout(3000); // エラー処理待機
    
    // モーダルが開いたままであること（エラーハンドリング）を確認
    const modal = page.getByRole('dialog', { name: 'ドラフトを作成' });
    await expect(modal).toBeVisible();
  });
});