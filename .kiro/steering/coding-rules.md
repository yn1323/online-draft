---
inclusion: fileMatch
fileMatchPattern: "**/*.{ts,tsx,js,jsx}"
---

# コーディングルール

## 詳細設計方針

OnlineDraft プロジェクトの詳細な設計方針については、以下のドキュメントを参照してください：

#[[file:docs/design-rule.md]]

## 核心制約（厳格ルール）

### NEVER（絶対禁止）

- ❌ data-testid をテストで使用
- ❌ Function Declaration
- ❌ interface 使用（type のみ使用）
- ❌ React.FC
- ❌ HOC/Render Props
- ❌ Context API（Props Drilling 基本）
- ❌ Enum
- ❌ 過度な最適化
- ❌ バレルエクスポート

### YOU MUST（必須事項）

- ✅ Arrow Function 一択
- ✅ type 定義（interface 禁止）
- ✅ const 優先（let 最小限）
- ✅ 分割代入積極活用
- ✅ async/await（Promise.then 禁止）
- ✅ Early Return
- ✅ Props Drilling

## 関数定義（厳格）

```tsx
// ✅ Arrow Function一択
const handleSubmit = async (data: FormData) => {
  // 処理
};

// ❌ 絶対禁止: Function Declaration
function handleSubmit() {
  /* 禁止 */
}
```

## コンポーネント定義（厳格）

```tsx
// ✅ 通常の関数コンポーネント + type
type DraftRoomProps = {
  draft: DraftType;
  onUpdate: (draft: DraftType) => void;
};

const DraftRoom = ({ draft }: DraftRoomProps) => {
  return <div>{draft.name}</div>;
};

// ❌ 禁止: React.FC + interface
const DraftRoom: React.FC<Props> = () => {}; // 禁止
interface Props {} // 禁止
```

## 引数・制御フロー

```tsx
// ✅ 2個以上は必ずオブジェクト化
const createDraft = (
  name: string,
  options: {
    maxPlayers: number;
    timeLimit: number;
  }
) => {};

// ✅ Early Return必須
const processData = (data: Data | null) => {
  if (!data) return null;
  if (data.isEmpty()) return <EmptyState />;
  // メイン処理
  return <MainContent data={data} />;
};
```

## TypeScript（厳格）

```tsx
// ✅ type一択、Union Types使用
type StatusType = "waiting" | "playing" | "finished";

// ❌ 禁止パターン
interface Status {} // interface禁止
enum Status {} // enum禁止
```

## 変数・定数ルール

```tsx
// ✅ const優先（強制）
const userName = "太郎";

// ✅ 分割代入積極活用
const { name, age, email } = user;

// ✅ 説明的命名（短縮禁止）
const isUserAuthenticated = true; // ✅ 分かりやすい
const isAuth = true; // ❌ 短縮形禁止
```

## 非同期処理（統一ルール）

```tsx
// ✅ async/await一択
const fetchUserData = async (userId: string) => {
  try {
    const user = await api.getUser(userId);
    const profile = await api.getProfile(userId);
    return { user, profile };
  } catch (error) {
    // エラーハンドリング
    throw error;
  }
};

// ✅ 並列実行はPromise.all必須
const fetchAllData = async () => {
  const [users, drafts, settings] = await Promise.all([
    fetchUsers(),
    fetchDrafts(),
    fetchSettings(),
  ]);
  return { users, drafts, settings };
};

// ❌ 禁止: Promise.then()
const fetchData = () => {
  return api.getData().then((data) => data); // 使用禁止
};
```

## React 実装スタイル

### Hooks 使用方針

```tsx
// ✅ useState基本、useReducer最小限
const [count, setCount] = useState(0);

// ✅ useEffect最小限（バグの原因）
useEffect(() => {
  // 本当に必要な場合のみ
}, []);

// ✅ useMemo/useCallback必要時のみ
const expensiveValue = useMemo(() => {
  // 重い計算の場合のみ
}, [dependencies]);

// ✅ カスタムフック分離基準
const useDraftLogic = () => {
  // テストしやすさを重視
  // モック化が必要な場合
};
```

### 条件付きレンダリング

```tsx
// ✅ &&演算子使用
{
  isLoading && <Spinner />;
}
{
  error && <ErrorMessage error={error} />;
}
{
  data && <DataDisplay data={data} />;
}

// ✅ 複雑な条件はif文
const renderContent = () => {
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!data) return <EmptyState />;
  return <DataContent data={data} />;
};
```

## 命名規則

### 基本命名ルール

| 対象     | ルール            | 例                                               | 備考                       |
| -------- | ----------------- | ------------------------------------------------ | -------------------------- |
| boolean  | is/has/can/should | `isLoading`, `hasError`, `canEdit`, `shouldShow` | 状況に応じて使い分け       |
| イベント | handle prefix     | `handleClick`, `handleSubmit`                    | on prefix は使わない       |
| 定数     | PascalCase        | `MaxPlayers`, `DefaultTimeout`                   | SCREAMING_SNAKE は使わない |
| 型       | Type suffix       | `UserType`, `DraftType`                          | Interface suffix 禁止      |
| Hook     | use prefix        | `useDraft`, `useAuth`                            | カスタムフック必須         |

## 型安全性

### TypeScript 設定

```json
// tsconfig.json設定（抜粋）
{
  "compilerOptions": {
    "strict": true, // 全オプション有効必須
    "target": "ESNext", // 最新のES仕様
    "moduleResolution": "Bundler", // Bundler解決
    "jsx": "preserve" // Next.js用JSX設定
  }
}
```

### any 使用ルール

```tsx
// ✅ 唯一の許可ケース: ライブラリ内部型
const libraryData: any = someLibrary.getData(); // OK

// ✅ 推奨: unknown使用
const unknownData: unknown = getData();
if (typeof unknownData === "string") {
  // 型ガードで安全に使用
}

// ✅ どうしても必要な場合: biome comment付き
// biome-ignore lint/suspicious/noExplicitAny: ライブラリ型不明のため
const libraryResult: any = externalLib.process();
```

## 状態管理戦略

### 階層別管理

```tsx
// Level 1: コンポーネント内（優先）
const [localState, setLocalState] = useState();

// Level 2: Custom Hook（共通ロジック）
const { data, error } = useDraftData(draftId);

// Level 3: Jotai（画面遷移で必要）
const [globalUser] = useAtom(userAtom);

// ❌ 禁止: Context API
```

## コンポーネント設計原則

### Feature-First + コロケーション

```
src/components/features/draft/DraftRoom/
├── index.tsx           # メインコンポーネント
├── index.stories.tsx   # Storybookファイル
└── hooks.ts           # ローカルカスタムフック（必要時）
```

### 厳格ルール

- ❌ HOC/Render Props 使用禁止
- ❌ Context API 使用禁止（Props Drilling 基本）
- ❌ interface 使用禁止（type のみ）
- ✅ Custom Hooks 基本
- ✅ 特化優先 → リファクタで汎用化

## 禁止パターン

```tsx
// ❌ HOC使用禁止
const withAuth = (Component: React.ComponentType) => {
  return (props: any) => <Component {...props} />;
};

// ❌ Render Props使用禁止
const DataFetcher = ({ children }: { children: (data: any) => ReactNode }) => {
  return children(data);
};

// ✅ 推奨: Custom Hooks
const useDraftAuth = () => {
  // 認証ロジック
  return { user, isAuthenticated };
};
```
