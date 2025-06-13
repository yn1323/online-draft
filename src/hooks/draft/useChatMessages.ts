/**
 * チャットメッセージ管理フック
 * Firebase Firestore リアルタイム同期対応
 */

import type { ChatMessage } from '@/src/types/draft';
import { useCallback, useEffect, useState } from 'react';
import {
  type GetMessagesOptions,
  type SendMessageRequest,
  getMessages,
  sendMessage,
  subscribeToMessages,
} from '../../services/draft/chatService';

export interface ChatMessagesData {
  messages: ChatMessage[];
  loading: boolean;
  error: string | null;

  // 操作関数
  sendMessage: (
    content: string,
    metadata?: ChatMessage['metadata'],
  ) => Promise<void>;
  refreshMessages: () => Promise<void>;

  // 状態
  isSending: boolean;
}

export interface UseChatMessagesOptions {
  groupId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  enableRealtime?: boolean;
  messageLimit?: number;
}

/**
 * チャットメッセージ管理フック
 */
export const useChatMessages = ({
  groupId,
  userId,
  userName,
  userAvatar,
  enableRealtime = true,
  messageLimit = 50,
}: UseChatMessagesOptions): ChatMessagesData => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  // メッセージ送信
  const handleSendMessage = useCallback(
    async (
      content: string,
      metadata?: ChatMessage['metadata'],
    ): Promise<void> => {
      if (!content.trim()) {
        return;
      }

      try {
        setIsSending(true);
        setError(null);

        const request: SendMessageRequest = {
          groupId,
          userId,
          userName,
          userAvatar,
          content: content.trim(),
          type: 'user',
          metadata,
        };

        await sendMessage(request);

        console.log('✅ メッセージ送信成功:', content);
      } catch (err) {
        console.error('❌ メッセージ送信エラー:', err);
        setError(
          err instanceof Error ? err.message : 'メッセージの送信に失敗しました',
        );
        throw err; // 呼び出し元でのエラーハンドリングのため
      } finally {
        setIsSending(false);
      }
    },
    [groupId, userId, userName, userAvatar],
  );

  // メッセージ一覧の手動更新
  const refreshMessages = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const options: GetMessagesOptions = {
        limit: messageLimit,
      };

      const { messages: messagesData } = await getMessages(groupId, options);
      setMessages(messagesData);

      console.log('🔄 メッセージ手動更新:', messagesData.length, '件');
    } catch (err) {
      console.error('❌ メッセージ更新エラー:', err);
      setError(
        err instanceof Error ? err.message : 'メッセージの更新に失敗しました',
      );
    } finally {
      setLoading(false);
    }
  }, [groupId, messageLimit]);

  // 初期データ取得
  useEffect(() => {
    if (groupId) {
      refreshMessages();
    }
  }, [groupId, refreshMessages]);

  // リアルタイム同期
  useEffect(() => {
    if (!enableRealtime || !groupId) {
      return;
    }

    console.log('🔄 チャットメッセージリアルタイム同期開始:', groupId);

    const unsubscribe = subscribeToMessages(groupId, (messagesData) => {
      console.log('📡 チャットメッセージ更新:', messagesData.length, '件');

      setMessages(messagesData);
      setLoading(false);
      setError(null);
    });

    return () => {
      console.log('🔌 チャットメッセージリアルタイム同期終了:', groupId);
      unsubscribe();
    };
  }, [groupId, enableRealtime]);

  return {
    messages,
    loading,
    error,

    // 操作関数
    sendMessage: handleSendMessage,
    refreshMessages,

    // 状態
    isSending,
  };
};
