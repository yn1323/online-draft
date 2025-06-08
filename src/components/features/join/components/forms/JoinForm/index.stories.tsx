import type { JoinMeetingForm } from '@/src/constants/schemas';
import type { Meta, StoryObj } from '@storybook/react';
import JoinForm from './';

// Mock function for stories
const mockOnSubmit = async (data: JoinMeetingForm) => {
  console.log('Form submitted:', data);
  return Promise.resolve();
};

const meta: Meta<typeof JoinForm> = {
  title: 'Features/Join/Components/JoinForm',
  component: JoinForm,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: mockOnSubmit,
  },
};

export const Loading: Story = {
  args: {
    onSubmit: mockOnSubmit,
    isLoading: true,
  },
};
