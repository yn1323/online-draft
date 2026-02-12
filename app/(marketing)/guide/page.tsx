'use client';

import {
  GuidePage,
  GUIDE_STEPS,
} from '@/src/components/features/guide/GuidePage';

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'オンラインドラフト会議の始め方',
  description:
    'みんなでドラフトを使ったオンラインドラフト会議の始め方を3ステップで解説',
  step: GUIDE_STEPS.map((step) => ({
    '@type': 'HowToStep',
    name: step.title,
    text: step.description,
  })),
};

const Page = () => {
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
};

export default Page;
