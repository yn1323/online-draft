import { SampleButton2 } from '@/src/components/features/sample/SampleButton2';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'features/sample/SampleButton2',
  component: SampleButton2,
  args: {},
} satisfies Meta<typeof SampleButton2>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
