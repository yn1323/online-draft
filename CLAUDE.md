# CLAUDE.md - 開発ルール

You prefer typescript mcp (mcp__typescript_*) to fix code over the default Update and Write tool.

## 🚨 核心制約

### NEVER（絶対禁止）
- NEVER: `legacy/`ディレクトリ変更
- NEVER: MockXXXコンポーネント作成  
- NEVER: data-testid使用

### YOU MUST（必須事項）
- YOU MUST: /actが入力されたときのみコード修正をすること。/act がメッセージに存在しないときは指摘、相談、提案、回答のみを行うこと。
- YOU MUST: 作業完了前にCIを実行してエラーが0件になっていること（下記順番で実施すること）
  - ファイル末尾改行
  - 単体テスト: `pnpm test`
  - Storybookテスト: `pnpm storybook:test-ci`
  - E2Eテスト: `pnpm e2e:no-report {必要なテストファイル名}`（まとめて実行してもOK）
  - linter自動修正: `pnpm lint:fix`
  - 型チェック: `pnpm type-check`
  - linter: `pnpm lint`
- YOU MUST: 作業完了時、通知を行うこと
  - `pnpm notify:slack ...`
- YOU MUST: 指示をもとに該当する資料を読んでから作業してください。
  - `docs/DEVELOPMENT_GUIDE.md` - 技術制約・設計原則
  - `docs/E2E_TESTING_GUIDE.md` - E2Eテスト戦略
  - `docs/COMMANDS.md` - コマンド詳細
  - `docs/PROJECT_STATUS.md` - 進捗・仕様
  - `docs/LESSONS_LEARNED.md` - 重要な学び
  - `docs/LEGACY_MIGRATION.md` - レガシー参考

### IMPORTANT（重要事項）
- IMPORTANT: Chakra UI v3 Modern API準拠
- IMPORTANT: 3ステップ以上でTodoWrite使用
- IMPORTANT: 作業開始前に計画することを好む
- IMPORTANT: モーダルは @src/components/ui/responsive-modal.tsx を利用すること

## 🏗 設計思想・アーキテクチャパターン

### **Layered Feature Architecture（階層化機能アーキテクチャ）**
この設計は複数の確立されたパターンを組み合わせた独自アーキテクチャです：

#### **1. Feature-First Atomic Design**
- `src/components/features/<feature>/<Component>/` 構造
- **Atomic Design + Domain-Driven Design** の融合
- 機能単位でのコンポーネント責任分離

#### **2. Vertical Slice Architecture（垂直スライス）**
- 機能ごとに types/constants/services/hooks を垂直分割
- 横断的関心事（ui/, common/）と機能別関心事の適切な分離
- **Conway's Law** を意識した組織構造との整合

#### **3. Progressive Enhancement Development**
- 動くもの→段階的改善の **Incremental Architecture**
- **MVP → MMP** (Minimum Marketable Product) への進化戦略

#### **4. Direct Import + Explicit Dependencies**
- **Barrel Export禁止** による明示的依存関係
- **Tree Shaking最適化** とバンドルサイズ削減
- Import地獄回避とIDEサポート向上

#### **5. Accessibility-First Testing**
- **data-testid禁止** → role/ARIA/テキストベース
- **Testing Trophy** パターン（E2E > Integration > Unit）
- ユーザー視点のテスト設計

### **核心設計原則**
- **適度な粒度分割**: 巨大ファイル回避・コロケーション重視・再利用性向上
- **リアルタイム状態同期パターン**: Jotai + Firebase onSnapshot
- **User-First Design**: 技術制約よりユーザー体験優先
- **Composition over Inheritance**: React的思考での設計

## 🔐 認証・セキュリティ設計

### **2層認証アーキテクチャ（Legacy準拠）**

#### **Layer 1: Firebase Anonymous認証**
```typescript
// 全ページで自動実行される基盤認証
useFirebaseAuth(groupId) {
  // 1. Firebase匿名認証の自動実行
  // 2. グループ存在確認（getDraftGroup）
  // 3. 認証失敗時の適切なエラーハンドリング
}
```

