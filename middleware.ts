import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from '@/src/i18n/config';
import { routing } from '@/src/i18n/routing';

const handleI18nRouting = createMiddleware(routing);

const detectPreferredLocale = (request: NextRequest) => {
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale as (typeof locales)[number])) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get('accept-language')?.toLowerCase() ?? '';
  return acceptLanguage.includes('en') ? 'en' : defaultLocale;
};

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Keep automatic locale detection only on top page.
  if (pathname === '/') {
    const preferredLocale = detectPreferredLocale(request);
    if (preferredLocale !== defaultLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/${preferredLocale}`;
      return NextResponse.redirect(url);
    }
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|icon|apple-icon|favicon\\.ico|.*\\..*).*)'],
};
