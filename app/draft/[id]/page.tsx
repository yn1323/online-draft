import { DraftAuthGuard } from '@/src/components/features/draft/DraftAuthGuard';
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
      <DraftAuthGuard groupId={resolvedParams.id}>
        <DraftPage groupId={resolvedParams.id} />
      </DraftAuthGuard>
    </Animation>
  );
}
