import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

type GuideLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: GuideLayoutProps): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('guide.title'),
    description: t('guide.description'),
    alternates: {
      canonical: locale === 'ja' ? '/guide' : '/en/guide',
      languages: {
        ja: '/guide',
        en: '/en/guide',
      },
    },
  };
};

const GuideLayout = async ({ children, params }: GuideLayoutProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return children;
};

export default GuideLayout;

export const runtime = 'edge';
