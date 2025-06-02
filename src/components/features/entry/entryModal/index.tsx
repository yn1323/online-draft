'use client';

import { Input, Text } from '@chakra-ui/react';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { Field } from '@/src/components/ui/field';
import { useState } from 'react';
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

  const handleSubmit = async (formData: FormData) => {
    const groupName = formData.get('groupName') as string;

    if (!groupName?.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      // Server Actionでグループ作成
      const result = await createDraft(groupName);

      if (result.success) {
        // 作成成功後の処理
        if (onCreateSuccess) {
          // Storybook用のコールバック
          onCreateSuccess(result.groupId);
          onClose();
        } else {
          // 実際のアプリでは遷移
          window.location.href = `/entry/${result.groupId}`;
        }
      }
    } catch (error) {
      console.error('グループ作成エラー:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form id="create-draft-form" action={handleSubmit} style={{ display: 'none' }} />
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
            disabled: isLoading,
            loading: isLoading,
          },
        }}
      >
        <Field label="グループ名" required>
          <Input
            name="groupName"
            form="create-draft-form"
            placeholder="例：今日のランチ会議"
            disabled={isLoading}
            required
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
