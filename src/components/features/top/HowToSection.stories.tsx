import type { Meta, StoryObj } from '@storybook/react';
import HowToSection from './HowToSection';

const meta: Meta<typeof HowToSection> = {
  title: 'Features/Top/HowToSection',
  component: HowToSection,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
