import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

type FaqLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: FaqLayoutProps): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('faq.title'),
    description: t('faq.description'),
    alternates: {
      canonical: locale === 'ja' ? '/faq' : '/en/faq',
      languages: {
        ja: '/faq',
        en: '/en/faq',
      },
    },
  };
};

const FaqLayout = async ({ children, params }: FaqLayoutProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return children;
};

export default FaqLayout;

export const runtime = 'edge';
