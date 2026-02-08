import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title:
    'よくある質問（FAQ） | なんでもドラフト - オンラインドラフト会議ツール',
  description:
    'なんでもドラフトのよくある質問。登録不要・完全無料のオンラインドラフト会議ツール。2〜8人対応、スマホ・PCブラウザだけで遊べます。料金・使い方・ルーム参加方法などを解説。',
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqLayout({ children }: { children: ReactNode }) {
  return children;
}

export const runtime = 'edge';
