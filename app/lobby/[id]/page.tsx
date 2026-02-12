import { LobbyPage } from '@/src/components/features/lobby/LobbyPage';
import { getGroupNameFromRest } from '@/src/lib/firestore-rest';
import { Animation } from '@/src/components/templates/Animation';
import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
  const groupName = await getGroupNameFromRest(id);

  return {
    robots: { index: false, follow: false },
    title: groupName ? `${groupName} | みんなでドラフト` : 'みんなでドラフト',
    openGraph: {
      title: groupName || 'みんなでドラフト',
      description: '推しを選んで、かぶったら勝負！',
    },
  };
};

type PageInnerProps = {
  id: string;
};

function PageInner({ id }: PageInnerProps) {
  return (
    <Animation>
      <LobbyPage groupId={id} />
    </Animation>
  );
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <PageInner id={id} />;
}

export const runtime = 'edge';
