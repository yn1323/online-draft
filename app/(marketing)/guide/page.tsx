import { GuidePage } from '@/src/components/features/guide/GuidePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '使い方ガイド | なんでもドラフト',
  description:
    'なんでもドラフトの使い方を解説。ルーム作成から友達招待、ドラフト実行まで3ステップで簡単！',
  alternates: {
    canonical: '/guide',
  },
};

export default function Page() {
  return <GuidePage />;
}

export const runtime = 'edge';
