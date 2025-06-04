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

#### コンポーネント構造
```typescript
src/components/features/lobby/
├── index.tsx           # メインコンポーネント
├── index.stories.tsx   # Storybook設定
└── actions.ts          # Server Actions（将来のFirebase統合用）
```

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