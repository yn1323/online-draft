'use client';

import { Button } from '@/src/components/atoms/Button';
import { Card } from '@/src/components/atoms/Card';
import { Input } from '@/src/components/atoms/Input';
import {
  CreateRoomModal,
  useCreateRoomModal,
} from '@/src/components/features/top/CreateRoomModal';
import { useToaster } from '@/src/components/ui/toaster';
import { extractRoomId } from '@/src/helpers/utils/url';
import { useFirebaseAuth } from '@/src/hooks/auth/useFirebaseAuth';
import { useGroup } from '@/src/hooks/firebase/group/useGroup';
import {
  Box,
  Container,
  Grid,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LuTarget, LuUsers, LuZap } from 'react-icons/lu';

/**
 * トップページコンポーネント
 * URLシェアによる簡単参加と音声通話併用を前提としたシンプルなUI
 */
export const TopPage = () => {
  // ルーム作成モーダル管理
  const { openModal, modalProps } = useCreateRoomModal();

  // ルーム参加用の入力値
  const [roomInput, setRoomInput] = useState('');
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

  // ルーム参加処理
  const handleJoinRoom = async () => {
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

  // 共通のテキストスタイル
  const whiteTextStyle = {
    color: 'white',
    textAlign: 'center' as const,
  };

  return (
    <Box
      background="linear-gradient(135deg, #3182ce, #805ad5, #d53f8c)"
      minH="100vh"
      pt={16}
      pb={3}
    >
      <Container maxW="container.md">
        <VStack gap={8} align="center">
          {/* ヘッダーエリア */}
          <VStack gap={3}>
            <Heading
              size={['3xl', '4xl']}
              fontWeight="black"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              {...whiteTextStyle}
            >
              オンラインドラフト会議
            </Heading>
            <Text
              fontSize={['lg', 'xl']}
              fontWeight="medium"
              {...whiteTextStyle}
            >
              みんなでワイワイ！リアルタイムドラフト
            </Text>
          </VStack>

          {/* アクションエリア */}
          <VStack gap={6} w="full" maxW="sm">
            {/* ルーム作成ボタン */}
            <Button
              variant="primary"
              size="lg"
              width="full"
              onClick={openModal}
            >
              ルームを作成する
            </Button>

            {/* 区切り線 */}
            <HStack w="full">
              <Box flex={1} h="1px" bg="whiteAlpha.300" />
              <Text
                color="whiteAlpha.800"
                fontSize="sm"
                px={4}
                fontWeight="medium"
              >
                または
              </Text>
              <Box flex={1} h="1px" bg="whiteAlpha.300" />
            </HStack>

            {/* ルーム参加 */}
            <VStack gap={3} w="full">
              <Text
                color="whiteAlpha.900"
                fontSize={['sm', 'md']}
                fontWeight="medium"
              >
                既存のルームに参加
              </Text>
              <HStack w="full">
                <Input
                  placeholder="ルームURLまたはID"
                  size="lg"
                  value={roomInput}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRoomInput(e.target.value)
                  }
                />
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleJoinRoom}
                  loading={isJoining}
                  disabled={isJoining}
                >
                  参加
                </Button>
              </HStack>
            </VStack>
          </VStack>

          {/* 説明エリア */}
          <VStack gap={6} w="full" maxW="lg">
            {/* メインキャッチ */}
            <Card variant="elevated" size="md">
              <Text
                textAlign="center"
                color="blue.600"
                fontSize={['lg', 'xl']}
                fontWeight="bold"
              >
                みんなで同じものを狙う、白熱のドラフトゲーム！
              </Text>
            </Card>

            {/* ゲーム説明 */}
            <Grid templateColumns={['1fr', '1fr 1fr']} gap={4} w="full">
              <Card variant="elevated" size="md">
                <VStack align="center" gap={3} textAlign="center">
                  <LuTarget size={40} color="#3182ce" />
                  <Text
                    fontWeight="bold"
                    color="gray.800"
                    fontSize={['md', 'lg']}
                  >
                    被ったら取れない！
                  </Text>
                  <Text color="gray.600" fontSize={['sm', 'md']}>
                    好きなものを選ぶけど、他の人と同じだと競合で失敗
                  </Text>
                </VStack>
              </Card>

              <Card variant="elevated" size="md">
                <VStack align="center" gap={3} textAlign="center">
                  <LuUsers size={40} color="#38a169" />
                  <Text
                    fontWeight="bold"
                    color="gray.800"
                    fontSize={['md', 'lg']}
                  >
                    2-8人で同時選択
                  </Text>
                  <Text color="gray.600" fontSize={['sm', 'md']}>
                    URLシェアで簡単参加、みんなでリアルタイム
                  </Text>
                </VStack>
              </Card>

              <Card variant="elevated" size="md">
                <VStack align="center" gap={3} textAlign="center">
                  <LuZap size={40} color="#dd6b20" />
                  <Text
                    fontWeight="bold"
                    color="gray.800"
                    fontSize={['md', 'lg']}
                  >
                    1ゲーム10-15分
                  </Text>
                  <Text color="gray.600" fontSize={['sm', 'md']}>
                    サクッと楽しめる、音声通話しながらプレイ
                  </Text>
                </VStack>
              </Card>
            </Grid>

            {/* 使用例 */}
            <Box
              p={6}
              bg="whiteAlpha.200"
              borderRadius="xl"
              backdropFilter="blur(10px)"
            >
              <Text
                fontSize={['md', 'lg']}
                fontWeight="bold"
                {...whiteTextStyle}
              >
                プロ野球選手、アニメキャラ、好きな食べ物...
                <br />
                なんでもドラフトして盛り上がろう！
              </Text>
            </Box>
          </VStack>

          {/* フッター情報 */}
          <VStack gap={2} pt={8}>
            <Text color="whiteAlpha.600" fontSize="xs" textAlign="center">
              © 2025 オンラインドラフト会議
            </Text>
          </VStack>
        </VStack>
      </Container>

      {/* ルーム作成モーダル */}
      <CreateRoomModal {...modalProps} onCreateRoom={handleCreateRoom} />
    </Box>
  );
};
