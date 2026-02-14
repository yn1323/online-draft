'use client';

import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { useToaster } from '@/src/components/ui/toaster';
import { defaultLocale } from '@/src/i18n/config';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useLocale, useTranslations } from 'next-intl';
import { LuCopy } from 'react-icons/lu';
import { useModal } from '../../hooks/common/useModal';

type ShareModalProps = {
  isOpen: boolean;
  onClose: () => void;
  groupId: string;
  groupName: string;
};

/**
 * シェアモーダル用hooks
 * 汎用useModalを利用した軽量実装
 */
export const useShareModal = useModal;

/**
 * ドラフトルーム共有モーダルコンポーネント
 * 招待URLをコピーする機能を提供
 */
export const ShareModal = ({
  isOpen,
  onClose,
  groupId,
  groupName,
}: ShareModalProps) => {
  const t = useTranslations('draft');
  const commonT = useTranslations('common');
  const locale = useLocale();
  const { successToast, errorToast } = useToaster();
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;

  // 招待URL生成（SSR対応）
  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${localePrefix}/lobby/${groupId}`
      : `${localePrefix}/lobby/${groupId}`;

  // URL共有機能
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      successToast(t('shareModal.copySuccess'));
    } catch (error) {
      console.error('URL copy failed:', error);
      errorToast(t('shareModal.copyFailed'));
    }
  };

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={onClose}
      title={t('shareModal.title')}
      dialogMaxWidth="2xl" // PC版の幅を拡張
      actions={{
        cancel: {
          text: commonT('actions.close'),
          onClick: onClose,
        },
      }}
    >
      <VStack gap={4} w="full" align="stretch">
        <Box>
          <Text fontSize="md" fontWeight="bold" mb={2}>
            {groupName}
          </Text>
          <Text fontSize="sm" color="gray.600" mb={4}>
            {t('shareModal.description')}
          </Text>
        </Box>

        {/* URL共有エリア */}
        <Box>
          <Text fontSize="sm" color="gray.600" mb={2}>
            {t('shareModal.inviteUrl')}
          </Text>
          <Text
            fontSize="sm"
            bg="gray.100"
            p={3}
            borderRadius="md"
            fontFamily="mono"
            truncate
            mb={2}
          >
            {shareUrl}
          </Text>
          <Button w="full" colorPalette="blue" onClick={handleCopyUrl}>
            <LuCopy />
            {t('shareModal.copyButton')}
          </Button>
        </Box>

        <Box
          bg="blue.50"
          p={3}
          borderRadius="md"
          border="1px solid"
          borderColor="blue.200"
        >
          <Text fontSize="xs" color="blue.700" lineHeight="1.5">
            {t('shareModal.voiceChatTip')}
          </Text>
        </Box>
      </VStack>
    </ResponsiveModal>
  );
};
