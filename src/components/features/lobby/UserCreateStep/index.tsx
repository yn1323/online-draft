'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import { type UserCreateForm, userCreateSchema } from '@/src/constants/schemas';
import {
  Badge,
  Box,
  Button,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
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
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');
  const hoverBorderColor = useColorModeValue('gray.300', 'gray.500');
  const focusBorderColor = useColorModeValue('blue.500', 'blue.300');

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
            <Text
              fontWeight="bold"
              fontSize="lg"
              color="gray.700"
              _dark={{ color: 'gray.200' }}
            >
              アバターを選択
            </Text>
            <Badge
              colorScheme={watchedAvatarIndex ? 'green' : 'gray'}
              variant="subtle"
              fontSize="xs"
            >
              {watchedAvatarIndex ? '選択済み' : '未選択'}
            </Badge>
          </HStack>
          <Text fontSize="sm" color="gray.500" mb={4}>
            お気に入りの動物アバターを選んでください
          </Text>
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
          <HStack gap={2} mb={3}>
            <Text
              fontWeight="bold"
              fontSize="lg"
              color="gray.700"
              _dark={{ color: 'gray.200' }}
            >
              ユーザー名
            </Text>
            <Badge
              colorScheme={watchedUserName ? 'green' : 'gray'}
              variant="subtle"
              fontSize="xs"
            >
              {watchedUserName ? `${watchedUserName.length}/12` : '0/12'}
            </Badge>
          </HStack>
          <Text fontSize="sm" color="gray.500" mb={3}>
            ドラフト中に表示される名前です
          </Text>
          <Input
            placeholder="名前を入力してください"
            size="lg"
            maxLength={12}
            borderRadius="lg"
            {...register('userName')}
            borderColor={errors.userName ? 'red.300' : borderColor}
            _focus={{
              borderColor: errors.userName ? 'red.500' : focusBorderColor,
              boxShadow: `0 0 0 1px ${errors.userName ? 'red.500' : focusBorderColor}`,
              transform: 'scale(1.02)',
            }}
            _hover={{
              borderColor: errors.userName ? 'red.400' : hoverBorderColor,
            }}
            transition="all 0.2s"
          />
          {errors.userName && (
            <Text fontSize="sm" color="red.500" mt={2}>
              {errors.userName.message}
            </Text>
          )}
        </Box>

        <Button
          colorScheme="green"
          size="lg"
          onClick={handleSubmit(handleFormSubmit)}
          loading={isLoading}
          disabled={!isValid || isLoading}
          borderRadius="lg"
          h={14}
          fontSize="md"
          fontWeight="bold"
          transition="all 0.2s"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          _disabled={{
            opacity: 0.6,
            cursor: 'not-allowed',
            transform: 'none',
          }}
        >
          作成して参加
        </Button>
      </VStack>
    </VStack>
  );
}
