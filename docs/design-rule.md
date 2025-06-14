# OnlineDraft 設計方針・コーディングルール

このドキュメントは、OnlineDraftプロジェクトにおけるClaude Codeとの協働開発のための設計方針とコーディングルールです。

## 🎯 基本理念（Claude Code最適化）

### 開発哲学
- **実用性重視**: 過度な抽象化より読みやすさを優先
- **シンプルファースト**: 必要になってから複雑化する
- **個人開発×Claude Code**: AIとの協働に最適化された開発フロー

### Claude Code開発ワークフロー
```
1. 📋 Explore（調査）  - 既存コードの理解、要件の確認
2. 📝 Plan（計画）     - 実装方針の策定、TODOリスト作成  
3. 💻 Code（実装）     - 具体的な実装作業
4. 🔄 Commit（確定）   - テスト・lint実行、コミット
```

## 🏗️ アーキテクチャ・設計思想

### コンポーネント設計原則

#### 基本方針
```tsx
// ✅ 推奨: 実用的バランス
const DraftRoom = ({ draft, onUpdate }: DraftRoomProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  // データ取得 + 表示 + ローディング状態を1つのコンポーネントで管理
  const handleUpdate = async () => {
    setIsLoading(true);
    await onUpdate(draft);
    setIsLoading(false);
  };

  if (isLoading) return <Spinner />;
  return <div>{/* UI */}</div>;
};

// ❌ 避ける: 過度な分離
const DraftRoomDataFetcher = ({ children }: { children: ReactNode }) => {
  // データ取得のみ
};
const DraftRoomDisplay = ({ data }: { data: Draft }) => {
  // 表示のみ
};
```

#### 禁止パターン
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

### 状態管理戦略

#### レベル別状態管理
```tsx
// Level 1: コンポーネント内状態（優先）
const [localState, setLocalState] = useState();

// Level 2: Custom Hook状態（共通ロジック）
const { data, error } = useDraftData(draftId);

// Level 3: Global状態（画面遷移で必要）
const [globalUser] = useAtom(userAtom);

// ❌ Level 4: Context（使用禁止）
// Contextは使用しない
```

## 📝 コーディングスタイル

### Claude Code推奨パターン

#### 関数定義（厳格ルール）
```tsx
// ✅ Arrow Function一択
const handleSubmit = async (data: FormData) => {
  // 処理
};

// ❌ 絶対禁止: Function Declaration（Next.js /app除く）
function handleSubmit(data: FormData) {
  // 絶対に使わない
}
```

#### 引数設計（具体的ルール）
```tsx
// ✅ 2個以上は必ずオブジェクト化
const createDraft = (name: string, options: {
  maxPlayers: number;
  timeLimit: number;
  isPrivate: boolean;
}) => {
  // 第1引数: メイン処理対象
  // 第2引数: オプション設定
};

// ❌ 禁止: 個別引数の羅列
const createDraft = (name: string, maxPlayers: number, timeLimit: number, isPrivate: boolean) => {
  // 読みにくい・メンテナンス困難
};
```

#### Early Return（必須パターン）
```tsx
// ✅ 必ずEarly Returnを使用
const processData = (data: Data | null) => {
  if (!data) return null;
  if (data.isEmpty()) return <EmptyState />;
  if (data.hasError()) return <ErrorState />;
  
  // メイン処理
  return <MainContent data={data} />;
};

// ❌ 禁止: ネスト構造
const processData = (data: Data | null) => {
  if (data) {
    if (!data.isEmpty()) {
      if (!data.hasError()) {
        // 深いネスト
      }
    }
  }
};
```

### 変数・定数ルール

```tsx
// ✅ const優先（強制）
const userName = "太郎";
const userList = ["太郎", "花子"];

// ✅ 分割代入積極活用
const { name, age, email } = user;
const [first, second, ...rest] = items;

// ✅ 説明的命名（短縮禁止）
const isUserAuthenticated = true;  // ✅ 分かりやすい
const isAuth = true;               // ❌ 短縮形禁止

// ✅ 全プロパティ指定初期化
const initialState = {
  name: "",
  email: "",
  isActive: false,
  // 全て明示的に定義
};
```

### 非同期処理（統一ルール）

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
    fetchSettings()
  ]);
  return { users, drafts, settings };
};

// ❌ 禁止: Promise.then()
const fetchData = () => {
  return api.getData().then(data => data); // 使用禁止
};
```

## ⚛️ React実装スタイル

### コンポーネント定義（厳格ルール）

```tsx
// ✅ 通常の関数コンポーネント必須
type DraftRoomProps = {
  draft: DraftType;
  onUpdate: (draft: DraftType) => void;
};

const DraftRoom = ({ draft, onUpdate }: DraftRoomProps) => {
  return <div>{draft.name}</div>;
};

