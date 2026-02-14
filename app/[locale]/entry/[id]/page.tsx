import { LobbyPage } from '@/src/components/features/lobby/LobbyPage';
import { Animation } from '@/src/components/templates/Animation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

type PageProps = {
  params: Promise<{
    id: string;
    locale: string;
  }>;
};

type PageInnerProps = {
  id: string;
};

const PageInner = ({ id }: PageInnerProps) => {
  return (
    <Animation>
      <LobbyPage groupId={id} />
    </Animation>
  );
};

const Page = async ({ params }: PageProps) => {
  const { id, locale } = await params;
  setRequestLocale(locale);

  return <PageInner id={id} />;
};

export default Page;

export const runtime = 'edge';
