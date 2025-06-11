'use client';

import { getUsers, subscribeUsers } from '@/src/helpers/firebase/user';
import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { groupUsersAtom } from '@/src/stores/user';
import type { UserDocument } from '@/src/types/firestore';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

// Storybook用のモックユーザーデータ
const getMockUsersForGroup = (groupId: string): UserDocument[] => {
  const mockUserData: Record<string, UserDocument[]> = {
    ABC123: [
      {
        userId: 'user1',
        groupId: 'ABC123',
        userName: '田中太郎',
        avatar: '1',
        deleteFlg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 'user2',
        groupId: 'ABC123',
        userName: '山田花子',
        avatar: '5',
        deleteFlg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    XYZ789: [
      {
        userId: 'user3',
        groupId: 'XYZ789',
        userName: 'Alice',
        avatar: '3',
        deleteFlg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    '12': [
      {
        userId: 'user4',
        groupId: '12',
        userName: 'Bob',
        avatar: '2',
        deleteFlg: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  };

  return mockUserData[groupId] || [];
};

/**
 * リアルタイムユーザー一覧の監視処理
 * Storybook環境ではモックデータを使用（onSnapshotはWebSocketのためMSWでモック不可）
 */
export const useRealtimeUsers = (groupId: string) => {
  const [groupUsers, setGroupUsers] = useAtom(groupUsersAtom);

  useEffect(() => {
    if (!groupId) {
      return;
    }

    // Storybook環境: onSnapshotはWebSocketベースのためモックデータを直接設定
    if (isStorybookEnvironment()) {
      const mockUsers = getMockUsersForGroup(groupId);
      setGroupUsers(mockUsers);
      return;
    }

    // 本番環境: リアルタイムユーザー購読

    const unsubscribe = subscribeUsers(groupId, (users) => {
      setGroupUsers(users);
    });

    // クリーンアップ関数を返す
    return () => {
      unsubscribe();
    };
  }, [groupId, setGroupUsers]);

  return { groupUsers };
};
