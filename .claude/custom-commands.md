# Draft Game Platform カスタムコマンド

> **Version**: 1.0.0  
> **目的**: ドラフトゲームプラットフォーム開発ワークフローの自動化と効率化

## 🚀 利用可能なカスタムコマンド

### 1. `commit` - Gitコミット自動化
**機能**: 変更をステージングして適切なコミットメッセージを生成し、コミットを実行

**実行手順**:
```bash
# Claude Codeで以下のように指示
"commitコマンドを実行してください"
```

**処理フロー**:
1. `git status` で現在の状態を確認
2. `git diff` で変更内容を確認
3. `git log` で最近のコミット履歴を確認（メッセージスタイル参考）
4. 関連ファイルを自動ステージング
5. 変更内容に基づいてコミットメッセージを生成
6. コミット実行（Claude Code署名付き）

**生成されるコミットメッセージ形式**:
```
[変更内容の簡潔な説明]

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### 2. `push` - プッシュ&PR作成自動化
**機能**: ブランチをプッシュしてGitHub上でPRを自動作成

**実行手順**:
```bash
# Claude Codeで以下のように指示
"pushコマンドを実行してください"
# または
"/push"
```

**処理フロー**:
1. `git status` で現在のブランチ状態を確認
2. `git diff main...HEAD` でmainブランチからの全変更を確認
3. `git log main...HEAD` でコミット履歴を確認
4. ブランチをリモートにプッシュ（-u フラグ付き）
5. 変更内容に基づいて日本語でPRタイトルと概要を生成
6. `gh pr create` でPRを自動作成
7. 作成されたPRのURLを返却

**生成されるPR形式**:
```markdown
## 概要
[変更の目的や背景を日本語で説明]

## 変更内容
### 🔧 主な変更点
- [具体的な変更内容をリスト化]

### ✅ 追加/修正した機能
- [機能の詳細]

## テスト方法
1. [テスト手順を具体的に記載]
2. [期待される動作]

## 今後の作業
- [必要に応じて残作業を記載]

