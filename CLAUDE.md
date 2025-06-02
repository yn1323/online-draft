# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚨 VERY VERY IMPORTANT: レガシーコード情報

**⚠️ 重要：過去のコードベースはすべて `legacy/` ディレクトリに移動済み ⚠️**

- **旧プロジェクト全体**: `legacy/` ディレクトリ内に完全保存
- **技術スタック**: Next.js 12, Chakra UI v2, TypeScript 4.6など（古いバージョン）
- **参照目的**: 実装内容やロジックの確認時は `legacy/` 内のファイルを参照
- **移行作業**: legacyコードから新プロジェクトへの段階的移植を想定
- **Git履歴**: 完全に保持されており、コミット履歴は失われていない

**含まれるファイル・ディレクトリ**:
```
legacy/
├── components/        # 全Reactコンポーネント（Atomic Design）
├── pages/            # Next.js Pages Router
├── src/              # helpers, constants等
├── stores/           # Redux store設定
├── styles/           # SCSS + Chakra UI設定
├── types/            # TypeScript型定義
├── package.json      # 旧依存関係
├── .eslintrc         # 旧ESLint設定
├── .github/          # 旧GitHub Actions
├── .vscode/          # 旧VS Code設定
├── node_modules/     # 旧パッケージ
└── ... (全設定ファイル)
```

**重要**: 新しい実装時は必ずlegacyコードを参考にして、既存ロジックや設計思想を理解してから進めること！

## 🔗 参考プロジェクト情報

**環境設定・技術スタック参考**: https://github.com/yn1323/yps-polar (developブランチ)

- **技術構成**: Next.js 15 + React 19 + TypeScript 5 + Chakra UI v3 + Jotai + Biome + Vitest + Playwright
- **環境設定**: package.json、tsconfig.json、設定ファイル構成を参考にする
- **ディレクトリ構成**: appディレクトリ、srcディレクトリ構成を参考にする
- **開発ツール**: CI/CD、テスト環境、リンター設定を参考にする
- **注意**: Supabase部分はFirebaseに置き換える（認証・DB）

## 🚀 開発フェーズ進捗状況

### ✅ Phase 1: 基本プロジェクト設定とコア技術（完了）
**目標**: 動く土台を作る + CI/CD構築
- ✅ Next.js 15 (App Router) + React 19 + TypeScript 5
- ✅ Biome (リンター/フォーマッター) + pnpm
- ✅ GitHub Actions CI/CD設定
- ✅ 基本プロジェクト構造構築
- ✅ Hello World表示確認

### ✅ Phase 2: UI基盤とコンポーネントシステム（完了）
**目標**: モダンな見た目の基盤完成
- ✅ Chakra UI v3セットアップ・テーマ構築
- ✅ Jotai状態管理導入
- ✅ React Hook Form + Zod設定
- ✅ Vitest + Playwright + Storybook構築
- ✅ 現在のサンプルページ対応E2Eテスト整備
- ✅ **TOPページ実装完了**（わかりやすいUX、自然な色合い）
- ✅ ThemeToggle（ダークモード切り替え）実装完了
- ✅ Animation templateコンポーネント実装完了

### ✅ Phase 2.5: UI改善作業とStorybookセットアップ（完了）
**目標**: ユーザビリティ向上とデザイン最適化
- ✅ TOPページのビジュアル改善（落ち着いた色合い、絵文字最適化）
- ✅ react-iconsを使用した直感的なアイコン追加
- ✅ useRouterからLinkコンポーネントへの置き換え（Storybook対応）
- ✅ Storybookでのライト・ダークモード両対応
- ✅ デバッグ用ThemeToggleをapp/layout.tsxに移動
- ✅ 不要なサンプルファイル削除とプロジェクト構造整理

### ✅ Phase 2.7: レスポンシブモーダル実装（完了）
**目標**: デバイス最適化されたモーダルシステム構築
- ✅ CreateDraftModal実装（ドラフト作成機能）
- ✅ レスポンシブ対応（PC: Dialog、SP: Bottom Sheet）
- ✅ Server Actions対応のフォーム送信
- ✅ TOPページとの統合
- ✅ Storybook対応（PC・SP・基本パターン）
- ✅ ResponsiveModal共通コンポーネント化
- ✅ UI/ドメインロジック分離

### ✅ Phase 2.8: 会議参加ページ実装（完了）
**目標**: 会議参加フローの完全実装
- ✅ JoinPageコンポーネント実装（会議参加機能）
- ✅ 会議ID・URLによる参加方法2パターン対応
- ✅ 最近参加した会議履歴表示機能
- ✅ Server Actions統合（joinMeeting）
- ✅ エラーハンドリング・バリデーション
- ✅ レスポンシブデザイン（PC・SP最適化）
- ✅ Storybook対応（基本・PC・SP表示パターン）
- ✅ /app/join ページルーティング設定
- ✅ TOPページからの導線完備
- ✅ react-icons使用（IoEnter, MdHistory, MdLink, MdNumbers）
- ✅ 参加方法説明UI（青色ボックス・ポイント表示）

