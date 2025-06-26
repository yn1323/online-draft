import { Box } from '@chakra-ui/react';
import type { BaseParticipant } from '../../../shared/types';
import { CardRevealStage } from './CardRevealStage';
import { SlotMachineStage } from './SlotMachineStage';
import { TypingStage } from './TypingStage';

export type ParticipantResult = BaseParticipant & {
  choice: string;
  willLose: boolean;
};

export type StageProps = {
  variant: 'card' | 'typing' | 'slot';
  participants: ParticipantResult[];
  isRevealing: boolean;
  onStartReveal: () => void;
  onReset: () => void;
};

// 共通のレスポンシブ値
export const getCommonResponsiveValues = () => ({
  gridColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
  cardHeight: { base: '50px', md: '160px' },
  fontSize: { base: 'xs', md: 'sm' },
  avatarSize: { base: 'xs' as const, md: 'sm' as const },
  gap: { base: 2, md: 4 },
  padding: { base: 3, md: 6 },
  minHeight: { base: '350px', md: '400px' },
});

export const Stage = ({
  variant,
  participants,
  isRevealing,
  onStartReveal,
  onReset,
}: StageProps) => {
  return (
    <Box w="full">
      {variant === 'card' && (
        <CardRevealStage
          participants={participants}
          isRevealing={isRevealing}
          onStartReveal={onStartReveal}
          onReset={onReset}
          getCommonResponsiveValues={getCommonResponsiveValues}
        />
      )}
      {variant === 'typing' && (
        <TypingStage
          participants={participants}
          isRevealing={isRevealing}
          onStartReveal={onStartReveal}
          onReset={onReset}
          getCommonResponsiveValues={getCommonResponsiveValues}
        />
      )}
      {variant === 'slot' && (
        <SlotMachineStage
          participants={participants}
          isRevealing={isRevealing}
          onStartReveal={onStartReveal}
          onReset={onReset}
        />
      )}
    </Box>
  );
};

// 分離したコンポーネントを再エクスポート
export { CardRevealStage } from './CardRevealStage';
export { SlotMachineStage } from './SlotMachineStage';
export { TypingStage } from './TypingStage';
