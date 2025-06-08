'use client';

import { Button } from '@chakra-ui/react';
import { COMPONENT_THEMES } from '@/src/constants/theme';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  const buttonTheme = COMPONENT_THEMES.button.floating;
  
  return (
    <Button
      position="fixed"
      size="lg"
      h={{ base: '52px', md: '56px' }}
      minW={{ base: '110px', md: '120px' }}
      px={4}
      borderRadius="full"
      onClick={onClick}
      fontSize="sm"
      fontWeight="bold"
      variant="solid"
      colorPalette={buttonTheme.colorPalette}
      boxShadow={buttonTheme.boxShadow}
      zIndex={1000}
      display={{ base: 'flex', lg: 'none' }}
      right={{ base: 4, md: 6 }}
      bottom={{ base: 4, md: 6 }}
      transition="all 0.2s ease"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: buttonTheme.hoverBoxShadow,
      }}
      _active={{
        transform: 'translateY(0)',
      }}
      _dark={{
        boxShadow: buttonTheme.darkBoxShadow,
        _hover: {
          boxShadow: buttonTheme.darkHoverBoxShadow,
        },
      }}
    >
      🎯 選択する
    </Button>
  );
};