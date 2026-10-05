import type { HTMLAttributes, ReactNode } from "react";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  children: ReactNode;
}

export function Stack({
  direction = "vertical",
  gap = "md",
  align = "stretch",
  justify = "start",
  children,
  style,
  ...props
}: StackProps) {
  const gapMap = {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  };

  const isHorizontal = direction === "horizontal";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        gap: gapMap[gap],
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
      data-stack
      data-direction={direction}
      data-gap={gap}
      {...props}
    >
      {children}
    </div>
  );
}
