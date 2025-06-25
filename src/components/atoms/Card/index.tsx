'use client';

import { Box, Card as ChakraCard } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  variant?: 'elevated' | 'outline' | 'subtle' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  padding?: number;
};

/**
 * 基本Cardコンポーネント
 * Chakra UI v3 Modern APIを使用した統一的なカード
 */
// サイズ別のパディング定義
const SIZE_PADDING = {
  sm: 3,
  md: 4,
  lg: 6,
} as const;

// バリアント別のスタイル定義
const VARIANT_STYLES = {
  elevated: {
    bg: 'white',
    boxShadow: 'lg',
    border: 'none',
    _hover: {
      boxShadow: 'xl',
    },
  },
  outline: {
    bg: 'white',
    border: '2px solid',
    borderColor: 'gray.200',
    boxShadow: 'none',
    _hover: {
      borderColor: 'gray.400',
    },
  },
  subtle: {
    bg: 'gray.50',
    border: 'none',
    boxShadow: 'none',
  },
  filled: {
    bg: 'blue.50',
    border: 'none',
    boxShadow: 'none',
  },
} as const;

export const Card = ({
  children,
  variant = 'elevated',
  size = 'md',
  padding,
}: CardProps) => {
  const computedPadding = padding ?? SIZE_PADDING[size];
  const variantStyle = VARIANT_STYLES[variant];

  return (
    <ChakraCard.Root
      {...variantStyle}
      p={computedPadding}
      borderRadius="lg"
      transition="all 0.15s ease"
    >
      {children}
    </ChakraCard.Root>
  );
};
