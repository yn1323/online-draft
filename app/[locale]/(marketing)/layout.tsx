'use client';

import { Box } from '@chakra-ui/react';
import { usePathname } from '@/src/i18n/navigation';
import type { ReactNode } from 'react';

import { Footer } from '@/src/components/features/common/Footer';
import { Header } from '@/src/components/features/common/Header';

type MarketingLayoutProps = {
  children: ReactNode;
};

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  const pathname = usePathname();
  const isTopPage = pathname === '/';

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex={1}>
        {children}
      </Box>
      {!isTopPage && <Footer />}
    </Box>
  );
};

export default MarketingLayout;
