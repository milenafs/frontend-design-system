import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "error" | "success";
  label?: string;
  helperText?: string;
}

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
