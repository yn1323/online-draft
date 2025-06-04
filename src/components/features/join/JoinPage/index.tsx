'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import { toaster } from '@/src/components/ui/toaster';
import type { JoinMeetingForm } from '@/src/constants/schemas';
import { joinMeeting } from './actions';
import JoinForm from '../components/JoinForm';
import JoinHint from '../components/JoinHint';
import RecentMeetingsList from '../components/RecentMeetingsList';

// 仮の履歴データ（後でlocalStorageやAPIから取得）
const RECENT_MEETINGS = [
  { id: 'abc123', name: '今日のランチドラフト', lastJoined: '2時間前' },
  { id: 'def456', name: '映画選びドラフト', lastJoined: '1日前' },
  { id: 'ghi789', name: 'チームドラフト', lastJoined: '3日前' },
];

export const JoinPage = () => {
  const [loadingMeetingId, setLoadingMeetingId] = useState<string | null>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);

  const handleJoinMeeting = async (data: JoinMeetingForm) => {
    setIsFormLoading(true);
    try {
      let meetingId = data.meetingInput.trim();

      // URLの場合はIDを抽出（entry/lobbyの両方に対応）
      const urlMatch = data.meetingInput.match(
        /\/(entry|lobby)\/([a-zA-Z0-9]+)/,
      );
      if (urlMatch) {
        meetingId = urlMatch[2];
      }

      const result = await joinMeeting(meetingId);
      if (result.success) {
        window.location.href = `/lobby/${result.meetingId}`;
      } else {
        // トースト通知でエラー表示
        const friendlyMessage = result.error?.includes('見つから')
          ? '参加コードが見つかりませんでした。主催者に確認してみてください。'
          : '参加できませんでした。参加コードを確認してください。';

        toaster.create({
          title: '参加できませんでした',
          description: friendlyMessage,
          type: 'error',
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('参加エラー:', error);
      toaster.create({
        title: '接続エラー',
        description:
          '接続に問題が発生しました。しばらく待ってから再度お試しください。',
        type: 'error',
        duration: 5000,
      });
    } finally {
      setIsFormLoading(false);
    }
  };

  const handleJoinRecent = async (id: string) => {
    setLoadingMeetingId(id);
    try {
      const result = await joinMeeting(id);
      if (result.success) {
        window.location.href = `/lobby/${result.meetingId}`;
      } else {
        toaster.create({
          title: '参加できませんでした',
          description: 'グループが見つかりませんでした。',
          type: 'error',
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('参加エラー:', error);
      toaster.create({
        title: '参加エラー',
        description: '参加できませんでした。',
        type: 'error',
        duration: 5000,
      });
    } finally {
      setLoadingMeetingId(null);
    }
  };

  return (
    <Box minHeight="100vh" bg="bg">
      <Container maxW="container.md" py={{ base: 4, md: 8 }}>
        <VStack gap={{ base: 6, md: 8 }} align="stretch">
          {/* ヘッダー */}
          <VStack gap={2} textAlign="center">
            <Heading
              as="h1"
              size={{ base: 'lg', md: 'xl' }}
              fontWeight="bold"
              color="gray.800"
              _dark={{ color: 'gray.100' }}
            >
              グループに参加
            </Heading>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              _dark={{ color: 'gray.400' }}
            >
              参加コードやURLを入力してください
            </Text>
          </VStack>

          {/* 参加フォーム */}
          <JoinForm onSubmit={handleJoinMeeting} isLoading={isFormLoading} />

          {/* 最近参加した会議 */}
          <RecentMeetingsList
            meetings={RECENT_MEETINGS}
            onJoinMeeting={handleJoinRecent}
            loadingMeetingId={loadingMeetingId}
          />

          {/* ヒント */}
          <JoinHint />
        </VStack>
      </Container>
    </Box>
  );
};
