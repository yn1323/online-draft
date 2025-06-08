'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { FiUserPlus } from 'react-icons/fi';
import ExistingUserList from '../components/selectors/ExistingUserList';

interface User {
  userId: string;
  userName: string;
  avatarIndex: string;
  avatar: string;
}

interface UserSelectStepProps {
  users: User[];
  onUserSelect: (userId: string) => void;
  onCreateNewUser: () => void;
  isLoading?: boolean;
}

export default function UserSelectStep({
  users,
  onUserSelect,
  onCreateNewUser,
  isLoading = false,
}: UserSelectStepProps) {
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const orTextBg = useColorModeValue('white', 'gray.800');

  return (
    <VStack gap={5} align="stretch">
      {/* 既存ユーザー選択 */}
      <ExistingUserList
        users={users}
        onUserSelect={onUserSelect}
        isLoading={isLoading}
      />

      {/* 区切り線（既存ユーザーがいる場合のみ表示） */}
      {users.length > 0 && (
        <Box position="relative" py={6}>
          <Box
            position="absolute"
            top="50%"
            left="0"
            right="0"
            height="1px"
            bg={borderColor}
            opacity={0.6}
          />
          <Text
            position="relative"
            display="inline-block"
            bg={orTextBg}
            px={6}
            left="50%"
            transform="translateX(-50%)"
            color="gray.500"
            fontSize="sm"
            fontWeight="medium"
          >
            または
          </Text>
        </Box>
      )}

      {/* 新規ユーザー作成ボタン */}
      <Button
        colorScheme="green"
        size="lg"
        onClick={onCreateNewUser}
        disabled={isLoading}
        borderRadius="lg"
        h={14}
        fontSize="md"
        fontWeight="bold"
        transition="all 0.2s"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
      >
        <Box as={FiUserPlus} mr={3} />
        新しいユーザーを作成
      </Button>
    </VStack>
  );
}
