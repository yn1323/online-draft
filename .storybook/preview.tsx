import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { z } from 'zod';
import { ColorModeProvider } from '../src/components/ui/color-mode';
import { customErrorMap } from '../src/configs/zod/zop-setup';
// import { handlers } from './mocks/handlers';

initialize({
  serviceWorker: {
    url: './mockServiceWorker.js',
  },
});

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['atoms', 'features', 'layout', 'dev'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // msw: {
    //   handlers: handlers,
    // },
  },
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  loaders: [mswLoader] as any,
  decorators: [
    (Story) => {
      z.setErrorMap(customErrorMap);
      return (
        <ChakraProvider value={defaultSystem}>
          <ColorModeProvider forcedTheme="light">
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
