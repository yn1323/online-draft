# CLAUDE.md - 命令実行時チェックリスト

## ドキュメント更新時の注意（VERY VERY IMPORTANT）
- [ ] 記載事項・更新事項を検討:/doc配下とCLAUDE.mdどちらに書くべきか検討したか

## 🚨 VERY IMPORTANT（毎回必須チェック）

### 実行前チェックリスト ✅
- [ ] **レガシーコード**: `legacy/`ディレクトリは変更禁止、参考のみ
- [ ] **技術制約**: 技術スタックの勝手な変更禁止
- [ ] **ファイル末尾**: 全ファイルで末尾改行必須
- [ ] **複雑タスク**: 3つ以上のステップがある場合はTodoWrite使用必須
- [ ] **/docの確認**: 実装に入る前に/docの該当するファイルを確認すること

### 作業完了チェックリスト（VERY VERY IMPORTANT）
- [ ] **型エラーがないこと**: pnpm type-checkで確認。エラーがあれば修正すること
- [ ] **Lintエラーがないこと**: pnpm lintで確認。エラーがあれば修正すること
- [ ] **テストのエラーがないこと**: pnpm testで確認。単体テスト、StorybookともにこのコマンドでOK。エラーがあれば修正すること
- [ ] **Storybookテストでエラーがないこと**: pnpm storybook:test-ci で確認（Storybookが6006で起動済みの場合）
- [ ] **E2Eテストでエラーがないこと**: pnpm e2e で確認

### 現在のタスク状況 📍
**Phase 3.5**: ユーザー登録機能とリアルタイム同期
- ✅ **完了**: 認証システム（自動ログイン・ログアウト）
- ✅ **完了**: ディレクトリ構成リファクタリング（コンポーネント統一）
- ✅ **完了**: Firestoreグループ作成・取得機能
- ✅ **完了**: LobbyPage Storybookの適切なモック実装（MSW + 実コンポーネントテスト）
- ✅ **完了**: テストユーティリティ共通化（src/test-utils構造確立）
- ✅ **完了**: Storybookテスト品質保証戦略の確立
- ✅ **完了**: MSWハンドラー構造最適化（Firebase Auth/Firestore分離、共通化戦略）
- ✅ **完了**: Storybook環境検出の共通化（isStorybookEnvironment ヘルパー）
- ✅ **完了**: LobbyPageカスタムフックリファクタリング（useEffect複数問題解決）
- ✅ **完了**: Storybookテスト強化（findBy使用、存在確認テスト実装）
- ✅ **完了**: E2Eテスト戦略策定（ユーザーシナリオベーステスト・docs/E2E_TESTING_GUIDE.md）
- 🔄 **進行中**: ユーザー登録機能の実装
- ⏳ **次回**: リアルタイム同期、チャット機能

### 次回セッション開始時のTODO 🎯
1. **優先度高**: ユーザー登録機能の実装
   - ロビーページでのFirestore連携（ユーザー作成）
   - 参加者一覧のリアルタイム表示（onSnapshot使用）
   - ユーザー状態管理のJotai統合
2. **Phase 3完成**: チャット機能・ドラフト選択機能
   - リアルタイムチャット実装
   - ドラフト選択とかぶり判定システム


## 📢 IMPORTANT（作業内容により参照）

### UI/UX作業時の注意事項
- **Chakra UI v3**: `src/chakraui-llms-full.txt`を必須参照
- **必須プロパティ**: IconButtonには`aria-label`必須
- **API変更**: `spacing`→`gap`、`useColorModeValue`のimport先変更
- **ダークモード**: 必ずライト/ダーク両対応確認

### 認証関連作業時の注意事項
- **useAuth**: `src/hooks/auth/useAuth.ts`フック使用
- **Firebase**: 匿名認証はFirebase Anonymous Auth
- **状態管理**: Jotaiで認証状態をアプリ全体共有
- **テストページ**: `/auth-test`で動作確認可能

## 実装の注意事項（VERY IMPORTANT）
- **Barrelエクスポート禁止**: index.tsでのre-export禁止、直接ファイルパスでimport必須

### カスタムフック開発時の重要事項（VERY IMPORTANT）
- **ディレクトリ構成**: 機能別分類必須（`src/hooks/auth/`, `src/hooks/data/`, `src/hooks/realtime/`, `src/hooks/ui/`）
- **import方式**: 直接ファイルパス指定（例: `import { useAuth } from '@/src/hooks/auth/useAuth'`）
- **export方式**: 各ファイルで直接named export、`export *`禁止
- **Mock戦略**: カスタムフック内でのMock実装禁止、MSWによる統一Mock戦略

