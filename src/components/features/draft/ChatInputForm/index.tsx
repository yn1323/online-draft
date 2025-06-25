import { HStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Button } from '@/src/components/atoms/Button';
import { Input } from '@/src/components/atoms/Input';

type ChatInputFormProps = {
  onSendMessage?: (message: string) => void;
  placeholder?: string;
};

/**
 * チャットメッセージ入力フォームの共通コンポーネント
 * シンプルな統一スタイル
 */
export const ChatInputForm = ({
  onSendMessage,
  placeholder = 'メッセージを入力...',
}: ChatInputFormProps) => {
  const [message, setMessage] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const handleSend = useCallback(() => {
    if (message.trim()) {
      onSendMessage?.(message.trim());
      setMessage('');
    }
  }, [message, onSendMessage]);

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
