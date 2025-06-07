# E2Eテスト戦略ガイド

## 🎯 概要

OnlineDraftアプリケーションのE2E（End-to-End）テスト戦略とシナリオベーステストの実装ガイドです。

### テスト種別
- **ユーザーシナリオテスト** / **ユーザージャーニーテスト**
- 実際のユーザーの操作フローを模擬したEnd-to-Endテスト
- 技術的な機能テストではなく、ユーザー体験ベースのテスト

## 📁 ディレクトリ構成

```
e2e/
├── tests/                          # テストファイル（assertion中心）
│   ├── organizer-journey.test.ts   # 主催者シナリオ
│   ├── participant-journey.test.ts # 参加者シナリオ  
│   ├── returning-user.test.ts      # 履歴からの参加
│   ├── multi-user-collaboration.test.ts # 複数ユーザー協働
│   └── error-scenarios.test.ts     # エラー遭遇シナリオ
├── operations/                     # 複雑な操作手順（Action層）
│   ├── draft-operations.ts         # ドラフト作成・参加操作
│   ├── user-operations.ts          # ユーザー作成・選択操作
│   └── navigation-operations.ts    # 画面遷移操作
├── utils/                          # 共通ユーティリティ
│   ├── selectors.ts                # data-testid定義
│   └── test-data.ts                # テストデータ
└── setup/
    └── global-setup.ts
```

### 📋 設計原則

