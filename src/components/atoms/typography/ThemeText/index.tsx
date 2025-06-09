'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import { Text, type TextProps } from '@chakra-ui/react';
import { type ComponentProps, type ElementRef, forwardRef } from 'react';

export interface ThemeTextProps extends TextProps {
  variant?: 'body' | 'caption' | 'label' | 'helper' | 'error' | 'success';
  responsive?: boolean;
}

export const ThemeText = forwardRef<ElementRef<typeof Text>, ThemeTextProps>(
  ({ variant = 'body', responsive = false, children, ...props }, ref) => {
    // テーマカラーの設定
    const bodyColor = useColorModeValue('gray.800', 'gray.200');
    const captionColor = useColorModeValue('gray.600', 'gray.400');
    const labelColor = useColorModeValue('gray.700', 'gray.300');
    const helperColor = useColorModeValue('gray.500', 'gray.400');
    const errorColor = useColorModeValue('red.600', 'red.300');
    const successColor = useColorModeValue('green.600', 'green.300');

    // バリアント別スタイル設定
    const getVariantStyles = () => {
      switch (variant) {
        case 'body':
          return {
            color: bodyColor,
            fontSize: responsive ? { base: 'sm', md: 'md' } : 'md',
            fontWeight: 'normal',
            lineHeight: '1.6',
          };
        case 'caption':
          return {
            color: captionColor,
            fontSize: responsive ? { base: 'xs', md: 'sm' } : 'sm',
            fontWeight: 'normal',
            lineHeight: '1.4',
          };
        case 'label':
          return {
            color: labelColor,
            fontSize: responsive ? { base: 'sm', md: 'md' } : 'sm',
            fontWeight: 'medium',
            lineHeight: '1.4',
          };
        case 'helper':
          return {
            color: helperColor,
            fontSize: responsive ? { base: 'xs', md: 'sm' } : 'xs',
            fontWeight: 'normal',
            lineHeight: '1.3',
          };
        case 'error':
          return {
            color: errorColor,
            fontSize: responsive ? { base: 'xs', md: 'sm' } : 'sm',
            fontWeight: 'medium',
            lineHeight: '1.4',
          };
        case 'success':
          return {
            color: successColor,
            fontSize: responsive ? { base: 'xs', md: 'sm' } : 'sm',
            fontWeight: 'medium',
            lineHeight: '1.4',
          };
        default:
          return {
            color: bodyColor,
            fontSize: responsive ? { base: 'sm', md: 'md' } : 'md',
          };
      }
    };

    const variantStyles = getVariantStyles();

    return (
      <Text ref={ref} {...variantStyles} {...props}>
        {children}
      </Text>
    );
  },
);

ThemeText.displayName = 'ThemeText';
