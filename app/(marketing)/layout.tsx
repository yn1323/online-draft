'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Footer } from '@/src/components/features/common/Footer';
import { Header } from '@/src/components/features/common/Header';

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