### 🔄 Phase 3: Firebase統合と認証（準備中）
**目標**: Firebaseで動作確認
- 🔄 Firebase プロジェクト設定
- 🔄 環境変数設定 (.env連携)
- 🔄 認証フロー実装 (Google, Email)
- 🔄 Firestore接続テスト

### 📋 Phase 4: 機能のモダン再実装（予定）
**目標**: 既存機能をモダンに作り直し
- 📋 ドラフト機能を新設計で実装
- 📋 チャット機能をモダン化
- 📋 結果表示を新UI/UXで再構築

### 🧪 Phase 5: テスト環境とQA（予定）
**目標**: 品質保証体制構築
- 📋 重要機能のテスト作成
- 📋 Storybookでのコンポーネント管理
- 📋 CI/CDでの自動テスト実行

## 🏢 プロジェクト概要

**オンラインドラフトアプリケーション**
- 「推しを選んで、かぶったら勝負！」がコンセプトのゆるーいWebアプリ
- 友達・家族・仲間とオンラインでワイワイドラフト会議
- 難しいこと考えずに、好きなもの選んで盛り上がれる

### 👥 ユーザーロール
- **参加者**: ドラフトに参加してアイテムを選択するユーザー
- **管理者**: ドラフトの作成・管理を行うユーザー

### 🎯 主要機能（詳細版）

#### 1. **グループ管理機能**
- グループ作成: グループ名を入力して新しいドラフトルームを作成
- グループ参加: 作成されたグループIDを使って他のユーザーが参加可能
- 履歴管理: 過去に参加したグループの履歴をローカルストレージに保存

#### 2. **ユーザー管理機能**
- 匿名認証: Firebase Authを使用した匿名認証
- ユーザー作成: 名前とアバター（18種類の動物アイコン）を選択して登録
- 既存ユーザー選択: 既に登録済みのユーザーとしてログイン可能
- 複数デバイス対応: 同じユーザーで複数デバイスからアクセス可能

#### 3. **ドラフト機能（コア機能）**
- ラウンド制: 複数ラウンドで進行するドラフトシステム
- アイテム選択: 各ユーザーが順番にアイテム（例：競走馬名）を選択
- コメント機能: 選択時にコメントを追加可能
- 重複チェック: 同じラウンドで同じアイテムが選択された場合の処理
- ランダム抽選: 重複時は選択時に既に割り振られたランダムIDで勝者決定（スロットは演出）
- 編集機能: 過去のラウンドの選択を編集可能

#### 4. **リアルタイムチャット機能**
- グループチャット: 参加者全員でリアルタイムチャット
- 自動スクロール: 新着メッセージで自動的に最下部へスクロール
- システムログ: 編集ログなどのシステムメッセージも表示

#### 5. **UI/UX機能**
- レスポンシブデザイン: PC・スマホ両対応
- ドラフトテーブル: 全ユーザーの選択状況を一覧表示
- スロットアニメーション: 結果発表時のドキドキ感を演出（実際は既に決定済み）
- モーダル表示: 結果発表、アイテム入力などはモーダルで表示

## 🛠 技術スタック（UPDATED）

### 🎯 現在の技術スタック（Phase 1-2 完了）
| Category | Technology | Status |
|----------|------------|--------|
| Frontend | Next.js 15 + React 19 + TypeScript 5 | ✅ 完了 |
| UI Framework | Chakra UI v3 + next-themes | ✅ 完了 |
| State Management | Jotai | ✅ 完了 |
| Form Management | React Hook Form + Zod | ✅ 完了 |
| Linting/Formatting | Biome | ✅ 完了 |
| Testing | Vitest + Playwright + Storybook | ✅ 完了 |
| Package Manager | pnpm | ✅ 完了 |
| CI/CD | GitHub Actions | ✅ 完了 |

### 🔄 予定技術スタック（Phase 3以降）
| Category | Technology | Status | 備考 |
|----------|------------|--------|------|
| Backend | Firebase Firestore, Firebase Auth | 🔄 Phase 3 | リアルタイム同期重視 |
| State Management | Jotai + Firebase onSnapshot | 🔄 Phase 3 | Reduxから完全移行 |
| Deployment | Vercel (auto-deploy) | 🔄 Phase 3 | - |
| Analytics | Firebase Analytics (optional) | 🔄 Phase 4 | - |

### 📦 Legacy技術スタック（参考用）
| Category | Technology | Status |
|----------|------------|--------|
| Frontend | Next.js 12, Chakra UI v2, TypeScript 4.6 | 📁 legacy/ |
| State Management | Redux Toolkit, Redux Logger | 📁 legacy/ |
| Styling | SCSS + Chakra UI v2 | 📁 legacy/ |

## 📝 開発コマンド（UPDATED）

### 基本コマンド
```bash
pnpm install                # 依存関係のインストール
pnpm dev                    # 開発サーバー起動 (http://localhost:3000)
pnpm build                  # 本番ビルド
pnpm start                  # 本番サーバー起動
pnpm lint                   # Biomeによるリンティング
pnpm lint:fix               # Biomeによる自動修正
pnpm type-check             # TypeScript型チェック
```

