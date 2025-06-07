/**
 * 参加者シナリオのE2Eテスト
 * ユーザーストーリー: ドラフト会議に参加したい人が、コード・URL・履歴から参加する
 */

import { test, expect } from '@playwright/test';
import { DraftOperations } from '../operations/draft-operations';
import { UserOperations } from '../operations/user-operations';
import { predefinedUsers, errorMessages, testUrls } from '../utils/test-data';
import { selectors } from '../utils/selectors';

test.describe('参加者シナリオ', () => {
  let draftOps: DraftOperations;
  let userOps: UserOperations;

  test.beforeEach(async ({ page }) => {
    draftOps = new DraftOperations(page);
    userOps = new UserOperations(page);
  });

  test('4桁コードでドラフトに参加する', async ({ page, context }) => {
    let groupCode: string;

    // 準備: 別タブで主催者がドラフトを作成
    await test.step('主催者がドラフトを準備', async () => {
      const organizerPage = await context.newPage();
      const organizerDraftOps = new DraftOperations(organizerPage);
      const organizerUserOps = new UserOperations(organizerPage);
      
      await organizerDraftOps.createNewDraft();
      await organizerUserOps.createNewUser(predefinedUsers.organizer);
      groupCode = await organizerDraftOps.getGroupCode();
      
      // 主催者ページは開いたままにしておく（リアルタイム同期の確認用）
    });

    // Step 1: コードで参加
    await test.step('4桁コードで参加', async () => {
      await draftOps.joinWithCode(groupCode);
      
      // ロビーページに遷移したことを確認
      await expect(page).toHaveURL(/\/lobby\/[a-zA-Z0-9-]+/);
    });

    // Step 2: グループ情報を確認
    await test.step('グループ情報を確認', async () => {
      await draftOps.verifyGroupInfo();
      
      // 主催者が既に参加していることを確認
      await userOps.verifyUserInParticipantList(predefinedUsers.organizer.name);
      await userOps.verifyParticipantCount(1);
    });

    // Step 3: 参加者としてユーザーを作成
    await test.step('参加者ユーザーを作成', async () => {
      await userOps.createNewUser(predefinedUsers.participant1);
      
      // 参加者リストに自分が追加されたことを確認
      await userOps.verifyUserInParticipantList(predefinedUsers.participant1.name);
      await userOps.verifyParticipantCount(2);
    });
  });

  test('URLでドラフトに参加する', async ({ page, context }) => {
    let groupId: string;
    let lobbyUrl: string;

    // 準備: 主催者がドラフトを作成
    await test.step('主催者がドラフトを準備', async () => {
      const organizerPage = await context.newPage();
      const organizerDraftOps = new DraftOperations(organizerPage);
      const organizerUserOps = new UserOperations(organizerPage);
      
      await organizerDraftOps.createNewDraft();
      groupId = await organizerDraftOps.getCurrentGroupId();
      lobbyUrl = `${testUrls.base}/lobby/${groupId}`;
      await organizerUserOps.createNewUser(predefinedUsers.organizer);
    });

    // Step 1: URLで参加
    await test.step('URLで参加', async () => {
      await draftOps.joinWithUrl(lobbyUrl);
      
      // ロビーページに遷移したことを確認
      await expect(page).toHaveURL(`/lobby/${groupId}`);
    });

    // Step 2: 参加者として登録
    await test.step('参加者として登録', async () => {
      await userOps.createNewUser(predefinedUsers.participant2);
      await userOps.verifyParticipantCount(2);
    });
  });

  test('無効なコードで参加を試みる', async ({ page }) => {
    const invalidCode = '0000'; // 存在しないコード

    await test.step('無効なコードで参加を試みる', async () => {
      await page.goto(testUrls.join);
      
      // コード入力
      const codeInput = page.getByTestId(selectors.join.codeInput);
      await codeInput.fill(invalidCode);
      
      // 参加ボタンをクリック
      const submitButton = page.getByTestId(selectors.join.submitButton);
      await submitButton.click();
      
      // エラーメッセージが表示されることを確認
      await draftOps.verifyErrorMessage(errorMessages.invalidCode);
      
      // ページ遷移しないことを確認
      await expect(page).toHaveURL(testUrls.join);
    });
  });

  test('履歴から再参加する', async ({ page, context }) => {
    let groupId: string;
    let groupCode: string;

    // Step 1: 初回参加
    await test.step('初回参加してグループに入る', async () => {
      // 主催者がドラフトを作成
      const organizerPage = await context.newPage();
      const organizerDraftOps = new DraftOperations(organizerPage);
      const organizerUserOps = new UserOperations(organizerPage);
      
      await organizerDraftOps.createNewDraft();
      groupId = await organizerDraftOps.getCurrentGroupId();
      groupCode = await organizerDraftOps.getGroupCode();
      await organizerUserOps.createNewUser(predefinedUsers.organizer);
      
      // 参加者として参加
      await draftOps.joinWithCode(groupCode);
      await userOps.createNewUser(predefinedUsers.participant1);
    });

    // Step 2: 一度離脱して履歴から再参加
    await test.step('履歴から再参加', async () => {
      // TOPページに戻る
      await page.goto(testUrls.top);
      
      // 参加ページに移動
      await page.goto(testUrls.join);
      
      // 履歴リストが表示されることを確認
      const recentList = page.getByTestId(selectors.join.recentMeetingsList);
      await expect(recentList).toBeVisible();
      
      // 履歴から参加
      await draftOps.joinFromHistory(groupId);
      
      // ロビーページに遷移したことを確認
      await expect(page).toHaveURL(`/lobby/${groupId}`);
      
      // 既存ユーザーとして認識されることを確認
      const existingUserList = page.getByTestId(selectors.lobby.userSelect.existingUserList);
      await expect(existingUserList).toBeVisible();
    });
  });

  test('参加フォームのバリデーション', async ({ page }) => {
    await page.goto(testUrls.join);

    await test.step('空のコードで参加を試みる', async () => {
      const submitButton = page.getByTestId(selectors.join.submitButton);
      await submitButton.click();
      
      // バリデーションエラーが表示されることを確認
      const codeInput = page.getByTestId(selectors.join.codeInput);
      await expect(codeInput).toHaveAttribute('aria-invalid', 'true');
    });

    await test.step('不正な形式のコードを入力', async () => {
      const codeInput = page.getByTestId(selectors.join.codeInput);
      
      // 3桁の数字
      await codeInput.fill('123');
      await expect(codeInput).toHaveAttribute('aria-invalid', 'true');
      
      // 文字を含む
      await codeInput.fill('12AB');
      await expect(codeInput).toHaveAttribute('aria-invalid', 'true');
      
      // 5桁の数字
      await codeInput.fill('12345');
      await expect(codeInput).toHaveAttribute('aria-invalid', 'true');
    });

    await test.step('不正なURLを入力', async () => {
      const urlInput = page.getByTestId(selectors.join.urlInput);
      
      // 不正なURL形式
      await urlInput.fill('not-a-url');
      const submitButton = page.getByTestId(selectors.join.submitButton);
      await submitButton.click();
      
      await expect(urlInput).toHaveAttribute('aria-invalid', 'true');
    });
  });

  test('複数の参加方法を切り替える', async ({ page }) => {
    await page.goto(testUrls.join);

    await test.step('コード入力とURL入力を切り替える', async () => {
      const codeInput = page.getByTestId(selectors.join.codeInput);
      const urlInput = page.getByTestId(selectors.join.urlInput);
      
      // コードを入力
      await codeInput.fill('1234');
      
      // URLフィールドに切り替えて入力
      await urlInput.fill('https://example.com/lobby/test-id');
      
      // コードフィールドがクリアされることを確認（実装による）
      // または両方入力できる場合は、どちらが優先されるか確認
    });
  });
});