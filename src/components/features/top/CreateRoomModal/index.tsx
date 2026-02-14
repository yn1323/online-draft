'use client';

import { Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useId, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';

// テスト用にデフォルトメッセージ付きスキーマもエクスポート
export const createRoomSchema = z.object({
  roomName: z
    .string()
    .trim()
    .min(1, 'ルーム名を入力してください')
    .max(30, 'ルーム名は30文字以内で入力してください'),
});

type CreateRoomFormType = {
  roomName: string;
};

type CreateRoomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreateRoom: (roomName: string) => Promise<void>;
};

/**
 * ルーム作成モーダルコンポーネント
 * react-hook-form + zodでバリデーション、ResponsiveModalでレスポンシブ対応
 */
export const CreateRoomModal = ({
  isOpen,
  onClose,
  onCreateRoom,
}: CreateRoomModalProps) => {
  const t = useTranslations('top');
  const formId = useId();

  // 翻訳対応のzodスキーマ
  const createRoomSchema = useMemo(
    () =>
      z.object({
        roomName: z
          .string()
          .trim()
          .min(1, t('createRoomModal.validation.required'))
          .max(30, t('createRoomModal.validation.maxLength')),
      }),
    [t],
  );

  // react-hook-form設定
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<CreateRoomFormType>({
    resolver: zodResolver(createRoomSchema),
    mode: 'onChange', // リアルタイムバリデーション
  });

  // フォーム送信処理
  const onSubmit = async (data: CreateRoomFormType) => {
    try {
      await onCreateRoom(data.roomName);
      reset(); // 成功時にフォームリセット
      onClose();
    } catch (error) {
      // エラーハンドリングは親コンポーネントで行う
      console.error('ルーム作成エラー:', error);
    }
  };

  // モーダルクローズ時の処理
  const handleClose = () => {
    if (!isSubmitting) {
      reset(); // フォームリセット
      onClose();
    }
  };

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={handleClose}
      title={t('createRoomModal.title')}
      actions={{
        cancel: {
          text: t('createRoomModal.cancel'),
          onClick: handleClose,
        },
        submit: {
          text: t('createRoomModal.submit'),
          colorPalette: 'blue',
          type: 'submit',
          form: formId,
          disabled: !isValid,
          loading: isSubmitting,
        },
      }}
    >
      <VStack
        as="form"
        id={formId}
        onSubmit={handleSubmit(onSubmit)}
        gap={4}
        align="stretch"
        w="full"
      >
        {/* ルーム名入力 */}
        <VStack gap={2} align="stretch">
          <Text fontSize="sm" fontWeight="medium" color="gray.700">
            {t('createRoomModal.roomNameLabel')}
          </Text>
          <Input
            {...register('roomName')}
            placeholder={t('createRoomModal.roomNamePlaceholder')}
            size="lg"
            maxLength={30}
            error={!!errors.roomName}
          />
          {errors.roomName && (
            <Text fontSize="sm" color="red.500">
              {errors.roomName.message}
            </Text>
          )}
        </VStack>

        {/* 説明テキスト */}
        <Text fontSize="sm" color="gray.600" textAlign="center">
          {t('createRoomModal.description')}
        </Text>
      </VStack>
    </ResponsiveModal>
  );
};

/**
 * CreateRoomModal用カスタムフック
 * モーダルの状態管理を内部で行い、親コンポーネントの負担を軽減
 */
export const useCreateRoomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // モーダルを開く
  const openModal = () => setIsOpen(true);

  // モーダルを閉じる
  const closeModal = () => setIsOpen(false);

  return {
    // 状態
    isOpen,

    // アクション
    openModal,
    closeModal,

    // コンポーネント用プロパティ
    modalProps: {
      isOpen,
      onClose: closeModal,
    },
  };
};