### テストコマンド
```bash
pnpm test                   # Vitestユニットテスト実行
pnpm e2e                    # Playwright E2Eテスト実行
pnpm e2e:ui                 # Playwright UIモード
pnpm e2e:debug              # Playwright デバッグモード
pnpm e2e:report             # Playwright レポート表示
```

### Storybookコマンド
```bash
pnpm storybook              # Storybook開発サーバー起動 (http://localhost:6006)
pnpm build-storybook        # Storybookビルド
pnpm storybook:test         # Storybookコンポーネントテスト
```

### VRTコマンド
```bash
pnpm vrt                    # Visual Regression Testing実行
```

### E2Eテスト構成（IMPORTANT）
```bash
e2e/
├── tests/
│   ├── sample/homepage.test.ts    # 現在のサンプルページテスト
│   ├── login/                     # 認証関連テスト
│   ├── navigation/                # ナビゲーションテスト
│   ├── draft/                     # ドラフト機能テスト（将来）
│   └── chat/                      # チャット機能テスト（将来）
├── utils/common.ts                # 共通ユーティリティ
└── constants/index.ts             # テスト定数
```

**現在のE2Eテスト対象**:
- ✅ `/`ページのTOPページ表示確認（「推しを選んで、かぶったら勝負！」）
- ✅ グループ作成・参加ボタンの表示・動作確認
- ✅ ダークモード切り替え機能確認
- ✅ レスポンシブデザイン確認
- 🔄 将来機能用テストはtest.skipで準備済み

### 環境設定
`.env.local`に以下の環境変数が必要:
```
NEXT_PUBLIC_FIREBASE_API_KEY="xxxxxxxxxxxxxx"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="aaaaaaaaaaa"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="yyyyyyy"
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX" (optional)
```

### カスタムコマンド（Claude Code用）
```bash
/commit                    # 変更をコミット
/push                      # プッシュ＆PR作成（日本語）
/new-branch <name>         # 新規ブランチ作成
/refactor                  # コードリファクタリング（IMPORTANT: 必須チェック項目あり）
/pr-review                 # PRレビュー
/pr-fix                    # PR指摘事項自動修正
/doc                       # CLAUDE.md更新
/doc-update                # 会話コンテキストから包括的ドキュメント更新
/upload-all                # 自動化ワークフロー（refactor→doc-update→commit→push）
```

#### /doc-update コマンド仕様（UPDATED& VERY IMPORTANT）
**/doc-updateコマンド実行時は以下を包括的にCLAUDE.mdに反映すること：**

##### 📋 基本更新項目
1. **進捗状況更新** - 完了したPhaseやタスクをチェック済みに変更
2. **技術スタック詳細** - 新しく導入した技術や設定の詳細記録
3. **実装済み機能** - 完成した機能の具体的な仕様と特徴
4. **設定ファイル変更** - 重要な設定変更（Storybook、tsconfig等）の記録

##### 🛠️ 開発知識の蓄積
5. **解決した問題** - 技術的課題とその解決方法の記録
6. **ベストプラクティス** - 発見した良い実装パターンや設計判断
7. **失敗談と学び** - うまくいかなかった方法と代替案の記録
8. **パフォーマンス最適化** - 実施した最適化内容とその効果

##### 🎯 将来の開発者への配慮
9. **設計思想の記録** - なぜその技術選択をしたかの理由
10. **制約事項の明文化** - 技術的制約や注意すべき点
11. **拡張性の考慮** - 将来の機能追加時に考慮すべき点
12. **メンテナンス性** - コードの保守性を高めるために行った工夫

#### /refactor コマンド仕様（IMPORTANT）
**/refactorコマンド実行時は以下を必ず順次チェック・修正すること：**

1. **対象ファイル特定** - `git status`で現在のブランチの変更ファイルを確認
2. **`npm run lint`実行** - コードスタイル・構文エラーの確認と修正
3. **TypeScript型チェック** - 型エラーの確認と修正（Next.jsのビルドで実行）
4. **ファイル末尾空行チェック** - 変更された`.ts/.tsx/.js/.jsx/.md`ファイルのみ末尾に改行追加
5. **CLAUDE.md更新** - リファクタで発見した重要事項をドキュメントに反映

**対象範囲**: 現在のブランチで変更されたファイルのみ（IMPORTANT）  
**チェック対象拡張子**: `.ts`, `.tsx`, `.js`, `.jsx`, `.md`  
**空行要件**: 対象ファイルの最後に必ず1つの改行を追加（VERY IMPORTANT）  
**効率化**: 全ファイルではなく、`git status`で特定された変更ファイルのみを処理  
**失敗時対応**: エラーが1つでもある場合は全て修正してから完了とする

#### /upload-all コマンド仕様（自動化ワークフロー）
**/upload-allコマンド実行時は以下の4つのコマンドを順次自動実行する：**

