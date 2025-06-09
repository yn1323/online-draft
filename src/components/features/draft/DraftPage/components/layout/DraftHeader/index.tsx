'use client';

import { toaster } from '@/src/components/ui/toaster';
import { Flex, HStack, IconButton, Text } from '@chakra-ui/react';

interface DraftHeaderProps {
  groupName: string;
  onOpenOptions?: () => void;
}

export const DraftHeader = ({ groupName, onOpenOptions }: DraftHeaderProps) => {
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toaster.create({
        title: 'URLをコピーしました！',
        description: '招待リンクをシェアして参加者を増やしましょう',
        type: 'success',
        duration: 3000,
      });
    } catch (_error) {
      toaster.create({
        title: 'コピーに失敗しました',
        description: 'URLを手動でコピーしてください',
        type: 'error',
        duration: 3000,
      });
    }
  };

  return (
    <Flex justify="space-between" align="center" mb={4} py={0} px={0}>
      {/* 左側: ドラフト会議名 */}
      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        fontWeight="bold"
        color="gray.800"
        _dark={{ color: 'white' }}
        truncate
        flex={1}
        mr={3}
      >
        {groupName}
      </Text>

      {/* 右側: アクションボタン */}
      <HStack gap={1}>
        {/* URLコピーボタン */}
        <IconButton
          aria-label="URLをコピー"
          size="sm"
          variant="ghost"
          colorPalette="green"
          onClick={handleCopyUrl}
          _hover={{
            bg: 'green.50',
            _dark: { bg: 'green.900/20' },
          }}
        >
          <Text fontSize="md">📋</Text>
        </IconButton>

        {/* オプションボタン */}
        <IconButton
          aria-label="オプション"
          size="sm"
          variant="ghost"
          colorPalette="gray"
          onClick={onOpenOptions}
          _hover={{
            bg: 'gray.50',
            _dark: { bg: 'gray.700' },
          }}
        >
          <Text fontSize="md">⚙️</Text>
        </IconButton>
      </HStack>
    </Flex>
  );
};
