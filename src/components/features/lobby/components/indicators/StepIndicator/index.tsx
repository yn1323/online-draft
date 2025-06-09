'use client';

import { Box, HStack, Text } from '@chakra-ui/react';

export type Step = 'select' | 'create';

interface StepIndicatorProps {
  currentStep: Step;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <HStack justify="center" gap={4}>
      <HStack gap={2}>
        <Box
          w={8}
          h={8}
          borderRadius="full"
          bg={currentStep === 'select' ? 'blue.500' : 'gray.300'}
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="sm"
          fontWeight="bold"
          transition="all 0.3s"
        >
          1
        </Box>
        <Text
          fontSize="sm"
          color={currentStep === 'select' ? 'blue.600' : 'gray.500'}
          _dark={{
            color: currentStep === 'select' ? 'blue.400' : 'gray.400',
          }}
          fontWeight={currentStep === 'select' ? 'bold' : 'normal'}
        >
          ユーザー選択
        </Text>
      </HStack>
      <Box w={8} h={0.5} bg="gray.300" />
      <HStack gap={2}>
        <Box
          w={8}
          h={8}
          borderRadius="full"
          bg={currentStep === 'create' ? 'green.500' : 'gray.300'}
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="sm"
          fontWeight="bold"
          transition="all 0.3s"
        >
          2
        </Box>
        <Text
          fontSize="sm"
          color={currentStep === 'create' ? 'green.600' : 'gray.500'}
          _dark={{
            color: currentStep === 'create' ? 'green.400' : 'gray.400',
          }}
          fontWeight={currentStep === 'create' ? 'bold' : 'normal'}
        >
          ユーザー作成
        </Text>
      </HStack>
    </HStack>
  );
}