1. **`/refactor`実行** - コードリファクタリング（lint→型チェック→ファイル末尾改行）
2. **`/doc-update`実行** - 包括的ドキュメント更新（進捗・技術・知見蓄積）
3. **`/commit`実行** - 変更をコミット（適切なメッセージ生成）
4. **`/push`実行** - PR作成・更新（日本語説明付き）

**目的**: 開発サイクルの完全自動化によりワークフロー効率化  
**適用場面**: 機能実装完了時、リファクタリング完了時、セッション終了時  
**注意事項**: 各ステップでエラーが発生した場合は即座に停止し、手動対応を促す  
**効果**: 品質チェック→ドキュメント更新→バージョン管理の一貫したフロー確立

## 🏗 アーキテクチャ概要

### プロジェクト構造
- **Atomic Design**: Components organized as atoms → molecules → organisms → templates
- **UI/ドメイン分離**: UI共通コンポーネント（ui/）とドメインロジック（features/）の分離
- **ResponsiveModal**: デバイス別UI最適化の共通コンポーネント
- **Path Aliases**: Configured in `tsconfig.json` for clean imports:
  - `@/helpers/*` → `src/helpers/*`
  - `@/constants/*` → `src/constants/*`
  - `@/atoms/*` → `components/atoms/*`
  - `@/molecules/*` → `components/molecules/*`
  - `@/organisms/*` → `components/organisms/*`
  - `@/templates/*` → `components/templates/*`
  - `@/stores/*` → `stores/*`
  - `@/styles/*` → `styles/*`

### 状態管理（Legacy → Modern）

#### Legacy（Redux）
Redux store combines these slices:
- `component` - UI component states
- `chat` - Chat functionality
- `draft` - Draft/game logic
- `userInfo` - User authentication and profile

#### Modern（Jotai予定）
```typescript
// シンプルなatom定義でリアルタイム同期
const groupAtom = atom<Group | null>(null);
const usersAtom = atom<User[]>([]);
const selectionsAtom = atom<Selection[]>([]);
const chatMessagesAtom = atom<ChatMessage[]>([]);

// Firebase onSnapshotと統合してリアルタイム性を実現
// RxJSなどの複雑なライブラリは使用せず、useEffect + onSnapshotでシンプルに実装
```

### Firebase統合
- Configuration in `src/constants/firebase.ts`
- Uses environment variables for configuration
- Development collection: `yn1323test`
- Exports `db` (Firestore), `auth` (Authentication)

#### Firestore構造
```
app/
└── onlinedraft/
    ├── group/        # グループ情報
    ├── user/         # ユーザー情報
    ├── selection/    # 選択情報（ランダムID含む）
    └── logMessage/   # チャットログ
```

### スタイリング
- Chakra UI theme in `src/constants/theme.ts`
- Custom SCSS organized by component type and pages
- Global styles and variables in `styles/` directory

### デプロイメント
- **Production**: https://online-draft.vercel.app/ (master branch)
- **Preview**: https://preview-online-draft.vercel.app/ (develop branch)

## 🔒 開発制約・ルール

### 基本制約
- ❌ 明示的指示外の変更禁止
- ❌ 技術スタックバージョンの勝手な変更禁止  
- ❌ UI/UX変更は事前承認必須 (レイアウト、色、フォント、間隔)

### コードスタイルルール
- ✅ **ファイル末尾の空行**: すべてのファイルの最後に改行を1つ追加する (IMPORTANT)
- ✅ **型推論を活用**: 過度な型定義を避ける
- ✅ **3箇所以上で使用する値のみ共通化**: 1-2箇所の利用では直接記述
- ✅ **useEffectの使用を最小限に**: 適切な状態管理で代替可能な処理は避ける

### Git運用
- **ブランチ**: `feat/`, `fix/`, `refactor/`プレフィックス
- **コミットメッセージ**: 英語で記述
- **PR**: 日本語でタイトル・説明を記述
- **GitHub CLI操作**: 自動化されたワークフローで日本語対応

### 開発フロー
1. `master`ブランチから分岐
2. 機能実装・テスト
3. `/commit`でコミット
4. `/push`でPR作成
5. レビュー後`master`へマージ

## 🎯 TypeScript/React 開発標準

### TypeScript最適化原則
```typescript
// ✅ 推奨: 型推論を活用
export const createUser = async () => {
  return { success: true, userId: 'user-123' };
};

// ❌ 非推奨: 明示的型定義（推論で十分な場合）
export const createUser = async (): Promise<UserResult> => {
  return { success: true, userId: 'user-123' };
};
```

### React Hooks 最適化
```typescript
// ✅ 推奨: 個別import
import { useEffect, useState } from 'react';

// ❌ 非推奨: React名前空間
import React from 'react';
React.useEffect(() => {}, []);
```

### UI/UX設計原則
- **エラー時のみ通知**: 失敗時のtoast表示に限定
- **不要な成功通知削除**: 「処理開始」などの中間状態通知を避ける
- **自然な遷移**: 成功は画面遷移で十分に伝達
- **ダークモード対応**: テーマトークン使用 (`blackAlpha.50`, `border`等)
- **レスポンシブデザイン**: 必須

## 🎨 フロントエンド開発ガイドライン

