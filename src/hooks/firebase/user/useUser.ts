'use client';

import {
  validateLength,
  validateRequired,
} from '@/src/helpers/validation/common';
import { db } from '@/src/lib/firebase';
import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  type CollectionReference,
  type Timestamp,
} from 'firebase/firestore';
import { useCallback } from 'react';

/**
 * Firestore User データ型
 */
export type UserDataType = {
  userId: string;
  userName: string;
  groupId: string;
  avatar: string;
  joinedAt: Timestamp;
  updatedAt: Timestamp;
};

/**
 * ユーザー基本操作カスタムフック
 * ユーザー作成・参加者管理機能を提供
 */
export const useUser = () => {
  // コレクション参照
  const userCollection = collection(
    db,
    'app/onlinedraft/user',
  ) as CollectionReference<UserDataType>;

  /**
   * ユーザー作成
   * ユーザー名・アバター番号のバリデーション後、新規ユーザーを作成
   */
  const createUser = useCallback(
    async (
      groupId: string,
      userName: string,
      avatar: string,
      userId: string,
    ): Promise<void> => {
      // Early Return: バリデーション（共通関数使用）
      validateRequired(groupId, 'グループID');
      validateRequired(userName, 'ユーザー名');
      validateLength(userName, 20, 'ユーザー名');
      validateRequired(avatar, 'アバター');
      validateRequired(userId, 'ユーザーID');

      const userData: Omit<UserDataType, 'joinedAt' | 'updatedAt'> = {
        userId,
        userName: userName.trim(),
        groupId: groupId.trim(),
        avatar: avatar.trim(),
      };

      try {
        const userRef = doc(userCollection, userId);
        await setDoc(userRef, {
          ...userData,
          joinedAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`ユーザー作成に失敗しました: ${error.message}`);
        }
        throw new Error('ユーザー作成中に予期しないエラーが発生しました');
      }
    },
    [userCollection],
  );

  return {
    createUser,
    userCollection,
  };
};
