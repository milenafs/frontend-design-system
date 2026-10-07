import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders checkbox with label', () => {
    render(<Checkbox label="I agree" />);
    expect(screen.getByText('I agree')).toBeInTheDocument();
  });

  it('renders checkbox without label', () => {
    render(<Checkbox aria-label="Accept terms" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles checked state', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Accept" />);
    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('supports defaultChecked', () => {
    render(<Checkbox label="Checked by default" defaultChecked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('can be disabled', () => {
    render(<Checkbox label="Disabled" disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('calls onChange handler', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Check me" onChange={handleChange} />);

    await user.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalled();
  });
});
