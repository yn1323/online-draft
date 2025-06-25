'use client';

import {
  addDoc,
  type CollectionReference,
  collection,
  serverTimestamp,
  type Timestamp,
} from 'firebase/firestore';
import { useCallback } from 'react';
import { db } from '@/src/lib/firebase';

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
  createdAt: Timestamp;
};

export type SelectionDataType = {
  selection: SelectionItemType[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

/**
 * ドラフト選択基本操作カスタムフック
 * 選択データの作成・管理機能を提供（将来実装）
 */
export const useSelection = () => {
  // コレクション参照
  const selectionCollection = collection(
    db,
    'app/onlinedraft/selection',
  ) as CollectionReference<SelectionDataType>;

  /**
   * 選択データ作成
   * @param groupId グループID
   * @param userId ユーザーID
   * @param item 選択したアイテム名
   * @param comment コメント
   * @param round 現在のラウンド
   */
  const createSelection = useCallback(
    async (
      groupId: string,
      userId: string,
      item: string,
      comment: string,
      round: number,
    ) => {
      try {
        // 競合解決用のランダムナンバー生成（0〜999999）
        const randomNumber = Math.floor(Math.random() * 1000000);

        const selectionItem: SelectionItemType = {
          item,
          comment,
          round,
          userId,
          groupId,
          randomNumber,
          createdAt: serverTimestamp() as Timestamp,
        };

        // Firestoreに選択データを保存
        const docRef = await addDoc(selectionCollection, {
          selection: [selectionItem],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        return docRef.id;
      } catch (error) {
        console.error('選択データの作成に失敗しました:', error);
        throw error;
      }
    },
    [selectionCollection],
  );

  return {
    createSelection,
    selectionCollection,
  };
};
