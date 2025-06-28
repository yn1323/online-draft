import { expect, type Page } from '@playwright/test';
import { SELECTORS, TEST_DATA, TIMEOUTS } from '../constants';

/**
 * ドラフト作成・参加機能のoperations
 */

/**
 * ドラフト作成操作
 * TOPページ → ドラフト作成ボタン → モーダル入力 → ロビーページ遷移
 */
export async function createNewDraft(
  page: Page,
  draftName?: string,
): Promise<string> {
  await page.goto('/');

  const createDraftButton = page.getByRole('button', {
    name: 'ルームを作成する',
  });
  await createDraftButton.click();

  // モーダルが表示されるまで待機（アニメーション完了を待つ）
  await page.waitForTimeout(500); // モーダルアニメーション開始待機
  const modal = page.locator(SELECTORS.MODAL.CONTAINER);
  await modal.waitFor({ state: 'visible', timeout: TIMEOUTS.MEDIUM });

  // ドラフト名を入力（指定がない場合はテスト用デフォルト値を使用）
  const inputName = draftName || TEST_DATA.DRAFT_ROOM.NAME;
  const nameInput = page.getByPlaceholder('例: 2024年プロ野球ドラフト');
  await nameInput.fill(inputName);

  // 作成ボタンをクリック
  const createButton = page.getByRole('button', { name: 'ルームを作成' });
  await createButton.click();

  // ロビーページに遷移するまで待機
  await page.waitForURL('/lobby/*', { timeout: TIMEOUTS.NAVIGATION });

  // URLからgroupIdを抽出して返却
  const url = page.url();
  return url.split('/lobby/')[1];
}

/**
 * コード参加操作
 * TOPページ → 参加ボタン → 参加ページ → コード入力 → ロビーページ遷移
 */
export async function joinByCode(page: Page, code?: string): Promise<void> {
  await page.goto('/');

  // ActionCardはasChildでリンクになっているため、link roleで取得
  const joinButton = page.getByRole('link', { name: '会議に参加' });
  await joinButton.click();

  await page.waitForURL('/join', { timeout: TIMEOUTS.NAVIGATION });

  // テスト用コードを使用（指定がない場合）
  const testCode = code || TEST_DATA.SAMPLE_CODES[0];
  const codeInput = page.getByPlaceholder('ABC123 または招待リンク');
  await codeInput.fill(testCode);

  // メインの参加ボタン（グループに参加する）を特定
  const submitButton = page.getByRole('button', { name: 'グループに参加する' });
  await submitButton.click();

  await page.waitForURL(`/lobby/${testCode}`, { timeout: TIMEOUTS.NAVIGATION });
}

/**
 * URL直接参加操作
 * 直接ロビーURLにアクセス
 */
export async function joinByDirectUrl(
  page: Page,
  groupId: string,
): Promise<void> {
  await page.goto(`/lobby/${groupId}`);
}

/**
 * 履歴参加操作
 * TOPページ → 参加ボタン → 参加ページ → 履歴選択 → ロビーページ遷移
 */
export async function joinByHistory(
  page: Page,
  groupId: string,
): Promise<void> {
  await page.goto('/');

  const joinButton = page.getByRole('link', { name: '会議に参加' });
  await joinButton.click();

  await page.waitForURL('/join');

  // 履歴からグループを選択
  const historyButton = page.getByText(groupId).first();
  await historyButton.click();

  await page.waitForURL(`/lobby/${groupId}`);
}

/**
 * ネットワーク遅延をシミュレート
 */
export async function setupNetworkDelay(
  page: Page,
  delayMs = TIMEOUTS.SHORT,
): Promise<void> {
  await page.route('**', async (route) => {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    await route.continue();
  });
}

/**
 * アイテム選択操作
 * 指名ボタン → ItemSelectModal → アイテム入力 → 保存
 */
