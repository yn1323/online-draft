'use client';

import { Button } from '@chakra-ui/react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
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
      colorPalette="green"
      boxShadow="0 8px 25px -8px rgba(34, 197, 94, 0.5)"
      zIndex={1000}
      display={{ base: 'flex', lg: 'none' }}
      right={{ base: 4, md: 6 }}
      bottom={{ base: 4, md: 6 }}
      transition="all 0.2s ease"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 35px -8px rgba(34, 197, 94, 0.6)',
      }}
      _active={{
        transform: 'translateY(0)',
      }}
      _dark={{
        boxShadow: '0 8px 25px -8px rgba(34, 197, 94, 0.4)',
        _hover: {
          boxShadow: '0 12px 35px -8px rgba(34, 197, 94, 0.5)',
        },
      }}
    >
      🎯 選択する
    </Button>
  );
};