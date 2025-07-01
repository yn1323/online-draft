'use client';

import { db } from '@/src/lib/firebase';
import {
  validateRequired,
  validateLength,
} from '@/src/helpers/validation/common';
import {
  collection,
  doc,
  setDoc,
  type CollectionReference,
  type Timestamp,
} from 'firebase/firestore';
import { useCallback } from 'react';

/**
 * Firestore Chat データ型
 * 既存のlogコレクション形式に準拠
 */
export type ChatLogDataType = {
  createdAt: Timestamp;
  date: Timestamp;
  deleteFlg: boolean;
  groupId: string;
  message: string;
  updatedAt: Timestamp;
  userId: string;
};

/**
 * チャットメッセージ送信カスタムフック
 * 既存のlogコレクション(`app/onlinedraft/log`)にメッセージを保存
 */
export const useChat = () => {
  // コレクション参照（既存のlogコレクションを使用）
  const logCollection = collection(
    db,
    'app/onlinedraft/log',
  ) as CollectionReference<ChatLogDataType>;

  /**
   * チャットメッセージ送信
   * 既存のFirestoreデータ構造に準拠してメッセージを保存
   */
  const sendMessage = useCallback(
    async (groupId: string, userId: string, message: string) => {
      // Early Return: バリデーション（共通関数使用）
      validateRequired(groupId, 'グループID');
      validateRequired(userId, 'ユーザーID');
      validateRequired(message, 'メッセージ');
      validateLength(message, 200, 'メッセージ');

      const messageData: Omit<
        ChatLogDataType,
        'createdAt' | 'date' | 'updatedAt'
      > = {
        groupId: groupId.trim(),
        userId: userId.trim(),
        message: message.trim(),
        deleteFlg: false,
      };

      try {
        // ドキュメントIDを自動生成
        const messageRef = doc(logCollection);
        await setDoc(messageRef, {
          ...messageData,
          // biome-ignore lint/suspicious/noExplicitAny: 日付は無視
          createdAt: new Date() as any,
          // biome-ignore lint/suspicious/noExplicitAny: 日付は無視
          date: new Date() as any,
          // biome-ignore lint/suspicious/noExplicitAny: 日付は無視
          updatedAt: new Date() as any,
        });
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`メッセージ送信に失敗しました: ${error.message}`);
        }
        throw new Error('メッセージ送信中に予期しないエラーが発生しました');
      }
    },
    [logCollection],
  );

  /**
   * システムメッセージ送信
   * システムからの自動メッセージ（ドラフト開始、ラウンド完了等）
   */
  const sendSystemMessage = useCallback(
    async (groupId: string, message: string) => {
      // Early Return: バリデーション
      if (!groupId.trim()) {
        throw new Error('グループIDが必要です');
      }
      if (!message.trim()) {
        throw new Error('メッセージを入力してください');
      }

      const systemMessageData: Omit<
        ChatLogDataType,
        'createdAt' | 'date' | 'updatedAt'
      > = {
        groupId: groupId.trim(),
        userId: 'system', // システムメッセージ用の固定ID
        message: message.trim(),
        deleteFlg: false,
      };

      try {
        const messageRef = doc(logCollection);
        await setDoc(messageRef, {
          ...systemMessageData,
          // biome-ignore lint/suspicious/noExplicitAny: 日付は無視
          createdAt: new Date() as any,
          // biome-ignore lint/suspicious/noExplicitAny: 日付は無視
          date: new Date() as any,
          // biome-ignore lint/suspicious/noExplicitAny: 日付は無視
          updatedAt: new Date() as any,
        });
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(
            `システムメッセージ送信に失敗しました: ${error.message}`,
          );
        }
        throw new Error(
          'システムメッセージ送信中に予期しないエラーが発生しました',
        );
      }
    },
    [logCollection],
  );

  return {
    sendMessage,
    sendSystemMessage,
    logCollection,
  };
};
