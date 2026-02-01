import { Provider } from '@/src/components/ui/provider';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const BASE_URL = 'https://online-draft.vercel.app';

const webApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'なんでもドラフト',
  description: '野球・アニメ・音楽...何でもドラフト会議！登録不要・完全無料',
  url: BASE_URL,
  applicationCategory: 'GameApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'JPY',
  },
  featureList: [
    '2〜8人対応',
    '登録不要',
    '完全無料',
    'リアルタイム同期',
    'スマホ対応',
  ],
};

const siteNavigationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: '使い方ガイド',
      url: `${BASE_URL}/guide`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'よくある質問',
      url: `${BASE_URL}/faq`,
    },
  ],
};

export const metadata: Metadata = {
  title: 'なんでもドラフト | 登録不要・無料のオンラインドラフト会議',
  description: '野球・アニメ・音楽...何でもドラフト会議！登録不要・完全無料',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'なんでもドラフト',
    description: '野球・アニメ・音楽...何でもドラフト会議！登録不要・完全無料',
    url: BASE_URL,
    siteName: 'なんでもドラフト',
    images: [{ url: '/img/logo/og.png', width: 600, height: 600 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'なんでもドラフト',
    description: '野球・アニメ・音楽...何でもドラフト会議！登録不要・完全無料',
    images: ['/img/logo/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ''} />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webApplicationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteNavigationJsonLd),
          }}
        />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export const runtime = 'edge';
