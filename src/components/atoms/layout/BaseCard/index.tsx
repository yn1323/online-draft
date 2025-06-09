'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import { Box, type BoxProps } from '@chakra-ui/react';
import { type ReactNode, forwardRef } from 'react';

export interface BaseCardProps extends BoxProps {
  children: ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  selected?: boolean;
  clickable?: boolean;
}

export const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  (
    {
      children,
      variant = 'elevated',
      size = 'md',
      interactive = false,
      selected = false,
      clickable = false,
      ...props
    },
    ref,
  ) => {
    // テーマカラー
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');
    const selectedBorderColor = useColorModeValue('blue.500', 'blue.300');
    const selectedBgColor = useColorModeValue('blue.50', 'blue.900/20');
    const hoverBgColor = useColorModeValue('gray.50', 'gray.700');
    const filledBgColor = useColorModeValue('gray.50', 'gray.700');

    // サイズプリセット
    const sizeMap = {
      sm: { p: 3, borderRadius: 'md' },
      md: { p: 4, borderRadius: 'lg' },
      lg: { p: 6, borderRadius: 'xl' },
    };

    const cardSize = sizeMap[size];

    // バリアント別スタイル
    const getVariantStyles = () => {
      switch (variant) {
        case 'elevated':
          return {
            bg: selected ? selectedBgColor : bgColor,
            boxShadow: 'md',
            border: '1px solid transparent',
            borderColor: selected ? selectedBorderColor : 'transparent',
          };
        case 'outlined':
          return {
            bg: selected ? selectedBgColor : bgColor,
            border: '1px solid',
            borderColor: selected ? selectedBorderColor : borderColor,
            boxShadow: 'none',
          };
        case 'filled':
          return {
            bg: selected ? selectedBgColor : filledBgColor,
            border: '1px solid transparent',
            borderColor: selected ? selectedBorderColor : 'transparent',
            boxShadow: 'none',
          };
        case 'subtle':
          return {
            bg: selected ? selectedBgColor : 'transparent',
            border: '1px solid transparent',
            borderColor: selected ? selectedBorderColor : 'transparent',
            boxShadow: 'none',
          };
        default:
          return {
            bg: bgColor,
            boxShadow: 'md',
          };
      }
    };

    // インタラクティブ時のスタイル
    const getInteractiveStyles = () => {
      if (!interactive && !clickable) {
        return {};
      }

      return {
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        _hover: {
          bg: selected ? selectedBgColor : hoverBgColor,
          transform: 'translateY(-2px)',
          boxShadow: variant === 'elevated' ? 'lg' : 'md',
        },
        _active: {
          transform: 'translateY(0px)',
        },
      };
    };

    const variantStyles = getVariantStyles();
    const interactiveStyles = getInteractiveStyles();

    return (
      <Box
        ref={ref}
        {...cardSize}
        {...variantStyles}
        {...interactiveStyles}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

BaseCard.displayName = 'BaseCard';
