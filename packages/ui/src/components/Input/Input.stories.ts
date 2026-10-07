import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Visual style variant',
    },
    label: {
      control: 'text',
      description: 'Label for the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const WithHelper: Story = {
  args: {
    variant: 'default',
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Username must be at least 3 characters',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Email',
    value: 'invalid-email',
    helperText: 'Invalid email format',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Username',
    value: 'john_doe',
    helperText: 'Username is available',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    label: 'Disabled Input',
    placeholder: 'This is disabled',
    disabled: true,
  },
};
