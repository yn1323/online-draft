'use client';

import {
  type CollectionReference,
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/src/lib/firebase';
import type { SelectionDataType, SelectionItemType } from './useSelection';

/**
 * リアルタイム選択監視フック
 * ドラフト選択のリアルタイム監視
 */
export const useRealtimeSelection = (groupId: string | null) => {
  const [selections, setSelections] = useState<SelectionItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!groupId) {
      setSelections([]);
      setLoading(false);
      return;
    }

    // Firestoreのコレクション参照
    const selectionQuery = query(
      collection(
        db,
        'app/onlinedraft/selection',
      ) as CollectionReference<SelectionDataType>,
      orderBy('createdAt', 'desc'),
    );

    // リアルタイム監視の開始
    const unsubscribe = onSnapshot(
      selectionQuery,
      (snapshot) => {
        // 全ての選択データを取得し、フラット化
        const allSelections: SelectionItemType[] = [];

        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          // 各ドキュメントのselection配列から、該当するgroupIdのものだけをフィルタ
          const groupSelections = data.selection.filter(
            (item) => item.groupId === groupId,
          );
          allSelections.push(...groupSelections);
        });

        setSelections(allSelections);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('選択データの取得エラー:', err);
        setError(err as Error);
        setLoading(false);
      },
    );

    // クリーンアップ
    return unsubscribe;
  }, [groupId]);

  return { selections, loading, error };
};
