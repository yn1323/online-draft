import { LobbyPage } from '@/src/components/features/lobby/LobbyPage';
import { Animation } from '@/src/components/templates/Animation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface PageInnerProps {
  id: string;
}

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
