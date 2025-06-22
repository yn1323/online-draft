'use client';

import { type DocumentReference, doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/src/lib/firebase';
import type { GroupDataType } from './useGroup';

/**
 * リアルタイムグループ監視フック
 * 指定されたグループIDのリアルタイム状態変更を監視
 */
export const useRealtimeGroup = (groupId: string | null) => {
  const [group, setGroup] = useState<GroupDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!groupId) {
      setGroup(null);
      setLoading(false);
      return;
    }

    const groupRef = doc(
      db,
      'app/onlinedraft/group',
      groupId,
    ) as DocumentReference<GroupDataType>;

    const unsubscribe = onSnapshot(
      groupRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setGroup(snapshot.data());
        } else {
          setGroup(null);
        }
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

  return { group, loading, error };
};
