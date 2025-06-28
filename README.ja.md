# 🎯 オンラインドラフト会議

**「推しを選んで、かぶったら勝負！」みんなでワイワイドラフト会議 🎉**

友達・家族・仲間とオンラインでワイワイ楽しめるドラフトアプリです。
QRコードでピッ！と簡単参加、好きなものを選んで盛り上がろう！

## 🚀 クイックスタート

### 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/yn1323/online-draft.git
cd online-draft

# 依存関係のインストール（pnpm推奨）
pnpm install

# 開発サーバーの起動
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて動作確認できます。

### 環境変数の設定

`.env.local` ファイルを作成し、Firebase の設定を追加してください：

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## 🎮 主な機能

### 1. グループ管理
- **簡単作成**: グループ名を入力するだけでドラフトルーム作成
- **QRコード共有**: URLとQRコードで友達を簡単招待
- **履歴保存**: 過去に参加したグループをローカルに保存

### 2. ユーザー管理
- **匿名認証**: Firebaseによる安全な匿名認証
- **かわいいアバター**: 18種類の動物アイコンから選択
- **複数デバイス対応**: 同じユーザーで複数端末OK

### 3. ドラフト機能（コア機能）
- **ラウンド制**: 複数ラウンドで進行
- **選択＋コメント**: アイテム選択時にコメント追加可能
- **かぶり判定**: 同じアイテムを選んだらスロット演出で勝負！
- **編集機能**: 過去ラウンドの選択を後から編集可能

### 4. リアルタイムチャット
- **グループチャット**: 参加者全員でワイワイチャット
- **自動スクロール**: 新着メッセージで自動的に最下部へ
- **システムログ**: 編集履歴なども自動表示

### 5. UI/UX
- **レスポンシブ対応**: PC・スマホ両対応
- **ダークモード**: 目に優しいダークモード対応
- **わかりやすいUI**: 初めてでも迷わない設計

## 🛠 技術スタック

- **フロントエンド**
  - Next.js 15 (App Router)
  - React 19
  - TypeScript 5
  - Chakra UI v3
- **状態管理**
  - Jotai
- **バックエンド**
  - Firebase Authentication（匿名認証）
  - Firebase Firestore（リアルタイムDB）
- **開発ツール**
  - Biome（Linter/Formatter）
  - Storybook（コンポーネント開発）
  - Playwright（E2Eテスト）
  - pnpm（パッケージマネージャー）

## 📝 開発コマンド

```bash
# 開発サーバー起動
pnpm dev

# ビルド（型チェック含む）
pnpm build

# 型チェック
pnpm type-check

# Lint実行
pnpm lint

# テスト実行
pnpm test

# Storybook起動
pnpm storybook

# E2Eテスト
pnpm test:e2e
```

## 📁 プロジェクト構成

```
online-draft/
├── app/              # Next.js App Router
├── src/
│   ├── components/   # UIコンポーネント
│   │   ├── features/ # 機能別コンポーネント
│   │   ├── ui/       # 共通UIコンポーネント
│   │   └── layout/   # レイアウトコンポーネント
│   ├── hooks/        # カスタムフック
│   ├── lib/          # ライブラリ設定
│   ├── stores/       # Jotai ストア
│   ├── types/        # TypeScript型定義
│   └── helpers/      # ユーティリティ関数
├── docs/             # ドキュメント
├── e2e/              # E2Eテスト
└── public/           # 静的ファイル
```

## 🎯 現在の実装状況

### ✅ 完了済み
- TOPページ（ランディングページ）
- 参加システム（コード・URL・履歴から参加）
- ロビーシステム（ユーザー選択・作成）
- Firebase匿名認証
- Firestoreグループ管理
- Storybookコンポーネント開発環境

### 🔄 実装中
- ユーザー登録機能
- リアルタイム同期

### 📋 実装予定
- ドラフト選択機能
- リアルタイムチャット
- 結果表示・スロット演出

## 🤝 開発に参加する

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat: 素晴らしい機能を追加'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### コミットメッセージ規約

以下のプレフィックスを使用してください：

- `feat:` 新機能追加
- `fix:` バグ修正
- `docs:` ドキュメント変更
- `style:` コードフォーマット変更
- `refactor:` リファクタリング
- `test:` テスト追加・修正
- `chore:` ビルドプロセス・補助ツールの変更

## 📚 ドキュメント

詳細なドキュメントは `docs/` ディレクトリにあります：

- [開発ガイド](docs/DEVELOPMENT_GUIDE.md)
- [プロジェクト仕様](docs/SPECIFICATION.md)
- [コマンド一覧](docs/COMMANDS.md)
- [プロジェクト状況](docs/PROJECT_STATUS.md)

## 📄 ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。

## 🙏 謝辞

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Chakra UI](https://chakra-ui.com/)
- すべてのコントリビューターの皆様

---

**「推しを選んで、かぶったら勝負！」** で楽しいひとときを！🍺✨