'use client';

import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { LuCopy } from 'react-icons/lu';
import { Card } from '@/src/components/atoms/Card';
import { useToaster } from '@/src/components/ui/toaster';
import type { GroupDataType } from '@/src/hooks/firebase/group/useGroup';

type RoomInfoProps = {
  group: GroupDataType;
  roomUrl: string;
};

/**
 * ルーム情報表示コンポーネント
 * ルーム名・URL共有・音声通話案内を表示
 */
export const RoomInfo = ({ group, roomUrl }: RoomInfoProps) => {
  const t = useTranslations('lobby');
  const { successToast, errorToast } = useToaster();

  // URL共有機能
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(roomUrl);
      successToast(t('roomInfo.copySuccess'));
    } catch (error) {
      console.error('URL copy failed:', error);
      errorToast(t('roomInfo.copyFailed'));
    }
  };

  return (
    <Box w="full" overflow="hidden">
      <Card variant="elevated" size="md">
        <VStack gap={4} align="stretch">
          <Text fontSize="lg" fontWeight="bold">
            {group.groupName}
          </Text>

          {/* 招待エリア */}
          <Box>
            <Text fontSize="sm" color="gray.600" mb={2}>
              {t('roomInfo.inviteMessage')}
            </Text>
            <Text
              fontSize="sm"
              bg="gray.100"
              p={2}
              borderRadius="md"
              truncate
              mb={2}
            >
              {roomUrl}
            </Text>
            <Button w="full" colorPalette="blue" onClick={handleCopyUrl}>
              <LuCopy />
              {t('roomInfo.copyButton')}
            </Button>
          </Box>

          <Text fontSize={['xs', 'sm']} color="gray.500">
            {t('roomInfo.voiceChatNote')}
          </Text>
        </VStack>
      </Card>
    </Box>
  );
};
