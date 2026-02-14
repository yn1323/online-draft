import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { Provider } from 'jotai';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { NextIntlClientProvider } from 'next-intl';
import { z } from 'zod';
import { ColorModeProvider } from '../src/components/ui/color-mode';
import { customErrorMap } from '../src/configs/zod/zop-setup';

import commonJa from '../messages/ja/common.json';
import topJa from '../messages/ja/top.json';
import guideJa from '../messages/ja/guide.json';
import faqJa from '../messages/ja/faq.json';
import lobbyJa from '../messages/ja/lobby.json';
import draftJa from '../messages/ja/draft.json';
import metadataJa from '../messages/ja/metadata.json';

// import { handlers } from './mocks/handlers';

initialize({
  serviceWorker: {
    url: './mockServiceWorker.js',
  },
});

const jaMessages = {
  common: commonJa,
  top: topJa,
  guide: guideJa,
  faq: faqJa,
  lobby: lobbyJa,
  draft: draftJa,
  metadata: metadataJa,
};

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
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
        query: {},
        asPath: '/',
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
        <NextIntlClientProvider locale="ja" messages={jaMessages}>
          <ChakraProvider value={defaultSystem}>
            <ColorModeProvider forcedTheme="light">
              <Provider>
                <Story />
              </Provider>
            </ColorModeProvider>
          </ChakraProvider>
        </NextIntlClientProvider>
      );
    },
    withThemeByClassName({
      defaultTheme: 'light',
      themes: { light: '', dark: 'dark' },
    }),
  ],
};

export default preview;
