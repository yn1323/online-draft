# E2Eテスト戦略ガイド

## 🎯 概要

OnlineDraftアプリケーションのE2E（End-to-End）テスト戦略とシナリオベーステストの実装ガイドです。

### テスト種別
- **操作ベースE2Eテスト**
- 実際のユーザー操作をブレークダウンしたEnd-to-Endテスト
- ペルソナではなく、具体的な操作単位でテストケースを分割

## 📁 ディレクトリ構成

```
e2e/
├── tests/                          # テストファイル（assertion中心）
│   ├── draft-creation.test.ts      # ドラフト作成操作
│   ├── join-by-code.test.ts        # コード参加操作
│   ├── join-by-url.test.ts         # URL参加操作  
│   ├── join-by-history.test.ts     # 履歴参加操作
│   ├── user-creation.test.ts       # ユーザー作成操作
│   └── navigation-flows.test.ts    # 画面遷移操作
├── operations/                     # 複雑な操作手順（Action層）
│   ├── draft.ts                    # ドラフト作成・参加機能
│   ├── user.ts                     # ユーザー作成・選択機能
│   └── navigation.ts               # 画面遷移共通機能
└── utils/                          # 共通ユーティリティ
    └── test-helpers.ts              # 共通操作ヘルパー
```

### 📋 設計原則

