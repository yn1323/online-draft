import { Button, HStack, Input } from '@chakra-ui/react';

interface MessageInputProps {
  onSendMessage?: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const MessageInput = ({
  onSendMessage,
  placeholder = 'メッセージを入力...',
  disabled = false,
}: MessageInputProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const message = formData.get('message') as string;

    if (message.trim() && onSendMessage) {
      onSendMessage(message.trim());
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack gap={2}>
        <Input
          name="message"
          placeholder={placeholder}
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          disabled={disabled}
          _dark={{
            bg: 'gray.600',
            borderColor: 'gray.500',
            color: 'gray.100',
            _placeholder: { color: 'gray.300' },
          }}
          _focus={{
            borderColor: 'blue.400',
            boxShadow: '0 0 0 1px blue.400',
          }}
          _disabled={{
            opacity: 0.6,
            cursor: 'not-allowed',
          }}
        />
        <Button
          type="submit"
          colorPalette="blue"
          px={6}
          disabled={disabled}
          _hover={{ transform: disabled ? 'none' : 'translateY(-1px)' }}
          _disabled={{
            opacity: 0.6,
            cursor: 'not-allowed',
          }}
        >
          📤
        </Button>
      </HStack>
    </form>
  );
};
