import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://online-draft.pages.dev/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
