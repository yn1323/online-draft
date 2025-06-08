import { useState, useCallback } from 'react';

/**
 * ラウンド管理フック
 */
export interface Round {
  roundNumber: number;
  topic: string;
  selections: {
    userId: string;
    userName: string;
    item: string;
    comment?: string;
  }[];
}

export const useRoundManagement = (initialRounds: Round[] = []) => {
  const [rounds, setRounds] = useState<Round[]>(initialRounds);
  const [currentRound, setCurrentRound] = useState(1);

  const addRound = useCallback((round: Round) => {
    setRounds(prev => [...prev, round]);
  }, []);

  const updateRound = useCallback((roundNumber: number, updates: Partial<Round>) => {
    setRounds(prev => 
      prev.map(round => 
        round.roundNumber === roundNumber 
          ? { ...round, ...updates }
          : round
      )
    );
  }, []);

  const updateUserSelection = useCallback((
    roundNumber: number, 
    userId: string, 
    selection: { item: string; comment?: string }
  ) => {
    setRounds(prev => 
      prev.map(round => {
        if (round.roundNumber === roundNumber) {
          const updatedSelections = round.selections.map(sel => 
            sel.userId === userId 
              ? { ...sel, item: selection.item, comment: selection.comment }
              : sel
          );
          return { ...round, selections: updatedSelections };
        }
        return round;
      })
    );
  }, []);

  const getRound = useCallback((roundNumber: number) => {
    return rounds.find(round => round.roundNumber === roundNumber);
  }, [rounds]);

  const getCurrentRound = useCallback(() => {
    return getRound(currentRound);
  }, [getRound, currentRound]);

  return {
    rounds,
    currentRound,
    setCurrentRound,
    addRound,
    updateRound,
    updateUserSelection,
    getRound,
    getCurrentRound,
  };
};