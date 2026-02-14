'use client';

import { Button } from '@/src/components/atoms/Button';
import { Loading } from '@/src/components/atoms/Loading';
import { useToaster } from '@/src/components/ui/toaster';
import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { generateRandomId } from '@/src/helpers/utils/firebase';
import { useFirebaseAuth } from '@/src/hooks/auth/useFirebaseAuth';
import type { GroupDataType } from '@/src/hooks/firebase/group/useGroup';
import { useRealtimeGroup } from '@/src/hooks/firebase/group/useRealtimeGroup';
import { useRealtimeUsers } from '@/src/hooks/firebase/user/useRealtimeUsers';
import { type UserDataType, useUser } from '@/src/hooks/firebase/user/useUser';
import { Box, Container, HStack, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Link, useRouter } from '@/src/i18n/navigation';
import { LanguageSwitcher } from '@/src/components/features/common/LanguageSwitcher';
import { AvatarSelectionModal } from '../AvatarSelectionModal';
import { ParticipantsList } from '../ParticipantsList';
import { RoomInfo } from '../RoomInfo';

type LobbyPageProps = {
  groupId: string;
};

type LobbyPageInnerProps = {
  group: GroupDataType | null;
  users: UserDataType[] | null;
  roomUrl: string;
  isAvatarModalOpen: boolean;
  usedAvatars: string[];
  onJoinClick: () => void;
  onUserSelect: (userId: string) => void;
  onAvatarModalClose: () => void;
  onJoinConfirm: (userData: { name: string; avatar: string }) => void;
};

/**
 * ロビー画面Innerコンポーネント（Presenter）
 * UI描画のみを担当、propsでデータとハンドラーを受け取る
 * Firebaseやビジネスロジックには依存しない純粋なUIコンポーネント
 */
export const LobbyPageInner = ({
  group,
  users,
  roomUrl,
  isAvatarModalOpen,
  usedAvatars,
  onJoinClick,
  onUserSelect,
  onAvatarModalClose,
  onJoinConfirm,
}: LobbyPageInnerProps) => {
  const t = useTranslations('lobby');

  // グループが存在しない場合
  if (!group) {
    return (
      <Box bg="gray.50" minH="100vh" py={[4, 8]}>
        <Container maxW="container.lg">
          <VStack gap={6}>
            <Text fontSize={['xl', '2xl']} fontWeight="bold" color="red.600">
              {t('page.notFound')}
            </Text>
            <Text color="gray.600">{t('page.notFoundDescription')}</Text>
          </VStack>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" py={[4, 8]}>
      <Container maxW="container.lg">
        <VStack gap={6} w="full">
          {/* ヘッダー */}
          <HStack w="full" justify="space-between" align="center">
            <Text fontSize={['xl', '2xl']} fontWeight="bold" color="gray.800">
              {t('page.title')}
            </Text>
            <LanguageSwitcher />
          </HStack>

          {/* ルーム情報カード */}
          <RoomInfo group={group} roomUrl={roomUrl} />

          {/* 参加者一覧カード */}
          <ParticipantsList
            users={users || []}
            onJoinClick={onJoinClick}
            onUserSelect={onUserSelect}
          />

          {/* 退室ボタン */}
          <Link href="/">
            <Button variant="outline" size="sm">
              {t('page.leaveRoom')}
            </Button>
          </Link>
        </VStack>
      </Container>

      {/* アバター選択モーダル */}
      <AvatarSelectionModal
        isOpen={isAvatarModalOpen}
        onClose={onAvatarModalClose}
        onConfirm={onJoinConfirm}
        usedAvatars={usedAvatars}
      />
    </Box>
  );
};

/**
 * ロビー画面コンポーネント（Container）
 * ロジック・データ取得・認証のみを担当
 * LobbyPageInnerにpropsを渡すのみ
 */
export const LobbyPage = ({ groupId }: LobbyPageProps) => {
  const t = useTranslations('lobby');

  // 認証状態管理
  const {
    isAuthenticated,
    signInAnonymous,
    loading: authLoading,
  } = useFirebaseAuth();

  // Firebase hooks
  const { group, loading: groupLoading } = useRealtimeGroup(groupId);
  const { users, loading: usersLoading } = useRealtimeUsers(groupId);
  const { createUser } = useUser();

  // Next.js router
  const router = useRouter();

  // UI状態管理
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  // トースト表示
  const { errorToast, successToast } = useToaster();

  // 認証チェック（Storybook環境では無効化）
  useEffect(() => {
    if (isStorybookEnvironment()) {
      return;
    }

    const checkAuth = async () => {
      if (!isAuthenticated && !authLoading) {
        try {
          await signInAnonymous();
          // 認証成功 → 現在のページをリロード
          window.location.reload();
        } catch (error) {
          console.error(t('toast.authError'), error);
          errorToast(t('toast.authFailed'));
        }
      }
    };
    checkAuth();
  }, [isAuthenticated, authLoading, signInAnonymous, errorToast, t]);

  // 現在のページURL（実際のURLを取得）
  const roomUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : `https://example.com/lobby/${groupId}`;

  // ローディング状態（認証も含める、ただしStorybook環境は除く）
  const isLoading =
    groupLoading || usersLoading || (!isStorybookEnvironment() && authLoading);

  // 使用中のアバター番号を取得
  const usedAvatars = users?.map((user) => user.avatar) || [];

  // 新規参加確定時の処理
  const handleJoinConfirm = async (userData: {
    name: string;
    avatar: string;
  }) => {
    // ランダムIDを生成
    const userId = generateRandomId();

    try {
      // Firestoreにユーザー情報を保存
      await createUser(groupId, userData.name, userData.avatar, userId);

      // sessionStorageに保存
      sessionStorage.setItem('onlinedraft_user_id', userId);

      // ドラフト画面に遷移
      router.push(`/draft/${groupId}`);

      // 成功メッセージ
      successToast(t('toast.joined'));
    } catch (error) {
      console.error(t('toast.joinError'), error);
      errorToast(
        error instanceof Error ? error.message : t('toast.joinFailed'),
      );
    }
  };

  // 既存ユーザー選択時の処理
  const handleUserSelect = (userId: string) => {
    // sessionStorageに保存
    sessionStorage.setItem('onlinedraft_user_id', userId);

    // ドラフト画面に遷移
    router.push(`/draft/${groupId}`);

    // 成功メッセージ
    successToast(t('toast.joined'));
  };

  // ローディング中の表示
  if (isLoading || !isAuthenticated || authLoading || !group) {
    return (
      <Box bg="gray.50" minH="100vh" py={[4, 8]}>
        <Container maxW="container.lg">
          <Loading message={t('loading')} />
        </Container>
      </Box>
    );
  }

  // LobbyPageInnerに全ての状態とハンドラーを渡す
  return (
    <LobbyPageInner
      group={group}
      users={users}
      roomUrl={roomUrl}
      isAvatarModalOpen={isAvatarModalOpen}
      usedAvatars={usedAvatars}
      onJoinClick={() => setIsAvatarModalOpen(true)}
      onUserSelect={handleUserSelect}
      onAvatarModalClose={() => setIsAvatarModalOpen(false)}
      onJoinConfirm={handleJoinConfirm}
    />
  );
};
