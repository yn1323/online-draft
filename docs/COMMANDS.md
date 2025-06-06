# 開発コマンドリファレンス

## 📝 基本コマンド
```bash
pnpm install                # 依存関係のインストール
pnpm dev                    # 開発サーバー起動 (http://localhost:3000)
pnpm build                  # 本番ビルド
pnpm start                  # 本番サーバー起動
pnpm lint                   # Biomeによるリンティング
pnpm lint:fix               # Biomeによる自動修正
pnpm type-check             # TypeScript型チェック
```

## 🧪 テストコマンド
```bash
pnpm test                   # Vitestユニットテスト実行
pnpm e2e                    # Playwright E2Eテスト実行
pnpm e2e:ui                 # Playwright UIモード
pnpm e2e:debug              # Playwright デバッグモード
pnpm e2e:report             # Playwright レポート表示
```

## 📚 Storybookコマンド
```bash
pnpm storybook              # Storybook開発サーバー起動 (http://localhost:6006)
pnpm build-storybook        # Storybookビルド
pnpm storybook:test         # Storybookコンポーネントテスト
```

### Storybook設定ルール（IMPORTANT）
```typescript
// ✅ 推奨: シンプルな設定（基本パターン）
const meta: Meta<typeof Component> = {
  title: 'Features/Component/ComponentName',
  component: Component,
  // layoutは通常指定不要（デフォルトで適切）
};

// ❌ 非推奨: 不要なfullscreen指定
const meta: Meta<typeof Component> = {
  title: 'Features/Component/ComponentName',
  component: Component,
  parameters: {
    layout: 'fullscreen', // 必要な場合のみ指定
  },
};
```

**重要**: `parameters.layout: 'fullscreen'`は本当に必要な場合（ページ全体表示など）のみ使用すること

## 🎨 VRTコマンド
```bash
pnpm vrt                    # Visual Regression Testing実行
```

## 🔄 E2Eテスト構成（IMPORTANT）
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

## ⚙️ 環境設定
`.env.local`に以下の環境変数が必要:
```
NEXT_PUBLIC_FIREBASE_API_KEY="xxxxxxxxxxxxxx"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="aaaaaaaaaaa"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="yyyyyyy"
NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX" (optional)
```

