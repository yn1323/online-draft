# Design Document

## Overview

このプロジェクトでは、現在のCLAUDE.mdファイルとdocs/配下のドキュメントをKiro向けのSteeringファイルシステムに移行します。移行対象のファイルを分析し、適切なカテゴリに分類してKiroのSteering形式に変換し、inclusion設定を最適化してコンテキスト管理を効率化します。

## Architecture

### 移行対象ファイル分析

#### CLAUDE.md
- **サイズ**: 約15KB
- **内容**: 基本理念、制約、ワークフロー、アーキテクチャ、コーディングルール、テスト戦略、UI/UX実装、状態管理、キャラクター設定
- **分割方針**: 技術スタック、プロジェクト構造、プロダクト情報、グローバル設定に分類

#### docs/配下のファイル
- **design-rule.md**: コーディングルール詳細（約20KB）
- **functional-specification.md**: 機能仕様書（約25KB）
- **requirements.md**: 要件定義書（約15KB）
- **ui-ux-design.md**: UI/UX設計書（約12KB）
- **その他**: jotai.md、development-plan.md、function/、implementation/配下

### Steering分類戦略

#### Always Inclusion（常時読み込み）
- **tech.md**: 技術スタック、開発コマンド、環境変数
- **structure.md**: プロジェクト構造、アーキテクチャパターン
- **product.md**: プロダクト概要、ゲームルール、制約
- **global.md**: 日本語コミュニケーション、キャラクター設定

#### File Match Inclusion（特定ファイル関連時のみ）
- **coding-rules.md**: TypeScript、React関連ファイル編集時
- **testing.md**: テストファイル編集時
- **ui-components.md**: コンポーネントファイル編集時

#### Manual Inclusion（手動呼び出し）
- **detailed-specs.md**: 詳細な機能仕様
- **implementation-guides.md**: 実装ガイド詳細
- **design-patterns.md**: 設計パターン詳細

## Components and Interfaces

### Steeringファイル構造

#### 1. tech.md（技術スタック）
```yaml
---
inclusion: always
---

# Technology Stack

## Frontend Framework
- Next.js 15 with App Router
- React 19 with TypeScript 5
- Chakra UI v3 for component library
...
```

#### 2. structure.md（プロジェクト構造）
```yaml
---
inclusion: always
---

# Project Structure

## Architecture Pattern
Feature-Based Architecture with atomic design principles
...
```

#### 3. product.md（プロダクト情報）
```yaml
---
inclusion: always
---

# Product Overview

OnlineDraftは実時間マルチプレイヤードラフトゲーム
...
```

#### 4. global.md（グローバル設定）
```yaml
---
inclusion: always
---

# Global Guidelines

## コミュニケーション
- 常に日本語で行う
- キャラクター設定: フレンドリーなギャル系ITエンジニア
...
```

#### 5. coding-rules.md（コーディングルール）
```yaml
---
inclusion: fileMatch
fileMatchPattern: "**/*.{ts,tsx,js,jsx}"
---

# Coding Rules

## 関数定義（厳格）
Arrow Function一択
...
```

#### 6. testing.md（テスト戦略）
```yaml
---
inclusion: fileMatch
fileMatchPattern: "**/*.{test,spec}.{ts,tsx,js,jsx}"
---

# Testing Strategy

## E2Eテスト設計
ハッピーパスのみ（5:1の比重）
...
```

#### 7. ui-components.md（UIコンポーネント）
```yaml
---
inclusion: fileMatch
fileMatchPattern: "**/components/**/*.{ts,tsx}"
---

# UI Components

## Chakra UI使用ルール
inline style props必須
...
```

#### 8. detailed-specs.md（詳細仕様）
```yaml
---
inclusion: manual
---

# Detailed Specifications

#[[file:docs/functional-specification.md]]
#[[file:docs/requirements.md]]
...
```

### ファイル参照設計

#### 外部ファイル参照パターン
```markdown
# Implementation Guides

## Chat Feature Implementation
#[[file:docs/implementation/chat-feature-implementation.md]]

## Authentication Guide
#[[file:docs/function/auth.md]]
```

## Data Models

### 移行マッピング表

