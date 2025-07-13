#!/bin/bash

# Claude Code作業完了通知スクリプト
# 使用方法: ./.claude/scripts/notify-slack.sh "タスク名" "詳細（任意）"

set -e

# 引数チェック
if [ $# -eq 0 ]; then
    echo "📋 引数なしで実行 - デフォルトメッセージを使用"
fi

# 環境変数チェック
if [ -z "$SLACK_WEBHOOK_URL" ]; then
    echo "❌ SLACK_WEBHOOK_URL環境変数が設定されていません"
    exit 1
fi

# 引数取得
TASK="${1:-Claude Code 作業完了}"
DETAILS="${2:-}"

# 自動取得情報
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
CHANGED_FILES=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')

# メッセージ構築
MESSAGE="*Task:* $TASK"

if [ -n "$DETAILS" ]; then
    MESSAGE="$MESSAGE\n*Details:* $DETAILS"
fi

MESSAGE="$MESSAGE\n*Branch:* $BRANCH"
MESSAGE="$MESSAGE\n*Changed Files:* ${CHANGED_FILES}件"
MESSAGE="$MESSAGE\n*Timestamp:* $TIMESTAMP"

# Slack通知用JSON構築
PAYLOAD=$(cat <<EOF
{
  "channel": "#notification-ai",
  "username": "Claude Code Bot",
  "icon_emoji": ":dragon_face:",
  "attachments": [
    {
      "color": "good",
      "title": ":tada: Claude Code - 作業完了",
      "text": "$MESSAGE",
      "footer": "OnlineDraft Project",
      "ts": $(date +%s)
    }
  ]
}
EOF
)

# Slack通知送信
if curl -s -X POST \
    -H 'Content-type: application/json' \
    --data "$PAYLOAD" \
    "$SLACK_WEBHOOK_URL" > /dev/null; then
    echo "✅ Slack通知送信完了: $TASK"
else
    echo "❌ Slack通知送信エラー"
    exit 1
fi