import { useChat } from '@/src/hooks/firebase/chat/useChat';
import { useAsyncOperation } from './common/useAsyncOperation';

/**
 * ドラフトチャットのFirestore処理hooks
 * 汎用useAsyncOperationを利用した軽量実装
 */
export const useDraftChat = (groupId: string, userId: string) => {
  const { sendMessage: sendFirebaseMessage } = useChat();

  // 送信処理を定義
  const sendMessageOperation = async (message: string) => {
    if (!message.trim()) {
      return;
    }
    await sendFirebaseMessage(groupId, userId, message);
  };

  const {
    loading,
    error,
    execute: sendMessage,
  } = useAsyncOperation(sendMessageOperation);

  return {
    loading,
    error,
    sendMessage,
  };
};
