'use client';

import { toaster } from '@/src/components/ui/toaster';
import { useAuth } from '@/src/hooks/auth/useAuth';
import { auth } from '@/src/lib/firebase';
import { createDraftGroup } from '@/src/services/firestore/draftGroups';
import { Box, Container, VStack } from '@chakra-ui/react';
import { signInAnonymously } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CreateDraftModal } from '../components/CreateDraftModal';
import HeroSection from '../HeroSection';
import HowToSection from '../HowToSection';
import MainActionsSection from '../MainActionsSection';

export const TopPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleCreateDraftClick = () => {
    setIsModalOpen(true);
  };

  const handleCreateDraft = async (groupName: string) => {
    setIsLoading(true);

    try {
      console.log('🔄 ドラフト作成開始...', { groupName });

      // 認証チェック・自動ログイン
      if (!isAuthenticated) {
        console.log('🔐 認証されていないため、自動ログイン実行...');
        await signInAnonymously(auth);
        console.log('✅ 自動ログイン完了');
      }

      // Firestoreでグループ作成
      const result = await createDraftGroup({
        groupName,
      });

      console.log('✅ グループ作成成功:', result);

      // 成功通知
      toaster.create({
        title: 'ドラフト作成完了！',
        description: `「${groupName}」を作成しました`,
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
      throw error; // モーダルでエラーハンドリングするためrethrow
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box minHeight="100vh" bg="bg">
        <Container maxW="container.lg" py={8}>
          <VStack gap={8} align="stretch">
            {/* ヒーローセクション */}
            <HeroSection />

            {/* メインアクション */}
            <MainActionsSection
              onCreateDraft={handleCreateDraftClick}
              isLoading={isLoading}
            />

            {/* 使い方説明 */}
            <HowToSection />
          </VStack>
        </Container>
      </Box>

      {/* ドラフト作成モーダル */}
      <CreateDraftModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateDraft={handleCreateDraft}
        isLoading={isLoading}
      />
    </>
  );
};
