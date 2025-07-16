# Implementation Plan

- [ ] 1. プロジェクト基盤とライブラリ設定
  - React Joyrideは既にpackage.jsonに追加済み
  - 基本的なTypeScript型定義とJotai atoms構造を作成
  - _Requirements: 1.1, 7.1, 8.1_

- [ ] 2. ツアー状態管理システムの実装
- [ ] 2.1 Jotaiアトムの作成
  - `src/components/features/tour/states.ts`にツアー関連のatomsを実装
  - tourStateAtom, welcomeModalStateAtom, botTutorialStateAtom, tourProgressAtomを作成
  - localStorage連携機能を含む状態管理を実装
  - _Requirements: 1.3, 1.4, 4.3_

- [ ] 2.2 ツアー型定義の作成
  - `src/components/features/tour/types.ts`にTourType, TourStep, BotCharacterなどの型を定義
  - デザインドキュメントの型定義をTypeScriptで実装
  - _Requirements: 7.1_

- [ ] 3. コアツアーコンポーネントの実装
- [ ] 3.1 TourProviderコンポーネントの作成
  - `src/components/features/tour/TourProvider/index.tsx`を作成
  - ツアー全体の状態管理とコンテキスト提供機能を実装
  - React.lazyによる遅延読み込み対応
  - _Requirements: 7.1, 7.3, 8.1_

- [ ] 3.2 TourOverlayコンポーネントの作成
  - `src/components/features/tour/TourOverlay/index.tsx`を作成
  - React Joyrideのラッパーとカスタマイズ機能を実装
  - スポットライト効果とレスポンシブ対応
  - _Requirements: 6.1, 6.2, 5.1, 5.2_

- [ ] 3.3 TourControlsコンポーネントの作成
  - `src/components/features/tour/TourControls/index.tsx`を作成
  - ツアーナビゲーション（次へ、戻る、スキップ、終了）機能を実装
  - モバイル対応のタッチターゲットサイズ最適化
  - _Requirements: 4.1, 4.2, 5.3_

- [ ] 4. ウェルカムツアー機能の実装
- [ ] 4.1 WelcomeModalコンポーネントの作成
  - `src/components/features/tour/WelcomeModal/index.tsx`を作成
  - 初回ユーザー向けウェルカムモーダルの表示機能を実装
  - ツアー開始/スキップ選択機能
  - _Requirements: 1.1, 1.4_

- [ ] 4.2 ウェルカムツアーステップ定義の作成
  - `src/components/features/tour/steps/welcomeSteps.ts`を作成
  - トップページからドラフトページまでの基本フローのステップを定義
  - 各ステップのコンテンツとターゲット要素を設定
  - _Requirements: 1.2_

- [ ] 5. 機能別ヘルプツアーの実装
- [ ] 5.1 FeatureTourコンポーネントの作成
  - `src/components/features/tour/FeatureTour/index.tsx`を作成
  - 機能別ツアー（シェア機能、チャット機能）の実行機能を実装
  - ツアーメニュー表示機能
  - _Requirements: 2.1, 2.2, 2.3_

- [ ] 5.2 機能別ツアーステップ定義の作成
  - `src/components/features/tour/steps/featureSteps.ts`を作成
  - シェア機能とチャット機能のツアーステップを定義
  - 機能特化型のガイドコンテンツを作成
  - _Requirements: 2.2, 2.3_

- [ ] 6. BOTチュートリアル機能の実装
- [ ] 6.1 BotTutorialコンポーネントの作成
  - `src/components/features/tour/BotTutorial/index.tsx`を作成
  - BOT対戦チュートリアルの実行機能を実装
  - 「今夜の映画、何観る？」シナリオの実装
  - _Requirements: 3.1, 3.2_

