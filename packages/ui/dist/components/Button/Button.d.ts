import type { ButtonHTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}
export declare function Button({ variant, children, ...props }: ButtonProps): import("react").JSX.Element;