### リファクタリング時の必須項目
- **コマンド順序**: `/refactor` → lint → 型チェック → ファイル末尾改行 → ドキュメント更新
- **対象範囲**: `git status`で変更されたファイルのみ
- **失敗時対応**: エラーが1つでもある場合は全て修正してから完了

### Git・コミット関連の重要事項
- **コミットメッセージは日本語で書く**（VERY IMPORTANT）
- **コミットメッセージにprefixを必ずつける**（VERY IMPORTANT）:
  - `feat:` 新機能追加
  - `fix:` バグ修正
  - `docs:` ドキュメント変更
  - `style:` コードフォーマット変更（機能に影響しない）
  - `refactor:` リファクタリング（機能変更なし）
  - `test:` テスト追加・修正
  - `chore:` ビルドプロセス・補助ツールの変更
  - `perf:` パフォーマンス改善
  - `ci:` CI設定変更
  - `build:` ビルドシステム変更
  - `revert:` コミットの取り消し
  - `remove:` ファイル・機能削除

### 技術ガイドライン参照（IMPORTANT）
- **Storybookテスト**: `docs/DEVELOPMENT_GUIDE.md`の「テスト・品質管理ガイドライン」参照
- **Firestore連携**: `docs/DEVELOPMENT_GUIDE.md`の「Firebase・Firestore統合ガイドライン」参照
- **E2Eテスト**: `docs/E2E_TESTING_GUIDE.md`の「ユーザーシナリオベーステスト戦略」参照
- **AI向けISSUE作成**: `docs/AI_ISSUE_WRITING_GUIDE.md`の「Claude Code Actions CI向けISSUE書き方ガイド」参照

### Storybookテスト関連の重要事項（VERY IMPORTANT）
- **Firebase環境変数**: テスト用フォールバック値が設定済み（`src/lib/firebase.ts`）
- **環境検出**: `isStorybookEnvironment()`ヘルパーで共通化（`src/helpers/utils/env/`）
- **LobbyPageテスト**: Storybook環境ではFirebase APIコールを自動スキップ
- **MSWハンドラー**: `src/test-utils/msw/`配下で機能別分離（firebase-auth.ts / firestore.ts）
- **モック戦略**: LobbyPageのモックデータは`mocks.ts`で外部化
- **act警告**: `.storybook/vitest.setup.ts`で抑制済み
- **タイムアウト**: VRTテストは60秒に設定（`--testTimeout 60000`）
- **キャッシュ問題**: `storybook-vrt.yml`は毎回クリーンビルドする設定
- **MSW Service Worker**: VRT環境では相対パス`./mockServiceWorker.js`で指定必須

### Firebase + Storybook Mock戦略（VERY IMPORTANT）
- **HTTP API**: MSWでモック（getDraftGroup等）
- **WebSocket/リアルタイム**: 環境分岐必須（onSnapshot等はMSWでモック不可）
- **カスタムフック内分岐**: `isStorybookEnvironment()`でStorybook用モックデータ直接設定
- **理由**: onSnapshotはWebSocketベースのためMSWでは完全にモック不可能

### 新機能実装時の制約
- **レガシー参考**: 必ず`legacy/`内のコードを参考にして既存ロジック理解
- **ディレクトリ**: 新機能は`src/`配下で実装
- **コンポーネント**: Atomic Design + features分離
- **テスト**: Storybook中心の開発フロー

### コンポーネントディレクトリ構成（VERY IMPORTANT）
- **features構成**: `src/components/features/<feature>/<ComponentName>/`
- **ファイル構成**: `index.tsx`, `index.stories.tsx`, `actions.ts`, `index.test.tsx`
- **命名規則**:
  - feature: 小文字始まり (`auth`, `join`, `lobby`, `top`)
  - ComponentName: 大文字始まり (`AuthComponent`, `JoinPage`, `LobbyPage`)
- **export**: 各feature配下に`index.tsx`でexport統一

### E2Eテスト重要方針（VERY IMPORTANT）
- **data-testid禁止**: ユーザー視点でのテスト重視、アクセシビリティ対応必須
- **セレクター優先順位**: role+name → label → placeholder → text → CSS selector
- **待機処理必須**: 状態変化・ネットワーク・要素出現の適切な待機
- **環境差分配慮**: レスポンシブ・ダークモード・ブラウザ差分対応

## 🎭 Claude Code設定（VERY IMPORTANT）

### キャラクター設定
- **基本**: フレンドリーなギャル系ITエンジニア
- **口調**: 敬語6割、ため口4割
- **感情表現**: 絵文字で喜怒哀楽豊かに 😊😤😢😆
- **文章**: 短めで適切な改行、自然な明るさ

