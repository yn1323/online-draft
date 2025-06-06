'use client';

import { toaster } from '@/src/components/ui/toaster';
import { useAuth } from '@/src/hooks/auth/useAuth';
import { auth } from '@/src/lib/firebase';
import { createDraftGroup } from '@/src/services/firestore/draftGroups';
import { Box, Container, VStack } from '@chakra-ui/react';
import { signInAnonymously } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import HeroSection from '../HeroSection';
import HowToSection from '../HowToSection';
import MainActionsSection from '../MainActionsSection';

export const TopPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleCreateDraft = async () => {
    setIsLoading(true);

    try {
      console.log('🔄 ドラフト作成開始...');

      // 認証チェック・自動ログイン
      if (!isAuthenticated) {
        console.log('🔐 認証されていないため、自動ログイン実行...');
        await signInAnonymously(auth);
        console.log('✅ 自動ログイン完了');
      }

      // Firestoreでグループ作成
      const result = await createDraftGroup({
        groupName: 'オンラインドラフト会議',
      });

      console.log('✅ グループ作成成功:', result);

      // 成功通知
      toaster.create({
        title: 'ドラフト作成完了！',
        description: `グループID: ${result.groupId}`,
        type: 'success',
        duration: 3000,
      });

      // ロビーページに遷移
      router.push(`/lobby/${result.groupId}`);
    } catch (error) {
      console.error('❌ ドラフト作成エラー:', error);

      toaster.create({
        title: 'ドラフト作成エラー',
        description:
          error instanceof Error ? error.message : '不明なエラーが発生しました',
        type: 'error',
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box minHeight="100vh" bg="bg">
      <Container maxW="container.lg" py={8}>
        <VStack gap={8} align="stretch">
          {/* ヒーローセクション */}
          <HeroSection />

          {/* メインアクション */}
          <MainActionsSection
            onCreateDraft={handleCreateDraft}
            isLoading={isLoading}
          />

          {/* 使い方説明 */}
          <HowToSection />
        </VStack>
      </Container>
    </Box>
  );
};
