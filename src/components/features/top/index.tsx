'use client';

import { Box, Container, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { CreateDraftModal } from '../lobby/lobbyModal';
import HeroSection from './HeroSection';
import HowToSection from './HowToSection';
import MainActionsSection from './MainActionsSection';

export const TopPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateSuccess = (groupId: string) => {
    // 作成成功時は直接ページ遷移
    window.location.href = `/lobby/${groupId}`;
  };
  return (
    <Box minHeight="100vh" bg="bg">
      <Container maxW="container.lg" py={8}>
        <VStack gap={8} align="stretch">
          {/* ヒーローセクション */}
          <HeroSection />

          {/* メインアクション */}
          <MainActionsSection onCreateDraft={() => setIsModalOpen(true)} />

          {/* 使い方説明 */}
          <HowToSection />
        </VStack>
      </Container>

      {/* モーダル */}
      <CreateDraftModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateSuccess={handleCreateSuccess}
      />
    </Box>
  );
};