| 元ファイル | 移行先Steeringファイル | Inclusion設定 | 理由 |
|-----------|----------------------|---------------|------|
| CLAUDE.md（技術スタック部分） | tech.md | always | 常時必要な技術情報 |
| CLAUDE.md（構造部分） | structure.md | always | プロジェクト理解に必須 |
| CLAUDE.md（プロダクト部分） | product.md | always | ドメイン知識として必須 |
| CLAUDE.md（キャラクター設定） | global.md | always | コミュニケーション方針 |
| design-rule.md | coding-rules.md | fileMatch | コード編集時のみ必要 |
| functional-specification.md | detailed-specs.md | manual | 詳細確認時のみ |
| requirements.md | detailed-specs.md | manual | 詳細確認時のみ |
| ui-ux-design.md | ui-components.md | fileMatch | UI編集時のみ必要 |
| docs/function/ | detailed-specs.md | manual | 機能詳細確認時 |
| docs/implementation/ | implementation-guides.md | manual | 実装詳細確認時 |

### コンテンツ最適化戦略

#### 重複排除
- 同じ情報が複数ファイルに存在する場合は統合
- 最新の情報を優先して古い情報は削除
- 矛盾する情報は現在のプロジェクト状態に合わせて統一

#### サイズ最適化
- 各Steeringファイルは5KB以下を目標
- 詳細情報は外部ファイル参照（#[[file:]]）を活用
- 必要最小限の情報のみを含める

## Error Handling

### 移行プロセスエラー対応

#### ファイル読み込みエラー
- 存在しないファイルの参照を検出
- 読み込み権限エラーの処理
- 文字エンコーディングエラーの対応

#### 内容解析エラー
- Markdown形式の不正な構文
- Front-matterの形式エラー
- ファイル参照パスの不正

#### 移行後検証エラー
- Inclusion設定の動作確認
- ファイル参照の解決確認
- コンテンツの整合性チェック

### エラー回復戦略

#### 段階的移行
1. 基本Steeringファイル作成
2. コンテンツ移行
3. Inclusion設定適用
4. 外部ファイル参照設定
5. 検証・修正

#### バックアップ戦略
- 元ファイルは移行完了まで保持
- 移行途中でのロールバック可能性
- 段階的な削除・アーカイブ

## Testing Strategy

### 移行検証テスト

#### Steeringファイル作成検証
- 各ファイルが適切に作成されることを確認
- Front-matter設定が正しく適用されることを確認
- ファイル内容が適切に移行されることを確認

#### Inclusion設定検証
- Always inclusionファイルが常時読み込まれることを確認
- FileMatch inclusionが対象ファイル編集時のみ読み込まれることを確認
- Manual inclusionが手動呼び出し時のみ読み込まれることを確認

#### ファイル参照検証
- #[[file:]]形式の参照が正しく解決されることを確認
- 参照先ファイルが存在することを確認
- 循環参照が発生しないことを確認

### 動作確認テスト

#### コンテキスト圧迫テスト
- 各Steeringファイルのサイズが適切であることを確認
- 同時読み込み時のコンテキスト使用量を測定
- パフォーマンスへの影響を評価

#### 実用性テスト
- 実際の開発シナリオでSteeringファイルが適切に機能することを確認
- 必要な情報が適切なタイミングで提供されることを確認
- 不要な情報が読み込まれないことを確認

## Implementation Plan

### Phase 1: 基本Steeringファイル作成
1. .kiro/steering/ディレクトリ構造の準備
2. 基本的なSteeringファイル（tech.md、structure.md、product.md、global.md）の作成
3. Always inclusionの設定

### Phase 2: 詳細コンテンツ移行
1. CLAUDE.mdからの内容分割・移行
2. docs/配下のファイル内容の分析・分類
3. 各Steeringファイルへのコンテンツ移行

### Phase 3: Inclusion設定最適化
1. FileMatch inclusionファイルの作成
2. Manual inclusionファイルの作成
3. 外部ファイル参照の設定

### Phase 4: 検証・最適化
1. 移行内容の検証
2. コンテンツサイズの最適化
3. 重複・矛盾の解消

### Phase 5: クリーンアップ
1. 移行完了の確認
2. 元ファイルのアーカイブ・削除手順の提供
3. ドキュメント更新