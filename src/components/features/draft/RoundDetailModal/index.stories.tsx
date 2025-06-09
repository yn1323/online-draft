import { Box, Button } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RoundDetailModal } from './index';

type Story = StoryObj<typeof RoundDetailModal>;

const meta: Meta<typeof RoundDetailModal> = {
  title: 'Features/Draft/RoundDetailModal',
  component: RoundDetailModal,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'モーダルの表示状態',
    },
    onClose: {
      description: 'モーダルを閉じる際のコールバック',
    },
    onSaveSelections: {
      description: '選択内容を保存する際のコールバック',
    },
  },
  tags: ['autodocs'],
};

export default meta;

// モックデータ
const mockParticipants = [
  { id: '1', name: 'あきら', avatar: '1' },
  { id: '2', name: 'さくら', avatar: '2' },
  { id: '3', name: 'ゆうき', avatar: '3' },
  { id: '4', name: 'みお', avatar: '4' },
];

const mockRoundData = {
  roundNumber: 1,
  topic: '好きな動物',
  selections: [
    {
      userId: '1',
      userName: 'あきら',
      item: 'パンダ',
      comment: 'かわいいから！',
    },
    {
      userId: '2',
      userName: 'さくら',
      item: 'うさぎ',
      comment: 'ふわふわで癒される',
    },
    {
      userId: '3',
      userName: 'ゆうき',
      item: 'ライオン',
      comment: 'カッコいいから',
    },
    { userId: '4', userName: 'みお', item: '', comment: '' }, // 未選択のユーザー
  ],
};

const mockRoundDataLongContent = {
  roundNumber: 3,
  topic: '最も印象に残っているアニメ作品',
  selections: [
    {
      userId: '1',
      userName: 'あきら',
      item: '千と千尋の神隠し',
      comment:
        '子供の頃に見て、今でも色褪せない美しい世界観と深いメッセージに感動しました。音楽も素晴らしく、何度見ても新しい発見があります。',
    },
    {
      userId: '2',
      userName: 'さくら',
      item: 'エヴァンゲリオン',
      comment:
        '複雑な心理描写と哲学的なテーマが印象的。大人になってから見返すと、また違った解釈ができて面白いです。',
    },
    {
      userId: '3',
      userName: 'ゆうき',
      item: 'ワンピース',
      comment:
        '友情と冒険の物語として最高。仲間を思う気持ちや夢を追いかける姿勢に何度も勇気をもらいました。',
    },
    {
      userId: '4',
      userName: 'みお',
      item: '君の名は。',
      comment:
        '美しい映像と切ない恋愛ストーリーに心を奪われました。時間と空間を超えた繋がりというテーマが素敵でした。',
    },
  ],
};

// Storybook用のコンポーネント（モーダル制御付き）
interface RoundDetailModalWithControlsProps {
  roundData: {
    roundNumber: number;
    topic: string;
    selections: {
      userId: string;
      userName: string;
      item: string;
      comment?: string;
    }[];
  } | null;
  participants: {
    id: string;
    name: string;
    avatar: string;
  }[];
}

const RoundDetailModalWithControls = ({
  roundData,
  participants,
}: RoundDetailModalWithControlsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setIsOpen(true)} colorPalette="blue">
        ラウンド詳細を開く
      </Button>
      <RoundDetailModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        roundData={roundData}
        participants={participants}
        onSaveSelections={(roundNumber, selections) => {
          console.log('onSaveSelections:', { roundNumber, selections });
        }}
      />
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: mockRoundData,
    participants: mockParticipants,
  },
  parameters: {
    docs: {
      description: {
        story:
          'ラウンド詳細モーダルのデフォルト表示。各参加者の選択とコメントを表示・編集できます。',
      },
    },
  },
};

export const LongContent: Story = {
  render: (args) => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: mockRoundDataLongContent,
    participants: mockParticipants,
  },
  parameters: {
    docs: {
      description: {
        story:
          '長いコンテンツを含むラウンド詳細。コメントが長文の場合の表示を確認できます。',
      },
    },
  },
};

export const EmptyRound: Story = {
  render: (args) => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: {
      roundNumber: 2,
      topic: '好きな食べ物',
      selections: [],
    },
    participants: mockParticipants,
  },
  parameters: {
    docs: {
      description: {
        story: '誰も選択していないラウンドの表示。全ユーザーが未選択状態です。',
      },
    },
  },
};

export const PartialSelections: Story = {
  render: (args) => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: {
      roundNumber: 4,
      topic: '好きな季節',
      selections: [
        {
          userId: '1',
          userName: 'あきら',
          item: '春',
          comment: '桜が綺麗だから',
        },
        { userId: '3', userName: 'ゆうき', item: '冬', comment: '' }, // コメントなし
      ],
    },
    participants: mockParticipants,
  },
  parameters: {
    docs: {
      description: {
        story:
          '一部のユーザーのみが選択している状態。選択済み・未選択・コメントありなしの混在状態です。',
      },
    },
  },
};

export const MobileView: Story = {
  render: (args) => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: mockRoundData,
    participants: mockParticipants,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
    docs: {
      description: {
        story:
          'モバイル表示でのラウンド詳細モーダル。ResponsiveModalによりドロワー形式で表示されます。',
      },
    },
  },
};

export const DarkMode: Story = {
  render: (args) => <RoundDetailModalWithControls {...args} />,
  args: {
    roundData: mockRoundData,
    participants: mockParticipants,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    chakra: { colorMode: 'dark' },
    docs: {
      description: {
        story: 'ダークモードでのラウンド詳細モーダル表示。',
      },
    },
  },
};

export const AlwaysOpen: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('onClose'),
    roundData: mockRoundData,
    participants: mockParticipants,
    onSaveSelections: (roundNumber, selections) => {
      console.log('onSaveSelections:', { roundNumber, selections });
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '常に開いた状態のモーダル（開発・デバッグ用）。UI要素の詳細確認に使用します。',
      },
    },
  },
};
