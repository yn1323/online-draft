'use client';

import { FAQPage } from '@/src/components/features/faq/FAQPage';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('faq');

  type FaqItem = { question: string; answer: string };
  type FaqCategory = { name: string; items: FaqItem[] };
  const categories = t.raw('categories') as FaqCategory[];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: categories.flatMap((category) =>
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

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line -- JSON-LD from our translation files (safe)
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <FAQPage />
    </>
  );
};

export default Page;
