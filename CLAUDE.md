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

### 現在のタスク状況 📍
**Phase 3.4**: ユーザー登録機能とリアルタイム同期
- ✅ **完了**: 認証システム（自動ログイン・ログアウト）
- ✅ **完了**: ディレクトリ構成リファクタリング（コンポーネント統一）
- ✅ **完了**: Firestoreグループ作成・取得機能
- ✅ **完了**: LobbyPage Storybookの適切なモック実装（MSW + 実コンポーネントテスト）
- ✅ **完了**: テストユーティリティ共通化（src/test-utils構造確立）
- ✅ **完了**: Storybookテスト品質保証戦略の確立
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

### 作業完了前確認（VERY VERY IMPORTANT）
- [ ] **型エラーがないこと**: pnpm type-checkで確認。エラーがあれば修正すること
- [ ] **Lintエラーがないこと**: pnpm lintで確認。エラーがあれば修正すること
- [ ] **テストのエラーがないこと**: pnpm testで確認。単体テスト、StorybookともにこのコマンドでOK。エラーがあれば修正すること

## 📢 IMPORTANT（作業内容により参照）

### UI/UX作業時の注意事項
- **Chakra UI v3**: `src/chakraui-llms-full.txt`を必須参照
- **必須プロパティ**: IconButtonには`aria-label`必須
- **API変更**: `spacing`→`gap`、`useColorModeValue`のimport先変更
- **ダークモード**: 必ずライト/ダーク両対応確認

### 認証関連作業時の注意事項
- **useAuth**: `src/hooks/useAuth.ts`フック使用
- **Firebase**: 匿名認証はFirebase Anonymous Auth
- **状態管理**: Jotaiで認証状態をアプリ全体共有
- **テストページ**: `/auth-test`で動作確認可能

### リファクタリング時の必須項目
- **コマンド順序**: `/refactor` → lint → 型チェック → ファイル末尾改行 → ドキュメント更新
- **対象範囲**: `git status`で変更されたファイルのみ
- **失敗時対応**: エラーが1つでもある場合は全て修正してから完了

### 技術ガイドライン参照
- **Storybookテスト**: `docs/DEVELOPMENT_GUIDE.md`の「テスト・品質管理ガイドライン」参照
- **Firestore連携**: `docs/DEVELOPMENT_GUIDE.md`の「Firebase・Firestore統合ガイドライン」参照

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
pnpm dev          # 開発サーバー（localhost:3000）
pnpm build        # 型チェック兼ビルド
```

### 重要ファイル・パス
- `src/components/features/lobby/` - ロビーページ（旧entry）
- `src/components/features/join/` - 参加ページ
- `src/hooks/useAuth.ts` - 認証フック
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
- 🔄 Storybookテスト品質改善（MSW + Storybook Decorator戦略）
- ⏳ ユーザー登録・リアルタイム同期機能

## 📚 詳細ドキュメント（必要時のみ参照 IMPORTANT）

必要ならば下記も更新すること！！！！！（VERY VERY IMPORTANT！！！）
詳細情報は以下に分割予定：
- `docs/DEVELOPMENT_GUIDE.md` - 技術詳細・制約・ガイドライン
- `docs/COMMANDS.md` - 開発コマンド詳細
- `docs/PROJECT_STATUS.md` - フェーズ進捗・実装詳細
- `docs/LEGACY_MIGRATION.md` - レガシーコード情報・移行方針
- `docs/LESSONS_LEARNED.md` - 学んだ知見・解決法
- `docs/HANDOVER.md` - 開発者引継ぎ情報
- `docs/SPECIFICATION.md` - アプリ仕様書
- `docs/CLAUDE_PERSONALITY.md` - AI設定詳細

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

**最終更新**: 2025/1/6 - Storybookモック戦略確立、テストユーティリティ共通化完成