import type { Page } from '@playwright/test';

/**
 * オンラインドラフトアプリ用の共通ユーティリティ関数
 */

/**
 * 指定したページに移動し、ページロードを待機
 */
export const navigateToPage = async (page: Page, url: string) => {
  await page.goto(url);
  await page.waitForLoadState('networkidle');
};

/**
 * 要素が表示されるまで待機
 */
export const waitForElement = async (page: Page, selector: string) => {
  await page.waitForSelector(selector, { state: 'visible' });
};

/**
 * ローカルストレージをクリア
 */
export const clearLocalStorage = async (page: Page) => {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
};
