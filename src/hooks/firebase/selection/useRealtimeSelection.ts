'use client';

import { db } from '@/src/lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import type { SelectionItemType } from './useSelection';

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

    // コレクション参照
    const selectionsRef = collection(db, 'app/onlinedraft/selection');

    // リアルタイム監視の開始
    const unsubscribe = onSnapshot(
      selectionsRef,
      (snapshot) => {
        // 全ユーザーの選択データを取得し、userId付きで平坦化
        const allSelections: SelectionItemType[] = [];

        snapshot.docs.forEach((doc) => {
          const userId = doc.id; // ドキュメントIDがuserIdの場合
          const userDocument = doc.data(); // ドキュメントデータ

          // 実際のDB構造：インデックス番号がフィールド名のオブジェクト
          // { "0": {...}, "1": {...}, "userId": "..." } の形式
          Object.keys(userDocument).forEach((key) => {
            // 数字のキー（インデックス）のみを処理、userIdフィールドは除外
            if (/^\d+$/.test(key)) {
              const selection = userDocument[key];
              // groupIdでフィルタ（groupIdが存在しない場合は暫定で全て含める）
              if (!selection.groupId || selection.groupId === groupId) {
                allSelections.push({
                  ...selection,
                  userId, // ドキュメントIDからuserIdを追加
                  groupId: selection.groupId || groupId, // groupIdが無い場合は補完
                });
              }
            }
          });
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
