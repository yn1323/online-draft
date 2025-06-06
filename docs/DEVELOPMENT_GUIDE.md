# 開発ガイド

## 🛠 技術スタック

### 🎯 現在の技術スタック（Phase 1-2 完了）
| Category | Technology | Status |
|----------|------------|--------|
| Frontend | Next.js 15 + React 19 + TypeScript 5 | ✅ 完了 |
| UI Framework | Chakra UI v3 + next-themes | ✅ 完了 |
| State Management | Jotai | ✅ 完了 |
| Form Management | React Hook Form + Zod | ✅ 完了 |
| Linting/Formatting | Biome | ✅ 完了 |
| Testing | Vitest + Playwright + Storybook | ✅ 完了 |
| Package Manager | pnpm | ✅ 完了 |
| CI/CD | GitHub Actions | ✅ 完了 |

### 🔄 予定技術スタック（Phase 3以降）
| Category | Technology | Status | 備考 |
|----------|------------|--------|------|
| Backend | Firebase Firestore, Firebase Auth | 🔄 Phase 3 | リアルタイム同期重視 |
| State Management | Jotai + Firebase onSnapshot | 🔄 Phase 3 | Reduxから完全移行 |
| Deployment | Vercel (auto-deploy) | 🔄 Phase 3 | - |
| Analytics | Firebase Analytics (optional) | 🔄 Phase 4 | - |

### 📦 Legacy技術スタック（参考用）
| Category | Technology | Status |
|----------|------------|--------|
| Frontend | Next.js 12, Chakra UI v2, TypeScript 4.6 | 📁 legacy/ |
| State Management | Redux Toolkit, Redux Logger | 📁 legacy/ |
| Styling | SCSS + Chakra UI v2 | 📁 legacy/ |

## 🏗 アーキテクチャ概要

### プロジェクト構造
- **Atomic Design**: Components organized as atoms → molecules → organisms → templates
- **UI/ドメイン分離**: UI共通コンポーネント（ui/）とドメインロジック（features/）の分離
- **ResponsiveModal**: デバイス別UI最適化の共通コンポーネント
- **Path Aliases**: Configured in `tsconfig.json` for clean imports:
  - `@/helpers/*` → `src/helpers/*`
  - `@/constants/*` → `src/constants/*`
  - `@/atoms/*` → `components/atoms/*`
  - `@/molecules/*` → `components/molecules/*`
  - `@/organisms/*` → `components/organisms/*`
  - `@/templates/*` → `components/templates/*`
  - `@/stores/*` → `stores/*`
  - `@/styles/*` → `styles/*`

### 状態管理（Legacy → Modern）

#### Legacy（Redux）
Redux store combines these slices:
- `component` - UI component states
- `chat` - Chat functionality
- `draft` - Draft/game logic
- `userInfo` - User authentication and profile

#### Modern（Jotai予定）
```typescript
// シンプルなatom定義でリアルタイム同期
const groupAtom = atom<Group | null>(null);
const usersAtom = atom<User[]>([]);
const selectionsAtom = atom<Selection[]>([]);
const chatMessagesAtom = atom<ChatMessage[]>([]);

// Firebase onSnapshotと統合してリアルタイム性を実現
// RxJSなどの複雑なライブラリは使用せず、useEffect + onSnapshotでシンプルに実装
```

### Firebase統合
- Configuration in `src/constants/firebase.ts`
- Uses environment variables for configuration
- Development collection: `yn1323test`
- Exports `db` (Firestore), `auth` (Authentication)

#### Firestore構造
```
app/
└── onlinedraft/
    ├── group/        # グループ情報
    ├── user/         # ユーザー情報
    ├── selection/    # 選択情報（ランダムID含む）
    └── logMessage/   # チャットログ
```

## 🔒 開発制約・ルール

### 基本制約
- ❌ 明示的指示外の変更禁止
- ❌ 技術スタックバージョンの勝手な変更禁止  
- ❌ UI/UX変更は事前承認必須 (レイアウト、色、フォント、間隔)

