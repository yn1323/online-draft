import { useState, useCallback } from 'react';

/**
 * ステップナビゲーションフック
 */
export type LobbyStep = 'user-select' | 'user-create' | 'waiting' | 'ready';

export interface StepNavigation {
  currentStep: LobbyStep;
  canGoNext: boolean;
  canGoPrev: boolean;
}

export const useStepNavigation = (initialStep: LobbyStep = 'user-select') => {
  const [currentStep, setCurrentStep] = useState<LobbyStep>(initialStep);

  const stepOrder: LobbyStep[] = ['user-select', 'user-create', 'waiting', 'ready'];

  const getCurrentStepIndex = useCallback(() => {
    return stepOrder.indexOf(currentStep);
  }, [currentStep]);

  const canGoNext = useCallback(() => {
    const currentIndex = getCurrentStepIndex();
    return currentIndex < stepOrder.length - 1;
  }, [getCurrentStepIndex]);

  const canGoPrev = useCallback(() => {
    const currentIndex = getCurrentStepIndex();
    return currentIndex > 0;
  }, [getCurrentStepIndex]);

  const goNext = useCallback(() => {
    if (canGoNext()) {
      const currentIndex = getCurrentStepIndex();
      setCurrentStep(stepOrder[currentIndex + 1]);
      return true;
    }
    return false;
  }, [canGoNext, getCurrentStepIndex]);

  const goPrev = useCallback(() => {
    if (canGoPrev()) {
      const currentIndex = getCurrentStepIndex();
      setCurrentStep(stepOrder[currentIndex - 1]);
      return true;
    }
    return false;
  }, [canGoPrev, getCurrentStepIndex]);

  const goToStep = useCallback((step: LobbyStep) => {
    if (stepOrder.includes(step)) {
      setCurrentStep(step);
      return true;
    }
    return false;
  }, []);

  const getStepProgress = useCallback(() => {
    const currentIndex = getCurrentStepIndex();
    const totalSteps = stepOrder.length;
    return {
      current: currentIndex + 1,
      total: totalSteps,
      percentage: ((currentIndex + 1) / totalSteps) * 100,
    };
  }, [getCurrentStepIndex]);

  return {
    currentStep,
    canGoNext: canGoNext(),
    canGoPrev: canGoPrev(),
    goNext,
    goPrev,
    goToStep,
    getStepProgress,
    setCurrentStep,
  };
};