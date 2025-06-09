'use client';

import { Tooltip } from '@/src/components/ui/tooltip';
import { Button, type ButtonProps } from '@chakra-ui/react';
import { type ReactElement, forwardRef } from 'react';

export interface IconActionButtonProps extends Omit<ButtonProps, 'children'> {
  icon: ReactElement;
  label: string;
  tooltip?: string;
  showTooltip?: boolean;
  animated?: boolean;
}

export const IconActionButton = forwardRef<
  HTMLButtonElement,
  IconActionButtonProps
>(
  (
    {
      icon,
      label,
      tooltip,
      showTooltip = true,
      animated = true,
      size = 'md',
      variant = 'ghost',
      colorPalette = 'gray',
      ...props
    },
    ref,
  ) => {
    const buttonElement = (
      <Button
        ref={ref}
        size={size}
        variant={variant}
        colorPalette={colorPalette}
        aria-label={label}
        transition={animated ? 'all 0.2s ease' : undefined}
        _hover={
          animated
            ? {
                transform: 'scale(1.1)',
                boxShadow: 'md',
              }
            : undefined
        }
        _active={
          animated
            ? {
                transform: 'scale(0.95)',
              }
            : undefined
        }
        _disabled={{
          opacity: 0.4,
          cursor: 'not-allowed',
          transform: 'none',
          _hover: {
            transform: 'none',
            boxShadow: 'none',
          },
        }}
        {...props}
      >
        {icon}
      </Button>
    );

    if (showTooltip && (tooltip || label)) {
      return (
        <Tooltip content={tooltip || label} positioning={{ placement: 'top' }}>
          {buttonElement}
        </Tooltip>
      );
    }

    return buttonElement;
  },
);

IconActionButton.displayName = 'IconActionButton';
