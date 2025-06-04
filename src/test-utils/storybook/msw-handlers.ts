/**
 * Storybook用MSWハンドラー
 * 複数のストーリーで共通利用できるAPIモック
 */

import { http, HttpResponse } from 'msw';

/**
 * Firestore API関連のモックハンドラー
 */
export const firestoreHandlers = [
  // getDraftGroup のモック - グループ情報取得
  http.get(
    '*/v1/projects/*/databases/(default)/documents/draftGroups/:groupId',
    ({ params }) => {
      const { groupId } = params;

      // テスト用のモックデータ
      const mockGroups: Record<string, unknown> = {
        ABC123: {
          name: 'projects/test/databases/(default)/documents/draftGroups/ABC123',
          fields: {
            groupName: { stringValue: 'テストグループ 1' },
            round: { integerValue: '3' },
            createdAt: { timestampValue: '2024-01-01T10:00:00Z' },
            items: {
              arrayValue: {
                values: [
                  { stringValue: 'アイテム1' },
                  { stringValue: 'アイテム2' },
                  { stringValue: 'アイテム3' },
                ],
              },
            },
          },
          createTime: '2024-01-01T10:00:00Z',
          updateTime: '2024-01-01T10:00:00Z',
        },
        XYZ789: {
          name: 'projects/test/databases/(default)/documents/draftGroups/XYZ789',
          fields: {
            groupName: {
              stringValue:
                '非常に長いグループ名のテストケースです！これは表示の確認用',
            },
            round: { integerValue: '5' },
            createdAt: { timestampValue: '2024-01-01T11:00:00Z' },
            items: {
              arrayValue: {
                values: [
                  { stringValue: 'テストアイテムA' },
                  { stringValue: 'テストアイテムB' },
                ],
              },
            },
          },
          createTime: '2024-01-01T11:00:00Z',
          updateTime: '2024-01-01T11:00:00Z',
        },
        '12': {
          name: 'projects/test/databases/(default)/documents/draftGroups/12',
          fields: {
            groupName: { stringValue: '短ID' },
            round: { integerValue: '1' },
            createdAt: { timestampValue: '2024-01-01T12:00:00Z' },
            items: {
              arrayValue: {
                values: [{ stringValue: 'アイテムX' }],
              },
            },
          },
          createTime: '2024-01-01T12:00:00Z',
          updateTime: '2024-01-01T12:00:00Z',
        },
        LOADING_TEST: {
          name: 'projects/test/databases/(default)/documents/draftGroups/LOADING_TEST',
          fields: {
            groupName: { stringValue: 'ローディングテスト用グループ' },
            round: { integerValue: '2' },
            createdAt: { timestampValue: '2024-01-01T13:00:00Z' },
          },
          createTime: '2024-01-01T13:00:00Z',
          updateTime: '2024-01-01T13:00:00Z',
        },
      };

      const mockGroup = mockGroups[groupId as string];

      if (!mockGroup) {
        // グループが存在しない場合は404エラー
        return HttpResponse.json(
          {
            error: {
              code: 404,
              message: 'Document not found',
              status: 'NOT_FOUND',
            },
          },
          { status: 404 },
        );
      }

      return HttpResponse.json(mockGroup);
    },
  ),
];

/**
 * Firebase Auth関連のモックハンドラー
 */
export const firebaseAuthHandlers = [
  // 匿名認証のモック
  http.post('*/v1/accounts:signInAnonymously', () => {
    return HttpResponse.json({
      localId: 'mock-anonymous-user-id',
      idToken: 'mock-id-token',
      refreshToken: 'mock-refresh-token',
      expiresIn: '3600',
      isNewUser: true,
    });
  }),

  // サインアップのモック（匿名認証で使用）
  http.post('*/accounts:signUp', () => {
    return HttpResponse.json({
      localId: 'mock-anonymous-user-id',
      idToken: 'mock-id-token',
      refreshToken: 'mock-refresh-token',
      expiresIn: '3600',
      isNewUser: true,
    });
  }),

  // ユーザー情報取得のモック
  http.post('*/accounts:lookup', () => {
    return HttpResponse.json({
      users: [
        {
          localId: 'mock-anonymous-user-id',
          providerUserInfo: [],
          validSince: '1640995200',
          lastLoginAt: '1640995200000',
          createdAt: '1640995200000',
          lastRefreshAt: new Date().toISOString(),
        },
      ],
    });
  }),

  // トークン更新のモック
  http.post('*/v1/token', () => {
    return HttpResponse.json({
      access_token: 'mock-access-token',
      expires_in: '3600',
      token_type: 'Bearer',
      refresh_token: 'mock-refresh-token',
      id_token: 'mock-id-token',
      user_id: 'mock-anonymous-user-id',
      project_id: 'test-project',
    });
  }),
];

/**
 * 全ての共通ハンドラー
 */
export const commonHandlers = [...firestoreHandlers, ...firebaseAuthHandlers];

/**
 * 特定用途向けハンドラーセット
 */
export const handlers = {
  firestore: firestoreHandlers,
  auth: firebaseAuthHandlers,
  common: commonHandlers,
};
