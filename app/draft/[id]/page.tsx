import { DraftPage } from '@/src/components/features/draft/DraftPage';
import { Animation } from '@/src/components/templates/Animation';

interface DraftPageRouteProps {
  params: {
    id: string;
  };
}

export default function DraftPageRoute({ params }: DraftPageRouteProps) {
  return (
    <Animation>
      <DraftPage groupId={params.id} />
    </Animation>
  );
}
