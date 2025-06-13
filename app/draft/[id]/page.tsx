import { DraftPage } from '@/src/components/features/draft/DraftPage';
import { Animation } from '@/src/components/templates/Animation';

interface DraftPageRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DraftPageRoute({ params }: DraftPageRouteProps) {
  const resolvedParams = await params;
  return (
    <Animation>
      <DraftPage groupId={resolvedParams.id} />
    </Animation>
  );
}
