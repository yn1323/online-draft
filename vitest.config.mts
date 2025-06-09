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

// Storybookテスト統合は相性が悪いため無効化
// const storybookConfig = defineConfig({
//   plugins: [
//     storybookTest({
//       configDir: path.join(dirname, '.storybook'),
//     }),
//   ],
//   test: {
//     testTimeout: 15000,
//     globals: true,
//     name: 'storybook',
//     setupFiles: ['.storybook/vitest.setup.ts'],
//     browser: {
//       enabled: true,
//       headless: true,
//       provider: 'playwright',
//     },
//   },
//   resolve: resolveAlias,
// });

const vitestConfig = defineConfig({
  test: {
    globals: true,
    name: 'vitest',
    setupFiles: ['./src/configs/vitest/vitest-setup.ts'],
    include: ['./src/**/*.{test,spec}.{ts,tsx}'], // tsx追加でコンポーネントテスト対応
    exclude: ['./src/**/*.stories.{ts,tsx}', './src/test-utils/**/*.{ts,tsx}'], // Storybook・test-utilsは除外
    env: {
      NEXT_PUBLIC_SUPABASE_URL: 'https://example.com',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'example',
    },
    // カバレッジ設定追加
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: [
        '**/*.stories.{ts,tsx}',
        '**/test-utils/**',
        '**/types/**',
        '**/constants/**',
        '**/*.d.ts',
        'src/lib/firebase*.ts', // Firebase設定は除外
      ],
      thresholds: {
        global: {
          branches: 60,
          functions: 60,
          lines: 60,
          statements: 60,
        },
      },
    },
  },
  resolve: resolveAlias,
});

const workspace = defineWorkspace([
  // mergeConfig(sharedConfig, storybookConfig),
  mergeConfig(sharedConfig, vitestConfig),
]);

export default defineConfig({
  test: {
    globals: true,
    workspace,
  },
  resolve: resolveAlias,
});
