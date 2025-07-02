#!/bin/bash

INPUT_JSON=$(cat)
SESSION_ID=$(jq -r '.session_id' <<< "$INPUT_JSON")
HOOK_ACTIVE=$(jq -r '.stop_hook_active // false' <<< "$INPUT_JSON")

if [ "$HOOK_ACTIVE" = "true" ]; then
  # 無限ループ防止
  echo '{"continue": true}'
  exit 0
fi

# 現在時刻とファイル名を設定
NOW=$(date +"%Y-%m-%d %H:%M")
FILENAME=".claude/logs/dev/$(date +%Y-%m-%d).md"

# 開発日記作成を促すメッセージを生成
jq -n \
  --arg id   "$SESSION_ID" \
  --arg now  "$NOW" \
  --arg file "$FILENAME" \
  '{
     decision: "block",
     reason: (
       "write develop diary.\n" +
       "filename:\n" +
       "template:#{topic}\n" +
       "## [" + $now + "]\n" +
       "- **作業**: [何をしたか - 1行で]\n" +
       "- **結果**: [成功/失敗/部分完了]\n" +
       "- **問題**: [なければ「なし」]\n" +
       "- **学び**: [なければ「なし」]"
     )
   }'
exit 0