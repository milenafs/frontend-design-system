import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  it('renders input with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders helper text', () => {
    render(<Input label="Email" helperText="Enter your email" />);
    expect(screen.getByText('Enter your email')).toBeInTheDocument();
  });

  it('renders default variant', () => {
    render(<Input />);
    const wrapper = screen.getByRole('textbox').parentElement;
    expect(wrapper).toHaveAttribute('data-variant', 'default');
  });

  it('renders error variant', () => {
    render(<Input variant="error" helperText="Invalid email" />);
    const wrapper = screen.getByRole('textbox').parentElement;
    expect(wrapper).toHaveAttribute('data-variant', 'error');
  });

  it('renders success variant', () => {
    render(<Input variant="success" helperText="Valid email" />);
    const wrapper = screen.getByRole('textbox').parentElement;
    expect(wrapper).toHaveAttribute('data-variant', 'success');
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<Input label="Email" />);
    const input = screen.getByRole('textbox');

    await user.type(input, 'test@example.com');
    expect(input).toHaveValue('test@example.com');
  });

  it('can be disabled', () => {
    render(<Input disabled label="Disabled" />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });
});
