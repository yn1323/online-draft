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
import { MdHistory } from 'react-icons/md';

import { Field } from '@/src/components/ui/field';
import { joinMeeting } from './actions';

// 仮の履歴データ（後でlocalStorageやAPIから取得）
const RECENT_MEETINGS = [
  { id: 'abc123', name: '今日のランチ会議', lastJoined: '2時間前' },
  { id: 'def456', name: '映画選び会議', lastJoined: '1日前' },
  { id: 'ghi789', name: 'チーム会議', lastJoined: '3日前' },
];

export const JoinPage = () => {
  const [meetingInput, setMeetingInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleJoin = async () => {
    if (!meetingInput.trim()) {
      return;
    }
    
    setIsLoading(true);
    try {
      let meetingId = meetingInput.trim();
      
      // URLの場合はIDを抽出
      const urlMatch = meetingInput.match(/\/entry\/([a-zA-Z0-9]+)/);
      if (urlMatch) {
        meetingId = urlMatch[1];
      }
      
      const result = await joinMeeting(meetingId);
      if (result.success) {
        window.location.href = `/entry/${result.meetingId}`;
      } else {
        alert(result.error || '会議が見つかりませんでした');
      }
    } catch (error) {
      console.error('参加エラー:', error);
      alert('参加できませんでした。入力内容を確認してください。');
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

          {/* 新しい会議に参加 */}
          <Box>
            <HStack gap={2} mb={6}>
              <IoEnter size={20} />
              <Heading size="lg" color="gray.700" _dark={{ color: 'gray.300' }}>
                会議に参加
              </Heading>
            </HStack>

            <VStack gap={4}>
              <Field label="会議IDまたはURL" helperText="例: ABC123 または https://app.com/entry/ABC123">
                <Input
                  placeholder="会議IDまたは会議URLを入力してください"
                  value={meetingInput}
                  onChange={(e) => setMeetingInput(e.target.value)}
                  disabled={isLoading}
                  size="lg"
                />
              </Field>
              <Button
                colorPalette="blue"
                size="lg"
                width="full"
                disabled={!meetingInput.trim() || isLoading}
                loading={isLoading}
                onClick={handleJoin}
              >
                <HStack gap={2}>
                  <IoEnter />
                  <Text>参加する</Text>
                </HStack>
              </Button>
            </VStack>
          </Box>

          {/* 最近参加した会議 */}
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
                • 会議IDまたは会議URLのどちらでも参加できます
              </Text>
              <Text fontSize="sm" color="blue.600" _dark={{ color: 'blue.400' }}>
                • 会議IDは主催者から教えてもらってください（例: ABC123）
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
