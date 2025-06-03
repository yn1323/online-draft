import type { Meta, StoryObj } from '@storybook/react';
import { JoinPage } from '.';

const meta: Meta<typeof JoinPage> = {
  title: 'Features/Join/JoinPage',
  component: JoinPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const SP: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
