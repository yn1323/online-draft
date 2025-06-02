'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoEnter } from 'react-icons/io5';
import { MdHistory, MdLink, MdNumbers } from 'react-icons/md';

import { Field } from '@/src/components/ui/field';
import { joinMeeting } from './actions';
// Storybook用の条件分岐（将来のStorybookモック対応用）
const isStorybook = typeof window !== 'undefined' && window.location?.href?.includes('localhost:6006');
if (isStorybook) {
  // Storybookの場合はmock-actionsを使用予定
  // Note: 現在はServer Actionsを使用しているため、一時的にコメントアウト
  // const { joinMeeting: mockJoinMeeting } = require('./mock-actions');
}

// 仮の履歴データ（後でlocalStorageやAPIから取得）
const RECENT_MEETINGS = [
  { id: 'abc123', name: '今日のランチ会議', lastJoined: '2時間前' },
  { id: 'def456', name: '映画選び会議', lastJoined: '1日前' },
  { id: 'ghi789', name: 'チーム会議', lastJoined: '3日前' },
];

export const JoinPage = () => {
  const [meetingId, setMeetingId] = useState('');
  const [meetingUrl, setMeetingUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinById = async () => {
    if (!meetingId.trim()) {
      return;
    }
    
    setIsLoading(true);
    try {
      const result = await joinMeeting(meetingId.trim());
      if (result.success) {
        window.location.href = `/entry/${result.meetingId}`;
      } else {
        alert(result.error || '会議が見つかりませんでした');
      }
    } catch (error) {
      console.error('参加エラー:', error);
      alert('参加できませんでした。IDを確認してください。');
    }
    setIsLoading(false);
  };

  const handleJoinByUrl = async () => {
    if (!meetingUrl.trim()) {
      return;
    }
    
    setIsLoading(true);
    try {
      // URLから会議IDを抽出
      const urlMatch = meetingUrl.match(/\/entry\/([a-zA-Z0-9]+)/);
      if (!urlMatch) {
        alert('正しい会議URLを入力してください');
        setIsLoading(false);
        return;
      }
      
      const extractedId = urlMatch[1];
      const result = await joinMeeting(extractedId);
      if (result.success) {
        window.location.href = `/entry/${result.meetingId}`;
      } else {
        alert(result.error || '会議が見つかりませんでした');
      }
    } catch (error) {
      console.error('参加エラー:', error);
      alert('参加できませんでした。URLを確認してください。');
    }
    setIsLoading(false);
  };

  const handleJoinRecent = async (id: string) => {
    setIsLoading(true);
    try {
      const result = await joinMeeting(id);
      if (result.success) {
        window.location.href = `/entry/${result.meetingId}`;
      } else {
        alert(result.error || '会議が見つかりませんでした');
      }
    } catch (error) {
      console.error('参加エラー:', error);
      alert('参加できませんでした。');
    }
    setIsLoading(false);
  };

  return (
    <Box minHeight="100vh" bg="bg">
      <Container maxW="container.md" py={8}>
        <VStack gap={8} align="stretch">
          {/* ヘッダー */}
          <VStack gap={4} textAlign="center">
            <Heading
              as="h1"
              size={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
              color="gray.800"
              _dark={{ color: 'gray.100' }}
            >
              <HStack justify="center" gap={2}>
                <IoEnter size={32} />
                <Text>会議に参加</Text>
              </HStack>
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              _dark={{ color: 'gray.400' }}
            >
              会議IDやURLで簡単に参加できます
            </Text>
          </VStack>

          {/* 最近の会議 */}
          {RECENT_MEETINGS.length > 0 && (
            <Box>
              <HStack gap={2} mb={4}>
                <MdHistory size={20} />
                <Heading size="lg" color="gray.700" _dark={{ color: 'gray.300' }}>
                  最近参加した会議
                </Heading>
              </HStack>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
                {RECENT_MEETINGS.map((meeting) => (
                  <Button
                    key={meeting.id}
                    variant="outline"
                    height="auto"
                    p={4}
                    justifyContent="flex-start"
                    textAlign="left"
                    disabled={isLoading}
                    onClick={() => handleJoinRecent(meeting.id)}
                    _hover={{ bg: 'gray.50', _dark: { bg: 'gray.700' } }}
                  >
                    <VStack gap={1} align="start" flex={1}>
                      <Text fontWeight="semibold" fontSize="sm">
                        {meeting.name}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {meeting.lastJoined}に参加
                      </Text>
                    </VStack>
                  </Button>
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* 新しい会議に参加 */}
          <Box>
            <HStack gap={2} mb={6}>
              <MdNumbers size={20} />
              <Heading size="lg" color="gray.700" _dark={{ color: 'gray.300' }}>
                新しい会議に参加
              </Heading>
            </HStack>

            <VStack gap={6}>
              {/* 会議ID入力 */}
              <Box w="full">
                <VStack gap={4}>
                  <Field label="会議ID" helperText="例: ABC123">
                    <Input
                      placeholder="会議IDを入力してください"
                      value={meetingId}
                      onChange={(e) => setMeetingId(e.target.value.toUpperCase())}
                      disabled={isLoading}
                      size="lg"
                      maxLength={20}
                    />
                  </Field>
                  <Button
                    colorPalette="blue"
                    size="lg"
                    width="full"
                    disabled={!meetingId.trim() || isLoading}
                    loading={isLoading}
                    onClick={handleJoinById}
                  >
                    IDで参加
                  </Button>
                </VStack>
              </Box>

              {/* 区切り線 */}
              <HStack w="full">
                <Box flex={1} height="1px" bg="border" />
                <Text fontSize="sm" color="gray.500" px={4}>
                  または
                </Text>
                <Box flex={1} height="1px" bg="border" />
              </HStack>

              {/* 会議URL入力 */}
              <Box w="full">
                <VStack gap={4}>
                  <Field label="会議URL" helperText="例: https://app.com/entry/ABC123">
                    <Input
                      placeholder="会議URLを貼り付けてください"
                      value={meetingUrl}
                      onChange={(e) => setMeetingUrl(e.target.value)}
                      disabled={isLoading}
                      size="lg"
                    />
                  </Field>
                  <Button
                    colorPalette="green"
                    size="lg"
                    width="full"
                    disabled={!meetingUrl.trim() || isLoading}
                    loading={isLoading}
                    onClick={handleJoinByUrl}
                  >
                    <HStack gap={2}>
                      <MdLink />
                      <Text>URLで参加</Text>
                    </HStack>
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* 説明 */}
          <Box
            p={4}
            bg="blue.50"
            _dark={{ bg: 'blue.900/20' }}
            borderRadius="lg"
            borderLeft="4px solid"
            borderColor="blue.500"
          >
            <VStack gap={2} align="start">
              <Text fontSize="sm" fontWeight="semibold" color="blue.700" _dark={{ color: 'blue.300' }}>
                💡 参加方法
              </Text>
              <Text fontSize="sm" color="blue.600" _dark={{ color: 'blue.400' }}>
                • 会議IDは主催者から教えてもらってください
              </Text>
              <Text fontSize="sm" color="blue.600" _dark={{ color: 'blue.400' }}>
                • 会議URLをお持ちの場合は、URLを貼り付けて参加できます
              </Text>
              <Text fontSize="sm" color="blue.600" _dark={{ color: 'blue.400' }}>
                • 最近参加した会議は履歴からワンクリックで参加可能です
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