#### 責務分離
- **tests/**: assertion（期待結果の検証）と簡単なアクション
- **operations/**: 複雑な操作手順の抽象化
- **utils/**: 共通データと設定

#### コード構造
```typescript
// tests/ でのoperations呼び出し例
test('ドラフト作成操作', async ({ page }) => {
  // Action: operations層で複雑な手順を実行
  const groupId = await createNewDraft(page);
  
  // Assertion: tests層で期待結果を検証
  await expect(page).toHaveURL(`/lobby/${groupId}`);
});
```

## 🎬 操作ベーステスト設計

### 実装済みの主要操作フロー

#### 1. ドラフト作成操作（draft-creation.test.ts）
```
TOPページ → 「ドラフトを作成」ボタン → Firebase自動認証 → ロビーページ遷移
```

**テスト内容:**
- ドラフト作成ボタンのクリック操作
- Firebase認証の自動実行確認
- ロビーページへの正常遷移
- 招待コード・URLの表示確認

#### 2. コード参加操作（join-by-code.test.ts）
```
TOPページ → 「参加する」ボタン → 参加ページ → コード入力 → ロビーページ遷移
```

**テスト内容:**
- 参加ボタンのクリック操作
- 参加コード入力フォームの操作
- 有効コードでの正常参加
- ロビーページへの遷移確認

#### 3. URL参加操作（join-by-url.test.ts）
```
直接URL入力 → ロビーページ遷移 → 参加確認
```

**テスト内容:**
- 直接URL経由でのアクセス
- 有効URL判定
- ロビーページでの参加状態確認

#### 4. 履歴参加操作（join-by-history.test.ts）
```
参加ページ → 履歴一覧表示 → 過去のドラフト選択 → ロビーページ遷移
```

**テスト内容:**
- 参加履歴の表示操作
- 履歴からの選択操作
- 選択後のロビー遷移

#### 5. ユーザー作成操作（user-creation.test.ts）
```
ロビーページ → ユーザー名入力 → アバター選択 → 作成ボタン → ユーザー登録
```

**テスト内容:**
- ユーザー名入力フォーム操作
- アバター選択操作（18種類）
- ユーザー作成ボタンのクリック
- 参加者一覧への表示確認

#### 6. 画面遷移操作（navigation-flows.test.ts）
```
基本的な画面遷移の組み合わせテスト
```

**テスト内容:**
- TOPページ ←→ 参加ページの遷移
- 戻るボタン・ブラウザ戻るの動作
- 不正URLでの404処理

## 🛠 技術実装方針

### 使用技術
- **Playwright**: 既存設定を活用
- **Firebase Emulator**: テスト環境での独立実行
- **MSW**: Storybook連携のAPIモック活用

### セレクター戦略
#### ❌ data-testidを避ける理由
- **ユーザー視点重視**: 実際のユーザーが操作する方法でテスト
- **堅牢性**: UIリファクタリングに強い、よりユーザーに近いテスト
- **リアリティ**: data-testidは開発者向け「裏口」であり、現実的でない

#### ✅ 推奨セレクター優先順位
```typescript
// 1. role + accessible name（最優先）
page.getByRole('button', { name: 'ログイン' })
page.getByRole('textbox', { name: 'ユーザー名' })

// 2. label text
page.getByLabelText('ユーザー名')
page.getByLabelText('パスワード')

// 3. placeholder text
page.getByPlaceholderText('メールアドレスを入力')

// 4. display text
page.getByText('新規登録')
page.getByText('ドラフトを作成')

// 5. 最後の手段でCSS selector
page.locator('input[type="email"]')
```

#### アクセシビリティ重視の設計
- **aria-label**: ボタンや入力欄の適切なラベル設定
- **aria-describedby**: 説明テキストとの関連付け
- **role属性**: セマンティックな要素の明示
- **スクリーンリーダー対応**: 視覚障害者にも優しい実装

### テスト網羅性の方針
#### 🎯 成長段階プロジェクト向けバランス
OnlineDraftプロジェクトでは、**成長段階・本格運用**に適したテスト網羅性を採用しています。

#### ✅ 含むべき観点（現在の実装レベル）
- **基本フロー**: 主要なユーザー操作パターン
- **データ一意性**: 動的生成データの重複防止確認
- **ネットワーク耐性**: 実環境での遅延・切断対応
- **ブラウザ操作**: 戻る・リロード・履歴機能
- **URL遷移**: 正常な画面遷移の確認
- **動的データ検証**: 生成されたIDや状態の確認

#### ❌ 意図的に除外する観点
- **固定文字列表示確認**: VRTテストでカバー
- **詳細エラーケース**: 専用のerror-scenarios.test.tsで対応
- **パフォーマンステスト**: 必要に応じて別途実装
- **セキュリティテスト**: 専門的なテストで対応
- **デバイス差分テスト**: レスポンシブテスト専用で対応

#### 📊 1操作あたりの推奨テスト数
- **基本操作**: 3-5テストケース
- **複合操作**: 2-3テストケース
- **エラー系**: 1-2テストケース

#### 🚫 過剰テスト回避
- **境界値テスト**: 必要最小限
- **ブラウザ差分**: Chrome中心、必要時のみ他ブラウザ
- **負荷テスト**: E2Eではなく専用ツールで実施

## 🏗️ Operations設計ガイド

### Operations層の設計思想
#### 責務と目的
- **複雑な操作手順の抽象化**: 複数ステップの操作を1つの関数にまとめる
- **再利用性の向上**: 複数のテストから共通操作を呼び出し可能
- **保守性の確保**: UI変更時の修正箇所を局所化

#### 機能ベース分割の原則
```typescript
// ✅ 良い例: 機能ベース
e2e/operations/
├── draft.ts      # ドラフト関連の全操作
├── user.ts       # ユーザー関連の全操作  
└── navigation.ts # 画面遷移の共通操作

// ❌ 避ける例: ページベース（操作が分散）
├── top-page.ts     # TOPページの操作のみ
├── lobby-page.ts   # ロビーページの操作のみ
└── join-page.ts    # 参加ページの操作のみ
```

### 関数設計のベストプラクティス

#### 1. ただの関数（Pure Functions）を使用
```typescript
// ✅ 推奨: シンプルな関数
export async function createNewDraft(page: Page): Promise<string> {
  await page.goto('/');
  await page.getByRole('button', { name: 'ドラフトを作る' }).click();
  await page.waitForURL('/lobby/*');
  return page.url().split('/lobby/')[1];
}

// ❌ 避ける: 不要なclass
export class DraftOperations {
  async createNewDraft(page: Page): Promise<string> { ... }
}

// ❌ 避ける: 不要なobject
export const draftOperations = {
  async createNewDraft(page: Page): Promise<string> { ... }
} as const;
```

#### 2. Playwrightの暗黙的待機を活用
```typescript
// ✅ 推奨: 暗黙的待機（Playwrightが自動で要素を待機）
export async function selectAvatar(page: Page, avatarIndex: number): Promise<void> {
  await page.locator(`img[src*="${avatarIndex}.png"]`).click();
  // click()が自動で要素の出現を待機
}

// ❌ 避ける: 不要な明示的待機
export async function selectAvatar(page: Page, avatarIndex: number): Promise<void> {
  const avatar = page.locator(`img[src*="${avatarIndex}.png"]`);
  await avatar.waitFor(); // 不要
  await avatar.click();
}
```

#### 3. URL待機は必要最小限
```typescript
// ✅ 推奨: URL遷移のみ確認
export async function joinByCode(page: Page, code: string): Promise<void> {
  await page.goto('/');
  await page.getByRole('button', { name: '参加する' }).click();
  await page.waitForURL('/join');
  
  await page.getByPlaceholderText('参加コードを入力').fill(code);
  await page.getByRole('button', { name: '参加' }).click();
  await page.waitForURL(`/lobby/${code}`);
}

// ❌ 避ける: 過剰な要素待機
export async function joinByCode(page: Page, code: string): Promise<void> {
  await page.goto('/');
  await page.getByRole('button', { name: '参加する' }).click();
  await page.waitForURL('/join');
  await page.getByText('ドラフトに参加').waitFor(); // 不要
  
  await page.getByPlaceholderText('参加コードを入力').fill(code);
  await page.getByRole('button', { name: '参加' }).click();
  await page.waitForURL(`/lobby/${code}`);
  await page.getByText('グループに参加').waitFor(); // 不要
}
```

#### 4. 関数の粒度と命名
```typescript
// ✅ 適切な粒度: 1つの明確な操作
export async function createNewDraft(page: Page): Promise<string> { ... }
export async function joinByCode(page: Page, code: string): Promise<void> { ... }
export async function createUser(page: Page, userData: UserData): Promise<void> { ... }

// ❌ 粒度が大きすぎる
export async function completeEntireDraftFlow(page: Page): Promise<void> { ... }

// ❌ 粒度が小さすぎる
export async function clickCreateButton(page: Page): Promise<void> { ... }
export async function waitForLobbyPage(page: Page): Promise<void> { ... }
```

### Import/Export戦略
```typescript
// operations/draft.ts
export async function createNewDraft(page: Page): Promise<string> { ... }
export async function joinByCode(page: Page, code: string): Promise<void> { ... }
export async function joinByDirectUrl(page: Page, groupId: string): Promise<void> { ... }

// tests/draft-creation.test.ts
import { createNewDraft } from '../operations/draft';
import { createUser } from '../operations/user';

test('ドラフト作成フロー', async ({ page }) => {
  const groupId = await createNewDraft(page);
  await createUser(page, { userName: 'テスト', avatarIndex: 1 });
  
  await expect(page).toHaveURL(`/lobby/${groupId}`);
});
```

### エラーハンドリング方針
```typescript
// ✅ 基本: 例外は上位（テスト）に委ねる
export async function createUser(page: Page, userData: UserData): Promise<void> {
  if (userData.avatarIndex < 1 || userData.avatarIndex > 18) {
    throw new Error(`Invalid avatar index: ${userData.avatarIndex}`);
  }
  
  await page.getByLabelText('ユーザー名').fill(userData.userName);
  await page.locator(`img[src*="${userData.avatarIndex}.png"]`).click();
  await page.getByRole('button', { name: '作成して参加' }).click();
}

// ✅ 必要に応じて: 操作の成功/失敗を判定
export async function tryCreateUser(page: Page, userData: UserData): Promise<boolean> {
  try {
    await createUser(page, userData);
    return true;
  } catch (error) {
    return false;
  }
}
```

### Firebase連携テスト
```typescript
// Firebase Emulator使用例
test.beforeAll(async () => {
  // Firebase Emulator起動
  await exec('firebase emulators:start --only firestore,auth');
});

// 実際のFirestore操作をテスト
const groupId = await createNewDraft(page);
// → 実際にFirestoreにデータが作成される
```

## 📊 実装優先順位

### Phase 1: 基本操作（Week 1-2）
1. **draft-creation**: ドラフト作成操作
2. **join-by-code**: コード参加操作
3. **user-creation**: ユーザー作成操作

### Phase 2: 参加方法・遷移（Week 3）
1. **join-by-url**: URL参加操作
2. **join-by-history**: 履歴参加操作
3. **navigation-flows**: 画面遷移操作

### Phase 3: エラー・複合操作（Week 4）
1. **error-scenarios**: エラーケースの操作テスト
2. **complex-flows**: 複数操作の組み合わせ
3. **performance**: 大量データでの操作性能

## 🔧 開発・実行環境

### 必要なコマンド
```bash
# E2Eテスト実行
pnpm e2e

# Firebase Emulator起動
firebase emulators:start --only firestore,auth

# 開発サーバー起動（テスト対象）
pnpm dev

# ヘッドレスモードでテスト
pnpm e2e:headless
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
- **ユーザー視点セレクター**: アクセシビリティ対応とテスト品質の両立
- **operations抽象化**: UI変更時の修正箇所最小化
- **共通ヘルパー**: 重複コードの削除と操作の統一化

### 状態変化とタイミング
#### 適切な待機処理
```typescript
// ❌ 悪い例：即座のクリック（レースコンディション）
await page.click('button');
await page.click('next-button'); // 危険

// ✅ 良い例：暗黙的待機を活用
await page.getByRole('button', { name: '保存' }).click();
await page.getByRole('button', { name: '次へ' }).click();
// Playwrightが自動で要素を待機

// ✅ 必要時のみ：明示的待機
await page.getByRole('button', { name: '送信' }).click();
await page.waitForURL('/success'); // URL遷移の確認
```

#### 環境差分への配慮
- **レスポンシブ**: モバイル・デスクトップでの表示差分
- **テーマ**: ダークモード・ライトモードでの見た目
- **ネットワーク**: 実際の遅延を想定した待機処理
- **ブラウザ**: Chrome, Firefox, Safari間の挙動差分

---

## 💡 E2E開発で得られた普遍的な学び

### 🔍 実装理解の重要性
#### ❌ よくある誤解
「E2Eは外部から動作確認するだけだから、内部実装を知らなくても書ける」

#### ✅ 現実と対策
- **UIコンポーネントの構造理解が必須**
- 要素分割、動的生成、ローディング状態を事前調査
- セレクター戦略は実装調査とセットで進める

### ⏱️ タイミング・同期問題の普遍性
#### 非同期処理への対応パターン
```typescript
// ❌ 避けるべき：即座のチェック
await button.click();
await expect(element).toBeVisible(); // 失敗しやすい

// ✅ 推奨：暗黙的待機の活用
await button.click();
await page.waitForURL('/target/*'); // URL遷移のみ明示的
// 要素操作はPlaywrightが自動待機
```

#### ローディング状態テストの判断基準
- **メリット**: UX向上の確認
- **リスク**: タイミング依存の不安定化
- **推奨**: 最小限に留め、最終結果重視

### 🎯 テスト網羅性の現実的バランス
#### プロジェクト段階別の適切な網羅性
- **MVP段階**: 基本操作のみ（1-2テスト）
- **成長段階**: バランス型（3-5テスト） ← OnlineDraftの選択
- **成熟段階**: 網羅的（5-10テスト）

#### 「1操作あたり3-5テスト」の法則
- **基本系**: 正常動作1つ
- **応用系**: エッジケース2-3つ
- **信頼性**: ネットワーク・ブラウザ操作1つ

### 🏗️ 設計思想の学び
#### 操作ベース設計の汎用性
- **適用範囲**: ドメイン問わず（EC、SaaS、業務アプリ等）
- **メリット**: ユーザー視点、保守性、理解しやすさ
- **他の設計手法との比較**: ペルソナベースより具体的、機能ベースよりユーザー寄り

#### E2Eの役割分担の重要性
```
E2E: ユーザー操作の動作確認、URL遷移、動的データ
VRT: 固定文字列表示、UI見た目
Unit: ロジック、関数レベル
Integration: API連携、コンポーネント間
```

### 📊 コスト・効果の現実
#### 実行時間の現実的ライン
- **小規模**: 5-10テスト = 1-2分
- **中規模**: 20-50テスト = 3-5分
- **大規模**: 100テスト以上 = 10分以内（CI制約）

#### ドキュメント化ROIの高さ
- **初期投資**: 1-2時間の方針策定
- **継続効果**: 数ヶ月〜年単位の一貫性担保
- **チーム効率**: 新メンバーのオンボーディング高速化

### 🎓 チーム開発での教訓
#### セレクター戦略の標準化
- **問題**: 各開発者の独自書き方 → 保守性低下
- **解決**: プロジェクト共通ガイドライン策定
- **効果**: コードレビュー効率化、バグ減少

#### 「動くテスト」vs「良いテスト」
```typescript
// 動くが保守性の低いテスト
await page.click('#btn-123');

// 保守性が高く安定したテスト  
await page.getByRole('button', { name: 'ドラフトを作る' }).click();
```

### 🔮 長期運用への備え
#### E2E戦略の段階的発展
1. **MVP**: 基本フロー確認
2. **成長**: バランス型網羅
3. **成熟**: 高品質・高網羅性
4. **大規模**: パフォーマンス・並列実行最適化

#### 技術負債予防としての価値
- **リファクタリング**: 安全な大規模変更の支援
- **技術選択**: UIライブラリ、状態管理変更時の保護
- **品質保証**: 本番リリース前の最終確認

### 🌍 他プロジェクトへの応用
これらの学びは以下の環境で汎用的に適用可能：
- **フレームワーク**: React, Vue, Angular, その他
- **ドメイン**: EC、SaaS、業務アプリ、メディア等
- **チーム規模**: スタートアップ〜大企業
- **プロダクト段階**: MVP〜大規模サービス

---

**最終更新**: 2025/1/8 - Operations設計ガイド追加・E2E普遍的学び追加・操作ベースE2Eテスト戦略確立