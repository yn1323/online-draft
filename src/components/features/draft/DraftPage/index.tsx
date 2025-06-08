'use client';

import { ResponsiveModal } from '@/src/components/ui/responsive-modal';
import { RoundDetailModal } from '../RoundDetailModal';
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
  onUpdateSelections?: (roundNumber: number, selections: {
    userId: string;
    userName: string;
    item: string;
    comment?: string;
  }[]) => void;
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
  onUpdateSelections,
}: DraftPageProps) => {
  const [selection, setSelection] = useState(currentUserSelection);
  const [comment, setComment] = useState('');
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [roundDetailModal, setRoundDetailModal] = useState<{
    isOpen: boolean;
    selectedRound: number | null;
  }>({
    isOpen: false,
    selectedRound: null,
  });

  const handleSubmit = () => {
    if (selection.trim()) {
      onSubmitSelection(selection.trim(), comment.trim() || undefined);
      setIsInputModalOpen(false);
    }
  };

  const handleRoundClick = (roundNumber: number) => {
    setRoundDetailModal({
      isOpen: true,
      selectedRound: roundNumber,
    });
  };

  const handleCloseRoundDetail = () => {
    setRoundDetailModal({
      isOpen: false,
      selectedRound: null,
    });
  };

  const handleSaveSelections = (roundNumber: number, selections: {
    userId: string;
    userName: string;
    item: string;
    comment?: string;
  }[]) => {
    if (onUpdateSelections) {
      onUpdateSelections(roundNumber, selections);
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
    <Container 
      maxW="container.xl" 
      p={4} 
      minH="100vh"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: 'linear(to-br, purple.50, blue.50, pink.50)',
        opacity: 0.3,
        zIndex: -1,
        _dark: {
          bgGradient: 'linear(to-br, purple.900/30, blue.900/30, pink.900/30)',
          opacity: 0.5,
        },
      }}
    >
      {/* Header */}
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="lg" fontWeight="bold" _dark={{ color: 'white' }}>
          Round {roundNumber}/{totalRounds}
        </Text>
        <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.300' }}>
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
              bgGradient="linear(135deg, purple.50, pink.50)"
              border="2px solid"
              borderColor="purple.300"
              boxShadow="0 10px 30px -10px rgba(128, 90, 213, 0.25)"
              position="relative"
              overflow="hidden"
              _dark={{
                bgGradient: 'linear(135deg, purple.900/40, pink.900/40)',
                borderColor: 'purple.600',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.3), 0 0 60px rgba(168, 85, 247, 0.1)',
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                bgGradient: 'linear(to-r, purple.400, pink.400, purple.400)',
                _dark: {
                  bgGradient: 'linear(to-r, purple.300, pink.300, purple.300)',
                },
              }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={6} color="purple.700" _dark={{ color: 'purple.200' }}>
                📊 ラウンド ({pastRounds.length})
              </Text>
              {pastRounds.length === 0 ? (
                <Box
                  p={8}
                  textAlign="center"
                  bg="white"
                  borderRadius="lg"
                  border="2px dashed"
                  borderColor="purple.300"
                  opacity={0.8}
                  _dark={{
                    bg: 'gray.800',
                    borderColor: 'purple.600',
                    opacity: 0.9,
                  }}
                >
                  <Text fontSize="md" color="purple.500" fontWeight="medium" _dark={{ color: 'purple.300' }}>
                    📝 ラウンドがまだ開始されていません
                  </Text>
                  <Text fontSize="sm" color="purple.400" mt={2} _dark={{ color: 'purple.400' }}>
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
                    bgGradient="linear(to-r, blue.100, cyan.100)"
                    border="2px solid"
                    borderColor="blue.400"
                    borderRadius="lg"
                    alignItems="center"
                    boxShadow="0 4px 20px -5px rgba(59, 130, 246, 0.35)"
                    _dark={{
                      bgGradient: 'linear(to-r, blue.800/50, cyan.800/50)',
                      borderColor: 'blue.500',
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)',
                    }}
                    position="relative"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      inset: '-2px',
                      borderRadius: 'lg',
                      padding: '2px',
                      background: 'linear-gradient(45deg, blue.400, cyan.400, blue.400)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      opacity: 0.5,
                    }}
                  >
                    <Flex align="center" justify="center" h="full">
                      <Text fontWeight="bold" color="blue.800" fontSize="lg" _dark={{ color: 'blue.200' }}>
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
                            position="relative"
                            transition="all 0.3s ease"
                            _hover={{
                              transform: 'scale(1.05)',
                              boxShadow: '0 4px 12px -4px rgba(0, 0, 0, 0.15)',
                            }}
                            _dark={{
                              bg: currentStatus?.status === 'completed'
                                ? 'green.800/50'
                                : currentStatus?.status === 'entered'
                                  ? 'yellow.800/50'
                                  : 'gray.700/50',
                              borderColor: currentStatus?.status === 'completed'
                                ? 'green.500'
                                : currentStatus?.status === 'entered'
                                  ? 'yellow.500'
                                  : 'gray.500',
                            }}
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
                              _dark={{
                                color: currentStatus?.status === 'completed'
                                  ? 'green.300'
                                  : currentStatus?.status === 'entered'
                                    ? 'yellow.300'
                                    : 'gray.300',
                              }}
                            >
                              {participant.name}
                            </Text>
                            <Box position="relative" display="inline-block">
                              {currentStatus?.status === 'thinking' && (
                                <Box
                                  position="absolute"
                                  top="-2px"
                                  right="-2px"
                                  w="6px"
                                  h="6px"
                                  bg="gray.400"
                                  borderRadius="full"
                                  animation="pulse 2s ease-in-out infinite"
                                />
                              )}
                              {currentStatus?.status === 'entered' && (
                                <Box
                                  position="absolute"
                                  top="-2px"
                                  right="-2px"
                                  w="6px"
                                  h="6px"
                                  bg="yellow.400"
                                  borderRadius="full"
                                  animation="pulse 1.5s ease-in-out infinite"
                                />
                              )}
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
                          borderColor="purple.200"
                          borderRadius="lg"
                          transition="all 0.2s ease"
                          cursor="pointer"
                          onClick={() => handleRoundClick(round.roundNumber)}
                          _hover={{ 
                            bg: 'purple.50',
                            borderColor: 'purple.300',
                            transform: 'translateY(-1px)',
                            boxShadow: '0 4px 12px -4px rgba(128, 90, 213, 0.15)'
                          }}
                          _dark={{
                            bg: 'gray.800/80',
                            borderColor: 'purple.700',
                            _hover: {
                              bg: 'purple.900/40',
                              borderColor: 'purple.600',
                              boxShadow: '0 4px 12px -4px rgba(168, 85, 247, 0.25)',
                            },
                          }}
                          alignItems="center"
                        >
                          <Flex align="center" justify="center" h="full">
                            <Text
                              fontWeight="bold"
                              color="purple.800"
                              fontSize="lg"
                              _dark={{ color: 'purple.200' }}
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
                                      _dark={{ color: 'gray.200' }}
                                    >
                                      {selection.item}
                                    </Text>
                                    {selection.comment && (
                                      <Text
                                        fontSize="xs"
                                        color="purple.600"
                                        fontStyle="italic"
                                        lineHeight="1.2"
                                        _dark={{ color: 'purple.300' }}
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
                                    _dark={{ color: 'gray.500' }}
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
              bgGradient="linear(to-br, gray.50, blue.50)"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="0 4px 15px -3px rgba(0, 0, 0, 0.1)"
              _dark={{
                bgGradient: 'linear(to-br, gray.800/60, blue.900/40)',
                borderColor: 'gray.600',
                boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Text fontSize="lg" fontWeight="bold" mb={4} color="gray.700" _dark={{ color: 'gray.300' }}>
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
                _dark={{
                  bg: 'gray.800',
                  borderColor: 'gray.600',
                }}
              >
                <VStack gap={2}>
                  <Text fontSize="sm" color="gray.500" textAlign="center" _dark={{ color: 'gray.400' }}>
                    📝 コメントやログがここに表示されます
                  </Text>
                  <Text fontSize="sm" color="gray.500" textAlign="center" _dark={{ color: 'gray.400' }}>
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
                h="80px"
                onClick={() => setIsInputModalOpen(true)}
                fontSize="xl"
                fontWeight="bold"
                borderRadius="xl"
                variant="outline"
                borderWidth={2}
                borderColor="blue.400"
                bg="blue.50"
                color="blue.700"
                boxShadow="lg"
                transition="all 0.2s ease"
                _hover={{
                  bg: 'blue.100',
                  borderColor: 'blue.500',
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
                _dark={{
                  borderColor: 'blue.400',
                  bg: 'gray.800',
                  color: 'blue.300',
                  _hover: {
                    bg: 'gray.700',
                    borderColor: 'blue.300',
                  },
                }}
              >
                🎯 選択する！
              </Button>

              {/* Current User Selection Preview */}
              {currentUserSelection && (
                <Box
                  p={4}
                  borderRadius="lg"
                  bgGradient="linear(to-br, green.50, emerald.50)"
                  border="2px solid"
                  borderColor="green.400"
                  boxShadow="0 8px 25px -8px rgba(34, 197, 94, 0.3)"
                  position="relative"
                  overflow="hidden"
                  _dark={{
                    bgGradient: 'linear(to-br, green.900/50, emerald.900/50)',
                    borderColor: 'green.500',
                    boxShadow: '0 0 25px rgba(34, 197, 94, 0.4), 0 0 50px rgba(34, 197, 94, 0.2)',
                  }}
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
                    _dark: {
                      background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
                    },
                  }}
                >
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="green.700"
                    mb={2}
                    _dark={{ color: 'green.300' }}
                  >
                    ✅ あなたの選択
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="green.800" _dark={{ color: 'green.200' }}>
                    {currentUserSelection}
                  </Text>
                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme="green"
                    onClick={() => setIsInputModalOpen(true)}
                    mt={3}
                    w="full"
                    _dark={{
                      borderColor: 'green.400',
                      color: 'green.300',
                      _hover: {
                        bg: 'green.900/30',
                        borderColor: 'green.300',
                      },
                    }}
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

      {/* Round Detail Modal */}
      <RoundDetailModal
        isOpen={roundDetailModal.isOpen}
        onClose={handleCloseRoundDetail}
        roundData={roundDetailModal.selectedRound ? pastRounds.find(r => r.roundNumber === roundDetailModal.selectedRound) || null : null}
        participants={participants}
        onSaveSelections={handleSaveSelections}
      />
    </Container>
  );
};
