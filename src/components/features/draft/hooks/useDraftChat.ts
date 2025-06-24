import { useState } from 'react';
import { useChat } from '@/src/hooks/firebase/chat/useChat';

/**
 * ドラフトチャットのFirestore処理hooks
 */
export const useDraftChat = (groupId: string, userId: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { sendMessage: sendFirebaseMessage } = useChat();

  /**
   * チャットメッセージを送信してFirestoreに保存
   */
  const sendMessage = async (message: string) => {
    if (!message.trim()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await sendFirebaseMessage(groupId, userId, message);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'メッセージ送信に失敗しました',
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    sendMessage,
  };
};
