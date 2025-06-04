'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import type { UserCreateForm } from '@/src/constants/schemas';
import { useAuth } from '@/src/hooks/useAuth';
import { auth } from '@/src/lib/firebase';
import {
  Badge,
  Box,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { signInAnonymously } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import UserCreateStep from './UserCreateStep';
import UserSelectStep from './UserSelectStep';
import StepIndicator, { type Step } from './components/StepIndicator';

// 仮のアバター画像データ（実際のFirebase連携時に置き換え）
const AVATAR_IMAGES = Array.from({ length: 18 }, (_, i) => ({
  index: `${i + 1}`,
  path: `/img/${i + 1}.png`,
}));

// 仮のユーザーデータ（実際のFirebase連携時に置き換え）
const MOCK_USERS = [
  { userId: '1', userName: '田中太郎', avatarIndex: '1', avatar: '/img/1.png' },
  { userId: '2', userName: '山田花子', avatarIndex: '5', avatar: '/img/5.png' },
];

interface LobbyPageProps {
  groupId: string;
  groupName?: string;
}

export default function LobbyPage({
  groupId,
  groupName = 'サンプルグループ',
}: LobbyPageProps) {
  const [step, setStep] = useState<Step>('select');
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, loading: authLoading } = useAuth();

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // ロビーページアクセス時の自動匿名ログイン
  useEffect(() => {
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
            {groupName}
          </Heading>
          <HStack justify="center" gap={2}>
            <Text fontSize="sm" color="gray.500">
              グループID:
            </Text>
            <Badge variant="outline" colorScheme="blue" fontSize="xs">
              {groupId}
            </Badge>
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
          bg={useColorModeValue('blue.50', 'blue.900')}
          border="1px solid"
          borderColor={useColorModeValue('blue.200', 'blue.700')}
          borderRadius="lg"
          p={4}
          textAlign="center"
        >
          <Text
            fontSize="sm"
            color={useColorModeValue('blue.700', 'blue.300')}
            fontWeight="medium"
          >
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
