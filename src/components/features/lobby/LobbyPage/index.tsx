'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import type { UserCreateForm } from '@/src/constants/schemas';
import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { useAuth } from '@/src/hooks/useAuth';
import { auth } from '@/src/lib/firebase';
import { getDraftGroup } from '@/src/services/firestore/draftGroups';
import {
  AVATAR_IMAGES,
  MOCK_USERS,
  STORYBOOK_GROUP_DATA,
  STORYBOOK_LOADING_DELAY,
} from './mocks';
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
import { signInAnonymously } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FiAlertCircle, FiUsers } from 'react-icons/fi';
import UserCreateStep from '../UserCreateStep';
import UserSelectStep from '../UserSelectStep';
import StepIndicator, { type Step } from '../components/StepIndicator';

interface LobbyPageProps {
  groupId: string;
}

export default function LobbyPage({ groupId }: LobbyPageProps) {
  const [step, setStep] = useState<Step>('select');
  const [isLoading, setIsLoading] = useState(false);
  const [groupData, setGroupData] = useState<{
    groupName: string;
    round: number;
  } | null>(null);
  const [groupLoading, setGroupLoading] = useState(true);
  const [groupError, setGroupError] = useState<string | null>(null);
  const { isAuthenticated, loading: authLoading } = useAuth();

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const helpBgColor = useColorModeValue('blue.50', 'blue.900');
  const helpBorderColor = useColorModeValue('blue.200', 'blue.700');
  const helpTextColor = useColorModeValue('blue.700', 'blue.300');

  // ロビーページアクセス時の自動匿名ログイン
  useEffect(() => {
    if (isStorybookEnvironment()) {
      console.log('📚 Storybook環境のため自動ログインをスキップ');
      return;
    }

    const autoLogin = async () => {
      if (!authLoading && !isAuthenticated) {
        try {
          console.log('🔄 ロビーページ - 自動匿名ログイン開始...');
          const userCredential = await signInAnonymously(auth);
          console.log('✅ 自動ログイン成功:', {
            uid: userCredential.user.uid,
            isAnonymous: userCredential.user.isAnonymous,
          });
        } catch (error) {
          console.error('❌ 自動ログインエラー:', error);
        }
      }
    };

    autoLogin();
  }, [authLoading, isAuthenticated]);

  // グループ情報の取得
  useEffect(() => {
    const fetchGroupData = async () => {
      if (!groupId) {
        return;
      }

      // Storybook環境では固定データを使用
      if (isStorybookEnvironment()) {
        console.log('📚 Storybook環境のためモックデータを使用');
        setGroupLoading(true);

        // 少し遅延を入れてローディング状態をテスト
        setTimeout(() => {
          const mockGroup = STORYBOOK_GROUP_DATA[groupId as keyof typeof STORYBOOK_GROUP_DATA];
          if (mockGroup) {
            setGroupData(mockGroup);
          } else {
            setGroupError('指定されたグループが見つかりません');
          }
          setGroupLoading(false);
        }, STORYBOOK_LOADING_DELAY);
        return;
      }

      try {
        console.log('🔄 グループ情報取得開始...', { groupId });
        setGroupLoading(true);
        setGroupError(null);

        const group = await getDraftGroup(groupId);

        if (!group) {
          setGroupError('指定されたグループが見つかりません');
          console.error('❌ グループが存在しません:', { groupId });
          return;
        }

        setGroupData({
          groupName: group.groupName,
          round: group.round,
        });

        console.log('✅ グループ情報取得成功:', group);
      } catch (error) {
        console.error('❌ グループ情報取得エラー:', error);
        setGroupError('グループ情報の取得に失敗しました');
      } finally {
        setGroupLoading(false);
      }
    };

    fetchGroupData();
  }, [groupId]);

  const handleExistingUserLogin = async (userId: string) => {
    setIsLoading(true);
    // TODO: Firebase認証処理
    console.log('Login with existing user:', userId);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // router.push(`/draft/${groupId}`);
  };

  const handleCreateUser = async (data: UserCreateForm) => {
    setIsLoading(true);
    try {
      // TODO: Firebase ユーザー作成処理
      console.log('Create new user:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // router.push(`/draft/${groupId}`);
    } catch (error) {
      console.error('User creation error:', error);
    } finally {
      setIsLoading(false);
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
              users={MOCK_USERS}
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
              isLoading={isLoading}
            />
          )}
        </Box>

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

