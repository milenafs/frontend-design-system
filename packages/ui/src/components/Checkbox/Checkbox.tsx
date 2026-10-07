import type { InputHTMLAttributes } from "react";

/**
 * Props for the Checkbox component
 */
export interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /** Label text displayed next to the checkbox */
  label?: string;
}

/**
 * A native checkbox input with an optional associated label.
 *
 * @example
 * ```tsx
 * <Checkbox label="I agree to the terms" defaultChecked />
 * ```
 *
 * @example
 * ```tsx
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   onChange={(e) => console.log(e.target.checked)}
 * />
 * ```
 */
export function Checkbox({
  label,
  id,
  ...props
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random()}`;

  return (
    <div>
      <input
        id={checkboxId}
        type="checkbox"
        {...props}
      />
      {label && <label htmlFor={checkboxId}>{label}</label>}
    </div>
  );
}
