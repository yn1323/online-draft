'use client';

import {
  type CollectionReference,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/src/lib/firebase';
import type { ChatLogDataType } from './useChat';

/**
 * UI表示用チャットメッセージ型
 * 既存のChatMessageTypeと互換性を保つため
 */
export type ChatMessageUIType = {
  id: string;
  userName: string;
  avatar: string;
  content: string;
  timestamp: string;
  isSystem?: boolean;
};

/**
 * リアルタイムチャット監視フック
 * 既存のsubscribeLogMessageパターンを踏襲
 * 指定されたグループのチャットメッセージをリアルタイム監視
 */
export const useRealtimeChat = (
  groupId: string | null,
  userLookup?: Record<string, { name: string; avatar: string }>,
) => {
  const [messages, setMessages] = useState<ChatMessageUIType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!groupId) {
      setMessages([]);
      setLoading(false);
      return;
    }

    // 既存のlogコレクションを使用
    const logQuery = query(
      collection(
        db,
        'app/onlinedraft/log',
      ) as CollectionReference<ChatLogDataType>,
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false), // 削除されていないメッセージのみ
      orderBy('date', 'asc'), // 既存のsubscribeLogMessageパターン
      // limitは削除（要求通り）
    );

    const unsubscribe = onSnapshot(
      logQuery,
      (snapshot) => {
        const messageList = snapshot.docs.map((doc) => {
          const data = doc.data();

          // Firestore Timestamp → JavaScript Date → 時刻文字列
          const date = data.date?.toDate() || new Date();
          const timeString = date.toLocaleTimeString('ja-JP', {
            hour: '2-digit',
            minute: '2-digit',
          });

          // システムメッセージ判定
          const isSystem = data.userId === 'system' || !data.userId;

          // ユーザー情報の取得
          const userInfo = userLookup?.[data.userId] || {
            name: isSystem ? 'システム' : '匿名ユーザー',
            avatar: isSystem ? '99' : '1',
          };

          return {
            id: doc.id,
            userName: userInfo.name,
            avatar: userInfo.avatar,
            content: data.message,
            timestamp: timeString,
            isSystem,
          };
        });

        setMessages(messageList);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('チャットメッセージ監視エラー:', err);
        setError(err);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, [groupId, userLookup]);

  return {
    messages,
    loading,
    error,
  };
};

/**
 * シンプル版（ユーザー情報なし）
 * 既存のsubscribeLogMessageに最も近い形
 */
export const useRealtimeChatSimple = (groupId: string | null) => {
  const [logs, setLogs] = useState<ChatLogDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!groupId) {
      setLogs([]);
      setLoading(false);
      return;
    }

    const logQuery = query(
      collection(
        db,
        'app/onlinedraft/log',
      ) as CollectionReference<ChatLogDataType>,
      where('groupId', '==', groupId),
      where('deleteFlg', '==', false),
      orderBy('date', 'asc'),
    );

    const unsubscribe = onSnapshot(
      logQuery,
      (snapshot) => {
        const logList = snapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id, // ドキュメントIDを追加
        }));
        setLogs(logList);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('ログ監視エラー:', err);
        setError(err);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, [groupId]);

  return {
    logs,
    loading,
    error,
  };
};
