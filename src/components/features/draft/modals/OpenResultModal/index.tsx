import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { useModal } from '../../hooks/common/useModal';

/**
 * 開票確認モーダル用hooks
 * 汎用useModalを利用した軽量実装
 */
export const useOpenResultModal = useModal;

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
  const t = useTranslations('draft');
  const commonT = useTranslations('common');

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={onClose}
      title={t('openResultModal.title')}
      actions={{
        cancel: {
          text: commonT('actions.cancel'),
          onClick: onClose,
        },
        submit: {
          text: t('openResultModal.confirm'),
          colorPalette: 'orange',
          onClick: onExecuteOpenResult,
        },
      }}
    >
      <VStack gap={4} w="full" textAlign="center">
        <Text fontSize="md" color="gray.700">
          {t('openResultModal.incomplete')}
        </Text>
        <Text fontSize="md" fontWeight="bold" color="orange.600">
          {t('openResultModal.confirmMessage')}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {t('openResultModal.skipMessage')}
        </Text>
      </VStack>
    </ResponsiveModal>
  );
};
