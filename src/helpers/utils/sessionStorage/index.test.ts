/**
 * SessionStorage ユーティリティのテスト
 */

import type { SessionUser } from '@/src/types/auth';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// SessionStorageモックの型定義
interface MockSessionStorage {
  store: Record<string, string>;
  getItem: ReturnType<typeof vi.fn>;
  setItem: ReturnType<typeof vi.fn>;
  removeItem: ReturnType<typeof vi.fn>;
  clear: ReturnType<typeof vi.fn>;
}

// シンプルなSessionStorageモック
const mockSessionStorage: MockSessionStorage = {
  store: {} as Record<string, string>,
  getItem: vi.fn(function (this: MockSessionStorage, key: string) {
    return this.store[key] || null;
  }),
  setItem: vi.fn(function (
    this: MockSessionStorage,
    key: string,
    value: string,
  ) {
    this.store[key] = value;
  }),
  removeItem: vi.fn(function (this: MockSessionStorage, key: string) {
    delete this.store[key];
  }),
  clear: vi.fn(function (this: MockSessionStorage) {
    this.store = {};
  }),
};

// SessionStorageをモック
vi.stubGlobal('sessionStorage', mockSessionStorage);

const mockSessionUser: SessionUser = {
  id: 'user-123',
  groupId: 'group-456',
  name: 'Test User',
  avatar: '1',
  createdAt: new Date('2023-01-01T00:00:00Z'),
};

describe('SessionStorage utilities', () => {
  beforeEach(() => {
    // 各テスト前にストレージをクリア
    mockSessionStorage.store = {};
    vi.clearAllMocks();
  });

  describe('basic functionality', () => {
    it('SessionStorageが正常に動作する', async () => {
      // 動的インポートでテスト対象を取得
      const { setSessionUser, getSessionUser, clearSessionUser } = await import(
        '.'
      );

      // 保存テスト
      setSessionUser(mockSessionUser);
      expect(mockSessionStorage.setItem).toHaveBeenCalledWith(
        'currentUser',
        JSON.stringify(mockSessionUser),
      );

      // 取得テスト
      const retrieved = getSessionUser();
      expect(retrieved).toEqual({
        ...mockSessionUser,
        createdAt: mockSessionUser.createdAt.toISOString(), // 文字列として比較
      });

      // クリアテスト
      clearSessionUser();
      expect(mockSessionStorage.removeItem).toHaveBeenCalledWith('currentUser');
      expect(mockSessionStorage.removeItem).toHaveBeenCalledWith('groupId');
    });

    it('存在しないデータの取得でnullを返す', async () => {
      const { getSessionUser } = await import('.');

      const retrieved = getSessionUser();
      expect(retrieved).toBeNull();
    });

    it('不正なJSONでnullを返してクリアする', async () => {
      const { getSessionUser } = await import('.');

      // 不正なJSONを設定
      mockSessionStorage.store.currentUser = 'invalid-json';

      const retrieved = getSessionUser();
      expect(retrieved).toBeNull();
      expect(mockSessionStorage.removeItem).toHaveBeenCalled();
    });

    it('GroupID検証が正常に動作する', async () => {
      const { setSessionUser, isValidSessionForGroup } = await import('.');

      setSessionUser(mockSessionUser);

      // 一致する場合
      expect(isValidSessionForGroup(mockSessionUser.groupId)).toBe(true);

      // 不一致の場合
      expect(isValidSessionForGroup('different-group')).toBe(false);
    });
  });
});
