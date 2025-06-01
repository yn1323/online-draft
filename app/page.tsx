import { Animation } from '@/src/components/templates/Animation';
import Link from 'next/link';

export const metadata = {
  title: 'YPS-Polar',
};

export default async function Page() {
  return (
    <Animation>
      <h1 className="border text-gray-500">online-draft</h1>
      <Link href="/signin">ログイン</Link>
    </Animation>
  );
}
