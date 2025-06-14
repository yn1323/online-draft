# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 開発コマンド

```bash
# 開発
pnpm dev                # 開発サーバー (localhost:3000)
pnpm build              # 本番ビルド
pnpm start              # 本番サーバー

# 品質保証
pnpm lint               # Biome リンティング
pnpm lint:fix           # リンティング問題の自動修正
pnpm type-check         # TypeScript型チェック
pnpm test               # Vitest単体テスト
pnpm storybook          # Storybook開発サーバー (localhost:6006)
pnpm storybook:test-ci  # CI用Storybookテスト

# E2Eテスト
pnpm e2e                # Playwright E2Eテスト
pnpm e2e:ui             # Playwright UIモード
pnpm e2e:debug          # デバッグモード

# 通知
pnpm notify:desktop     # デスクトップ通知
pnpm notify:slack       # CI/CD用Slack通知
```

## アーキテクチャ概要

OnlineDraftは、Next.js 15とReact 19で構築されたリアルタイムマルチプレイヤードラフトゲームです。アトミックデザイン原則と垂直スライス組織を組み合わせた洗練された階層化フィーチャーアーキテクチャを実装しています。

### 技術スタック
- **フロントエンド**: Next.js 15 (App Router), React 19, TypeScript, Chakra UI v3
- **状態管理**: Jotai with SessionStorage persistence
- **バックエンド**: Firebase (Firestore + Anonymous Auth)
- **テスト**: Vitest, Playwright, Storybook (49 Stories, 194 Tests)
- **ツール**: Biome (linting), pnpm, GitHub Actions

### コンポーネントアーキテクチャ

**Feature-First Atomic Design**パターンに従います：

```
/src/components/
├── atoms/              # 再利用可能なアトミックコンポーネント
├── features/           # フィーチャー固有コンポーネント (draft, lobby, top, join)
├── layout/             # レイアウトコンポーネント (ThemeToggle)
├── providers/          # Reactコンテキストプロバイダー
├── templates/          # ページテンプレート
└── ui/                 # Chakra UIシステムコンポーネント
```

**主要な原則:**
- 直接インポートのみ（最適なツリーシェイキングのためバレルエクスポート禁止）
- アクセシビリティ優先テスト（data-testid禁止、role/ARIA/textを使用）
- Chakra UI v3モダンAPI準拠
- ダークモードサポート付きレスポンシブファースト設計

### 認証アーキテクチャ

**2層認証システム**を実装：

1. **Firebase匿名認証**: `useFirebaseAuth(groupId)` - ベース認証 + グループ検証
2. **SessionStorage DraftUser**: `useSessionUser()` - アプリ固有ユーザーID管理
3. **統合認証**: `useDraftAuth()` - 2層認証の組み合わせフロー

### 状態管理パターン

- **Jotai**: UI状態のリアクティブ状態管理
- **SessionStorage**: ページリロード間の永続化
- **Firebase onSnapshot**: マルチプレイヤー機能のリアルタイム同期

### テスト戦略

**Testing Trophy**アプローチに従います (E2E > Integration > Unit):

1. **E2Eテスト** (Playwright): アクセシビリティ優先セレクターによるユーザーシナリオベース
2. **コンポーネントテスト** (Storybook): スクリーンショットによるビジュアルリグレッションテスト
3. **単体テスト** (Vitest): 60%カバレッジ閾値によるユーティリティ関数とフック

### 重要なファイルパターン

- `/app/` - Next.js App Routerページ
- `/src/constants/` - 統一定数 (ui, app, api, validation)
- `/src/helpers/` - 包括的テスト付きユーティリティ関数
- `/src/hooks/` - カスタムReactフック
- `/src/services/` - ビジネスロジック (draft, auth, realtime)
- `/src/stores/` - Jotai状態アトム
- `/src/types/` - TypeScript型定義
- `/e2e/` - オペレーションとシナリオで整理されたPlaywrightテスト

### 開発ガイドライン

- コミット前に必ず`pnpm lint`と`pnpm type-check`を実行
- tsconfig.jsonで設定されたTypeScriptパスエイリアスを使用
- 新機能作成時は既存コンポーネントパターンに従う
- Storybookストーリーを通じてコンポーネントをテスト
- ユーザーワークフロー用のE2Eテストを作成
- アクセシビリティ標準（WCAG準拠）を維持
