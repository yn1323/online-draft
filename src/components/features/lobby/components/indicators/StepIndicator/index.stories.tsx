import type { Meta, StoryObj } from '@storybook/react';
import StepIndicator from './';

const meta: Meta<typeof StepIndicator> = {
  title: 'Features/Lobby/Components/StepIndicator',
  component: StepIndicator,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    currentStep: {
      control: { type: 'select' },
      options: ['select', 'create'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectStep: Story = {
  args: {
    currentStep: 'select',
  },
};

export const CreateStep: Story = {
  args: {
    currentStep: 'create',
  },
};