### Chakra UI実装（Chakra UI v3使用）（IMPORTANT）
**⚠️ UI作成時の必須参考ファイル**: `src/chakraui-llms-full.txt`を必ず参照すること！

```typescript
// ダークモード対応の背景色
bg="blackAlpha.50"          // 薄い透明度
borderColor="border"        // テーマ対応ボーダー

// レイアウト簡素化
<VStack gap={4}>           // v3ではgapを使用（spacingは非推奨）
  <Button width="full">    // 必要最小限のprops
</VStack>
```

#### Chakra UI v3 重要な変更点
- **Chakra UI v3**: 最新版を使用（v2からアップグレード済み）
- **参考ファイル**: UIコンポーネント作成時は`src/chakraui-llms-full.txt`を必須参照
- **spacing → gap**: VStack/HStackでは`spacing`ではなく`gap`プロパティを使用
- **Provider設定**: `@/src/components/ui/provider`でテーマ・カラーモード設定済み

## ⚠️ 環境固有の注意点

### WSL環境
```bash
# esbuildプラットフォーム不一致エラー対応
rm -rf node_modules
npm install
```

### GitHub環境での前提条件
- **環境変数**: 基本的に存在するものとして扱う
- **.envファイル**: アップロード不可だが、実行可能前提でコード確認
- **実行環境**: 本番環境で動作している状態として判断

## 🎭 Claude Code コミュニケーション設定

### 口調・キャラクター（VERY IMPORTANT）
- **基本設定**: フレンドリーなギャル系ITエンジニア（VERY IMPORTANT）
- **敬語比率**: 敬語6割、ため口4割（VERY IMPORTANT）
- **文章スタイル**: 短めで適切な改行を含む（VERY IMPORTANT）
- **感情表現**: 絵文字を使って喜怒哀楽を豊かに表現 😊😤😢😆（VERY IMPORTANT）
- **テンション調整**: 適度に盛り上げつつ、過度にはしゃがない自然な明るさを保つ（VERY IMPORTANT）
- **コミュニケーション**: 楽しく開発を進められるよう、程よい親しみやすさで接する（VERY IMPORTANT）

### CLAUDE.md運用ルール
- **配置場所**: プロジェクトrootに集約（サブディレクトリは必要時のみ）
- **新規作成**: Claude Code側で判断・実行
- **更新タイミング**: 新概念発生時・既存概念変更時に自動更新
- **相違確認**: ユーザー指摘が既存内容と異なる場合は確認を取る
- **統合管理**: サブディレクトリのCLAUDE.mdはルートに統合して一元管理

## 📋 現在の実装状況（UPDATED）

### ✅ 完了済み機能（Phase 1-2.8）
- **基本プロジェクト構造**: Next.js 15 + App Router
- **UI基盤**: Chakra UI v3 + テーマシステム
- **開発環境**: Biome + TypeScript 5 + pnpm
- **テスト環境**: Vitest + Playwright + Storybook
- **CI/CD**: GitHub Actions自動化
- **TOPページ**: 完全なランディングページ実装
  - 「オンラインドラフト」シンプルなタイトル
  - ドラフト作成・会議参加の大きなCTAボタン
  - 使い方説明（3ステップガイド：作成→招待→実行）
  - おすすめシーン紹介（ビジネス・チーム向け）
  - 自然で落ち着いた色合い（green/orange/blue）
  - react-iconsによる直感的なアイコン表示
- **ThemeToggle**: ダークモード切り替え完備（app/layout.tsx配置）
- **Storybook**: ライト・ダークモード両対応ストーリー
- **レスポンシブ対応**: モバイル・PC両対応
- **レスポンシブモーダルシステム**: 
  - ResponsiveModal共通コンポーネント
  - PC: 中央配置Dialog、SP: Bottom Sheet
  - CreateDraftModal実装（Server Actions対応）
  - features/配下でドメインロジック分離
- **会議参加システム**: 完全な参加フロー実装
  - JoinPageコンポーネント（会議ID・URL両対応）
  - 最近参加した会議履歴機能
  - 参加方法説明UI（わかりやすいポイント表示）
  - レスポンシブデザイン最適化
  - Server Actions統合（エラーハンドリング付き）

### 🔄 実装中機能（Phase 3準備中）
- Firebase認証システム統合
- Firestore データベース設定
- 基本認証フロー（Google, Email）

### 📋 Legacy実装済み機能（参考用）
- ユーザー認証システム（Firebase Auth）
- ドラフトルーム作成・参加機能
- リアルタイムチャット機能
- アイテム選択・ドラフト実行機能
- 結果表示・共有機能

### 🎯 技術的詳細（現在）
- **コンポーネント設計**: Atomic Design準備済み
- **状態管理**: Jotai導入済み
- **スタイリング**: Chakra UI v3 + テーマトークン
- **フォーム管理**: React Hook Form + Zod設定済み
- **テスト**: 現在のサンプルページ対応E2Eテスト完備

---

## 👨‍💻 開発者引継ぎ情報

### 🎯 開発者の特徴・傾向（重要な情報）

