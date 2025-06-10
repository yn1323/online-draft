/**
 * Next.js App Router モック (Storybook用)
 */

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { ReactNode, FC } from 'react';

// App Routerのモック実装
const mockRouter: AppRouterInstance = {
  push: (href: string) => {
    console.log('📚 [Storybook] Router.push called:', href);
    return Promise.resolve(true);
  },
  replace: (href: string) => {
    console.log('📚 [Storybook] Router.replace called:', href);
    return Promise.resolve(true);
  },
  refresh: () => {
    console.log('📚 [Storybook] Router.refresh called');
  },
  back: () => {
    console.log('📚 [Storybook] Router.back called');
  },
  forward: () => {
    console.log('📚 [Storybook] Router.forward called');
  },
  prefetch: (href: string) => {
    console.log('📚 [Storybook] Router.prefetch called:', href);
    return Promise.resolve();
  },
};

/**
 * App Router コンテキストプロバイダー (Storybook用)
 */
export const MockAppRouterProvider = ({
  children,
}: { children: ReactNode }) => {
  return (
    <AppRouterContext.Provider value={mockRouter}>
      {children}
    </AppRouterContext.Provider>
  );
};

/**
 * Storybook用のApp Routerデコレーター
 */
export const withMockAppRouter = (Story: FC) => {
  return (
    <MockAppRouterProvider>
      <Story />
    </MockAppRouterProvider>
  );
};
