'use client';

import { Button as ChakraButton } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  width?: 'auto' | 'full';
};

/**
 * 基本Buttonコンポーネント
 * Chakra UI v3 Modern APIを使用した統一的なボタン
 */
// バリアント別のスタイル定義（定数として分離）
const VARIANT_STYLES = {
  primary: {
    bg: 'blue.400',
    color: 'white',
    _hover: { bg: 'blue.500' },
    _active: { bg: 'blue.600' },
  },
  secondary: {
    bg: 'orange.400',
    color: 'white',
    _hover: { bg: 'orange.500' },
    _active: { bg: 'orange.600' },
  },
  accent: {
    bg: 'pink.400',
    color: 'white',
    _hover: { bg: 'pink.500' },
    _active: { bg: 'pink.600' },
  },
  outline: {
    bg: 'transparent',
    border: '2px solid',
    borderColor: 'blue.400',
    color: 'blue.400',
    _hover: {
      bg: 'blue.50',
      borderColor: 'blue.500',
      color: 'blue.500',
    },
    _active: {
      bg: 'blue.100',
    },
  },
  ghost: {
    bg: 'transparent',
    color: 'gray.700',
    _hover: { bg: 'gray.100' },
    _active: { bg: 'gray.200' },
  },
} as const;

// シャドウが必要なバリアント
const SHADOW_VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'accent'];

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  width = 'auto',
}: ButtonProps) => {
  const variantStyle = VARIANT_STYLES[variant];
  const hasShadow = SHADOW_VARIANTS.includes(variant);

  return (
    <ChakraButton
      {...variantStyle}
      size={size}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      w={width === 'full' ? 'full' : 'auto'}
      loading={loading}
      transition="all 0.15s ease"
      borderRadius="xl"
      boxShadow={hasShadow ? 'lg' : 'none'}
      _hover={{
        ...variantStyle._hover,
        transform: 'translateY(-2px)',
        boxShadow: hasShadow ? 'xl' : 'none',
      }}
      _active={{
        ...variantStyle._active,
        transform: 'translateY(0)',
        boxShadow: hasShadow ? 'md' : 'none',
      }}
    >
      {children}
    </ChakraButton>
  );
};