### コードスタイルルール
- ✅ **ファイル末尾の空行**: すべてのファイルの最後に改行を1つ追加する (IMPORTANT)
- ✅ **型推論を活用**: 過度な型定義を避ける
- ✅ **3箇所以上で使用する値のみ共通化**: 1-2箇所の利用では直接記述
- ✅ **useEffectの使用を最小限に**: 適切な状態管理で代替可能な処理は避ける

### Git運用
- **ブランチ**: `feat/`, `fix/`, `refactor/`プレフィックス
- **コミットメッセージ**: 英語で記述
- **PR**: 日本語でタイトル・説明を記述
- **GitHub CLI操作**: 自動化されたワークフローで日本語対応

### 開発フロー
1. `master`ブランチから分岐
2. 機能実装・テスト
3. `/commit`でコミット
4. `/push`でPR作成
5. レビュー後`master`へマージ

## 🎯 TypeScript/React 開発標準

### TypeScript最適化原則
```typescript
// ✅ 推奨: 型推論を活用
export const createUser = async () => {
  return { success: true, userId: 'user-123' };
};

// ❌ 非推奨: 明示的型定義（推論で十分な場合）
export const createUser = async (): Promise<UserResult> => {
  return { success: true, userId: 'user-123' };
};
```

### React Hooks 最適化
```typescript
// ✅ 推奨: 個別import
import { useEffect, useState } from 'react';

// ❌ 非推奨: React名前空間
import React from 'react';
React.useEffect(() => {}, []);
```

### UI/UX設計原則
- **エラー時のみ通知**: 失敗時のtoast表示に限定
- **不要な成功通知削除**: 「処理開始」などの中間状態通知を避ける
- **自然な遷移**: 成功は画面遷移で十分に伝達
- **ダークモード対応**: テーマトークン使用 (`blackAlpha.50`, `border`等)
- **レスポンシブデザイン**: 必須

## 🎨 フロントエンド開発ガイドライン

### Chakra UI実装（Chakra UI v3使用）（IMPORTANT）
**⚠️ UI作成時の必須参考ファイル**: `src/chakraui-llms-full.txt`を必ず参照すること！

```typescript
// ダークモード対応の背景色
bg="blackAlpha.50"          // 薄い透明度
borderColor="border"        // テーマ対応ボーダー

// レイアウト簡素化
<VStack gap={4}>           // v3ではgapを使用（spacingは非推奨）
  <Button width="full">    // 必要最小限のprops
</VStack>
```

#### Chakra UI v3 重要な変更点
- **Chakra UI v3**: 最新版を使用（v2からアップグレード済み）
- **参考ファイル**: UIコンポーネント作成時は`src/chakraui-llms-full.txt`を必須参照
- **spacing → gap**: VStack/HStackでは`spacing`ではなく`gap`プロパティを使用
- **Provider設定**: `@/src/components/ui/provider`でテーマ・カラーモード設定済み

#### Chakra UI v3 API変更への対応（IMPORTANT）
- **IconButton**: v3では`aria-label`が必須プロパティ
  ```tsx
  // ✅ 正しい実装
  <IconButton
    aria-label="Toggle theme"  // 必須！
    variant="ghost"
    size="sm"
  >
    <FiSun />
  </IconButton>
  
  // ❌ エラーになる実装（v2では動作した）
  <IconButton variant="ghost" size="sm">
    <FiSun />
  </IconButton>
  ```
- **アクセシビリティ向上**: 全てのインタラクティブ要素に適切なラベル付けが必要
- **型安全性の強化**: TypeScriptでのプロパティチェックがより厳密に

## ⚠️ 環境固有の注意点

### WSL環境
```bash
# esbuildプラットフォーム不一致エラー対応
rm -rf node_modules
npm install
```

### GitHub環境での前提条件
- **環境変数**: 基本的に存在するものとして扱う
- **.envファイル**: アップロード不可だが、実行可能前提でコード確認
- **実行環境**: 本番環境で動作している状態として判断

## 🎨 ロビーページ設計方針

#### UI/UX設計原則
- **ステップ分離**: 既存ユーザー選択と新規作成を明確に分離
- **視覚的フィードバック**: アバター選択時の緑ボーダー＋チェックマーク
- **レスポンシブグリッド**: デバイスサイズに応じたアバター列数調整
- **カラー統一**: プロジェクト全体の色彩ルールに準拠

