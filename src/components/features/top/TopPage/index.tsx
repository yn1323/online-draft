'use client';

import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/src/components/atoms/Button';
import {
  CreateRoomModal,
  useCreateRoomModal,
} from '@/src/components/features/top/CreateRoomModal';
import { useToaster } from '@/src/components/ui/toaster';
import { extractRoomId } from '@/src/helpers/utils/url';
import { useFirebaseAuth } from '@/src/hooks/auth/useFirebaseAuth';
import { useGroup } from '@/src/hooks/firebase/group/useGroup';

import { DifferentiationSection } from './sections/DifferentiationSection';
import { FAQSection } from './sections/FAQSection';
import { FooterCTASection } from './sections/FooterCTASection';
import { HeroSection } from './sections/HeroSection';
import { HowToUseSection } from './sections/HowToUseSection';
import { ServiceSection } from './sections/ServiceSection';
import { UseCaseSection } from './sections/UseCaseSection';

/**
 * トップページコンポーネント
 * 7セクション構成のランディングページ
 */
export const TopPage = () => {
  // ルーム作成モーダル管理
  const { openModal, modalProps } = useCreateRoomModal();

  // ルーム参加中フラグ
  const [isJoining, setIsJoining] = useState(false);

  // Firebase操作
  const { createGroup, checkGroupExists } = useGroup();

  // Firebase認証
  const { signInAnonymous, isAuthenticated } = useFirebaseAuth();

  // ページナビゲーション
  const router = useRouter();

  // トースト表示
  const { successToast, errorToast } = useToaster();

  // ルーム作成処理
  const handleCreateRoom = async (roomName: string) => {
    try {
      // 認証チェック & 自動ログイン
      if (!isAuthenticated) {
        await signInAnonymous();
      }

      const groupId = await createGroup(roomName);
      router.push(`/lobby/${groupId}`);
      successToast('ルームを作成しました');
    } catch (error) {
      console.error('ルーム作成エラー:', error);
      errorToast('ルーム作成に失敗しました');
    }
  };

  // ルーム参加処理（HeroSectionから呼ばれる）
  const handleJoinRoom = async (roomInput: string) => {
    if (!roomInput.trim()) {
      errorToast('ルームURLまたはIDを入力してください');
      return;
    }
    setIsJoining(true);

    try {
      // 認証チェック & 自動ログイン
      if (!isAuthenticated) {
        await signInAnonymous();
      }

      // 入力値からルームIDを抽出
      const roomId = extractRoomId(roomInput);
      if (!roomId) {
        errorToast('正しいルームURLまたはIDを入力してください');
        return;
      }

      // ルーム存在確認
      const exists = await checkGroupExists(roomId);
      if (!exists) {
        errorToast('指定されたルームが見つかりません');
        return;
      }

      // ロビーに遷移
      router.push(`/lobby/${roomId}`);
      successToast('ルームに参加します');
    } catch (error) {
      console.error('ルーム参加エラー:', error);
      errorToast('ルーム参加に失敗しました');
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <>
      {/* Section 1: ヒーローエリア */}
      <HeroSection
        onCreateRoom={openModal}
        onJoinRoom={handleJoinRoom}
        isJoining={isJoining}
      />

      {/* Section 2: サービス説明 */}
      <ServiceSection />

      {/* Section 3: 差別化ポイント */}
      <DifferentiationSection />

      {/* Section 4: 使い方 */}
      <HowToUseSection onCreateRoom={openModal} />

      {/* Section 5: ユースケース */}
      <UseCaseSection />

      {/* Section 6: FAQ */}
      <FAQSection />

      {/* Section 7: フッターCTA */}
      <FooterCTASection onCreateRoom={openModal} />

      {/* SP固定CTA */}
      <Box
        display={['block', 'none']}
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        p={4}
        bg="white"
        boxShadow="0 -2px 10px rgba(0,0,0,0.1)"
        zIndex={100}
      >
        <Button variant="primary" size="lg" width="full" onClick={openModal}>
          ルームを作成する
        </Button>
      </Box>

      {/* ルーム作成モーダル */}
      <CreateRoomModal {...modalProps} onCreateRoom={handleCreateRoom} />
    </>
  );
};
