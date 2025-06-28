# テストTODO

## 🎯 ドラフトページ（/draft）のテスト計画

### 📊 現状のテストカバレッジ

| 機能 | E2Eテスト | 単体テスト | Storybookテスト |
|------|-----------|------------|-----------------|
| チャット機能 | ✅ 実装済み | - | ✅ 実装済み |
| 指名・選択機能 | ❌ 未実装 | ❌ 未実装 | ✅ 実装済み |
| 過去結果表示・編集 | ❌ 未実装 | ❌ 未実装 | ✅ 実装済み |
| 競合解決機能 | ❌ 未実装 | ❌ 未実装 | ✅ 実装済み |
| モーダル連携 | ❌ 未実装 | ❌ 未実装 | ✅ 実装済み |
| レスポンシブ対応 | ❌ 未実装 | - | ✅ 実装済み |

### 🚀 E2Eテスト実装計画（優先度: 最高）

#### 1. ドラフトの基本フローが正常に動作する
```typescript
test('ドラフトの基本フローが正常に動作する', async ({ page }) => {
  // 準備: ドラフトページにアクセス
  await page.goto('/draft/test-group-id');
  
  // 1. 指名ボタンをクリック
  await page.getByRole('button', { name: '指名する' }).click();
  
  // 2. ItemSelectModalでアイテムを入力
  await page.getByRole('textbox', { name: 'アイテム名' }).fill('テストアイテム1');
  await page.getByRole('textbox', { name: 'コメント' }).fill('テストコメント');
  await page.getByRole('button', { name: '指名を確定' }).click();
  
  // 3. 選択状況が更新されることを確認
  await expect(page.getByText('入力完了')).toBeVisible();
  await expect(page.getByText('テストアイテム1')).toBeVisible();
  
  // 4. 全員の選択を模擬（テストデータで事前設定）
  // 5. 指名発表ボタンをクリック
  await page.getByRole('button', { name: '指名発表' }).click();
  
  // 6. StageModalのアニメーションが表示される
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.waitForTimeout(3000); // アニメーション待機
  
  // 7. 次のラウンドに進んでいることを確認
  await expect(page.getByText('Round 2')).toBeVisible();
});
```

#### 2. 過去のドラフト結果を編集できる
```typescript
test('過去のドラフト結果を編集できる', async ({ page }) => {
  // 準備: Round 2以降のドラフトページ
  await page.goto('/draft/test-group-id-round2');
  
  // 1. PC版: テーブルのセルをクリック / SP版: アコーディオンを開いてセルをクリック
  const isMobile = await page.viewportSize()?.width < 768;
  if (isMobile) {
    await page.getByRole('button', { name: 'Round 1' }).click();
  }
  
  // 2. 過去の結果セルをクリック
  await page.getByText('過去のアイテム1').click();
  
  // 3. ItemSelectModalで編集
  await page.getByRole('textbox', { name: 'アイテム名' }).clear();
  await page.getByRole('textbox', { name: 'アイテム名' }).fill('編集されたアイテム');
  await page.getByRole('button', { name: '変更を保存' }).click();
  
  // 4. 結果が更新されることを確認
  await expect(page.getByText('編集されたアイテム')).toBeVisible();
  await expect(page.getByText('過去のアイテム1')).not.toBeVisible();
});
```

#### 3. 競合が発生した場合の表示と解決フローが動作する
```typescript
test('競合が発生した場合の表示と解決フローが動作する', async ({ page }) => {
  // 準備: 競合が発生しているデータセット
  await page.goto('/draft/test-group-id-conflict');
  
  // 1. 指名発表で競合が表示される
  await page.getByRole('button', { name: '指名発表' }).click();
  
  // 2. StageModalで競合アニメーション確認
  await expect(page.getByText('競合が発生しました')).toBeVisible();
  await page.waitForTimeout(3000);
  
  // 3. 競合解決メッセージが表示される
  await expect(page.getByText('赤枠のカードから順番に編集してください')).toBeVisible();
  
  // 4. モーダルを閉じる
  await page.getByRole('button', { name: '閉じる' }).click();
  
  // 5. SP版: 競合ラウンドが赤背景で表示
  if (await page.viewportSize()?.width < 768) {
    const roundButton = page.getByRole('button', { name: /Round \d+/ });
    await expect(roundButton).toHaveCSS('background-color', 'rgb(254, 242, 242)'); // red.50
  }
  
  // 6. Loserカードをクリックしてエラートースト確認
  await page.getByText('競合敗者のアイテム').click();
  await expect(page.getByText('このカードは競合で負けています')).toBeVisible();
  
  // 7. 勝者カードを編集して競合解決
  await page.getByText('競合勝者のアイテム').click();
  await page.getByRole('textbox', { name: 'アイテム名' }).clear();
  await page.getByRole('textbox', { name: 'アイテム名' }).fill('別のアイテム');
  await page.getByRole('button', { name: '変更を保存' }).click();
  
  // 8. 競合が解決されたことを確認
  await expect(page.getByText('赤枠のカードから順番に編集してください')).not.toBeVisible();
});
```

