import { Box, Input, Text, Textarea } from '@chakra-ui/react';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';

interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  roundNumber: number;
  currentRoundTopic: string;
  selection: string;
  comment: string;
  onSelectionChange: (value: string) => void;
  onCommentChange: (value: string) => void;
  onSubmit: () => void;
}

export const InputModal = ({
  isOpen,
  onClose,
  roundNumber,
  currentRoundTopic,
  selection,
  comment,
  onSelectionChange,
  onCommentChange,
  onSubmit,
}: InputModalProps) => {
  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={onClose}
      title={`Round ${roundNumber}: ${currentRoundTopic}`}
      actions={{
        cancel: {
          text: 'キャンセル',
        },
        submit: {
          text: '決定',
          colorPalette: 'blue',
          disabled: !selection.trim(),
          onClick: onSubmit,
        },
      }}
    >
      <Box w="full">
        <Text fontSize="sm" fontWeight="medium" mb={2}>
          あなたの選択
        </Text>
        <Input
          size="lg"
          value={selection}
          onChange={(e) => onSelectionChange(e.target.value)}
          placeholder="例: 鬼滅の刃"
          borderWidth={2}
          _focus={{
            borderColor: 'blue.500',
            boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
          }}
        />
      </Box>
      <Box w="full">
        <Text fontSize="sm" fontWeight="medium" mb={2} color="purple.700">
          💬 ひとこと（任意）
        </Text>
        <Textarea
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
          placeholder="選択理由やコメントを記録できます...&#10;例：&#10;・最近ハマってる作品&#10;・みんなと違うものを選んでみた&#10;・前回の話題から思いついた"
          maxLength={150}
          rows={4}
          resize="none"
          borderWidth={2}
          _focus={{
            borderColor: 'purple.500',
            boxShadow: '0 0 0 1px var(--chakra-colors-purple-500)',
          }}
        />
        <Text fontSize="xs" color="gray.500" mt={1} textAlign="right">
          {comment.length}/150文字
        </Text>
      </Box>
    </ResponsiveModal>
  );
};