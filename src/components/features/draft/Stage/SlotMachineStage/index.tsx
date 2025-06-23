'use client';

import {
  Box,
  Button,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Avatar } from '@/src/components/atoms/Avatar';
import type { getCommonResponsiveValues, ParticipantResult } from '../index';

const MotionBox = motion(Box);
const MotionText = motion(Text);

type SlotMachineStageProps = {
  participants: ParticipantResult[];
  isRevealing: boolean;
  onStartReveal: () => void;
  onReset: () => void;
  getCommonResponsiveValues: typeof getCommonResponsiveValues;
};

export const SlotMachineStage = ({
  participants,
  isRevealing,
  onStartReveal,
  onReset,
  getCommonResponsiveValues,
}: SlotMachineStageProps) => {
  const [spinningSlots, setSpinningSlots] = useState<number[]>([]);
  const [revealedResults, setRevealedResults] = useState<number[]>([]);
  const [showEffect, setShowEffect] = useState(false);
  const [randomSlotIndexes, setRandomSlotIndexes] = useState<number[]>(
    new Array(participants.length).fill(0),
  );

  // 共通のレスポンシブ値を使用
  const responsive = getCommonResponsiveValues();
  const slotLayout = useBreakpointValue({ base: 'flex', md: 'grid' });
  const slotGap = useBreakpointValue({ base: 2, md: 2 }); // PCでも小さめのgap

  // スロットマシンの選択肢（回転中に表示される候補）
  const slotOptions = [
    'ポケットモンスター',
    'ドラゴンクエスト',
    'ファイナルファンタジー',
    'スーパーマリオ',
    'ゼルダの伝説',
    'スプラトゥーン',
  ];

  // 各スロットの回転アニメーション管理
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    spinningSlots.forEach((slotIndex) => {
      const interval = setInterval(() => {
        setRandomSlotIndexes((prev) => {
          const newIndexes = [...prev];
          let newIndex: number;
          // 前回と違う選択肢を選ぶ
          do {
            newIndex = Math.floor(Math.random() * slotOptions.length);
          } while (newIndex === prev[slotIndex] && slotOptions.length > 1);

          newIndexes[slotIndex] = newIndex;
          return newIndexes;
        });
      }, 100); // 100ms間隔で更新

      intervals.push(interval);
    });

    // クリーンアップ
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [spinningSlots]);

  const handleSpin = () => {
    setSpinningSlots([]);
    setRevealedResults([]);
    setShowEffect(false);
    onStartReveal();

    // 各参加者のスロットを順番に回転開始
    participants.forEach((_, index) => {
      setTimeout(() => {
        setSpinningSlots((prev) => [...prev, index]);

        // 3秒後にスロット停止
        setTimeout(() => {
          setSpinningSlots((prev) => prev.filter((i) => i !== index));
          setRevealedResults((prev) => {
            const newRevealed = [...prev, index];
            // 全スロットが停止したかチェック
            if (newRevealed.length === participants.length) {
              // 0.5秒後にエフェクト開始
              setTimeout(() => {
                setShowEffect(true);
              }, 500);
            }
            return newRevealed;
          });
        }, 3000);
      }, index * 500); // 0.5秒間隔でスロット開始
    });
  };

  const handleReset = () => {
    setSpinningSlots([]);
    setRevealedResults([]);
    setRandomSlotIndexes(new Array(participants.length).fill(0));
    setShowEffect(false);
    onReset();
  };

  return (
    <VStack
      gap={[3, 6]}
      p={[3, 6]}
      bg="red.900"
      borderRadius="xl"
      minH={['350px', '400px']}
    >
      <Text fontSize={['lg', '2xl']} fontWeight="bold" color="white">
        スロットマシン演出
      </Text>

      <Box
        display={slotLayout}
        flexDirection={slotLayout === 'flex' ? 'column' : undefined}
        gridTemplateColumns={slotLayout === 'grid' ? 'repeat(3, 1fr)' : undefined}
        gap={slotGap}
        justifyContent="center"
        w="full"
        alignItems="center"
      >
        {participants.map((participant, index) => {
          const isSpinning = spinningSlots.includes(index);
          const isRevealed = revealedResults.includes(index);
          const willLose = participant.willLose;

          return (
            <VStack
              key={participant.id}
              gap={2}
              w="full"
              alignItems="center"
            >
              {/* 1行目: 人名 */}
              <HStack gap={2} alignItems="center">
                <Avatar
                  avatarNumber={participant.avatar.toString()}
                  name={participant.name}
                  size="xs"
                />
                <Text
                  fontSize="xs"
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  lineClamp={1}
                >
                  {participant.name}
                </Text>
              </HStack>

              {/* 2行目: スロットマシン */}
              <MotionBox
                w="full"
                h={['60px', '80px']}
                minW={['auto', '120px']}
                bg="gray.800"
                borderRadius="md"
                border="2px solid"
                borderColor={
                  willLose && showEffect
                    ? 'red.400'
                    : showEffect
                      ? 'green.400'
                      : 'yellow.400'
                }
                position="relative"
                overflow="hidden"
                animate={
                  willLose && showEffect
                    ? {
                        borderColor: ['#FED7D7', '#E53E3E', '#FED7D7'],
                      }
                    : showEffect
                      ? {
                          borderColor: ['#C6F6D5', '#38A169', '#C6F6D5'],
                        }
                      : {}
                }
                transition={
                  showEffect
                    ? { duration: 0.5, repeat: Number.POSITIVE_INFINITY }
                    : {}
                }
              >
                {/* スロット窓 */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="90%"
                  h="80%"
                  bg="black"
                  borderRadius="sm"
                  border="1px solid gold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden"
                  p={2}
                >
                  {isSpinning ? (
                    // 回転中のアニメーション - 実際の選択肢を表示
                    <MotionBox
                      animate={{
                        y: [-20, 20, -20],
                      }}
                      transition={{
                        duration: 0.1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'linear',
                      }}
                    >
                      <Text
                        fontSize="xs"
                        color="yellow.300"
                        fontWeight="bold"
                        textAlign="center"
                        lineClamp={1}
                      >
                        {slotOptions[randomSlotIndexes[index]]}
                      </Text>
                    </MotionBox>
                  ) : isRevealed ? (
                    // 結果表示 - 実際の選択肢を表示
                    <MotionText
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: 'spring' }}
                      fontSize="xs"
                      color={
                        willLose && showEffect
                          ? 'red.300'
                          : showEffect
                            ? 'green.300'
                            : 'yellow.300'
                      }
                      fontWeight="bold"
                      textAlign="center"
                      lineClamp={2}
                      lineHeight="1.2"
                    >
                      {participant.choice}
                    </MotionText>
                  ) : (
                    // 待機状態
                    <Text fontSize="sm" color="yellow.300">
                      ?
                    </Text>
                  )}
                </Box>
              </MotionBox>
            </VStack>
          );
        })}
      </Box>

      <HStack gap={[2, 4]}>
        <Button
          colorPalette="red"
          onClick={handleSpin}
          disabled={isRevealing}
          size={['sm', 'md']}
          fontSize={['xs', 'sm']}
        >
          🎰 スロット開始
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
