import type { ButtonHTMLAttributes } from "react";

/**
 * Props for the Button component
 */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant - "primary" for main actions, "secondary" for alternative actions */
  variant?: "primary" | "secondary";
}

/**
 * A semantic button component with support for multiple visual variants.
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={() => alert('Clicked!')}>
 *   Click Me
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * <Button variant="secondary" disabled>
 *   Disabled Button
 * </Button>
 * ```
 */
export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      data-variant={variant}
      {...props}
    >
      {children}
    </button>
  );
}