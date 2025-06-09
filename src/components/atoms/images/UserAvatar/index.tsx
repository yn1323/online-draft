'use client';

import { Box, Image, type ImageProps, Text } from '@chakra-ui/react';
import { forwardRef, useState } from 'react';

type AvatarSizeConfig = {
  width: string;
  height: string;
  fontSize: string;
};

export interface UserAvatarProps extends Omit<ImageProps, 'src' | 'alt'> {
  src?: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  shape?: 'square' | 'circle';
  fallback?: string;
  showFallback?: boolean;
  borderStyle?: 'none' | 'subtle' | 'solid';
  status?: 'online' | 'offline' | 'away' | 'busy';
  showStatus?: boolean;
}

export const UserAvatar = forwardRef<HTMLImageElement, UserAvatarProps>(
  (
    {
      src,
      alt,
      size = 'md',
      shape = 'square',
      fallback,
      showFallback = true,
      borderStyle = 'none',
      status,
      showStatus = false,
      ...props
    },
    ref,
  ) => {
    const [hasError, setHasError] = useState(false);

    // サイズプリセット
    const sizeMap: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', AvatarSizeConfig> & { custom: Record<string, never> } = {
      xs: { width: '24px', height: '24px', fontSize: 'xs' },
      sm: { width: '32px', height: '32px', fontSize: 'sm' },
      md: { width: '48px', height: '48px', fontSize: 'md' },
      lg: { width: '60px', height: '60px', fontSize: 'lg' },
      xl: { width: '80px', height: '80px', fontSize: 'xl' },
      custom: {}, // カスタムサイズの場合は空オブジェクト
    };

    // サイズ設定の取得
    const getSizeConfig = (): AvatarSizeConfig => {
      if (size === 'custom') {
        return { width: '48px', height: '48px', fontSize: 'md' }; // デフォルト値
      }
      return sizeMap[size as keyof typeof sizeMap] as AvatarSizeConfig;
    };
    
    const avatarSize = getSizeConfig();

    // ボーダースタイル
    const getBorderStyle = () => {
      switch (borderStyle) {
        case 'subtle':
          return {
            border: '1px solid',
            borderColor: 'gray.200',
            _dark: { borderColor: 'gray.600' },
          };
        case 'solid':
          return {
            border: '2px solid',
            borderColor: 'gray.300',
            _dark: { borderColor: 'gray.500' },
          };
        default:
          return {};
      }
    };

    // ステータス色
    const getStatusColor = () => {
      switch (status) {
        case 'online':
          return 'green.500';
        case 'away':
          return 'yellow.500';
        case 'busy':
          return 'red.500';
        default:
          return 'gray.400';
      }
    };

    const borderRadius = shape === 'circle' ? 'full' : 'md';
    const borderStyles = getBorderStyle();

    // エラーまたはsrcがない場合のフォールバック表示
    if (hasError || !src) {
      if (!showFallback) {
        return null;
      }

      const fallbackText = fallback || alt.charAt(0).toUpperCase();

      return (
        <Box
          position="relative"
          {...avatarSize}
          borderRadius={borderRadius}
          bg="gray.200"
          _dark={{ bg: 'gray.600' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          {...borderStyles}
        >
          <Text
            fontSize={avatarSize.fontSize}
            fontWeight="bold"
            color="gray.600"
            _dark={{ color: 'gray.300' }}
          >
            {fallbackText}
          </Text>

          {/* ステータスインジケーター */}
          {showStatus && status && (
            <Box
              position="absolute"
              bottom="-2px"
              right="-2px"
              width="12px"
              height="12px"
              borderRadius="full"
              bg={getStatusColor()}
              border="2px solid white"
              _dark={{ borderColor: 'gray.800' }}
            />
          )}
        </Box>
      );
    }

    return (
      <Box position="relative" display="inline-block">
        <Image
          ref={ref}
          src={src}
          alt={alt}
          {...avatarSize}
          borderRadius={borderRadius}
          objectFit="cover"
          objectPosition="center"
          onError={() => setHasError(true)}
          {...borderStyles}
          {...props}
        />

        {/* ステータスインジケーター */}
        {showStatus && status && (
          <Box
            position="absolute"
            bottom="-2px"
            right="-2px"
            width="12px"
            height="12px"
            borderRadius="full"
            bg={getStatusColor()}
            border="2px solid white"
            _dark={{ borderColor: 'gray.800' }}
          />
        )}
      </Box>
    );
  },
);

UserAvatar.displayName = 'UserAvatar';
