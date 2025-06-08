'use client';

import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
('../../../ui/responsive-modal');

interface DraftPageProps {
  roundNumber: number;
  totalRounds: number;
  groupName: string;
  participants: {
    id: string;
    name: string;
    avatar: string;
    status: 'thinking' | 'entered' | 'completed';
  }[];
  currentUserSelection?: string;
  onSubmitSelection: (selection: string, comment?: string) => void;
  pastRounds?: {
    roundNumber: number;
    topic: string;
    selections: {
      userId: string;
      userName: string;
      item: string;
      comment?: string;
    }[];
  }[];
  currentRoundTopic?: string;
  logCount?: number;
}

const statusEmoji = {
  thinking: '⚫', // オフライン
  entered: '✏️', // 未入力（オンライン）
  completed: '✅', // 完了
};

export const DraftPage = ({
  roundNumber,
  totalRounds,
  groupName,
  participants,
  currentUserSelection = '',
  onSubmitSelection,
  pastRounds = [],
  currentRoundTopic = '今回のお題',
}: DraftPageProps) => {
  const [selection, setSelection] = useState(currentUserSelection);
  const [comment, setComment] = useState('');
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);

  const handleSubmit = () => {
    if (selection.trim()) {
      onSubmitSelection(selection.trim(), comment.trim() || undefined);
      setIsInputModalOpen(false);
    }
  };

  const currentRoundSelections = participants.map((p) => ({
    userId: p.id,
    userName: p.name,
    avatar: p.avatar,
    status: p.status,
    item:
      p.status === 'completed'
        ? '選択済み'
        : p.status === 'entered'
          ? '入力済み'
          : '考え中',
  }));

  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="lg" fontWeight="bold">
          Round {roundNumber}/{totalRounds}
        </Text>
        <Text fontSize="md" color="gray.600">
          {groupName}
        </Text>
      </Flex>

      {/* Main Layout - Strategy First Design */}
      <Grid
        templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
        gap={8}
        minH="70vh"
      >
        {/* Left: Past Rounds Information (70%) */}
        <GridItem>
          <VStack gap={6} align="stretch">
            {/* Past Rounds Information */}
            <Box
              p={6}
              borderRadius="xl"
              bg="purple.50"
              border="2px solid"
              borderColor="purple.200"
            >
              <Text fontSize="xl" fontWeight="bold" mb={6} color="purple.700">
                📊 ラウンド ({pastRounds.length})
              </Text>
              {pastRounds.length === 0 ? (
                <Box
                  p={8}
                  textAlign="center"
                  bg="white"
                  borderRadius="lg"
                  border="1px dashed"
                  borderColor="purple.200"
                >
                  <Text fontSize="md" color="purple.500" fontWeight="medium">
                    📝 ラウンドがまだ開始されていません
                  </Text>
                  <Text fontSize="sm" color="purple.400" mt={2}>
                    ラウンドが開始されると、各ラウンドの情報が表示されます
                  </Text>
                </Box>
              ) : (
                <VStack gap={4} align="stretch">
                  {/* Current Round Row */}
                  <Grid
                    templateColumns={`60px repeat(${participants.length}, 1fr)`}
                    gap={3}
                    p={3}
                    bg="blue.100"
                    border="2px solid"
                    borderColor="blue.300"
                    borderRadius="lg"
                    alignItems="center"
                  >
                    <Flex align="center" justify="center" h="full">
                      <Text fontWeight="bold" color="blue.800" fontSize="lg">
                        {roundNumber}
                      </Text>
                    </Flex>
                    {participants.map((participant) => {
                      const currentStatus = currentRoundSelections.find(
                        (p) => p.userId === participant.id,
                      );
                      return (
                        <Box key={participant.id} textAlign="center">
                          <Box
                            textAlign="center"
                            p={2}
                            borderRadius="md"
                            bg={
                              currentStatus?.status === 'completed'
                                ? 'green.100'
                                : currentStatus?.status === 'entered'
                                  ? 'yellow.100'
                                  : 'gray.100'
                            }
                            border="1px solid"
                            borderColor={
                              currentStatus?.status === 'completed'
                                ? 'green.200'
                                : currentStatus?.status === 'entered'
                                  ? 'yellow.200'
                                  : 'gray.200'
                            }
                            minW="60px"
                          >
                            <Image
                              src={`/img/${participant.avatar}.png`}
                              alt={participant.name}
                              width="24px"
                              height="24px"
                              borderRadius="full"
                              objectFit="cover"
                              mx="auto"
                              mb={1}
                            />
                            <Text
                              fontSize="xs"
                              color={
                                currentStatus?.status === 'completed'
                                  ? 'green.700'
                                  : currentStatus?.status === 'entered'
                                    ? 'yellow.700'
                                    : 'gray.600'
                              }
                              fontWeight="medium"
                              lineHeight="1.2"
                            >
                              {participant.name}
                            </Text>
                            <Text
                              fontSize="xs"
                              color={
                                currentStatus?.status === 'completed'
                                  ? 'green.600'
                                  : currentStatus?.status === 'entered'
                                    ? 'yellow.600'
                                    : 'gray.500'
                              }
                            >
                              {currentStatus
                                ? statusEmoji[currentStatus.status]
                                : statusEmoji.thinking}
                            </Text>
                          </Box>
                        </Box>
                      );
                    })}
                  </Grid>

                  {/* Past Rounds - only show if there are past rounds */}
                  {pastRounds.length > 0 && (
                    <>
                      {/* Table Body */}
                      {pastRounds.map((round) => (
                        <Grid
                          key={round.roundNumber}
                          templateColumns={`60px repeat(${participants.length}, 1fr)`}
                          gap={3}
                          p={3}
                          bg="white"
                          border="1px solid"
                          borderColor="purple.100"
                          borderRadius="lg"
                          _hover={{ bg: 'purple.25' }}
                          alignItems="center"
                        >
                          <Flex align="center" justify="center" h="full">
                            <Text
                              fontWeight="bold"
                              color="purple.800"
                              fontSize="lg"
                            >
                              {round.roundNumber}
                            </Text>
                          </Flex>
                          {participants.map((participant) => {
                            const selection = round.selections.find(
                              (s) => s.userId === participant.id,
                            );
                            return (
                              <Box
                                key={participant.id}
                                textAlign="center"
                                px={1}
                              >
                                {selection ? (
                                  <VStack gap={0.5}>
                                    <Text
                                      fontSize="sm"
                                      fontWeight="bold"
                                      color="gray.800"
                                      lineHeight="1.2"
                                    >
                                      {selection.item}
                                    </Text>
                                    {selection.comment && (
                                      <Text
                                        fontSize="xs"
                                        color="purple.600"
                                        fontStyle="italic"
                                        lineHeight="1.2"
                                      >
                                        💬{' '}
                                        {selection.comment.length > 8
                                          ? `${selection.comment.slice(0, 8)}...`
                                          : selection.comment}
                                      </Text>
                                    )}
                                  </VStack>
                                ) : (
                                  <Text
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="medium"
                                  >
                                    未参加
                                  </Text>
                                )}
                              </Box>
                            );
                          })}
                        </Grid>
                      ))}
                    </>
                  )}
                </VStack>
              )}
            </Box>

            {/* Chat/Log Section */}
            <Box
              p={4}
              borderRadius="lg"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
            >
              <Text fontSize="lg" fontWeight="bold" mb={4} color="gray.700">
                💬 ログ・コメント
              </Text>
              <Box
                h="200px"
                overflowY="auto"
                bg="white"
                borderRadius="md"
                border="1px solid"
                borderColor="gray.200"
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <VStack gap={2}>
                  <Text fontSize="sm" color="gray.500" textAlign="center">
                    📝 コメントやログがここに表示されます
                  </Text>
                  <Text fontSize="sm" color="gray.500" textAlign="center">
                    （チャット機能は後で実装予定）
                  </Text>
                </VStack>
              </Box>
            </Box>
          </VStack>
        </GridItem>

        {/* Right: Actions Only (30%) */}
        <GridItem>
          <Box position="sticky" top={4}>
            <VStack gap={4} align="stretch">
              {/* Main Action Button */}
              <Button
                size="xl"
                colorScheme="blue"
                h="80px"
                onClick={() => setIsInputModalOpen(true)}
                fontSize="xl"
                fontWeight="bold"
                borderRadius="xl"
                boxShadow="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                _active={{ transform: 'translateY(0)' }}
              >
                🎯 選択する！
              </Button>

              {/* Current User Selection Preview */}
              {currentUserSelection && (
                <Box
                  p={4}
                  borderRadius="lg"
                  bg="green.50"
                  border="2px solid"
                  borderColor="green.300"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="green.700"
                    mb={2}
                  >
                    ✅ あなたの選択
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="green.800">
                    {currentUserSelection}
                  </Text>
                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme="green"
                    onClick={() => setIsInputModalOpen(true)}
                    mt={3}
                    w="full"
                  >
                    選択を変更
                  </Button>
                </Box>
              )}
            </VStack>
          </Box>
        </GridItem>
      </Grid>

      {/* Input Modal */}
      <ResponsiveModal
        isOpen={isInputModalOpen}
        onClose={() => setIsInputModalOpen(false)}
        title={`Round ${roundNumber}: ${currentRoundTopic}`}
        actions={{
          cancel: {
            text: 'キャンセル',
          },
          submit: {
            text: '決定',
            colorPalette: 'blue',
            disabled: !selection.trim(),
            onClick: handleSubmit,
          },
        }}
      >
        <Box w="full">
          <Text fontSize="sm" fontWeight="medium" mb={2}>
            あなたの選択
          </Text>
          <Input
            size="lg"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            placeholder="例: 鬼滅の刃"
            borderWidth={2}
            _focus={{
              borderColor: 'blue.500',
              boxShadow: '0 0 0 1px var(--chakra-colors-blue-500)',
            }}
          />
        </Box>
        <Box w="full">
          <Text fontSize="sm" fontWeight="medium" mb={2} color="purple.700">
            💬 ひとこと（任意）
          </Text>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="選択理由やコメントを記録できます...&#10;例：&#10;・最近ハマってる作品&#10;・みんなと違うものを選んでみた&#10;・前回の話題から思いついた"
            maxLength={150}
            rows={4}
            resize="none"
            borderWidth={2}
            _focus={{
              borderColor: 'purple.500',
              boxShadow: '0 0 0 1px var(--chakra-colors-purple-500)',
            }}
          />
          <Text fontSize="xs" color="gray.500" mt={1} textAlign="right">
            {comment.length}/150文字
          </Text>
        </Box>
      </ResponsiveModal>
    </Container>
  );
};
