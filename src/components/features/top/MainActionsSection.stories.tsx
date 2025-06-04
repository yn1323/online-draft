import type { Meta, StoryObj } from '@storybook/react';
import MainActionsSection from './MainActionsSection';

// Mock function for stories
const mockOnCreateDraft = () => {
  console.log('Create draft clicked');
};

const meta: Meta<typeof MainActionsSection> = {
  title: 'Features/Top/MainActionsSection',
  component: MainActionsSection,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onCreateDraft: mockOnCreateDraft,
  },
};
