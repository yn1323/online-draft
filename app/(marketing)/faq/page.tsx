import { FAQPage, FAQ_CATEGORIES } from '@/src/components/features/faq/FAQPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'よくある質問（FAQ） | なんでもドラフト - オンラインドラフト会議ツール',
  description:
    'なんでもドラフトのよくある質問。登録不要・完全無料のオンラインドラフト会議ツール。2〜8人対応、スマホ・PCブラウザだけで遊べます。料金・使い方・ルーム参加方法などを解説。',
  alternates: {
    canonical: '/faq',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  ),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <FAQPage />
    </>
  );
}

export const runtime = 'edge';