🤖 Generated with [Claude Code](https://claude.ai/code)
```

### 3. `new-branch` - 新規ブランチ作成自動化
**機能**: 最新のmainブランチから日付ベースの新規ブランチを作成

**実行手順**:
```bash
# Claude Codeで以下のように指示
"new-branchコマンドを実行してください"
```

**処理フロー**:
1. `git status` で現在の状態を確認
2. `main` ブランチに切り替え
3. `git pull origin main` で最新の変更を取得
4. 現在の日付でブランチ名を生成（`feat/YYYY-MM-DD` 形式）
5. 新規ブランチを作成してチェックアウト
6. ブランチ作成の確認

**生成されるブランチ名例**:
```
feat/2025-05-31
feat/2025-06-01
...
```

### 4. `refactor` - コードリファクタリング自動化
**機能**: 現在のブランチで変更したコードを自動リファクタリング

**実行手順**:
```bash
# Claude Codeで以下のように指示
"refactorコマンドを実行してください"
```

**処理フロー**:
1. `git diff main...HEAD --name-only` で変更ファイル一覧を取得
2. 変更内容を解析してリファクタリング機会を特定
3. コードパターン、重複、改善点を識別
4. リファクタリングを適用（可読性、パフォーマンス、保守性向上）
5. 機能が維持されていることを検証
6. リファクタリング内容をコミット

### 5. `pr-review` - GitHub PR自動レビュー（強化版）
**機能**: GitHub PRを詳細レビューして構造化されたコメントを投稿

**実行手順**:
```bash
# Claude Codeで以下のように指示
"pr-reviewコマンドを実行してください"
```

**処理フロー**:
1. `gh pr view` で包括的なPR情報を取得（タイトル、本文、コミット履歴等）
2. `git diff main...HEAD` で変更ファイル一覧と差分を取得
3. `git log` でコミット履歴とコンテキストを確認
4. 各ファイルを個別分析してコード品質と潜在的問題を特定
5. 具体的な行番号レベルでの問題を識別
6. 概要と⭐評価を含む簡潔なサマリーを生成
7. `<details>`タグを使用した詳細セクション（開閉式）を生成
8. メインレビューコメント投稿（概要＋詳細）
9. `gh pr review` で行レベルのインラインコメント投稿

**生成されるレビュー形式**:
```markdown
## 🔍 PRレビュー結果

### 📝 概要
[簡潔な評価とスター評価 ⭐⭐⭐⭐⭐]

<details>
<summary>📋 詳細レビュー結果</summary>

### ✅ 良い点
[具体的な良い実装点]

### 🎯 改善提案  
[具体的な改善提案]

### 📈 インパクト評価
[各観点での評価]

</details>

### 🚀 結論
[最終判断とおすすめアクション]
```

**インラインコメント機能**:
- 問題のある行に直接コメント投稿
- `gh pr review` コマンドでピンポイント指摘
- コード修正提案（suggestion）も可能

### 6. `pr-fix` - PR指摘事項自動修正
**機能**: PRレビューコメントで指摘された問題を自動修正

**実行手順**:
```bash
# Claude Codeで以下のように指示
"pr-fixコマンドを実行してください"
```

**処理フロー**:
1. `gh pr view` で現在のPR番号を取得
2. すべてのレビューコメントとフィードバックを取得
3. フィードバックを分類・優先順位付け
4. 各レビューコメントに対する修正を実装
5. 修正が元の懸念事項に対応していることを検証
6. レビューコメント参照付きで修正をコミット
7. 修正をプッシュしてPRを更新

### 7. `doc-update` - ドキュメント自動更新
**機能**: 会話コンテキストから重要な設計・仕様・ルールを分析してCLAUDE.mdを更新

**実行手順**:
```bash
# Claude Codeで以下のように指示
"/doc-update"
```

**処理フロー**:
1. 会話コンテキストの分析
2. 重要情報の特定（アーキテクチャ決定、コーディング標準、UI/UXガイドライン等）
3. 情報の分類・構造化
4. CLAUDE.mdの該当セクション更新
5. ドキュメントの正確性検証

**更新対象情報**:
- アーキテクチャ決定と設計パターン
- 実装仕様とコーディング標準
- UI/UXガイドラインとデザインシステム
- ワークフロールールと運用ガイド

### 8. `pr-make` - PRテンプレートベースPR作成
**機能**: .github/pull_request_template.mdテンプレートを使用してGitHub PRを作成

**実行手順**:
```bash
# Claude Codeで以下のように指示
"/pr-make"
```

**処理フロー**:
1. `git status` で現在のブランチ状態を確認
2. `git diff main...HEAD --name-only` で変更ファイル一覧を取得
3. `git log main...HEAD --oneline` でコミット履歴を確認
4. `.github/pull_request_template.md` を読み込み
5. 変更内容を分析してテンプレート各セクションに適切な内容を生成
6. テンプレート構造に従った日本語PRタイトル・本文を生成
7. `gh pr create` でPRを作成
8. 作成されたPRのURLを返却

**生成されるPR内容**:
- テンプレートの全セクションを適切に埋めた構造化されたPR
- 変更内容に基づいた具体的なチェックリスト
- 日本語での説明とテスト手順
- 品質チェック項目の事前確認リスト

## 📋 実行時の注意点

### commitコマンド
- ⚠️ コミット前に必要なlint/typecheckが自動実行される
- ⚠️ 関連性のないファイルは自動でステージングから除外
- ⚠️ 既にコミット済みの場合は何もしない

### pushコマンド  
- ⚠️ PRタイトルとボディは日本語で自動生成
- ⚠️ ベースブランチは `main` ブランチ
- ⚠️ ブランチがすでにリモートに存在する場合は強制プッシュしない
- ⚠️ プッシュとPR作成を一度に実行
- ⚠️ 作成されたPRのURLを表示

### new-branchコマンド
- ⚠️ 必ず最新の `main` ブランチから分岐
- ⚠️ ブランチ名は `feat/YYYY-MM-DD` 形式で自動生成
- ⚠️ 未コミットの変更がある場合は事前に確認
- ⚠️ 既存の同名ブランチがある場合はエラー

### refactorコマンド
- ⚠️ 現在のブランチの変更ファイルのみが対象
- ⚠️ 機能テストを実行して動作確認を行う
- ⚠️ リファクタリング前後でdiffを確認
- ⚠️ 大きな変更は段階的に実行

### pr-reviewコマンド
- ⚠️ GitHub CLI (`gh`) がインストール・認証済みであることが必要
- ⚠️ 現在のブランチに対応するPRが存在している必要がある
- ⚠️ レビューコメントは建設的で具体的な内容を心がける
- ⚠️ 既存のレビューコメントと重複しないよう確認

### pr-fixコマンド
- ⚠️ PR上にレビューコメントが存在している必要がある
- ⚠️ 修正内容は元のレビュー指摘に対応していることを確認
- ⚠️ 修正後は該当するレビューコメントに返信推奨
- ⚠️ 大きな変更は複数のコミットに分割

### doc-updateコマンド
- ⚠️ 既存のCLAUDE.md構造を維持
- ⚠️ 重要度の高い情報のみを選別
- ⚠️ 具体的で実用的な内容に焦点
- ⚠️ マークダウン形式とセクション構造を統一

### pr-makeコマンド
- ⚠️ GitHub CLI (`gh`) がインストール・認証済みであることが必要
- ⚠️ `.github/pull_request_template.md` が存在している必要がある
- ⚠️ 現在のブランチがmainブランチ以外である必要がある
- ⚠️ ブランチがリモートにプッシュされている必要がある
- ⚠️ 生成されるPR内容は日本語で記述される
- ⚠️ テンプレートの構造に従ったチェックリスト形式で生成

## 🔧 カスタマイズ

これらのコマンドはプロジェクト固有の要件に合わせてカスタマイズ可能です。
`.claude/commands.json` を編集することで動作を調整できます。