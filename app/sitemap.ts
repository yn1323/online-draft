import type { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/src/i18n/config';

const BASE_URL = 'https://online-draft.vercel.app';

const getLocalePath = (locale: string, path: string) => {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${BASE_URL}${prefix}${path}`;
};

const sitemap = (): MetadataRoute.Sitemap => {
  const pages = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/guide', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/faq', changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: getLocalePath(locale, page.path),
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, getLocalePath(l, page.path)]),
        ),
      },
    })),
  );
};

export default sitemap;
