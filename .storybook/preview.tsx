import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React from 'react';
import { z } from 'zod';
import { customErrorMap } from '../src/configs/zod/zop-setup';
import { ColorModeProvider } from '../src/components/ui/color-mode';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      z.setErrorMap(customErrorMap);
      return (
        <ChakraProvider value={defaultSystem}>
          <ColorModeProvider defaultColorMode="light" forcedTheme="light">
            <Story />
          </ColorModeProvider>
        </ChakraProvider>
      );
    },
    withThemeByClassName({
      defaultTheme: 'light',
      themes: { light: '', dark: 'dark' },
    }),
  ],
};

export default preview;
