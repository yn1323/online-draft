# 開発コマンドリファレンス

## 📝 基本コマンド
```bash
pnpm dev                    # 開発サーバー (localhost:3000)
pnpm build                  # 本番ビルド + 型チェック
pnpm lint                   # Biome linting
pnpm type-check             # TypeScript型チェック
```

## 🧪 テストコマンド
```bash
pnpm test                   # Vitest単体テスト
pnpm e2e                    # Playwright E2Eテスト
pnpm storybook              # Storybook (localhost:6006)
pnpm storybook:test         # Storybookテスト
```

## 🛠️ カスタムコマンド

### 品質保証系
```bash
/refactor                   # lint→型→改行→doc更新
/doc-update                 # ドキュメント最適化（重複削除・設計思想化・TOKEN削減）
/upload-all                 # refactor→doc→commit→push
```

### 計画・相談系
```bash
/plan                       # 計画・相談専用（コード修正禁止）
/todo                       # 次タスク一覧表示
```

### 作業管理系
```bash
/commit                     # 変更コミット
/push                       # PR作成（日本語）
/sound                      # 音声通知（levelup/smallMedal）
```

### AI ISSUE作成系
**スコープ最小化AI実装タスク専用**

**テンプレート構成**:
```
[AI] feat: 機能名 - コンポーネント名

## 📋 タスク概要・🎯 実装要件・📂 対象ファイル・✅ 完了条件
```

**基本原則**:
- スコープ最小化（1機能、2-3ファイル、30分-1時間）
- 技術制約明記（Chakra UI v3、Jotai等）
- 完了条件具体化（lint/type-check/test成功）

**使用例**: `/issue LobbyPageにFirestoreユーザー作成機能追加`

### TODO分割ISSUE作成
```bash
/issue-schedule             # 現在TODO→複数ISSUE分割
```

## ⚙️ 環境変数
`.env.local`必要項目:
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN  
NEXT_PUBLIC_FIREBASE_PROJECT_ID
```

## 🔧 音声通知仕様
```bash
/sound                      # コマンド末尾に追加

# 完了音: levelup.mp3（作業成功時）
# 注意音: smallMedal.mp3（入力待ち・エラー時）
```

## 📋 Storybook設定
```typescript
// ✅ 推奨: シンプル設定
const meta: Meta<typeof Component> = {
  title: 'Features/Component/ComponentName',
  component: Component,
};

// 実コンポーネント必須、MockXXX禁止
// MSW + Decorator活用
```

## 🔧 /doc-update詳細仕様

### 実行内容
**包括的ドキュメント最適化**：@CLAUDE.md @docs/ の分析・最適化

### 最適化プロセス
```bash
Phase 1: 統合削除
- 重複ファイルの統合・削除
- 冗長コンテンツの除去

Phase 2: 簡潔化  
- あやふやな表現→設計思想名に変換
- 強調表現の3段階適正化（NEVER/YOU MUST/IMPORTANT）

Phase 3: CLAUDE.md最適化
- 誘導削除（○○のときは××を見ろ）
- 核心制約への集約
```

### 設計思想パターン例
- **Feature-First Atomic Design**: コンポーネント設計
- **Progressive Enhancement開発**: 実装方針
- **User-Centric Testing原則**: テスト戦略
- **操作ベースE2E設計**: E2Eテスト構造
- **境界モックテスト戦略**: Storybook品質保証

### 期待効果
- **TOKEN使用量**: 60-70%削減
- **可読性**: 核心情報への集中  
- **保守性**: 重複削除で一貫性確保

参考: E2E操作ベース設計、実装同一性テスト原則