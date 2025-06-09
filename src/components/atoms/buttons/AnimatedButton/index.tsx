'use client';

import { Button, type ButtonProps } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
  animationType?: 'lift' | 'bounce' | 'pulse' | 'glow' | 'scale';
  glowColor?: string;
}

export const AnimatedButton = ({
  children,
  animationType = 'lift',
  glowColor,
  ...props
}: AnimatedButtonProps) => {
  const getAnimationStyles = () => {
    const baseTransition = 'all 0.2s ease';

    switch (animationType) {
      case 'lift':
        return {
          transition: baseTransition,
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
            _disabled: {
              transform: 'none',
              boxShadow: 'none',
            },
          },
          _active: {
            transform: 'translateY(0px)',
            boxShadow: 'md',
          },
        };

      case 'bounce':
        return {
          transition: baseTransition,
          _hover: {
            transform: 'scale(1.05)',
            _disabled: {
              transform: 'none',
            },
          },
          _active: {
            transform: 'scale(0.98)',
          },
        };

      case 'pulse':
        return {
          transition: baseTransition,
          _hover: {
            transform: 'scale(1.02)',
            opacity: 0.9,
            _disabled: {
              transform: 'none',
              opacity: 1,
            },
          },
          _active: {
            transform: 'scale(0.99)',
          },
        };

      case 'glow':
        return {
          transition: baseTransition,
          _hover: {
            boxShadow: glowColor
              ? `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`
              : '0 0 20px currentColor, 0 0 40px currentColor',
            transform: 'translateY(-1px)',
            _disabled: {
              boxShadow: 'none',
              transform: 'none',
            },
          },
          _active: {
            transform: 'translateY(0px)',
          },
        };

      case 'scale':
        return {
          transition: baseTransition,
          _hover: {
            transform: 'scale(1.08)',
            _disabled: {
              transform: 'none',
            },
          },
          _active: {
            transform: 'scale(0.95)',
          },
        };

      default:
        return {};
    }
  };

  return (
    <Button
      {...getAnimationStyles()}
      {...props}
    >
      {children}
    </Button>
  );
};