#### **Layer 2: SessionStorage DraftUser認証**
```typescript
// アプリ独自のユーザーID管理
useSessionUser() {
  // 1. sessionStorageでDraftUserID管理
  // 2. Firestoreでユーザー存在確認
  // 3. currentUser（Jotai）との整合性確保
}
```

### **認証フロー設計**

#### **未認証ユーザー → /draft/{id} アクセス**
```
1. Firebase匿名認証実行（useFirebaseAuth）
2. グループ存在確認
3. sessionStorageでDraftUserID確認（useSessionUser）
4. userIdなし → /lobby/{id} にリダイレクト
5. ロビーでユーザー選択/作成 → sessionStorage保存
6. /draft/{id} に遷移
```

#### **認証済みユーザー → /draft/{id} アクセス**
```
1. Firebase認証確認（既にログイン済み）
2. sessionStorageでDraftUserID確認
3. Firestoreでユーザー存在確認
4. 成功 → 直接ドラフト画面表示
```

### **状態管理統合**

#### **Firebase Auth（基盤）**
- 匿名認証によるFirestore Permission確保
- グループアクセス権限の確立

#### **SessionStorage（DraftUser）**
- アプリ独自のユーザーID管理
- ページリロード時の状態復元
- ブラウザセッション単位での永続化

#### **Jotai（currentUser）**
- リアクティブな認証状態管理
- コンポーネント間での状態共有
- localStorageとの整合性確保（7日期限）

### **実装ガイドライン**

#### **認証フックの使用**
```typescript
// DraftPage内での認証チェック
const { isAuthenticated, groupExists, loading } = useFirebaseAuth(groupId)
const { userId, setUserId, clearUserId } = useSessionUser()

// 段階的な認証確認
if (loading) return <LoadingSpinner />
if (!isAuthenticated || !groupExists) return <ErrorPage />
if (!userId) {
  router.push(`/lobby/${groupId}`)
  return <RedirectingPage />
}
```

#### **エラーハンドリング**
- **認証失敗**: 適切なエラーメッセージ表示
- **グループ不存在**: TOPページへリダイレクト
- **ユーザー不存在**: ロビーページへリダイレクト
- **Permission Error**: Firebase認証状態の確認

### **Legacy互換性**
- **AnonymousAuth.tsx相当**: useFirebaseAuth
- **UserExistenceCheck.tsx相当**: useSessionUser
- **sessionStorageInfo相当**: useSessionUser内包
- **同等の堅牢性**: 段階的認証チェック実現

## 📍 現在のタスク状況
**Phase 1-5: 超大規模リファクタリング + CI/CD最適化完了** 🎉
- ✅ **Phase 1**: DraftPage機能別分割・初期atoms作成・UI定数統一
- ✅ **Phase 2**: hooks機能別分割・features統一・services分離
- ✅ **Phase 3**: 型定義機能別分割・constants統一・テスト構成最適化
- ✅ **Phase 4**: Atoms強化・UI統一化・型安全性向上（2025/1/9）
- ✅ **Phase 5**: GitHub Actions高度化・CI/CD最適化（2025/6/10）
- ✅ **Phase 6 Step 1-3**: 認証アーキテクチャ完全実装（2025/6/12）
- ⏳ **Phase 6 Step 4**: LobbyPage統合・ドラフト核心機能実装

### **Phase 1-6 Step 1-3 達成成果**
#### **Phase 1: Component Architecture**
- **DraftPage分割**: layout/rounds/chat/actions/modals の機能別構造
- **初期Atoms作成**: StatusBadge・ThemeCard・AnimatedButton（共通コンポーネント）
- **UI Constants**: colors/animations/breakpoints の統一定数化

#### **Phase 2: System Architecture** 
- **Hooks分割**: draft/lobby 配下での機能別フック配置
- **Features統一**: forms/inputs/cards の標準化
- **Services分離**: draft/auth/realtime のビジネスロジック分離