#### コンポーネント構造・設計方針

**階層設計の基準:**
```
lobby/
├── index.tsx                    # ページ全体の統合・ルーティング
├── index.stories.tsx           # メインページのStorybook
├── UserSelectStep.tsx          # ユーザー選択画面の完全な責務
├── UserSelectStep.stories.tsx  # 選択画面のStorybook
├── UserCreateStep.tsx          # ユーザー作成画面の完全な責務
├── UserCreateStep.stories.tsx  # 作成画面のStorybook
├── actions.ts          # Server Actions（将来のFirebase統合用）
└── components/                 # 再利用可能なUI部品
    ├── StepIndicator.tsx        # ステップ表示UI
    ├── StepIndicator.stories.tsx
    ├── AvatarSelector.tsx       # アバター選択UI
    ├── AvatarSelector.stories.tsx
    ├── ExistingUserList.tsx     # ユーザー一覧UI
    └── ExistingUserList.stories.tsx
```

**分類基準:**
- **画面レベル（Step系）**: 画面全体の機能・ビジネスロジック・状態管理を担当。他の画面要素を組み合わせる役割
- **パーツレベル（components/）**: 単一の明確な機能を持つ独立したUI。複数箇所で使われる可能性があり、独立してテスト可能

**設計思想:**
- Atomic DesignやContainer/Presentationalパターンは控える
- 純粋に機能・責務ベースでの分類
- 実用性と保守性を重視した階層構造

#### 技術的特徴
- **非同期Page⇔クライアントコンポーネント分離**: Animation統合のベストプラクティス確立
- **Chakra UI v3完全対応**: loading, disabled, useColorModeValueの正しい使用
- **レスポンシブ画像グリッド**: useBreakpointValueによる動的列数制御
- **アクセシビリティ配慮**: 適切なalt属性、キーボードナビゲーション対応

#### アバター管理
- **画像ソース**: legacy/public/img → public/img (18種類の動物アイコン)
- **選択状態管理**: ローカルstate + 視覚的フィードバック
- **将来の拡張**: Firebase統合時のリアルタイム同期準備

### スタイリング
- Chakra UI theme in `src/constants/theme.ts`
- Custom SCSS organized by component type and pages
- Global styles and variables in `styles/` directory

### デプロイメント
- **Production**: https://online-draft.vercel.app/ (master branch)
- **Preview**: https://preview-online-draft.vercel.app/ (develop branch)

## 🧪 テスト・品質管理ガイドライン

### Storybook品質保証戦略（VERY IMPORTANT）
- **実コンポーネント必須**: 実際のindex.tsxを必ずテスト対象にする
- **MockXXXコンポーネント作成禁止**: 実際のコンポーネントを回避する偽物は品質保証にならない
- **共通テストユーティリティ活用**: `src/test-utils/storybook`を積極利用
- **目的**: 実コンポーネントのスモークテスト + VRT（Visual Regression Testing）

### テストユーティリティの構造と使用法

#### 基本的な使用例
```typescript
// 最もシンプルな使用例
import { handlers } from '@/src/test-utils/msw';
import { withAuthenticatedUser } from '@/src/test-utils/mocks';
import LobbyPage from './index'; // 実際のコンポーネント

const meta: Meta<typeof LobbyPage> = {
  title: 'Features/Lobby/LobbyPage',
  component: LobbyPage, // 実物をテスト
  parameters: {
    layout: 'fullscreen',
    msw: { handlers: handlers },
  },
  decorators: [withAuthenticatedUser],
};
```

#### テストユーティリティディレクトリ構造
```
src/test-utils/
├── mocks/                    # 機能別モック
│   ├── firebase-user.ts      # Firebase認証モック
│   ├── jotai-store.ts        # 状態管理モック  
│   ├── storybook-decorators.tsx  # デコレーター
│   └── index.ts
├── msw/                     # MSWハンドラー（機能別分離）
│   ├── firebase-auth.ts      # Firebase認証API
│   ├── firestore.ts          # Firestore API
│   └── index.ts             # 統合エクスポート
└── storybook/               # Storybook専用
    └── index.ts
```

