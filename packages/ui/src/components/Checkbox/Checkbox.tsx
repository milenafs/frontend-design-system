import type { InputHTMLAttributes } from "react";

export interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

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
