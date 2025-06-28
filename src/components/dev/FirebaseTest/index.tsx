'use client';

import { Badge, Button, Card, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useFirebaseAuth } from '@/src/hooks/auth/useFirebaseAuth';
import { useGroup } from '@/src/hooks/firebase/group/useGroup';

/**
 * Firebase接続テスト用開発コンポーネント
 */
export const FirebaseTest = () => {
  const { user, loading, error, signInAnonymous, isAuthenticated } =
    useFirebaseAuth();
  const { createGroup, checkGroupExists } = useGroup();
  const [testResults, setTestResults] = useState<string[]>([]);

  const addTestResult = (message: string) => {
    setTestResults((prev) => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${message}`,
    ]);
  };

  const testAnonymousAuth = async () => {
    try {
      addTestResult('🔐 匿名認証テスト開始...');
      await signInAnonymous();
      addTestResult('✅ 匿名認証成功');
    } catch (err) {
      addTestResult(`❌ 匿名認証失敗: ${err}`);
    }
  };

  const testFirestore = async () => {
    try {
      addTestResult('📊 Firestore書き込みテスト開始...');
      const groupId = await createGroup('テストルーム');
      addTestResult(`✅ グループ作成成功: ${groupId}`);

      const exists = await checkGroupExists(groupId);
      addTestResult(`✅ グループ存在確認: ${exists ? '存在' : '不存在'}`);
    } catch (err) {
      addTestResult(`❌ Firestore操作失敗: ${err}`);
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  if (loading) {
    return (
      <Card.Root>
        <Card.Body>
          <Text>Firebase接続中...</Text>
        </Card.Body>
      </Card.Root>
    );
  }

  return (
    <Card.Root>
      <Card.Body>
        <VStack gap={4} align="stretch">
          <Text fontSize="lg" fontWeight="bold">
            🧪 Firebase接続テスト
          </Text>

          {/* 認証状態 */}
          <Text>
            認証状態:{' '}
            <Badge colorScheme={isAuthenticated ? 'green' : 'red'}>
              {isAuthenticated
                ? `認証済み (${user?.uid?.slice(0, 8)}...)`
                : '未認証'}
            </Badge>
          </Text>

          {/* エラー表示 */}
          {error && (
            <Text color="red.500" fontSize="sm">
              エラー: {error.message}
            </Text>
          )}

          {/* テストボタン */}
          <VStack gap={2}>
            <Button
              bg="blue.400"
              color="white"
              onClick={testAnonymousAuth}
              disabled={isAuthenticated}
              _hover={{
                bg: 'blue.500',
              }}
              _active={{
                bg: 'blue.600',
              }}
            >
              匿名認証テスト
            </Button>

            <Button
              bg="green.400"
              color="white"
              onClick={testFirestore}
              disabled={!isAuthenticated}
              _hover={{
                bg: 'green.500',
              }}
              _active={{
                bg: 'green.600',
              }}
            >
              Firestoreテスト
            </Button>

            <Button
              bg="gray.400"
              color="white"
              onClick={clearResults}
              size="sm"
              _hover={{
                bg: 'gray.500',
              }}
              _active={{
                bg: 'gray.600',
              }}
            >
              結果クリア
            </Button>
          </VStack>

          {/* テスト結果 */}
          {testResults.length > 0 && (
            <VStack gap={1} align="stretch">
              <Text fontSize="md" fontWeight="bold">
                テスト結果:
              </Text>
              {testResults.map((result) => (
                <Text
                  key={`test-result-${result}`}
                  fontSize="sm"
                  fontFamily="mono"
                >
                  {result}
                </Text>
              ))}
            </VStack>
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