#### 4. ドラフトルームのURLを共有できる
```typescript
test('ドラフトルームのURLを共有できる', async ({ page, context }) => {
  // クリップボード権限を付与
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  
  // 1. ドラフトページにアクセス
  await page.goto('/draft/test-group-id');
  
  // 2. シェアボタンをクリック
  await page.getByRole('button', { name: 'シェア' }).click();
  
  // 3. ShareModalが表示される
  await expect(page.getByRole('dialog', { name: 'ドラフトルームを共有' })).toBeVisible();
  await expect(page.getByText('http://localhost:3000/lobby/test-group-id')).toBeVisible();
  
  // 4. URLコピーボタンをクリック
  await page.getByRole('button', { name: 'URLをコピー' }).click();
  
  // 5. クリップボードにコピーされたことを確認
  await expect(page.getByText('URLをコピーしました')).toBeVisible();
  const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
  expect(clipboardText).toBe('http://localhost:3000/lobby/test-group-id');
  
  // 6. モーダルを閉じる
  await page.getByRole('button', { name: '閉じる' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
});
```

#### 5. SP版でタブ切り替えが正常に動作する
```typescript
test('SP版でタブ切り替えが正常に動作する', async ({ page }) => {
  // SP版のビューポートに設定
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/draft/test-group-id');
  
  // 1. デフォルトでドラフトタブが選択されている
  await expect(page.getByRole('tabpanel', { name: 'ドラフト' })).toBeVisible();
  await expect(page.getByText('Round 1')).toBeVisible();
  
  // 2. チャットタブに切り替え
  await page.getByRole('tab', { name: 'チャット/ログ' }).click();
  
  // 3. チャットエリアが表示される
  await expect(page.getByRole('tabpanel', { name: 'チャット/ログ' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'メッセージを入力' })).toBeVisible();
  
  // 4. メッセージを送信
  await page.getByRole('textbox', { name: 'メッセージを入力' }).fill('テストメッセージ');
  await page.getByRole('button', { name: '送信' }).click();
  
  // 5. ドラフトタブに戻る
  await page.getByRole('tab', { name: 'ドラフト' }).click();
  await expect(page.getByRole('tabpanel', { name: 'ドラフト' })).toBeVisible();
  await expect(page.getByText('Round 1')).toBeVisible();
});
```

## 🧪 単体テストの詳細観点

### 📋 テスト対象Atomの分析

#### 1. **conflictAnalysisAtom** （最重要・高複雑度）
**役割**: 重複指名の検出と勝敗判定の核心ロジック
**複雑度**: ★★★★★
**テスト観点**:
- ✅ **複数人同一アイテム選択時の重複検出**
- ✅ **randomNumber最大値による勝者決定アルゴリズム**
- ✅ **敗者の編集順序決定（randomNumber降順）**
- ✅ **複数ラウンドでの重複指名処理**
- ✅ **過去ラウンドのみ対象（currentRound未満）**
- ✅ **重複なしの場合は空配列返却**
- ⚠️ **エッジケース**: 同一randomNumberの処理

#### 2. **pastDraftResultsUIAtom** （UI変換・中複雑度）
**役割**: selections → UI表示用データ変換
**複雑度**: ★★★☆☆
**テスト観点**:
- ✅ **selections → DraftRoundType[]への正確な変換**
- ✅ **ラウンド別グループ化処理**
- ✅ **競合状態（winner/loser/nextEditTarget）の付与**
- ✅ **currentRound未満のフィルタリング**
- ✅ **ユーザー情報との結合処理**
- ✅ **空データ・部分データ時の正常動作**

