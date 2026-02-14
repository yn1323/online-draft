'use client';

import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Avatar } from '@/src/components/atoms/Avatar';
import { Input } from '@/src/components/atoms/Input';
import { ResponsiveModal } from '@/src/components/ui/responsive-modal';

type AvatarSelectionFormData = {
  userName: string;
};

type AvatarSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (userData: {
    name: string;
    avatar: string;
  }) => void | Promise<void>;
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
  const t = useTranslations('lobby');
  const commonT = useTranslations('common');
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');
  const avatarSelectionSchema = useMemo(
    () =>
      z.object({
        userName: z
          .string()
          .min(1, t('avatarModal.validation.nameRequired'))
          .max(20, t('avatarModal.validation.nameMaxLength'))
          .trim(),
      }),
    [t],
  );

  // react-hook-form設定
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<AvatarSelectionFormData>({
    resolver: zodResolver(avatarSelectionSchema),
    mode: 'onChange',
    defaultValues: {
      userName: '',
    },
  });

  // 1-18番のアバター番号配列
  const avatarNumbers = Array.from({ length: 18 }, (_, i) =>
    (i + 1).toString(),
  );

  const onSubmit = async (data: AvatarSelectionFormData) => {
    if (selectedAvatar) {
      await onConfirm({
        name: data.userName,
        avatar: selectedAvatar,
      });
      // リセット
      reset();
      setSelectedAvatar('');
    }
  };

  const handleClose = () => {
    reset();
    setSelectedAvatar('');
    onClose();
  };

  const isAvatarUsed = (avatarNumber: string) =>
    usedAvatars.includes(avatarNumber);
  const canConfirm = selectedAvatar && isValid;

  return (
    <ResponsiveModal
      isOpen={isOpen}
      onClose={handleClose}
      title={t('avatarModal.title')}
      actions={{
        cancel: {
          text: commonT('actions.cancel'),
          onClick: handleClose,
        },
        submit: {
          text: t('avatarModal.submit'),
          disabled: !canConfirm,
          loading: isSubmitting,
          onClick: handleSubmit(onSubmit),
        },
      }}
    >
      {/* 名前入力 */}
      <VStack gap={2} align="start" w="full">
        <Text fontSize={['sm', 'md']} fontWeight="bold" color="gray.700">
          {t('avatarModal.nameLabel')}
        </Text>
        <Input
          {...register('userName')}
          placeholder={t('avatarModal.namePlaceholder')}
          maxLength={20}
          size="lg"
          error={!!errors.userName}
        />
        {errors.userName && (
          <Text fontSize="sm" color="red.500">
            {errors.userName.message}
          </Text>
        )}
      </VStack>

      {/* アバター選択 */}
      <VStack gap={4} align="start" w="full">
        <Text fontSize={['sm', 'md']} fontWeight="bold" color="gray.700">
          {t('avatarModal.avatarLabel')}
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
          {t('avatarModal.avatarNote')}
        </Text>
      </VStack>
    </ResponsiveModal>
  );
};

/**
 * AvatarSelectionModal用カスタムフック
 * 他のモーダルと同じパターンで開閉制御を提供
 */
export const useAvatarSelectionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
    // コンポーネント用プロパティ
    modalProps: {
      isOpen,
      onClose: close,
    },
  };
};
