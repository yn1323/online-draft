'use client';

import { FloatingActionButton } from '../FloatingActionButton';

interface ConditionalFloatingButtonProps {
  activeTab: 'rounds' | 'chat';
  onClick: () => void;
}

export const ConditionalFloatingButton = ({ 
  activeTab, 
  onClick 
}: ConditionalFloatingButtonProps) => {
  // ログタブでは表示しない
  if (activeTab === 'chat') {
    return null;
  }

  return <FloatingActionButton onClick={onClick} />;
};