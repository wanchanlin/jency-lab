import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

const meta = {
  title: 'Light',
  component: Light,
  tags: ['autodocs'],
} as Meta<typeof Light>;

export default meta;

type Story = StoryObj<typeof Light>;
export const Base: Story = {
  args: {
    
  }
};
// // Minimal named story so Storybook indexes the file
// export const Primary: StoryObj<typeof Light> = {};
// // ...existing code...