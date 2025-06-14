import { DraftPage } from '@/src/components/features/draft/DraftPage/sp';
import { Animation } from '@/src/components/templates/Animation';

interface DraftPageRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DraftPageRoute({ params }: DraftPageRouteProps) {
  await params; // パラメータの取得（現在は未使用）
  return (
    <Animation>
      <DraftPage />
    </Animation>
  );
}
