'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import { Heading, type HeadingProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export interface ResponsiveHeadingProps extends HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  responsive?: boolean;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const ResponsiveHeading = forwardRef<
  HTMLHeadingElement,
  ResponsiveHeadingProps
>(
  (
    { level = 2, responsive = true, variant = 'primary', children, ...props },
    ref,
  ) => {
    // テーマカラーの設定
    const primaryColor = useColorModeValue('gray.800', 'gray.100');
    const secondaryColor = useColorModeValue('gray.700', 'gray.200');
    const accentColor = useColorModeValue('blue.600', 'blue.300');

    // レベル別サイズプリセット
    const getSizePreset = () => {
      if (!responsive) {
        // 非レスポンシブの場合はChakra UIの標準サイズを使用
        const sizeMap = {
          1: '4xl',
          2: '3xl',
          3: '2xl',
          4: 'xl',
          5: 'lg',
          6: 'md',
        } as const;
        return sizeMap[level];
      }

      // レスポンシブサイズプリセット
      const responsiveSizes = {
        1: { base: '2xl', md: '4xl', lg: '5xl' },
        2: { base: 'xl', md: '3xl', lg: '4xl' },
        3: { base: 'lg', md: '2xl', lg: '3xl' },
        4: { base: 'md', md: 'xl', lg: '2xl' },
        5: { base: 'sm', md: 'lg', lg: 'xl' },
        6: { base: 'xs', md: 'md', lg: 'lg' },
      } as const;

      return responsiveSizes[level];
    };

    // バリアント別カラー設定
    const getVariantColor = () => {
      switch (variant) {
        case 'primary':
          return primaryColor;
        case 'secondary':
          return secondaryColor;
        case 'accent':
          return accentColor;
        default:
          return primaryColor;
      }
    };

    const size = getSizePreset();
    const color = getVariantColor();

    return (
      <Heading
        ref={ref}
        as={`h${level}` as const}
        size={size}
        color={color}
        fontWeight="bold"
        lineHeight="1.2"
        {...props}
      >
        {children}
      </Heading>
    );
  },
);

ResponsiveHeading.displayName = 'ResponsiveHeading';
