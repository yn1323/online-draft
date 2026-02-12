import { TopPage } from '@/src/components/features/top/TopPage';
import { Animation } from '@/src/components/templates/Animation';

export const metadata = {
  title: 'みんなでドラフト | 登録不要・無料のオンラインドラフト会議',
  description: '野球・アニメ・音楽...何でもドラフト会議！登録不要・完全無料',
};

export default function Page() {
  return (
    <Animation>
      <TopPage />
    </Animation>
  );
}
export const runtime = 'edge';
