import type { Page } from '@playwright/test';

/**
 * ドラフト作成・参加機能のoperations
 */

/**
 * ドラフト作成操作
 * TOPページ → ドラフト作成ボタン → モーダル入力 → ロビーページ遷移
 */
export async function createNewDraft(page: Page, draftName?: string): Promise<string> {
  await page.goto('/');
  
  const createDraftButton = page.getByRole('button', { name: 'ドラフトを作る' });
  await createDraftButton.click();
  
  // モーダルが表示されることを確認
  const modal = page.getByRole('dialog', { name: 'ドラフトを作成' });
  await modal.waitFor({ state: 'visible' });
  
  // ドラフト名を入力（指定がない場合はデフォルト値を使用）
  const inputName = draftName || `テストドラフト${Date.now()}`;
  const nameInput = page.getByPlaceholder('例: 〇〇ドラフト会議');
  await nameInput.fill(inputName);
  
  // 作成ボタンをクリック
  const createButton = page.getByRole('button', { name: '作成する' });
  await createButton.click();
  
  // ロビーページに遷移するまで待機
  await page.waitForURL('/lobby/*');
  
  // URLからgroupIdを抽出して返却
  const url = page.url();
  return url.split('/lobby/')[1];
}

/**
 * コード参加操作
 * TOPページ → 参加ボタン → 参加ページ → コード入力 → ロビーページ遷移
 */
export async function joinByCode(page: Page, code: string): Promise<void> {
  await page.goto('/');
  
  const joinButton = page.getByText('会議に参加');
  await joinButton.click();
  
  await page.waitForURL('/join');
  
  const codeInput = page.getByPlaceholder('ABC123 または招待リンク');
  await codeInput.fill(code);
  
  const submitButton = page.getByText('参加する');
  await submitButton.click();
  
  await page.waitForURL(`/lobby/${code}`);
}

/**
 * URL直接参加操作
 * 直接ロビーURLにアクセス
 */
export async function joinByDirectUrl(page: Page, groupId: string): Promise<void> {
  await page.goto(`/lobby/${groupId}`);
}

/**
 * 履歴参加操作
 * TOPページ → 参加ボタン → 参加ページ → 履歴選択 → ロビーページ遷移
 */
export async function joinByHistory(page: Page, groupId: string): Promise<void> {
  await page.goto('/');
  
  const joinButton = page.getByText('会議に参加');
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
export async function setupNetworkDelay(page: Page, delayMs = 100): Promise<void> {
  await page.route('**', async (route) => {
    await new Promise(resolve => setTimeout(resolve, delayMs));
    await route.continue();
  });
}