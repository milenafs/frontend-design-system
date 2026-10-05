import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stack, Button } from '@frontend-design-system/ui';

const meta = {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Stack direction',
    },
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap between items',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Align items',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-between', 'space-around'],
      description: 'Justify content',
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {} as any,
  render: () => (
    <Stack direction="vertical" gap="md">
      <Button variant="primary">Item 1</Button>
      <Button variant="primary">Item 2</Button>
      <Button variant="primary">Item 3</Button>
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: {} as any,
  render: () => (
    <Stack direction="horizontal" gap="md">
      <Button variant="primary">Item 1</Button>
      <Button variant="primary">Item 2</Button>
      <Button variant="primary">Item 3</Button>
    </Stack>
  ),
};

export const SpaceBetween: Story = {
  args: {} as any,
  render: () => (
    <Stack direction="horizontal" gap="md" justify="space-between" style={{ width: '100%' }}>
      <Button variant="primary">Left</Button>
      <Button variant="secondary">Right</Button>
    </Stack>
  ),
};

export const LargeGap: Story = {
  args: {} as any,
  render: () => (
    <Stack direction="vertical" gap="lg">
      <div style={{ padding: '20px', background: '#e0e0e0' }}>Box 1</div>
      <div style={{ padding: '20px', background: '#e0e0e0' }}>Box 2</div>
      <div style={{ padding: '20px', background: '#e0e0e0' }}>Box 3</div>
    </Stack>
  ),
};

export const CenterAligned: Story = {
  args: {} as any,
  render: () => (
    <Stack direction="vertical" gap="md" align="center">
      <Button variant="primary">Centered</Button>
      <Button variant="primary">Items</Button>
    </Stack>
  ),
};
