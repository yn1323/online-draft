'use client';

import { useState } from 'react';
import type { SelectionDataType } from './useSelection';

/**
 * リアルタイム選択監視フック
 * ドラフト選択のリアルタイム監視（将来実装）
 */
export const useRealtimeSelection = (_groupId: string | null) => {
  const [selections, _setSelections] = useState<SelectionDataType[]>([]);
  const [loading, _setLoading] = useState(true);
  const [error, _setError] = useState<Error | null>(null);

  // TODO: Phase D で実装予定
  // useEffect(() => {
  //   if (!groupId) {
  //     setSelections([]);
  //     setLoading(false);
  //     return;
  //   }
  //   // リアルタイム監視の実装
  // }, [groupId]);

  return { selections, loading, error };
};