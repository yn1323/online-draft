'use client';

import { Input as ChakraInput } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';

type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'outline' | 'subtle' | 'flushed';

type InputProps = {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: InputSize;
  variant?: InputVariant;
  type?: 'text' | 'email' | 'password' | 'number';
  maxLength?: number;
  required?: boolean;
  onChange?: (value: string) => void;
};

// 共通スタイル定義
const INPUT_STYLES = {
  bg: 'white',
  borderColor: 'gray.200',
  color: 'gray.700',
  transition: 'all 0.15s ease',
  _hover: {
    borderColor: 'gray.400',
  },
  _focus: {
    borderColor: 'blue.400',
    boxShadow: '0 0 0 1px #3182ce',
  },
  _placeholder: {
    color: 'gray.400',
  },
  _disabled: {
    bg: 'gray.50',
    color: 'gray.500',
    cursor: 'not-allowed',
  },
} as const;

/**
 * 基本Inputコンポーネント
 * Chakra UI v3を使用した統一的な入力フィールド
 */
export const Input = ({
  value,
  placeholder,
  disabled = false,
  size = 'md',
  variant = 'outline',
  type = 'text',
  maxLength,
  required = false,
  onChange,
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <ChakraInput
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      size={size}
      variant={variant}
      type={type}
      maxLength={maxLength}
      required={required}
      onChange={handleChange}
      {...INPUT_STYLES}
    />
  );
};