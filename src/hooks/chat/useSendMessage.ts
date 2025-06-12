'use client';

import { createChatMessage } from '@/src/helpers/firebase/chat';
import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { useState } from 'react';

export interface SendMessageOptions {
  groupId: string;
  userId: string;
  message: string;
}

/**
 * メッセージ送信機能
 */
export const useSendMessage = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async ({
    groupId,
    userId,
    message,
  }: SendMessageOptions) => {
    if (!message.trim()) {
      setError('メッセージを入力してください');
      return false;
    }

    // Storybook環境: モック処理
    if (isStorybookEnvironment()) {
      console.log('📚 Storybook環境のためメッセージ送信をモック');
      setSending(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSending(false);
      return true;
    }

    // 本番環境: Firebase実行
    try {
      setSending(true);
      setError(null);

      console.log('🔄 メッセージ送信開始:', { groupId, userId, message });

      await createChatMessage({
        groupId,
        userId,
        message: message.trim(),
      });

      console.log('✅ メッセージ送信成功');
      return true;
    } catch (error) {
      console.error('❌ メッセージ送信エラー:', error);
      setError('メッセージの送信に失敗しました');
      return false;
    } finally {
      setSending(false);
    }
  };

  return { sendMessage, sending, error };
};
