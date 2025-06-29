import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import type { NextConfig } from 'next';

// 開発環境での初期化
if (process.env.NODE_ENV === 'development') {
  await initOpenNextCloudflareForDev();
}

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  
  images: {
    unoptimized: true
  }
  
  // distDir等の設定は不要（OpenNEXTが管理）
};

export default nextConfig;