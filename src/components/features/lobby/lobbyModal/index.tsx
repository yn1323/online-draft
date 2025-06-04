'use client';

import { Field } from '@/src/components/ui/field';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import {
  type DraftCreateForm,
  draftCreateSchema,
} from '@/src/constants/schemas';
import { Input, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createDraft } from './actions';

interface CreateDraftModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateSuccess?: (groupId: string) => void; // Storybook用コールバック
}

export const CreateDraftModal = ({
  isOpen,
  onClose,
  onCreateSuccess,
}: CreateDraftModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  // React Hook Form setup
  const form = useForm<DraftCreateForm>({
    resolver: zodResolver(draftCreateSchema),
    defaultValues: {
      groupName: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = form;

  const handleCreateDraft = async (data: DraftCreateForm) => {
    setIsLoading(true);
    try {
      // Server Actionでグループ作成
      const result = await createDraft(data.groupName);

      if (result.success) {
        // 作成成功後の処理
        if (onCreateSuccess) {
          // Storybook用のコールバック
          onCreateSuccess(result.groupId);
          reset();
          onClose();
        } else {
          // 実際のアプリでは遷移
          window.location.href = `/entry/${result.groupId}`;
        }
      }
    } catch (error) {
      console.error('グループ作成エラー:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        id="create-draft-form"
        onSubmit={handleSubmit(handleCreateDraft)}
        style={{ display: 'none' }}
      />
      <ResponsiveModal
        isOpen={isOpen}
        onClose={onClose}
        title="ドラフト会議を作成"
        actions={{
          cancel: {
            text: 'キャンセル',
          },
          submit: {
            text: '作成する',
            colorPalette: 'green',
            form: 'create-draft-form',
            type: 'submit',
            disabled: !isValid || isLoading,
            loading: isLoading,
          },
        }}
      >
        <Field
          label="グループ名"
          required
          invalid={!!errors.groupName}
          errorText={errors.groupName?.message}
        >
          <Input
            {...register('groupName')}
            form="create-draft-form"
            placeholder="例：今日のランチ会議"
            disabled={isLoading}
            size={{ base: 'lg', md: 'md' }}
          />
        </Field>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          作成後、グループIDが発行されます。
          <br />
          メンバーに共有して参加してもらいましょう！
        </Text>
      </ResponsiveModal>
    </>
  );
};
