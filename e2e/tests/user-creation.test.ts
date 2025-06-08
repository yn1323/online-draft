import { expect, test } from '@playwright/test';
import { createNewDraft } from '../operations/draft';
import { 
  clickCreateNewUser, 
  createUser,
  type UserData
} from '../operations/user';

/**
 * ユーザー作成操作のE2Eテスト
 *
 * テスト対象操作:
 * ロビーページ → ユーザー選択ステップ → ユーザー作成ステップ → 作成実行 → 参加者一覧
 */

test.describe('ユーザー作成操作', () => {
  // テスト用のドラフトを事前に作成
  test.beforeEach(async ({ page }) => {
    await createNewDraft(page, 'ユーザー作成テストドラフト');
  });

  test('新規ユーザーの作成が正常に動作する', async ({ page }) => {
    // 新規ユーザー作成ボタンをクリック
    await clickCreateNewUser(page);
    
    // ユーザー作成ステップに遷移していることを確認
    await expect(page.getByText('アバターを選択')).toBeVisible();
    
    // ユーザー情報を入力
    const userData: UserData = {
      userName: 'テストユーザー',
      avatarIndex: 5
    };
    
    await createUser(page, userData);
    
    // ユーザー作成後、URLが変わらないことを確認（基本フロー確認）
    await expect(page).toHaveURL(/\/lobby\/.+/);
  });

});