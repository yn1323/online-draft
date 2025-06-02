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
        // よりユーザーフレンドリーなエラーメッセージ
        const friendlyMessage = result.error?.includes('見つから') 
          ? '参加コードが見つかりませんでした。主催者に確認してみてください。'
          : '参加できませんでした。参加コードを確認してください。';
        alert(friendlyMessage);
      }
    } catch (error) {
      console.error('参加エラー:', error);
      alert('接続に問題が発生しました。しばらく待ってから再度お試しください。');
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
          <Box
            p={6}
            bg="blue.50"
            _dark={{ bg: 'gray.800', borderColor: 'blue.400' }}
            borderRadius="2xl"
            border="2px solid"
            borderColor="blue.200"
          >
            <VStack gap={6}>
              {/* ヘッダー */}
              <VStack gap={3} textAlign="center">
                <Box
                  p={3}
                  bg="blue.500"
                  borderRadius="full"
                  color="white"
                  shadow="lg"
                >
                  <IoEnter size={28} />
                </Box>
                <VStack gap={1}>
                  <Heading size={{ base: 'lg', md: 'xl' }} color="blue.700" _dark={{ color: 'blue.200' }}>
                    参加コードを入力
                  </Heading>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color="blue.600" _dark={{ color: 'blue.100' }}>
                    主催者からもらったコードを入力してください
                  </Text>
                </VStack>
              </VStack>

              {/* 入力フィールド */}
              <Box w="full">
                <VStack gap={3}>
                  <Field 
                    label="参加コード" 
                    helperText="例: ABC123 や招待リンクなど"
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
                      _dark={{ 
                        bg: 'gray.700', 
                        color: 'white',
                        borderColor: meetingInput.length > 0 && meetingInput.length < 3 ? "red.400" : "blue.300"
                      }}
                      border="2px solid"
                      borderColor={meetingInput.length > 0 && meetingInput.length < 3 ? "red.200" : "blue.200"}
                      _focus={{ borderColor: 'blue.500', shadow: 'lg' }}
                      _placeholder={{ color: 'gray.400', _dark: { color: 'gray.300' } }}
                    />
                  </Field>
                  
                  {/* 親切なヒント */}
                  {meetingInput.length === 0 && (
                    <Box
                      p={3}
                      bg="blue.25"
                      _dark={{ bg: 'blue.900', borderColor: 'blue.400' }}
                      borderRadius="md"
                      w="full"
                      border="1px solid"
                      borderColor="blue.100"
                    >
                      <Text fontSize="sm" color="gray.600" _dark={{ color: 'blue.100' }} textAlign="center">
                        💡 主催者から「ABC123」のようなコードか、招待リンクをもらいましたか？
                      </Text>
                    </Box>
                  )}
                </VStack>
              </Box>

              {/* 参加ボタン */}
              <Button
                colorPalette="blue"
                size="lg"
                width="full"
                height={{ base: "56px", md: "60px" }}
                disabled={!meetingInput.trim() || isLoading || (meetingInput.length > 0 && meetingInput.length < 3)}
                loading={isLoading}
                onClick={handleJoin}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="bold"
                borderRadius="xl"
                shadow="lg"
                transition="all 0.2s"
                _hover={{ 
                  transform: 'translateY(-2px)', 
                  shadow: 'xl',
                  bg: 'blue.600' 
                }}
                _active={{ transform: 'translateY(0)' }}
              >
                <HStack gap={2}>
                  <IoEnter size={20} />
                  <Text>参加する</Text>
                </HStack>
              </Button>
            </VStack>
          </Box>

          {/* 最近参加した会議 */}
          <Box>
            <HStack gap={2} mb={4}>
              <MdHistory size={20} />
              <Heading size="lg" color="gray.700" _dark={{ color: 'gray.300' }}>
                🕒 前回の続きから
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
                    _hover={{ bg: 'gray.50', _dark: { bg: 'gray.700' } }}
                    borderRadius="lg"
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
                <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.300' }}>
                  まだ参加履歴がありません
                </Text>
                <Text fontSize="xs" color="gray.400" _dark={{ color: 'gray.400' }} mt={1}>
                  最初の会議に参加すると、ここに履歴が表示されます
                </Text>
              </Box>
            )}
          </Box>

          {/* 困った時のヒント */}
          <Box
            p={4}
            bg="green.50"
            _dark={{ bg: 'green.900', borderColor: 'green.300' }}
            borderRadius="lg"
            borderLeft="4px solid"
            borderColor="green.500"
          >
            <VStack gap={2} align="start">
              <Text fontSize="sm" fontWeight="semibold" color="green.700" _dark={{ color: 'green.200' }}>
                🤝 困った時は
              </Text>
              <Text fontSize="sm" color="green.600" _dark={{ color: 'green.100' }}>
                • 主催者から「ABC123」のようなコードをもらってください
              </Text>
              <Text fontSize="sm" color="green.600" _dark={{ color: 'green.100' }}>
                • 招待リンクをもらった場合は、そのままコピー＆ペーストでOKです
              </Text>
              <Text fontSize="sm" color="green.600" _dark={{ color: 'green.100' }}>
                • 何も届いていない場合は、主催者に「参加コードください」と聞いてみましょう
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
