# Implementation Plan

- [x] 1. Steering ディレクトリ構造の準備

  - .kiro/steering/ディレクトリが存在することを確認し、必要に応じて作成
  - 既存の Steering ファイルを確認して競合を避ける
  - _Requirements: 1.1, 5.1_

- [x] 2. 基本 Steering ファイルの作成（Always Inclusion）

  - [x] 2.1 tech.md の作成

    - CLAUDE.md から技術スタック情報を抽出
    - Next.js、React、Chakra UI 等の技術情報を整理
    - 開発コマンド、環境変数情報を含める
    - inclusion: always の front-matter を設定
    - _Requirements: 1.2, 3.1_

  - [x] 2.2 structure.md の作成

    - CLAUDE.md からプロジェクト構造情報を抽出
    - Feature-Based Architecture の説明を含める
    - ディレクトリ構造とコンポーネント設計を整理
    - inclusion: always の front-matter を設定
    - _Requirements: 1.2, 3.1_

  - [x] 2.3 product.md の作成

    - CLAUDE.md と docs/requirements.md からプロダクト情報を抽出
    - OnlineDraft の概要、ゲームルール、制約を整理
    - ビジネスルールと技術制約を含める
    - inclusion: always の front-matter を設定
    - _Requirements: 1.2, 3.1_

  - [x] 2.4 global.md の作成
    - CLAUDE.md からキャラクター設定とコミュニケーション方針を抽出
    - 日本語コミュニケーションルールを含める
    - プロジェクトガイドラインを整理
    - inclusion: always の front-matter を設定
    - _Requirements: 1.2, 3.1_

- [x] 3. 特定ファイル関連 Steering ファイルの作成（FileMatch Inclusion）

  - [x] 3.1 coding-rules.md の作成

    - CLAUDE.md と docs/design-rule.md からコーディングルールを抽出
    - TypeScript、React、関数定義ルールを整理
    - inclusion: fileMatch、fileMatchPattern: "\*_/_.{ts,tsx,js,jsx}"を設定
    - _Requirements: 2.2, 3.2_

  - [x] 3.2 testing.md の作成

    - CLAUDE.md と docs/design-rule.md からテスト戦略を抽出
    - E2E テスト、単体テスト、Storybook テストの方針を整理
    - inclusion: fileMatch、fileMatchPattern: "\*_/_.{test,spec}.{ts,tsx,js,jsx}"を設定
    - _Requirements: 2.2, 3.2_

  - [x] 3.3 ui-components.md の作成
    - CLAUDE.md と docs/ui-ux-design.md から UI/UX 情報を抽出
    - Chakra UI 使用ルール、アニメーション、レスポンシブ対応を整理
    - inclusion: fileMatch、fileMatchPattern: "**/components/**/\*.{ts,tsx}"を設定
    - _Requirements: 2.2, 3.2_

- [x] 4. 手動呼び出し Steering ファイルの作成（Manual Inclusion）

  - [x] 4.1 detailed-specs.md の作成

    - docs/functional-specification.md と docs/requirements.md の内容を整理
    - 詳細な機能仕様と要件定義を含める
    - 外部ファイル参照（#[[file:]]）を活用してファイルサイズを最適化
    - inclusion: manual の front-matter を設定
    - _Requirements: 2.3, 3.3_

  - [x] 4.2 implementation-guides.md の作成

    - docs/implementation/配下のファイル内容を整理
    - 実装ガイドと詳細な開発手順を含める
    - 外部ファイル参照を活用
    - inclusion: manual の front-matter を設定
    - _Requirements: 2.4, 3.3_

  - [x] 4.3 function-guides.md の作成
    - docs/function/配下のファイル内容を整理
    - 機能別の詳細ガイドを含める
    - 外部ファイル参照を活用
    - inclusion: manual の front-matter を設定
    - _Requirements: 2.4, 3.3_

- [x] 5. 外部ファイル参照の設定

  - [x] 5.1 ファイル参照パスの確認

    - docs/配下のファイルが正しく存在することを確認
    - 相対パスが正しく解決されることを確認
    - _Requirements: 3.4_

  - [x] 5.2 #[[file:]]形式の参照を追加
    - 各 Steering ファイルに適切な外部ファイル参照を追加
    - 循環参照が発生しないことを確認
    - _Requirements: 3.4_

- [-] 6. コンテンツ最適化

  - [x] 6.1 重複コンテンツの排除

    - 複数の Steering ファイル間で重複する情報を特定
    - 重複を排除して情報を統合
    - _Requirements: 4.2_

  - [x] 6.2 古い情報の更新

    - 現在のプロジェクト状態に合わない情報を特定
    - 最新の情報に更新または削除
    - _Requirements: 4.3_

  - [x] 6.3 ファイルサイズの最適化
    - 各 Steering ファイルのサイズを確認
    - 必要に応じて外部ファイル参照に移行
    - _Requirements: 4.4_

- [x] 7. 移行検証

  - [x] 7.1 Steering ファイル作成の確認

    - 全ての Steering ファイルが適切に作成されていることを確認
    - Front-matter 設定が正しく適用されていることを確認
    - _Requirements: 5.1_

  - [x] 7.2 Inclusion 設定の動作確認

    - Always inclusion ファイルが常時読み込まれることを確認
    - FileMatch inclusion が対象ファイル編集時のみ読み込まれることを確認
    - Manual inclusion が手動呼び出し時のみ読み込まれることを確認
    - _Requirements: 5.2_

  - [x] 7.3 ファイル参照の解決確認
    - #[[file:]]形式の参照が正しく解決されることを確認
    - 参照先ファイルが存在することを確認
    - 循環参照が発生しないことを確認
    - _Requirements: 5.3_

- [-] 8. クリーンアップ手順の提供

  - [ ] 8.1 移行完了の最終確認

    - 全ての Steering ファイルが正常に動作することを確認
    - 必要な情報が適切に移行されていることを確認
    - _Requirements: 5.4_

  - [ ] 8.2 元ファイルのアーカイブ手順作成
    - CLAUDE.md のアーカイブまたは削除手順を作成
    - docs/配下のファイルの整理手順を作成
    - バックアップとロールバック手順を文書化
    - _Requirements: 5.4_
