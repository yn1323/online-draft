import { TopPage } from '@/src/components/features/top/TopPage';
import { Animation } from '@/src/components/templates/Animation';
import { setRequestLocale } from 'next-intl/server';

type PageProps = {
  params: Promise<{ locale: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Animation>
      <TopPage />
    </Animation>
  );
};

export default Page;
export const runtime = 'edge';