export async function selectItem(
  page: Page,
  itemName: string,
  comment = '',
): Promise<void> {
  // 指名ボタンをクリック
  const selectButton = page.getByRole('button', { name: '指名する' });
  await selectButton.click();

  // ItemSelectModalが表示されるまで待機
  await page.waitForTimeout(TIMEOUTS.MODAL_ANIMATION);
  const modal = page.locator(SELECTORS.MODAL.CONTAINER);
  await modal.waitFor({ state: 'visible', timeout: TIMEOUTS.MEDIUM });

  // アイテム名を入力
  const itemInput = page.getByRole('textbox', { name: 'アイテム名' });
  await itemInput.fill(itemName);

  // コメント入力（任意）
  if (comment) {
    const commentInput = page.getByRole('textbox', { name: 'コメント' });
    await commentInput.fill(comment);
  }

  // 指名を確定ボタンをクリック（submit typeを使用）
  const confirmButton = page.locator('button[type="submit"]:has-text("指名を確定")');
  await confirmButton.click();

  // モーダルが閉じるまで待機
  await modal.waitFor({ state: 'hidden', timeout: TIMEOUTS.MEDIUM });
}

/**
 * 指名発表操作
 * 指名発表ボタン → 確認モーダル → 実行
 */
export async function openResult(page: Page): Promise<void> {
  // 指名発表ボタンをクリック
  const openButton = page.getByRole('button', { name: '指名発表' });
  await openButton.click();

  // 確認モーダルが表示される場合の処理
  await page.waitForTimeout(TIMEOUTS.MODAL_ANIMATION);
  
  // 「開票する」ボタンがあれば実行
  const executeButton = page.getByRole('button', { name: '開票する' });
  if (await executeButton.isVisible()) {
    await executeButton.click();
  }

  // StageModalのアニメーション完了まで待機
  await page.waitForTimeout(TIMEOUTS.LONG);
}

/**
 * 過去の結果編集操作
 * 過去結果クリック → ItemSelectModal → 編集 → 保存
 */
export async function editPastResult(
  page: Page,
  targetText: string,
  newItemName: string,
): Promise<void> {
  // SP版の場合、アコーディオンを開く必要がある場合を考慮
  const isMobile = await page.evaluate(() => window.innerWidth < 768);
  
  if (isMobile) {
    // Round数のボタンを探してクリック（アコーディオンを開く）
    const roundButton = page.getByRole('button', { name: /Round \d+/ }).first();
    if (await roundButton.isVisible()) {
      await roundButton.click();
      await page.waitForTimeout(TIMEOUTS.SHORT);
    }
  }

  // 対象の結果をクリック
  const targetResult = page.getByText(targetText);
  await targetResult.click();

  // ItemSelectModalが表示されるまで待機
  await page.waitForTimeout(TIMEOUTS.MODAL_ANIMATION);
  const modal = page.locator(SELECTORS.MODAL.CONTAINER);
  await modal.waitFor({ state: 'visible', timeout: TIMEOUTS.MEDIUM });

  // アイテム名を変更
  const itemInput = page.getByRole('textbox', { name: 'アイテム名' });
  await itemInput.clear();
  await itemInput.fill(newItemName);

  // 変更を保存ボタンをクリック
  const saveButton = page.getByRole('button', { name: '変更を保存' });
  await saveButton.click();

  // モーダルが閉じるまで待機
  await modal.waitFor({ state: 'hidden', timeout: TIMEOUTS.MEDIUM });
}

/**
 * ドラフトルーム共有操作
 * シェアボタン → ShareModal → URLコピー
 */
export async function shareRoom(page: Page): Promise<void> {
  // シェアボタンをクリック
  const shareButton = page.getByRole('button', { name: 'シェア' });
  await shareButton.click();

  // ShareModalが表示されるまで待機
  await page.waitForTimeout(TIMEOUTS.MODAL_ANIMATION);
  const modal = page.locator(SELECTORS.MODAL.CONTAINER);
  await modal.waitFor({ state: 'visible', timeout: TIMEOUTS.MEDIUM });

  // URLコピーボタンをクリック
  const copyButton = page.getByRole('button', { name: 'URLをコピー' });
  await copyButton.click();

  // コピー完了トーストの確認
  await expect(page.getByText('URLをコピーしました')).toBeVisible();

  // モーダルを閉じる
  const closeButton = page.getByRole('button', { name: '閉じる' });
  await closeButton.click();
  await modal.waitFor({ state: 'hidden', timeout: TIMEOUTS.MEDIUM });
}

/**
 * SP版タブ切り替え操作
 */
export async function switchToTab(page: Page, tabName: 'ドラフト' | 'チャット'): Promise<void> {
  const tabButton = page.getByRole('tab', { name: tabName === 'チャット' ? 'チャット/ログ' : tabName });
  await tabButton.click();
  await page.waitForTimeout(TIMEOUTS.SHORT);
}
