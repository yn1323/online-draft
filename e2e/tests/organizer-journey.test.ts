/**
 * 主催者シナリオのE2Eテスト
 * ユーザーストーリー: ドラフト会議を開催したい主催者がグループを作成し、参加者を待つ
 */

import { test, expect } from '@playwright/test';
import { DraftOperations } from '../operations/draft-operations';
import { UserOperations } from '../operations/user-operations';
import { predefinedUsers, timeouts } from '../utils/test-data';
import { selectors } from '../utils/selectors';

test.describe('主催者シナリオ', () => {
  let draftOps: DraftOperations;
  let userOps: UserOperations;

  test.beforeEach(async ({ page }) => {
    draftOps = new DraftOperations(page);
    userOps = new UserOperations(page);
  });

  test('新規ドラフトを作成し、主催者として参加する', async ({ page }) => {
    // Step 1: TOPページからドラフトを作成
    await test.step('ドラフトを作成', async () => {
      await draftOps.createNewDraft();
      
      // ロビーページに遷移したことを確認
      await expect(page).toHaveURL(/\/lobby\/[a-zA-Z0-9-]+/);
    });

    // Step 2: グループ情報を確認
    const groupId = await test.step('グループ情報を確認', async () => {
      await draftOps.verifyGroupInfo();
      
      // グループIDを取得（後で参加者に共有するため）
      const id = await draftOps.getCurrentGroupId();
      expect(id).toBeTruthy();
      
      return id;
    });

    // Step 3: 主催者としてユーザーを作成
    await test.step('主催者ユーザーを作成', async () => {
      await userOps.createNewUser(predefinedUsers.organizer);
      
      // 参加者リストに主催者が表示されることを確認
      await userOps.verifyUserInParticipantList(predefinedUsers.organizer.name);
      await userOps.verifyParticipantCount(1);
    });

    // Step 4: グループコードを確認（参加者に共有用）
    const groupCode = await test.step('グループコードを取得', async () => {
      const code = await draftOps.getGroupCode();
      expect(code).toMatch(/^\d{4}$/); // 4桁の数字であることを確認
      
      console.log(`作成されたグループ: ID=${groupId}, Code=${code}`);
      return code;
    });

    // Step 5: 参加者を待つ状態を確認
    await test.step('参加者待機状態を確認', async () => {
      // ドラフトページに遷移していることを確認（実装により異なる可能性）
      // または、ロビーページで待機状態になっていることを確認
      
      // 参加者リストが更新可能な状態であることを確認
      const participantList = page.locator(selectors.lobby.groupInfo.participantList);
      await expect(participantList).toBeVisible();
    });
  });

  test('作成したドラフトの設定を変更する', async ({ page }) => {
    // Step 1: ドラフトを作成
    await test.step('ドラフトを作成', async () => {
      await draftOps.createNewDraft();
    });

    // Step 2: 主催者として参加
    await test.step('主催者として参加', async () => {
      await userOps.createNewUser(predefinedUsers.organizer);
    });

    // Step 3: 設定を変更（将来実装）
    await test.step('ドラフト設定を変更', async () => {
      // TODO: ドラフト設定変更機能が実装されたら追加
      // - ドラフト名の変更
      // - 参加人数制限の設定
      // - ドラフト方式の選択
      // - タイマー設定
    });
  });

  test('既存ユーザーとして新規ドラフトを作成', async ({ page }) => {
    // Step 1: ドラフトを作成
    await test.step('ドラフトを作成', async () => {
      await draftOps.createNewDraft();
    });

    // Step 2: 既存ユーザーが表示される場合は選択
    await test.step('既存ユーザーを選択または新規作成', async () => {
      // ユーザー選択画面が表示されることを確認（見出しで確認）
      await expect(page.locator('text=/ユーザー選択|参加者を選択/')).toBeVisible();
      
      // 既存ユーザーリストを確認
      const existingUserList = page.locator(selectors.lobby.userSelect.existingUserList);
      
      // 既存ユーザーがいる場合は選択、いない場合は新規作成
      if (await existingUserList.isVisible()) {
        // TODO: 既存ユーザーの選択ロジック
        // 現時点では新規作成を行う
        await userOps.createNewUser(predefinedUsers.organizer);
      } else {
        await userOps.createNewUser(predefinedUsers.organizer);
      }
    });
  });

  test('ドラフト作成後、参加者の入室を確認', async ({ page, context }) => {
    let groupCode: string;

    // Step 1: 主催者がドラフトを作成
    await test.step('主催者がドラフトを作成', async () => {
      await draftOps.createNewDraft();
      await userOps.createNewUser(predefinedUsers.organizer);
      
      // グループコードを取得
      groupCode = await draftOps.getGroupCode();
    });

    // Step 2: 別タブで参加者が入室（リアルタイム同期のテスト）
    await test.step('参加者が別タブから入室', async () => {
      // 新しいタブを開く
      const participantPage = await context.newPage();
      const participantDraftOps = new DraftOperations(participantPage);
      const participantUserOps = new UserOperations(participantPage);
      
      // 参加者がコードで参加
      await participantDraftOps.joinWithCode(groupCode);
      await participantUserOps.createNewUser(predefinedUsers.participant1);
      
      // 主催者側で参加者が表示されることを確認
      await userOps.verifyUserInParticipantList(predefinedUsers.participant1.name);
      await userOps.verifyParticipantCount(2);
      
      await participantPage.close();
    });
  });
});