'use client';

import { Box, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
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
  const [typedChoices, setTypedChoices] = useState<string[]>([]); // 選択肢のタイピング状況
  const [currentlyTyping, setCurrentlyTyping] = useState(-1);
  const [showEffect, setShowEffect] = useState(false);

  // 共通のレスポンシブ値を使用
  const responsive = getCommonResponsiveValues();
  const terminalPadding = useBreakpointValue(responsive.padding);
  const textFontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const minHeight = useBreakpointValue({ base: '300px', md: '250px' });

  const handleType = useCallback(() => {
    setTypedChoices([]);
    setCurrentlyTyping(-1);
    setShowEffect(false);
    onStartReveal();

    let completedCount = 0;

    participants.forEach((participant, participantIndex) => {
      setTimeout(() => {
        setCurrentlyTyping(participantIndex);
        const choiceText = participant.choice;

        for (let i = 0; i <= choiceText.length; i++) {
          setTimeout(() => {
            const currentChoice = choiceText.substring(0, i);
            setTypedChoices((prev) => {
              const newChoices = [...prev];
              newChoices[participantIndex] = currentChoice;
              return newChoices;
            });

            if (i === choiceText.length) {
              setCurrentlyTyping(-1);
              completedCount++;
              // 全員のタイピングが完了したかチェック
              if (completedCount === participants.length) {
                // 0.5秒後にエフェクト開始
                setTimeout(() => {
                  setShowEffect(true);
                }, 300);
              }
            }
          }, i * 80);
        }
      }, participantIndex * 1000);
    });
  }, [participants, onStartReveal]);

  // 自動開始ロジック
  useEffect(() => {
    if (isRevealing && typedChoices.length === 0) {
      handleType();
    }
  }, [isRevealing, typedChoices.length, handleType]);

  const _handleReset = () => {
    setTypedChoices([]);
    setCurrentlyTyping(-1);
    setShowEffect(false);
    onReset();
  };

  return (
    <VStack gap={[3, 6]} p={[3, 6]} minH={['350px', '400px']} w="full">
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
        {participants.map((participant, index) => {
          const willLose = participant?.willLose || false;
          const typedChoice = typedChoices[index] || '';

          return (
            <MotionText
              key={participant.id}
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
              {participant.name}: {typedChoice}
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
    </VStack>
  );
};
