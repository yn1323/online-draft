'use client';

import { useColorModeValue } from '@/src/components/ui/color-mode';
import { Text, Textarea, type TextareaProps, VStack } from '@chakra-ui/react';
import { forwardRef, useState } from 'react';

export interface ThemeTextareaProps extends Omit<TextareaProps, 'onChange'> {
  label?: string;
  helperText?: string;
  errorText?: string;
  maxLength?: number;
  showCharacterCount?: boolean;
  onChange?: (value: string) => void;
  invalid?: boolean;
  autoResize?: boolean;
}

export const ThemeTextarea = forwardRef<
  HTMLTextAreaElement,
  ThemeTextareaProps
>(
  (
    {
      label,
      helperText,
      errorText,
      maxLength,
      showCharacterCount = false,
      onChange,
      invalid = false,
      value = '',
      autoResize = false,
      rows = 4,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(value as string);
    const currentValue = value || internalValue;

    const borderColor = useColorModeValue('gray.300', 'gray.600');
    const focusBorderColor = useColorModeValue('blue.500', 'blue.300');
    const errorBorderColor = useColorModeValue('red.500', 'red.300');
    const hoverBorderColor = useColorModeValue('gray.400', 'gray.500');
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'gray.200');
    const placeholderColor = useColorModeValue('gray.500', 'gray.400');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);
    };

    const isError = invalid || !!errorText;
    const currentLength = String(currentValue).length;

    return (
      <VStack gap={1} align="stretch">
        {/* Label */}
        {label && (
          <Text fontSize="sm" fontWeight="medium" color={textColor} mb={1}>
            {label}
            {props.required && (
              <Text as="span" color={errorBorderColor} ml={1}>
                *
              </Text>
            )}
          </Text>
        )}

        {/* Textarea */}
        <Textarea
          ref={ref}
          value={currentValue}
          onChange={handleChange}
          maxLength={maxLength}
          rows={rows}
          resize={autoResize ? 'vertical' : 'none'}
          borderWidth={2}
          borderColor={isError ? errorBorderColor : borderColor}
          bg={bgColor}
          color={textColor}
          _placeholder={{ color: placeholderColor }}
          _hover={{
            borderColor: isError ? errorBorderColor : hoverBorderColor,
          }}
          _focus={{
            borderColor: isError ? errorBorderColor : focusBorderColor,
            boxShadow: `0 0 0 1px ${isError ? errorBorderColor : focusBorderColor}`,
            transform: 'scale(1.01)',
          }}
          _disabled={{
            opacity: 0.6,
            cursor: 'not-allowed',
            transform: 'none',
          }}
          transition="all 0.2s ease"
          {...props}
        />

        {/* Helper/Error Text & Character Count */}
        {(helperText || errorText || showCharacterCount) && (
          <VStack gap={0} align="stretch">
            {/* Helper/Error Text */}
            {(helperText || errorText) && (
              <Text
                fontSize="sm"
                color={isError ? errorBorderColor : placeholderColor}
              >
                {errorText || helperText}
              </Text>
            )}

            {/* Character Count */}
            {showCharacterCount && maxLength && (
              <Text
                fontSize="xs"
                color={
                  currentLength > maxLength * 0.8
                    ? errorBorderColor
                    : placeholderColor
                }
                textAlign="right"
              >
                {currentLength}/{maxLength}
              </Text>
            )}
          </VStack>
        )}
      </VStack>
    );
  },
);

ThemeTextarea.displayName = 'ThemeTextarea';
