import { useState } from 'react';

/**
 * ドラフトチャットのFirestore処理hooks
 */
export const useDraftChat = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      // TODO: Firestore保存処理を実装
      console.log('チャット送信:', message);
      await new Promise((resolve) => setTimeout(resolve, 500)); // モック処理
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
