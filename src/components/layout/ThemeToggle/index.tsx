'use client';

import { Button, VStack, Text, ClientOnly, Skeleton } from '@chakra-ui/react';
import { useColorMode } from '@/src/components/ui/color-mode';

export const ThemeToggle = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <ClientOnly fallback={
      <VStack
        position="fixed"
        top={4}
        left={4}
        zIndex={1000}
        gap={2}
        bg="bg.panel"
        p={3}
        borderRadius="md"
        border="1px"
        borderColor="border"
        shadow="sm"
      >
        <Skeleton height="20px" width="60px" />
        <Skeleton height="32px" width="80px" />
        <Skeleton height="32px" width="80px" />
      </VStack>
    }>
      <VStack
        position="fixed"
        top={4}
        left={4}
        zIndex={1000}
        gap={2}
        bg="bg.panel"
        p={3}
        borderRadius="md"
        border="1px"
        borderColor="border"
        shadow="sm"
      >
        <Text fontSize="xs" fontWeight="bold" color="gray.600" _dark={{ color: 'gray.400' }}>
          デバッグ
        </Text>
        
        <Button
          size="sm"
          variant={colorMode === 'light' ? 'solid' : 'outline'}
          colorPalette="yellow"
          onClick={() => setColorMode('light')}
          width="full"
        >
          ☀️ ライト
        </Button>
        
        <Button
          size="sm"
          variant={colorMode === 'dark' ? 'solid' : 'outline'}
          colorPalette="blue"
          onClick={() => setColorMode('dark')}
          width="full"
        >
          🌙 ダーク
        </Button>
        
        <Text fontSize="xs" color="gray.500">
          現在: {colorMode === 'dark' ? 'ダーク' : 'ライト'}
        </Text>
      </VStack>
    </ClientOnly>
  );
};