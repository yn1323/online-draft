import type { TestRunnerConfig } from '@storybook/test-runner';
import { screenshot } from 'storycap-testrun';

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    try {
      // コンテキスト初期化を短時間で確認
      await page.waitForFunction(
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        () => (globalThis as any).__getContext !== undefined,
        {
          timeout: 3000,
        },
      );
      // biome-ignore lint/correctness/noUnusedVariables: <explanation>
    } catch (error) {
      // コンテキストがない場合は短時間待機してリトライ
      await page.waitForTimeout(200);
    }

    await screenshot(page, context, {
      flakiness: {
        retake: {
          interval: 100, // 100ms
          retries: 10,
        },
      },
    });
  },
};

export default config;
