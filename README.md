# OnlineDraft 🎯

**オンラインドラフト会議** - 推しを選んで、かぶったら勝負！

戦略的思考ゲームで、過去の選択情報を活用した駆け引きがメイン体験のリアルタイム対戦ゲームです。

## 🚀 技術スタック

- **Frontend**: Next.js 15 + React 19 + Chakra UI v3
- **Backend**: Firebase (Firestore + Authentication)
- **State Management**: Jotai
- **Architecture**: Layered Feature Architecture
- **Testing**: Vitest + Storybook + Playwright E2E
- **CI/CD**: GitHub Actions + Slack通知

## 🎮 機能概要

- **リアルタイムドラフト**: 複数人でのリアルタイム選択ゲーム
- **戦略的思考**: 過去ラウンド情報による駆け引き
- **レスポンシブUI**: デスクトップ・モバイル最適化
- **ダークモード対応**: テーマ切り替え機能

## 🏗 開発環境セットアップ

このプロジェクトは [pnpm](https://pnpm.io/) を使用しています。

```bash
# 依存関係インストール
pnpm install

# 開発サーバー起動
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## 📋 開発コマンド

```bash
# 開発
pnpm dev              # 開発サーバー起動

# ビルド・チェック
pnpm build            # プロダクションビルド
pnpm lint             # コードリント実行
pnpm lint:fix         # リント自動修正
pnpm type-check       # TypeScript型チェック

# テスト
pnpm test             # 単体テスト実行
pnpm storybook        # Storybook起動
pnpm storybook:test-ci # Storybookテスト実行
pnpm e2e              # E2Eテスト実行

# 通知
pnpm notify:slack     # Slack通知送信
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
