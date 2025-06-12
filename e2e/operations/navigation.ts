import type { Page } from '@playwright/test';

/**
 * 画面遷移共通機能のoperations
 */


/**
 * TOPページに戻る操作
 */
export async function goBackToTop(page: Page): Promise<void> {
  await page.goBack();
  await page.waitForURL('/');
}

/**
 * ページリロード操作
 */
export async function reloadPage(page: Page): Promise<void> {
  await page.reload();
}

/**
 * TOPページへ直接遷移
 */
export async function navigateToTop(page: Page): Promise<void> {
  await page.goto('/');
}

/**
 * 参加ページへ直接遷移
 */
export async function navigateToJoin(page: Page): Promise<void> {
  await page.goto('/join');
}

/**
 * ロビーページへ直接遷移
 */
export async function navigateToLobby(
  page: Page,
  groupId: string,
): Promise<void> {
  await page.goto(`/lobby/${groupId}`);
}

/**
 * 404ページの確認
 */
export async function navigateTo404(page: Page): Promise<void> {
  await page.goto('/invalid-page-that-does-not-exist');
}

/**
 * ブラウザの戻る・進む操作
 */
export async function goBack(page: Page): Promise<void> {
  await page.goBack();
}

export async function goForward(page: Page): Promise<void> {
  await page.goForward();
}

/**
 * 現在のURLを取得
 */
export async function getCurrentUrl(page: Page): Promise<string> {
  return page.url();
}

/**
 * groupIdをURLから抽出
 */
export async function extractGroupIdFromUrl(
  page: Page,
): Promise<string | null> {
  const url = page.url();
  const match = url.match(/\/lobby\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}
