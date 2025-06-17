'use client';

import { Button } from '@/src/components/atoms/Button';

type LobbyActionsProps = {
  onLeaveRoom: () => void;
};

/**
 * ロビーアクションコンポーネント
 * 退室ボタンやその他のアクション機能を提供
 */
export const LobbyActions = ({ onLeaveRoom }: LobbyActionsProps) => {
  return (
    <Button variant="outline" size="sm" onClick={onLeaveRoom}>
      ルームを退出
    </Button>
  );
};
