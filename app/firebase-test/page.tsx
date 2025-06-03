"use client";

import { useState } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  Code
} from '@chakra-ui/react';
import { testFirebaseConnection } from '@/src/lib/firebase-test';

export default function FirebaseTestPage() {
  const [isTestingAuth, setIsTestingAuth] = useState(false);
  const [isTestingFirestore, setIsTestingFirestore] = useState(false);
  const [testResults, setTestResults] = useState<{
    auth: boolean;
    firestore: boolean;
    error?: string;
  } | null>(null);

  const runTest = async () => {
    setIsTestingAuth(true);
    setIsTestingFirestore(true);
    setTestResults(null);

    try {
      const results = await testFirebaseConnection();
      setTestResults(results);
    } catch (error) {
      setTestResults({
        auth: false,
        firestore: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsTestingAuth(false);
      setIsTestingFirestore(false);
    }
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack gap={6} align="stretch">
        <Box textAlign="center">
          <Heading size="lg" mb={2}>
            🔥 Firebase接続テスト
          </Heading>
          <Text color="gray.600" _dark={{ color: 'gray.400' }}>
            Firebase認証とFirestoreの接続を確認します
          </Text>
        </Box>

        <Button
          colorScheme="orange"
          size="lg"
          onClick={runTest}
          loading={isTestingAuth || isTestingFirestore}
          disabled={isTestingAuth || isTestingFirestore}
        >
          🚀 接続テスト実行
        </Button>

        {testResults && (
          <VStack gap={4} align="stretch">
            <Box
              p={4}
              borderRadius="md"
              bg={testResults.auth ? "green.50" : "red.50"}
              border="1px solid"
              borderColor={testResults.auth ? "green.200" : "red.200"}
              _dark={{ 
                bg: testResults.auth ? "green.900" : "red.900",
                borderColor: testResults.auth ? "green.700" : "red.700" 
              }}
            >
              <Text fontWeight="bold" color={testResults.auth ? "green.800" : "red.800"} _dark={{ color: testResults.auth ? "green.200" : "red.200" }}>
                Firebase認証: {testResults.auth ? "✅ 成功" : "❌ 失敗"}
              </Text>
            </Box>

            <Box
              p={4}
              borderRadius="md"
              bg={testResults.firestore ? "green.50" : "red.50"}
              border="1px solid"
              borderColor={testResults.firestore ? "green.200" : "red.200"}
              _dark={{ 
                bg: testResults.firestore ? "green.900" : "red.900",
                borderColor: testResults.firestore ? "green.700" : "red.700" 
              }}
            >
              <Text fontWeight="bold" color={testResults.firestore ? "green.800" : "red.800"} _dark={{ color: testResults.firestore ? "green.200" : "red.200" }}>
                Firestore: {testResults.firestore ? "✅ 成功" : "❌ 失敗"}
              </Text>
            </Box>

            {testResults.error && (
              <Box
                p={4}
                borderRadius="md"
                bg="red.50"
                border="1px solid"
                borderColor="red.200"
                _dark={{ 
                  bg: "red.900",
                  borderColor: "red.700" 
                }}
              >
                <Text fontWeight="bold" color="red.800" _dark={{ color: "red.200" }} mb={2}>
                  エラー詳細:
                </Text>
                <Code fontSize="sm" p={2} borderRadius="md" bg="red.100" _dark={{ bg: 'red.800' }}>
                  {testResults.error}
                </Code>
              </Box>
            )}

            {testResults.auth && testResults.firestore && !testResults.error && (
              <Box
                p={4}
                borderRadius="md"
                bg="green.50"
                border="1px solid"
                borderColor="green.200"
                _dark={{ 
                  bg: "green.900",
                  borderColor: "green.700" 
                }}
              >
                <Text fontWeight="bold" color="green.800" _dark={{ color: "green.200" }} mb={1}>
                  🎉 Firebase統合準備完了！
                </Text>
                <Text fontSize="sm" color="green.700" _dark={{ color: "green.300" }}>
                  認証とFirestoreの両方が正常に動作しています
                </Text>
              </Box>
            )}
          </VStack>
        )}

        <Box fontSize="sm" color="gray.500" textAlign="center">
          ブラウザのデベロッパーツールのコンソールでも詳細ログを確認できます
        </Box>
      </VStack>
    </Container>
  );
}