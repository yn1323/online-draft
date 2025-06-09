'use client';

import { ThemeInput } from '@/src/components/atoms/inputs/ThemeInput';
import { ThemeText } from '@/src/components/atoms/typography/ThemeText';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { VStack } from '@chakra-ui/react';
import { useState } from 'react';

interface CreateDraftModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateDraft: (groupName: string) => Promise<void>;
  isLoading?: boolean;
}

export const CreateDraftModal = ({
  isOpen,
  onClose,
  onCreateDraft,
  isLoading = false,
}: CreateDraftModalProps) => {
  const [groupName, setGroupName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    // バリデーション
    if (!groupName.trim()) {
      setError('ドラフト名を入力してください');
      return;
    }

    if (groupName.length > 48) {
      setError('ドラフト名は48文字以内で入力してください');
      return;
    }

    setError('');

    try {
      await onCreateDraft(groupName.trim());
      // 成功時はモーダルをリセット
      setGroupName('');
      onClose();
    } catch (err) {
      // エラーハンドリングは親コンポーネントで行う
      console.error('CreateDraftModal: エラーが発生しました', err);
    }
  };

  const handleClose = () => {
    setGroupName('');
    setError('');
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !isLoading) {
      handleSubmit();
    }
  };

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={handleClose}
      title="ドラフトを作成"
      actions={{
        cancel: {
          text: 'キャンセル',
        },
        submit: {
          text: '作成する',
          colorPalette: 'green',
          disabled: isLoading || !groupName.trim(),
          loading: isLoading,
          onClick: handleSubmit,
        },
      }}
    >
      <VStack gap={4} align="stretch" width="100%">
        <ThemeText variant="helper">
          ドラフト会議の名前を入力してください
        </ThemeText>
        <ThemeInput
          placeholder="例: 〇〇ドラフト会議"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={48}
          showCharacterCount={true}
          disabled={isLoading}
          autoFocus
          errorText={error}
          invalid={!!error}
        />
      </VStack>
    </ResponsiveModal>
  );
};
