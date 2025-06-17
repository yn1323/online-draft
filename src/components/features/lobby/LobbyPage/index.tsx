'use client';

import { Loading } from '@/src/components/atoms/Loading';
import { useToaster } from '@/src/components/ui/toaster';
import { isStorybookEnvironment } from '@/src/helpers/utils/env';
import { useFirebaseAuth } from '@/src/hooks/auth/useFirebaseAuth';
import type { GroupDataType } from '@/src/hooks/firebase/group/useGroup';
import { useRealtimeGroup } from '@/src/hooks/firebase/group/useRealtimeGroup';
import type { UserDataType } from '@/src/hooks/firebase/user/useUser';
import { useRealtimeUsers } from '@/src/hooks/firebase/user/useRealtimeUsers';
import { Box, Container, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AvatarSelectionModal } from '../AvatarSelectionModal';
import { LobbyActions } from '../LobbyActions';
import { ParticipantsList } from '../ParticipantsList';
import { RoomInfo } from '../RoomInfo';

type LobbyPageProps = {
  groupId: string;
};

type LobbyPageInnerProps = {
  group: GroupDataType | null;
  users: UserDataType[] | null;
  roomUrl: string;
  loading: boolean;
  isAvatarModalOpen: boolean;
  usedAvatars: string[];
  onJoinClick: () => void;
  onLeaveRoom: () => void;
  onAvatarModalClose: () => void;
  onJoinConfirm: (userData: { name: string; avatar: string }) => void;
  loadingMessage?: string;
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
  loading,
  isAvatarModalOpen,
  usedAvatars,
  onJoinClick,
  onLeaveRoom,
  onAvatarModalClose,
  onJoinConfirm,
  loadingMessage = 'ルーム情報を読み込み中...',
}: LobbyPageInnerProps) => {
  // ローディング中の表示
  if (loading) {
    return (
      <Box bg="gray.50" minH="100vh" py={[4, 8]}>
        <Container maxW="container.lg">
          <Loading message={loadingMessage} />
        </Container>
      </Box>
    );
  }

  // グループが存在しない場合
  if (!group) {
    return (
      <Box bg="gray.50" minH="100vh" py={[4, 8]}>
        <Container maxW="container.lg">
          <VStack gap={6}>
            <Text fontSize={['xl', '2xl']} fontWeight="bold" color="red.600">
              ルームが見つかりません
            </Text>
            <Text color="gray.600">
              指定されたルームが存在しないか、削除されている可能性があります。
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" py={[4, 8]}>
      <Container maxW="container.lg">
        <VStack gap={6}>
          {/* ヘッダー */}
          <Text fontSize={['xl', '2xl']} fontWeight="bold" color="gray.800">
            ドラフトルーム
          </Text>

          {/* ルーム情報カード */}
          <RoomInfo group={group} roomUrl={roomUrl} />

          {/* 参加者一覧カード */}
          <ParticipantsList users={users || []} onJoinClick={onJoinClick} />

          {/* アクションボタン */}
          <LobbyActions onLeaveRoom={onLeaveRoom} />
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
  // 認証状態管理
  const {
    isAuthenticated,
    signInAnonymous,
    loading: authLoading,
  } = useFirebaseAuth();

  // Firebase hooks
  const {
    group,
    loading: groupLoading,
    error: groupError,
  } = useRealtimeGroup(groupId);
  const {
    users,
    loading: usersLoading,
    error: usersError,
  } = useRealtimeUsers(groupId);

  // UI状態管理
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  // トースト表示
  const { errorToast } = useToaster();

  // 認証チェック（Storybook環境では無効化）
  useEffect(() => {
    if (isStorybookEnvironment()) {
      return;
    }

    const checkAuth = async () => {
      if (!isAuthenticated && !authLoading) {
        try {
          await signInAnonymous();
        } catch (error) {
          console.error('認証エラー:', error);
          errorToast('認証に失敗しました');
        }
      }
    };
    checkAuth();
  }, [isAuthenticated, authLoading, signInAnonymous, errorToast]);

  // 現在のページURL（実際のURLを取得）
  const roomUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : `https://example.com/lobby/${groupId}`;

  // ローディング状態（認証も含める、ただしStorybook環境は除く）
  const isLoading =
    groupLoading ||
    usersLoading ||
    (!isStorybookEnvironment() && authLoading);

  // エラーハンドリング
  if (groupError || usersError) {
    console.error('Firebase Error:', { groupError, usersError });
    errorToast('データの取得に失敗しました');
  }

  // 使用中のアバター番号を取得
  const usedAvatars = users?.map((user) => user.avatar) || [];

  // 新規参加確定時の処理
  const handleJoinConfirm = (userData: { name: string; avatar: string }) => {
    console.log('新規参加:', userData);
    // TODO: Firestoreにユーザー追加の実装
    setIsAvatarModalOpen(false);
  };

  // 退室処理
  const handleLeaveRoom = () => {
    console.log('退室処理');
    // TODO: 退室処理の実装
  };

  // ローディングメッセージの決定
  const loadingMessage =
    !isStorybookEnvironment() && authLoading && !isAuthenticated
      ? '認証処理中...'
      : 'ルーム情報を読み込み中...';

  // LobbyPageInnerに全ての状態とハンドラーを渡す
  return (
    <LobbyPageInner
      group={group}
      users={users}
      roomUrl={roomUrl}
      loading={isLoading}
      isAvatarModalOpen={isAvatarModalOpen}
      usedAvatars={usedAvatars}
      onJoinClick={() => setIsAvatarModalOpen(true)}
      onLeaveRoom={handleLeaveRoom}
      onAvatarModalClose={() => setIsAvatarModalOpen(false)}
      onJoinConfirm={handleJoinConfirm}
      loadingMessage={loadingMessage}
    />
  );
};