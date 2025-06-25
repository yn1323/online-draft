import { Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';

// バリデーションスキーマ
const itemSelectSchema = z.object({
  item: z
    .string()
    .min(1, 'アイテム名を入力してください')
    .max(50, '50文字以内で入力してください'),
  comment: z
    .string()
    .max(100, '100文字以内で入力してください')
    .default(''),
});


/**
 * アイテム選択モーダル用hooks
 * 開閉制御のみを管理
 */
export const useItemSelectModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
};

type ItemSelectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { item: string; comment: string }) => void | Promise<void>;
  defaultItem?: string;
  defaultComment?: string;
};

/**
 * アイテム選択モーダルコンポーネント
 * react-hook-form + zodバリデーション使用
 */
export const ItemSelectModal = ({
  isOpen,
  onClose,
  onSubmit,
  defaultItem = '',
  defaultComment = '',
}: ItemSelectModalProps) => {
  const formId = useId();

  // react-hook-form設定
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(itemSelectSchema),
    mode: 'onChange',
    defaultValues: {
      item: defaultItem,
      comment: defaultComment,
    },
  });

  // フォーム送信処理
  const onFormSubmit = async (data: { item: string; comment: string }) => {
    try {
      await onSubmit({
        item: data.item,
        comment: data.comment,
      });
      reset();
      onClose();
    } catch (error) {
      console.error('アイテム選択エラー:', error);
    }
  };

  // モーダルクローズ時の処理
  const handleClose = () => {
    if (!isSubmitting) {
      reset();
      onClose();
    }
  };

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={handleClose}
      title="アイテムを選択"
      actions={{
        cancel: {
          text: 'キャンセル',
          onClick: handleClose,
        },
        submit: {
          text: '決定',
          type: 'submit',
          form: formId,
          loading: isSubmitting,
          disabled: isSubmitting,
        },
      }}
    >
      <VStack
        as="form"
        id={formId}
        onSubmit={handleSubmit(onFormSubmit)}
        gap={4}
        w="full"
      >
        {/* アイテム名入力 */}
        <VStack gap={2} align="start" w="full">
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            アイテム名
          </Text>
          <Input
            {...register('item')}
            placeholder="アイテム名を入力してください"
            maxLength={50}
            size="lg"
            error={!!errors.item}
          />
          {errors.item && (
            <Text fontSize="sm" color="red.500">
              {errors.item.message}
            </Text>
          )}
        </VStack>

        {/* コメント入力 */}
        <VStack gap={2} align="start" w="full">
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            コメント（任意）
          </Text>
          <Input
            {...register('comment')}
            placeholder="この選択についてのコメント..."
            maxLength={100}
            size="lg"
            error={!!errors.comment}
          />
          {errors.comment && (
            <Text fontSize="sm" color="red.500">
              {errors.comment.message}
            </Text>
          )}
        </VStack>
      </VStack>
    </ResponsiveModal>
  );
};
