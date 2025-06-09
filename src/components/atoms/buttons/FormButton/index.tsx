'use client';

import { Button, type ButtonProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export interface FormButtonProps extends ButtonProps {
  isLoading?: boolean;
  isValid?: boolean;
  loadingText?: string;
  animated?: boolean;
  form?: string;
}

export const FormButton = forwardRef<HTMLButtonElement, FormButtonProps>(
  (
    {
      isLoading = false,
      isValid = true,
      loadingText,
      animated = true,
      children,
      disabled,
      type = 'button',
      colorPalette = 'blue',
      size = 'lg',
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || !isValid || isLoading;

    return (
      <Button
        ref={ref}
        type={type}
        colorPalette={colorPalette}
        size={size}
        loading={isLoading}
        loadingText={loadingText}
        disabled={isDisabled}
        transition={animated ? 'all 0.2s ease' : undefined}
        _hover={
          animated && !isDisabled
            ? {
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }
            : undefined
        }
        _active={
          animated && !isDisabled
            ? {
                transform: 'translateY(0px)',
              }
            : undefined
        }
        _disabled={{
          opacity: 0.6,
          cursor: 'not-allowed',
          transform: 'none',
          _hover: {
            transform: 'none',
            boxShadow: 'none',
          },
        }}
        {...props}
      >
        {children}
      </Button>
    );
  },
);

FormButton.displayName = 'FormButton';
