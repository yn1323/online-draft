---
inclusion: always
---

# 技術スタック

## フロントエンドフレームワーク

- **Next.js 15** (App Router 使用)
- **React 19** with TypeScript 5
- **Chakra UI v3** コンポーネントライブラリ
- **Framer Motion** アニメーション
- **Next Themes** ダークモード対応

## 状態管理

- **Jotai** アトミック状態管理
- **React Hook Form** with Zod バリデーション

### Jotai 詳細ガイド

Jotai を使った状態管理パターンとベストプラクティスについては、以下のドキュメントを参照してください：

#[[file:docs/jotai.md]]

## その他の機能

- **React Joyride** ガイドツアー機能
- **日時処理**: dayjs ライブラリ
- **MCP サポート**: typescript-mcp による Model Context Protocol 対応

## バックエンド・データベース

- **Firebase Authentication** (匿名認証)
- **Firebase Firestore** リアルタイムデータベース
- **Firebase** リアルタイム同期

## 開発ツール

- **Biome 2.1.1** リンティング・フォーマット (ESLint/Prettier 代替)
- **TypeScript 5.8.3** strict mode 有効
- **pnpm** パッケージマネージャー

## テスト

- **Vitest** 単体テスト (jsdom 環境)
- **Storybook** コンポーネント開発・テスト
- **Playwright** E2E テスト
- **Testing Library** React コンポーネントテスト

## ビルド・デプロイ

- **Cloudflare Pages** デプロイ対応
- **GitHub Actions** CI/CD

## 開発コマンド

### 開発

```bash
pnpm dev              # 開発サーバー起動
pnpm build            # 本番ビルド
pnpm start            # 本番サーバー起動
```

### コード品質

```bash
pnpm lint             # Biome リンター実行
pnpm lint:fix         # リンティング問題自動修正
pnpm type-check       # TypeScript型チェック
```

### テスト

```bash
pnpm test             # 単体テスト実行
pnpm test:watch       # テストをwatch mode実行
pnpm test:ui          # テストをUI付きで実行
pnpm storybook        # Storybook開発サーバー起動
pnpm storybook:test-ci # Storybookテスト（CI用）
pnpm e2e              # E2Eテスト実行
pnpm e2e:no-report    # E2Eテスト（レポートなし）
pnpm e2e:ui           # E2EテストをUI付きで実行
```

### ユーティリティ

```bash
pnpm notify:desktop   # デスクトップ通知送信
pnpm vrt              # ビジュアルリグレッションテスト
```

## 環境変数

Firebase 設定に必要な環境変数:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_GTM_ID` (Google Tag Manager)
