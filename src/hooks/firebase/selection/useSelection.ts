'use client';

import { db } from '@/src/lib/firebase';
import { doc, setDoc, type Timestamp } from 'firebase/firestore';
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
        // 重複指名解決用のランダムナンバー生成（0〜999999）
        const randomNumber = Math.floor(Math.random() * 1000000);

        // コレクション参照
        const docRef = doc(db, 'app/onlinedraft/selection', userId);

        // 該当ユーザーの現在の選択のみをフィルタリング
        const userCurrentSelections = currentSelections.filter(
          (s) => s.userId === userId,
        );

        // 同じroundの選択を除去（ユーザー内で重複排除）
        const filteredSelections = userCurrentSelections.filter(
          (s) => s.round !== round,
        );

        // 新しいselectionを追加（userIdとgroupIdは不要、ドキュメント構造に合わせ）
        const newSelectionForStorage = {
          item,
          comment,
          round,
          randomNumber,
        };

        const updatedSelections = [
          ...filteredSelections.map((s) => ({
            item: s.item,
            comment: s.comment,
            round: s.round,
            randomNumber: s.randomNumber,
          })),
          newSelectionForStorage,
        ];

        // シンプルな配列構造でドキュメント更新
        const selectionDocument = {
          userId,
          selection: updatedSelections,
        };

        // ドキュメント更新
        await setDoc(docRef, selectionDocument);

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
