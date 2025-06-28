import { Container, Heading, VStack } from '@chakra-ui/react';
import { FirebaseTest } from '@/src/components/dev/FirebaseTest';

export default function AuthTestPage() {
  return (
    <Container maxW="container.md" py={8}>
      <VStack gap={6} align="stretch">
        <Heading size="lg" textAlign="center">
          🔐 認証テストページ
        </Heading>

        <FirebaseTest />
      </VStack>
    </Container>
  );
}
