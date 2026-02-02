import { FAQPage, faqJsonLd } from '@/src/components/features/faq/FAQPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'よくある質問（FAQ） | なんでもドラフト',
  description:
    'なんでもドラフトのよくある質問。登録不要・完全無料で2〜8人で遊べます。',
  alternates: {
    canonical: '/faq',
  },
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
