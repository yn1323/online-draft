'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import z from 'zod';
import { Toaster } from '@/src/components/ui/toaster';
import { customErrorMap } from '@/src/configs/zod/zop-setup';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

export const Provider = (props: ColorModeProviderProps) => {
  // Zodカスタムエラーマップ適用
  z.setErrorMap(customErrorMap);
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
      <Toaster />
    </ChakraProvider>
  );
};
