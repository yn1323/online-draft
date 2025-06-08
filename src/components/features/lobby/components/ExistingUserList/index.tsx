'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import { Badge, Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { FiStar, FiUser, FiUserPlus } from 'react-icons/fi';

interface User {
  userId: string;
  userName: string;
  avatarIndex: string;
  avatar: string;
}

interface ExistingUserListProps {
  users: User[];
  onUserSelect: (userId: string) => void;
  isLoading?: boolean;
}

export default function ExistingUserList({
  users,
  onUserSelect,
  isLoading = false,
}: ExistingUserListProps) {
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');
  const hoverBorderColor = useColorModeValue('gray.300', 'gray.500');
  const emptyBg = useColorModeValue('gray.50', 'gray.800');
  const emptyBorderColor = useColorModeValue('gray.300', 'gray.600');

  // Empty state component
  const EmptyState = () => (
    <Box
      border="2px dashed"
      borderColor={emptyBorderColor}
      borderRadius="xl"
      bg={emptyBg}
      p={8}
      textAlign="center"
      transition="all 0.3s"
      _hover={{
        borderColor: 'blue.400',
        bg: useColorModeValue('blue.50', 'blue.900'),
      }}
    >
      <VStack gap={4}>
        <Box
          w={16}
          h={16}
          borderRadius="full"
          bg={useColorModeValue('blue.100', 'blue.800')}
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition="all 0.3s"
        >
          <FiStar size={32} color={useColorModeValue('blue.600', 'blue.300')} />
        </Box>
        <VStack gap={2}>
          <Text
            fontWeight="bold"
            fontSize="lg"
            color="gray.700"
            _dark={{ color: 'gray.200' }}
          >
            まだユーザーがいません
          </Text>
          <Text fontSize="sm" color="gray.500" maxW="280px" lineHeight="tall">
            このグループに参加した最初のユーザーになりましょう！
            新しいユーザーを作成して、ドラフトを始めてください。
          </Text>
        </VStack>
        <HStack gap={2} flexWrap="wrap" justify="center">
          <Badge
            colorScheme="blue"
            variant="subtle"
            fontSize="xs"
            px={2}
            py={1}
          >
            <HStack gap={1}>
              <Box as={FiUserPlus} />
              <Text>新規作成</Text>
            </HStack>
          </Badge>
          <Badge
            colorScheme="green"
            variant="subtle"
            fontSize="xs"
            px={2}
            py={1}
          >
            <HStack gap={1}>
              <Box as={FiStar} />
              <Text>初回参加</Text>
            </HStack>
          </Badge>
        </HStack>
      </VStack>
    </Box>
  );

  if (users.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <HStack gap={2} mb={2}>
        <Box as={FiUser} color="gray.600" _dark={{ color: 'gray.400' }} />
        <Text
          fontWeight="bold"
          fontSize="lg"
          color="gray.700"
          _dark={{ color: 'gray.200' }}
        >
          登録済みのユーザーで参加
        </Text>
        <Badge colorScheme="green" variant="subtle" fontSize="xs">
          {users.length}人
        </Badge>
      </HStack>
      <VStack gap={3} align="stretch">
        {users.map((user) => (
          <Button
            key={user.userId}
            variant="outline"
            size="lg"
            justifyContent="flex-start"
            gap={4}
            p={5}
            h="auto"
            borderColor={borderColor}
            color="gray.700"
            borderRadius="lg"
            transition="all 0.2s"
            _hover={{
              bg: hoverBg,
              borderColor: hoverBorderColor,
              transform: 'translateY(-2px)',
              boxShadow: 'md',
            }}
            _dark={{
              color: 'gray.200',
              _hover: {
                bg: hoverBg,
                borderColor: hoverBorderColor,
                transform: 'translateY(-2px)',
                boxShadow: 'md',
              },
            }}
            onClick={() => onUserSelect(user.userId)}
            loading={isLoading}
          >
            <Box borderRadius="md" overflow="hidden">
              <Image
                src={user.avatar}
                alt={user.userName}
                width={48}
                height={48}
              />
            </Box>
            <VStack align="flex-start" gap={0}>
              <Text fontWeight="bold" fontSize="md">
                {user.userName}
              </Text>
              <Text fontSize="sm" opacity={0.8}>
                このユーザーで参加
              </Text>
            </VStack>
          </Button>
        ))}
      </VStack>
    </>
  );
}
