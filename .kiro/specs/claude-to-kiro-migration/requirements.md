# Requirements Document

## Introduction

このプロジェクトでは、現在のCLAUDE.mdファイルとdocs/配下のドキュメントをKiro向けのSteeringファイルシステムに移行します。適切なinclusion設定を行い、コンテキストを圧迫しにくい形式で整理することで、Kiroでの開発効率を向上させます。.claudeディレクトリはそのまま維持します。

## Requirements

### Requirement 1

**User Story:** 開発者として、CLAUDE.mdファイルの内容をKiroで活用したいので、このファイルの情報を適切にSteering形式に分割・整理したい

#### Acceptance Criteria

1. WHEN CLAUDE.mdファイルを分析する THEN システムは内容を技術スタック、プロジェクト構造、プロダクト仕様等のカテゴリに分類する SHALL
2. WHEN 分類された内容を移行する THEN システムは各カテゴリを適切なSteeringファイル（tech.md、structure.md、product.md等）として作成する SHALL
3. WHEN Steeringファイルを作成する THEN システムは適切なfront-matter（inclusion設定）を追加してコンテキスト管理を最適化する SHALL

### Requirement 2

**User Story:** 開発者として、docs/配下のドキュメントをKiroで効率的に活用したいので、これらのファイルを適切にSteering形式に移行・整理したい

#### Acceptance Criteria

1. WHEN docs/配下のファイルを分析する THEN システムは各ドキュメントの内容と用途を分類する SHALL
2. WHEN 機能仕様書を移行する THEN システムはdocs/function/配下のファイルを適切なSteering形式に変換する SHALL
3. WHEN 実装ガイドを移行する THEN システムはdocs/implementation/配下のファイルをSteering形式で整理する SHALL
4. WHEN 設計ドキュメントを移行する THEN システムはUI/UX設計、要件定義等のファイルをSteering形式に変換する SHALL

### Requirement 3

**User Story:** 開発者として、Steeringファイルのinclusion設定を適切に行いたいので、ファイルの用途に応じて最適なinclusion戦略を設定したい

#### Acceptance Criteria

1. WHEN 常時必要な情報を移行する THEN システムは技術スタック、プロジェクト構造等の基本情報にinclusion: alwaysを設定する SHALL
2. WHEN 特定ファイル関連の情報を移行する THEN システムは該当ファイルパターンでのみ読み込まれるようinclusion: fileMatchを設定する SHALL
3. WHEN 手動で呼び出す情報を移行する THEN システムは詳細な実装ガイド等にinclusion: manualを設定する SHALL
4. WHEN 外部ファイル参照を設定する THEN システムは必要に応じて#[[file:相対パス]]形式でファイル参照を追加する SHALL

### Requirement 4

**User Story:** 開発者として、移行されたSteeringファイルが読みやすく保守しやすい形式になっていることを確認したいので、適切な構造化と整理を行いたい

#### Acceptance Criteria

1. WHEN Steeringファイルを作成する THEN システムは各ファイルを適切なセクションに分割して可読性を向上させる SHALL
2. WHEN 重複する情報を処理する THEN システムは重複を排除して情報を統合する SHALL
3. WHEN 古い情報を処理する THEN システムは現在のプロジェクト状態に合わない情報を更新または削除する SHALL
4. WHEN ファイルサイズを最適化する THEN システムは各Steeringファイルが適切なサイズ（コンテキスト圧迫を避ける）になるよう調整する SHALL

### Requirement 5

**User Story:** 開発者として、移行後の設定が正しく動作することを確認したいので、移行プロセスの検証手順を明確にしたい

#### Acceptance Criteria

1. WHEN 移行が完了する THEN システムは各Steeringファイルが適切に作成されていることを確認する SHALL
2. WHEN inclusion設定を検証する THEN システムは各ファイルのfront-matter設定が正しく動作することを確認する SHALL
3. WHEN ファイル参照を検証する THEN システムは#[[file:]]形式の参照が正しく解決されることを確認する SHALL
4. WHEN 移行完了後 THEN システムは元のCLAUDE.mdとdocs/ファイルのアーカイブまたは削除手順を提供する SHALL