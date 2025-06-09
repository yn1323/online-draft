export const getEnv = () => {
  return {
    NEXT_PUBLIC_IS_LOCAL: process.env.NEXT_PUBLIC_IS_LOCAL === 'true',
    IS_LOCAL: process.env.IS_LOCAL === 'true',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
  };
};

/**
 * Storybook環境かどうかを判定する
 * @returns Storybook環境の場合はtrue
 */
export const isStorybookEnvironment = (): boolean => {
  return process.env.NEXT_PUBLIC_STORYBOOK_ACCESS === 'true';
};

/**
 * 開発環境かどうかを判定する
 * @returns 開発環境の場合はtrue
 */
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

/**
 * 本番環境かどうかを判定する
 * @returns 本番環境の場合はtrue
 */
export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};

/**
 * テスト環境かどうかを判定する
 * @returns テスト環境の場合はtrue
 */
export const isTest = (): boolean => {
  return process.env.NODE_ENV === 'test';
};
