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
import { CreateDraftModal } from '../components/modals/CreateDraftModal';

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
      // 認証チェック・自動ログイン
      if (!isAuthenticated) {
        await signInAnonymously(auth);
      }

      // Firestoreでグループ作成
      const result = await createDraftGroup({
        groupName,
      });

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
      setIsLoading(false);
      toaster.create({
        title: 'ドラフト作成エラー',
        description:
          error instanceof Error ? error.message : '不明なエラーが発生しました',
        type: 'error',
        duration: 5000,
      });
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
