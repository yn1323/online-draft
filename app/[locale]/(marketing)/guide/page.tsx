'use client';

import { GuidePage } from '@/src/components/features/guide/GuidePage';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('guide');
  const steps = t.raw('steps') as Array<{ title: string; description: string }>;

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t('stepsHeading'),
    description: t('pageSubtitle'),
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line -- JSON-LD from our translation files (safe)
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToJsonLd),
        }}
      />
      <GuidePage />
    </>
  );
};

export default Page;
