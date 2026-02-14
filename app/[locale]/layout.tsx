import { Provider } from '@/src/components/ui/provider';
import { routing } from '@/src/i18n/routing';
import { GoogleTagManager } from '@next/third-parties/google';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { hasLocale } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://online-draft.vercel.app';

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: LocaleLayoutProps): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('home.title'),
    description: t('home.description'),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: locale === 'ja' ? '/' : '/en',
      languages: {
        ja: '/',
        en: '/en',
      },
    },
    openGraph: {
      title: t('home.ogTitle'),
      description: t('home.ogDescription'),
      url: BASE_URL,
      siteName: t('home.ogTitle'),
      images: [{ url: '/img/logo/og.png', width: 600, height: 600 }],
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.ogTitle'),
      description: t('home.ogDescription'),
      images: ['/img/logo/og.png'],
    },
  };
};

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'metadata' });

  // JSON-LD: 翻訳データは自身の管理下にあるため安全
  const webApplicationJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t('jsonLd.appName'),
    description: t('jsonLd.appDescription'),
    url: BASE_URL,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: locale === 'ja' ? 'JPY' : 'USD',
    },
    featureList: t.raw('jsonLd.featureList') as string[],
  });

  const siteNavigationJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: t('jsonLd.navGuide'),
        url: locale === 'ja' ? `${BASE_URL}/guide` : `${BASE_URL}/en/guide`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: t('jsonLd.navFaq'),
        url: locale === 'ja' ? `${BASE_URL}/faq` : `${BASE_URL}/en/faq`,
      },
    ],
  });

  return (
    <html lang={locale} suppressHydrationWarning>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ''} />
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line -- JSON-LD structured data from our own translation files
          dangerouslySetInnerHTML={{ __html: webApplicationJsonLd }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line -- JSON-LD structured data from our own translation files
          dangerouslySetInnerHTML={{ __html: siteNavigationJsonLd }}
        />
        <NextIntlClientProvider messages={messages}>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;

export const runtime = 'edge';
