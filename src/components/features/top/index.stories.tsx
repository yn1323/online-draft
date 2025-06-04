import type { Meta, StoryObj } from '@storybook/react';
import { TopPage } from './index';

const meta: Meta<typeof TopPage> = {
  title: 'Features/Top/TopPage',
  component: TopPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
