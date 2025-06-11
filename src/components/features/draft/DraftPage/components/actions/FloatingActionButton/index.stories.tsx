import type { Meta, StoryObj } from '@storybook/react';
import { FloatingActionButton } from './index';

const meta: Meta<typeof FloatingActionButton> = {
  title: 'Features/Draft/DraftPage/Components/FloatingActionButton',
  component: FloatingActionButton,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof FloatingActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log('FloatingActionButton clicked'),
  },
};

export const WithBackground: Story = {
  args: {
    onClick: () => console.log('FloatingActionButton clicked'),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
