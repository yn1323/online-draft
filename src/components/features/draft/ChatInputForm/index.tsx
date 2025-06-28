import { Button } from '@/src/components/atoms/Button';
import { Input } from '@/src/components/atoms/Input';
import {
  currentUserIdAtom,
  groupIdAtom,
} from '@/src/components/features/draft/states';
import { useChat } from '@/src/hooks/firebase/chat/useChat';
import { HStack } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import { useCallback, useState } from 'react';

type ChatInputFormProps = {
  placeholder?: string;
};

/**
 * チャットメッセージ入力フォームの共通コンポーネント
 * シンプルな統一スタイル
 */
export const ChatInputForm = ({
  placeholder = 'メッセージを入力...',
}: ChatInputFormProps) => {
  const [message, setMessage] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const userId = useAtomValue(currentUserIdAtom);
  const groupId = useAtomValue(groupIdAtom);

  const { sendMessage } = useChat();

  const handleSend = useCallback(async () => {
    if (message.trim()) {
      await sendMessage(groupId, userId, message.trim());
      setMessage('');
    }
  }, [groupId, userId, message, sendMessage]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  // 統一スタイル: ボーダーなし、サイズmd
  return (
    <HStack w="full">
      <Input
        placeholder={placeholder}
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
        onKeyDown={handleKeyPress}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        size="md"
      />
      <Button
        variant="secondary"
        size="md"
        onClick={handleSend}
        disabled={!message.trim()}
      >
        送信
      </Button>
    </HStack>
  );
};
