import { useState } from 'react';

/**
 * 汎用非同期処理管理カスタムフック
 * loading/error/try-catch-finallyパターンを統一管理
 */
export const useAsyncOperation = <T extends unknown[], R>(
  operation: (...args: T) => Promise<R>,
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = async (...args: T): Promise<R> => {
    setLoading(true);
    setError(null);

    try {
      const result = await operation(...args);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Operation failed';
      setError(errorMessage);
      throw err; // 呼び出し元でcatch可能にする
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    execute,
  };
};
