import { expect, test } from '@playwright/test';
import { TIMEOUTS } from '../constants';
import { createNewDraft } from '../operations/draft';

test.describe('ロビーページ', () => {
  let groupId: string;

  test.beforeEach(async ({ page }) => {
    // テスト用のドラフトルームを作成
    groupId = await createNewDraft(page, 'E2Eテスト用ロビールーム');

    // ロビーページに到達していることを確認
    await expect(page).toHaveURL(`/lobby/${groupId}`);
  });

  test('URLをクリップボードにコピーできる', async ({ page }) => {
    // クリップボードAPI使用のためのコンテキスト許可
    await page
      .context()
      .grantPermissions(['clipboard-read', 'clipboard-write']);

    // URLコピーボタンをクリック
    const urlCopyButton = page.getByRole('button', { name: 'URLをコピー' });
    await urlCopyButton.click();

    // クリップボードからURLを取得
    await page.waitForTimeout(TIMEOUTS.SHORT);
    const copiedUrl = await page.evaluate(async () => {
      return await navigator.clipboard.readText();
    });

    // コピーされたURLが正しい形式であることを確認
    expect(copiedUrl).toContain(`/lobby/${groupId}`);
    expect(copiedUrl).toMatch(/^https?:\/\/.+\/lobby\/[a-zA-Z0-9]+$/);

    // コピーされたURLが現在のページのURLと一致することを確認
    const currentUrl = page.url();
    expect(copiedUrl).toBe(currentUrl);
  });

  test('新規ユーザー登録してドラフト画面に遷移できる', async ({ page }) => {
    // 新規ユーザー登録ボタンをクリック
    const newUserButton = page.getByText('登録する');
    await newUserButton.click();

    // アバター選択モーダルが表示されるまで待機
    await page.waitForTimeout(TIMEOUTS.MODAL_ANIMATION);

    // ユーザー名を入力
    const userNameInput = page.getByPlaceholder('名前を入力してください');
    await userNameInput.fill('E2Eテストユーザー');

    // アバター選択セクションを狭めて、その中の画像をクリック
    await page
      .getByText('アバターを選択×マークは他の参加者が使用中のアバターです')
      .click();
    // 5番目のアバター画像をクリック（0-indexedなので4番目）
    await page.locator('img').nth(4).click();

    // 登録ボタンをクリック
    const submitButton = page.getByRole('button', { name: '登録する' });
    await submitButton.click();

    // ドラフト画面に自動遷移することを確認
    await expect(page).toHaveURL(`/draft/${groupId}`);

    // 遷移後にsessionStorageにuserIdが保存されていることを確認
    const sessionUserId = await page.evaluate(() => {
      return sessionStorage.getItem('onlinedraft_user_id');
    });
    expect(sessionUserId).toBeTruthy();
    expect(sessionUserId).toHaveLength(20); // Firestore doc()形式は20文字
  });

  test('既存ユーザーを選択してドラフト画面に遷移できる', async ({ page }) => {
    // まず新規ユーザーを作成して既存ユーザーを作る
    const newUserButton = page.getByText('登録する');
    await newUserButton.click();
    await page.waitForTimeout(TIMEOUTS.MODAL_ANIMATION);

    const userNameInput = page.getByPlaceholder('名前を入力してください');
    await userNameInput.fill('E2E既存ユーザー');

    // アバター選択セクションを狭めて、3番目の画像をクリック
    await page
      .getByText('アバターを選択×マークは他の参加者が使用中のアバターです')
      .click();
    await page.locator('img').nth(2).click();

    const submitButton = page.getByRole('button', { name: '登録する' });
    await submitButton.click();

    // ドラフト画面に遷移後、再度ロビーに戻る
    await expect(page).toHaveURL(`/draft/${groupId}`);
    await page.goto(`/lobby/${groupId}`);

    // ページをリロードして既存ユーザー選択画面を表示
    await page.reload();
    await page.waitForTimeout(TIMEOUTS.MEDIUM);

    // 既存ユーザーをクリック（名前で選択）
    const existingUserCard = page.getByText('E2E既存ユーザー');
    await existingUserCard.click();

    // sessionStorageのuserIdを確認
    const sessionUserId = await page.evaluate(() => {
      return sessionStorage.getItem('onlinedraft_user_id');
    });
    expect(sessionUserId).toBeTruthy();
    expect(sessionUserId).toHaveLength(20);

    // ドラフト画面に遷移することを確認
    await expect(page).toHaveURL(`/draft/${groupId}`);

    // 遷移後もsessionIdが保持されていることを確認
    const sessionUserIdAfterTransition = await page.evaluate(() => {
      return sessionStorage.getItem('onlinedraft_user_id');
    });
    expect(sessionUserIdAfterTransition).toBe(sessionUserId);
  });

  test('ルーム退出でTOPページに戻ることができる', async ({ page }) => {
    // まず新規ユーザーを作成してロビーに参加状態にする
    const newUserButton = page.getByText('登録する');
    await newUserButton.click();
    await page.waitForTimeout(TIMEOUTS.MODAL_ANIMATION);

    const userNameInput = page.getByPlaceholder('名前を入力してください');
    await userNameInput.fill('E2E戻るテストユーザー');

    // アバター選択セクションを狭めて、7番目の画像をクリック
    await page
      .getByText('アバターを選択×マークは他の参加者が使用中のアバターです')
      .click();
    await page.locator('img').nth(6).click();

    const submitButton = page.getByRole('button', { name: '登録する' });
    await submitButton.click();

    // ドラフト画面に遷移後、再度ロビーに戻る（実際の使用状況を再現）
    await expect(page).toHaveURL(`/draft/${groupId}`);
    await page.goto(`/lobby/${groupId}`);

    // sessionIdを記録（戻る前の状態）
    const sessionUserIdBeforeBack = await page.evaluate(() => {
      return sessionStorage.getItem('onlinedraft_user_id');
    });
    expect(sessionUserIdBeforeBack).toBeTruthy();

    // ルーム退出リンクをクリック
    const exitLink = page.getByRole('link', { name: 'ルームを退出' });
    await exitLink.click();

    // TOPページに遷移したことを確認
    await expect(page).toHaveURL('/');

    // TOPページの主要要素が表示されていることを確認
    await expect(
      page.getByRole('heading', { name: 'オンラインドラフト会議' }),
    ).toBeVisible();

    // 戻った後もsessionStorageは保持されている（別ルームに再参加可能）
    const sessionUserIdAfterBack = await page.evaluate(() => {
      return sessionStorage.getItem('onlinedraft_user_id');
    });
    expect(sessionUserIdAfterBack).toBe(sessionUserIdBeforeBack);
  });
});
