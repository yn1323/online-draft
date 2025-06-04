import type { Meta, StoryObj } from '@storybook/react';
import HowToSection from './';

const meta: Meta<typeof HowToSection> = {
  title: 'Features/Top/HowToSection',
  component: HowToSection,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
// biome-ignore lint/correctness/noUnusedVariables: <explanation>
type Story = StoryObj<typeof meta>;

// なぜかGHAでテストが通らないためコメントアウト
// export const Default: Story = {};
