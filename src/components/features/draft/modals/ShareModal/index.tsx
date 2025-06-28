'use client';

import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { useToaster } from '@/src/components/ui/toaster';
import { Box, HStack, IconButton, Text, VStack } from '@chakra-ui/react';
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
  const { successToast, errorToast } = useToaster();

  // 招待URL生成（SSR対応）
  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/lobby/${groupId}`
      : `/lobby/${groupId}`;

  // URL共有機能
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      successToast('URLをコピーしました');
    } catch (error) {
      console.error('URL copy failed:', error);
      errorToast('URLのコピーに失敗しました');
    }
  };

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={onClose}
      title="ドラフトルームを共有"
      dialogMaxWidth="2xl" // PC版の幅を拡張
      actions={{
        cancel: {
          text: '閉じる',
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
            このURLを友達にシェアして、一緒にドラフトを楽しもう！
          </Text>
        </Box>

        {/* URL共有エリア */}
        <Box>
          <Text fontSize="sm" color="gray.600" mb={2}>
            招待URL
          </Text>
          <HStack gap={2}>
            <Text
              fontSize="sm"
              bg="gray.100"
              p={3}
              borderRadius="md"
              flex={1}
              fontFamily="mono"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              minW={0}
            >
              {shareUrl}
            </Text>
            <IconButton
              aria-label="URLをコピー"
              variant="solid"
              colorPalette="blue"
              size="md"
              flexShrink={0}
              onClick={handleCopyUrl}
            >
              <LuCopy />
            </IconButton>
          </HStack>
        </Box>

        <Box
          bg="blue.50"
          p={3}
          borderRadius="md"
          border="1px solid"
          borderColor="blue.200"
        >
          <Text fontSize="xs" color="blue.700" lineHeight="1.5">
            💡 音声通話アプリも併用してみてね！
          </Text>
        </Box>
      </VStack>
    </ResponsiveModal>
  );
};
