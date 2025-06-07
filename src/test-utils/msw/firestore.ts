/**
 * Firestore API関連のMSWハンドラー
 */

import { http, HttpResponse } from 'msw';

// テスト用のモックグループデータ
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

// テスト用のモックユーザーデータ
const mockUsers: Record<string, unknown[]> = {
  ABC123: [
    {
      name: 'projects/test/databases/(default)/documents/app/onlinedraft/user/user1',
      fields: {
        groupId: { stringValue: 'ABC123' },
        userName: { stringValue: '田中太郎' },
        avatar: { stringValue: '1' },
        deleteFlg: { booleanValue: false },
      },
      createTime: '2024-01-01T10:00:00Z',
      updateTime: '2024-01-01T10:00:00Z',
    },
    {
      name: 'projects/test/databases/(default)/documents/app/onlinedraft/user/user2',
      fields: {
        groupId: { stringValue: 'ABC123' },
        userName: { stringValue: '山田花子' },
        avatar: { stringValue: '5' },
        deleteFlg: { booleanValue: false },
      },
      createTime: '2024-01-01T10:01:00Z',
      updateTime: '2024-01-01T10:01:00Z',
    },
  ],
  XYZ789: [
    {
      name: 'projects/test/databases/(default)/documents/app/onlinedraft/user/user3',
      fields: {
        groupId: { stringValue: 'XYZ789' },
        userName: { stringValue: 'Alice' },
        avatar: { stringValue: '3' },
        deleteFlg: { booleanValue: false },
      },
      createTime: '2024-01-01T11:00:00Z',
      updateTime: '2024-01-01T11:00:00Z',
    },
  ],
  '12': [
    {
      name: 'projects/test/databases/(default)/documents/app/onlinedraft/user/user4',
      fields: {
        groupId: { stringValue: '12' },
        userName: { stringValue: 'Bob' },
        avatar: { stringValue: '2' },
        deleteFlg: { booleanValue: false },
      },
      createTime: '2024-01-01T12:00:00Z',
      updateTime: '2024-01-01T12:00:00Z',
    },
  ],
};

export const firestoreHandlers = [
  // getDraftGroup のモック - グループ情報取得
  http.get(
    '*/v1/projects/*/databases/(default)/documents/draftGroups/:groupId',
    ({ params }) => {
      const { groupId } = params;
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

  // ユーザー一覧取得のモック
  http.post('*/v1/projects/*/databases/(default)/documents:runQuery', async ({ request }) => {
    // biome-ignore lint/suspicious/noExplicitAny: Firestore API構造は複雑でanyが必要
    const body = await request.json() as any;

    // クエリからgroupIdを抽出
    const structuredQuery = body.structuredQuery;
    if (structuredQuery?.where?.compositeFilter?.filters) {
      const groupIdFilter = structuredQuery.where.compositeFilter.filters.find(
        // biome-ignore lint/suspicious/noExplicitAny: Firestore フィルター構造は複雑
        (filter: any) => filter.fieldFilter?.field?.fieldPath === 'groupId'
      );

      const groupId = groupIdFilter?.fieldFilter?.value?.stringValue;
      const users = mockUsers[groupId] || [];

      return HttpResponse.json(
        users.map((user) => ({ document: user }))
      );
    }

    return HttpResponse.json([]);
  }),

  // Firestore Listen API (リアルタイム更新用)
  http.post('*/google.firestore.v1.Firestore/Listen/channel', () => {
    // リアルタイム更新のモック - 今は空のレスポンスを返す
    return HttpResponse.json({});
  }),
];