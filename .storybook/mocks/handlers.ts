/**
 * Storybook用MSWハンドラー
 * 共通化されたテストユーティリティを使用
 */

import { handlers as commonHandlers } from '../../src/test-utils/msw';

export const handlers = commonHandlers;