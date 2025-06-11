'use client';

import {
  type ChatDocument,
  subscribeChatMessages,
} from '@/src/helpers/firebase/chat';
import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import type { UserDocument } from '@/src/types/firestore';
import { useEffect, useState } from 'react';

export interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  message: string;
  timestamp: Date;
  type: 'user' | 'system';
  user?: {
    id: string;
    name: string;
    avatar: string;
  };
}

// Storybook用のモックメッセージ
const getMockMessages = (groupId: string): ChatMessage[] => {
  const mockMessages: Record<string, ChatMessage[]> = {
    ABC123: [
      {
        id: 'msg1',
        userId: 'user1',
        userName: '田中太郎',
        message: 'よろしくお願いします！',
        timestamp: new Date(Date.now() - 300000), // 5分前
        type: 'user',
      },
      {
        id: 'msg2',
        userId: 'system',
        userName: 'システム',
        message: 'Round 1 開始',
        timestamp: new Date(Date.now() - 240000), // 4分前
        type: 'system',
      },
      {
        id: 'msg3',
        userId: 'user2',
        userName: '山田花子',
        message: 'こちらこそ！頑張りましょう',
        timestamp: new Date(Date.now() - 180000), // 3分前
        type: 'user',
      },
    ],
  };

  return mockMessages[groupId] || [];
};

/**
 * グループのユーザー名を取得するためのヘルパー
 */
const getUserName = (userId: string, groupUsers: UserDocument[]): string => {
  if (userId === 'system') {
    return 'システム';
  }

  const user = groupUsers.find((u) => u.userId === userId);
  return user?.userName || `ユーザー${userId.slice(-4)}`;
};

/**
 * リアルタイムチャット機能
 */
export const useRealtimeChat = (
  groupId: string,
  groupUsers: UserDocument[] = [],
) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!groupId) {
      return;
    }

    // Storybook環境: モックデータを使用
    if (isStorybookEnvironment()) {
      const mockMessages = getMockMessages(groupId);
      setMessages(mockMessages);
      setLoading(false);
      return;
    }

    // 本番環境: Firebase onSnapshot（リアルタイム監視）
    setLoading(true);
    setError(null);

    try {
      const unsubscribe = subscribeChatMessages(groupId, (chatDocuments) => {
        // ChatDocument を ChatMessage に変換
        const formattedMessages: ChatMessage[] = chatDocuments.map((doc) => {
          const user = groupUsers.find((u) => u.userId === doc.userId);
          const avatarPath = user?.avatar
            ? `/img/${user.avatar}.png`
            : '/img/1.png';

          return {
            id: doc.id,
            userId: doc.userId,
            userName: getUserName(doc.userId, groupUsers),
            message: doc.message,
            timestamp: doc.date.toDate(),
            type: doc.userId === 'system' ? 'system' : 'user',
            user: {
              id: doc.userId,
              name: getUserName(doc.userId, groupUsers),
              avatar: avatarPath,
            },
          };
        });

        setMessages(formattedMessages);
        setLoading(false);
      });

      return () => {
        unsubscribe();
      };
    } catch (error) {
      setError('チャットの取得に失敗しました');
      setLoading(false);
    }
  }, [groupId, groupUsers]);

  return { messages, loading, error };
};
