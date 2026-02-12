# SEO改善 実装計画書

## 🎯 概要

### 目的
- Organic Search流入の増加（現状188/月 → 目標500+/月）
- Googleサイトリンク表示の獲得
- 検索キーワードの入口を増やす

### 現状の課題
- インデックス対象ページが1ページのみ（トップページ）
- コンテンツページがない（ガイド、FAQなど）
- ナビゲーションがない（サイトリンク表示に不利）
- canonical URLの明示的な指定がない

### 解決策
1. ガイドページ `/guide` の追加
2. FAQページ `/faq` の追加
3. グローバルナビゲーションの追加
4. SEO技術対策（canonical, sitemap, 構造化データ）

---

## 📋 実装タスク

### Phase 1: 基盤整備

#### 1-1. Canonical URLの追加
**対象ファイル**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  // 既存の設定...
  alternates: {
    canonical: '/',
  },
};
```

#### 1-2. デモコンポーネント用ラッパー作成
**新規作成**: `src/components/features/guide/DemoWrapper/index.tsx`

Storybookで使用している`useHydrateAtoms`パターンを流用し、ガイドページでコンポーネントを固定値表示できるようにする。

**参照ファイル**:
- `src/components/features/draft/CurrentRoundStatus/index.stories.tsx`
- `src/components/features/draft/PastDraftResults/index.stories.tsx`
- `src/components/features/lobby/ParticipantsList/index.stories.tsx`

---

### Phase 2: ガイドページ作成

#### 2-1. ページ作成
**新規作成**: `app/(marketing)/guide/page.tsx`

**メタデータ**:
```typescript
export const metadata: Metadata = {
  title: '使い方ガイド | みんなでドラフト',
  description: 'みんなでドラフトの使い方を解説。ルーム作成から友達招待、ドラフト実行まで3ステップで簡単！',
  alternates: {
    canonical: '/guide',
  },
};
```

#### 2-2. ガイドページコンテンツ
**新規作成**: `src/components/features/guide/GuidePage/index.tsx`

**構成**:
```
1. みんなでドラフトとは？
   └─ 30秒で分かる概要説明

2. 基本の流れ（3ステップ）
   ├─ STEP1: ルームを作成する
   │   └─ [RoomInfo デモ]
   ├─ STEP2: 友達を招待する
   │   └─ [ParticipantsList デモ]
   └─ STEP3: ドラフト開始！
       └─ [CurrentRoundStatus デモ]

3. ドラフトのルール
   ├─ 指名のやり方
   ├─ 重複指名（かぶり）の仕組み
   │   └─ [PastDraftResults デモ（重複指名あり）]
   └─ ラウンドの進め方

4. 便利な機能
   ├─ チャット機能
   │   └─ [ChatMessageList デモ]
   ├─ 開票演出（3パターン）
   └─ 音声通話との併用おすすめ

5. Tips
   └─ 「事前にお題を決めておくとスムーズ！」など
```

**使用コンポーネント**:
| コンポーネント | 参照ファイル |
|--------------|-------------|
| RoomInfo | `src/components/features/lobby/RoomInfo/index.tsx` |
| ParticipantsList | `src/components/features/lobby/ParticipantsList/index.tsx` |
| CurrentRoundStatus | `src/components/features/draft/CurrentRoundStatus/index.tsx` |
| PastDraftResults | `src/components/features/draft/PastDraftResults/index.tsx` |
| ChatMessageList | `src/components/features/draft/ChatMessageList/index.tsx` |

**モックデータ参照**:
| コンポーネント | Storybookファイル |
|--------------|------------------|
| RoomInfo | `src/components/features/lobby/RoomInfo/index.stories.tsx` |
| ParticipantsList | `src/components/features/lobby/ParticipantsList/index.stories.tsx` |
| CurrentRoundStatus | `src/components/features/draft/CurrentRoundStatus/index.stories.tsx` |
| PastDraftResults | `src/components/features/draft/PastDraftResults/index.stories.tsx` |
| ChatMessageList | `src/components/features/draft/ChatMessageList/index.stories.tsx` |

---

### Phase 3: FAQページ作成

#### 3-1. ページ作成
**新規作成**: `app/(marketing)/faq/page.tsx`

**メタデータ**:
```typescript
export const metadata: Metadata = {
  title: 'よくある質問（FAQ） | みんなでドラフト',
  description: 'みんなでドラフトのよくある質問。登録不要・完全無料で2〜8人で遊べます。',
  alternates: {
    canonical: '/faq',
  },
};
```

#### 3-2. FAQページコンテンツ
**新規作成**: `src/components/features/faq/FAQPage/index.tsx`

**構成**:
```
基本について
├─ Q: 登録は必要？ → A: 不要！
├─ Q: 料金は？ → A: 完全無料！
└─ Q: 何人で遊べる？ → A: 2〜8人

