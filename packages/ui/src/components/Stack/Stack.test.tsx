import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children', () => {
    render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders with vertical direction by default', () => {
    const { container } = render(
      <Stack>
        <div>Item</div>
      </Stack>
    );
    const stack = container.querySelector('[data-stack]');
    expect(stack).toHaveAttribute('data-direction', 'vertical');
  });

  it('renders with horizontal direction', () => {
    const { container } = render(
      <Stack direction="horizontal">
        <div>Item</div>
      </Stack>
    );
    const stack = container.querySelector('[data-stack]');
    expect(stack).toHaveAttribute('data-direction', 'horizontal');
  });

  it('applies gap sizes', () => {
    const { container } = render(
      <Stack gap="lg">
        <div>Item</div>
      </Stack>
    );
    const stack = container.querySelector('[data-stack]');
    expect(stack).toHaveAttribute('data-gap', 'lg');
  });

  it('applies flexbox properties', () => {
    const { container } = render(
      <Stack align="center" justify="space-between">
        <div>Item</div>
      </Stack>
    );
    const stack = container.querySelector('[data-stack]') as HTMLElement;
    expect(stack.style.alignItems).toBe('center');
    expect(stack.style.justifyContent).toBe('space-between');
  });
});
