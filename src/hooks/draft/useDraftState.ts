import { useState, useCallback } from 'react';

/**
 * ドラフト状態管理フック
 */
export interface DraftState {
  roundNumber: number;
  totalRounds: number;
  currentUserSelection: string;
  selection: string;
  comment: string;
}

export const useDraftState = (initialState?: Partial<DraftState>) => {
  const [state, setState] = useState<DraftState>({
    roundNumber: 1,
    totalRounds: 5,
    currentUserSelection: '',
    selection: '',
    comment: '',
    ...initialState,
  });

  const updateSelection = useCallback((selection: string, comment?: string) => {
    setState(prev => ({
      ...prev,
      selection,
      comment: comment || '',
      currentUserSelection: selection,
    }));
  }, []);

  const nextRound = useCallback(() => {
    setState(prev => ({
      ...prev,
      roundNumber: Math.min(prev.roundNumber + 1, prev.totalRounds),
      selection: '',
      comment: '',
    }));
  }, []);

  const resetSelection = useCallback(() => {
    setState(prev => ({
      ...prev,
      selection: '',
      comment: '',
    }));
  }, []);

  return {
    ...state,
    setState,
    updateSelection,
    nextRound,
    resetSelection,
  };
};