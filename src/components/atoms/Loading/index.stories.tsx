import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './index';

const meta: Meta<typeof Loading> = {
  title: 'Atoms/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基本のローディング表示
 */
export const Basic: Story = {};
