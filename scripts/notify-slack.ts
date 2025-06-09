#!/usr/bin/env tsx

import { execSync } from 'node:child_process';
import dotenv from 'dotenv';

// .envファイルを読み込み
dotenv.config();

interface SlackNotificationConfig {
  webhookUrl: string;
  channel?: string;
  username?: string;
  iconEmoji?: string;
}

interface ClaudeWorkNotification {
  type: 'success' | 'error' | 'progress' | 'complete';
  task: string;
  details?: string;
  duration?: string;
  filesModified?: string[];
  timestamp?: string;
}

const DEFAULT_CONFIG: Partial<SlackNotificationConfig> = {
  username: 'Claude Code Bot',
  iconEmoji: ':dragon_face:',
  channel: '#notification-ai',
};

/**
 * Slackに通知を送信
 */
const sendSlackNotification = async (
  config: SlackNotificationConfig,
  notification: ClaudeWorkNotification,
) => {
  const { type, task, details, duration, filesModified, timestamp } =
    notification;

  // 絵文字とカラー設定
  const typeConfig = {
    success: { emoji: ':white_check_mark:', color: 'good' },
    error: { emoji: ':x:', color: 'danger' },
    progress: { emoji: ':hourglass_flowing_sand:', color: 'warning' },
    complete: { emoji: ':tada:', color: 'good' },
  };

  const { emoji, color } = typeConfig[type];
  const title = `${emoji} Claude Code - ${type.toUpperCase()}`;

  // メッセージ本文構築
  let text = `*Task:* ${task}`;
  if (details) {
    text += `\n*Details:* ${details}`;
  }
  if (duration) {
    text += `\n*Duration:* ${duration}`;
  }
  if (filesModified?.length) {
    text += `\n*Files Modified:* ${filesModified.slice(0, 5).join(', ')}`;
    if (filesModified.length > 5) {
      text += ` (+${filesModified.length - 5} more)`;
    }
  }
  if (timestamp) {
    text += `\n*Timestamp:* ${timestamp}`;
  }

  const payload = {
    channel: config.channel || DEFAULT_CONFIG.channel,
    username: config.username || DEFAULT_CONFIG.username,
    icon_emoji: config.iconEmoji || DEFAULT_CONFIG.iconEmoji,
    attachments: [
      {
        color,
        title,
        text,
        footer: 'OnlineDraft Project',
        ts: Math.floor(Date.now() / 1000),
      },
    ],
  };

  try {
    const curlCommand = `curl -X POST -H 'Content-type: application/json' --data '${JSON.stringify(payload)}' ${config.webhookUrl}`;

    execSync(curlCommand, { stdio: 'pipe' });
    console.log(`✅ Slack通知送信完了: ${task}`);
  } catch (error) {
    console.error('❌ Slack通知送信エラー:', error);
    throw error;
  }
};

/**
 * 作業完了通知（成功）
 */
export const notifyClaudeSuccess = async (
  task: string,
  details?: string,
  duration?: string,
) => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('❌ SLACK_WEBHOOK_URL環境変数が設定されていません');
    return;
  }

  await sendSlackNotification(
    { webhookUrl },
    {
      type: 'success',
      task,
      details,
      duration,
      timestamp: new Date().toLocaleString('ja-JP'),
    },
  );
};

/**
 * エラー通知
 */
export const notifyClaudeError = async (task: string, error: string) => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('❌ SLACK_WEBHOOK_URL環境変数が設定されていません');
    return;
  }

  await sendSlackNotification(
    { webhookUrl },
    {
      type: 'error',
      task,
      details: error,
      timestamp: new Date().toLocaleString('ja-JP'),
    },
  );
};

/**
 * 進行状況通知
 */
export const notifyClaudeProgress = async (task: string, progress: string) => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('❌ SLACK_WEBHOOK_URL環境変数が設定されていません');
    return;
  }

  await sendSlackNotification(
    { webhookUrl },
    {
      type: 'progress',
      task,
      details: progress,
      timestamp: new Date().toLocaleString('ja-JP'),
    },
  );
};

/**
 * 大型作業完了通知
 */
export const notifyClaudeComplete = async (
  task: string,
  details: string,
  duration: string,
  filesModified: string[] = [],
) => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('❌ SLACK_WEBHOOK_URL環境変数が設定されていません');
    return;
  }

  await sendSlackNotification(
    { webhookUrl },
    {
      type: 'complete',
      task,
      details,
      duration,
      filesModified,
      timestamp: new Date().toLocaleString('ja-JP'),
    },
  );
};

// CLIから直接実行された場合
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  const task = args[1];
  const details = args[2];
  const duration = args[3];

  const main = async () => {
    try {
      switch (command) {
        case 'success':
          if (!task) {
            console.error('❌ タスク名が必要です');
            process.exit(1);
          }
          await notifyClaudeSuccess(task, details, duration);
          break;
        case 'error':
          if (!task || !details) {
            console.error('❌ タスク名とエラー詳細が必要です');
            process.exit(1);
          }
          await notifyClaudeError(task, details);
          break;
        case 'progress':
          if (!task || !details) {
            console.error('❌ タスク名と進行状況が必要です');
            process.exit(1);
          }
          await notifyClaudeProgress(task, details);
          break;
        case 'complete': {
          if (!task || !details || !duration) {
            console.error('❌ タスク名、詳細、実行時間が必要です');
            process.exit(1);
          }
          const filesModified = args.slice(4);
          await notifyClaudeComplete(task, details, duration, filesModified);
          break;
        }
        default:
          console.log('使用方法:');
          console.log(
            '  tsx scripts/notify-slack.ts success "タスク名" "詳細" "実行時間"',
          );
          console.log(
            '  tsx scripts/notify-slack.ts error "タスク名" "エラー詳細"',
          );
          console.log(
            '  tsx scripts/notify-slack.ts progress "タスク名" "進行状況"',
          );
          console.log(
            '  tsx scripts/notify-slack.ts complete "タスク名" "詳細" "実行時間" "ファイル1" "ファイル2"',
          );
          console.log('');
          console.log('環境変数:');
          console.log(
            '  SLACK_WEBHOOK_URL - Slack Incoming Webhook URL (必須)',
          );
      }
    } catch (error) {
      console.error('❌ 実行エラー:', error);
      process.exit(1);
    }
  };

  main();
}
