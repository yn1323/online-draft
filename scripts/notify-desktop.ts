#!/usr/bin/env tsx

import { execSync } from 'node:child_process';

interface NotificationOptions {
  title?: string;
  sound?: string;
  subtitle?: string;
}

/**
 * macOSデスクトップ通知を表示
 */
const notify = (
  message: string,
  success = true,
  options: NotificationOptions = {},
) => {
  const {
    title = 'OnlineDraft',
    sound = success ? 'Glass' : 'Sosumi',
    subtitle,
  } = options;

  const icon = success ? '✅' : '❌';
  const fullMessage = `${icon} ${message}`;

  let command = `osascript -e 'display notification "${fullMessage}" with title "${title}" sound name "${sound}"'`;

  if (subtitle) {
    command = command.replace(
      '" sound name',
      `" subtitle "${subtitle}" sound name`,
    );
  }

  try {
    // terminal-notifierを優先して使用
    try {
      const terminalNotifierCmd = `terminal-notifier -title "${title}" -message "${fullMessage}" -sound ${sound}`;
      if (subtitle) {
        terminalNotifierCmd.replace('-sound', `-subtitle "${subtitle}" -sound`);
      }
      execSync(terminalNotifierCmd);
      console.log(`通知送信 (terminal-notifier): ${fullMessage}`);
    } catch {
      // フォールバックでosascript使用
      execSync(command);
      console.log(`通知送信 (osascript): ${fullMessage}`);
    }
  } catch (error) {
    console.error('通知送信エラー:', error);
  }
};

/**
 * 作業完了通知（成功）
 */
export const notifySuccess = (message = '作業完了しました！') => {
  notify(message, true);
};

/**
 * エラー通知（失敗）
 */
export const notifyError = (message = 'エラーが発生しました') => {
  notify(message, false);
};

/**
 * 型チェック完了通知
 */
export const notifyTypeCheck = () => {
  notify('型チェック完了！', true, { subtitle: 'pnpm type-check' });
};

/**
 * Lint完了通知
 */
export const notifyLint = () => {
  notify('Lint完了！', true, { subtitle: 'pnpm lint' });
};

/**
 * テスト完了通知
 */
export const notifyTest = () => {
  notify('テスト完了！', true, { subtitle: 'pnpm test' });
};

/**
 * E2Eテスト完了通知
 */
export const notifyE2E = () => {
  notify('E2Eテスト完了！', true, { subtitle: 'pnpm e2e' });
};

/**
 * ビルド完了通知
 */
export const notifyBuild = () => {
  notify('ビルド完了！', true, { subtitle: 'pnpm build' });
};

/**
 * Storybook VRT完了通知
 */
export const notifyStorybookVRT = () => {
  notify('Storybook VRT完了！', true, { subtitle: 'pnpm storybook:test-ci' });
};

/**
 * 全チェック完了通知
 */
export const notifyAllChecks = () => {
  notify('全チェック完了！🎉', true, {
    subtitle: 'lint + type-check + test + e2e',
    sound: 'Blow',
  });
};

// CLIから直接実行された場合
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  const message = args[1];

  switch (command) {
    case 'success':
      notifySuccess(message);
      break;
    case 'error':
      notifyError(message);
      break;
    case 'type-check':
      notifyTypeCheck();
      break;
    case 'lint':
      notifyLint();
      break;
    case 'test':
      notifyTest();
      break;
    case 'e2e':
      notifyE2E();
      break;
    case 'build':
      notifyBuild();
      break;
    case 'storybook-vrt':
      notifyStorybookVRT();
      break;
    case 'all':
      notifyAllChecks();
      break;
    default:
      console.log('使用方法:');
      console.log('  tsx scripts/notify-completion.ts success "メッセージ"');
      console.log(
        '  tsx scripts/notify-completion.ts error "エラーメッセージ"',
      );
      console.log('  tsx scripts/notify-completion.ts type-check');
      console.log('  tsx scripts/notify-completion.ts lint');
      console.log('  tsx scripts/notify-completion.ts test');
      console.log('  tsx scripts/notify-completion.ts e2e');
      console.log('  tsx scripts/notify-completion.ts build');
      console.log('  tsx scripts/notify-completion.ts storybook-vrt');
      console.log('  tsx scripts/notify-completion.ts all');
  }
}
