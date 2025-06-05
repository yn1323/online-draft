import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';
import { config as dotenvConfig } from 'dotenv';
import path from 'node:path';

// Storybook用のダミー環境変数を読み込み
dotenvConfig({ path: path.resolve(__dirname, '.dummyEnv') });

const config: StorybookConfig = {
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  typescript: {
    reactDocgen:
      process.env.NODE_ENV === 'development'
        ? 'react-docgen'
        : 'react-docgen-typescript',
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    if (!config.resolve) {
      return config;
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/app': path.resolve(__dirname, '../app'),
      '@/src': path.resolve(__dirname, '../src'),
      '@/e2e': path.resolve(__dirname, '../e2e'),
    };
    return config;
  },
};
export default config;
