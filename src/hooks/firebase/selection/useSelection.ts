'use client';

import {
  type CollectionReference,
  collection,
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
   * 選択データ作成（将来実装予定）
   */
  const createSelection = useCallback(async () => {
    // TODO: Phase D で実装予定
    throw new Error('選択機能は Phase D で実装予定です');
  }, []);

  return {
    createSelection,
    selectionCollection,
  };
};