- [ ] 6.2 BOTエンジンの実装
  - `src/components/features/tour/BotTutorial/BotEngine.ts`を作成
  - 3体のBOT（アキコ、リョウ、マヤ）の行動ロジックを実装
  - BOTの思考時間演出とパーソナリティ機能
  - _Requirements: 3.2, 3.3_

- [ ] 6.3 チュートリアル専用ドラフトページの作成
  - `src/components/features/tour/BotTutorial/TutorialDraftPage.tsx`を作成
  - Firebaseを使用しないオフライン動作のドラフト画面を実装
  - 選択重複時の解決ミニゲーム体験機能
  - _Requirements: 3.4, 3.5, 8.2_

- [ ] 7. 既存コンポーネントへのツアー対応
- [ ] 7.1 TopPageコンポーネントにdata-tour-id属性を追加
  - `src/components/features/top/TopPage/index.tsx`を更新
  - ルーム作成ボタン、ルーム参加フィールドなどにdata-tour-id属性を追加
  - 既存機能への影響を最小限に抑制
  - _Requirements: 7.1, 7.2_

- [ ] 7.2 LobbyPageコンポーネントにdata-tour-id属性を追加
  - `src/components/features/lobby/LobbyPage/index.tsx`を更新
  - 参加者リスト、ルーム情報などにdata-tour-id属性を追加
  - _Requirements: 7.1, 7.2_

- [ ] 7.3 DraftPageコンポーネントにdata-tour-id属性を追加
  - `src/components/features/draft/DraftPage/index.tsx`を更新
  - アイテム選択、チャット、シェア機能などにdata-tour-id属性を追加
  - _Requirements: 7.1, 7.2_

- [ ] 8. アプリケーション統合
- [ ] 8.1 app/layout.tsxにTourProviderを統合
  - `app/layout.tsx`を更新してTourProviderをProviderに追加
  - アプリ全体でツアー機能を利用可能にする
  - _Requirements: 7.1_

- [ ] 8.2 初回ユーザー判定とウェルカムモーダル表示の実装
  - TourProviderで初回アクセス判定ロジックを実装
  - localStorageを使用した初回判定とウェルカムモーダル自動表示
  - _Requirements: 1.1, 1.3_

- [ ] 9. レスポンシブ対応とパフォーマンス最適化
- [ ] 9.1 モバイル対応の実装
  - 各ツアーコンポーネントでモバイル専用レイアウトを実装
  - タッチターゲットサイズとポップオーバーサイズの最適化
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 9.2 パフォーマンス最適化の実装
  - React.lazyによる遅延読み込みの実装
  - useMemoとuseCallbackによるメモ化
  - 200ms以内のツアー開始と60fpsアニメーション維持
  - _Requirements: 8.1, 8.3, 8.4_

- [ ] 10. エラーハンドリングとテスト
- [ ] 10.1 エラーハンドリングの実装
  - ツアー実行エラー、BOTチュートリアルエラー、状態管理エラーの対応
  - エラー発生時のフォールバック機能
  - _Requirements: 7.4_

- [ ] 10.2 ユニットテストの作成
  - 各コンポーネントとBOTエンジンのテストを作成
  - `src/components/features/tour/**/*.test.tsx`ファイルを作成
  - _Requirements: 7.4_

- [ ] 10.3 Storybookストーリーの作成
  - 各ツアーコンポーネントのStorybookストーリーを作成
  - `src/components/features/tour/**/*.stories.tsx`ファイルを作成
  - _Requirements: 6.3_

- [ ] 11. ヘルプボタンとツアーメニューの実装
- [ ] 11.1 各ページにヘルプボタンを追加
  - TopPage、LobbyPage、DraftPageにヘルプボタンを追加
  - ツアーメニュー表示機能を実装
  - _Requirements: 2.1_

- [ ] 11.2 ツアー完了後の実ゲーム参加促進機能
  - BOTチュートリアル完了時の実ゲーム参加促進メッセージを実装
  - ウェルカムツアー完了時の次ステップガイダンス
  - _Requirements: 3.5_