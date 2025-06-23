'use client';

import {
  Box,
  Button,
  Grid,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Avatar } from '@/src/components/atoms/Avatar';
import type { getCommonResponsiveValues, ParticipantResult } from '../index';

const MotionBox = motion(Box);

type CardRevealStageProps = {
  participants: ParticipantResult[];
  isRevealing: boolean;
  onStartReveal: () => void;
  onReset: () => void;
  getCommonResponsiveValues: typeof getCommonResponsiveValues;
};

export const CardRevealStage = ({
  participants,
  isRevealing,
  onStartReveal,
  onReset,
  getCommonResponsiveValues,
}: CardRevealStageProps) => {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [showEffect, setShowEffect] = useState(false);

  // 共通のレスポンシブ値を使用
  const responsive = getCommonResponsiveValues();
  const gridColumns = useBreakpointValue(responsive.gridColumns);
  const cardHeight = useBreakpointValue(responsive.cardHeight);
  const fontSize = useBreakpointValue(responsive.fontSize);
  const avatarSize = useBreakpointValue(responsive.avatarSize);
  const cardGap = useBreakpointValue(responsive.gap);

  const handleReveal = () => {
    setRevealedCards([]);
    setShowEffect(false);
    onStartReveal();

    participants.forEach((_, index) => {
      setTimeout(
        () => {
          setRevealedCards((prev) => {
            const newRevealed = [...prev, index];
            // 全カードが開かれたかチェック
            if (newRevealed.length === participants.length) {
              // 0.5秒後にエフェクト開始
              setTimeout(() => {
                setShowEffect(true);
              }, 500);
            }
            return newRevealed;
          });
        },
        (index + 1) * 800,
      );
    });
  };

  const handleReset = () => {
    setRevealedCards([]);
    setShowEffect(false);
    onReset();
  };

  return (
    <VStack
      gap={[3, 6]}
      p={[3, 6]}
      bg="purple.900"
      borderRadius="xl"
      minH={['350px', '400px']}
    >
      <Text fontSize={['lg', '2xl']} fontWeight="bold" color="white">
        カードめくり演出
      </Text>

      <Grid templateColumns={gridColumns} gap={cardGap} w="full">
        {participants.map((participant, index) => {
          const isRevealed = revealedCards.includes(index);
          const willLose = participant.willLose;

          return (
            <MotionBox
              key={participant.id}
              position="relative"
              h={cardHeight}
              cursor="pointer"
              style={{ perspective: '1000px' }}
            >
              <MotionBox
                position="absolute"
                w="full"
                h="full"
                borderRadius="lg"
                transformStyle="preserve-3d"
                animate={{
                  rotateY: isRevealed ? 180 : 0,
                  scale:
                    willLose && showEffect
                      ? [1, 1.05, 1]
                      : showEffect
                        ? [1, 1.02, 1]
                        : 1,
                }}
                transition={{
                  rotateY: { duration: 0.6, ease: 'easeInOut' },
                  scale: {
                    duration: willLose && showEffect ? 0.5 : 0.8,
                    repeat: showEffect ? Number.POSITIVE_INFINITY : 0,
                  },
                }}
              >
                <Box
                  position="absolute"
                  w="full"
                  h="full"
                  bg="gradient-to-br from-purple-500 to-purple-700"
                  borderRadius="lg"
                  backfaceVisibility="hidden"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="xl"
                >
                  <Text fontSize="4xl">?</Text>
                </Box>

                <Box
                  position="absolute"
                  w="full"
                  h="full"
                  bg={
                    willLose && showEffect
                      ? 'red.100'
                      : showEffect
                        ? 'green.100'
                        : 'white'
                  }
                  borderRadius="lg"
                  backfaceVisibility="hidden"
                  transform="rotateY(180deg)"
                  p={3}
                  boxShadow="xl"
                  border="2px solid"
                  borderColor={
                    willLose && showEffect
                      ? 'red.500'
                      : showEffect
                        ? 'green.500'
                        : 'gold'
                  }
                >
                  {/* スマホ: 横並び、PC: 縦並び */}
                  <Box
                    display="flex"
                    flexDirection={['row', 'column']}
                    alignItems="center"
                    justifyContent={['flex-start', 'center']}
                    h="full"
                    w="full"
                    gap={[2, 1]}
                    px={[2, 3]}
                    py={[1, 2]}
                  >
                    <Avatar
                      avatarNumber={participant.avatar.toString()}
                      name={participant.name}
                      size={avatarSize}
                    />
                    <VStack
                      gap={[0, 1]}
                      flex={['1', 'none']}
                      align={['flex-start', 'center']}
                    >
                      <Text
                        fontSize={fontSize}
                        fontWeight="bold"
                        textAlign={['left', 'center']}
                        color="gray.800"
                        lineHeight="1.2"
                        lineClamp={1}
                      >
                        {participant.name}
                      </Text>
                      <Text
                        fontSize={fontSize}
                        textAlign={['left', 'center']}
                        color={
                          willLose && showEffect
                            ? 'red.600'
                            : showEffect
                              ? 'green.600'
                              : 'blue.600'
                        }
                        fontWeight="medium"
                        lineHeight="1.2"
                        lineClamp={[1, 'none']}
                      >
                        {participant.choice}
                      </Text>
                    </VStack>
                  </Box>
                </Box>
              </MotionBox>
            </MotionBox>
          );
        })}
      </Grid>

      <HStack gap={[2, 4]}>
        <Button
          colorPalette="purple"
          onClick={handleReveal}
          disabled={isRevealing}
          size={['sm', 'md']}
          fontSize={['xs', 'sm']}
        >
          カードをめくる
        </Button>
        <Button
          variant="ghost"
          onClick={handleReset}
          color="white"
          size={['sm', 'md']}
          fontSize={['xs', 'sm']}
        >
          リセット
        </Button>
      </HStack>
    </VStack>
  );
};
