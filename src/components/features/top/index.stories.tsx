import type { Meta, StoryObj } from '@storybook/react';
import { TopPage } from '.';

const meta: Meta<typeof TopPage> = {
  title: 'Features/Top/TopPage',
  component: TopPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