// ❌ 絶対禁止: React.FC
const DraftRoom: React.FC<DraftRoomProps> = ({ draft }) => {
  // 使用禁止
};
```

### Props型定義（統一ルール）

```tsx
// ✅ typeのみ使用
type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

// ❌ 絶対禁止: interface
interface ButtonProps {
  label: string;  // interfaceは一切使わない
}
```

### Hooks使用方針

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
{isLoading && <Spinner />}
{error && <ErrorMessage error={error} />}
{data && <DataDisplay data={data} />}

// ✅ 複雑な条件はif文
const renderContent = () => {
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!data) return <EmptyState />;
  return <DataContent data={data} />;
};
```

## 🔤 命名規則（Claude Code最適化）

### 基本命名ルール

| 対象 | ルール | 例 | 備考 |
|------|--------|-----|------|
| boolean | is/has/can/should | `isLoading`, `hasError`, `canEdit`, `shouldShow` | 状況に応じて使い分け |
| イベント | handle prefix | `handleClick`, `handleSubmit` | on prefixは使わない |
| 定数 | PascalCase | `MaxPlayers`, `DefaultTimeout` | SCREAMING_SNAKEは使わない |
| 型 | Type suffix | `UserType`, `DraftType` | Interface suffix禁止 |
| Hook | use prefix | `useDraft`, `useAuth` | カスタムフック必須 |

### ファイル・ディレクトリ戦略

#### コロケーション原則
```
src/components/features/draft/DraftRoom/
├── index.tsx           # メインコンポーネント
├── index.stories.tsx           # Storybookファイル
├── index.test.tsx      # テストファイル
└── hooks.ts     # ローカルカスタムフック（必要あれば）
```

#### 共通化判断基準
```
// 2回以上利用 → 共通化
src/components/atoms/Button/
├── index.tsx
├── index.test.tsx
├── index.stories.tsx
└── types.ts
```

## 🔧 TypeScript方針（厳格ルール）

### 型安全性設定

```json
// tsconfig.json必須設定
{
  "compilerOptions": {
    "strict": true,           // 全オプション有効必須
    "noImplicitAny": true,    // any禁止
    "strictNullChecks": true  // null安全性
  }
}
```

### 型定義スタイル

```tsx
// ✅ type一択（interface絶対禁止）
type UserType = {
  id: string;
  name: string;
  email?: string;
  createdAt: Date;
};

// ✅ Union Types必須（Enum禁止）
type PriorityType = 'low' | 'medium' | 'high';

// ✅ ジェネリクス最小限
type ApiResponseType<T> = {
  data: T;
  error?: string;
};

// ❌ 絶対禁止パターン
interface User {        // interface禁止
  id: string;
}

enum Priority {        // enum禁止
  LOW = 'low'
}
```

### any使用ルール

```tsx
// ✅ 唯一の許可ケース: ライブラリ内部型
const libraryData: any = someLibrary.getData(); // OK

// ✅ 推奨: unknown使用
const unknownData: unknown = getData();
if (typeof unknownData === 'string') {
  // 型ガードで安全に使用
}

// ✅ どうしても必要な場合: biome comment付き
// biome-ignore lint/suspicious/noExplicitAny: ライブラリ型不明のため
const libraryResult: any = externalLib.process();
```

## 🧪 テスト戦略（Claude Code特化）

### テスト実行フロー

```bash
# Claude Codeでの推奨実行順序
pnpm lint          # 1. Biome lint
pnpm type-check    # 2. TypeScript型チェック  
pnpm test          # 3. 単体テスト
pnpm e2e           # 4. E2Eテスト
pnpm storybook:test-ci  # 5. Storybookテスト
```

### E2Eテスト設計

```tsx
// ✅ ハッピーパスのみ（5:1の比重）
describe('ドラフト作成フロー', () => {
  test('ユーザーがドラフトを正常に作成できる', async ({ page }) => {
    // 1. ログイン
    await page.goto('/login');
    await page.fill('[name="email"]', 'test@example.com');
    
    // 2. ドラフト作成
    await page.click('text=新しいドラフト');
    await page.fill('[name="draftName"]', 'テストドラフト');
    
    // 3. 作成確認
    await expect(page.locator('text=ドラフトが作成されました')).toBeVisible();
  });
});
```

### 単体テスト設計

```tsx
// ✅ 日本語命名必須
describe('useDraftRoom', () => {
  test('ドラフトルームデータを正常に取得できる', () => {
    const { result } = renderHook(() => useDraftRoom('draft123'));
    expect(result.current.draft).toBeDefined();
  });
  
  test('エラー時に適切なエラーメッセージが返される', () => {
    // エラーケースのテスト（最小限）
  });
});
```

### Mock戦略

```tsx
// ✅ 最小限Mock（Firebase例）
const mockFirestore = {
  collection: jest.fn(),
  doc: jest.fn(),
};

// ✅ Custom Hook経由でMock
jest.mock('./useDraftData', () => ({
  useDraftData: () => ({
    data: mockDraftData,
    loading: false,
    error: null,
  }),
}));
```