#### 利用可能なデコレーター
```typescript
// 認証済みユーザー（デフォルト）
decorators: [withAuthenticatedUser]

// 未認証ユーザー
decorators: [withUnauthenticatedUser]

// 認証ローディング中
decorators: [withAuthLoading]

// カスタムユーザー
decorators: [withCustomUser({ uid: 'custom-user-id', displayName: 'カスタムユーザー' })]
```

#### MSWハンドラーの種類
```typescript
// 全部入り（推奨）
import { handlers } from '@/src/test-utils/msw';
msw: { handlers: handlers }

// 機能別使用も可能
import { firestoreHandlers } from '@/src/test-utils/msw/firestore';
import { firebaseAuthHandlers } from '@/src/test-utils/msw/firebase-auth';
```

### MSW実装ガイドライン

#### 対応しているAPI
```typescript
// Firestore グループ取得（複数パターン）
// GET /v1/projects/*/databases/(default)/documents/draftGroups/:groupId
// サポート: ABC123, XYZ789, 12, LOADING_TEST
// 存在しないID: 404エラー返却

// Firebase Auth 匿名認証
// POST /v1/accounts:signInAnonymously
// POST /accounts:signUp (匿名認証で使用)
// POST /accounts:lookup (ユーザー情報取得)
```

#### カスタムハンドラー追加例
```typescript
// src/test-utils/msw/firestore.ts または firebase-auth.ts に追加
http.get('*/custom-api/:id', ({ params }) => {
  return HttpResponse.json({
    id: params.id,
    customData: 'テストデータ'
  });
})
```

### Storybook設計ルール

#### 必須項目
1. **実コンポーネント使用**: 偽物コンポーネント禁止
2. **適切なデコレーター**: 認証状態に応じたデコレーター選択
3. **MSWハンドラー**: API依存がある場合は必須設定
4. **簡潔性**: 不要な`docs.description`は書かない

#### 推奨ストーリーパターン
```typescript
export default meta;
type Story = StoryObj<typeof meta>;

// 基本パターン
export const Default: Story = {
  args: { groupId: 'ABC123' },
};

// 長いデータパターン  
export const LongGroupName: Story = {
  args: { groupId: 'XYZ789' },
};

// エラーパターン
export const NonExistentGroup: Story = {
  args: { groupId: 'nonexistent' },
};
```

### 品質チェック手順（改良版）
1. **型エラーチェック**: `pnpm type-check`
2. **Lintチェック**: `pnpm lint:fix`
3. **テスト実行**: `pnpm test`
4. **ファイル末尾改行**: 全ファイル必須
5. **実コンポーネント確認**: MockXXXコンポーネントが無いことを確認

## 🔥 Firebase・Firestore統合ガイドライン

### Firestoreデータ連携時の注意事項
- **Legacy互換**: 必ず`legacy/`のスキーマ構造を参考にする
- **コレクション**: `app/onlinedraft/group`パスを使用
- **型定義**: interfaceではなくtypeを使用（VERY IMPORTANT）
- **エラーハンドリング**: 権限エラー、ネットワークエラーを適切に処理

### Firestore実装パターン
```typescript
// 推奨: Legacy互換型定義
type Groups = {
  groupName: string;
  round: number;
  finishedRound: number[];
  deleteFlg: boolean;
};

// 推奨: エラーハンドリング込みの実装
export async function getDraftGroup(groupId: string): Promise<(Groups & { id: string }) | null> {
  try {
    const docRef = doc(db, ...COLLECTIONS.BASE, COLLECTIONS.GROUP, groupId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as Groups & { id: string };
    }

    return null;
  } catch (error) {
    console.error('❌ グループ取得エラー:', error);
    throw error;
  }
}
```

