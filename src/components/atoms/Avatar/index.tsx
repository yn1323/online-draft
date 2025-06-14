'use client';

import { Box, Avatar as ChakraAvatar } from '@chakra-ui/react';
import Image from 'next/image';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type AvatarProps = {
  src?: string;
  name?: string;
  size?: AvatarSize;
  avatarNumber?: string;
};

// サイズ別のピクセル値定義
const SIZE_VALUES = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 80,
  '2xl': 96,
} as const;

// 画像用のスタイル定義
const IMAGE_STYLES = {
  borderRadius: 'xl',
  border: '2px solid',
  borderColor: 'gray.200',
  bg: 'white',
  transition: 'all 0.15s ease',
} as const;

// フォールバック用のスタイル定義
const FALLBACK_STYLES = {
  bg: 'gray.100',
  color: 'gray.600',
} as const;

/**
 * 基本Avatarコンポーネント
 * アバター画像は角丸で、フォールバックは丸型
 */

export const Avatar = ({
  src,
  name,
  size = 'md',
  avatarNumber,
}: AvatarProps) => {
  const avatarImageSrc =
    src || (avatarNumber ? `/img/${avatarNumber}.png` : undefined);
  const sizeValue = SIZE_VALUES[size];

  if (avatarImageSrc) {
    return (
      <Box
        width={`${sizeValue}px`}
        height={`${sizeValue}px`}
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        {...IMAGE_STYLES}
      >
        <Image
          src={avatarImageSrc}
          alt={name || 'アバター画像'}
          width={sizeValue - 4}
          height={sizeValue - 4}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    );
  }

  return (
    <ChakraAvatar.Root size={size}>
      <ChakraAvatar.Fallback {...FALLBACK_STYLES}>
        {name ? name.charAt(0) : '?'}
      </ChakraAvatar.Fallback>
    </ChakraAvatar.Root>
  );
};
