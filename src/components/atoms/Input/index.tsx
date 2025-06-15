'use client';

import { Input as ChakraInput } from '@chakra-ui/react';
import type { ChangeEvent, ComponentProps } from 'react';
import { forwardRef } from 'react';

type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'outline' | 'subtle' | 'flushed';

// 基本のカスタムProps型定義  
type CustomInputProps = {
  size?: InputSize;
  variant?: InputVariant;
  error?: boolean;
  width?: string;
  // 後方互換性のため文字列onChangeも許可
  onChange?: ((value: string) => void) | ((e: ChangeEvent<HTMLInputElement>) => void);
};

// HTMLInputElementの標準プロパティとの合成型（size, onChangeを除外）
type InputProps = CustomInputProps & Omit<ComponentProps<'input'>, 'size' | 'onChange'>;

// 共通スタイル定義
const INPUT_STYLES = {
  bg: 'white',
  borderColor: 'gray.200',
  color: 'gray.700',
  transition: 'all 0.15s ease',
  width: 'full', // デフォルト幅を100%に設定
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
 * react-hook-form対応（forwardRef使用）
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  size = 'md',
  variant = 'outline',
  error = false,
  width,
  onChange,
  ...rest
}, ref) => {
  // エラー状態のスタイル
  const errorStyles = error
    ? {
        borderColor: 'red.500',
        _focus: {
          borderColor: 'red.500',
          boxShadow: '0 0 0 1px #e53e3e',
        },
        _hover: {
          borderColor: 'red.500',
        },
      }
    : {};

  // 幅のスタイル（カスタム幅が指定された場合は上書き）
  const widthStyles = width ? { width } : {};

  // onChangeハンドラー: 文字列型とイベント型の両方に対応
  const handleChange = onChange 
    ? (e: ChangeEvent<HTMLInputElement>) => {
        // 既存コンポーネントとの互換性チェック
        if (onChange.length === 1) {
          // 引数が1つ = 文字列型のonChange（既存コンポーネント用）
          (onChange as (value: string) => void)(e.target.value);
        } else {
          // 引数が2つ以上 = イベント型のonChange（react-hook-form用）
          (onChange as (e: ChangeEvent<HTMLInputElement>) => void)(e);
        }
      }
    : undefined;

  return (
    <ChakraInput
      ref={ref}
      size={size}
      variant={variant}
      onChange={handleChange}
      {...INPUT_STYLES}
      {...errorStyles}
      {...widthStyles}
      {...rest}
    />
  );
});

// displayNameを設定（DevToolsでの表示用）
Input.displayName = 'Input';
