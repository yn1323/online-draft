---
inclusion: fileMatch
fileMatchPattern: "**/*.{test,spec}.{ts,tsx,js,jsx}"
---

# テスト戦略

## テスト実行方針

- **E2E テスト**: 毎 PR、ハッピーパスのみ、Chrome only
- **VRT**: PC・SP 両方、ライトモードのみ、手動承認
- **単体テスト**: 日本語命名、比重 5:1（ハッピー:エッジ）
- **Storybook**: 全コンポーネント必須、代表パターンのみ

## 必須実行順序（コミット前）

1. `pnpm test` - 単体テスト
2. `pnpm storybook:test-ci` - Storybook テスト
3. `pnpm e2e:no-report` - E2E テスト
4. `pnpm lint:fix` - linter 自動修正
5. `pnpm type-check` - 型チェック
6. `pnpm lint` - linter

## テスト実装例

### 基本パターン

```tsx
// ✅ 日本語命名必須
describe("useDraftRoom", () => {
  test("ドラフトルームデータを正常に取得できる", () => {
    const { result } = renderHook(() => useDraftRoom("draft123"));
    expect(result.current.draft).toBeDefined();
  });
});

// ✅ E2E テスト - テキストベースセレクタ使用
test("ユーザーがドラフトゲームを完了できる", async ({ page }) => {
  await page.goto("/draft/test-room");
  await page.click("text=ドラフト開始");
  await expect(page.locator("text=ドラフト完了")).toBeVisible();
});
```

## Storybook 戦略

全コンポーネント必須、代表パターンのみ作成。

## テスト禁止事項

### NEVER（絶対禁止）

- ❌ data-testid をテストで使用
- ❌ 過度なモック使用
- ❌ 実装詳細のテスト
- ❌ 英語でのテスト命名

### 推奨事項

- ✅ ユーザー視点でのテスト
- ✅ 日本語での分かりやすい命名
- ✅ ハッピーパス重視（比重 5:1）
- ✅ 実際のユーザー操作に近いテスト

## E2E テスト設計

### ハッピーパス重視

```tsx
// ✅ ハッピーパスのみ（5:1の比重）
describe("ドラフト作成フロー", () => {
  test("ユーザーがドラフトを正常に作成できる", async ({ page }) => {
    // 1. ログイン
    await page.goto("/login");
    await page.fill('[name="email"]', "test@example.com");

    // 2. ドラフト作成
    await page.click("text=新しいドラフト");
    await page.fill('[name="draftName"]', "テストドラフト");

    // 3. 作成確認
    await expect(page.locator("text=ドラフトが作成されました")).toBeVisible();
  });
});
```

### テキストベースセレクタ

```tsx
// ✅ テキストベースセレクタ使用
await page.click("text=ドラフト開始");
await page.click("text=参加する");
await page.fill("text=ユーザー名", "テストユーザー");

// ❌ data-testid 禁止
await page.click('[data-testid="start-button"]'); // 使用禁止
```

## 単体テスト設計

### カスタムフックテスト

```tsx
// ✅ 日本語命名必須
describe("useDraftRoom", () => {
  test("ドラフトルームデータを正常に取得できる", () => {
    const { result } = renderHook(() => useDraftRoom("draft123"));
    expect(result.current.draft).toBeDefined();
  });

  test("エラー時に適切なエラーメッセージが返される", () => {
    // エラーケースのテスト（最小限）
  });
});
```

### コンポーネントテスト

```tsx
// ✅ Testing Library 使用
describe("DraftRoom", () => {
  test("ドラフトルーム情報が正しく表示される", () => {
    render(<DraftRoom draft={mockDraft} />);
    expect(screen.getByText("ドラフトルーム")).toBeInTheDocument();
  });

  test("ローディング中はスピナーが表示される", () => {
    render(<DraftRoom draft={null} isLoading={true} />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
```

## Mock 戦略

### 最小限 Mock

```tsx
// ✅ 最小限Mock（Firebase例）
const mockFirestore = {
  collection: jest.fn(),
  doc: jest.fn(),
};

// ✅ Custom Hook経由でMock
jest.mock("./useDraftData", () => ({
  useDraftData: () => ({
    data: mockDraftData,
    loading: false,
    error: null,
  }),
}));
```

### Firebase Mock

```tsx
// ✅ Firebase関数のMock
jest.mock("@/src/lib/firebase", () => ({
  db: {
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        get: jest.fn(() => Promise.resolve({ data: () => mockData })),
        set: jest.fn(() => Promise.resolve()),
      })),
    })),
  },
}));
```

## テスト環境設定

### 単体テスト環境

- **Vitest** with jsdom 環境
- **Testing Library** for React コンポーネント
- **カスタムテストユーティリティ** for フック

### E2E 環境

- **Playwright** for 完全なユーザージャーニー
- **Chrome only** for 実行効率
- **ページオブジェクトパターン** in `e2e/operations/`

### ビジュアルリグレッション

- **PC・SP 両方** でスクリーンショット
- **ライトモードのみ** で実行
- **手動承認** が必要

## デバッグ・テスト詳細コマンド

```bash
# Playwright関連
pnpm e2e:ui             # Playwright UIモード
pnpm e2e:debug          # デバッグモード

# Vitest関連
pnpm test:watch         # テストをwatch mode実行
pnpm test:ui            # テストをUI付きで実行

# Storybook関連
pnpm storybook:test-ci  # CI用Storybookテスト
```

## テスト品質基準

### カバレッジ目標

- **単体テスト**: 80%以上（重要な関数・フック）
- **E2E テスト**: 主要フロー 100%カバー
- **Storybook**: 全コンポーネント必須

### テスト実行時間目標

- **単体テスト**: 30 秒以内
- **E2E テスト**: 5 分以内
- **Storybook テスト**: 2 分以内

## テスト実行フロー

### Claude Code での推奨実行順序

```bash
pnpm lint          # 1. Biome lint
pnpm type-check    # 2. TypeScript型チェック
pnpm test          # 3. 単体テスト
pnpm e2e           # 4. E2Eテスト
pnpm storybook:test-ci  # 5. Storybookテスト
```

### 並列実行

- Sub Agent を使用してテストを並列化
- 各テストタイプを独立して実行
- 全テスト完了後に結果を統合確認
