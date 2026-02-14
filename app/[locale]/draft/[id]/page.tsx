import { DraftPage } from '@/src/components/features/draft/DraftPage';
import { Animation } from '@/src/components/templates/Animation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

type DraftPageRouteProps = {
  params: Promise<{
    id: string;
    locale: string;
  }>;
};

const DraftPageRoute = async ({ params }: DraftPageRouteProps) => {
  const { id: groupId, locale } = await params;
  setRequestLocale(locale);

  return (
    <Animation>
      <DraftPage groupId={groupId} />
    </Animation>
  );
};

export default DraftPageRoute;

export const runtime = 'edge';
