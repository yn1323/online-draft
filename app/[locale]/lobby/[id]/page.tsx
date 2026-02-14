import { LobbyPage } from '@/src/components/features/lobby/LobbyPage';
import { getGroupNameFromRest } from '@/src/lib/firestore-rest';
import { Animation } from '@/src/components/templates/Animation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{
    id: string;
    locale: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id, locale } = await params;
  const groupName = await getGroupNameFromRest(id);
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    robots: { index: false, follow: false },
    title: groupName
      ? t('lobby.titleTemplate', { groupName })
      : t('lobby.defaultTitle'),
    openGraph: {
      title: groupName || t('lobby.defaultTitle'),
      description: t('lobby.ogDescription'),
    },
  };
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
