# E2Eテスト戦略ガイド

## 🎯 設計思想
**Essential E2E Tests** - 主要ユーザージャーニーの必須テスト

### 基本原則
- **User-Centric Testing原則**: data-testid禁止、role+name優先
- **Operations抽象化パターン**: tests/でassertion、operations/で複雑操作
- **最小実用テスト**: 正常系+バックエンドエラーのみ

## 📁 ディレクトリ構成
```
e2e/
├── tests/           # assertion中心
├── operations/      # 複雑操作抽象化  
└── utils/          # 共通ヘルパー
```

## 🎬 Essential E2E Tests構成
1. **draft-creation.test.ts**: ドラフト作成フロー（5ケース）
2. **join-by-code.test.ts**: コード参加フロー（3ケース）
3. **user-creation.test.ts**: ユーザー登録フロー（2ケース）
4. **modal-validation.test.ts**: モーダル操作（2ケース）

## 🛠 技術実装
### セレクター優先順位
```typescript
// 1. role + name（最優先）
page.getByRole('button', { name: 'ドラフトを作る' })

// 2. label/placeholder
page.getByLabelText('ユーザー名')

// 3. 最後の手段でCSS
page.locator('input[type="email"]')
```

### Operations設計
```typescript
// ✅ 適切な粒度：1つの明確な操作
export async function createNewDraft(page: Page): Promise<string> {
  await page.goto('/');
  await page.getByRole('button', { name: 'ドラフトを作る' }).click();
  await page.waitForURL('/lobby/*');
  return page.url().split('/lobby/')[1];
}
```

## 📊 Essential E2E Tests戦略
**最小実用テスト**：合計12ケース
- **正常フロー**: 主要操作パターンのみ
- **バックエンドエラー**: Firebase接続失敗等の軽量確認
- **除外範囲**: フロントエンドバリデーション、ブラウザ戻る、パフォーマンス

## 🔧 環境設定
```bash
pnpm e2e                    # E2Eテスト実行
firebase emulators:start    # Firebase Emulator
```

### 品質指標
- **主要フロー**: 100%カバー
- **実行時間**: 5分以内
- **ブラウザ**: Chrome中心

参考実装: `e2e/operations/draft.ts`, `e2e/tests/draft-creation.test.ts`