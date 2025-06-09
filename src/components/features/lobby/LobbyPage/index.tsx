'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import type { UserCreateForm } from '@/src/constants/schemas';
import { checkUserNameExists, createUser } from '@/src/helpers/firebase/user';
import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { useAutoAuth } from '@/src/hooks/auth/useAutoAuth';
import { useGroupData } from '@/src/hooks/data/useGroupData';
import { useRealtimeUsers } from '@/src/hooks/realtime/useRealtimeUsers';
import {
  currentUserAtom,
  userRegistrationErrorAtom,
  userRegistrationLoadingAtom,
} from '@/src/stores/user';
import {
  Badge,
  Box,
  Container,
  HStack,
  Heading,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useAtom, useSetAtom } from 'jotai';
import { useState } from 'react';
import { FiAlertCircle, FiUsers } from 'react-icons/fi';
import UserCreateStep from '../UserCreateStep';
import UserSelectStep from '../UserSelectStep';
import StepIndicator, {
  type Step,
} from '../components/indicators/StepIndicator';
import { AVATAR_IMAGES } from './mocks';

interface LobbyPageProps {
  groupId: string;
}

export default function LobbyPage({ groupId }: LobbyPageProps) {
  const [step, setStep] = useState<Step>('select');
  const [isLoading, setIsLoading] = useState(false);

  // カスタムフック
  useAutoAuth(); // 自動匿名ログイン処理
  const { groupData, groupLoading, groupError } = useGroupData(groupId);
  const { groupUsers } = useRealtimeUsers(groupId);

  // Jotai状態管理
  const setCurrentUser = useSetAtom(currentUserAtom);
  const [userRegistrationLoading, setUserRegistrationLoading] = useAtom(
    userRegistrationLoadingAtom,
  );
  const [userRegistrationError, setUserRegistrationError] = useAtom(
    userRegistrationErrorAtom,
  );

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const helpBgColor = useColorModeValue('blue.50', 'blue.900');
  const helpBorderColor = useColorModeValue('blue.200', 'blue.700');
  const helpTextColor = useColorModeValue('blue.700', 'blue.300');

  const handleExistingUserLogin = async (userId: string) => {
    setIsLoading(true);
    // TODO: Firebase認証処理
    console.log('Login with existing user:', userId);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // router.push(`/draft/${groupId}`);
  };

  const handleCreateUser = async (data: UserCreateForm) => {
    if (!groupId) {
      console.error('❌ グループIDが指定されていません');
      return;
    }

    // Storybook環境ではモック処理
    if (isStorybookEnvironment()) {
      console.log('📚 Storybook環境のためモック処理');
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
      return;
    }

    try {
      setUserRegistrationLoading(true);
      setUserRegistrationError(null);
      console.log('🔄 ユーザー作成開始:', data);

      // 1. ユーザー名重複チェック
      const nameExists = await checkUserNameExists(groupId, data.userName);
      if (nameExists) {
        setUserRegistrationError('そのユーザー名は既に使用されています');
        return;
      }

      // 2. Firestoreにユーザー作成
      const userId = await createUser({
        groupId,
        userName: data.userName,
        avatar: data.avatarIndex,
        deleteFlg: false,
      });

      // 3. Jotai状態に保存
      const newUser = {
        userId,
        groupId,
        userName: data.userName,
        avatar: data.avatarIndex,
        deleteFlg: false,
      };
      setCurrentUser(newUser);

      console.log('✅ ユーザー作成成功:', newUser);

      // TODO: ドラフトページへのリダイレクト
      // router.push(`/draft/${groupId}`);
    } catch (error) {
      console.error('❌ ユーザー作成エラー:', error);
      setUserRegistrationError('ユーザーの作成に失敗しました');
    } finally {
      setUserRegistrationLoading(false);
    }
  };

  // ローディング中の表示
  if (groupLoading) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Spinner size="lg" color="blue.500" />
          <Text color="gray.500">グループ情報を読み込み中...</Text>
        </VStack>
      </Container>
    );
  }

  // エラー時の表示
  if (groupError || !groupData) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Box as={FiAlertCircle} fontSize="48px" color="red.500" />
          <VStack gap={2} textAlign="center">
            <Heading size="md" color="red.500">
              グループが見つかりません
            </Heading>
            <Text color="gray.500">
              {groupError ||
                '指定されたグループID のグループは存在しないか、削除されている可能性があります。'}
            </Text>
            <Badge variant="outline" colorScheme="red" fontSize="xs" mt={2}>
              グループID: {groupId}
            </Badge>
          </VStack>
        </VStack>
      </Container>
    );
  }

  return (
    <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
      <VStack gap={6} align="stretch">
        {/* ヘッダー部分 - 改善版 */}
        <Box textAlign="center">
          <Badge
            colorScheme="blue"
            fontSize="xs"
            px={3}
            py={1}
            borderRadius="full"
            mb={3}
          >
            <HStack gap={1}>
              <Box as={FiUsers} />
              <Text>グループに参加</Text>
            </HStack>
          </Badge>
          <Heading
            size={{ base: 'md', md: 'lg' }}
            mb={3}
            color="gray.800"
            _dark={{ color: 'gray.100' }}
            fontWeight="bold"
          >
            {groupData.groupName}
          </Heading>
          <HStack justify="center" gap={2}>
            <Text fontSize="sm" color="gray.500">
              グループID:
            </Text>
            <Badge variant="outline" colorScheme="blue" fontSize="xs">
              {groupId}
            </Badge>
            <Text fontSize="sm" color="gray.500">
              •
            </Text>
            <Text fontSize="sm" color="gray.500">
              ラウンド: {groupData.round}
            </Text>
          </HStack>
        </Box>

        {/* ステップインジケーター */}
        <StepIndicator currentStep={step} />

        {/* メインコンテンツ */}
        <Box
          bg={bgColor}
          borderRadius="xl"
          border="1px solid"
          borderColor={borderColor}
          p={{ base: 4, md: 6 }}
          boxShadow="md"
          overflow="hidden"
        >
          {step === 'select' && (
            <UserSelectStep
              users={groupUsers
                .filter((user) => user.userId) // userIdが存在するもののみ
                .map((user) => ({
                  userId: user.userId as string, // フィルター後は必ず存在
                  userName: user.userName,
                  avatarIndex: user.avatar,
                  avatar: `/img/${user.avatar}.png`,
                }))}
              onUserSelect={handleExistingUserLogin}
              onCreateNewUser={() => setStep('create')}
              isLoading={isLoading}
            />
          )}

          {step === 'create' && (
            <UserCreateStep
              avatars={AVATAR_IMAGES}
              onBack={() => setStep('select')}
              onSubmit={handleCreateUser}
              isLoading={userRegistrationLoading}
            />
          )}
        </Box>

        {/* エラー表示 */}
        {userRegistrationError && (
          <Box
            bg="red.50"
            border="1px solid"
            borderColor="red.200"
            borderRadius="lg"
            p={4}
            _dark={{
              bg: 'red.900',
              borderColor: 'red.700',
            }}
          >
            <Text
              fontSize="sm"
              color="red.700"
              _dark={{ color: 'red.300' }}
              fontWeight="medium"
            >
              ❌ {userRegistrationError}
            </Text>
          </Box>
        )}

        {/* ヘルプテキスト - 改善版 */}
        <Box
          bg={helpBgColor}
          border="1px solid"
          borderColor={helpBorderColor}
          borderRadius="lg"
          p={4}
          textAlign="center"
        >
          <Text fontSize="sm" color={helpTextColor} fontWeight="medium">
            💡{' '}
            {step === 'select'
              ? '既存のユーザーを選択するか、新しいユーザーを作成してグループに参加しましょう'
              : 'お気に入りのアバターを選んで、ドラフトで使う名前を決めてください'}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}
