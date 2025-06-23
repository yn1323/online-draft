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
import { useEffect, useState } from 'react';
import { Avatar } from '@/src/components/atoms/Avatar';

const participants = [
  { id: '1', name: '田中太郎', avatar: 1, choice: 'ポケットモンスターブラック' },
  { id: '2', name: '佐藤花子', avatar: 2, choice: 'ドラゴンクエストXI' },
  { id: '3', name: '鈴木一郎', avatar: 3, choice: 'ファイナルファンタジーXIV' },
  { id: '4', name: '高橋次郎', avatar: 4, choice: 'スーパーマリオオデッセイ' },
  { id: '5', name: '山田美咲', avatar: 5, choice: 'ゼルダの伝説ブレスオブザワイルド' },
  { id: '6', name: '中村健太', avatar: 6, choice: 'スプラトゥーン3' },
];

const participantsWithConflict = [
  { id: '1', name: '田中太郎', avatar: 1, choice: 'ポケットモンスターブラック' },
  { id: '2', name: '佐藤花子', avatar: 2, choice: 'ポケットモンスターブラック' },
  { id: '3', name: '鈴木一郎', avatar: 3, choice: 'ファイナルファンタジーXIV' },
  { id: '4', name: '高橋次郎', avatar: 4, choice: 'スーパーマリオオデッセイ' },
  { id: '5', name: '山田美咲', avatar: 5, choice: 'ゼルダの伝説ブレスオブザワイルド' },
  { id: '6', name: '中村健太', avatar: 6, choice: 'ファイナルファンタジーXIV' },
];

type StageProps = {
  variant: 'card' | 'typing' | 'slot';
  hasConflict?: boolean;
  isRevealing: boolean;
  onStartReveal: () => void;
  onReset: () => void;
};

const MotionBox = motion(Box);
const MotionText = motion(Text);

