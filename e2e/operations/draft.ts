import type { Page } from '@playwright/test';

/**
 * ドラフト作成・参加機能のoperations
 */

/**
 * ドラフト作成操作
 * TOPページ → ドラフト作成ボタン → ロビーページ遷移
 */
export async function createNewDraft(page: Page): Promise<string> {
  await page.goto('/');
  
  const createDraftButton = page.getByRole('button', { name: 'ドラフトを作る' });
  await createDraftButton.click();
  
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
  
  const joinButton = page.getByRole('button', { name: '参加する' });
  await joinButton.click();
  
  await page.waitForURL('/join');
  
  const codeInput = page.getByPlaceholder('参加コードを入力');
  await codeInput.fill(code);
  
  const submitButton = page.getByRole('button', { name: '参加' });
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
  
  const joinButton = page.getByRole('button', { name: '参加する' });
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