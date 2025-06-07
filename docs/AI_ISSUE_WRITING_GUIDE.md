# AI向けISSUE作成ガイド

Claude Code ActionsでCIからブランチ作成・修正を行うためのISSUE作成ベストプラクティス

## 🎯 基本原則

### AIが理解しやすいISSUE構成
1. **明確なタスク定義** - 曖昧さを排除
2. **技術制約の明記** - プロジェクト固有ルールの指定
3. **完了条件の具体化** - 成功判定基準の明確化
4. **ファイルパスの明記** - 対象範囲の限定
5. **スコープの最小化** - 1つのISSUEで1つの機能のみ

## 📝 推奨テンプレート構成

### タイトル
```
[AI] feat: 具体的な機能名 - 対象コンポーネント名
```

### 本文構成
```markdown
## 📋 タスク概要
- **目的**: 何を実現するか
- **対象**: 具体的なファイル・コンポーネント名
- **優先度**: High/Medium/Low

## 🎯 実装要件
### 必須項目
- [ ] 具体的な実装内容1
- [ ] 具体的な実装内容2

### 技術制約
- **UI**: Chakra UI v3使用必須
- **状態管理**: Jotai使用
- **認証**: useAuth フック使用
- **テスト**: Storybook対応必須

## 📂 対象ファイル
- `src/components/features/xxx/YyyComponent/index.tsx`
- `src/components/features/xxx/YyyComponent/index.stories.tsx`

## ✅ 完了条件
- [ ] pnpm lint エラー0
- [ ] pnpm type-check エラー0
- [ ] pnpm test 成功
- [ ] Storybookストーリー作成済み

## 🚨 注意事項
- レガシーコード（legacy/）は参考のみ、変更禁止
- ファイル末尾改行必須
- コミットメッセージは日本語でprefixつける
```

## 🔥 効果的な書き方のコツ

### 1. **スコープを最小化** 🎯
❌ 悪い例: "ユーザー管理機能を完全実装（作成・編集・削除・一覧・検索）"
✅ 良い例: "LobbyPageでFirestoreユーザー作成機能のみ実装"

**推奨スコープサイズ**：
- 1つのコンポーネント内の1つの機能
- 修正対象ファイル数：2-3個まで
- 実装時間目安：30分-1時間程度

### 2. **具体性を重視** 😤
❌ 悪い例: "ユーザー機能を追加"
✅ 良い例: "LobbyPageにFirestoreユーザー作成機能を追加、アバター選択UI含む"

### 3. **技術制約を明記** 💪
```markdown
### 技術制約
- IconButtonには必ずaria-label指定
- useColorModeValueのimport先: @chakra-ui/react
- spacing → gap に変更済み
- 既存パターンに合わせてJotai atom使用
```

### 4. **ファイルパスは絶対パス** 📂
```markdown
## 対象ファイル
- `src/components/features/lobby/LobbyPage/index.tsx`
- `src/hooks/useAuth.ts` （参考用）
- `src/services/firestore/draftGroups.ts` （拡張対象）
```

### 5. **依存関係の明記** 🔗
```markdown
## 依存関係
- Issue #123 (認証機能) 完了後に着手
- src/stores/user/index.ts の拡張が前提
```

## ⚡ 並行実行時の注意点

### 競合回避のために
1. **対象ファイルを明確に分離**
2. **共通ファイル（CLAUDE.md等）の更新は1つのISSUEに集約**
3. **ブランチ命名規則**: `ai/issue-{番号}-{機能名}`

### 優先度設定
- **High**: 他タスクの前提となる機能
- **Medium**: 独立して実装可能な機能
- **Low**: UI改善・リファクタリング

## 🎭 AIへの指示のコツ

### 人格・口調の指定
```markdown
## AI指示
- CLAUDE.mdの設定に従い、フレンドリーなギャル系エンジニアとして対応
- 進捗はTodoWriteで管理、完了時は絵文字で報告
```

### 参考ファイルの指定
```markdown
## 参考実装
- 既存パターン: `src/components/features/join/JoinForm/index.tsx`
- Storybookパターン: `src/components/features/lobby/LobbyPage/index.stories.tsx`
- MSWモック: `src/test-utils/msw/firestore.ts`
```

## 🚨 やってはいけないパターン

### ❌ 曖昧な指示
- "使いやすくして"
- "エラーを修正して"
- "デザインを改善"

### ❌ 制約の記載漏れ
- Chakra UI v3の仕様変更言及なし
- 既存コードパターンの参照指示なし
- テスト要件の明記なし

### ❌ 複数機能の混在・スコープが大きすぎる
- 1つのISSUEで複数の独立した機能を指定
- UIとロジックを同時に大きく変更
- "全体的なリファクタリング"など範囲が広すぎる指示
- 5個以上のファイルを同時に変更する大規模修正

## 📊 成功事例

### 良いISSUE例
```markdown
## [AI] feat: LobbyPageユーザー作成機能 - Firestore連携

### 実装要件
- LobbyPageでFirestoreにユーザー情報を保存
- アバター選択時にuser atomを更新
- エラーハンドリング（重複名チェック含む）

### 対象ファイル
- `src/components/features/lobby/LobbyPage/index.tsx`
- `src/services/firestore/draftGroups.ts` (拡張)

### 参考実装
- `src/components/features/join/JoinForm/index.tsx` のFirestore呼び出しパターン

### 完了条件
- ユーザー作成成功時にuser atomが更新される
- 重複ユーザー名でエラー表示
- pnpm lint/type-check/test すべて成功
```

---

**最終更新**: 2025/1/7 - AI向けISSUE作成ガイド初版作成