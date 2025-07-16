# Requirements Document

## Introduction

OnlineDraftアプリにおけるガイドツアー機能は、新規ユーザーの学習体験を向上させ、既存ユーザーの機能理解を深めることを目的とします。React Joyrideを活用したインタラクティブなツアーシステムにより、アプリの基本操作から高度な機能まで段階的に案内し、ユーザーのエンゲージメント向上とドロップアウト率の削減を実現します。

## Requirements

### Requirement 1

**User Story:** As a 初回ユーザー, I want アプリの基本的な使い方を学ぶウェルカムツアー, so that スムーズにゲームを開始できる

#### Acceptance Criteria

1. WHEN ユーザーが初回アクセスした THEN システム SHALL ウェルカムモーダルを表示する
2. WHEN ユーザーがツアー開始を選択した THEN システム SHALL トップページからドラフトページまでの基本フローを案内する
3. WHEN ツアーが完了した THEN システム SHALL 完了状態をlocalStorageに保存する
4. IF ユーザーがツアーをスキップした THEN システム SHALL 後で再実行可能な状態を維持する

### Requirement 2

**User Story:** As a 既存ユーザー, I want 特定機能のヘルプツアー, so that 新機能や複雑な操作を理解できる

#### Acceptance Criteria

1. WHEN ユーザーがヘルプボタンをクリックした THEN システム SHALL ツアーメニューを表示する
2. WHEN ユーザーが機能別ツアーを選択した THEN システム SHALL その機能に特化したガイドを開始する
3. WHEN 機能別ツアーが実行中 THEN システム SHALL 該当機能のみにフォーカスしたステップを表示する
4. IF ユーザーが途中でツアーを終了した THEN システム SHALL 元の状態に復帰する

### Requirement 3

**User Story:** As a 新規ユーザー, I want BOTと実際にドラフトを体験するチュートリアル, so that ゲームルールを実践的に学べる

#### Acceptance Criteria

1. WHEN ユーザーがBOT対戦チュートリアルを選択した THEN システム SHALL 「今夜の映画、何観る？」シナリオを開始する
2. WHEN チュートリアルが開始された THEN システム SHALL 3体のBOT（アキコ、リョウ、マヤ）と対戦環境を提供する
3. WHEN ドラフトラウンドが進行中 THEN システム SHALL BOTの思考時間（0.5〜1.5秒）を演出する
4. WHEN 選択重複が発生した THEN システム SHALL 解決ミニゲームを体験させる
5. IF チュートリアルが完了した THEN システム SHALL 実際のゲーム参加を促すメッセージを表示する

### Requirement 4

**User Story:** As a ユーザー, I want ツアーの進行状況を把握し制御できる機能, so that 自分のペースで学習できる

#### Acceptance Criteria

1. WHEN ツアーが実行中 THEN システム SHALL 現在のステップ数と全体数を表示する
2. WHEN ユーザーがツアー中 THEN システム SHALL 「次へ」「戻る」「スキップ」「終了」ボタンを提供する
3. WHEN ユーザーがツアーを一時停止した THEN システム SHALL 再開可能な状態を保持する
4. IF ツアー対象要素が画面外にある THEN システム SHALL 自動スクロールして要素を表示する

### Requirement 5

**User Story:** As a モバイルユーザー, I want スマートフォンでも使いやすいツアー体験, so that デバイスに関係なく学習できる

#### Acceptance Criteria

1. WHEN ツアーがモバイル端末で実行される THEN システム SHALL レスポンシブなポップオーバーを表示する
2. WHEN 画面サイズが変更された THEN システム SHALL ツアー要素の位置を動的に調整する
3. WHEN タッチ操作が行われた THEN システム SHALL 適切なタッチターゲットサイズを提供する
4. IF 画面が小さい THEN システム SHALL ツアーテキストを簡潔に調整する

### Requirement 6

**User Story:** As a ユーザー, I want 直感的で分かりやすいツアーUI, so that 迷うことなく操作を学べる

#### Acceptance Criteria

1. WHEN ツアーステップが表示される THEN システム SHALL スポットライト効果で対象要素を強調する
2. WHEN ツアーが進行中 THEN システム SHALL 非操作エリアを無効化して迷いを防止する
3. WHEN ツアーテキストが表示される THEN システム SHALL 自然で親しみやすい日本語を使用する
4. IF ツアー対象要素が動的に変化する THEN システム SHALL リアルタイムで位置を追跡する

### Requirement 7

**User Story:** As a 開発者, I want 既存コンポーネントに影響を与えない実装, so that アプリの安定性を保てる

#### Acceptance Criteria

1. WHEN ツアー機能が追加される THEN システム SHALL 既存コンポーネントの変更を最小限に抑える
2. WHEN ツアーが無効化される THEN システム SHALL メインアプリの動作に影響を与えない
3. WHEN ツアーコンポーネントが読み込まれる THEN システム SHALL React.lazyで遅延読み込みを行う
4. IF ツアーでエラーが発生した THEN システム SHALL メインアプリの動作を継続する

### Requirement 8

**User Story:** As a ユーザー, I want 高速で安定したツアー体験, so that ストレスなく学習できる

#### Acceptance Criteria

1. WHEN ツアーが開始される THEN システム SHALL 200ms以内にポップオーバーを表示する
2. WHEN BOTチュートリアルが実行される THEN システム SHALL Firebaseを使用せずオフラインで動作する
3. WHEN ツアーが進行中 THEN システム SHALL 60fpsのスムーズなアニメーションを維持する
4. IF ネットワークが不安定 THEN システム SHALL ツアー機能は影響を受けない