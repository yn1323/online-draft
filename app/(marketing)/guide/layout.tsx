import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '使い方ガイド | なんでもドラフト - 無料オンラインドラフト会議の遊び方',
  description:
    'なんでもドラフトの使い方・遊び方ガイド。登録不要・完全無料のオンラインドラフト会議ツール。ルーム作成→友達招待→ドラフト開始の3ステップで簡単！野球・アニメ・音楽など何でもOK。',
  alternates: {
    canonical: '/guide',
  },
};

export default function GuideLayout({ children }: { children: ReactNode }) {
  return children;
}

export const runtime = 'edge';
