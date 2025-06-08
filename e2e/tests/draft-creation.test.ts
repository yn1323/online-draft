import { expect, test } from '@playwright/test';
import { createNewDraft, setupNetworkDelay } from '../operations/draft';
import { goBack, reloadPage } from '../operations/navigation';
import { TEST_DATA, TIMEOUTS } from '../constants';

/**
 * ドラフト作成操作のE2Eテスト
 *
 * テスト対象操作:
 * TOPページ → 「ドラフトを作る」ボタン → モーダル入力 → Firebase自動認証 → ロビーページ遷移
 */

test.describe('ドラフト作成操作', () => {
  test('ドラフト作成ボタンクリックでロビーページに遷移する', async ({
    page,
  }) => {
    // 統一テストデータでドラフト作成操作を実行
    const draftName = TEST_DATA.DRAFT_ROOM.NAME;
    const groupId = await createNewDraft(page, draftName);

    // groupIdが有効な形式であることを確認
    expect(groupId).toBeTruthy();
    expect(groupId).toMatch(/^[a-zA-Z0-9_-]+$/); // 有効なFirestore ID形式

    // 入力したドラフト名とgroupIdが表示されることを確認
    await expect(page.getByText(draftName)).toBeVisible();
    await expect(page.getByText(groupId)).toBeVisible();
  });

  test('複数回のドラフト作成で異なるgroupIdが生成される', async ({ page }) => {
    const groupIds = new Set();

    // 3回ドラフト作成を実行
    for (let i = 0; i < 3; i++) {
      const draftName = `テストドラフト${i + 1}`;
      const groupId = await createNewDraft(page, draftName);

      // 一意なgroupIdが生成されることを確認
      expect(groupIds.has(groupId)).toBe(false);
      groupIds.add(groupId);
    }

    expect(groupIds.size).toBe(3);
  });

  test('ネットワーク遅延がある場合でもドラフト作成が正常に動作する', async ({
    page,
  }) => {
    // ネットワーク遅延をシミュレート（統一タイムアウト使用）
    await setupNetworkDelay(page, TIMEOUTS.SHORT);

    // 遅延があってもドラフト作成が成功することを確認
    const draftName = 'ネットワーク遅延テスト';
    const groupId = await createNewDraft(page, draftName);
    expect(groupId).toBeTruthy();
  });

  test('ページリロード後でもロビーページが正常に表示される', async ({
    page,
  }) => {
    // ドラフト作成
    const draftName = 'リロードテスト';
    await createNewDraft(page, draftName);
    const lobbyUrl = page.url();

    // ページをリロード
    await reloadPage(page);

    // URLが変わらないことを確認
    expect(page.url()).toBe(lobbyUrl);
  });

  test('ブラウザの戻るボタンでTOPページに戻れる', async ({ page }) => {
    // ドラフト作成
    const draftName = '戻るボタンテスト';
    await createNewDraft(page, draftName);

    // ブラウザの戻るボタンを押す
    await goBack(page);

    // TOPページに戻ることを確認
    await expect(page).toHaveURL('/');
  });
});