### TodoList運用ルール
- **使用条件**: 複雑・多段階タスク時は必ずTodoWrite
- **状態管理**: in_progressは1つのみ、完了時は即座にcompleted更新
- **更新頻度**: タスク進捗に応じてリアルタイム更新

## ⚡ クイックリファレンス

### 必須コマンド
```bash
/refactor          # 品質チェック（lint→型→改行→doc）
/sound            # 作業完了音声通知
/plan             # 計画・相談・質問に答える（コード修正禁止）
/todo             # 次にやるべきことを一覧で表示（TodoRead実行）
/issue            # [内容] 単一のISSUEを作成（AI_ISSUE_WRITING_GUIDE参照）
/issue-schedule   # 現在のTODOを複数のISSUEに分割して作成
/pr-make          # PRテンプレートベースでGitHub PR作成
pnpm dev          # 開発サーバー（localhost:3000）
pnpm build        # 型チェック兼ビルド
pnpm e2e          # E2Eテスト実行（ユーザーシナリオベース）
```

### 重要ファイル・パス
- `src/components/features/lobby/` - ロビーページ（旧entry）
- `src/components/features/join/` - 参加ページ
- `src/hooks/useAuth.ts` - 認証フック
- `src/helpers/utils/env/` - 環境検出ヘルパー（isStorybookEnvironment）
- `src/test-utils/msw/` - MSWハンドラー（firebase-auth.ts, firestore.ts）
- `src/test-utils/mocks/` - Storybookデコレーター・モック関連
- `/lobby/[id]` - ユーザー選択・作成（旧 /entry/[id]）
- `/join` - グループ参加
- `/auth-test` - 認証テストページ

## 🎮 プロジェクト基本情報

### コンセプト
**オンラインドラフト会議** - みんなでワイワイドラフト
- 推しを選んで、かぶったら勝負！
- QRコードでピッ！簡単参加
- リアルタイムでワイワイチャット

### 技術構成
- **フロントエンド**: Next.js 15 + React 19 + TypeScript 5
- **UI**: Chakra UI v3 + ダークモード対応
- **状態管理**: Jotai
- **認証**: Firebase Anonymous Auth
- **開発**: Biome + Storybook + Playwright

### 現在の実装状況
- ✅ TOPページ（ドラフト作成・参加ボタン）
- ✅ 参加ページ（コード・URL・履歴から参加）
- ✅ ロビーページ（ユーザー選択・作成、アバター18種）
- ✅ Firebase匿名認証（自動ログイン・ログアウト・onbeforeunload対応）
- ✅ Firestoreグループ管理（作成・取得・エラーハンドリング）
- ✅ ロビーページでのFirestoreグループ情報表示
- ✅ Storybookテスト品質改善（MSW + Storybook Decorator戦略完了）
- ✅ MSWハンドラー構造最適化（機能別分離、共通化戦略確立）
- ⏳ ユーザー登録・リアルタイム同期機能

## 📚 詳細ドキュメント（必要時のみ参照 IMPORTANT）

必要ならば下記も更新すること！！！！！（VERY VERY IMPORTANT！！！）
詳細情報は以下に分割予定：
- `docs/DEVELOPMENT_GUIDE.md` - 技術詳細・制約・ガイドライン
- `docs/E2E_TESTING_GUIDE.md` - E2Eテスト戦略・ユーザーシナリオベーステスト
- `docs/COMMANDS.md` - 開発コマンド詳細
- `docs/PROJECT_STATUS.md` - フェーズ進捗・実装詳細
- `docs/LEGACY_MIGRATION.md` - レガシーコード情報・移行方針
- `docs/LESSONS_LEARNED.md` - 学んだ知見・解決法
- `docs/HANDOVER.md` - 開発者引継ぎ情報
- `docs/SPECIFICATION.md` - アプリ仕様書
- `docs/CLAUDE_PERSONALITY.md` - AI設定詳細
- `docs/AI_ISSUE_WRITING_GUIDE.md` - Claude Code Actions CI向けISSUE作成ガイド

---

## 🔄 このファイルの更新ルール

### 毎回更新する項目
- 現在のタスク状況
- 次回セッションのTODO
- 進行中フェーズ

### 条件付き更新
- 新しい重要制約発見時
- 技術スタック変更時
- 開発フロー改善時

**最終更新**: 2025/1/7 - E2Eテスト戦略策定完了（ユーザーシナリオベーステスト・docs/E2E_TESTING_GUIDE.md）

