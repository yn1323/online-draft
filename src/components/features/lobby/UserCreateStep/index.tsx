'use client';

import { FormButton } from '@/src/components/atoms/buttons/FormButton';
import { ThemeInput } from '@/src/components/atoms/inputs/ThemeInput';
import { ThemeText } from '@/src/components/atoms/typography/ThemeText';
import { useColorModeValue } from '@/src/components/ui/color-mode';
import { type UserCreateForm, userCreateSchema } from '@/src/constants/schemas';
import { Badge, Box, Button, HStack, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FiChevronLeft } from 'react-icons/fi';
import AvatarSelector from '../components/selectors/AvatarSelector';

interface Avatar {
  index: string;
  path: string;
}

interface UserCreateStepProps {
  avatars: Avatar[];
  onBack: () => void;
  onSubmit: (data: UserCreateForm) => Promise<void>;
  isLoading?: boolean;
}

export default function UserCreateStep({
  avatars,
  onBack,
  onSubmit,
  isLoading = false,
}: UserCreateStepProps) {
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  const form = useForm<UserCreateForm>({
    resolver: zodResolver(userCreateSchema),
    defaultValues: {
      userName: '',
      avatarIndex: '',
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = form;

  const watchedAvatarIndex = watch('avatarIndex');
  const watchedUserName = watch('userName');

  const handleFormSubmit = async (data: UserCreateForm) => {
    await onSubmit(data);
  };

  return (
    <VStack gap={6} align="stretch">
      {/* 戻るボタン */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        alignSelf="flex-start"
        disabled={isLoading}
        borderRadius="md"
        _hover={{ bg: hoverBg }}
      >
        <Box as={FiChevronLeft} mr={2} />
        戻る
      </Button>

      {/* ユーザー作成フォーム */}
      <VStack gap={6} align="stretch">
        <Box>
          <HStack gap={2} mb={4}>
            <ThemeText variant="label" fontSize="lg">
              アバターを選択
            </ThemeText>
            <Badge
              colorScheme={watchedAvatarIndex ? 'green' : 'gray'}
              variant="subtle"
              fontSize="xs"
            >
              {watchedAvatarIndex ? '選択済み' : '未選択'}
            </Badge>
          </HStack>
          <ThemeText variant="helper" mb={4}>
            お気に入りの動物アバターを選んでください
          </ThemeText>
          <AvatarSelector
            avatars={avatars}
            selectedAvatarIndex={watchedAvatarIndex}
            onAvatarSelect={(index) =>
              setValue('avatarIndex', index, { shouldValidate: true })
            }
            errorMessage={errors.avatarIndex?.message}
          />
        </Box>

        <Box>
          <HStack gap={2} mb={2}>
            <ThemeText variant="label" fontSize="sm" fontWeight="medium">
              ユーザー名
            </ThemeText>
            <Badge
              colorScheme={watchedUserName ? 'green' : 'gray'}
              variant="subtle"
              fontSize="xs"
            >
              {watchedUserName ? `${watchedUserName.length}/12` : '0/12'}
            </Badge>
          </HStack>
          <ThemeInput
            placeholder="名前を入力してください"
            size="lg"
            maxLength={12}
            showCharacterCount={true}
            helperText="ドラフト中に表示される名前です"
            errorText={errors.userName?.message}
            invalid={!!errors.userName}
            {...register('userName')}
          />
        </Box>

        <FormButton
          colorPalette="green"
          size="lg"
          onClick={handleSubmit(handleFormSubmit)}
          isLoading={isLoading}
          isValid={isValid}
          loadingText="作成中..."
          h={14}
          fontSize="md"
          fontWeight="bold"
        >
          作成して参加
        </FormButton>
      </VStack>
    </VStack>
  );
}
