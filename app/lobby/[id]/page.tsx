import LobbyPage from '@/src/components/features/lobby';
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