ルームについて
├─ Q: ルームに入れない → A: URL/ID確認
└─ Q: 途中参加できる？ → A: ロビーから可能

ドラフトについて
├─ Q: 重複指名って？ → A: 同じ選択でかぶること
├─ Q: 勝敗はどう決まる？ → A: ランダム判定
└─ Q: 何ラウンドまでできる？ → A: 制限なし

通信について
├─ Q: 音声通話は？ → A: LINE/Discord併用推奨
└─ Q: スマホで使える？ → A: 対応！
```

**使用コンポーネント**:
- Chakra UI Accordion（FAQ表示用）

**参照ファイル**:
- `src/components/features/top/FAQSection/index.tsx`（既存のFAQセクション）

---

### Phase 4: ナビゲーション追加（Route Groups構成）

#### 4-1. Route Groups でレイアウト分割
Next.js の Route Groups を使って、Header/Footer の表示を制御する。

**表示ルール**:
| ページ | Header/Footer |
|--------|--------------|
| `/` (トップ) | ✅ あり |
| `/guide` | ✅ あり |
| `/faq` | ✅ あり |
| `/lobby/[id]` | ❌ なし |
| `/draft/[id]` | ❌ なし |
| `/entry/[id]` | ❌ なし |

#### 4-2. ヘッダーナビゲーション作成
**新規作成**: `src/components/features/common/Header/index.tsx`

**構成**:
```
[ロゴ] ─── [使い方] [FAQ] ─── [ルームを作成]
```

**リンク先**:
- 使い方 → `/guide`
- FAQ → `/faq`
- ルームを作成 → トップページのCTAへ or モーダル

#### 4-3. フッターナビゲーション作成
**新規作成**: `src/components/features/common/Footer/index.tsx`

**構成**:
```
みんなでドラフト
├─ 使い方ガイド → /guide
├─ よくある質問 → /faq
└─ © 2024 みんなでドラフト
```

#### 4-4. マーケティング用レイアウト作成
**新規作成**: `app/(marketing)/layout.tsx`

```tsx
import { Header } from '@/src/components/features/common/Header';
import { Footer } from '@/src/components/features/common/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

#### 4-5. 既存ページの移動
- `app/page.tsx` → `app/(marketing)/page.tsx` に移動

---

### Phase 5: SEO技術対策

#### 5-1. Sitemap更新
**対象ファイル**: `app/sitemap.ts`

```typescript
return [
  {
    url: 'https://online-draft.vercel.app',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: 'https://online-draft.vercel.app/guide',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://online-draft.vercel.app/faq',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
];
```

#### 5-2. 構造化データ追加（SiteNavigationElement）
**対象ファイル**: `app/layout.tsx`

```typescript
const siteNavigationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: '使い方ガイド',
      url: 'https://online-draft.vercel.app/guide',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'よくある質問',
      url: 'https://online-draft.vercel.app/faq',
    },
  ],
};
```

#### 5-3. FAQPage構造化データ
**対象ファイル**: `app/(marketing)/faq/page.tsx`

```typescript
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '登録は必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'いいえ、登録不要で今すぐ遊べます。',
      },
    },
    // ... 他のQ&A
  ],
};
```

---

## 📁 ファイル構成

### ディレクトリ構造（Route Groups使用）

```
app/
├── (marketing)/                    # Header/Footer付きレイアウト
│   ├── layout.tsx                  # 新規：マーケティング用レイアウト
│   ├── page.tsx                    # 移動：トップページ（/）
│   ├── guide/
│   │   └── page.tsx                # 新規：ガイドページ（/guide）
│   └── faq/
│       └── page.tsx                # 新規：FAQページ（/faq）
│
├── lobby/                          # Header/Footerなし（既存のまま）
│   └── [id]/
│       └── page.tsx
├── draft/                          # Header/Footerなし（既存のまま）
│   └── [id]/
│       └── page.tsx
├── entry/                          # Header/Footerなし（既存のまま）
│   └── [id]/
│       └── page.tsx
│
├── layout.tsx                      # 更新：ルートレイアウト（GTM, Provider, 構造化データ）
└── sitemap.ts                      # 更新：ページ追加

src/components/features/
├── guide/
│   ├── GuidePage/
│   │   └── index.tsx               # ガイドページコンテンツ
│   └── DemoWrapper/
│       └── index.tsx               # デモコンポーネント用ラッパー
├── faq/
│   └── FAQPage/
│       └── index.tsx               # FAQページコンテンツ
└── common/
    ├── Header/
    │   └── index.tsx               # ヘッダーナビゲーション
    └── Footer/
        └── index.tsx               # フッターナビゲーション
```

