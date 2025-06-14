'use client';

import { db } from '@/src/lib/firebase';
import {
  type CollectionReference,
  type Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { useCallback } from 'react';

/**
 * Firestore Group (ルーム) データ型
 */
export type GroupDataType = {
  groupName: string;
  deleteFlg: boolean;
  finishedRound: number[];
  round: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

/**
 * グループ（ルーム）基本操作カスタムフック
 * ルーム作成・状態管理・存在確認機能を提供
 */
export const useGroup = () => {
  // コレクション参照
  const groupCollection = collection(
    db,
    'app/onlinedraft/group',
  ) as CollectionReference<GroupDataType>;

  /**
   * グループ作成
   * グループ名のバリデーション後、新規ドラフトルームを作成
   */
  const createGroup = useCallback(
    async (groupName: string): Promise<string> => {
      // Early Return: バリデーション
      if (!groupName.trim()) {
        throw new Error('グループ名を入力してください');
      }
      if (groupName.length > 50) {
        throw new Error('グループ名は50文字以内で入力してください');
      }

      // メイン処理 - Firebase自動ID生成使用
      const groupData: Omit<GroupDataType, 'createdAt' | 'updatedAt'> = {
        groupName: groupName.trim(),
        deleteFlg: false,
        finishedRound: [],
        round: 1,
      };

      try {
        const docRef = await addDoc(groupCollection, {
          ...groupData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        return docRef.id;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`グループ作成に失敗しました: ${error.message}`);
        }
        throw new Error('グループ作成中に予期しないエラーが発生しました');
      }
    },
    [groupCollection],
  );

  /**
   * グループ存在確認
   */
  const checkGroupExists = useCallback(
    async (groupId: string): Promise<boolean> => {
      const groupRef = doc(groupCollection, groupId);
      const groupSnap = await getDoc(groupRef);
      return groupSnap.exists() && !groupSnap.data()?.deleteFlg;
    },
    [groupCollection],
  );

  return {
    createGroup,
    checkGroupExists,
    groupCollection,
  };
};
