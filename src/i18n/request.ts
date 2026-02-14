import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: {
      common: (await import(`../../messages/${locale}/common.json`)).default,
      top: (await import(`../../messages/${locale}/top.json`)).default,
      guide: (await import(`../../messages/${locale}/guide.json`)).default,
      faq: (await import(`../../messages/${locale}/faq.json`)).default,
      lobby: (await import(`../../messages/${locale}/lobby.json`)).default,
      draft: (await import(`../../messages/${locale}/draft.json`)).default,
      metadata: (await import(`../../messages/${locale}/metadata.json`))
        .default,
    },
  };
});