#### 3. **participantsUIAtom** （UI変換・低複雑度）
**役割**: 参加者情報をUI表示用に変換
**複雑度**: ★★☆☆☆
**テスト観点**:
- ✅ **users → ParticipantType[]への変換**
- ✅ **現在ラウンドの選択状況付与**
- ✅ **未選択時のundefined処理**
- ✅ **複数ユーザーの正常処理**
- ✅ **acquisitions配列の空配列設定**

#### 4. **selectionsAtom** （基本状態管理・低複雑度）
**役割**: 選択情報の基本的なCRUD操作
**複雑度**: ★☆☆☆☆
**テスト観点**:
- ✅ **初期状態は空配列**
- ✅ **新規選択の追加**
- ✅ **既存選択の更新**
- ✅ **複数選択の管理**
- ✅ **型安全性の確認**

### 🎯 Jotaiテストの技術的特徴

#### **derived atomのテスト手法**:
```typescript
// 依存atomをモック化してderived atomをテスト
const mockGet = vi.fn();
mockGet.mockImplementation((atom) => {
  if (atom === selectionsAtom) return mockSelections;
  if (atom === usersAtom) return mockUsers;
  if (atom === groupAtom) return { round: 2 };
});

const result = conflictAnalysisAtom.read(mockGet);
```

#### **状態管理atomのテスト手法**:
```typescript
// renderHookでatomの読み書きをテスト
const { result } = renderHook(() => useAtom(selectionsAtom));
expect(result.current[0]).toEqual([]); // 読み取り
act(() => result.current[1](newValue)); // 書き込み
```

### 📊 期待される品質向上効果

#### **ビジネスロジックの信頼性**:
- 重複指名解決アルゴリズムの数学的正確性保証
- randomNumber比較ロジックの境界値テスト
- 複雑な条件分岐の全パターンカバー

#### **データ変換の安全性**:
- UI表示用データの型安全性確保
- null/undefined処理の堅牢性
- 空データ・異常データでの安定動作

#### **リファクタリング安全性**:
- 状態管理ロジック変更時の回帰防止
- パフォーマンス改善時の動作保証
- 将来の機能拡張時の基盤保護

### 🚨 重要なテストケース優先度

1. **最優先**: conflictAnalysisAtomの3人以上重複検出
2. **高優先**: pastDraftResultsUIAtomの競合状態付与
3. **中優先**: participantsUIAtomの選択状況反映
4. **基本**: selectionsAtomのCRUD操作

---

### 🧪 単体テスト実装計画（優先度: 高）

#### 1. conflictAnalysisAtomが3人以上の競合を正しく検出する
```typescript
describe('conflictAnalysisAtom', () => {
  test('3人以上の競合を正しく検出する', () => {
    const mockSelections = [
      { userId: 'user1', item: 'アイテムA', round: 1, randomNumber: 100 },
      { userId: 'user2', item: 'アイテムA', round: 1, randomNumber: 50 },
      { userId: 'user3', item: 'アイテムA', round: 1, randomNumber: 75 },
      { userId: 'user4', item: 'アイテムB', round: 1, randomNumber: 90 },
    ];
    
    const result = conflictAnalysisAtom.read(get => {
      // selectionsAtomをモック
      get.mockReturnValue(mockSelections);
      return conflictAnalysisAtom.read(get);
    });
    
    expect(result).toHaveLength(1);
    expect(result[0].itemId).toBe('アイテムA');
    expect(result[0].conflictUsers).toHaveLength(3);
    expect(result[0].conflictUsers.find(u => u.userId === 'user1').isWinner).toBe(true);
    expect(result[0].conflictUsers.find(u => u.userId === 'user2').isWinner).toBe(false);
    expect(result[0].conflictUsers.find(u => u.userId === 'user3').isWinner).toBe(false);
  });
});
```

#### 2. selectionsAtomが選択情報を正しく管理する
```typescript
describe('selectionsAtom', () => {
  test('選択情報を正しく追加・更新できる', () => {
    const { result } = renderHook(() => useAtom(selectionsAtom));
    
    // 初期状態は空配列
    expect(result.current[0]).toEqual([]);
    
    // 新規選択を追加
    act(() => {
      result.current[1]([
        { userId: 'user1', item: 'アイテム1', round: 1, randomNumber: 100 }
      ]);
    });
    
    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0][0].item).toBe('アイテム1');
    
    // 既存選択を更新
    act(() => {
      result.current[1]([
        { userId: 'user1', item: '更新されたアイテム', round: 1, randomNumber: 100 }
      ]);
    });
    
    expect(result.current[0]).toHaveLength(1);
    expect(result.current[0][0].item).toBe('更新されたアイテム');
  });
});
```