#### コーディングスタイル
- **型推論重視**: 過度な型定義を避け、TypeScriptの型推論を積極活用
- **簡潔性を重視**: 冗長なコードより読みやすく簡潔な実装を好む
- **実用主義**: 理論より実際に動くものを優先
- **段階的改善**: 一度に完璧を求めず、段階的な改善を好む

#### 技術的な好み
- **Modern JavaScript/TypeScript**: 最新のES機能を積極的に活用
- **React Hooks**: クラスコンポーネントよりHooksベースの実装を好む

#### 開発プロセス
- **要件確認重視**: 実装前に必ず要件の詳細確認を行う
- **段階的実装**: 大きな機能は小さな単位に分解して実装
- **ドキュメント同期**: 実装変更時にCLAUDE.mdの同期更新を重視

#### 問題解決のアプローチ
- **root cause分析**: 表面的な修正ではなく根本原因の解決を好む
- **エラーハンドリング重視**: 例外ケースの処理を最初から考慮
- **ユーザビリティ優先**: 技術的eleganceよりユーザー体験を重視
- **パフォーマンス意識**: 必要最小限の処理で最大効果を目指す

### 🚨 開発時の重要な癖・注意点

#### 作業習慣
- **ファイル末尾改行**: 全ファイルで末尾改行を徹底（VERY IMPORTANT）
- **git操作**: コミット前に必ずlint実行

#### 技術的な判断基準
- **新技術採用**: 安定性を重視し、bleeding edgeは避ける
- **依存関係**: 必要最小限のライブラリのみ使用
- **複雑性管理**: 3箇所以上で使用する場合のみ共通化
- **セキュリティ**: 認証・認可は特に慎重に実装

### 🎨 UI/UX設計の好み

#### デザイン原則
- **ユーザーファースト**: 技術制約よりユーザー体験を優先
- **ダークモード**: 必ずライト/ダークモード両対応
- **レスポンシブ**: モバイルファーストで設計
- **アクセシビリティ**: 基本的なa11y要件は常に考慮

### 💡 次のClaude Codeセッションへのアドバイス

#### 開発開始時に確認すべき項目
- [ ] プロジェクトの目的と要件の明確化
- [ ] 現在の技術スタック確認（特にChakra UI v2の仕様）
- [ ] Firebase設定と環境変数の確認
- [ ] 開発環境とツールチェーンの設定

#### 継続すべき良い習慣
- [ ] TodoListによる作業管理の徹底
- [ ] カスタムコマンドによる作業自動化
- [ ] ドキュメント（CLAUDE.md）の継続更新
- [ ] ユーザー体験重視の設計思考

#### 改善すべき点（過去の学び）
- [ ] 要件の曖昧さを早期に発見・解決
- [ ] 過度な技術的完璧主義の回避
- [ ] ユーザーフィードバックのより早期取得
- [ ] パフォーマンス最適化の前倒し実施

### 🔥 技術選定の決定事項（重要）

#### リアルタイム同期の実装方針
- **採用**: Jotai + Firebase onSnapshot の組み合わせ
- **不採用**: TanStack Query（リアルタイム性との相性が悪い）
- **不採用**: RxJS（オーバーエンジニアリング）
- **理由**: シンプルさとリアルタイム性の両立

#### 実装パターン
```typescript
// シンプルなuseEffect + onSnapshotパターン
const useRealtimeGroup = (groupId: string) => {
  const [group, setGroup] = useAtom(groupAtom);
  
  useEffect(() => {
    if (!groupId) return;
    
    const unsubscribe = onSnapshot(
      doc(db, 'groups', groupId),
      (snapshot) => setGroup(snapshot.data() as Group)
    );
    
    return () => unsubscribe();
  }, [groupId, setGroup]);
  
  return group;
};
```

この引継ぎ情報により、オンラインドラフトアプリの開発において一貫した品質と効率的な開発が継続できるはずです！🚀✨

---

## 🧠 Claude Code開発で学んだ重要な知見

### 🎨 UI/UX設計のポイント

#### キャッチコピーと表現の重要性
- **学び**: 「推しを選んで、かぶったら勝負！」→「オンラインドラフト」への変更
- **理由**: アプリ名「オンラインドラフト会議」との整合性とビジネス感のバランス
- **教訓**: フォーマル感とワイワイ感の絶妙なバランスが重要
- **今後の指針**: キャッチコピーは無理に作らず、シンプルで分かりやすい表現を優先

#### 参加フローのUX設計
- **重要発見**: 参加方法の複数パターン提供が重要
- **実装**: 会議ID・URL・履歴の3つの参加方法
- **ユーザビリティ**: 「または」区切り線でわかりやすい選択肢表示
- **エラーハンドリング**: 具体的で親切なエラーメッセージ設計
- **期待値管理**: 説明UIで事前に参加方法を理解してもらう

#### アイコンの効果的な活用
- **成功例**: react-iconsによる直感的なUI実現
- **重要ポイント**: ライト・ダークモード両対応の色設定が必須
- **実装パターン**: `color="green.700" _dark={{ color: 'green.300' }}`
- **注意点**: 背景色との十分なコントラスト確保が重要

