import { expect, test } from '@playwright/test';
import { TIMEOUTS } from '../constants';
import { createNewDraft } from '../operations/draft';

test.describe('チャット機能', () => {
  let groupId: string;

  test.beforeEach(async ({ page }) => {
    // テスト用のドラフトルームを作成
    groupId = await createNewDraft(page, 'E2Eテスト用チャットルーム');

    // ロビーページに到達していることを確認
    await expect(page).toHaveURL(`/lobby/${groupId}`);

    // 新規ユーザー登録してドラフト画面に遷移
    const newUserButton = page.getByText('登録する');
    await newUserButton.click();

    // アバター選択モーダルが表示されるまで待機
    await page.waitForTimeout(TIMEOUTS.MODAL_ANIMATION);

    // ユーザー名を入力
    const userNameInput = page.getByPlaceholder('名前を入力してください');
    await userNameInput.fill('E2Eチャットテストユーザー');

    // アバター選択
    await page
      .getByText('アバターを選択×マークは他の参加者が使用中のアバターです')
      .click();
    await page.locator('img').nth(1).click();

    // 登録ボタンをクリック
    const submitButton = page.getByRole('button', { name: '登録する' });
    await submitButton.click();
  });

  test('メッセージを送信して表示される', async ({ page }) => {
    const testMessage = 'E2Eテストメッセージです';

    // SP版の場合はチャットタブに切り替え
    const isMobile = await page.evaluate(() => window.innerWidth < 768);
    if (isMobile) {
      const chatTab = page.getByRole('tab', { name: 'チャット' });
      await chatTab.click();
      await page.waitForTimeout(TIMEOUTS.SHORT);
    }

    // チャット入力欄にメッセージを入力
    const chatInput = page.getByPlaceholder('メッセージを入力...');
    await chatInput.fill(testMessage);

    // 送信ボタンをクリック
    const sendButton = page.getByRole('button', { name: '送信' });
    await sendButton.click();

    // メッセージが表示されることを確認
    await expect(page.getByText(testMessage)).toBeVisible();

    // 入力欄がクリアされることを確認
    await expect(chatInput).toHaveValue('');
  });

  test('Enterキーでメッセージを送信できる', async ({ page }) => {
    const testMessage = 'Enterキーテスト';

    // SP版の場合はチャットタブに切り替え
    const isMobile = await page.evaluate(() => window.innerWidth < 768);
    if (isMobile) {
      const chatTab = page.getByRole('tab', { name: 'チャット' });
      await chatTab.click();
      await page.waitForTimeout(TIMEOUTS.SHORT);
    }

    // チャット入力欄にメッセージを入力
    const chatInput = page.getByPlaceholder('メッセージを入力...');
    await chatInput.fill(testMessage);

    // Enterキーで送信
    await chatInput.press('Enter');

    // メッセージが表示されることを確認
    await expect(page.getByText(testMessage)).toBeVisible();

    // 入力欄がクリアされることを確認
    await expect(chatInput).toHaveValue('');
  });

  test('空のメッセージは送信できない', async ({ page }) => {
    // SP版の場合はチャットタブに切り替え
    const isMobile = await page.evaluate(() => window.innerWidth < 768);
    if (isMobile) {
      const chatTab = page.getByRole('tab', { name: 'チャット' });
      await chatTab.click();
      await page.waitForTimeout(TIMEOUTS.SHORT);
    }

    // 送信ボタンが無効化されていることを確認
    const sendButton = page.getByRole('button', { name: '送信' });
    await expect(sendButton).toBeDisabled();

    // 空白のみのメッセージも送信できないことを確認
    const chatInput = page.getByPlaceholder('メッセージを入力...');
    await chatInput.fill('   ');
    await expect(sendButton).toBeDisabled();
  });
});
