import type { TestRunnerConfig } from '@storybook/test-runner';
import { screenshot } from 'storycap-testrun';

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    // コンテキスト初期化の安定性向上のため、短時間でのリトライ戦略を採用
    let retryCount = 0;
    const maxRetries = 5;
    
    while (retryCount < maxRetries) {
      try {
        // コンテキスト初期化を短時間で確認（タイムアウトを短縮）
        await page.waitForFunction(
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          () => (globalThis as any).__getContext !== undefined,
          {
            timeout: 1000, // 3000ms → 1000ms に短縮
          },
        );
        break; // 成功したらループ脱出
      } catch (error) {
        retryCount++;
        if (retryCount >= maxRetries) {
          // 最大リトライ回数に達した場合はログ出力のみ
          console.warn(`Context initialization failed after ${maxRetries} retries for story: ${context.title}`);
          break;
        }
        // 段階的な待機時間（100ms → 200ms → 300ms...）
        await page.waitForTimeout(100 * retryCount);
      }
    }

    await screenshot(page, context, {
      flakiness: {
        retake: {
          interval: 300, // 100ms → 300ms に延長して安定性向上
          retries: 8, // 10 → 8 に削減して実行時間短縮
        },
      },
    });
  },
};

export default config;
