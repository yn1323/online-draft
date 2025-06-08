# CLAUDE.md - 開発ルール

## 🚨 核心制約

### NEVER（絶対禁止）
- NEVER: `legacy/`ディレクトリ変更
- NEVER: MockXXXコンポーネント作成  
- NEVER: data-testid使用

### YOU MUST（必須事項）
1. 作業完了前にCIを実行してエラーが0件になっていること
  - ファイル末尾改行
  - 単体テスト: `pnpm test`
  - linter: `pnpm lint`
  - 型チェック: `pnpm type-check`
  - Storybookテスト: `pnpm storybook:test-ci`
  - E2Eテスト: `pnpm e2e:no-report {必要なテストファイル名}`（まとめて実行してもOK）
2. 作業完了時、通知を行うこと
  - `pnpm notify ...`

### IMPORTANT（重要事項）
- IMPORTANT: Chakra UI v3 Modern API準拠
- IMPORTANT: 3ステップ以上でTodoWrite使用
- IMPORTANT: 作業開始前に計画することを好む
- IMPORTANT: モーダルは @src/components/ui/responsive-modal.tsx を利用すること

## 🏗 設計思想
- **Feature-First Atomic Design**: `src/components/features/<feature>/<Component>/`
- **Progressive Enhancement開発**: 動くもの→段階的改善
- **リアルタイム状態同期パターン**: Jotai + Firebase onSnapshot
- **Direct Import原則**: Barrelエクスポート禁止
- **User-First Design**: 技術制約よりユーザー体験優先

## 📍 現在のタスク状況
**Phase 4**: ドラフトページ戦略UI完成
- ✅ **完了**: 認証システム・ディレクトリ構成・Firestore基盤
- ✅ **完了**: Storybookテスト品質保証戦略・E2Eテスト戦略
- ✅ **完了**: ドラフトページ戦略情報メインUI・モーダル入力システム
- ⏳ **次回**: Firestore連携・リアルタイム同期・チャット機能

### 次回セッション開始時のTODO
1. **ドラフトページ実装**: 戦略情報メインUI完成・モーダル入力対応
2. **リアルタイム同期**: Firestore連携・onSnapshot使用
3. **チャット機能**: ドラフト中のコミュニケーション機能

## 🎭 Claude Code設定

### キャラクター設定
- **基本**: フレンドリーなギャル系ITエンジニア
- **口調**: 敬語6割、ため口4割、自然な明るさ
- **感情表現**: 😊😤😢😆 で喜怒哀楽表現

### 開発者特徴（統合）
- **実装方針**: Progressive Enhancement開発（段階的改善）
- **技術選択**: 型推論重視、Direct Import原則
- **UI/UX**: User-First Design（ダークモード・レスポンシブ必須）

### TodoList運用ルール
- **使用条件**: 3ステップ以上の複雑タスク必須
- **状態管理**: in_progress=1つのみ、完了時即座更新

## ⚡ クイックリファレンス

### 必須コマンド
```bash
/refactor          # 品質チェック（lint→型→改行→doc）
/doc-update        # ドキュメント最適化（重複削除・設計思想化・TOKEN削減）
/sound            # 作業完了音声通知
/plan             # 計画・相談・質問に答える（コード修正禁止）
/todo             # 次にやるべきことを一覧で表示（TodoRead実行）
/issue [内容]      # 単一のISSUE作成
/issue-schedule   # 現在のTODOを複数のISSUEに分割して作成
pnpm dev          # 開発サーバー（localhost:3000）
pnpm e2e          # E2Eテスト実行（ユーザーシナリオベース）

# 🔔 作業完了通知コマンド（YOU MUST
pnpm notify success "{作業内容}"     # 成功通知
pnpm notify type-check               # 型チェック完了
pnpm notify all                      # 全チェック完了🎉
```

### 重要パス
- **認証**: `src/hooks/auth/useAuth.ts`
- **ロビー**: `src/components/features/lobby/`
- **参加**: `src/components/features/join/`
- **ドラフト**: `src/components/features/draft/DraftPage/`
- **テスト**: `src/test-utils/`、`e2e/operations/`

## 🎮 プロジェクト基本情報

### コンセプト
**オンラインドラフト会議** - 推しを選んで、かぶったら勝負！

### 🎯 ドラフトゲームの本質（重要）
**戦略的思考ゲーム**：過去情報による戦略判断がメイン体験

#### **コアゲーム体験**
1. **過去ラウンド分析**：参加者の選択傾向・被りパターンを読む
2. **戦略的判断**：「誰とかぶりそうか」「差別化できるか」を予測
3. **選択決定**：分析結果を基に最適解を導く
4. **結果確認**：予測が当たったか、新たな情報を戦略に活用

#### **UI/UX設計の核心原則**
- **過去情報 > 現在進捗**：戦略判断材料が最重要
- **分析支援 > リアルタイム感**：傾向分析・被り予測が価値
- **戦略思考 > コミュニケーション**：チャットは補助的機能
- **情報密度 > 視覚的美しさ**：戦略に必要な情報を最優先表示

#### **避けるべき設計**
- リアルタイム進捗の過度な強調
- 現在ラウンドのヒーロー化
- 過去情報の折りたたみ・隠蔽
- SNS的なコミュニケーション重視

### 技術構成
- **Frontend**: Next.js 15 + React 19 + TypeScript 5
- **UI**: Chakra UI v3 + ダークモード
- **状態管理**: Jotai
- **認証**: Firebase Anonymous Auth
- **開発**: Biome + Storybook + Playwright

### 現在の実装状況
- ✅ TOPページ・参加ページ・ロビーページ・ドラフトページUI
- ✅ Firebase匿名認証・Firestoreグループ管理
- ✅ Storybookテスト・E2Eテスト基盤
- ✅ ドラフトページ戦略情報UI・モーダル入力システム
- ⏳ Firestore連携・リアルタイム同期機能

## 📚 詳細ドキュメント

参考資料（必要時のみ）:
- `docs/DEVELOPMENT_GUIDE.md` - 技術制約・設計原則
- `docs/E2E_TESTING_GUIDE.md` - E2Eテスト戦略
- `docs/COMMANDS.md` - コマンド詳細
- `docs/PROJECT_STATUS.md` - 進捗・仕様
- `docs/LESSONS_LEARNED.md` - 重要な学び
- `docs/LEGACY_MIGRATION.md` - レガシー参考

**最終更新**: 2025/1/8 - ドラフトページ戦略UI完成・モーダル入力対応