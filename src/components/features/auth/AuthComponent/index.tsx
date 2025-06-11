'use client';

import { useAuth } from '@/src/hooks/auth/useAuth';
import { auth } from '@/src/lib/firebase';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import type { User } from 'firebase/auth';
import { signInAnonymously, signOut } from 'firebase/auth';
import { useState } from 'react';

type AuthComponentProps = {
  onAuthSuccess?: (user: User) => void;
  onAuthError?: (error: string) => void;
};

export function AuthComponent({
  onAuthSuccess,
  onAuthError,
}: AuthComponentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { user, error: authError, isAuthenticated } = useAuth();

  const handleAnonymousLogin = async () => {
    setIsLoading(true);

    try {
      const userCredential = await signInAnonymously(auth);
      const loggedInUser = userCredential.user;

      onAuthSuccess?.(loggedInUser);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : '認証エラーが発生しました';
      onAuthError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      // ログアウトエラーをサイレントに処理
    }
  };

  return (
    <VStack gap={4} align="stretch">
      <Box textAlign="center">
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          🔐 匿名認証テスト
        </Text>
        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
          匿名ユーザーとしてログインできます
        </Text>
      </Box>

      {authError && (
        <Box
          p={4}
          borderRadius="md"
          bg="red.50"
          border="1px solid"
          borderColor="red.200"
          _dark={{
            bg: 'red.900',
            borderColor: 'red.700',
          }}
        >
          <Text color="red.800" _dark={{ color: 'red.200' }}>
            ❌ {authError}
          </Text>
        </Box>
      )}

      {isAuthenticated ? (
        <VStack gap={3}>
          <Box
            p={4}
            borderRadius="md"
            bg="green.50"
            border="1px solid"
            borderColor="green.200"
            _dark={{
              bg: 'green.900',
              borderColor: 'green.700',
            }}
          >
            <VStack align="start" gap={1}>
              <Text
                fontWeight="bold"
                color="green.800"
                _dark={{ color: 'green.200' }}
              >
                ✅ ログイン成功！
              </Text>
              <Text
                fontSize="sm"
                color="green.700"
                _dark={{ color: 'green.300' }}
              >
                UID: {user?.uid}
              </Text>
              <Text
                fontSize="sm"
                color="green.700"
                _dark={{ color: 'green.300' }}
              >
                匿名ユーザー: {user?.isAnonymous ? 'はい' : 'いいえ'}
              </Text>
            </VStack>
          </Box>

          <Button colorScheme="red" variant="outline" onClick={handleLogout}>
            🚪 ログアウト
          </Button>
        </VStack>
      ) : (
        <Button
          colorScheme="blue"
          size="lg"
          onClick={handleAnonymousLogin}
          disabled={isLoading}
        >
          {isLoading ? '🔄 ログイン中...' : '👤 匿名ログイン'}
        </Button>
      )}
    </VStack>
  );
}