### 認証統合パターン
```typescript
// Firebase Anonymous Auth + Jotai統合
import { useAuth } from '@/src/hooks/useAuth';

// 自動ログイン実装例
useEffect(() => {
  const autoLogin = async () => {
    if (!authLoading && !isAuthenticated) {
      try {
        console.log('🔄 自動匿名ログイン開始...');
        const userCredential = await signInAnonymously(auth);
        console.log('✅ 自動ログイン成功:', {
          uid: userCredential.user.uid,
          isAnonymous: userCredential.user.isAnonymous,
        });
      } catch (error) {
        console.error('❌ 自動ログインエラー:', error);
      }
    }
  };

  autoLogin();
}, [authLoading, isAuthenticated]);
```

## テスト・品質管理ガイドライン

### Storybookテスト戦略

#### テスト環境の構成
- **実行環境**: Chromium（Playwright）
- **タイムアウト**: vitest.config.mts で 100秒設定
- **MSW統合**: API呼び出しを完全モック化

#### Firebase連携コンポーネントのテスト

**問題点と対策:**
1. **Firebase初期化エラー対策**
   ```typescript
   // src/lib/firebase.ts
   const firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'test-api-key',
     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'test.firebaseapp.com',
     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'test-project',
   };
   ```

2. **Storybook環境でのAPI呼び出しスキップ**
   ```typescript
   // ポート6006（Storybook）での実行を検出
   if (typeof window !== 'undefined' && window.location.port === '6006') {
     // Firebase API呼び出しをスキップし、モックデータを使用
     setGroupLoading(false);
     setGroupData({ groupName: 'テストグループ', round: 3 });
     return;
   }
   ```

#### MSWハンドラー設定

**必須のFirebase Authエンドポイント:**
```typescript
// src/test-utils/msw/firebase-auth.ts
http.post('*/v1/accounts:signInAnonymously', () => {
  return HttpResponse.json({
    localId: 'mock-anonymous-user-id',
    idToken: 'mock-id-token',
    refreshToken: 'mock-refresh-token',
    expiresIn: '3600',
    isNewUser: true,
  });
}),
```

#### VRTテストの注意点

1. **act警告の抑制**
   ```typescript
   // .storybook/vitest.setup.ts
   beforeAll(() => {
     console.error = (...args) => {
       if (args[0]?.includes('Warning: An update to %s inside a test was not wrapped in act')) {
         return;
       }
       originalError.call(console, ...args);
     };
   });
   ```

2. **GitHub Actionsでのタイムアウト対策**
   ```yaml
   # .github/workflows/storybook-vrt.yml
   pnpm storybook:test --testTimeout 60000 -- --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}
   ```

### GitHub Actions VRT設定

#### キャッシュ問題の回避
- **問題**: Storybookビルドキャッシュによる不整合
- **解決**: 毎回クリーンビルド＋アーティファクト経由での受け渡し

#### MSW Service Workerパス問題（VERY IMPORTANT）
- **問題**: VRT環境（http-server）でMSWのService Workerが読み込めない
- **症状**: LobbyPageなどFirebase依存コンポーネントでタイムアウトエラー
- **解決**: `.storybook/preview.tsx`でService Workerパスを明示的に指定
  ```typescript
  initialize({
    serviceWorker: {
      url: './mockServiceWorker.js', // 相対パスで指定
    },
  });
  ```

```yaml
# ビルドジョブ
- name: Upload expected storybook build
  uses: actions/upload-artifact@v4
  with:
    name: expected-storybook-static
    path: storybook-static/
    retention-days: 1

# テストジョブ
- name: Download expected storybook build
  uses: actions/download-artifact@v4
  with:
    name: expected-storybook-static
    path: storybook-static/
```

#### 環境変数の設定
```yaml
env:
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: ${{ secrets.NEXT_PUBLIC_FIREBASE_PROJECT_ID }}
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: ${{ secrets.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN }}
  NEXT_PUBLIC_FIREBASE_API_KEY: ${{ secrets.NEXT_PUBLIC_FIREBASE_API_KEY }}
```

### テストのベストプラクティス

1. **実コンポーネント中心**: MockXXXコンポーネントは作らない
2. **MSWによる境界モック**: APIレイヤーでのモック実装
3. **環境検出によるスキップ**: テスト環境では実APIコールを回避
4. **適切なタイムアウト設定**: Firebase認証処理には十分な時間を確保