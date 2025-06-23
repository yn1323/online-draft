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
import { useState } from 'react';
import type { getCommonResponsiveValues, ParticipantResult } from '../index';

const MotionBox = motion(Box);
const MotionText = motion(Text);

type TypingStageProps = {
  participants: ParticipantResult[];
  isRevealing: boolean;
  onStartReveal: () => void;
  onReset: () => void;
  getCommonResponsiveValues: typeof getCommonResponsiveValues;
};

export const TypingStage = ({
  participants,
  isRevealing,
  onStartReveal,
  onReset,
  getCommonResponsiveValues,
}: TypingStageProps) => {
  const [typedResults, setTypedResults] = useState<string[]>([]);
  const [currentlyTyping, setCurrentlyTyping] = useState(-1);
  const [showEffect, setShowEffect] = useState(false);

  // 共通のレスポンシブ値を使用
  const responsive = getCommonResponsiveValues();
  const terminalPadding = useBreakpointValue(responsive.padding);
  const textFontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const minHeight = useBreakpointValue({ base: '300px', md: '250px' });

  const handleType = () => {
    setTypedResults([]);
    setCurrentlyTyping(-1);
    setShowEffect(false);
    onStartReveal();

    let completedCount = 0;

    participants.forEach((participant, participantIndex) => {
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
              if (completedCount === participants.length) {
                // 0.5秒後にエフェクト開始
                setTimeout(() => {
                  setShowEffect(true);
                }, 500);
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
    setShowEffect(false);
    onReset();
  };

  return (
    <VStack
      gap={[3, 6]}
      p={[3, 6]}
      bg="gray.900"
      borderRadius="xl"
      minH={['350px', '400px']}
    >
      <Text
        fontSize={['lg', '2xl']}
        fontWeight="bold"
        color="green.400"
        fontFamily="mono"
      >
        タイピング演出
      </Text>

      <Box
        bg={showEffect ? 'green.900' : 'black'}
        borderRadius="lg"
        p={terminalPadding}
        w="full"
        minH={minHeight}
        border="2px solid"
        borderColor={showEffect ? 'green.400' : 'green'}
        fontFamily="mono"
        boxShadow={showEffect ? '0 0 20px rgba(72, 187, 120, 0.5)' : 'none'}
        overflowX="auto"
      >
        <Text color="green.400" fontSize="sm" mb={2}>
          開票結果を表示中...
        </Text>

        {typedResults.map((result, index) => {
          const participant = participants[index];
          const willLose = participant?.willLose || false;

          return (
            <MotionText
              key={index}
              color={
                willLose && showEffect
                  ? 'red.400'
                  : showEffect
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
                willLose && showEffect
                  ? {
                      color: ['#68D391', '#F56565', '#68D391'],
                    }
                  : showEffect
                    ? {
                        color: ['#68D391', '#9AE6B4', '#68D391'],
                      }
                    : {}
              }
              transition={
                showEffect
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
                  bg={willLose && showEffect ? 'red.400' : 'green.400'}
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
