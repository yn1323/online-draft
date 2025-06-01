import { Animation } from '@/src/components/templates/Animation';
import { TopPage } from '@/src/components/features/top';

export const metadata = {
  title: 'オンラインドラフト - 推しを選んで、かぶったら勝負！',
};

export default function Page() {
  return (
    <Animation>
      <TopPage />
    </Animation>
  );
}