## 🛠️ カスタムコマンド（Claude Code用）
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
/sound                     # 作業完了音声通知機能（levelup.mp3/smallMedal.mp3）
/plan                      # 計画・相談・質問に答える（コード修正禁止）
```

### /plan コマンド仕様（計画・相談コマンド）
**/planコマンドは相談・計画・質問専用のコマンドです：**

**⚠️ VERY IMPORTANT: /planコマンドが含まれるメッセージでは、絶対にコードを修正してはいけません！**

**目的と使い方**:
- 実装方針の相談、技術的な質問への回答
- プロジェクトの次のステップの計画立案
- 問題解決のアプローチ提案
- アーキテクチャ設計の議論

**積極的な提案**:
- 現在の状況を分析し、複数の選択肢を提示
- メリット・デメリットを明確に説明
- おすすめの実装順序やベストプラクティスを提案
- 潜在的な課題とその対策を事前に指摘

**使用例**: 
```bash
/plan ユーザー登録機能の実装方針について相談したい
/plan Firestoreのデータ構造はどうすべき？
/plan 次に実装すべき機能の優先順位を提案して
```

**重要な制約**:
- コードの読み取り・分析はOK
- コードの修正・新規作成は絶対禁止
- 具体的な実装は別途指示を待つこと

### /doc-update コマンド仕様（UPDATED& VERY IMPORTANT）
**/doc-updateコマンド実行時は以下を包括的にCLAUDE.mdに反映すること：**

#### 📋 基本更新項目
1. **進捗状況更新** - 完了したPhaseやタスクをチェック済みに変更
2. **技術スタック詳細** - 新しく導入した技術や設定の詳細記録
3. **実装済み機能** - 完成した機能の具体的な仕様と特徴
4. **設定ファイル変更** - 重要な設定変更（Storybook、tsconfig等）の記録

#### 🛠️ 開発知識の蓄積
5. **解決した問題** - 技術的課題とその解決方法の記録
6. **ベストプラクティス** - 発見した良い実装パターンや設計判断
7. **失敗談と学び** - うまくいかなかった方法と代替案の記録
8. **パフォーマンス最適化** - 実施した最適化内容とその効果

#### 🎯 将来の開発者への配慮
9. **設計思想の記録** - なぜその技術選択をしたかの理由
10. **制約事項の明文化** - 技術的制約や注意すべき点
11. **拡張性の考慮** - 将来の機能追加時に考慮すべき点
12. **メンテナンス性** - コードの保守性を高めるために行った工夫

### /refactor コマンド仕様（IMPORTANT）
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

### /upload-all コマンド仕様（自動化ワークフロー）
**/upload-allコマンド実行時は以下の4つのコマンドを順次自動実行する：**

1. **`/refactor`実行** - コードリファクタリング（lint→型チェック→ファイル末尾改行）
2. **`/doc-update`実行** - 包括的ドキュメント更新（進捗・技術・知見蓄積）
3. **`/commit`実行** - 変更をコミット（適切なメッセージ生成）
4. **`/push`実行** - PR作成・更新（日本語説明付き）

**目的**: 開発サイクルの完全自動化によりワークフロー効率化  
**適用場面**: 機能実装完了時、リファクタリング完了時、セッション終了時  
**注意事項**: 各ステップでエラーが発生した場合は即座に停止し、手動対応を促す  
**効果**: 品質チェック→ドキュメント更新→バージョン管理の一貫したフロー確立

### /sound コマンド仕様（音声通知機能）（VERY IMPORTANT）
**/soundコマンドが命令に含まれる場合の音声通知ルール：**

**⚠️ VERY IMPORTANT: /soundコマンドが含まれるメッセージでは、必ず最後に音声再生を実行すること！**

1. **作業完了時の通知音**
   - **ファイル**: `/Users/natani/Music/Effect/levelup.mp3`
   - **タイミング**: タスクが正常に完了した時
   - **実行コマンド**: `afplay /Users/natani/Music/Effect/levelup.mp3`
   - **例**: ビルド成功、コミット完了、デプロイ成功など

2. **ユーザー操作が必要な時の通知音**
   - **ファイル**: `/Users/natani/Music/Effect/smallMedal.mp3`
   - **タイミング**: ユーザーの入力や確認が必要な時
   - **実行コマンド**: `afplay /Users/natani/Music/Effect/smallMedal.mp3`
   - **例**: エラー発生、確認待ち、選択肢の提示など

**使用例**: 
```bash
/refactor /sound     # リファクタリング完了時に音声通知
/commit /sound       # コミット後に完了音を鳴らす
/build /sound        # ビルド結果に応じて適切な音声を再生
```

**注意事項**:
- macOS環境でのみ動作（`afplay`コマンド使用）
- 音声ファイルが存在しない場合はエラーメッセージのみ表示
- /soundは他のコマンドと組み合わせて使用可能
- **VERY IMPORTANT**: /soundコマンドが含まれている場合、必ず作業の最後に適切な音声を再生すること

## 🔧 開発環境とツールの活用

### Playwrightでの動作確認
- **推奨画面サイズ**: 1024x768（PCサイズ・コンパクト表示）
- **レスポンシブ確認**: スクリーンショットサイズ変更で各デバイスサイズ確認可能
- **ダークモード確認**: デフォルトでダークモード表示されることを確認
- **要素確認**: ページ内要素の存在確認やインタラクション可能
- **MCP連携**: Playwright MCPツールでブラウザ自動化・テスト実行

### Storybookの最適化
- **シンプルな構成**: BasicパターンのみでOK（Darkパターンは不要）
- **ColorModeProvider統合**: Storybookでもテーマ切り替えが正常動作
- **開発効率**: 必要最小限のパターンで開発フローを最適化