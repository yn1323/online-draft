import { Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';

/**
 * アイテム選択モーダル用hooks
 */
export const useItemSelectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [comment, setComment] = useState('');

  const open = () => setIsOpen(true);

  const close = () => {
    setIsOpen(false);
    setSelectedItem('');
    setComment('');
  };

  const reset = () => {
    setSelectedItem('');
    setComment('');
  };

  return {
    isOpen,
    selectedItem,
    comment,
    setSelectedItem,
    setComment,
    open,
    close,
    reset,
  };
};

type ItemSelectModalProps = {
  isOpen: boolean;
  selectedItem: string;
  comment: string;
  onSelectedItemChange: (value: string) => void;
  onCommentChange: (value: string) => void;
  onClose: () => void;
  onSelect: () => void;
};

/**
 * アイテム選択モーダルコンポーネント
 * アイテム名とコメントの入力を受け付ける
 */
export const ItemSelectModal = ({
  isOpen,
  selectedItem,
  comment,
  onSelectedItemChange,
  onCommentChange,
  onClose,
  onSelect,
}: ItemSelectModalProps) => {
  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={onClose}
      title="アイテムを選択"
      actions={{
        cancel: {
          text: 'キャンセル',
          onClick: onClose,
        },
        submit: {
          text: '決定',
          disabled: !selectedItem.trim(),
          onClick: onSelect,
        },
      }}
    >
      <VStack gap={4} w="full">
        {/* アイテム名入力 */}
        <VStack gap={2} align="start" w="full">
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            アイテム名
          </Text>
          <Input
            placeholder="アイテム名を入力してください"
            value={selectedItem}
            onChange={onSelectedItemChange}
            maxLength={50}
            size="lg"
          />
        </VStack>

        {/* コメント入力 */}
        <VStack gap={2} align="start" w="full">
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            コメント（任意）
          </Text>
          <Input
            placeholder="この選択についてのコメント..."
            value={comment}
            onChange={onCommentChange}
            maxLength={100}
            size="lg"
          />
        </VStack>
      </VStack>
    </ResponsiveModal>
  );
};