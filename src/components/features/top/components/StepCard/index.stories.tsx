import type { Meta, StoryObj } from '@storybook/react';
import { MdCreate, MdPlayArrow, MdShare } from 'react-icons/md';
import StepCard from './';

const meta: Meta<typeof StepCard> = {
  title: 'Features/Top/Components/StepCard',
  component: StepCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    colorScheme: {
      control: { type: 'select' },
      options: ['green', 'orange', 'blue'],
    },
    stepNumber: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Step1: Story = {
  args: {
    icon: <MdCreate size={24} />,
    stepNumber: 1,
    title: '会議を作成',
    description: 'ドラフト会議を作成して、メンバーを招待しよう',
    colorScheme: 'green',
  },
};

export const Step2: Story = {
  args: {
    icon: <MdShare size={24} />,
    stepNumber: 2,
    title: 'メンバー招待',
    description: '会議IDをメンバーにシェアして参加してもらおう',
    colorScheme: 'orange',
  },
};

export const Step3: Story = {
  args: {
    icon: <MdPlayArrow size={24} />,
    stepNumber: 3,
    title: 'ドラフト実行',
    description: 'メンバー全員で選択し、重複したら話し合って決定',
    colorScheme: 'blue',
  },
};
