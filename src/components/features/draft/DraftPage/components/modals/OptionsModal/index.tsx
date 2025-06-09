'use client';

import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';

interface OptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeaveDraft?: () => void;
  onOpenSettings?: () => void;
  onOpenHelp?: () => void;
}

export const OptionsModal = ({
  isOpen,
  onClose,
  onLeaveDraft,
  onOpenSettings,
  onOpenHelp,
}: OptionsModalProps) => {
  const handleLeaveDraft = () => {
    if (
      confirm(
        '本当にドラフト会議を退出しますか？\n※進行中のデータは保持されます',
      )
    ) {
      onLeaveDraft?.();
      onClose();
    }
  };

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={onClose}
      title="オプション"
      actions={{
        cancel: {
          text: '閉じる',
          onClick: onClose,
        },
      }}
    >
      <VStack gap={4} align="stretch" w="full">
        {/* 基本オプション */}
        <VStack gap={3} align="stretch">
          <Text
            fontSize="sm"
            fontWeight="medium"
            color="gray.600"
            _dark={{ color: 'gray.400' }}
          >
            基本操作
          </Text>

          <Button
            variant="ghost"
            size="lg"
            justifyContent="flex-start"
            onClick={() => {
              onOpenSettings?.();
              onClose();
            }}
            _hover={{
              bg: 'gray.50',
              _dark: { bg: 'gray.700' },
            }}
          >
            <HStack gap={3} w="full">
              <Text fontSize="lg">⚙️</Text>
              <Box textAlign="left" flex={1}>
                <Text fontWeight="medium">設定</Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  _dark={{ color: 'gray.400' }}
                >
                  ドラフト設定を変更
                </Text>
              </Box>
            </HStack>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            justifyContent="flex-start"
            onClick={() => {
              onOpenHelp?.();
              onClose();
            }}
            _hover={{
              bg: 'gray.50',
              _dark: { bg: 'gray.700' },
            }}
          >
            <HStack gap={3} w="full">
              <Text fontSize="lg">❓</Text>
              <Box textAlign="left" flex={1}>
                <Text fontWeight="medium">使い方</Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  _dark={{ color: 'gray.400' }}
                >
                  ドラフトゲームの遊び方
                </Text>
              </Box>
            </HStack>
          </Button>
        </VStack>

        {/* 区切り線 */}
        <Box h="1px" bg="gray.200" _dark={{ bg: 'gray.600' }} my={2} />

        {/* 危険な操作 */}
        <VStack gap={3} align="stretch">
          <Text
            fontSize="sm"
            fontWeight="medium"
            color="gray.600"
            _dark={{ color: 'gray.400' }}
          >
            その他
          </Text>

          <Button
            variant="ghost"
            size="lg"
            justifyContent="flex-start"
            colorPalette="red"
            onClick={handleLeaveDraft}
            _hover={{
              bg: 'red.50',
              _dark: { bg: 'red.900/20' },
            }}
          >
            <HStack gap={3} w="full">
              <Text fontSize="lg">🚪</Text>
              <Box textAlign="left" flex={1}>
                <Text
                  fontWeight="medium"
                  color="red.600"
                  _dark={{ color: 'red.400' }}
                >
                  会議を退出
                </Text>
                <Text
                  fontSize="sm"
                  color="red.500"
                  _dark={{ color: 'red.400' }}
                >
                  ドラフト会議から退出します
                </Text>
              </Box>
            </HStack>
          </Button>
        </VStack>
      </VStack>
    </ResponsiveModal>
  );
};
