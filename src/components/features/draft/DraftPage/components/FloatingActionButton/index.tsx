'use client';

import { Button } from '@chakra-ui/react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
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
      fontSize="sm"
      fontWeight="bold"
      variant="solid"
      colorPalette="blue"
      boxShadow="0 8px 25px -8px rgba(59, 130, 246, 0.5)"
      zIndex={1000}
      display={{ base: 'flex', lg: 'none' }}
      transition="all 0.2s ease"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 35px -8px rgba(59, 130, 246, 0.6)',
      }}
      _active={{
        transform: 'translateY(0)',
      }}
      _dark={{
        boxShadow: '0 8px 25px -8px rgba(96, 165, 250, 0.4)',
        _hover: {
          boxShadow: '0 12px 35px -8px rgba(96, 165, 250, 0.5)',
        },
      }}
    >
      🎯 選択する
    </Button>
  );
};