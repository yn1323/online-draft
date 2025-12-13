# AIO（AI Overview最適化）実装ガイド

## 概要

このドキュメントは「なんでもドラフト」のAIO（AI Overview最適化）対策の実装内容をまとめたものです。

GoogleのAI Search OptimizationでサービスがAI検索結果に引っかかりやすくなることを目的としています。

---

## 実装内容サマリ

### Phase 1: 基盤整備

| 項目 | 内容 | ファイル |
|------|------|----------|
| サービス名変更 | 「オンラインドラフト」→「なんでもドラフト」 | `app/layout.tsx`, `app/page.tsx` |
| OGP設定 | Open Graph / Twitter Card | `app/layout.tsx` |
| robots.txt | クローラー制御 | `public/robots.txt` |
| sitemap.xml | サイトマップ生成 | `app/sitemap.ts` |

### Phase 2: 構造化データ

| 項目 | Schema.org Type | ファイル |
|------|----------------|----------|
| サービス情報 | WebApplication | `app/layout.tsx` |
| よくある質問 | FAQPage | `src/components/features/top/FAQSection/index.tsx` |
| 使い方 | HowTo | `src/components/features/top/HowToUseSection/index.tsx` |

### Phase 3: インデックス制御

| 項目 | 設定 | ファイル |
|------|------|----------|
| /draft/[id] | noindex | `app/draft/[id]/page.tsx` |
| /lobby/[id] | noindex | `app/lobby/[id]/page.tsx` |
| /entry/[id] | noindex | `app/entry/[id]/page.tsx` |

### Phase 4: コンテンツ最適化

| 項目 | 内容 | ファイル |
|------|------|----------|
| HeroSection | タイトル・テキスト更新 | `src/components/features/top/HeroSection/index.tsx` |

---

## 構造化データ詳細

### WebApplication JSON-LD

サービス全体の情報をAIに伝えるための構造化データ。

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "なんでもドラフト",
  "description": "野球・アニメ・音楽...何でもドラフト会議！登録不要・完全無料",
  "url": "https://online-draft.vercel.app",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "featureList": [
    "2〜8人対応",
    "登録不要",
    "完全無料",
    "リアルタイム同期",
    "スマホ対応"
  ]
}
```

**効果**: AIがサービスの特徴を正確に認識し、関連する検索クエリで表示されやすくなる。

---

### FAQPage JSON-LD

よくある質問をAIに伝える構造化データ。Google検索結果にリッチスニペットとして表示される可能性がある。

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "なんでもドラフトとは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "野球・アニメ・音楽など、何でもドラフト会議ができる無料オンラインツールです。"
      }
    }
  ]
}
```

**効果**: FAQ系の検索クエリで引っかかりやすくなる。

---

### HowTo JSON-LD

使い方の手順をAIに伝える構造化データ。

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "なんでもドラフトの使い方",
  "step": [
    {
      "@type": "HowToStep",
      "name": "ルームを作成",
      "text": "「ルームを作成」ボタンをクリック"
    }
  ]
}
```

**効果**: 「〇〇のやり方」系の検索クエリで表示されやすくなる。

---

## メタデータ設定

### OGP（Open Graph Protocol）

SNSでシェアされた際に表示される情報。

| プロパティ | 値 |
|-----------|-----|
| og:title | なんでもドラフト |
| og:description | 野球・アニメ・音楽...何でもドラフト会議！登録不要・完全無料 |
| og:image | /img/logo/og.png |
| og:type | website |
| og:locale | ja_JP |

### Twitter Card

| プロパティ | 値 |
|-----------|-----|
| twitter:card | summary_large_image |
| twitter:title | なんでもドラフト |
| twitter:description | 野球・アニメ・音楽...何でもドラフト会議！登録不要・完全無料 |
| twitter:image | /img/logo/og.png |

---

## robots.txt

```txt
User-agent: *
Allow: /

# 動的ページはクロール不要
Disallow: /draft/
Disallow: /lobby/
Disallow: /entry/

Sitemap: https://online-draft.vercel.app/sitemap.xml
```

**ポイント**:
- トップページはクロール許可
- 動的ページ（ルーム等）はクロール禁止
- sitemapの場所を明示

---

## sitemap.xml

Next.jsの `app/sitemap.ts` で自動生成。

```typescript
const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://online-draft.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
};
```

---

## 検証方法

### 1. Google Rich Results Test

[https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)

構造化データが正しく認識されているかテスト。

### 2. OGP確認ツール

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 3. Google Search Console

インデックス状況やエラーを確認。

---

## 今後の改善ポイント

1. **BreadcrumbList JSON-LD**: パンくずリストの構造化データ追加
2. **Organization JSON-LD**: 組織情報の追加（個人開発なので任意）
3. **コンテンツ拡充**: ブログ記事やユースケース紹介ページの追加
4. **パフォーマンス改善**: Core Web Vitalsの最適化

---

## 参考資料

- [AIO対策ガイド](https://www.r-co.jp/web-marketing/19563/)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org WebApplication](https://schema.org/WebApplication)
- [Schema.org FAQPage](https://schema.org/FAQPage)
- [Schema.org HowTo](https://schema.org/HowTo)
- [Google構造化データガイド](https://developers.google.com/search/docs/appearance/structured-data)
