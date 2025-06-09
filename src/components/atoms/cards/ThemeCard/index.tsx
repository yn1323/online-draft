'use client';

import { Box, type BoxProps } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export interface ThemeCardProps extends BoxProps {
  children: ReactNode;
  colorScheme?: 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'pink';
  variant?: 'elevated' | 'outline' | 'filled' | 'glow';
  hoverable?: boolean;
}

const THEME_CONFIG = {
  blue: {
    light: {
      bg: 'blue.50',
      borderColor: 'blue.200',
      bgGradient: 'linear(135deg, blue.50, blue.100)',
      glowColor: 'blue.400',
    },
    dark: {
      bg: 'blue.900/40',
      borderColor: 'blue.600',
      bgGradient: 'linear(135deg, blue.900/40, blue.800/40)',
      glowColor: 'blue.300',
    },
  },
  green: {
    light: {
      bg: 'green.50',
      borderColor: 'green.200',
      bgGradient: 'linear(135deg, green.50, green.100)',
      glowColor: 'green.400',
    },
    dark: {
      bg: 'green.900/40',
      borderColor: 'green.600',
      bgGradient: 'linear(135deg, green.900/40, green.800/40)',
      glowColor: 'green.300',
    },
  },
  purple: {
    light: {
      bg: 'purple.50',
      borderColor: 'purple.200',
      bgGradient: 'linear(135deg, purple.50, purple.100)',
      glowColor: 'purple.400',
    },
    dark: {
      bg: 'purple.900/40',
      borderColor: 'purple.600',
      bgGradient: 'linear(135deg, purple.900/40, purple.800/40)',
      glowColor: 'purple.300',
    },
  },
  orange: {
    light: {
      bg: 'orange.50',
      borderColor: 'orange.200',
      bgGradient: 'linear(135deg, orange.50, orange.100)',
      glowColor: 'orange.400',
    },
    dark: {
      bg: 'orange.900/40',
      borderColor: 'orange.600',
      bgGradient: 'linear(135deg, orange.900/40, orange.800/40)',
      glowColor: 'orange.300',
    },
  },
  teal: {
    light: {
      bg: 'teal.50',
      borderColor: 'teal.200',
      bgGradient: 'linear(135deg, teal.50, teal.100)',
      glowColor: 'teal.400',
    },
    dark: {
      bg: 'teal.900/40',
      borderColor: 'teal.600',
      bgGradient: 'linear(135deg, teal.900/40, teal.800/40)',
      glowColor: 'teal.300',
    },
  },
  pink: {
    light: {
      bg: 'pink.50',
      borderColor: 'pink.200',
      bgGradient: 'linear(135deg, pink.50, pink.100)',
      glowColor: 'pink.400',
    },
    dark: {
      bg: 'pink.900/40',
      borderColor: 'pink.600',
      bgGradient: 'linear(135deg, pink.900/40, pink.800/40)',
      glowColor: 'pink.300',
    },
  },
} as const;

export const ThemeCard = ({
  children,
  colorScheme = 'blue',
  variant = 'elevated',
  hoverable = true,
  ...props
}: ThemeCardProps) => {
  const theme = THEME_CONFIG[colorScheme];

  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return {
          bgGradient: theme.light.bgGradient,
          border: '2px solid',
          borderColor: theme.light.borderColor,
          boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.25)',
          _dark: {
            bgGradient: theme.dark.bgGradient,
            borderColor: theme.dark.borderColor,
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)',
          },
        };
      case 'outline':
        return {
          bg: 'transparent',
          border: '2px solid',
          borderColor: theme.light.borderColor,
          _dark: {
            borderColor: theme.dark.borderColor,
          },
        };
      case 'filled':
        return {
          bg: theme.light.bg,
          border: '1px solid',
          borderColor: theme.light.borderColor,
          _dark: {
            bg: theme.dark.bg,
            borderColor: theme.dark.borderColor,
          },
        };
      case 'glow':
        return {
          bgGradient: theme.light.bgGradient,
          border: '2px solid',
          borderColor: theme.light.borderColor,
          boxShadow: `0 0 20px ${theme.light.glowColor}`,
          _dark: {
            bgGradient: theme.dark.bgGradient,
            borderColor: theme.dark.borderColor,
            boxShadow: `0 0 20px ${theme.dark.glowColor}`,
          },
        };
      default:
        return {};
    }
  };

  const hoverStyles = hoverable
    ? {
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow:
            variant === 'glow'
              ? `0 0 30px ${theme.light.glowColor}`
              : '0 15px 40px -15px rgba(59, 130, 246, 0.4)',
          _dark: {
            boxShadow:
              variant === 'glow'
                ? `0 0 30px ${theme.dark.glowColor}`
                : '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.15)',
          },
        },
      }
    : {};

  return (
    <Box
      p={6}
      borderRadius="xl"
      transition="all 0.2s ease"
      cursor={hoverable ? 'pointer' : 'default'}
      {...getVariantStyles()}
      {...hoverStyles}
      {...props}
    >
      {children}
    </Box>
  );
};