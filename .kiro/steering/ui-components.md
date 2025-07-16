---
inclusion: fileMatch
fileMatchPattern: "**/components/**/*.{ts,tsx}"
---

# UI コンポーネント

## 詳細 UI/UX 設計

OnlineDraft プロジェクトの詳細な UI/UX 設計については、以下のドキュメントを参照してください：

#[[file:docs/ui-ux-design.md]]

## Chakra UI 使用ルール

### 基本方針

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

// ✅ レスポンシブは配列記法、2段階（PC/SP）
<Text fontSize={["sm", "md"]}>
  {/* SP: sm, PC: md */}
  レスポンシブテキスト
</Text>

// ❌ 禁止: sx props
<Box sx={{ backgroundColor: "blue" }}>
  {/* 使用禁止 */}
</Box>
```

### モーダル実装

```tsx
// ✅ 専用コンポーネントを使用
import { ResponsiveModal } from "@/src/components/ui/responsive-modal";

const MyModal = () => (
  <ResponsiveModal isOpen={isOpen} onClose={onClose}>
    <ModalContent>{/* モーダル内容 */}</ModalContent>
  </ResponsiveModal>
);
```

## デザインコンセプト

デザインコンセプトとカラーパレットの詳細は、上記の UI/UX 設計書を参照してください。

## アニメーション統一ルール

アニメーション仕様の詳細は、上記の UI/UX 設計書を参照してください。

### 基本設定

- **Duration**: 150ms 統一
- **Easing**: ease 統一
- **実装**: Framer Motion 使用

## レスポンシブ設計

レスポンシブ設計の詳細は、上記の UI/UX 設計書を参照してください。

### 基本方針

- **SP**: 〜768px（スマートフォン）
- **PC**: 768px〜（デスクトップ）
- **実装**: Chakra UI の配列記法使用

## コンポーネント設計仕様

コンポーネントの詳細仕様については、上記の UI/UX 設計書を参照してください。

### 基本コンポーネント

- **Button**: サイズ（sm/md/lg）、ホバー時浮上効果
- **Input**: フォーカス状態、バリデーション表示
- **Card**: パディング調整、シャドウ効果
- **Avatar**: 1-18.png、99.png（システム用）

## レイアウトコンポーネント

レイアウトコンポーネントの詳細は、上記の UI/UX 設計書を参照してください。

- **Container**: 最大幅 1200px、レスポンシブパディング
- **Header**: 高さ 64px、sticky 配置

## エラー処理・フィードバック

エラー処理とフィードバックの詳細は、上記の UI/UX 設計書を参照してください。

### 基本仕様

- **トースト通知**: 画面上部、種類別カラー、自動クローズ
- **バリデーションエラー**: フィールド直下、赤文字、アイコン付き

## タイポグラフィ

### フォント設定

- **メインフォント**: Geist (Next.js 標準)
- **等幅フォント**: Geist Mono
- **言語**: 日本語対応

### フォントサイズ（Chakra UI 準拠）

```tsx
// ✅ フォントサイズ使用例
<Text fontSize="xs">補助情報、タイムスタンプ</Text>
<Text fontSize="sm">セカンダリテキスト</Text>
<Text fontSize="md">標準テキスト（基準）</Text>
<Text fontSize="lg">重要テキスト</Text>
<Text fontSize="xl">サブタイトル</Text>
<Text fontSize="2xl">画面タイトル</Text>
<Text fontSize="3xl">メインタイトル</Text>
```

### 行間・余白

- **line-height**: `1.6` （標準）
- **letter-spacing**: `0.025em` （日本語最適化）
- **paragraph spacing**: `1rem`

## 開票演出（特別仕様）

### スロット風演出

```tsx
// ✅ 開票演出実装例
<motion.div
  animate={{
    rotateX: [0, 360, 720, 1080],
  }}
  transition={{
    duration: 3,
    ease: "easeOut",
    times: [0, 0.3, 0.6, 1],
  }}
>
  {revealedText}
</motion.div>
```

#### 演出仕様

- **方式**: 文字が縦にクルクル回転
- **タイミング**: 全員同時開始 → ランダム順で停止
- **時間**: 3 秒（開票演出のみ例外）
- **音**: なし
- **結果表示**: 即座に成功/失敗を表示

## コンポーネント構造

### Feature-Based + コロケーション

```
src/components/features/draft/DraftRoom/
├── index.tsx           # メインコンポーネント
├── index.stories.tsx   # Storybookファイル
└── hooks.ts           # ローカルカスタムフック（必要時）
```

### Atomic Design 適用

```
src/components/
├── atoms/        # 基本UI要素 (Button, Input, Card等)
├── features/     # 機能固有コンポーネント
├── layout/       # レイアウトコンポーネント
├── templates/    # ページテンプレート
└── ui/           # Chakra UIカスタマイゼーション
```
