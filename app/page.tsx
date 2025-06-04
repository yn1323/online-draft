import { TopPage } from '@/src/components/features/top';
import { Animation } from '@/src/components/templates/Animation';

export const metadata = {
  title: 'オンラインドラフト - みんなでドラフト会議',
};

export default function Page() {
  return (
    <Animation>
      <TopPage />
    </Animation>
  );
}
