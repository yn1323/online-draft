import { LobbyPage } from '@/src/components/features/lobby/LobbyPage';
import { Animation } from '@/src/components/templates/Animation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface PageInnerProps {
  id: string;
}

function PageInner({ id }: PageInnerProps) {
  // IDパラメータの利用は後の実装で追加予定
  console.log('Lobby ID:', id);
  return (
    <Animation>
      <LobbyPage />
    </Animation>
  );
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <PageInner id={id} />;
}
