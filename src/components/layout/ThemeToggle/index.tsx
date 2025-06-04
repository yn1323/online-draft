'use client';

import { useColorMode } from '@/src/components/ui/color-mode';
import {
  Box,
  Button,
  ClientOnly,
  IconButton,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiSettings, FiX } from 'react-icons/fi';

export const ThemeToggle = () => {
  const { colorMode, setColorMode } = useColorMode();
  const [isMinimized, setIsMinimized] = useState(true);

  return (
    <ClientOnly
      fallback={
        <IconButton
          aria-label="テーマ切り替え"
          position="fixed"
          top={4}
          left={4}
          zIndex={1000}
          size="sm"
          variant="solid"
          bg="bg.panel"
          border="1px"
          borderColor="border"
          shadow="sm"
        >
          <FiSettings />
        </IconButton>
      }
    >
      <Box position="fixed" top={4} left={4} zIndex={1000}>
        {isMinimized ? (
          <IconButton
            aria-label="テーマ設定を開く"
            onClick={() => setIsMinimized(false)}
            size="sm"
            variant="solid"
            bg="bg.panel"
            border="1px"
            borderColor="border"
            shadow="sm"
            _hover={{ bg: 'bg.muted' }}
            transition="all 0.2s"
          >
            <FiSettings />
          </IconButton>
        ) : (
          <VStack
            gap={2}
            bg="bg.panel"
            p={3}
            borderRadius="md"
            border="1px"
            borderColor="border"
            shadow="lg"
            minWidth="120px"
            transition="all 0.2s"
          >
            <Box width="full" position="relative">
              <Text
                fontSize="xs"
                fontWeight="bold"
                color="gray.600"
                _dark={{ color: 'gray.400' }}
              >
                デバッグ
              </Text>
              <IconButton
                aria-label="閉じる"
                onClick={() => setIsMinimized(true)}
                size="xs"
                variant="ghost"
                position="absolute"
                top={-1}
                right={-2}
                _hover={{ bg: 'bg.muted' }}
              >
                <FiX />
              </IconButton>
            </Box>

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
        )}
      </Box>
    </ClientOnly>
  );
};
