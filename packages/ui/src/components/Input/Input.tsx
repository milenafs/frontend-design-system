import type { InputHTMLAttributes } from "react";

/**
 * Props for the Input component
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Visual state variant - "default" for normal, "error" for invalid input, "success" for valid input */
  variant?: "default" | "error" | "success";
  /** Label text displayed above the input */
  label?: string;
  /** Helper or error text displayed below the input */
  helperText?: string;
}

/**
 * A text input component with support for labels, helper text, and validation states.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="your@email.com"
 *   helperText="We'll never share your email"
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Input
 *   label="Username"
 *   variant="error"
 *   helperText="Username is already taken"
 * />
 * ```
 */
export function Input({
  variant = "default",
  label,
  helperText,
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random()}`;

  return (
    <div data-variant={variant}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input id={inputId} data-variant={variant} {...props} />
      {helperText && <span role="status">{helperText}</span>}
    </div>
  );
}
