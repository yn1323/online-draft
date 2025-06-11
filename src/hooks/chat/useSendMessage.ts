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
      setSending(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSending(false);
      return true;
    }

    // 本番環境: Firebase実行
    try {
      setSending(true);
      setError(null);


      await createChatMessage({
        groupId,
        userId,
        message: message.trim(),
      });

      return true;
    } catch (error) {
      setError('メッセージの送信に失敗しました');
      return false;
    } finally {
      setSending(false);
    }
  };

  return { sendMessage, sending, error };
};
