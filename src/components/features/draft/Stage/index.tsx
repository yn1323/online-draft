import { Box, Button, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Avatar } from '@/src/components/atoms/Avatar';

const participants = [
  { id: '1', name: '田中太郎', avatar: 1, choice: 'ポケットモンスター' },
  { id: '2', name: '佐藤花子', avatar: 2, choice: 'ドラゴンクエスト' },
  { id: '3', name: '鈴木一郎', avatar: 3, choice: 'ファイナルファンタジー' },
];

const participantsWithConflict = [
  { id: '1', name: '田中太郎', avatar: 1, choice: 'ポケットモンスター' },
  { id: '2', name: '佐藤花子', avatar: 2, choice: 'ポケットモンスター' },
  { id: '3', name: '鈴木一郎', avatar: 3, choice: 'ファイナルファンタジー' },
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

const CardRevealStage = ({ hasConflict, isRevealing, onStartReveal, onReset }: Omit<StageProps, 'variant'>) => {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [showConflictEffect, setShowConflictEffect] = useState(false);
  const [showSuccessEffect, setShowSuccessEffect] = useState(false);

  const currentParticipants = hasConflict ? participantsWithConflict : participants;
  
  // 競合を検出する関数
  const detectConflicts = () => {
    const choiceCount: Record<string, string[]> = {};
    currentParticipants.forEach(p => {
      if (!choiceCount[p.choice]) {
        choiceCount[p.choice] = [];
      }
      choiceCount[p.choice].push(p.id);
    });
    return Object.values(choiceCount).filter(ids => ids.length > 1).flat();
  };

  const conflictIds = detectConflicts();

  const handleReveal = () => {
    setRevealedCards([]);
    setShowConflictEffect(false);
    setShowSuccessEffect(false);
    onStartReveal();
    
    currentParticipants.forEach((_, index) => {
      setTimeout(() => {
        setRevealedCards(prev => {
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
      }, (index + 1) * 800);
    });
  };

  const handleReset = () => {
    setRevealedCards([]);
    onReset();
  };

  return (
    <VStack gap={6} p={6} bg="purple.900" borderRadius="xl" minH="400px">
      <Text fontSize="2xl" fontWeight="bold" color="white">
        カードめくり演出
      </Text>
      
      <Grid templateColumns="1fr 1fr 1fr" gap={4} w="full">
        {currentParticipants.map((participant, index) => {
          const isConflict = conflictIds.includes(participant.id);
          const isRevealed = revealedCards.includes(index);
          
          return (
          <MotionBox
            key={participant.id}
            position="relative"
            h="120px"
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
                scale: isConflict && showConflictEffect ? [1, 1.05, 1] : 
                       showSuccessEffect ? [1, 1.02, 1] : 1,
              }}
              transition={{ 
                rotateY: { duration: 0.6, ease: 'easeInOut' },
                scale: { 
                  duration: isConflict && showConflictEffect ? 0.5 : 0.8, 
                  repeat: (isConflict && showConflictEffect) || showSuccessEffect ? Number.POSITIVE_INFINITY : 0 
                }
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
                bg={isConflict && showConflictEffect ? "red.100" : 
                    showSuccessEffect ? "green.100" : "white"}
                borderRadius="lg"
                backfaceVisibility="hidden"
                transform="rotateY(180deg)"
                p={3}
                boxShadow="xl"
                border="2px solid"
                borderColor={isConflict && showConflictEffect ? "red.500" : 
                            showSuccessEffect ? "green.500" : "gold"}
              >
                <VStack gap={2} h="full" justify="center">
                  <Avatar avatarNumber={participant.avatar} name={participant.name} size="sm" />
                  <Text fontSize="xs" fontWeight="bold" textAlign="center" color="gray.800">
                    {participant.name}
                  </Text>
                  <Text fontSize="xs" textAlign="center" color={isConflict && showConflictEffect ? "red.600" : 
                        showSuccessEffect ? "green.600" : "blue.600"} fontWeight="medium">
                    {participant.choice}
                  </Text>
                </VStack>
              </Box>
            </MotionBox>
          </MotionBox>
          );
        })}
      </Grid>

      <HStack gap={4}>
        <Button colorPalette="purple" onClick={handleReveal} disabled={isRevealing}>
          カードをめくる
        </Button>
        <Button variant="ghost" onClick={handleReset} color="white">
          リセット
        </Button>
      </HStack>
    </VStack>
  );
};

const TypingStage = ({ hasConflict, isRevealing, onStartReveal, onReset }: Omit<StageProps, 'variant'>) => {
  const [typedResults, setTypedResults] = useState<string[]>([]);
  const [currentlyTyping, setCurrentlyTyping] = useState(-1);
  const [showConflictEffect, setShowConflictEffect] = useState(false);
  const [showSuccessEffect, setShowSuccessEffect] = useState(false);

  const currentParticipants = hasConflict ? participantsWithConflict : participants;
  
  // 競合を検出する関数
  const detectConflicts = () => {
    const choiceCount: Record<string, string[]> = {};
    currentParticipants.forEach(p => {
      if (!choiceCount[p.choice]) {
        choiceCount[p.choice] = [];
      }
      choiceCount[p.choice].push(p.id);
    });
    return Object.values(choiceCount).filter(ids => ids.length > 1).flat();
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
        const fullText = `${participant.name}: ${participant.choice}`;

        for (let i = 0; i <= fullText.length; i++) {
          setTimeout(() => {
            const currentText = fullText.substring(0, i);
            setTypedResults(prev => {
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
    <VStack gap={6} p={6} bg="gray.900" borderRadius="xl" minH="400px">
      <Text fontSize="2xl" fontWeight="bold" color="green.400" fontFamily="mono">
        タイピング演出
      </Text>

      <Box
        bg={showSuccessEffect ? "green.900" : "black"}
        borderRadius="lg"
        p={4}
        w="full"
        minH="200px"
        border="2px solid"
        borderColor={showSuccessEffect ? "green.400" : "green"}
        fontFamily="mono"
        boxShadow={showSuccessEffect ? "0 0 20px rgba(72, 187, 120, 0.5)" : "none"}
      >
        <Text color="green.400" fontSize="sm" mb={2}>
          開票結果を表示中...
        </Text>
        
        {typedResults.map((result, index) => {
          const participant = currentParticipants[index];
          const isConflict = participant && conflictIds.includes(participant.id);
          
          return (
            <MotionText
              key={index}
              color={isConflict && showConflictEffect ? "red.400" : 
                     showSuccessEffect ? "green.200" : "green.300"}
              fontSize="md"
              fontFamily="mono"
              display="flex"
              alignItems="center"
              animate={isConflict && showConflictEffect ? {
                color: ["#68D391", "#F56565", "#68D391"]
              } : showSuccessEffect ? {
                color: ["#68D391", "#9AE6B4", "#68D391"]
              } : {}}
              transition={(isConflict && showConflictEffect) || showSuccessEffect ? { duration: 0.5, repeat: Number.POSITIVE_INFINITY } : {}}
            >
              {result}
              {currentlyTyping === index && (
                <MotionBox
                  as="span"
                  w="2px"
                  h="20px"
                  bg={isConflict && showConflictEffect ? "red.400" : "green.400"}
                  ml={1}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </MotionText>
          );
        })}
      </Box>

      <HStack gap={4}>
        <Button colorPalette="green" onClick={handleType} disabled={isRevealing}>
          タイピング開始
        </Button>
        <Button variant="ghost" onClick={handleReset} color="white">
          リセット
        </Button>
      </HStack>
    </VStack>
  );
};

const SlotMachineStage = ({ hasConflict, isRevealing, onStartReveal, onReset }: Omit<StageProps, 'variant'>) => {
  const [spinningSlots, setSpinningSlots] = useState<number[]>([]);
  const [revealedResults, setRevealedResults] = useState<number[]>([]);
  const [showConflictEffect, setShowConflictEffect] = useState(false);
  const [showSuccessEffect, setShowSuccessEffect] = useState(false);

  const currentParticipants = hasConflict ? participantsWithConflict : participants;
  
  // 競合を検出する関数
  const detectConflicts = () => {
    const choiceCount: Record<string, string[]> = {};
    currentParticipants.forEach(p => {
      if (!choiceCount[p.choice]) {
        choiceCount[p.choice] = [];
      }
      choiceCount[p.choice].push(p.id);
    });
    return Object.values(choiceCount).filter(ids => ids.length > 1).flat();
  };

  const conflictIds = detectConflicts();

  // スロットマシンの選択肢（ランダムに表示される候補）
  const slotOptions = [
    'ポケットモンスター', 'ドラゴンクエスト', 'ファイナルファンタジー',
    'マリオシリーズ', 'ゼルダの伝説', 'スプラトゥーン',
    'モンスターハンター', 'ペルソナ', 'ストリートファイター'
  ];

  const handleSpin = () => {
    setSpinningSlots([]);
    setRevealedResults([]);
    setShowConflictEffect(false);
    setShowSuccessEffect(false);
    onStartReveal();

    // 各参加者のスロットを順番に回転開始
    currentParticipants.forEach((_, index) => {
      setTimeout(() => {
        setSpinningSlots(prev => [...prev, index]);
        
        // 3秒後にスロット停止
        setTimeout(() => {
          setSpinningSlots(prev => prev.filter(i => i !== index));
          setRevealedResults(prev => {
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
    onReset();
  };

  return (
    <VStack gap={6} p={6} bg="red.900" borderRadius="xl" minH="400px">
      <Text fontSize="2xl" fontWeight="bold" color="white">
        スロットマシン演出
      </Text>

      <HStack gap={4} justify="center" w="full">
        {currentParticipants.map((participant, index) => {
          const isSpinning = spinningSlots.includes(index);
          const isRevealed = revealedResults.includes(index);
          const isConflict = conflictIds.includes(participant.id);
          
          return (
            <VStack key={participant.id} gap={3}>
              {/* 参加者情報 */}
              <VStack gap={1}>
                <Avatar avatarNumber={participant.avatar} name={participant.name} size="sm" />
                <Text fontSize="xs" color="white" fontWeight="bold">
                  {participant.name}
                </Text>
              </VStack>

              {/* スロットマシン */}
              <MotionBox
                w="120px"
                h="200px"
                bg="gray.800"
                borderRadius="lg"
                border="4px solid"
                borderColor={isConflict && showConflictEffect ? "red.400" : 
                            showSuccessEffect ? "green.400" : "yellow.400"}
                position="relative"
                overflow="hidden"
                boxShadow={isConflict && showConflictEffect ? "0 0 20px rgba(239, 68, 68, 0.5)" : 
                          showSuccessEffect ? "0 0 20px rgba(72, 187, 120, 0.5)" : "0 0 20px rgba(255, 215, 0, 0.5)"}
                animate={isConflict && showConflictEffect ? { 
                  boxShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.5)",
                    "0 0 30px rgba(239, 68, 68, 0.8)",
                    "0 0 20px rgba(239, 68, 68, 0.5)"
                  ]
                } : showSuccessEffect ? {
                  boxShadow: [
                    "0 0 20px rgba(72, 187, 120, 0.5)",
                    "0 0 30px rgba(72, 187, 120, 0.8)",
                    "0 0 20px rgba(72, 187, 120, 0.5)"
                  ]
                } : {}}
                transition={(isConflict && showConflictEffect) || showSuccessEffect ? { duration: 0.5, repeat: Number.POSITIVE_INFINITY } : {}}
              >
                {/* スロット窓 */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="100px"
                  h="60px"
                  bg="black"
                  borderRadius="md"
                  border="2px solid gold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden"
                >
                  {isSpinning ? (
                    // 回転中のアニメーション
                    <MotionBox
                      animate={{
                        y: [-30, 30, -30],
                      }}
                      transition={{
                        duration: 0.1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'linear',
                      }}
                    >
                      <VStack gap={2}>
                        {slotOptions.map((option, optionIndex) => (
                          <Text
                            key={optionIndex}
                            fontSize="xs"
                            color="yellow.300"
                            fontWeight="bold"
                            textAlign="center"
                            px={1}
                          >
                            {option}
                          </Text>
                        ))}
                      </VStack>
                    </MotionBox>
                  ) : isRevealed ? (
                    // 結果表示
                    <VStack gap={1}>
                      <MotionText
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        fontSize="xs"
                        color={isConflict && showConflictEffect ? "red.300" : 
                               showSuccessEffect ? "green.300" : "yellow.300"}
                        fontWeight="bold"
                        textAlign="center"
                        px={2}
                      >
                        {participant.choice}
                      </MotionText>
                    </VStack>
                  ) : (
                    // 待機状態
                    <Text fontSize="2xl" color="yellow.300">
                      ?
                    </Text>
                  )}
                </Box>

                {/* スロットマシンの装飾 */}
                <Box
                  position="absolute"
                  top="10px"
                  left="50%"
                  transform="translateX(-50%)"
                  w="80px"
                  h="20px"
                  bg="red.600"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="xs" color="white" fontWeight="bold">
                    SLOT
                  </Text>
                </Box>

                {/* 下部の装飾 */}
                <Box
                  position="absolute"
                  bottom="10px"
                  left="50%"
                  transform="translateX(-50%)"
                  w="60px"
                  h="15px"
                  bg="yellow.400"
                  borderRadius="md"
                />
              </MotionBox>
            </VStack>
          );
        })}
      </HStack>

      {/* 結果表示エリア */}
      {revealedResults.length > 0 && (
        <Box
          bg={showSuccessEffect ? "green.900" : "black"}
          borderRadius="lg"
          p={4}
          w="full"
          border="2px solid"
          borderColor={showSuccessEffect ? "green.400" : "gold"}
          boxShadow={showSuccessEffect ? "0 0 20px rgba(72, 187, 120, 0.5)" : "none"}
        >
          <Text color="yellow.400" fontSize="lg" fontWeight="bold" mb={2} textAlign="center">
            ✨ 開票結果 ✨
          </Text>
          <VStack gap={1}>
            {revealedResults.map((index) => {
              const participant = currentParticipants[index];
              const isConflict = conflictIds.includes(participant.id);
              
              return (
                <MotionText
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  color={isConflict && showConflictEffect ? "red.400" : 
                         showSuccessEffect ? "green.300" : "white"}
                  fontSize="md"
                  fontWeight="medium"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  {`${participant.name}: ${participant.choice}`}
                </MotionText>
              );
            })}
          </VStack>
        </Box>
      )}

      <HStack gap={4}>
        <Button colorPalette="red" onClick={handleSpin} disabled={isRevealing}>
          🎰 スロット開始
        </Button>
        <Button variant="ghost" onClick={handleReset} color="white">
          リセット
        </Button>
      </HStack>
    </VStack>
  );
};

export const Stage = ({ variant, hasConflict, isRevealing, onStartReveal, onReset }: StageProps) => {
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