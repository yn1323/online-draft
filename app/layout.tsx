import type { ReactNode } from 'react';

// next-intl の [locale] セグメントがルートレイアウトの役割を担うため、
// ここは最小限のシェルとする
const RootLayout = ({ children }: { children: ReactNode }) => {
  return children;
};

export default RootLayout;
