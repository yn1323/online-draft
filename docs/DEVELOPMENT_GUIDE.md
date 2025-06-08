# 開発ガイド

## 🛠 技術スタック
| Category | Technology | Status |
|----------|------------|--------|
| Frontend | Next.js 15 + React 19 + TypeScript 5 | ✅ |
| UI | Chakra UI v3 + ダークモード | ✅ |
| State | Jotai + Firebase onSnapshot | ✅ |
| Test | Vitest + Playwright + Storybook | ✅ |
| Linting | Biome | ✅ |

## 🏗 設計思想・アーキテクチャ

### Layered Feature Architecture（階層化機能アーキテクチャ）
複数の確立されたパターンを組み合わせた独自アーキテクチャ：

1. **Feature-First Atomic Design**: `src/components/features/<feature>/<Component>/`
2. **Vertical Slice Architecture**: 機能ごとの垂直分割
3. **Progressive Enhancement**: 動くもの→段階的改善
4. **Direct Import原則**: Barrelエクスポート禁止・明示的依存関係
5. **Accessibility-First Testing**: role/ARIA/テキストベーステスト

### ディレクトリ構造
```
src/
├── components/
│   ├── features/<feature>/<Component>/     # 機能別コンポーネント
│   ├── atoms/                              # 共通原子コンポーネント
│   └── ui/                                 # 基盤UIコンポーネント
├── types/                                  # 機能別型定義システム
│   ├── common/                             # 基盤型
│   ├── firestore/, draft/, auth/, ui/     # 機能別型
├── constants/                              # 統一定数管理
│   ├── ui/, app/, api/, validation/       # 機能別定数
├── services/                               # ビジネスロジック分離
│   ├── draft/, auth/, realtime/           # 機能別サービス
└── hooks/                                  # 機能別カスタムフック
    ├── draft/, lobby/, auth/, ui/         # 機能別フック
```

## 🔒 重要制約

### NEVER（絶対禁止）
- NEVER: `legacy/`ディレクトリ変更
- NEVER: MockXXXコンポーネント作成  
- NEVER: data-testid使用

### YOU MUST（必須）
- YOU MUST: ファイル末尾改行
- YOU MUST: 実コンポーネントでStorybookテスト
- YOU MUST: lint/type-check成功後コミット

### IMPORTANT（重要）
- IMPORTANT: Chakra UI v3 Modern API準拠
- IMPORTANT: レスポンシブ・ダークモード対応
- IMPORTANT: User-First Design

## 🎨 Chakra UI v3 要点
**参考必須**: `src/chakraui-llms-full.txt`

### API変更点
```typescript
// ✅ v3対応
<VStack gap={4}>           // spacing→gap
<IconButton aria-label="Toggle" />  // aria-label必須

// ❌ v2（使用禁止）
<VStack spacing={4}>
<IconButton />
```

## 🧪 テスト戦略
### Storybook品質保証
- **実装同一性テスト原則**: 実際のindex.tsxを必ずテスト
- **境界モックテスト戦略**: MSWでAPI、Decoratorで状態
- **共通ユーティリティ**: `src/test-utils/`積極活用

```typescript
// ✅ 推奨パターン
import { withAuthenticatedUser } from '@/src/test-utils/mocks';
import LobbyPage from './index'; // 実コンポーネント必須

const meta: Meta<typeof LobbyPage> = {
  component: LobbyPage,
  decorators: [withAuthenticatedUser],
};
```

## 🔥 Firebase統合
### Firestore実装パターン
```typescript
// Legacy互換型定義（type使用）
type Groups = {
  groupName: string;
  round: number;
  deleteFlg: boolean;
};

// リアルタイム同期
const useRealtimeGroup = (groupId: string) => {
  const [group, setGroup] = useAtom(groupAtom);
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'groups', groupId), 
      (snapshot) => setGroup(snapshot.data() as Group));
    return () => unsubscribe();
  }, [groupId, setGroup]);
};
```

## 📋 コンポーネント構造
```
features/<feature>/<ComponentName>/
├── index.tsx              # メインコンポーネント
├── index.stories.tsx      # Storybookテスト
├── actions.ts            # Server Actions（将来）
└── components/           # 再利用パーツ
```

## ⚡ 開発フロー
1. **TodoWrite**でタスク管理
2. **legacy/**参照で既存理解
3. **段階実装**（動く→改善）
4. **Storybook**確認
5. **`/refactor`**品質保証

参考: `src/components/features/lobby/`, `legacy/`