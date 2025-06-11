'use client';

import { COMPONENT_THEMES } from '@/src/constants/theme';
import { Button } from '@chakra-ui/react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton = ({
  onClick,
}: FloatingActionButtonProps) => {
  const buttonTheme = COMPONENT_THEMES.button.primary;

  return (
    <Button
      position="fixed"
      bottom={6}
      right={6}
      size="lg"
      h="56px"
      minW="120px"
      px={4}
      borderRadius="full"
      onClick={onClick}
      fontSize="lg"
      fontWeight="bold"
      variant="solid"
      bg={buttonTheme.bg}
      color={buttonTheme.textColor}
      boxShadow="0 8px 24px -6px rgba(0, 0, 0, 0.3)"
      transition="all 0.3s ease"
      zIndex={1000}
      _hover={{
        bg: buttonTheme.hoverBg,
        transform: 'translateY(-2px) scale(1.05)',
        boxShadow: '0 12px 32px -8px rgba(0, 0, 0, 0.4)',
      }}
      _active={{
        transform: 'translateY(0) scale(0.95)',
      }}
      _dark={{
        bg: 'green.600',
        color: 'white',
        _hover: {
          bg: 'green.500',
        },
      }}
    >
      ➡️ エントリー
    </Button>
  );
};
