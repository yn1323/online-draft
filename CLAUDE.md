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
- **適度な粒度分割**: 巨大ファイル回避・コロケーション重視・再利用性向上
- **Progressive Enhancement開発**: 動くもの→段階的改善
- **リアルタイム状態同期パターン**: Jotai + Firebase onSnapshot
- **Direct Import原則**: Barrelエクスポート禁止
- **User-First Design**: 技術制約よりユーザー体験優先

## 📍 現在のタスク状況
**Phase 6**: ChatLogSection大規模リファクタリング完了
- ✅ **完了**: 認証システム・ディレクトリ構成・Firestore基盤
- ✅ **完了**: Storybookテスト品質保証戦略・E2Eテスト戦略
- ✅ **完了**: ドラフトページUI統合・ResponsiveModal対応・ユーザビリティ最適化
- ✅ **完了**: ChatLogSectionリファクタリング・コンポーネント分割・テスト拡充
- ⏳ **次回**: Firestore連携・リアルタイム同期・状態管理実装

### 次回セッション開始時のTODO
1. **Firestore連携**: ドラフトデータの読み書き・リアルタイム同期
2. **状態管理強化**: 参加者ステータス・選択データの管理
3. **チャット機能実装**: LogItem・MessageInput活用した機能実装

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
- **ドラフト**: `src/components/features/draft/DraftPage/` (UI完成)
- **チャットログ**: `src/components/features/draft/DraftPage/components/ChatLogSection/` (リファクタ完了)
- **認証**: `src/hooks/auth/useAuth.ts`
- **UI共通**: `src/components/ui/responsive-modal.tsx`

## 🎮 プロジェクト基本情報

### コンセプト
**オンラインドラフト会議** - 推しを選んで、かぶったら勝負！

### 🎯 ドラフトゲームの本質（重要）
**戦略的思考ゲーム**：過去情報による戦略判断がメイン体験


#### **UI/UX設計の核心原則**
- **統合レイアウト**: 現在ラウンド+過去ラウンドを時系列で一元表示
- **効率的情報配置**: ステータス表示をテーブルヘッダーに統合
- **User-First Design**: 技術制約よりユーザー体験を最優先
- **レスポンシブ最適化**: ResponsiveModalでデバイス別最適表示

### 技術構成・実装状況
- ✅ **UI**: Next.js 15 + Chakra UI v3 + ResponsiveModal完成
- ✅ **ページ**: TOP・参加・ロビー・ドラフトUI完成
- ✅ **コンポーネント**: 適度な粒度分割・再利用性向上・32スイート67テスト完了
- ✅ **テスト**: Storybook・E2Eテスト基盤
- ⏳ **次回**: Firestore連携・リアルタイム同期実装

## 📚 詳細ドキュメント

参考資料（必要時のみ）:
- `docs/DEVELOPMENT_GUIDE.md` - 技術制約・設計原則
- `docs/E2E_TESTING_GUIDE.md` - E2Eテスト戦略
- `docs/COMMANDS.md` - コマンド詳細
- `docs/PROJECT_STATUS.md` - 進捗・仕様
- `docs/LESSONS_LEARNED.md` - 重要な学び
- `docs/LEGACY_MIGRATION.md` - レガシー参考

**最終更新**: 2025/1/8 - ChatLogSection大規模リファクタリング・コンポーネント分割・テスト拡充完了