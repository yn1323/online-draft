'use client';

import { Badge, type BadgeProps } from '@chakra-ui/react';
import { STATUS_CONFIG } from '@/src/constants/app/draft';

export interface StatusBadgeProps extends Omit<BadgeProps, 'colorPalette'> {
  status: keyof typeof STATUS_CONFIG;
  variant?: 'solid' | 'outline' | 'subtle';
}

export const StatusBadge = ({ status, variant = 'solid', ...props }: StatusBadgeProps) => {
  const config = STATUS_CONFIG[status];

  return (
    <Badge
      colorPalette={config.colorPalette}
      variant={variant}
      fontSize="xs"
      px={2}
      py={1}
      borderRadius="md"
      fontWeight="medium"
      transition="all 0.2s ease"
      _hover={{
        transform: 'translateY(-1px)',
        boxShadow: 'sm',
      }}
      {...props}
    >
      {config.emoji} {config.text}
    </Badge>
  );
};