### 変更サマリー

| 種別 | ファイル | 内容 |
|-----|---------|------|
| **移動** | `app/page.tsx` → `app/(marketing)/page.tsx` | トップページ |
| **新規** | `app/(marketing)/layout.tsx` | Header/Footer付きレイアウト |
| **新規** | `app/(marketing)/guide/page.tsx` | ガイドページ |
| **新規** | `app/(marketing)/faq/page.tsx` | FAQページ |
| **新規** | `src/components/features/guide/GuidePage/index.tsx` | ガイドコンテンツ |
| **新規** | `src/components/features/guide/DemoWrapper/index.tsx` | デモ用ラッパー |
| **新規** | `src/components/features/faq/FAQPage/index.tsx` | FAQコンテンツ |
| **新規** | `src/components/features/common/Header/index.tsx` | ヘッダー |
| **新規** | `src/components/features/common/Footer/index.tsx` | フッター |
| **更新** | `app/layout.tsx` | 構造化データ追加 |
| **更新** | `app/sitemap.ts` | ページ追加 |

---

## 🔗 参照ファイル一覧

### 既存コンポーネント（デモ表示用）
| ファイル | 用途 |
|---------|------|
| `src/components/features/lobby/RoomInfo/index.tsx` | ルーム情報デモ |
| `src/components/features/lobby/RoomInfo/index.stories.tsx` | モックデータ参照 |
| `src/components/features/lobby/ParticipantsList/index.tsx` | 参加者一覧デモ |
| `src/components/features/lobby/ParticipantsList/index.stories.tsx` | モックデータ参照 |
| `src/components/features/draft/CurrentRoundStatus/index.tsx` | ラウンド状況デモ |
| `src/components/features/draft/CurrentRoundStatus/index.stories.tsx` | モックデータ参照 |
| `src/components/features/draft/PastDraftResults/index.tsx` | 過去結果デモ |
| `src/components/features/draft/PastDraftResults/index.stories.tsx` | モックデータ参照 |
| `src/components/features/draft/ChatMessageList/index.tsx` | チャットデモ |
| `src/components/features/draft/ChatMessageList/index.stories.tsx` | モックデータ参照 |

### SEO関連（更新対象）
| ファイル | 用途 |
|---------|------|
| `app/layout.tsx` | メタデータ、構造化データ |
| `app/sitemap.ts` | サイトマップ |
| `public/robots.txt` | 確認のみ（変更不要） |

### 既存FAQ参照
| ファイル | 用途 |
|---------|------|
| `src/components/features/top/FAQSection/index.tsx` | 既存FAQ内容の参照 |

### Jotai Atom（デモ表示用）
| ファイル | 用途 |
|---------|------|
| `src/store/jotai/users.ts` | usersAtom |
| `src/store/jotai/selections.ts` | selectionsAtom |
| `src/store/jotai/group.ts` | groupAtom |
| `src/store/jotai/chats.ts` | chatsAtom |
| `src/store/jotai/currentUserId.ts` | currentUserIdAtom |

---

## 📊 狙えるキーワード

### /guide
- 「オンラインドラフト 使い方」
- 「ドラフト会議 やり方」
- 「ドラフト会議 オンライン ルール」
- 「ドラフト会議 友達と」

### /faq
- 「ドラフト会議 とは」
- 「ドラフト会議 何人から」
- 「オンラインドラフト 無料」
- 「ドラフト会議 アプリ」

---

## ✅ 実装順序

1. **Phase 1**: 基盤整備（canonical URL、デモラッパー）
2. **Phase 2**: ガイドページ作成
3. **Phase 3**: FAQページ作成
4. **Phase 4**: ナビゲーション追加
5. **Phase 5**: SEO技術対策（sitemap、構造化データ）
6. **最終確認**: CI実行（test, storybook:test-ci, lint, type-check）

---

## 📈 期待される効果

| 指標 | 現状 | 目標 |
|-----|------|------|
| インデックスページ数 | 1 | 3 |
| 狙えるキーワード数 | 3-5 | 15-20 |
| サイトリンク表示 | なし | あり |
| Organic Search流入 | 188/月 | 500+/月 |
