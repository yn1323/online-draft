'use client';

import { db } from '@/src/lib/firebase';
import {
  doc,
  type DocumentReference,
  serverTimestamp,
  setDoc,
  type Timestamp,
} from 'firebase/firestore';
import { useCallback } from 'react';

/**
 * Firestore Selection データ型
 */
export type SelectionItemType = {
  item: string;
  comment: string;
  round: number;
  userId: string;
  groupId: string;
  randomNumber: number;
  success?: boolean;
};

export type SelectionDataType = {
  selection: SelectionItemType[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

/**
 * ドラフト選択基本操作カスタムフック
 * 選択データのupsert・管理機能を提供
 */
export const useSelection = () => {
  /**
   * 選択データをupsert（作成or更新）
   * @param params 選択データのパラメータ
   * @param params.groupId グループID（ドキュメントIDとして使用）
   * @param params.userId ユーザーID
   * @param params.item 選択したアイテム名
   * @param params.comment コメント
   * @param params.round 現在のラウンド
   * @param params.currentSelections 現在のselection配列（selectionsAtomから）
   */
  const upsertSelection = useCallback(
    async (params: {
      groupId: string;
      userId: string;
      item: string;
      comment: string;
      round: number;
      currentSelections: SelectionItemType[];
    }) => {
      const { groupId, userId, item, comment, round, currentSelections } =
        params;
      try {
        // 競合解決用のランダムナンバー生成（0〜999999）
        const randomNumber = Math.floor(Math.random() * 1000000);

        const newSelectionItem: SelectionItemType = {
          item,
          comment,
          round,
          userId,
          groupId,
          randomNumber,
        };

        // groupIdをドキュメントIDとして使用
        const docRef = doc(
          db,
          'app/onlinedraft/selection',
          groupId,
        ) as DocumentReference<SelectionDataType>;

        // 同じgroupIdのselectionのみをフィルタリング
        const groupSelections = currentSelections.filter(
          (s) => s.groupId === groupId,
        );

        // 同じuserIdとroundの組み合わせを除去
        const filteredSelections = groupSelections.filter(
          (s) => !(s.userId === userId && s.round === round),
        );

        // 新しいselectionを追加
        const updatedSelections = [...filteredSelections, newSelectionItem];

        // ドキュメント更新
        if (groupSelections.length === 0) {
          // 新規作成の場合
          await setDoc(docRef, {
            selection: updatedSelections,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          });
        } else {
          // 更新の場合
          await setDoc(
            docRef,
            {
              selection: updatedSelections,
              updatedAt: serverTimestamp(),
            },
            { merge: true },
          );
        }

        return groupId;
      } catch (error) {
        console.error('選択データのupsertに失敗しました:', error);
        throw error;
      }
    },
    [],
  );

  return {
    upsertSelection,
  };
};
