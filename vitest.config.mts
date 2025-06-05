import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, defineWorkspace, mergeConfig } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// 共通のエイリアス設定
const resolveAlias = {
  alias: {
    '@/app': path.resolve(dirname, './app'),
    '@/src': path.resolve(dirname, './src'),
    '@/e2e': path.resolve(dirname, './e2e'),
  },
};

const sharedConfig = defineConfig({
  test: {
    exclude: ['node_modules'],
  },
  resolve: resolveAlias,
});

const storybookConfig = defineConfig({
  plugins: [
    storybookTest({
      configDir: path.join(dirname, '.storybook'),
    }),
  ],
  test: {
    // GHAでエラーになるようなら数字を変更してください
    testTimeout: 100000,
    globals: true,
    name: 'storybook',
    setupFiles: ['.storybook/vitest.setup.ts'],
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
  },
  resolve: resolveAlias,
});

const vitestConfig = defineConfig({
  test: {
    globals: true,
    name: 'vitest',
    setupFiles: ['./src/configs/vitest/vitest-setup.ts'],
    include: ['./src/**/*.test.ts'],
    env: {
      NEXT_PUBLIC_SUPABASE_URL: 'https://example.com',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'example',
    },
  },
  resolve: resolveAlias,
});

const workspace = defineWorkspace([
  mergeConfig(sharedConfig, storybookConfig),
  mergeConfig(sharedConfig, vitestConfig),
]);

export default defineConfig({
  test: {
    globals: true,
    workspace,
  },
  resolve: resolveAlias,
});