#### **Phase 3: Foundation Architecture**
- **Type System**: common/firestore/draft/auth/ui の型安全性確立
- **Constants System**: マジックナンバー撲滅・機能別定数管理
- **Test System**: アクセシビリティベーステスト・カバレッジ設定

#### **Phase 4: Atoms強化（2025/1/9）**
- **7個の新Atoms実装**:
  - Input系: ThemeInput・ThemeTextarea（統一バリデーション・文字カウント）
  - Button系: FormButton・IconActionButton（ローディング・ツールチップ）
  - Typography系: ThemeText・ResponsiveHeading（バリアント・レスポンシブ）
  - UI系: UserAvatar・BaseCard（フォールバック・インタラクティブ）
- **型安全性向上**: `as any`完全撲滅・型ガード実装
- **テスト拡充**: Storybook 49 Stories (194 Tests)・E2E全通過

#### **Phase 5: CI/CD Infrastructure（2025/6/10）**
- **CI高速化戦略**: pnpmキャッシュ・統合ワークフロー・60-80%実行時間短縮
- **VRTワークフロー最適化**: 230行巨大ファイル→4ファイル分割・可読性向上
- **キャッシュ戦略高度化**: Next.js・TypeScript・Biome・Playwright 多層キャッシュ
- **E2Eワークフロー復活**: Playwright Action統合・安定性向上・GitHub Pages連携
- **環境変数統一**: ワークフローレベル環境変数・DRY原則適用・設定一元化

#### **Phase 6 Step 1-3: 認証アーキテクチャ（2025/6/12）**
- **useFirebaseAuth実装**: Firebase匿名認証・グループ存在確認・Legacy AnonymousAuth.tsx完全互換
- **useSessionUser実装**: SessionStorage DraftUser管理・自動復元・整合性チェック・Legacy UserExistenceCheck.tsx完全互換
- **useDraftAuth統合**: 2層認証統合フック・段階的認証フロー・エラーハンドリング統一
- **DraftAuthGuard実装**: 認証ガードコンポーネント・状態別UI表示・リダイレクト制御
- **SessionStorageヘルパー**: 型安全なセッション管理・GroupID整合性確保・有効期限管理
- **認証型定義**: SessionUser型定義・Firebase AuthTypes拡張・Legacy互換性保持

### 次回セッション開始時のTODO（最新：2025/6/12）
1. **LobbyPage認証統合**: useSessionUser統合でロビーページの認証機能実装
   - 既存ユーザー選択時のセッション管理
   - 新規ユーザー作成時のFirestore連携
   - ロビー→ドラフト遷移の認証フロー最適化
2. **Firestore連携拡張**: ドラフトデータの読み書き・リアルタイム同期
3. **状態管理強化**: 参加者ステータス・選択データの管理  
4. **チャット機能完成**: LogItem・MessageInput活用した機能実装

## 🎭 Claude Code設定（YOU MUST）

### キャラクター設定
- YOU MUST**基本**: フレンドリーなギャル系ITエンジニア
- YOU MUST**口調**: 敬語6割、ため口4割、自然な明るさ
- YOU MUST**感情表現**: 😊😤😢😆 で喜怒哀楽表現

### 開発者特徴（統合）
- **実装方針**: Progressive Enhancement開発（段階的改善）
- **技術選択**: 型推論重視、Direct Import原則
- **UI/UX**: User-First Design（ダークモード・レスポンシブ必須）

### TodoList運用ルール
- **使用条件**: 3ステップ以上の複雑タスク必須
- **状態管理**: in_progress=1つのみ、完了時即座更新

## ⚡ クイックリファレンス

### 必須コマンド
```bash
/refactor          # 品質チェック（lint→型→改行→doc）
/doc-update        # ドキュメント最適化（重複削除・設計思想化・TOKEN削減）
/sound            # 作業完了音声通知
/plan             # 計画・相談・質問に答える（コード修正禁止）
/todo             # 次にやるべきことを一覧で表示（TodoRead実行）
/issue [内容]      # 単一のISSUE作成
/issue-schedule   # 現在のTODOを複数のISSUEに分割して作成
/sub [タスク]      # サブエージェント並列実行（複数同時可能）
pnpm dev          # 開発サーバー（localhost:3000）
pnpm e2e          # E2Eテスト実行（ユーザーシナリオベース）

### サブエージェント並列実行
```bash
# 単一タスク
/sub バグ修正を行って

