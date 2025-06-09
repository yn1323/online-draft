import { Button, VStack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { UserRoundDetailModal } from './index';

const meta: Meta<typeof UserRoundDetailModal> = {
  title: 'Features/Draft/UserRoundDetailModal',
  component: UserRoundDetailModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ラウンド×ユーザー単位で選択内容を表示・編集するモーダル',
      },
    },
  },
  argTypes: {
    onSaveSelection: { action: 'save selection' },
    onClose: { action: 'close' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// プロップスの型定義
interface WrapperProps {
  isOpen?: boolean;
  roundNumber: number;
  participant: {
    id: string;
    name: string;
    avatar: string;
  };
  initialSelection?: {
    userId: string;
    userName: string;
    item: string;
    comment?: string;
  };
  onSaveSelection?: (
    roundNumber: number,
    selection: {
      userId: string;
      userName: string;
      item: string;
      comment?: string;
    },
  ) => void;
}

// 基本的なコンポーネント（ラッパー）
const UserRoundDetailModalWrapper = (args: WrapperProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  return (
    <VStack gap={4}>
      <Button onClick={() => setIsOpen(true)}>モーダルを開く</Button>
      <UserRoundDetailModal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSaveSelection={(roundNumber, selection) => {
          console.log('保存:', { roundNumber, selection });
          args.onSaveSelection?.(roundNumber, selection);
          setIsOpen(false);
        }}
      />
    </VStack>
  );
};

// サンプル参加者
const sampleParticipant = {
  id: 'user1',
  name: '田中太郎',
  avatar: '1',
};

export const Default: Story = {
  render: (args) => <UserRoundDetailModalWrapper {...(args as WrapperProps)} />,
  args: {
    roundNumber: 3,
    participant: sampleParticipant,
    initialSelection: {
      userId: 'user1',
      userName: '田中太郎',
      item: 'ポケモン',
      comment: '昔からやってて思い入れがあります',
    },
  },
};

export const EmptySelection: Story = {
  render: (args) => <UserRoundDetailModalWrapper {...(args as WrapperProps)} />,
  args: {
    roundNumber: 1,
    participant: sampleParticipant,
    initialSelection: undefined,
  },
};

export const LongContent: Story = {
  render: (args) => <UserRoundDetailModalWrapper {...(args as WrapperProps)} />,
  args: {
    roundNumber: 5,
    participant: {
      id: 'user2',
      name: '佐藤花子',
      avatar: '2',
    },
    initialSelection: {
      userId: 'user2',
      userName: '佐藤花子',
      item: '夏目漱石の「こころ」',
      comment:
        '高校生の時に読んで、人間関係の複雑さや心の動きについて深く考えさせられました。特に先生と私の関係性が印象的で、今でも人との関わり方の参考にしています。',
    },
  },
};

export const DifferentAvatar: Story = {
  render: (args) => <UserRoundDetailModalWrapper {...(args as WrapperProps)} />,
  args: {
    roundNumber: 2,
    participant: {
      id: 'user3',
      name: '山田次郎',
      avatar: '3',
    },
    initialSelection: {
      userId: 'user3',
      userName: '山田次郎',
      item: 'スター・ウォーズ',
      comment: 'SFが好き',
    },
  },
};

// 常に開いた状態（開発用）
export const AlwaysOpen: Story = {
  args: {
    isOpen: true,
    roundNumber: 4,
    participant: {
      id: 'user4',
      name: '鈴木美咲',
      avatar: '4',
    },
    initialSelection: {
      userId: 'user4',
      userName: '鈴木美咲',
      item: '読書とカフェ巡り',
      comment: 'のんびり過ごしたい',
    },
  },
};