#### 3. pastDraftResultsUIAtomが過去結果を正しく整形する
```typescript
describe('pastDraftResultsUIAtom', () => {
  test('過去のドラフト結果をラウンド別に整形する', () => {
    const mockData = {
      selections: [
        { userId: 'user1', item: 'アイテム1', round: 1, comment: 'コメント1' },
        { userId: 'user2', item: 'アイテム2', round: 1, comment: '' },
        { userId: 'user1', item: 'アイテム3', round: 2, comment: 'コメント3' },
      ],
      users: [
        { id: 'user1', name: 'ユーザー1', avatar: '1' },
        { id: 'user2', name: 'ユーザー2', avatar: '2' },
      ],
      currentRound: 3,
    };
    
    const result = pastDraftResultsUIAtom.read(get => {
      // 依存するatomsをモック
      get.mockImplementation((atom) => {
        if (atom === selectionsAtom) return mockData.selections;
        if (atom === usersAtom) return mockData.users;
        if (atom === groupAtom) return { round: mockData.currentRound };
      });
      return pastDraftResultsUIAtom.read(get);
    });
    
    expect(result).toHaveLength(2); // Round 1, 2
    expect(result[0].round).toBe(1);
    expect(result[0].picks).toHaveLength(2);
    expect(result[1].round).toBe(2);
    expect(result[1].picks).toHaveLength(2); // user2の分も空で含まれる
  });
});
```

#### 4. participantsUIAtomが参加者情報を正しく変換する
```typescript
describe('participantsUIAtom', () => {
  test('参加者情報をUI表示用に変換する', () => {
    const mockData = {
      users: [
        { id: 'user1', name: 'ユーザー1', avatar: '1' },
        { id: 'user2', name: 'ユーザー2', avatar: '2' },
      ],
      selections: [
        { userId: 'user1', item: '選択済みアイテム', round: 1 },
      ],
      currentRound: 1,
    };
    
    const result = participantsUIAtom.read(get => {
      get.mockImplementation((atom) => {
        if (atom === usersAtom) return mockData.users;
        if (atom === selectionsAtom) return mockData.selections;
        if (atom === groupAtom) return { round: mockData.currentRound };
      });
      return participantsUIAtom.read(get);
    });
    
    expect(result).toHaveLength(2);
    expect(result[0].currentPick).toBe('選択済みアイテム');
    expect(result[1].currentPick).toBeUndefined();
  });
});
```

### 📝 テスト実装時の注意事項

#### E2Eテスト
- **セレクタ**: `getByRole`、`getByText`、`getByLabelText`を使用（data-testid禁止）
- **待機処理**: アニメーションは`waitForTimeout`、要素は`waitFor`を使用
- **テストデータ**: `/e2e/fixtures/`に固定データを配置
- **スクリーンショット**: 失敗時は自動保存される設定済み

#### 単体テスト
- **Jotaiテスト**: `@testing-library/react`の`renderHook`を使用
- **モック**: Firestore関連はカスタムフックレベルでモック化
- **命名**: 必ず日本語で記述
- **アサーション**: 最小限の必要な検証のみ

#### 共通事項
- **並列実行**: `--maxWorkers=4`で高速化
- **タイムアウト**: E2Eは15秒、単体は5秒
- **CI統合**: GitHub Actionsで自動実行

### 🚦 実装ステータス

- [ ] E2Eテスト: ドラフトの基本フロー
- [ ] E2Eテスト: 過去結果の編集
- [ ] E2Eテスト: 競合解決フロー
- [ ] E2Eテスト: URL共有機能
- [ ] E2Eテスト: SP版タブ切り替え
- [ ] 単体テスト: conflictAnalysisAtom
- [ ] 単体テスト: selectionsAtom
- [ ] 単体テスト: pastDraftResultsUIAtom
- [ ] 単体テスト: participantsUIAtom

---

最終更新: 2024-12-28