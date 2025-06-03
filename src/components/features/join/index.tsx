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
import { toaster } from '@/src/components/ui/toaster';
import { joinMeeting } from './actions';

// 仮の履歴データ（後でlocalStorageやAPIから取得）
const RECENT_MEETINGS = [
  { id: 'abc123', name: '今日のランチドラフト', lastJoined: '2時間前' },
  { id: 'def456', name: '映画選びドラフト', lastJoined: '1日前' },
  { id: 'ghi789', name: 'チームドラフト', lastJoined: '3日前' },
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
        description: '接続に問題が発生しました。しばらく待ってから再度お試しください。',
        type: 'error',
        duration: 5000,
      });
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
    }
    setIsLoading(false);
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
          <Box
            p={{ base: 4, md: 6 }}
            bg="blue.50"
            borderRadius="xl"
            border="1px solid"
            borderColor="blue.200"
            _dark={{ 
              bg: 'blue.900/20',
              borderColor: 'blue.700' 
            }}
          >
            <VStack gap={4}>
              <Field 
                label="参加コード" 
                invalid={meetingInput.length > 0 && meetingInput.length < 3}
                errorText={meetingInput.length > 0 && meetingInput.length < 3 ? "3文字以上で入力してください" : ""}
              >
                <Input
                  placeholder="ABC123 または招待リンク"
                  value={meetingInput}
                  onChange={(e) => setMeetingInput(e.target.value)}
                  disabled={isLoading}
                  size="lg"
                  bg="white"
                  borderColor={meetingInput.length > 0 && meetingInput.length < 3 ? "red.300" : "blue.300"}
                  _dark={{ 
                    bg: 'gray.800', 
                    borderColor: meetingInput.length > 0 && meetingInput.length < 3 ? "red.400" : "blue.500"
                  }}
                  _focus={{ borderColor: 'blue.500' }}
                  aria-label="参加コードまたは招待リンク"
                  aria-invalid={meetingInput.length > 0 && meetingInput.length < 3}
                  aria-describedby={meetingInput.length > 0 && meetingInput.length < 3 ? "meeting-input-error" : undefined}
                />
              </Field>
              
              <Button
                colorPalette="blue"
                size="lg"
                width="full"
                disabled={!meetingInput.trim() || isLoading || (meetingInput.length > 0 && meetingInput.length < 3)}
                loading={isLoading}
                onClick={handleJoin}
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="bold"
                _hover={{ 
                  bg: 'blue.600'
                }}
                aria-label="グループに参加する"
              >
                <HStack gap={2}>
                  <IoEnter size={18} aria-hidden="true" />
                  <Text>参加する</Text>
                </HStack>
              </Button>
            </VStack>
          </Box>

          {/* 最近参加した会議 */}
          <Box>
            <HStack gap={2} mb={4}>
              <MdHistory size={18} aria-hidden="true" />
              <Heading size="md" color="gray.700" _dark={{ color: 'gray.300' }}>
                最近参加したグループ
              </Heading>
            </HStack>
            
            {RECENT_MEETINGS.length > 0 ? (
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
                    _hover={{ bg: 'blue.50' }}
                    borderRadius="lg"
                    borderColor="gray.200"
                    _dark={{ 
                      borderColor: 'gray.700',
                      _hover: { bg: 'blue.900/20' }
                    }}
                    aria-label={`${meeting.name}に参加する`}
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
            ) : (
              <Box
                p={4}
                bg="gray.50"
                _dark={{ bg: 'gray.800' }}
                borderRadius="lg"
                textAlign="center"
              >
                <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }}>
                  まだ参加履歴がありません
                </Text>
              </Box>
            )}
          </Box>

          {/* ヒント */}
          <Box
            p={3}
            bg="blue.50"
            _dark={{ bg: 'blue.900/10' }}
            borderRadius="md"
            borderLeft="3px solid"
            borderColor="blue.400"
          >
            <Text fontSize="sm" color="blue.700" _dark={{ color: 'blue.200' }}>
              💡 主催者から参加コードか招待リンクをもらってください
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};