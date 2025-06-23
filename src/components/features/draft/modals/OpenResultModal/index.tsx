import { Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';

/**
 * 開票確認モーダル用hooks
 */
export const useOpenResultModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
};

type OpenResultModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onExecuteOpenResult: () => void;
};

/**
 * 開票確認モーダルコンポーネント
 * 未入力の参加者がいる場合の開票確認を受け付ける
 */
export const OpenResultModal = ({
  isOpen,
  onClose,
  onExecuteOpenResult,
}: OpenResultModalProps) => {
  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={onClose}
      title="開票確認"
      actions={{
        cancel: {
          text: 'キャンセル',
          onClick: onClose,
        },
        submit: {
          text: '開票する',
          colorPalette: 'orange',
          onClick: onExecuteOpenResult,
        },
      }}
    >
      <VStack gap={4} w="full" textAlign="center">
        <Text fontSize="md" color="gray.700">
          まだ入力していない参加者がいます。
        </Text>
        <Text fontSize="md" fontWeight="bold" color="orange.600">
          本当に開票しますか？
        </Text>
        <Text fontSize="sm" color="gray.500">
          開票すると、未入力の参加者は今回のラウンドをスキップします。
        </Text>
      </VStack>
    </ResponsiveModal>
  );
};
