'use client';

import { useAuth } from '@/src/hooks/useAuth';

type AuthProviderProps = {
  children: React.ReactNode;
};

/**
 * 認証状態の初期化を行うProvider
 * アプリの最上位で使用して、認証状態の監視を開始します
 */
export function AuthProvider({ children }: AuthProviderProps) {
  // useAuthを呼び出すことで認証状態の監視が開始される
  useAuth();

  return <>{children}</>;
}
