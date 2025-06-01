import type { Meta, StoryObj } from '@storybook/react';
import { TopPage } from '.';

const meta: Meta<typeof TopPage> = {
  title: 'Features/Top/TopPage',
  component: TopPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};