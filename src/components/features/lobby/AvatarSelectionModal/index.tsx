'use client';

import { Avatar } from '@/src/components/atoms/Avatar';
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

type AvatarSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (userData: { name: string; avatar: string }) => void;
  usedAvatars?: string[];
};

/**
 * アバター選択モーダル
 * 新規参加者用のアバター・名前選択UI
 */
export const AvatarSelectionModal = ({
  isOpen,
  onClose,
  onConfirm,
  usedAvatars = [],
}: AvatarSelectionModalProps) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');
  const [userName, setUserName] = useState('');

  // 1-18番のアバター番号配列
  const avatarNumbers = Array.from({ length: 18 }, (_, i) =>
    (i + 1).toString(),
  );

  const handleConfirm = () => {
    if (selectedAvatar && userName.trim()) {
      onConfirm({
        name: userName.trim(),
        avatar: selectedAvatar,
      });
      // リセット
      setSelectedAvatar('');
      setUserName('');
    }
  };

  const isAvatarUsed = (avatarNumber: string) =>
    usedAvatars.includes(avatarNumber);
  const canConfirm = selectedAvatar && userName.trim().length > 0;

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={onClose}
      title="ドラフトに参加"
      actions={{
        cancel: {
          text: 'キャンセル',
          onClick: onClose,
        },
        submit: {
          text: '参加する',
          disabled: !canConfirm,
          onClick: handleConfirm,
        },
      }}
    >
      {/* 名前入力 */}
      <VStack gap={2} align="start" w="full">
        <Text fontSize={['sm', 'md']} fontWeight="bold" color="gray.700">
          あなたの名前
        </Text>
        <Input
          placeholder="名前を入力してください"
          value={userName}
          onChange={setUserName}
          maxLength={20}
          size="lg"
        />
      </VStack>

      {/* アバター選択 */}
      <VStack gap={4} align="start" w="full">
        <Text fontSize={['sm', 'md']} fontWeight="bold" color="gray.700">
          アバターを選択
        </Text>

        <SimpleGrid columns={[4, 6]} gap={3} w="full">
          {avatarNumbers.map((avatarNumber) => {
            const isUsed = isAvatarUsed(avatarNumber);
            const isSelected = selectedAvatar === avatarNumber;

            return (
              <Box
                key={avatarNumber}
                position="relative"
                cursor={isUsed ? 'not-allowed' : 'pointer'}
                opacity={isUsed ? 0.4 : 1}
                onClick={() => !isUsed && setSelectedAvatar(avatarNumber)}
              >
                <Box
                  p={0.5}
                  borderRadius="lg"
                  border="2px solid"
                  borderColor={
                    isSelected ? 'blue.400' : isUsed ? 'gray.300' : 'gray.200'
                  }
                  bg={isSelected ? 'blue.50' : 'white'}
                  transition="all 0.15s"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={
                    isUsed
                      ? {}
                      : {
                          borderColor: 'blue.400',
                          transform: 'scale(1.05)',
                        }
                  }
                >
                  <Avatar avatarNumber={avatarNumber} size="md" noBorder />
                </Box>

                {isUsed && (
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    bg="red.500"
                    color="white"
                    borderRadius="full"
                    w="20px"
                    h="20px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xs"
                    fontWeight="bold"
                  >
                    ×
                  </Box>
                )}
              </Box>
            );
          })}
        </SimpleGrid>

        <Text fontSize="xs" color="gray.500">
          ×マークは他の参加者が使用中のアバターです
        </Text>
      </VStack>
    </ResponsiveModal>
  );
};
