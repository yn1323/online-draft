'use client';

import { useDraftAuth } from '@/src/hooks/auth/useDraftAuth';
import {
  Box,
  Button,
  Container,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

/**
 * DraftPage認証ガードコンポーネント
 * 認証状態に応じて適切な画面を表示する
 */
interface DraftAuthGuardProps {
  groupId: string;
  children: ReactNode;
}

export const DraftAuthGuard = ({ groupId, children }: DraftAuthGuardProps) => {
  const router = useRouter();
  const {
    isReady,
    needsUserSelection,
    hasAuthError,
    loading,
    authError,
    userError,
    currentUser,
    retry,
  } = useDraftAuth(groupId);

  // ローディング中
  if (loading) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Spinner size="lg" color="blue.500" />
          <VStack gap={2} textAlign="center">
            <Text color="gray.500">認証中...</Text>
            <Text fontSize="sm" color="gray.400">
              Firebase認証とグループ情報を確認しています
            </Text>
          </VStack>
        </VStack>
      </Container>
    );
  }

  // Firebase認証エラーまたはグループ不存在
  if (hasAuthError) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Box fontSize="48px">🚫</Box>
          <VStack gap={3} textAlign="center">
            <Text fontSize="xl" fontWeight="bold" color="red.500">
              アクセスできません
            </Text>
            <Text color="gray.500">
              {authError || 'ドラフトグループが見つかりません'}
            </Text>
            <VStack gap={2} pt={4}>
              <Button colorPalette="blue" onClick={retry} size="md">
                再試行
              </Button>
              <Button
                variant="ghost"
                onClick={() => router.push('/')}
                size="sm"
              >
                トップページに戻る
              </Button>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    );
  }

  // ユーザー選択が必要 - 速やかにロビーにリダイレクト
  if (needsUserSelection) {
    // 即座にロビーページにリダイレクト
    router.replace(`/lobby/${groupId}`);

    // リダイレクト中の簡潔な表示
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Spinner size="lg" color="blue.500" />
          <Text color="gray.500">ロビーページに移動しています...</Text>
        </VStack>
      </Container>
    );
  }

  // SessionUserエラー（予期しないエラー）
  if (userError && !needsUserSelection) {
    return (
      <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
        <VStack gap={6} align="center" justify="center" minH="400px">
          <Box fontSize="48px">⚠️</Box>
          <VStack gap={3} textAlign="center">
            <Text fontSize="xl" fontWeight="bold" color="orange.500">
              ユーザー情報エラー
            </Text>
            <Text color="gray.500">{userError}</Text>
            <VStack gap={2} pt={4}>
              <Button colorPalette="orange" onClick={retry} size="md">
                再試行
              </Button>
              <Button
                variant="ghost"
                onClick={() => router.push(`/lobby/${groupId}`)}
                size="sm"
              >
                ロビーページに移動
              </Button>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    );
  }

  // 認証完了 - DraftPageコンテンツを表示
  if (isReady && currentUser) {
    return <>{children}</>;
  }

  // 予期しない状態
  return (
    <Container maxW="container.sm" py={{ base: 4, md: 8 }}>
      <VStack gap={6} align="center" justify="center" minH="400px">
        <Box fontSize="48px">🤔</Box>
        <VStack gap={3} textAlign="center">
          <Text fontSize="xl" fontWeight="bold" color="gray.500">
            予期しない状態です
          </Text>
          <Text color="gray.400" fontSize="sm">
            認証状態:{' '}
            {JSON.stringify({
              isReady,
              needsUserSelection,
              hasAuthError,
              hasCurrentUser: !!currentUser,
            })}
          </Text>
          <VStack gap={2} pt={4}>
            <Button colorPalette="gray" onClick={retry} size="md">
              再試行
            </Button>
            <Button variant="ghost" onClick={() => router.push('/')} size="sm">
              トップページに戻る
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};
