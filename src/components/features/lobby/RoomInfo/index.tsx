'use client';

import { Card } from '@/src/components/atoms/Card';
import { useToaster } from '@/src/components/ui/toaster';
import type { GroupDataType } from '@/src/hooks/firebase/group/useGroup';
import { Box, HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { LuCopy } from 'react-icons/lu';

type RoomInfoProps = {
  group: GroupDataType;
  roomUrl: string;
};

/**
 * ルーム情報表示コンポーネント
 * ルーム名・URL共有・音声通話案内を表示
 */
export const RoomInfo = ({ group, roomUrl }: RoomInfoProps) => {
  const { successToast, errorToast } = useToaster();

  // URL共有機能
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(roomUrl);
      successToast('URLをコピーしました');
    } catch (error) {
      console.error('URL copy failed:', error);
      errorToast('URLのコピーに失敗しました');
    }
  };

  return (
    <Card variant="elevated" size="md">
      <Box w="full">
        <VStack gap={4} align="stretch">
          <Text fontSize="lg" fontWeight="bold">
            {group.groupName}
          </Text>

          {/* URL共有エリア */}
          <Box>
            <Text fontSize="sm" color="gray.600" mb={2}>
              このURLを友達にシェアしよう！
            </Text>
            <HStack>
              <Text
                fontSize="sm"
                bg="gray.100"
                p={2}
                borderRadius="md"
                flex={1}
                truncate
              >
                {roomUrl}
              </Text>
              <IconButton
                aria-label="URLをコピー"
                variant="solid"
                colorPalette="blue"
                size="sm"
                onClick={handleCopyUrl}
              >
                <LuCopy />
              </IconButton>
            </HStack>
          </Box>

          <Text fontSize={['xs', 'sm']} color="gray.500">
            音声通話アプリ（LINE、Discord等）を併用してお楽しみください
          </Text>
        </VStack>
      </Box>
    </Card>
  );
};
