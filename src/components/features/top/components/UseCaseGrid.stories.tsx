import type { Meta, StoryObj } from '@storybook/react';
import UseCaseGrid from './UseCaseGrid';

const meta: Meta<typeof UseCaseGrid> = {
  title: 'Features/Top/Components/UseCaseGrid',
  component: UseCaseGrid,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
