'use client';

import { db } from '@/src/lib/firebase';
import {
  type CollectionReference,
  collection,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import type { UserDataType } from './useUser';

/**
 * リアルタイムユーザー一覧監視フック
 * 指定されたグループの参加者一覧をリアルタイム監視
 */
export const useRealtimeUsers = (groupId: string | null) => {
  const [users, setUsers] = useState<UserDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!groupId) {
      setUsers([]);
      setLoading(false);
      return;
    }

    const userQuery = query(
      collection(
        db,
        'app/onlinedraft/user',
      ) as CollectionReference<UserDataType>,
      where('groupId', '==', groupId),
      where('isActive', '==', true),
    );

    const unsubscribe = onSnapshot(
      userQuery,
      (snapshot) => {
        const userList = snapshot.docs.map((doc) => doc.data());
        setUsers(userList);
        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, [groupId]);

  return { users, loading, error };
};