const CardRevealStage = ({
  hasConflict,
  isRevealing,
  onStartReveal,
  onReset,
}: Omit<StageProps, 'variant'>) => {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [showConflictEffect, setShowConflictEffect] = useState(false);
  const [showSuccessEffect, setShowSuccessEffect] = useState(false);

  // レスポンシブ値の設定（スマホ横長カード対応）
  const gridColumns = useBreakpointValue({
    base: '1fr', // スマホは1列6行
    md: 'repeat(3, 1fr)', // PCは3列2行
  });
  const cardHeight = useBreakpointValue({ base: '50px', md: '160px' }); // スマホは横長
  const nameFontSize = useBreakpointValue({ base: 'xs', md: 'sm' }); // 読める大きさ
  const choiceFontSize = useBreakpointValue({ base: 'xs', md: 'sm' }); // 読める大きさ
  const avatarSize = useBreakpointValue({ base: 'xs', md: 'sm' }); // アバターサイズ
  const cardGap = useBreakpointValue({ base: 2, md: 4 }); // 適切な余白

  const currentParticipants = hasConflict
    ? participantsWithConflict
    : participants;

  // 競合を検出する関数
  const detectConflicts = () => {
    const choiceCount: Record<string, string[]> = {};
    currentParticipants.forEach((p) => {
      if (!choiceCount[p.choice]) {
        choiceCount[p.choice] = [];
      }
      choiceCount[p.choice].push(p.id);
    });
    return Object.values(choiceCount)
      .filter((ids) => ids.length > 1)
      .flat();
  };

  const conflictIds = detectConflicts();

  const handleReveal = () => {
    setRevealedCards([]);
    setShowConflictEffect(false);
    setShowSuccessEffect(false);
    onStartReveal();

    currentParticipants.forEach((_, index) => {
      setTimeout(
        () => {
          setRevealedCards((prev) => {
            const newRevealed = [...prev, index];
            // 全カードが開かれたかチェック
            if (newRevealed.length === currentParticipants.length) {
              if (hasConflict) {
                // 0.5秒後に競合エフェクト開始
                setTimeout(() => {
                  setShowConflictEffect(true);
                }, 500);
              } else {
                // 0.5秒後に成功エフェクト開始
                setTimeout(() => {
                  setShowSuccessEffect(true);
                }, 500);
              }
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
    onReset();
  };

  return (
    <VStack gap={[3, 6]} p={[3, 6]} bg="purple.900" borderRadius="xl" minH={["350px", "400px"]}>
      <Text fontSize={["lg", "2xl"]} fontWeight="bold" color="white">
        カードめくり演出
      </Text>

      <Grid templateColumns={gridColumns} gap={cardGap} w="full">
        {currentParticipants.map((participant, index) => {
          const isConflict = conflictIds.includes(participant.id);

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
                  rotateY: revealedCards.includes(index) ? 180 : 0,
                  scale:
                    isConflict && showConflictEffect
                      ? [1, 1.05, 1]
                      : showSuccessEffect
                        ? [1, 1.02, 1]
                        : 1,
                }}
                transition={{
                  rotateY: { duration: 0.6, ease: 'easeInOut' },
                  scale: {
                    duration: isConflict && showConflictEffect ? 0.5 : 0.8,
                    repeat:
                      (isConflict && showConflictEffect) || showSuccessEffect
                        ? Number.POSITIVE_INFINITY
                        : 0,
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
                    isConflict && showConflictEffect
                      ? 'red.100'
                      : showSuccessEffect
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
                    isConflict && showConflictEffect
                      ? 'red.500'
                      : showSuccessEffect
                        ? 'green.500'
                        : 'gold'
                  }
                >
                  {/* スマホ: 横並び、PC: 縦並び */}
                  <Box
                    display="flex"
                    flexDirection={["row", "column"]}
                    alignItems="center"
                    justifyContent={["flex-start", "center"]}
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
                      flexShrink={0}
                    />
                    <VStack gap={[0, 1]} flex={["1", "none"]} align={["flex-start", "center"]}>
                      <Text
                        fontSize={nameFontSize}
                        fontWeight="bold"
                        textAlign={["left", "center"]}
                        color="gray.800"
                        lineHeight="1.2"
                        noOfLines={1}
                      >
                        {participant.name}
                      </Text>
                      <Text
                        fontSize={choiceFontSize}
                        textAlign={["left", "center"]}
                        color={
                          isConflict && showConflictEffect
                            ? 'red.600'
                            : showSuccessEffect
                              ? 'green.600'
                              : 'blue.600'
                        }
                        fontWeight="medium"
                        lineHeight="1.2"
                        noOfLines={1}
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
          size={["sm", "md"]}
          fontSize={["xs", "sm"]}
        >
          カードをめくる
        </Button>
        <Button 
          variant="ghost" 
          onClick={handleReset} 
          color="white"
          size={["sm", "md"]}
          fontSize={["xs", "sm"]}
        >
          リセット
        </Button>
      </HStack>
    </VStack>
  );
};

const TypingStage = ({
  hasConflict,
  isRevealing,
  onStartReveal,
  onReset,
}: Omit<StageProps, 'variant'>) => {
  const [typedResults, setTypedResults] = useState<string[]>([]);
  const [currentlyTyping, setCurrentlyTyping] = useState(-1);
  const [showConflictEffect, setShowConflictEffect] = useState(false);
  const [showSuccessEffect, setShowSuccessEffect] = useState(false);

  // レスポンシブ値の設定（6人対応）
  const terminalPadding = useBreakpointValue({ base: 3, md: 4 });
  const textFontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const minHeight = useBreakpointValue({ base: '300px', md: '250px' }); // 6人×2行対応

  const currentParticipants = hasConflict
    ? participantsWithConflict
    : participants;

  // 競合を検出する関数
  const detectConflicts = () => {
    const choiceCount: Record<string, string[]> = {};
    currentParticipants.forEach((p) => {
      if (!choiceCount[p.choice]) {
        choiceCount[p.choice] = [];
      }
      choiceCount[p.choice].push(p.id);
    });
    return Object.values(choiceCount)
      .filter((ids) => ids.length > 1)
      .flat();
  };

  const conflictIds = detectConflicts();

  const handleType = () => {
    setTypedResults([]);
    setCurrentlyTyping(-1);
    setShowConflictEffect(false);
    setShowSuccessEffect(false);
    onStartReveal();

    let completedCount = 0;

    currentParticipants.forEach((participant, participantIndex) => {
      setTimeout(() => {
        setCurrentlyTyping(participantIndex);
        const fullText = `${participant.name}\n${participant.choice}`;

        for (let i = 0; i <= fullText.length; i++) {
          setTimeout(() => {
            const currentText = fullText.substring(0, i);
            setTypedResults((prev) => {
              const newResults = [...prev];
              newResults[participantIndex] = currentText;
              return newResults;
            });

            if (i === fullText.length) {
              setCurrentlyTyping(-1);
              completedCount++;
              // 全員のタイピングが完了したかチェック
              if (completedCount === currentParticipants.length) {
                if (hasConflict) {
                  // 0.5秒後に競合エフェクト開始
                  setTimeout(() => {
                    setShowConflictEffect(true);
                  }, 500);
                } else {
                  // 0.5秒後に成功エフェクト開始
                  setTimeout(() => {
                    setShowSuccessEffect(true);
                  }, 500);
                }
              }
            }
          }, i * 80);
        }
      }, participantIndex * 2000);
    });
  };

  const handleReset = () => {
    setTypedResults([]);
    setCurrentlyTyping(-1);
    onReset();
  };

  return (
    <VStack gap={[3, 6]} p={[3, 6]} bg="gray.900" borderRadius="xl" minH={["350px", "400px"]}>
      <Text
        fontSize={["lg", "2xl"]}
        fontWeight="bold"
        color="green.400"
        fontFamily="mono"
      >
        タイピング演出
      </Text>

      <Box
        bg={showSuccessEffect ? 'green.900' : 'black'}
        borderRadius="lg"
        p={terminalPadding}
        w="full"
        minH={minHeight}
        border="2px solid"
        borderColor={showSuccessEffect ? 'green.400' : 'green'}
        fontFamily="mono"
        boxShadow={
          showSuccessEffect ? '0 0 20px rgba(72, 187, 120, 0.5)' : 'none'
        }
        overflowX="auto"
      >
        <Text color="green.400" fontSize="sm" mb={2}>
          開票結果を表示中...
        </Text>

        {typedResults.map((result, index) => {
          const participant = currentParticipants[index];
          const isConflict =
            participant && conflictIds.includes(participant.id);

          return (
            <MotionText
              key={index}
              color={
                isConflict && showConflictEffect
                  ? 'red.400'
                  : showSuccessEffect
                    ? 'green.200'
                    : 'green.300'
              }
              fontSize={textFontSize}
              fontFamily="mono"
              display="block"
              wordBreak="break-word"
              whiteSpace="pre-line"
              lineHeight="1.4"
              mb={2}
              animate={
                isConflict && showConflictEffect
                  ? {
                      color: ['#68D391', '#F56565', '#68D391'],
                    }
                  : showSuccessEffect
                    ? {
                        color: ['#68D391', '#9AE6B4', '#68D391'],
                      }
                    : {}
              }
              transition={
                (isConflict && showConflictEffect) || showSuccessEffect
                  ? { duration: 0.5, repeat: Number.POSITIVE_INFINITY }
                  : {}
              }
            >
              {result}
              {currentlyTyping === index && (
                <MotionBox
                  as="span"
                  w="2px"
                  h="20px"
                  bg={
                    isConflict && showConflictEffect ? 'red.400' : 'green.400'
                  }
                  ml={1}
                  display="inline-block"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              )}
            </MotionText>
          );
        })}
      </Box>

      <HStack gap={4}>
        <Button
          colorPalette="green"
          onClick={handleType}
          disabled={isRevealing}
        >
          タイピング開始
        </Button>
        <Button variant="ghost" onClick={handleReset} color="white">
          リセット
        </Button>
      </HStack>
    </VStack>
  );
};

const SlotMachineStage = ({
  hasConflict,
  isRevealing,
  onStartReveal,
  onReset,
}: Omit<StageProps, 'variant'>) => {
  const [spinningSlots, setSpinningSlots] = useState<number[]>([]);
  const [revealedResults, setRevealedResults] = useState<number[]>([]);
  const [showConflictEffect, setShowConflictEffect] = useState(false);
  const [showSuccessEffect, setShowSuccessEffect] = useState(false);
  const [randomSlotIndexes, setRandomSlotIndexes] = useState<number[]>(
    new Array(6).fill(0)
  );

  // レスポンシブ値の設定（2行レイアウト）
  const slotDirection = useBreakpointValue({ base: 'column', md: 'row' }); // スマホ1列、PC横並び
  const slotGap = useBreakpointValue({ base: 2, md: 4 });
  const slotWidth = useBreakpointValue({ base: '100%', md: '120px' }); // スマホは全幅
  const slotHeight = useBreakpointValue({ base: '30px', md: '200px' }); // スマホは薄く

  const currentParticipants = hasConflict
    ? participantsWithConflict
    : participants;

  // 競合を検出する関数
  const detectConflicts = () => {
    const choiceCount: Record<string, string[]> = {};
    currentParticipants.forEach((p) => {
      if (!choiceCount[p.choice]) {
        choiceCount[p.choice] = [];
      }
      choiceCount[p.choice].push(p.id);
    });
    return Object.values(choiceCount)
      .filter((ids) => ids.length > 1)
      .flat();
  };

  const conflictIds = detectConflicts();

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
          let newIndex;
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
  }, [spinningSlots, slotOptions.length]);

  const handleSpin = () => {
    setSpinningSlots([]);
    setRevealedResults([]);
    setShowConflictEffect(false);
    setShowSuccessEffect(false);
    onStartReveal();

    // 各参加者のスロットを順番に回転開始
    currentParticipants.forEach((_, index) => {
      setTimeout(() => {
        setSpinningSlots((prev) => [...prev, index]);

        // 3秒後にスロット停止
        setTimeout(() => {
          setSpinningSlots((prev) => prev.filter((i) => i !== index));
          setRevealedResults((prev) => {
            const newRevealed = [...prev, index];
            // 全スロットが停止したかチェック
            if (newRevealed.length === currentParticipants.length) {
              if (hasConflict) {
                // 0.5秒後に競合エフェクト開始
                setTimeout(() => {
                  setShowConflictEffect(true);
                }, 500);
              } else {
                // 0.5秒後に成功エフェクト開始
                setTimeout(() => {
                  setShowSuccessEffect(true);
                }, 500);
              }
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
    setRandomSlotIndexes(new Array(6).fill(0));
    onReset();
  };

  return (
    <VStack gap={[3, 6]} p={[3, 6]} bg="red.900" borderRadius="xl" minH={["350px", "400px"]}>
      <Text fontSize={["lg", "2xl"]} fontWeight="bold" color="white">
        スロットマシン演出
      </Text>

      <Box
        display="flex"
        flexDirection={slotDirection}
        gap={slotGap}
        justifyContent="center"
        w="full"
        alignItems="center"
      >
        {currentParticipants.map((participant, index) => {
          const isSpinning = spinningSlots.includes(index);
          const isRevealed = revealedResults.includes(index);
          const isConflict = conflictIds.includes(participant.id);

          return (
            <VStack
              key={participant.id}
              gap={2}
              w={["full", "120px"]}
              alignItems="center"
            >
              {/* 1行目: 人名 */}
              <HStack gap={2} alignItems="center">
                <Avatar
                  avatarNumber={participant.avatar.toString()}
                  name={participant.name}
                  size="xs"
                  flexShrink={0}
                />
                <Text 
                  fontSize="xs" 
                  color="white" 
                  fontWeight="bold"
                  textAlign="center"
                  noOfLines={1}
                >
                  {participant.name}
                </Text>
              </HStack>

              {/* 2行目: スロットマシン */}
              <MotionBox
                w={["full", "100px"]}
                h="60px"
                bg="gray.800"
                borderRadius="md"
                border="2px solid"
                borderColor={
                  isConflict && showConflictEffect
                    ? 'red.400'
                    : showSuccessEffect
                      ? 'green.400'
                      : 'yellow.400'
                }
                position="relative"
                overflow="hidden"
                animate={
                  isConflict && showConflictEffect
                    ? {
                        borderColor: ['#FED7D7', '#E53E3E', '#FED7D7'],
                      }
                    : showSuccessEffect
                      ? {
                          borderColor: ['#C6F6D5', '#38A169', '#C6F6D5'],
                        }
                      : {}
                }
                transition={
                  (isConflict && showConflictEffect) || showSuccessEffect
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
                        noOfLines={1}
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
                        isConflict && showConflictEffect
                          ? 'red.300'
                          : showSuccessEffect
                            ? 'green.300'
                            : 'yellow.300'
                      }
                      fontWeight="bold"
                      textAlign="center"
                      noOfLines={2}
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
          size={["sm", "md"]}
          fontSize={["xs", "sm"]}
        >
          🎰 スロット開始
        </Button>
        <Button 
          variant="ghost" 
          onClick={handleReset} 
          color="white"
          size={["sm", "md"]}
          fontSize={["xs", "sm"]}
        >
          リセット
        </Button>
      </HStack>
    </VStack>
  );
};

export const Stage = ({
  variant,
  hasConflict,
  isRevealing,
  onStartReveal,
  onReset,
}: StageProps) => {
  const stageComponents = {
    card: CardRevealStage,
    typing: TypingStage,
    slot: SlotMachineStage,
  };

  const StageComponent = stageComponents[variant];

  return (
    <Box w="full" maxW="600px" mx="auto">
      <StageComponent
        hasConflict={hasConflict}
        isRevealing={isRevealing}
        onStartReveal={onStartReveal}
        onReset={onReset}
      />
    </Box>
  );
};