#### 責務分離
- **tests/**: assertion（期待結果の検証）と簡単なアクション
- **operations/**: 複雑な操作手順の抽象化
- **utils/**: 共通データと設定

#### コード構造
```typescript
// tests/ でのoperations呼び出し例
test('主催者がドラフトを作成', async ({ page }) => {
  // Action: operations層で複雑な手順を実行
  const groupId = await draftOps.createNewDraft(page);
  await userOps.createUser(page, 'ユーザー名', 1);
  
  // Assertion: tests層で期待結果を検証
  await expect(page.getByText('ユーザー名')).toBeVisible();
  await expect(page.locator('[data-testid="group-code"]')).toContainText(groupId);
});
```

## 🎬 テストシナリオ設計

### 現在の実装対象フロー

#### 1. 主催者シナリオ（organizer-journey.test.ts）
```
TOPページ → ドラフト作成ボタン → Firebase自動認証 → Firestoreグループ作成 → ロビーページ → ユーザー作成
```

**テスト内容:**
- ドラフト作成からロビー到達
- ユーザー作成とアバター選択
- 招待コードの表示確認
- 参加者待機画面の表示

#### 2. 参加者シナリオ（participant-journey.test.ts）
```
A. コード参加: TOPページ → 参加ボタン → 参加ページ → コード入力 → ロビーページ
B. URL参加:   TOPページ → 参加ボタン → 参加ページ → URL入力 → ロビーページ  
C. 履歴参加:  TOPページ → 参加ボタン → 参加ページ → 履歴選択 → ロビーページ
```

**テスト内容:**
- 3種類の参加方法すべて
- 参加後のユーザー作成
- 既存参加者との同期確認

#### 3. 複数ユーザー協働（multi-user-collaboration.test.ts）
```
主催者ドラフト作成 ← 参加者A参加 ← 参加者B参加 → リアルタイム同期確認
```

**テスト内容:**
- 複数ブラウザタブでの同時参加
- ユーザー追加のリアルタイム反映
- 3人以上での協働動作

#### 4. 履歴ユーザー（returning-user.test.ts）
```
参加ページ → 履歴一覧表示 → 過去のドラフト選択 → ロビー参加
```

**テスト内容:**
- 参加履歴の表示
- 履歴からの素早い再参加
- 履歴データの正確性

#### 5. エラーシナリオ（error-scenarios.test.ts）
```
A. 無効コード:   参加ページ → 存在しないコード入力 → エラー表示
B. ユーザー重複: ロビーページ → 既存と同名作成試行 → エラー表示
C. ネットワーク: Firebase接続失敗 → エラーハンドリング確認
```

**テスト内容:**
- 各種エラーケースでの適切な通知
- エラー後の回復フロー
- ユーザビリティの確認

## 🛠 技術実装方針

### 使用技術
- **Playwright**: 既存設定を活用
- **Firebase Emulator**: テスト環境での独立実行
- **MSW**: Storybook連携のAPIモック活用
- **data-testid**: 確実で保守性の高い要素選択

### Firebase連携テスト
```typescript
// Firebase Emulator使用例
test.beforeAll(async () => {
  // Firebase Emulator起動
  await exec('firebase emulators:start --only firestore,auth');
});

// 実際のFirestore操作をテスト
const groupId = await draftOps.createNewDraft(page);
// → 実際にFirestoreにデータが作成される
```

### Page Object Pattern活用
```typescript
// operations/draft-operations.ts
export class DraftOperations {
  async createNewDraft(page: Page): Promise<string> {
    await page.goto('/');
    await page.click('[data-testid="create-draft-button"]');
    await page.waitForURL('/lobby/*');
    
    // URLからgroupIdを抽出
    return page.url().split('/lobby/')[1];
  }

  async joinByCode(page: Page, code: string): Promise<void> {
    await page.fill('[data-testid="meeting-input"]', code);
    await page.click('[data-testid="join-button"]');
    await page.waitForURL(`/lobby/${code}`);
  }
}
```

### 共通セレクター管理
```typescript
// utils/selectors.ts
export const SELECTORS = {
  // TOPページ
  CREATE_DRAFT_BUTTON: '[data-testid="create-draft-button"]',
  JOIN_DRAFT_BUTTON: '[data-testid="join-draft-button"]',
  
  // 参加ページ
  MEETING_INPUT: '[data-testid="meeting-input"]',
  JOIN_BUTTON: '[data-testid="join-button"]',
  
  // ロビーページ
  USER_NAME_INPUT: '[data-testid="user-name-input"]',
  SUBMIT_USER_BUTTON: '[data-testid="submit-user-button"]',
  GROUP_CODE: '[data-testid="group-code"]',
  
  // アバター
  AVATAR: (id: number) => `[data-testid="avatar-${id}"]`,
} as const;
```

## 📊 実装優先順位

### Phase 1: 基本フロー（Week 1-2）
1. **organizer-journey**: ドラフト作成の基本フロー
2. **participant-journey**: コード参加フロー
3. **operations/**: 基本的な操作抽象化

### Phase 2: 協働・履歴（Week 3）
1. **multi-user-collaboration**: リアルタイム同期
2. **returning-user**: 履歴機能
3. **URL・履歴参加**: 参加方法の拡張

### Phase 3: エラー・堅牢性（Week 4）
1. **error-scenarios**: 各種エラーケース
2. **ネットワーク障害**: 接続失敗時の動作
3. **パフォーマンス**: 大量ユーザー対応

## 🔧 開発・実行環境

### 必要なコマンド
```bash
# E2Eテスト実行
pnpm test:e2e

# Firebase Emulator起動
firebase emulators:start --only firestore,auth

# 開発サーバー起動（テスト対象）
pnpm dev

# ヘッドレスモードでテスト
pnpm test:e2e:headless
```

### CI/CD連携
- GitHub Actionsでの自動実行
- Firebase Emulator自動起動
- テスト結果のスクリーンショット保存
- 失敗時の動画記録

## 📈 品質指標

### カバレッジ目標
- **主要ユーザーフロー**: 100%カバー
- **エラーケース**: 主要パターン90%
- **ブラウザ対応**: Chrome, Firefox, Safari

### 実行時間目標
- **単一シナリオ**: 30秒以内
- **全シナリオ**: 5分以内
- **CI実行**: 10分以内（並列実行含む）

### 保守性
- **data-testid**: UIコンポーネントの全インタラクティブ要素
- **operations抽象化**: UI変更時の修正箇所最小化
- **共通ユーティリティ**: 重複コードの削除

---

**最終更新**: 2025/1/7 - E2Eテスト戦略策定完了