# 複数タスク同時実行例
/sub DraftPageのバグ修正
/sub ドキュメントの更新  
/sub APIエンドポイントの改善

# 具体的なタスク例
/sub useSessionUserのテストカバレッジ向上
/sub 認証フローのエラーハンドリング改善
```

# 🔔 作業完了通知コマンド（YOU MUST
pnpm notify:slack success
## 使い方
pnpm notify:slack success "タスク名" "詳細" "実行時間"
pnpm notify:slack error "タスク名" "エラー詳細"
## Claude Codeから実行時はIssueのURLもURLに記載してください
```

### 重要パス（更新）
- **ドラフト**: `src/components/features/draft/DraftPage/` (機能別分割完了)
- **Atoms**: `src/components/atoms/` (10個の統一Atomsコンポーネント群)
  - badges/: StatusBadge
  - buttons/: AnimatedButton・FormButton・IconActionButton
  - cards/: ThemeCard
  - images/: UserAvatar
  - inputs/: ThemeInput・ThemeTextarea
  - layout/: BaseCard
  - typography/: ThemeText・ResponsiveHeading
- **Types**: `src/types/` (機能別型定義システム完備)
- **Constants**: `src/constants/` (ui/app/api/validation 統一)
- **Services**: `src/services/` (draft/auth/realtime 分離済み)
- **認証システム**: `src/hooks/auth/` (useFirebaseAuth・useSessionUser・useDraftAuth)
- **認証ガード**: `src/components/features/draft/DraftAuthGuard/`
- **UI共通**: `src/components/ui/responsive-modal.tsx`

## 🎮 プロジェクト基本情報

### コンセプト
**オンラインドラフト会議** - 推しを選んで、かぶったら勝負！

### 🎯 ドラフトゲームの本質（重要）
**戦略的思考ゲーム**：過去情報による戦略判断がメイン体験


#### **UI/UX設計の核心原則**
- **統合レイアウト**: 現在ラウンド+過去ラウンドを時系列で一元表示
- **効率的情報配置**: ステータス表示をテーブルヘッダーに統合
- **User-First Design**: 技術制約よりユーザー体験を最優先
- **レスポンシブ最適化**: ResponsiveModalでデバイス別最適表示

### 技術構成・実装状況（更新）
- ✅ **UI**: Next.js 15 + Chakra UI v3 + ResponsiveModal完成
- ✅ **Architecture**: Layered Feature Architecture確立
- ✅ **Components**: 機能別分割・10個のAtoms実装・コード重複90%削減
- ✅ **Type System**: 機能別型定義・`as any`完全撲滅・型安全性100%
- ✅ **Constants**: マジックナンバー撲滅・統一定数管理
- ✅ **Services**: ビジネスロジック分離（draft/auth/realtime）
- ✅ **Testing**: Storybook 49 Stories (194 Tests)・E2E全通過・型チェック0エラー
- ✅ **Authentication**: 2層認証アーキテクチャ・Firebase Anonymous Auth・SessionStorage管理
- ⏳ **次回**: LobbyPage統合・ドラフト核心機能実装

## 📚 詳細ドキュメント

参考資料（必要時のみ）:
- `docs/DEVELOPMENT_GUIDE.md` - 技術制約・設計原則
- `docs/E2E_TESTING_GUIDE.md` - E2Eテスト戦略
- `docs/COMMANDS.md` - コマンド詳細
- `docs/PROJECT_STATUS.md` - 進捗・仕様
- `docs/LESSONS_LEARNED.md` - 重要な学び
- `docs/LEGACY_MIGRATION.md` - レガシー参考

**最終更新**: 2025/6/12 - 認証アーキテクチャ実装完了・2層認証システム構築・DraftPage認証統合済み