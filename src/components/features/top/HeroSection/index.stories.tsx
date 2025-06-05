import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './';

const meta: Meta<typeof HeroSection> = {
  title: 'Features/Top/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
