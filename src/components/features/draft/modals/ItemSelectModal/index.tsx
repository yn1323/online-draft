import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';

// 定数定義
const MAX_ITEM_LENGTH = 50;
const MAX_CATEGORY_LENGTH = 20;
const MAX_COMMENT_LENGTH = 100;

// バリデーションスキーマ（編集時用）
const getValidationSchema = (isEditMode: boolean) =>
  z.object({
    item: z
      .string()
      .min(1, 'アイテム名を入力してください')
      .max(MAX_ITEM_LENGTH, `${MAX_ITEM_LENGTH}文字以内で入力してください`),
    comment: z
      .string()
      .max(
        isEditMode ? MAX_CATEGORY_LENGTH : MAX_COMMENT_LENGTH,
        isEditMode
          ? `${MAX_CATEGORY_LENGTH}文字以内で入力してください`
          : `${MAX_COMMENT_LENGTH}文字以内で入力してください`,
      )
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
  modalTitle?: string;
  editContext?: {
    round: number;
    playerName: string;
  };
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
  modalTitle = 'アイテムを選択',
  editContext,
}: ItemSelectModalProps) => {
  const formId = useId();
  const isEditMode = !!editContext;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(getValidationSchema(isEditMode)),
    mode: 'onChange',
    defaultValues: {
      item: defaultItem,
      comment: defaultComment,
    },
  });

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
      title={modalTitle}
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
        {editContext && (
          <Box w="full" p={3} bg="gray.50" borderRadius="md">
            <VStack gap={2} align="start">
              <HStack>
                <Text fontSize="xs" color="gray.600">
                  ラウンド:
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  Round {editContext.round}
                </Text>
              </HStack>
              <HStack>
                <Text fontSize="xs" color="gray.600">
                  プレイヤー:
                </Text>
                <Text fontSize="sm" fontWeight="bold">
                  {editContext.playerName}
                </Text>
              </HStack>
            </VStack>
          </Box>
        )}

        <VStack gap={2} align="start" w="full">
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            アイテム名
          </Text>
          <Input
            {...register('item')}
            placeholder="アイテム名を入力してください"
            maxLength={MAX_ITEM_LENGTH}
            size="lg"
            error={!!errors.item}
          />
          {errors.item && (
            <Text fontSize="sm" color="red.500">
              {errors.item.message}
            </Text>
          )}
        </VStack>

        <VStack gap={2} align="start" w="full">
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            {editContext ? 'カテゴリ' : 'コメント（任意）'}
          </Text>
          <Input
            {...register('comment')}
            placeholder={
              editContext ? 'カテゴリを入力してください' : 'この選択についてのコメント...'
            }
            maxLength={editContext ? MAX_CATEGORY_LENGTH : MAX_COMMENT_LENGTH}
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