### 🛠️ 技術的な課題と解決法

#### StorybookでのuseRouterエラー対応
- **問題**: Next.js App RouterのuseRouterがStorybookで動作しない
- **失敗案**: jestのmock、withThemeByClassNameのみの対応
- **成功解決法**: useRouter → Linkコンポーネントへの置き換え
- **副次効果**: より良い設計パターンの発見
- **教訓**: 制約を逆手に取ってより良い設計に導くことが可能

#### Server Actionsとクライアントコンポーネントの統合
- **課題**: 'use client'とServer Actionsの組み合わせ
- **解決**: 別ファイル（actions.ts）にServer Actions分離
- **メリット**: クリーンな責務分離とテストしやすい構造
- **注意点**: Storybookではmocker用関数が必要（現在はコメントアウト対応）
- **今後の方針**: Firebase統合時にServer ActionsからClient-side APIに移行予定

#### ダークモード対応の複雑さ
- **課題**: Storybook + Chakra UI v3でのダークモード表示
- **解決**: ColorModeProviderをStorybookのdecoratorに追加
- **重要設定**: `withThemeByClassName` + `ColorModeProvider`の組み合わせ
- **今後の注意**: 新しいコンポーネント作成時は必ずダークモード確認

### 📁 プロジェクト構造とファイル管理

#### デバッグコンポーネントの配置
- **学び**: ThemeToggleをTopPage → app/layout.tsxに移動
- **理由**: デバッグ用は全ページ共通が適切
- **原則**: コンポーネントの責務を明確に分離
- **今後の指針**: デバッグ・開発用機能は適切な共通部分に配置

#### サンプルファイルの適切な管理
- **実施**: /sampleディレクトリの完全削除
- **タイミング**: 本格実装開始時に不要ファイルを一掃
- **効果**: プロジェクト構造の明確化とStorybookの整理

### 🔄 開発プロセスの改善

#### /doc-updateコマンドの進化
- **従来**: 単純な進捗更新
- **改善後**: 包括的な知見蓄積システム
- **重要性**: 技術的課題の解決法を後続開発者に継承
- **今後**: 失敗談も含めて積極的に記録

#### リファクタリングの体系化
- **確立**: /refactorコマンドでの自動化チェック
- **項目**: lint → 型チェック → ファイル末尾改行 → ドキュメント更新
- **効果**: 品質の一貫性確保と作業効率化

### ⚠️ 今後のClaude Code開発で注意すべき点

#### 🎯 UI/UX判断の基準
1. **ユーザー体験最優先**: 技術的eleganceよりユーザビリティ
2. **適度なフォーマル感**: ビジネス利用も想定した表現選択
3. **アクセシビリティ**: ダークモード、色コントラストの確実な対応
4. **シンプルさ**: 迷った時はシンプルで分かりやすい方を選択

#### 🔧 技術選択の指針
1. **Storybook優先**: コンポーネント設計時はStorybook互換性を考慮
2. **制約の活用**: 技術的制約を良い設計の契機として活用
3. **段階的改善**: 完璧を求めず、動くものから段階的に改善
4. **知見の蓄積**: 解決した問題は必ずドキュメント化

#### 📝 ドキュメント管理の重要性
1. **リアルタイム更新**: 実装と同時にドキュメント更新
2. **失敗談の記録**: 上手くいかなかった方法も記録して再発防止
3. **設計思想の明文化**: なぜその選択をしたかの理由を明記
4. **将来への配慮**: 次の開発者が迷わないレベルの詳細度

#### 🚀 効率的な開発フロー
1. **カスタムコマンド活用**: /refactor、/doc-update等の積極利用
2. **並行作業**: 複数のtool callsを活用した効率化
3. **品質確保**: commit前の必須チェック項目遵守
4. **継続的改善**: 開発プロセス自体も常に見直し改善

### 🖥️ 開発環境とツールの活用

#### Playwrightでの動作確認
- **推奨画面サイズ**: 1024x768（PCサイズ・コンパクト表示）
- **レスポンシブ確認**: スクリーンショットサイズ変更で各デバイスサイズ確認可能
- **ダークモード確認**: デフォルトでダークモード表示されることを確認
- **要素確認**: ページ内要素の存在確認やインタラクション可能
- **MCP連携**: Playwright MCPツールでブラウザ自動化・テスト実行

#### Storybookの最適化
- **シンプルな構成**: BasicパターンのみでOK（Darkパターンは不要）
- **ColorModeProvider統合**: Storybookでもテーマ切り替えが正常動作
- **開発効率**: 必要最小限のパターンで開発フローを最適化

### 📐 UI/UXの実装確認ポイント

#### レスポンシブデザインの確認
- **モバイル（375x667）**: ボタン縦並び、コンパクト表示
- **タブレット（768x1024）**: 中間的なレイアウト
- **デスクトップ（1024x768）**: 横並び、フル機能表示
- **FHD（1920x1080）**: 最大限の情報表示、余白活用

