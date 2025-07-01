'use client';

import { db } from '@/src/lib/firebase';
import { validateRequiredWithLength } from '@/src/helpers/validation/common';
import {
  addDoc,
  collection,
  type CollectionReference,
  doc,
  getDoc,
  serverTimestamp,
  type Timestamp,
  updateDoc,
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
      // Early Return: バリデーション（共通関数使用）
      validateRequiredWithLength(groupName, 50, 'グループ名');

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

  /**
   * ラウンドを+1進める
   */
  const incrementRound = useCallback(
    async (groupId: string): Promise<void> => {
      try {
        const groupRef = doc(groupCollection, groupId);
        const groupSnap = await getDoc(groupRef);

        if (!groupSnap.exists()) {
          throw new Error('グループが見つかりません');
        }

        const currentData = groupSnap.data();
        const newRound = currentData.round + 1;

        await updateDoc(groupRef, {
          round: newRound,
          updatedAt: serverTimestamp(),
        });
      } catch (error) {
        console.error('ラウンド更新に失敗しました:', error);
        throw error;
      }
    },
    [groupCollection],
  );

  return {
    createGroup,
    checkGroupExists,
    incrementRound,
    groupCollection,
  };
};
