import { Container, Heading, VStack } from '@chakra-ui/react';
import { AuthComponent } from '@/src/components/features/auth';

export default function AuthTestPage() {
  return (
    <Container maxW="container.md" py={8}>
      <VStack gap={6} align="stretch">
        <Heading size="lg" textAlign="center">
          🔐 認証テストページ
        </Heading>
        
        <AuthComponent />
      </VStack>
    </Container>
  );
}