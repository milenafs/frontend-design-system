import type { HTMLAttributes, ReactNode } from "react";

/**
 * Props for the Stack component
 */
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Layout direction - "horizontal" for row layout, "vertical" for column layout */
  direction?: "horizontal" | "vertical";
  /** Spacing between children - determines the gap size */
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Vertical alignment of items */
  align?: "start" | "center" | "end" | "stretch";
  /** Horizontal alignment of items */
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  /** Stack content - React elements to layout */
  children: ReactNode;
}

/**
 * A flexible layout component for consistent spacing between items.
 *
 * @example
 * ```tsx
 * <Stack direction="vertical" gap="md">
 *   <Button>Item 1</Button>
 *   <Button>Item 2</Button>
 *   <Button>Item 3</Button>
 * </Stack>
 * ```
 *
 * @example
 * ```tsx
 * <Stack direction="horizontal" gap="lg" justify="space-between">
 *   <span>Left</span>
 *   <span>Right</span>
 * </Stack>
 * ```
 */
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
