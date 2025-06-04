# レガシーコード移行ガイド

## 🚨 VERY VERY IMPORTANT: レガシーコード情報

**⚠️ 重要：過去のコードベースはすべて `legacy/` ディレクトリに移動済み ⚠️**

- **旧プロジェクト全体**: `legacy/` ディレクトリ内に完全保存
- **技術スタック**: Next.js 12, Chakra UI v2, TypeScript 4.6など（古いバージョン）
- **参照目的**: 実装内容やロジックの確認時は `legacy/` 内のファイルを参照
- **移行作業**: legacyコードから新プロジェクトへの段階的移植を想定
- **Git履歴**: 完全に保持されており、コミット履歴は失われていない

**重要**: 新しい実装時は必ずlegacyコードを参考にして、既存ロジックや設計思想を理解してから進めること！

## 📁 含まれるファイル・ディレクトリ

```
legacy/
├── components/        # 全Reactコンポーネント（Atomic Design）
├── pages/            # Next.js Pages Router
├── src/              # helpers, constants等
├── stores/           # Redux store設定
├── styles/           # SCSS + Chakra UI設定
├── types/            # TypeScript型定義
├── package.json      # 旧依存関係
├── .eslintrc         # 旧ESLint設定
├── .github/          # 旧GitHub Actions
├── .vscode/          # 旧VS Code設定
├── node_modules/     # 旧パッケージ
└── ... (全設定ファイル)
```

## 🔗 参考プロジェクト情報

**環境設定・技術スタック参考**: https://github.com/yn1323/yps-polar (developブランチ)

- **技術構成**: Next.js 15 + React 19 + TypeScript 5 + Chakra UI v3 + Jotai + Biome + Vitest + Playwright
- **環境設定**: package.json、tsconfig.json、設定ファイル構成を参考にする
- **ディレクトリ構成**: appディレクトリ、srcディレクトリ構成を参考にする
- **開発ツール**: CI/CD、テスト環境、リンター設定を参考にする
- **注意**: Supabase部分はFirebaseに置き換える（認証・DB）

## 🔄 技術スタック移行計画

### Legacy → Modern 移行

| Category | Legacy | Modern | Status |
|----------|--------|--------|--------|
| Frontend | Next.js 12 | Next.js 15 + App Router | ✅ 完了 |
| UI Framework | Chakra UI v2 | Chakra UI v3 | ✅ 完了 |
| TypeScript | 4.6 | TypeScript 5 | ✅ 完了 |
| State Management | Redux Toolkit | Jotai | 🔄 移行中 |
| Styling | SCSS + Chakra UI v2 | Chakra UI v3 + テーマトークン | ✅ 完了 |
| Linting | ESLint | Biome | ✅ 完了 |
| Testing | なし | Vitest + Playwright + Storybook | ✅ 完了 |

### Redux → Jotai 移行方針

#### Legacy Redux 構造
```typescript
// stores/store.ts
const store = configureStore({
  reducer: {
    component: componentSlice.reducer,
    chat: chatSlice.reducer,
    draft: draftSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});
```

#### Modern Jotai 設計
```typescript
// シンプルなatom定義でリアルタイム同期
const groupAtom = atom<Group | null>(null);
const usersAtom = atom<User[]>([]);
const selectionsAtom = atom<Selection[]>([]);
const chatMessagesAtom = atom<ChatMessage[]>([]);

// Firebase onSnapshotと統合してリアルタイム性を実現
const useRealtimeGroup = (groupId: string) => {
  const [group, setGroup] = useAtom(groupAtom);
  
  useEffect(() => {
    if (!groupId) return;
    
    const unsubscribe = onSnapshot(
      doc(db, 'groups', groupId),
      (snapshot) => setGroup(snapshot.data() as Group)
    );
    
    return () => unsubscribe();
  }, [groupId, setGroup]);
  
  return group;
};
```

## 🎯 実装済み機能移行状況

### ✅ 移行完了
- **TOPページ**: 完全にモダン実装で再構築
- **会議参加フロー**: JoinPageとして新実装
- **ユーザー設定**: LobbyPageとして新実装（旧EntryPage）
- **レスポンシブデザイン**: Chakra UI v3ベースで改善
- **ダークモード**: 新テーマシステムで実装

### 🔄 移行中
- **Firebase認証**: 匿名認証は完了、Email・Google認証は今後
- **状態管理**: 基本的なJotai設定は完了、リアルタイム同期は実装中

### 📋 移行予定
- **ドラフト機能**: legacy/の実装を参考に新設計で実装
- **チャット機能**: Firebase Firestoreベースでリアルタイム実装
- **結果表示**: 新しいUI/UXで再構築

## 🔥 重要な移行ルール

### 1. **必ずlegacyコードを参考にする**
- 新機能実装前に必ず `legacy/` 内の対応するファイルを確認
- 既存のロジックや設計思想を理解してから実装
- 単純な移植ではなく、モダンな方法で再実装

### 2. **段階的移行**
- 一度にすべてを移行するのではなく、フェーズごとに段階的に実施
- 各フェーズで動作確認を行ってから次に進む
- レガシーコードは削除せず、参考資料として保持

### 3. **設計思想の継承**
- UIコンポーネントの責務分離
- ドメインロジックとプレゼンテーション層の分離
- ユーザビリティを重視した設計

## 🎮 レガシー機能詳細

### 主要機能（legacy実装済み）
1. **グループ管理機能**
   - グループ作成・参加
   - QRコード共有
   - 履歴管理

2. **ユーザー管理機能**
   - 匿名認証
   - ユーザー作成（名前・アバター選択）
   - 複数デバイス対応

3. **ドラフト機能**
   - ラウンド制進行
   - アイテム選択・コメント
   - 重複時ランダム勝負
   - 編集機能

4. **チャット機能**
   - グループ内リアルタイムチャット
   - システムログ表示

5. **UI/UX機能**
   - レスポンシブデザイン
   - ドラフトテーブル
   - モーダル表示

### ページ構成（legacy）
- ホーム（`/`）
- エントリー（`/entry/[id]`） → 現在は `/lobby/[id]`
- ドラフト（`/draft/[id]`）
- ログ（`/log/[id]`）

## 📊 移行優先度

| 機能 | 優先度 | 理由 | Status |
|------|--------|------|--------|
| 認証システム | 🥇 高 | 全機能の基盤 | 🔄 進行中 |
| ドラフト機能 | 🥇 高 | コア機能 | 📋 予定 |
| チャット機能 | 🥈 中 | ユーザー体験向上 | 📋 予定 |
| 結果表示 | 🥈 中 | 完成度向上 | 📋 予定 |
| その他改善 | 🥉 低 | 余裕があれば | 📋 予定 |