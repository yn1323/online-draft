'use client';

import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Zodスキーマ定義（30文字制限）
export const createRoomSchema = z.object({
  roomName: z
    .string()
    .trim()
    .min(1, 'ルーム名を入力してください')
    .max(30, 'ルーム名は30文字以内で入力してください'),
});

type CreateRoomFormType = z.infer<typeof createRoomSchema>;

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
      title="新しいルームを作成"
      actions={{
        cancel: {
          text: 'キャンセル',
          onClick: handleClose,
        },
        submit: {
          text: 'ルームを作成',
          colorPalette: 'blue',
          type: 'submit',
          form: 'create-room-form',
          disabled: !isValid,
          loading: isSubmitting,
        },
      }}
    >
      <VStack
        as="form"
        id="create-room-form"
        onSubmit={handleSubmit(onSubmit)}
        gap={4}
        align="stretch"
        w="full"
      >
        {/* ルーム名入力 */}
        <VStack gap={2} align="stretch">
          <Text fontSize="sm" fontWeight="medium" color="gray.700">
            ルーム名
          </Text>
          <Input
            {...register('roomName')}
            placeholder="例: 2024年プロ野球ドラフト"
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
          URLを共有して友達を招待しよう！
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
