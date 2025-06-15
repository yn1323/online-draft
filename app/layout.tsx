import { ThemeToggle } from '@/src/components/layout/ThemeToggle';
import { Provider } from '@/src/components/ui/provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'オンラインドラフト',
  description: 'オンラインでみんなとドラフト会議',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <ThemeToggle />
          {children}
        </Provider>
      </body>
    </html>
  );
}
