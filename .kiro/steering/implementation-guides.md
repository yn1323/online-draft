---
inclusion: manual
---

# 実装ガイド

このファイルは、OnlineDraft プロジェクトの実装ガイドと詳細な開発手順を含んでいます。
手動で呼び出す際に、具体的な実装方法や開発プロセスを確認するために使用します。

## 📚 実装ドキュメント一覧

### 開発計画書

OnlineDraft プロジェクトの開発計画と開発プロセスについては、以下のドキュメントを参照してください：

#[[file:docs/development-plan.md]]

### チャット機能実装ガイド

リアルタイムチャット機能の実装詳細については、以下のドキュメントを参照してください：

#[[file:docs/implementation/chat-feature-implementation.md]]

## 🏗️ 主要な実装パターン

### Container/Presenter パターン

OnlineDraft では、責務分離を明確にするため Container/Presenter パターンを採用しています。

**Container（例：DraftPage）**:

- データ取得・状態管理
- ビジネスロジック
- Firebase 連携

**Presenter（例：DraftPageInner）**:

- UI 描画・イベントハンドリング
- プレゼンテーション層の責務

### Firebase 連携パターン

#### リアルタイム監視フック

```typescript
// useRealtimeChat.ts の例
export const useRealtimeChat = (groupId: string, currentUserId: string) => {
  const [messages, setMessages] = useState<ChatMessageUIType[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, `app/onlinedraft/log`),
        where("groupId", "==", groupId),
        orderBy("createdAt", "asc")
      ),
      (snapshot) => {
        // リアルタイム更新処理
      }
    );

    return unsubscribe;
  }, [groupId]);
};
```

#### CRUD 操作フック

```typescript
// useChat.ts の例
export const useChat = () => {
  const sendMessage = async (
    groupId: string,
    userId: string,
    content: string
  ) => {
    await addDoc(collection(db, "app/onlinedraft/log"), {
      groupId,
      userId,
      content,
      createdAt: serverTimestamp(),
    });
  };

  return { sendMessage };
};
```

## 🎨 UI/UX 実装ガイド

### レスポンシブ対応

#### ブレイクポイント戦略

- **SP（〜767px）**: タブ形式、縦積みレイアウト
- **PC（768px〜）**: サイドバー形式、横分割レイアウト
- **実装**: Chakra UI の`useBreakpointValue`フック使用

#### レイアウトパターン

```typescript
// レスポンシブレイアウトの実装例
const isMobile = useBreakpointValue({ base: true, md: false });

return isMobile ? (
  <TabsLayout>
    <ChatTab />
    <ResultsTab />
  </TabsLayout>
) : (
  <GridLayout>
    <LeftPanel />
    <RightPanel />
  </GridLayout>
);
```

### アニメーション実装

#### Framer Motion 統一ルール

- **アニメーション時間**: 150ms 統一
- **イージング**: デフォルトの ease 使用
- **開票演出**: スロット風文字回転演出

```typescript
// アニメーション実装例
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.15 }}
>
  {content}
</motion.div>
```

## 🧪 テスト実装ガイド

### E2E テスト戦略

#### 基本フローテスト

1. トップページでルーム作成
2. 別タブで参加 URL 経由の参加
3. ドラフト開始操作
4. アイテム選択・送信
5. 開票結果確認

#### テスト実装パターン

```typescript
// E2Eテストの実装例
test("チャット機能の基本動作", async ({ page }) => {
  await page.goto("/draft/test-room");

  // メッセージ送信
  await page.fill('[data-testid="chat-input"]', "テストメッセージ");
  await page.click('[data-testid="send-button"]');

  // メッセージ表示確認
  await expect(page.locator('[data-testid="message-list"]')).toContainText(
    "テストメッセージ"
  );
});
```

### 単体テスト戦略

#### カスタムフックテスト

```typescript
// フックテストの実装例
describe("useDraftRoom", () => {
  test("有効なgroupIdでドラフトデータを取得", async () => {
    const { result } = renderHook(() => useDraftRoom("valid-group-id"));

    await waitFor(() => {
      expect(result.current.data).toBeDefined();
    });
  });
});
```

## 🔧 開発プロセスガイド

### 品質管理プロセス

#### コミット前チェックリスト

1. `pnpm lint` - Biome リンター実行
2. `pnpm type-check` - TypeScript 型チェック
3. `pnpm test` - 単体テスト実行
4. `pnpm storybook:test` - Storybook テスト実行

#### 段階的実装アプローチ

1. **調査フェーズ**: 既存コード構造の理解
2. **設計フェーズ**: アーキテクチャパターンの適用
3. **実装フェーズ**: 段階的な機能実装
4. **テストフェーズ**: 品質チェックと E2E テスト追加
5. **改善フェーズ**: ユーザーフィードバック対応

### コード品質ガイドライン

#### TypeScript 厳格モード

- strict mode 有効
- 型エラー 0 件を維持
- any 型の使用禁止

#### コンポーネント設計原則

- 単一責任原則の遵守
- Props 型の明確な定義
- 適切なエラーハンドリング

## 🚀 デプロイ・運用ガイド

### ビルド最適化

#### バンドルサイズ最適化

- Dynamic Import 戦略
- コンポーネントの遅延ロード
- 不要なライブラリの除去

#### パフォーマンス最適化

- リアルタイム同期の効率化
- 差分更新戦略
- キャッシュ戦略の活用

### 監視・ログ

#### エラーハンドリング

- Firestore 接続エラーの適切な処理
- ユーザーフレンドリーなエラーメッセージ
- コンソールログによるデバッグ情報

## 📝 実装時の注意点

### 日本語 IME 対応

- composition events 対応必須
- 変換中 Enter 問題の解決
- `isComposing`状態管理

### スクロール制御

- SP 版: タブレイアウトでの overflow 制御
- PC 版: Grid 高さ調整と maxH 制限
- 適切な flex 設定による高さ継承

### 状態管理

- Jotai による効率的な状態管理
- 不要な再レンダリングの防止
- 適切な atom 設計

## 🔄 継続的改善

### 今後の拡張ポイント

- 既読機能の実装
- メッセージ削除機能
- ファイル添付機能
- チャット履歴のページネーション

### 技術的改善案

- メッセージキャッシュ機能
- オフライン対応
- プッシュ通知連携
