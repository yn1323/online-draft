import { HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Button } from '@/src/components/atoms/Button';
import { Input } from '@/src/components/atoms/Input';

type ChatInputFormProps = {
  onSendMessage?: (message: string) => void;
  variant?: 'pc' | 'sp';
  placeholder?: string;
};

/**
 * チャットメッセージ入力フォームの共通コンポーネント
 * シンプルな統一スタイル
 */
export const ChatInputForm = ({
  onSendMessage,
  variant = 'sp',
  placeholder = 'メッセージを入力...',
}: ChatInputFormProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage?.(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // 統一スタイル: ボーダーなし、サイズmd
  return (
    <HStack w="full">
      <Input
        placeholder={placeholder}
        value={message}
        onChange={setMessage}
        onKeyDown={handleKeyPress}
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
