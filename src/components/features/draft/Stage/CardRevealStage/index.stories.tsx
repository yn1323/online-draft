import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { getCommonResponsiveValues } from '../index';
import { CardRevealStage } from './index';

// サンプルデータ
const sampleParticipants = [
  {
    id: '1',
    name: '田中太郎',
    avatar: 1,
    choice: 'ポケットモンスターブラック',
    willLose: false,
  },
  {
    id: '2',
    name: '佐藤花子',
    avatar: 2,
    choice: 'ドラゴンクエストXI',
    willLose: false,
  },
  {
    id: '3',
    name: '鈴木一郎',
    avatar: 3,
    choice: 'ファイナルファンタジーXIV',
    willLose: false,
  },
  {
    id: '4',
    name: '高橋次郎',
    avatar: 4,
    choice: 'スーパーマリオオデッセイ',
    willLose: false,
  },
  {
    id: '5',
    name: '山田美咲',
    avatar: 5,
    choice: 'ゼルダの伝説ブレスオブザワイルド',
    willLose: false,
  },
  {
    id: '6',
    name: '中村健太',
    avatar: 6,
    choice: 'スプラトゥーン3',
    willLose: false,
  },
];

const conflictParticipants = [
  {
    id: '1',
    name: '田中太郎',
    avatar: 1,
    choice: 'ポケットモンスターブラック',
    willLose: false,
  },
  {
    id: '2',
    name: '佐藤花子',
    avatar: 2,
    choice: 'ポケットモンスターブラック',
    willLose: true,
  },
  {
    id: '3',
    name: '鈴木一郎',
    avatar: 3,
    choice: 'ファイナルファンタジーXIV',
    willLose: false,
  },
  {
    id: '4',
    name: '高橋次郎',
    avatar: 4,
    choice: 'スーパーマリオオデッセイ',
    willLose: false,
  },
  {
    id: '5',
    name: '山田美咲',
    avatar: 5,
    choice: 'ゼルダの伝説ブレスオブザワイルド',
    willLose: false,
  },
  {
    id: '6',
    name: '中村健太',
    avatar: 6,
    choice: 'ファイナルファンタジーXIV',
    willLose: true,
  },
];

const meta: Meta<typeof CardRevealStage> = {
  title: 'features/draft/Stage/CardRevealStage',
  component: CardRevealStage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    participants: {
      control: 'object',
    },
    isRevealing: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    participants: sampleParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
    getCommonResponsiveValues,
  },
};

export const WithConflict: Story = {
  args: {
    participants: conflictParticipants,
    isRevealing: false,
    onStartReveal: fn(),
    onReset: fn(),
    getCommonResponsiveValues,
  },
};
