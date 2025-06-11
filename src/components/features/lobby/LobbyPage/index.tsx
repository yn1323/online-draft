'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import type { UserCreateForm } from '@/src/constants/schemas';
import { checkUserNameExists, createUser } from '@/src/helpers/firebase/user';
import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { useLobbyAuth } from '@/src/hooks/auth/useLobbyAuth';
import { useGroupData } from '@/src/hooks/data/useGroupData';
import { useRealtimeUsers } from '@/src/hooks/realtime/useRealtimeUsers';
import type { UserDocument } from '@/src/types/firestore';
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [userRegistrationLoading, setUserRegistrationLoading] = useState(false);
  const [userRegistrationError, setUserRegistrationError] = useState<
    string | null
  >(null);
  const router = useRouter();

  // 統合認証フック（Firebase認証 + SessionUser管理）
  const {
    currentUser: sessionUser,
    hasActiveSession,
    loading: authLoading,
    authError,
    groupError,
    userError,
    selectUser,
    retry: retryAuth,
    clearSession,
  } = useLobbyAuth(groupId);

  // データ取得フック
  const {
    groupData,
    groupLoading,
    groupError: groupDataError,
  } = useGroupData(groupId);
  const { groupUsers } = useRealtimeUsers(groupId);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const helpBgColor = useColorModeValue('blue.50', 'blue.900');
  const helpBorderColor = useColorModeValue('blue.200', 'blue.700');
  const helpTextColor = useColorModeValue('blue.700', 'blue.300');

  // 認証フロー最適化：有効なセッションがある場合はドラフトページへ
  useEffect(() => {
    if (hasActiveSession && sessionUser && !authLoading && !groupLoading) {
      console.log('✅ 有効なセッションを検出、ドラフトページへリダイレクト:', {
        userId: sessionUser.id,
        userName: sessionUser.name,
        groupId: sessionUser.groupId,
      });

      // 少し待ってからリダイレクト（UIの準備を待つ）
      const timer = setTimeout(() => {
        router.push(`/draft/${groupId}`);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [
    hasActiveSession,
    sessionUser,
    authLoading,
    groupLoading,
    groupId,
    router,
  ]);

  // エラーハンドリング関数
  const handleRetry = () => {
    console.log('🔄 エラー状態をリセットして再試行');
    setUserRegistrationError(null);
    retryAuth();
  };

  const handleClearSession = () => {
    console.log('🗑️ セッションをクリアして最初から開始');
    clearSession();
    setUserRegistrationError(null);
    setStep('select');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  const handleExistingUserLogin = async (userId: string) => {
    try {
      console.log('🔄 既存ユーザーログイン開始:', { userId, groupId });

      // useSessionUserのselectUserを使用してSessionStorageに保存
      await selectUser(userId);

      console.log('✅ 既存ユーザーでログイン完了');

      // ドラフトページへ遷移
      router.push(`/draft/${groupId}`);
    } catch (error) {
      console.error('❌ ログインエラー:', error);
      setUserRegistrationError(
        error instanceof Error ? error.message : 'ログインに失敗しました',
      );
    }
  };

  const handleCreateUser = async (data: UserCreateForm) => {
    if (!groupId) {
      console.error('❌ グループIDが指定されていません');
      return;
    }

    // Storybook環境ではモック処理
    if (isStorybookEnvironment()) {
      console.log('📚 Storybook環境のためモック処理');
      setUserRegistrationLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUserRegistrationLoading(false);
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

      console.log('✅ ユーザー作成成功:', { userId, userName: data.userName });

      // 3. useSessionUserのselectUserを使用してSessionStorageに保存
      await selectUser(userId);

      console.log('✅ SessionStorage保存完了');

      // ドラフトページへ遷移
      router.push(`/draft/${groupId}`);
    } catch (error) {
      console.error('❌ ユーザー作成エラー:', error);
      setUserRegistrationError(
        error instanceof Error ? error.message : 'ユーザーの作成に失敗しました',
      );
    } finally {
      setUserRegistrationLoading(false);
    }
  };

  // 自動リダイレクト中の表示
  if (hasActiveSession && sessionUser && !authLoading && !groupLoading) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Spinner size="lg" color="green.500" />
          <VStack gap={2} textAlign="center">
            <Text color="green.600" fontWeight="bold">
              ようこそ、{sessionUser.name}さん！
            </Text>
            <Text color="gray.500">ドラフトページへ移動しています...</Text>
            <Text fontSize="sm" color="gray.400">
              既存のセッションが見つかりました
            </Text>
          </VStack>
        </VStack>
      </Container>
    );
  }

  // ローディング中の表示（グループ情報 + 統合認証）
  if (groupLoading || authLoading) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Spinner size="lg" color="blue.500" />
          <VStack gap={2} textAlign="center">
            <Text color="gray.500">
              {groupLoading
                ? 'グループ情報を読み込み中...'
                : '認証情報を確認中...'}
            </Text>
            <Text fontSize="sm" color="gray.400">
              Firebase認証とグループ情報を確認しています
            </Text>
          </VStack>
        </VStack>
      </Container>
    );
  }

  // Firebase認証エラー時の表示（グループエラーは除く）
  if (authError && !userError) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Box as={FiAlertCircle} fontSize="48px" color="red.500" />
          <VStack gap={3} textAlign="center">
            <Heading size="md" color="red.500">
              認証エラー
            </Heading>
            <Text color="gray.500">
              {authError || 'Firebase認証に失敗しました'}
            </Text>
            <Badge variant="outline" colorScheme="red" fontSize="xs" mt={2}>
              グループID: {groupId}
            </Badge>
            <VStack gap={2} pt={4}>
              <Button colorPalette="blue" onClick={handleRetry} size="md">
                再試行
              </Button>
              <Button variant="ghost" onClick={handleGoHome} size="sm">
                トップページに戻る
              </Button>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    );
  }

  // グループエラー時の表示（グループが存在しない場合）
  if (groupError || groupDataError || (!groupLoading && !groupData)) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Box as={FiAlertCircle} fontSize="48px" color="red.500" />
          <VStack gap={3} textAlign="center">
            <Heading size="md" color="red.500">
              グループが見つかりません
            </Heading>
            <Text color="gray.500">
              {groupError ||
                groupDataError ||
                '指定されたグループID のグループは存在しないか、削除されている可能性があります。'}
            </Text>
            <Badge variant="outline" colorScheme="red" fontSize="xs" mt={2}>
              グループID: {groupId}
            </Badge>
            <VStack gap={2} pt={4}>
              <Button colorPalette="blue" onClick={handleRetry} size="md">
                再試行
              </Button>
              <Button variant="ghost" onClick={handleGoHome} size="sm">
                トップページに戻る
              </Button>
            </VStack>
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
            {groupData?.groupName}
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
              ラウンド: {groupData?.round}
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
              isLoading={authLoading}
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
        {(userRegistrationError || userError) && (
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
            <VStack gap={3} align="stretch">
              <Text
                fontSize="sm"
                color="red.700"
                _dark={{ color: 'red.300' }}
                fontWeight="medium"
              >
                ❌ {userRegistrationError || userError}
              </Text>
              <HStack gap={2} justify="center">
                <Button
                  size="sm"
                  variant="outline"
                  colorPalette="red"
                  onClick={handleRetry}
                >
                  再試行
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  colorPalette="red"
                  onClick={handleClearSession}
                >
                  セッションクリア
                </Button>
              </HStack>
            </VStack>
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
