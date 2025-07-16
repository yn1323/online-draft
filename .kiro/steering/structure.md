---
inclusion: always
---

# プロジェクト構造

## アーキテクチャパターン

このプロジェクトは**Feature-Based Architecture**を採用し、
関心の分離とアトミックデザイン原則に基づいた明確な構造を持っています。

## ディレクトリ構造

### コアアプリケーション

```
app/                    # Next.js App Router ページ
├── draft/[id]/        # ドラフトゲームページ
├── lobby/[id]/        # ロビー待機室
├── entry/[id]/        # エントリーポイントページ
└── page.tsx           # トップ/ランディングページ
```

### ソースコード構成

```
src/
├── components/        # UIコンポーネント (アトミックデザイン)
│   ├── atoms/        # 基本UI要素 (Button, Input, Card等)
│   ├── features/     # 機能固有コンポーネント
│   │   ├── draft/    # ドラフトゲームコンポーネント
│   │   ├── lobby/    # ロビーコンポーネント
│   │   └── top/      # トップページコンポーネント
│   ├── layout/       # レイアウトコンポーネント
│   ├── templates/    # ページテンプレート
│   └── ui/           # Chakra UIカスタマイゼーション
├── hooks/            # カスタムReactフック
│   ├── auth/         # 認証フック
│   └── firebase/     # Firebase固有フック
├── lib/              # ライブラリ設定
├── types/            # TypeScript型定義
└── helpers/          # ユーティリティ関数
    ├── utils/        # 汎用ユーティリティ
    └── validation/   # フォームバリデーションスキーマ
```

### テスト・ドキュメント

```
e2e/                  # エンドツーエンドテスト
├── operations/       # テスト操作
├── tests/           # テストファイル
└── utils/           # テストユーティリティ

docs/                # プロジェクトドキュメント
├── function/        # 機能ドキュメント
├── implementation/  # 実装ガイド
└── guides/         # 開発ガイド

__screenshots__/     # ビジュアルリグレッションテストスクリーンショット
```

## コンポーネントアーキテクチャ

### 機能コンポーネント構造

各機能は以下のパターンに従います:

```
src/components/features/[feature]/
├── [FeaturePage]/           # メインページコンポーネント
├── [SubComponent]/          # 機能サブコンポーネント
├── modals/                  # 機能固有モーダル
├── hooks/                   # 機能固有フック
├── states.ts               # Jotai atoms for state
├── mockData.ts             # 開発用モックデータ
└── shared/                 # 共有型とユーティリティ
```

### コンポーネントファイル構造

各コンポーネントディレクトリには以下が含まれます:

- `index.tsx` - メインコンポーネント実装
- `index.stories.tsx` - Storybook ストーリー
- `index.test.tsx` - 単体テスト (該当する場合)

## 状態管理パターン

### Jotai Atoms

- 機能固有 atoms は`states.ts`ファイルに配置
- 機能横断状態用のグローバル atoms
- 計算値用の派生 atoms

### Firebase 統合

- `src/hooks/firebase/`にカスタムフック
- ライブデータ用リアルタイムリスナー
- CRUD 操作用の分離されたフック

## インポートパス規約

### パスエイリアス

- `@/app/*` - App Router ページ
- `@/src/*` - ソースコード
- `@/e2e/*` - E2E テスト

### インポート順序

1. 外部ライブラリ
2. 内部コンポーネント (atoms → features → layout)
3. フックとユーティリティ
4. 型と定数

## ファイル命名規約

### コンポーネント

- コンポーネント名は PascalCase
- メインコンポーネントファイルは`index.tsx`
- Storybook 用は`index.stories.tsx`
- テスト用は`index.test.tsx`

### フック

- `use`で始まる camelCase
- 機能別にサブディレクトリでグループ化

### ユーティリティ

- 関数は camelCase
- ドメイン別にサブディレクトリでグループ化

## テスト戦略

### 単体テスト

- Testing Library を使用したコンポーネントテスト
- カスタムテストユーティリティを使用したフックテスト
- ユーティリティ関数テスト

### 統合テスト

- コンポーネント開発用 Storybook
- スクリーンショットを使用したビジュアルリグレッション

### E2E テスト

- 完全なユーザージャーニー用 Playwright
- `e2e/operations/`のページオブジェクトパターン
