import { FAQPage } from '@/src/components/features/faq/FAQPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'よくある質問（FAQ） | なんでもドラフト',
  description:
    'なんでもドラフトのよくある質問。登録不要・完全無料で2〜8人で遊べます。',
  alternates: {
    canonical: '/faq',
  },
};

const FAQ_ITEMS = [
  {
    question: '登録は必要ですか？',
    answer: 'いいえ、登録不要です！URLにアクセスするだけで今すぐ遊べます。',
  },
  {
    question: '料金はかかりますか？',
    answer: '完全無料です！すべての機能を無料で利用できます。',
  },
  { question: '何人で遊べますか？', answer: '2〜8人で遊べます。' },
  {
    question: 'どんなジャンルでドラフトできますか？',
    answer: '野球選手、アニメキャラ、音楽、映画など何でもOK！',
  },
  {
    question: 'ルームに入れないのですが？',
    answer: 'URLまたはルームIDが正しいか確認してください。',
  },
  {
    question: '途中参加できますか？',
    answer: 'はい、ドラフト開始後でも途中参加できます！',
  },
  {
    question: '重複指名ってなんですか？',
    answer:
      '複数人が同じアイテムを指名したときに発生します。ランダム抽選で勝者が決まります。',
  },
  {
    question: 'スマホでも使えますか？',
    answer: 'はい、スマホ・タブレット・PCすべて対応しています！',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
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