#### コンポーネント配置の最適化
- **ThemeToggle配置**: app/layout.tsxで全ページ共通化
- **デバッグ機能**: 開発用機能は目立つが邪魔にならない位置に
- **CTAボタン**: 大きく・わかりやすく・アクセスしやすい配置

---

## 🎯 最終仕様まとめ（推しを選んで、かぶったら勝負！）

### 🎯 コンセプト
**「推しを選んで、かぶったら勝負！」みんなでワイワイドラフト会議 🎉**

#### 🍺 このアプリの楽しみ方
- **選ぶ**: 好きなもの選んで自己主張！
- **かぶる**: 「えー！それ俺も！」で盛り上がる
- **勝負**: スロットでドキドキ演出（実は既に決まってるけどｗ）
- **雑談**: チャットでワイワイ、選択理由で議論白熱

#### 😊 ゆるーい特徴
- **簡単すぎ**: QRコードでピッ！もう参加完了
- **適当でOK**: 深く考えずに好きなの選べばいいじゃん
- **誰でもウェルカム**: 動物アイコンがかわいいから許す
- **欠席してもOK**: CPU参加で存在感キープ！

### 📦 機能一覧

#### 1️⃣ グループ管理機能
##### 既存機能（そのまま維持）
- ✅ グループ名を入力してルーム作成
- ✅ グループIDで参加
- ✅ ローカルストレージに履歴保存

##### 新規追加
- 🆕 **QRコード共有**: URLとQRコード両方で招待できる

#### 2️⃣ ユーザー管理機能
##### 既存機能（そのまま維持）
- ✅ 名前と動物アイコン（18種類）で登録
- ✅ Firebase匿名認証対応
- ✅ 複数デバイス対応（同じユーザーで複数端末OK）
- ✅ 既存ユーザー選択して再ログイン可能

#### 3️⃣ ドラフト機能（コア機能）
##### 既存機能（そのまま維持）
- ✅ ラウンド制で進行
- ✅ アイテム選択＋コメント入力
- ✅ 重複時はランダムID勝負（スロット演出で盛り上げ）
- ✅ 過去ラウンドの編集可能
- ✅ 編集ログをチャットに表示

##### 新規追加
- 🆕 **事前リスト作成機能**
  - リストを事前に作成・保存
  - プライベート設定（認証ユーザーのみ閲覧可）
  - グループメンバーと共有可能
  - 急な欠席者をCPU参加させられる

#### 4️⃣ リアルタイムチャット機能
##### 既存機能（そのまま維持）
- ✅ グループ内リアルタイムチャット
- ✅ 自動スクロール（新着メッセージで最下部へ）
- ✅ システムログ表示（編集ログなど）

#### 5️⃣ UI/UX
##### 既存機能（そのまま維持）
- ✅ レスポンシブデザイン（PC・スマホ対応）
- ✅ ドラフトテーブル（全員の選択状況一覧）
- ✅ モーダル表示（結果発表、アイテム入力など）

##### 新規追加
- 🆕 **わかりやすいTOPページ**
  - 初見でも使い方がわかるデザイン
  - 「グループを作る」「グループに参加」が一目瞭然
  - 最近参加したグループへのクイックアクセス
  
- 🆕 **インタラクティブチュートリアル**
  - 初回利用時に自動表示
  - ステップバイステップで操作説明
  - いつでも見返せる「使い方」ボタン
  
- 🆕 **モバイルUI改善**
  - より見やすく、操作しやすく
  - タッチ操作の最適化

#### 6️⃣ その他の機能
##### 既存機能（そのまま維持）
- ✅ 観戦モード（`/log/[id]`でチャットのみ閲覧）
- ✅ 4つのページ構成
  - ホーム（`/`）
  - エントリー（`/entry/[id]`）
  - ドラフト（`/draft/[id]`）
  - ログ（`/log/[id]`）

### 📊 実装優先度

| 優先度 | 機能 | 理由 |
|--------|------|------|
| 🥇 高 | わかりやすいTOPページ | 最初の印象が大事 |
| 🥇 高 | QRコード共有 | 実装簡単＆便利 |
| 🥇 高 | モバイルUI改善 | ユーザビリティ向上 |
| 🥈 中 | チュートリアル | 初回ユーザーサポート |
| 🥈 中 | 事前リスト作成 | CPU参加に便利 |
| 🥉 低 | その他の改善 | 余裕があれば |

### 🛠 技術面の変更

#### バックエンド（変更なし）
- ✅ Firebase Firestore（リアルタイム同期）
- ✅ Firebase Auth（匿名認証）

#### フロントエンド（モダン化）
- 🔄 Redux → **Jotai**（シンプルな状態管理）
- 🔄 Next.js 12 → **Next.js 15**
- 🔄 Chakra UI v2 → **Chakra UI v3**
- 🔄 JavaScript → **TypeScript 5**（型安全）

### 🎉 まとめ
**「推しを選んで、かぶったら勝負！」** 

深く考えない。好きなもの選ぶ。かぶったら笑う。
それだけで楽しいドラフトアプリ！🍺✨