# OnlineDraft開発履歴

## 2025/1/7 - E2Eテスト戦略策定セッション

### 🎯 セッション概要
ユーザーからの要求に基づき、OnlineDraftアプリケーションのE2E（End-to-End）テスト実装方針を策定。現在の実装状況を詳細分析し、ユーザーシナリオベースのテスト戦略を立案・ドキュメント化した。

### 📋 実施内容詳細

#### 1. 初期要求の確認
- **ユーザー要求**: 「ここまでの実装のE2Eを作成してほしいです。E2E作成の方針を教えてください。テストケース、ディレクトリ構成など」
- **アプローチ**: `/plan`モードで方針検討から開始

#### 2. TodoList作成・管理
以下のタスクでプロジェクト管理を実施：
- ✅ 現在の実装状況とアプリケーションフローを分析
- ✅ アプリケーションの主要フローをE2Eテストケースとして設計
- ✅ ユーザーシナリオベースのE2Eテスト構成を再設計
- ✅ E2Eテスト戦略をdocsにドキュメント化
- ✅ CLAUDE.mdにE2Eテスト情報を追加
- ⏳ E2Eテスト用の共通ユーティリティを作成
- ⏳ 主要ユーザーフローのE2Eテストを実装

#### 3. 現在実装状況の詳細分析

**Task tool使用による調査結果:**
- **実装済みページ**: TOPページ、参加ページ、ロビーページ、認証テストページ、Firebaseテストページ
- **主要ユーザーフロー**: ドラフト作成フロー、3種類の参加フロー、ユーザー登録フロー
- **技術実装**: Firebase匿名認証、Firestoreデータ連携、エラーハンドリング
- **コンポーネント構成**: `src/components/features/` 配下でfeature別に整理済み

#### 4. 初期E2Eテスト設計提案
**技術機能別アプローチ（第1案）:**
```
e2e/
├── tests/
│   ├── core-flows/           # 基本フロー
│   ├── error-handling/       # エラーケース  
│   └── realtime/            # リアルタイム機能
```

#### 5. ユーザーシナリオベースへの方針転換
**ユーザーからのフィードバック:**
> 「core-flows, error-handling, realtimeとかではなく、ユーザーの操作シナリオをベースにテストを作って欲しいです。操作が複雑になるときはoperations/にまとめてほしいです。ただ、assertionはtestsにまとめてほしいです。testsからoperationsを呼び出す感じです。」

**設計方針の修正:**
- テスト種別名: **「ユーザーシナリオテスト」** / **「ユーザージャーニーテスト」**
- 責務分離: `tests/`（assertion中心）と `operations/`（複雑な操作手順）
- 実際のユーザー操作フローに基づいたテストケース設計

#### 6. 最終的なディレクトリ構成策定

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

#### 7. テストシナリオ詳細設計

**主要シナリオ:**
1. **主催者シナリオ** - ドラフト作成からユーザー登録まで
2. **参加者シナリオ** - 3種類の参加方法（コード・URL・履歴）
3. **複数ユーザー協働** - リアルタイム同期の確認
4. **履歴ユーザー** - 過去の参加履歴からの再参加
5. **エラーシナリオ** - 無効コード、ユーザー名重複、ネットワークエラー

**実装優先順位:**
- Phase 1: 基本フロー（organizer-journey, participant-journey）
- Phase 2: 協働・履歴（multi-user-collaboration, returning-user）
- Phase 3: エラー・堅牢性（error-scenarios）

#### 8. 技術実装方針の策定

**使用技術:**
- Playwright（既存設定活用）
- Firebase Emulator（テスト環境での独立実行）
- MSW（Storybook連携のAPIモック活用）
- data-testid（確実で保守性の高い要素選択）

**コード構造例:**
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

#### 9. ドキュメント化作業

**新規作成ファイル:**
- `docs/E2E_TESTING_GUIDE.md` - 包括的なE2Eテスト戦略ドキュメント

**内容:**
- 概要とテスト種別の説明
- ディレクトリ構成と責務分離の詳細
- 5つの主要テストシナリオの具体的な設計
- 技術実装方針（Playwright、Firebase、MSW統合）
- 実装優先順位とフェーズ計画
- 品質指標と保守性ガイドライン

#### 10. CLAUDE.md更新作業

**追加・修正内容:**
- 技術ガイドライン参照にE2Eテスト情報を追加
- 現在のタスク状況にE2Eテスト戦略策定完了を記録
- 必須コマンドに`pnpm e2e`を追加（当初`pnpm test:e2e`と記載していたが、ユーザーの指摘で`pnpm e2e`に修正）
- 詳細ドキュメント一覧にE2E_TESTING_GUIDE.mdを追加
- 最終更新日時を更新

#### 11. パッケージ設定の確認

**package.json確認結果:**
- E2Eテスト関連スクリプトが既に設定済み
  - `"e2e": "playwright test"`
  - `"e2e:ui": "playwright test --ui"`  
  - `"e2e:debug": "playwright test --debug"`
  - `"e2e:report": "playwright show-report"`
  - `"e2e:codegen": "playwright codegen"`

### 🎯 策定された戦略の特徴

#### 設計思想
- **ユーザー中心設計**: 技術的な機能単位ではなく、実際のユーザーの操作体験をベースにテスト設計
- **責務分離**: テスト（assertion）と操作手順（action）を明確に分離
- **段階的実装**: 基本フロー → 協働機能 → エラーケースの順で段階的に実装
- **保守性重視**: data-testid使用、operations抽象化によりUI変更に強い構造

#### 技術的な工夫
- **Firebase連携**: Emulatorを使用した実環境に近いテスト
- **リアルタイム機能**: 複数ブラウザタブを使った同期テスト
- **既存資産活用**: StorybookのMSW設定を流用
- **CI/CD対応**: GitHub Actionsでの自動実行を前提とした設計

### 📊 成果物

1. **戦略ドキュメント**: `docs/E2E_TESTING_GUIDE.md`（4,500文字の包括的ガイド）
2. **プロジェクト設定更新**: `CLAUDE.md`への戦略情報追加
3. **ディレクトリ設計**: 5つのテストファイル + 3つのoperations + utilsの構成
4. **実装計画**: 3フェーズでの段階的実装スケジュール

### 🔄 次回セッションへの引き継ぎ

**完了状況:**
- ✅ E2Eテスト戦略の策定・ドキュメント化完了
- ✅ ディレクトリ構成・責務分離の設計完了
- ✅ テストシナリオ詳細設計完了

**次回実装予定:**
1. `e2e/utils/selectors.ts` - data-testid定義
2. `e2e/operations/draft-operations.ts` - ドラフト作成・参加操作
3. `e2e/tests/organizer-journey.test.ts` - 主催者シナリオテスト

**技術的注意点:**
- 現在のPlaywright設定（`playwright.config.ts`）を活用
- 既存のFirebase Emulator設定との連携
- StorybookのMSWハンドラー（`src/test-utils/msw/`）の流用可能性

### 💡 学んだ知見

1. **要求の段階的明確化**: 初期の技術機能ベースの提案から、ユーザーフィードバックを受けてのシナリオベース設計への転換
2. **責務分離の重要性**: tests/とoperations/の分離により、保守性と可読性を両立
3. **既存資産の活用**: 新規実装ではなく、StorybookやFirebase設定の流用によるコスト削減
4. **段階的実装の有効性**: 優先順位を明確にした3フェーズでの実装計画

---

**記録者**: Claude (Sonnet 4)  
**記録日時**: 2025/1/7  
**セッション時間**: 約45分  
**主要成果**: E2Eテスト戦略の包括的策定・ドキュメント化完了