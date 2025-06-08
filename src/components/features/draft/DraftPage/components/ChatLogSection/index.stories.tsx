import type { Meta, StoryObj } from '@storybook/react';
import { ChatLogSection } from './index';

const meta = {
  title: 'Features/Draft/DraftPage/Components/ChatLogSection',
  component: ChatLogSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatLogSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};