## 🎨 UI/UX実装方針

### Chakra UI使用ルール

```tsx
// ✅ inline style props必須
<Box 
  bg="blue.500" 
  p={4} 
  borderRadius="md"
  _hover={{ bg: "blue.600" }}
>
  コンテンツ
</Box>

// ✅ レスポンシブは配列記法
<Text fontSize={["sm", "md"]}>  {/* SP: sm, PC: md */}
  レスポンシブテキスト
</Text>

// ❌ 禁止: sx props
<Box sx={{ backgroundColor: "blue" }}>  {/* 使用禁止 */}
```

### アニメーション統一ルール

```tsx
// ✅ Framer Motion使用、150ms統一
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.15, ease: "easeOut" }}  // 150ms + ease統一
>
  コンテンツ
</motion.div>

// ✅ ローディング表示統一
const LoadingSpinner = () => (
  <Spinner size="md" color="blue.500" />  // スピナー統一
);
```

### レスポンシブ設計

```tsx
// ✅ 2段階ブレイクポイント（PC/SP）
const ResponsiveLayout = () => (
  <Grid 
    templateColumns={["1fr", "1fr 1fr"]}  // SP: 1列, PC: 2列
    gap={[4, 8]}                          // SP: 4, PC: 8
  >
    <GridItem>コンテンツ1</GridItem>
    <GridItem>コンテンツ2</GridItem>
  </Grid>
);
```

## 🔄 Claude Code開発プロセス

### 1. Explore（調査フェーズ）

```bash
# 既存コード理解
pnpm dev                    # 開発サーバー起動
# ファイル構造確認
# 既存実装パターン学習
```

### 2. Plan（計画フェーズ）

```markdown
## TODO
- [ ] DraftRoomコンポーネント作成
- [ ] useDraftRoom Hook実装
- [ ] テスト作成
- [ ] Storybook追加
```

### 3. Code（実装フェーズ）

```bash
# 実装順序
1. 型定義作成
2. Custom Hook実装
3. コンポーネント作成
4. テスト作成
5. Storybook作成
```

### 4. Commit（確定フェーズ）

```bash
# 必須チェック
pnpm lint                   # Lint通過必須
pnpm type-check            # 型チェック通過必須
pnpm test                  # テスト通過必須
git add .
git commit -m "feat: DraftRoom実装"
```

## 💳 技術的負債管理

### 負債優先度（Claude Code最適化）

```tsx
// 優先度1: コード負債（即座対応）
// TODO: この部分はリファクタリング必要
const badCode = () => {
  // 複雑すぎる実装
};

// 優先度2: テスト負債（次の機能開発時に対応）
// TODO: E2Eテスト追加必要

// 優先度3: ドキュメント負債（時間がある時に対応）
// TODO: README更新

// 優先度4: 設計負債（大きなリファクタリング時に対応）
// TODO: アーキテクチャ見直し
```

### 重複コード管理

```tsx
// ❌ 2回目の使用で警告
const duplicatedLogic = () => {
  // 同じロジックが2箇所目
  // TODO: 共通化検討（2回目の使用で共通化してもOK）
};

// ✅ 3回目で必ず共通化
const sharedLogic = () => {
  // 共通関数として切り出し必須
};
```

## 🛠️ 開発環境最適化

### VSCode設定（Claude Code推奨）

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.biome": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

### パフォーマンス目標

```yaml
開発サーバー起動: 10秒以内
TypeScript型チェック: 10秒以内
Lint実行: 5秒以内
テスト実行: 30秒以内
ビルド時間: 2分以内
```

## 📋 Claude Codeクイックリファレンス

### 必須実行コマンド
```bash
pnpm dev                    # 開発開始
pnpm lint                   # コード品質チェック
pnpm type-check            # 型安全性チェック
pnpm test                  # テスト実行
pnpm e2e                   # E2Eテスト
pnpm storybook             # コンポーネント確認
```

### やること（Claude Code最適化）
- ✅ Arrow Function（必須）
- ✅ type定義（interface禁止）
- ✅ const使用（let最小限）
- ✅ 分割代入（積極活用）
- ✅ async/await（Promise.then禁止）
- ✅ Early Return（必須）
- ✅ 日本語テスト（必須）
- ✅ Props Drilling（Context禁止）

### やらないこと（厳格禁止）
- ❌ Function Declaration
- ❌ interface使用
- ❌ React.FC使用
- ❌ HOC/Render Props
- ❌ Context API
- ❌ Enum使用
- ❌ 過度な最適化
- ❌ any使用（ライブラリ除く）

---

このドキュメントは生きた文書として、プロジェクトの成長とともに継続的に更新・改善されます。Claude Codeとの協働開発において、一貫性のある高品質なコードを維持するための指針として活用してください。