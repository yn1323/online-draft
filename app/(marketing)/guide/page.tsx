import {
  GuidePage,
  GUIDE_STEPS,
} from '@/src/components/features/guide/GuidePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    '使い方ガイド | なんでもドラフト - 無料オンラインドラフト会議の遊び方',
  description:
    'なんでもドラフトの使い方・遊び方ガイド。登録不要・完全無料のオンラインドラフト会議ツール。ルーム作成→友達招待→ドラフト開始の3ステップで簡単！野球・アニメ・音楽など何でもOK。',
  alternates: {
    canonical: '/guide',
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'オンラインドラフト会議の始め方',
  description:
    'なんでもドラフトを使ったオンラインドラフト会議の始め方を3ステップで解説',
  step: GUIDE_STEPS.map((step) => ({
    '@type': 'HowToStep',
    name: step.title,
    text: step.description,
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToJsonLd),
        }}
      />
      <GuidePage />
    </>
  );
}

export const runtime = 'edge';
