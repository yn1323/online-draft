import EntryPage from "@/src/components/features/entry";
import { Animation } from "@/src/components/templates/Animation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface PageInnerProps {
  id: string;
  groupName: string;
}

function PageInner({ id, groupName }: PageInnerProps) {
  return (
    <Animation>
      <EntryPage groupId={id} groupName={groupName} />
    </Animation>
  );
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  // TODO: Firebase からグループ情報を取得
  const groupName = "オンラインドラフト会議"; // 仮のグループ名

  return <PageInner id={id} groupName={groupName} />;
}