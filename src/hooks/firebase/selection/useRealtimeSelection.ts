'use client';

import { usersAtom } from '@/src/components/features/draft/states';
import { db } from '@/src/lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useAtomValue } from 'jotai';
import { useEffect, useMemo, useState } from 'react';
import type { SelectionItemType } from './useSelection';

/**
 * リアルタイム選択監視フック
 * 複数ユーザーの個別監視によるドラフト選択のリアルタイム監視
 */
export const useRealtimeSelection = (groupId: string | null) => {
  const [selections, setSelections] = useState<SelectionItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // usersAtomから参加者一覧を取得
  const users = useAtomValue(usersAtom);
  const userIds = useMemo(
    () =>
      users
        .filter((user) => user?.id) // 有効なidのみ抽出
        .map((user) => user.id),
    [users],
  );

  useEffect(() => {
    if (!groupId || userIds.length === 0) {
      setSelections([]);
      setLoading(false);
      return;
    }

    // 各ユーザーの選択データをMapで管理
    const userSelectionsMap = new Map<string, SelectionItemType[]>();
    const unsubscribes: (() => void)[] = [];
    let loadedCount = 0;

    // 全選択データを再構築してstateに設定
    const updateAllSelections = () => {
      const allSelections: SelectionItemType[] = [];
      userSelectionsMap.forEach((userSelections) => {
        allSelections.push(...userSelections);
      });
      setSelections(allSelections);
    };

    // 各ユーザーの個別監視
    userIds.forEach((userId) => {
      const userDocRef = doc(db, 'app/onlinedraft/selection', userId);

      const unsubscribe = onSnapshot(
        userDocRef,
        (docSnapshot) => {
          const userSelections: SelectionItemType[] = [];

          if (docSnapshot.exists()) {
            const userDocument = docSnapshot.data();

            // selection配列を直接処理
            if (
              userDocument?.selection &&
              Array.isArray(userDocument.selection)
            ) {
              userDocument.selection.forEach((selection) => {
                if (!selection.groupId || selection.groupId === groupId) {
                  userSelections.push({
                    ...selection,
                    userId,
                    groupId: selection.groupId || groupId,
                  });
                }
              });
            }
          }

          // ユーザーの選択データを更新
          userSelectionsMap.set(userId, userSelections);
          updateAllSelections();

          loadedCount++;
          if (loadedCount >= userIds.length) {
            setLoading(false);
          }
        },
        (err) => {
          console.error(`User ${userId} selection error:`, err);
          setError(err as Error);
          setLoading(false);
        },
      );

      unsubscribes.push(unsubscribe);
    });

    // クリーンアップ：全てのunsubscribeを実行
    return () => {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, [groupId, userIds]);

  return { selections, loading, error };
};
