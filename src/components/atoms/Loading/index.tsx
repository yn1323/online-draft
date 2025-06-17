'use client';

import { Spinner, Text, VStack } from '@chakra-ui/react';

type LoadingProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
  color?: string;
};

/**
 * ローディングコンポーネント
 * 統一感のあるスピナーアニメーションとメッセージを表示
 */
export const Loading = ({
  size = 'lg',
  message = '読み込み中...',
  color = 'blue.400',
}: LoadingProps) => {
  return (
    <VStack gap={4} align="center" justify="center" minH="200px" py={8}>
      <Spinner
        size={size}
        color={color}
        borderWidth="4px"
        animationDuration="0.8s"
      />
      <Text
        fontSize="lg"
        color="gray.600"
        fontWeight="medium"
        textAlign="center"
      >
        {message}
      </Text>
    </VStack>
  );
};
