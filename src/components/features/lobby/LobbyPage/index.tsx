'use client';

import { Avatar } from '@/src/components/atoms/Avatar';
import { Button } from '@/src/components/atoms/Button';
import { Card } from '@/src/components/atoms/Card';
import { Loading } from '@/src/components/atoms/Loading';
import { useToaster } from '@/src/components/ui/toaster';
import { useRealtimeGroup } from '@/src/hooks/firebase/group/useRealtimeGroup';
import { useRealtimeUsers } from '@/src/hooks/firebase/user/useRealtimeUsers';
import {
  Box,
  Container,
  HStack,
  IconButton,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { LuCopy } from 'react-icons/lu';
import { AvatarSelectionModal } from '../AvatarSelectionModal';

type LobbyPageProps = {
  groupId: string;
};

/**
 * ロビー画面コンポーネント
 * 参加者待機・ドラフト開始準備画面
 */
export const LobbyPage = ({ groupId }: LobbyPageProps) => {
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

  // 現在のページURL（実際のURLを取得）
  const roomUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : `https://example.com/lobby/${groupId}`;

  // ローディング状態
  const isLoading = groupLoading || usersLoading;

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

  // ローディング中の表示
  if (isLoading) {
    return (
      <Box bg="gray.50" minH="100vh" py={[4, 8]}>
        <Container maxW="container.lg">
          <Loading message="ルーム情報を読み込み中..." />
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
          <Card variant="elevated" size="md">
            <Box w="full">
              <VStack gap={4} align="stretch">
                <Text fontSize="lg" fontWeight="bold">
                  {group.groupName}
                </Text>

                {/* URL共有エリア */}
                <Box>
                  <Text fontSize="sm" color="gray.600" mb={2}>
                    このURLを友達にシェアしよう！
                  </Text>
                  <HStack>
                    <Text
                      fontSize="sm"
                      bg="gray.100"
                      p={2}
                      borderRadius="md"
                      flex={1}
                      truncate
                    >
                      {roomUrl}
                    </Text>
                    <IconButton
                      aria-label="URLをコピー"
                      variant="solid"
                      colorPalette="blue"
                      size="sm"
                    >
                      <LuCopy />
                    </IconButton>
                  </HStack>
                </Box>

                <Text fontSize={['xs', 'sm']} color="gray.500">
                  音声通話アプリ（LINE、Discord等）を併用してお楽しみください
                </Text>
              </VStack>
            </Box>
          </Card>

          {/* 参加者一覧カード */}
          <Card variant="elevated" size="md">
            <Box w="full">
              <HStack mb={4}>
                <Text fontWeight="bold" fontSize={['md', 'lg']}>
                  参加者 ({users?.length || 0}人)
                </Text>
                <Spacer />
                <Text fontSize={['xs', 'sm']} color="gray.500">
                  最小2人から開始可能
                </Text>
              </HStack>
              <VStack gap={4} align="stretch">
                <SimpleGrid columns={[2, 3]} gap={4}>
                  {users?.map((participant) => (
                    <Box
                      key={participant.userId}
                      p={3}
                      bg="white"
                      border="2px solid"
                      borderColor="gray.200"
                      borderRadius="lg"
                      cursor="pointer"
                      transition="all 0.15s"
                      _hover={{
                        borderColor: 'blue.400',
                        transform: 'translateY(-2px)',
                        boxShadow: 'md',
                      }}
                      _active={{
                        transform: 'translateY(0)',
                        boxShadow: 'sm',
                      }}
                    >
                      <HStack gap={3}>
                        <Avatar
                          avatarNumber={participant.avatar}
                          name={participant.userName}
                          size="md"
                        />
                        <VStack align="start" gap={0}>
                          <Text fontSize={['xs', 'sm']} fontWeight="medium">
                            {participant.userName}
                          </Text>
                          <Text fontSize="xs" color="green.500">
                            {participant.isActive ? '参加中' : 'オフライン'}
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                  ))}

                  {/* 新規参加ボタン */}
                  <Box
                    p={3}
                    bg="blue.50"
                    border="2px dashed"
                    borderColor="blue.300"
                    borderRadius="lg"
                    cursor="pointer"
                    transition="all 0.15s"
                    onClick={() => setIsAvatarModalOpen(true)}
                    _hover={{
                      bg: 'blue.100',
                      borderColor: 'blue.400',
                      transform: 'translateY(-2px)',
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                  >
                    <VStack gap={2}>
                      <Box
                        w="48px"
                        h="48px"
                        borderRadius="full"
                        bg="blue.200"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text fontSize="2xl" color="blue.600">
                          ＋
                        </Text>
                      </Box>
                      <Text
                        fontSize={['xs', 'sm']}
                        color="blue.600"
                        fontWeight="medium"
                        textAlign="center"
                      >
                        参加する
                      </Text>
                    </VStack>
                  </Box>
                </SimpleGrid>

                <Box textAlign="center" pt={2}>
                  <Text
                    fontSize={['xs', 'sm']}
                    color="blue.500"
                    fontWeight="medium"
                  >
                    参加者をタップしてドラフトを開始
                  </Text>
                  <Text fontSize="xs" color="gray.500" mt={1}>
                    新規参加は「＋参加する」から・最小2人で開始可能
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Card>

          {/* 退室ボタン */}
          <Button variant="outline" size="sm">
            ルームを退出
          </Button>
        </VStack>
      </Container>

      {/* アバター選択モーダル */}
      <AvatarSelectionModal
        isOpen={isAvatarModalOpen}
        onClose={() => setIsAvatarModalOpen(false)}
        onConfirm={handleJoinConfirm}
        usedAvatars={usedAvatars}
      />
    </Box>
  );
};
