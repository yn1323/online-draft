'use client';

import { Badge, type BadgeProps } from '@chakra-ui/react';

export interface StatusBadgeProps extends Omit<BadgeProps, 'colorPalette'> {
  status: 'thinking' | 'entered' | 'completed' | 'pending' | 'active' | 'done';
  variant?: 'solid' | 'outline' | 'subtle';
}

const STATUS_CONFIG = {
  thinking: {
    colorPalette: 'yellow',
    emoji: '🤔',
    text: '検討中',
  },
  entered: {
    colorPalette: 'blue',
    emoji: '✏️',
    text: '入力済',
  },
  completed: {
    colorPalette: 'green',
    emoji: '✅',
    text: '完了',
  },
  pending: {
    colorPalette: 'gray',
    emoji: '⏳',
    text: '待機中',
  },
  active: {
    colorPalette: 'purple',
    emoji: '⚡',
    text: '進行中',
  },
  done: {
    colorPalette: 'teal',
    emoji: '🎯',
    text: '完了',
  },
} as const;

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