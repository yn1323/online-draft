import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },

  // 画像最適化（Cloudflareで使用する場合）
  images: {
    unoptimized: true,
  },
  // キャッシュディレクトリを変更してCloudflareのサイズ制限を回避
  distDir: 'build',
  // 本番ビルドでのキャッシュ最適化
  generateBuildId: () => 'build',
};

export default nextConfig;
