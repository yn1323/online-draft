import { SampleButton } from '@/src/components/features/sample/SampleButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'features/sample/SampleButton',
  component: SampleButton,
  args: {},
} satisfies Meta<typeof SampleButton>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
