/**
 * Storybook用テストユーティリティ
 *
 * 使用例:
 * ```tsx
 * import { withAuthenticatedUser, mswHandlers } from '@/src/test-utils/storybook';
 *
 * const meta: Meta<typeof MyComponent> = {
 *   title: 'Features/MyComponent',
 *   component: MyComponent,
 *   decorators: [withAuthenticatedUser],
 *   parameters: {
 *     msw: {
 *       handlers: mswHandlers.common,
 *     },
 *   },
 * };
 * ```
 */

// MSWハンドラー
export * from './msw-handlers';

// モック関連（分割された構造）
export * from '../mocks';

// よく使われる組み合わせ
export { handlers as mswHandlers } from './msw-handlers';
