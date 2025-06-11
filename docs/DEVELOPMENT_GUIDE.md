# 開発ガイド

## 🛠 技術スタック
| Category | Technology | Status |
|----------|------------|--------|
| Frontend | Next.js 15 + React 19 + TypeScript 5 | ✅ |
| UI | Chakra UI v3 + ダークモード | ✅ |
| State | Jotai + Firebase onSnapshot | ✅ |
| Auth | Firebase Anonymous + SessionStorage | ✅ |
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

## 🔐 認証実装パターン

### 2層認証アーキテクチャ
Legacy準拠の堅牢な認証システム：

#### Layer 1: Firebase匿名認証
```typescript
// src/hooks/auth/useFirebaseAuth.ts
export const useFirebaseAuth = (groupId: string) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [groupExists, setGroupExists] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      try {
        // Firebase匿名認証
        const auth = getAuth();
        if (!auth.currentUser) {
          await signInAnonymously(auth);
        }
        setIsAuthenticated(true);

        // グループ存在確認
        const groupData = await getDraftGroup(groupId);
        setGroupExists(!!groupData);
      } catch (error) {
        console.error('認証エラー:', error);
        setIsAuthenticated(false);
        setGroupExists(false);
      } finally {
        setLoading(false);
      }
    };

    authenticate();
  }, [groupId]);

  return { isAuthenticated, groupExists, loading };
};
```

#### Layer 2: SessionStorage DraftUser管理
```typescript
// src/hooks/auth/useSessionUser.ts
export const useSessionUser = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);

  const setUserId = (userId: string) => {
    sessionStorage.setItem('draftUserId', userId);
    // currentUserとの整合性確保
    if (currentUser) {
      setCurrentUser({ ...currentUser, userId });
    }
  };

  const getUserId = (): string | null => {
    return sessionStorage.getItem('draftUserId');
  };

  const clearUserId = () => {
    sessionStorage.removeItem('draftUserId');
  };

  return { 
    userId: getUserId(), 
    setUserId, 
    clearUserId 
  };
};
```

### 認証統合フック実装例
```typescript
// DraftPage での統合認証チェック
const DraftPage = ({ groupId }: { groupId: string }) => {
  const {
    isReady,
    needsUserSelection,
    hasAuthError,
    loading,
    authError,
    currentUser,
    retry,
  } = useDraftAuth(groupId);

  if (loading) return <LoadingSpinner />;
  if (hasAuthError) return <ErrorPage error={authError} retry={retry} />;
  if (needsUserSelection) return <UserSelectionPage groupId={groupId} />;
  if (isReady && currentUser) return <DraftContent user={currentUser} />;
  
  return <UnexpectedStatePage />;
};

// または DraftAuthGuard を使用した簡潔な実装
const DraftPage = ({ groupId }: { groupId: string }) => (
  <DraftAuthGuard groupId={groupId}>
    <DraftContent />
  </DraftAuthGuard>
);
```

### 最新実装済み認証システム（2025/6/12）

#### 統合認証フック
```typescript
// 3つの認証フックの階層構造
useDraftAuth(groupId) {         // 最上位：統合認証フロー
  useFirebaseAuth(groupId)      // Layer 1：Firebase匿名認証
  useSessionUser(groupId)       // Layer 2：SessionUser管理
}
```

#### 新規実装ファイル
| ファイル | 機能 | Legacy置き換え |
|---------|------|----------------|
| `src/hooks/auth/useFirebaseAuth.ts` | Firebase匿名認証・グループ存在確認 | AnonymousAuth.tsx |
| `src/hooks/auth/useSessionUser.ts` | SessionStorage DraftUser管理 | UserExistenceCheck.tsx |
| `src/hooks/auth/useDraftAuth.ts` | 統合認証フロー | - (新規) |
| `src/components/features/draft/DraftAuthGuard/` | 認証ガードコンポーネント | - (新規) |
| `src/helpers/utils/sessionStorage/` | 型安全SessionStorageヘルパー | sessionStorageInfo() |
| `src/types/auth/index.ts` | SessionUser型定義 | - (新規) |

### Legacy互換性
| Legacy Component | Current Implementation |
|------------------|----------------------|
| AnonymousAuth.tsx | useFirebaseAuth() |
| UserExistenceCheck.tsx | useSessionUser() |
| sessionStorageInfo() | sessionStorage helpers |

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

### 📋 実装ガイドライン（更新）

#### 認証が必要なページでの実装パターン
```typescript
// パターン1: DraftAuthGuard使用（推奨）
const DraftPage = ({ params }: { params: { id: string } }) => (
  <DraftAuthGuard groupId={params.id}>
    <DraftPageContent />
  </DraftAuthGuard>
);

// パターン2: useDraftAuth直接使用
const CustomPage = ({ groupId }: { groupId: string }) => {
  const { isReady, needsUserSelection, hasAuthError, currentUser } = useDraftAuth(groupId);
  
  if (hasAuthError) return <Navigate to="/" />;
  if (needsUserSelection) return <Navigate to={`/lobby/${groupId}`} />;
  if (!isReady) return <Loading />;
  
  return <PageContent user={currentUser} />;
};
```

#### SessionStorage操作（型安全）
```typescript
// 直接操作は非推奨 - useSessionUser を使用
const { sessionUser, selectUser, clearUser } = useSessionUser(groupId);

// 低レベル操作が必要な場合のみ
import { getSessionUser, setSessionUser, clearSessionUser } from '@/src/helpers/utils/sessionStorage';
```

参考: `src/components/features/lobby/`, `src/hooks/auth/`, `legacy/`