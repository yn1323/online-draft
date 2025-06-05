import type { Meta, StoryObj } from '@storybook/react';
import { JoinPage } from './index';

const meta: Meta<typeof JoinPage> = {
  title: 'Features/Join/JoinPage',
  component: JoinPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
