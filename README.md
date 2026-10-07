# Milfushi Design System

A production-ready React component library and design system built with TypeScript, Vite, and Turborepo. Includes a complete documentation site and interactive component showcase.

## Overview

The Milfushi Design System is a monorepo containing:

- **UI Package** (`packages/ui`) - Production-ready React components with TypeScript support, Storybook stories, and design tokens
- **Documentation Site** (`apps/docs`) - Docusaurus-powered documentation with live component examples and integration guides
- **Design Tokens** - Comprehensive CSS custom properties for colors, typography, spacing, and more

### Key Features

✅ **Production-Ready Components**
- Button, Input, Checkbox, Stack layout components
- Full TypeScript support with exported types
- 100% accessible (WCAG compliant)
- Built on semantic HTML

✅ **Comprehensive Design Tokens**
- 50+ CSS custom properties
- Colors (primary, secondary, semantic, grays)
- Typography system (sizes, weights, line heights)
- Spacing scale (xs to 3xl)
- Shadows, border radius, transitions, z-index utilities
- Light and dark mode support

✅ **Multiple Documentation Surfaces**
- Storybook for interactive component playground
- Docusaurus site with foundations and integration guides
- Live code examples in documentation
- Complete API reference for all components

✅ **Optimized for Scale**
- Tree-shakeable ES modules only
- Minimal bundle size (1.69 kB for UI package)
- Turborepo for fast builds
- Shared tooling across packages

---

## Project Structure

```
design-system/
├── packages/
│   └── ui/                         # Component library + Storybook
│       ├── src/
│       │   ├── components/         # Button, Input, Checkbox, Stack
│       │   │   ├── Button/
│       │   │   ├── Input/
│       │   │   ├── Checkbox/
│       │   │   └── Stack/
│       │   ├── stories/            # Component stories
│       │   │   ├── Button.stories.ts
│       │   │   ├── Input.stories.ts
│       │   │   ├── Checkbox.stories.ts
│       │   │   └── Stack.stories.tsx
│       │   ├── tokens.css          # Design tokens
│       │   ├── components.css      # Component styles
│       │   └── index.ts            # Package exports
│       ├── .storybook/             # Storybook configuration
│       │   ├── main.ts             # Config
│       │   └── preview.tsx         # Global setup
│       ├── dist/                   # Built output
│       ├── vite.config.ts          # Vite build config
│       └── package.json
│
├── apps/
│   └── docs/                       # Docusaurus documentation site
│       ├── docs/
│       │   ├── components/         # Component documentation
│       │   ├── foundations/        # Design tokens, typography, colors
│       │   └── getting-started/    # Integration guides
│       ├── src/
│       │   └── components/ComponentPreview/  # Live demo component
│       ├── docusaurus.config.ts
│       └── package.json
│
├── turbo.json                      # Turborepo configuration
├── package.json                    # Root monorepo setup
└── README.md                       # This file
```

---

## Technology Stack

### Build & Bundling
- **Vite** - Next-generation frontend build tool
- **Turborepo** - High-performance build system for monorepos
- **Rolldown** - Bundler used by Vite

### Component Development
- **React 19** - UI library
- **TypeScript** - Static typing
- **CSS Custom Properties** - Design tokens

### Documentation
- **Docusaurus 3** - Documentation site generator
- **Storybook 10** - Component development environment
- **MDX** - Markdown + React for interactive docs

### Testing & Quality
- **Vitest** - Unit test framework
- **Playwright** - Browser testing
- **Oxlint** - Fast JavaScript/TypeScript linter
- **TypeScript** - Type checking

---

## Installation & Setup

### Prerequisites

- Node.js 20.0 or higher
- npm 9.0 or higher

### Install Dependencies

```bash
npm install
```

This installs all dependencies for the root, packages, and apps using npm workspaces.

---

## Available Commands

### Development Servers

#### Start Documentation Site

```bash
npm run dev --workspace=apps/docs
```

Opens Docusaurus development server at **http://localhost:3000**

Features:
- Live component examples with `<ComponentPreview>` component
- Foundation documentation (colors, typography, spacing)
- Integration guide
- Hot module reloading

#### Start Storybook

```bash
npm run storybook --workspace=packages/ui
```

Opens Storybook at **http://localhost:6006**

Features:
- Interactive component showcase with live stories
- Auto-generated component documentation
- Interactive controls for props
- Accessibility testing addon
- Stories colocated with components

### Build Commands

#### Build All Packages

```bash
npm run build
```

Builds the entire monorepo (UI package, Storybook, Docs) with Turborepo.

#### Build UI Package

```bash
npm run build --workspace=packages/ui
```

Outputs to `packages/ui/dist/`
- `index.js` - ES module with all components
- `index.d.ts` - TypeScript type definitions
- `tokens.css` - Design token CSS custom properties
- `components.css` - Pre-built component styles

#### Build Storybook

```bash
npm run build-storybook --workspace=packages/ui
```

Outputs to `packages/ui/storybook-static/`
Generates a static HTML site ready for deployment.

#### Build Docs Site

```bash
npm run build --workspace=apps/docs
```

Outputs to `apps/docs/build/`
Generates a static Docusaurus site ready for deployment.

### Development Commands

#### Type Check

```bash
npm run typecheck
```

Checks TypeScript types across all packages (required by Turborepo pipeline).

#### Lint Code

```bash
npm run lint
```

Runs Oxlint across the monorepo.

#### Run Tests

```bash
npm run test
```

Runs Vitest for the Storybook component tests.

---

## Using the UI Package

### Installation (Workspace)

If in the same monorepo, the package is automatically available:

```bash
npm install @milfushi-design-system/ui
```

### Import Components

```tsx
import { Button, Input, Checkbox, Stack } from "@milfushi-design-system/ui";
```

### Import Styles

```tsx
// In your main app file or CSS
import "@milfushi-design-system/ui/dist/tokens.css";
import "@milfushi-design-system/ui/dist/components.css";
```

### Basic Usage

```tsx
import { Button, Input, Stack } from "@milfushi-design-system/ui";

export function LoginForm() {
  return (
    <Stack gap="lg" direction="vertical" style={{ maxWidth: "400px" }}>
      <h1>Login</h1>
      
      <Input 
        label="Email" 
        type="email" 
        placeholder="your@email.com"
        helperText="We'll never share your email"
      />
      
      <Input 
        label="Password" 
        type="password"
      />
      
      <Stack gap="md" direction="horizontal">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Login</Button>
      </Stack>
    </Stack>
  );
}
```

---

## Components

### Button

Semantic button component with variant support.

**Props:**
- `variant?: "primary" | "secondary"` - Visual style (default: "primary")
- `disabled?: boolean` - Disable the button
- `children: ReactNode` - Button content
- All standard HTML button attributes

**Example:**
```tsx
<Button variant="primary" onClick={() => alert('Clicked!')}>
  Click Me
</Button>
```

### Input

Text input with label, helper text, and validation states.

**Props:**
- `label?: string` - Associated label
- `variant?: "default" | "error" | "success"` - Validation state
- `helperText?: string` - Helper/error message
- `disabled?: boolean` - Disable the input
- All standard HTML input attributes

**Example:**
```tsx
<Input
  label="Email"
  type="email"
  variant="error"
  helperText="Invalid email format"
/>
```

### Checkbox

Native checkbox with optional label.

**Props:**
- `label?: string` - Associated label
- `checked?: boolean` - Controlled state
- `disabled?: boolean` - Disable the checkbox
- All standard HTML input attributes

**Example:**
```tsx
<Checkbox 
  label="I agree to the terms" 
  defaultChecked
/>
```

### Stack

Flexible layout component for consistent spacing.

**Props:**
- `direction?: "horizontal" | "vertical"` - Layout direction
- `gap?: "xs" | "sm" | "md" | "lg" | "xl"` - Spacing between items
- `align?: "start" | "center" | "end" | "stretch"` - Align items
- `justify?: "start" | "center" | "end" | "space-between" | "space-around"` - Justify content
- All standard HTML div attributes

**Example:**
```tsx
<Stack gap="md" direction="vertical" style={{ maxWidth: "500px" }}>
  <Input label="Name" />
  <Input label="Email" type="email" />
  <Checkbox label="Subscribe to newsletter" />
</Stack>
```

---

## Design Tokens

All design tokens are available as CSS custom properties in `packages/ui/dist/tokens.css`.

### Colors

```css
/* Primary palette */
--color-primary: #0066cc;
--color-primary-dark: #0052a3;
--color-primary-light: #e6f0ff;

/* Semantic colors */
--color-success: #10b981;
--color-error: #ef4444;
--color-warning: #f59e0b;
--color-info: #3b82f6;

/* Gray scale (50-900) */
--color-gray-50, --color-gray-100, ... --color-gray-900;
```

### Typography

```css
/* Font sizes */
--font-size-xs: 12px;    /* Small text, captions */
--font-size-sm: 14px;    /* Labels, small text */
--font-size-md: 16px;    /* Body text */
--font-size-lg: 18px;    /* Subheadings */
--font-size-xl: 20px;    /* Page headings */
--font-size-2xl: 24px;   /* Major headings */
--font-size-3xl: 32px;   /* Hero headlines */

/* Font weights */
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Line heights */
--line-height-tight: 1.2;    /* Headings */
--line-height-normal: 1.5;   /* Body text */
--line-height-relaxed: 1.75; /* Long-form content */
```

### Spacing

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
```

### Other Tokens

- **Border Radius:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-full`
- **Shadows:** `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- **Transitions:** `--transition-fast` (150ms), `--transition-base` (200ms), `--transition-slow` (300ms)
- **Z-index:** `--z-dropdown`, `--z-sticky`, `--z-modal`, `--z-tooltip`

### Using Tokens in Your Code

```css
.card {
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  background-color: var(--color-white);
}

.heading {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: var(--line-height-tight);
}
```

---

## Dark Mode Support

All components and tokens automatically support dark mode via the `prefers-color-scheme` media query.

```css
/* Light mode (default) */
:root {
  --color-primary: #0066cc;
  --color-gray-100: #f3f4f6;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #3b82f6;
    --color-gray-100: #1f2937;
  }
}
```

Users with dark mode enabled in their OS settings will automatically see the appropriate colors.

---

## Customization

### Override Design Tokens

Add your own CSS variables before importing component styles:

```css
:root {
  /* Override primary color */
  --color-primary: #your-brand-color;
  --color-primary-dark: #your-brand-color-dark;
  
  /* Override spacing */
  --space-md: 20px;
  
  /* Add custom tokens */
  --color-brand: #custom-color;
}

@import "@milfushi-design-system/ui/dist/tokens.css";
@import "@milfushi-design-system/ui/dist/components.css";
```

### Custom Component Styles

Style components using data attributes:

```css
button[data-variant="primary"] {
  /* Your custom styles */
}

div[data-variant="error"] input {
  /* Your custom error state */
}
```

### Create Component Variants

```tsx
import { Button, type ButtonProps } from "@milfushi-design-system/ui";

interface PrimaryButtonProps extends ButtonProps {
  size?: "sm" | "md" | "lg";
}

export function PrimaryButton({ size = "md", ...props }: PrimaryButtonProps) {
  const padding = {
    sm: "4px 12px",
    md: "8px 16px",
    lg: "12px 24px",
  };

  return (
    <Button
      variant="primary"
      style={{ padding: padding[size] }}
      {...props}
    />
  );
}
```

---

## Documentation

Full documentation is available in multiple formats:

### 📖 Docusaurus Site

Run `npm run dev --workspace=apps/docs` and visit http://localhost:3000

**Includes:**
- Foundation documentation (Colors, Typography, Spacing)
- Component documentation with live examples
- Integration guide with setup instructions
- Getting started guide

### 🎨 Storybook

Run `npm run storybook --workspace=packages/ui` and visit http://localhost:6006

**Includes:**
- Interactive component playground with live stories
- Auto-generated component API documentation
- Interactive prop controls
- Accessibility testing
- Stories colocated with components in `packages/ui/src/stories/`

### 📝 TypeScript IntelliSense

All components are fully typed with JSDoc comments:

```tsx
import { Button, type ButtonProps } from "@milfushi-design-system/ui";

// Full type support in your IDE
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Requirements:**
- CSS Custom Properties support
- Flexbox support
- ES2020+ JavaScript

---

## Performance

### Bundle Size

- UI package: **1.69 kB** (0.70 kB gzipped)
- Highly tree-shakeable - only import what you use

### Build Performance

- UI builds in **~30ms** with Vite
- Storybook builds in **~1.5s**
- Full monorepo builds with Turborepo caching

### Component Performance

- Minimal re-renders
- No unnecessary wrapper elements
- Built on semantic HTML
- CSS-only transitions and animations

---

## Contributing

### Adding New Components

1. Create component in `packages/ui/src/components/{ComponentName}/`
2. Export from `packages/ui/src/index.ts`
3. Add story in `apps/storybook/src/stories/{ComponentName}.stories.ts`
4. Add documentation in `apps/docs/docs/components/{component-name}.mdx`

### Component Template

```tsx
// packages/ui/src/components/MyComponent/MyComponent.tsx
import type { HTMLAttributes } from "react";

export interface MyComponentProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
}

export function MyComponent({
  variant = "default",
  disabled = false,
  children,
  ...props
}: MyComponentProps) {
  return (
    <div 
      data-variant={variant}
      {...props}
    >
      {children}
    </div>
  );
}
```

---

## Troubleshooting

### Styles Not Applied

Ensure you've imported both token and component CSS:

```tsx
import "@milfushi-design-system/ui/dist/tokens.css";
import "@milfushi-design-system/ui/dist/components.css";
```

### TypeScript Errors

Make sure types are imported:

```tsx
import { Button, type ButtonProps } from "@milfushi-design-system/ui";
```

### Build Errors

Clear cache and reinstall:

```bash
npm run clean     # Clears all node_modules and build outputs
npm install       # Reinstall dependencies
npm run build     # Rebuild
```

### Storybook Not Starting

Ensure the correct workspace is specified:

```bash
npm run dev --workspace=apps/storybook   # Correct
npm run dev                               # Wrong (uses docs)
```

---

## License

MIT - See LICENSE file for details

---

## Support

For issues, questions, or contributions:

1. Check the documentation at http://localhost:3000
2. Review component stories at http://localhost:6006
3. Check TypeScript types for prop documentation
4. Open an issue on GitHub

---

## Quick Reference

| Command | Purpose | Port |
|---------|---------|------|
| `npm run dev --workspace=apps/docs` | Start docs site | 3000 |
| `npm run storybook --workspace=packages/ui` | Start Storybook | 6006 |
| `npm run build` | Build all packages | — |
| `npm run build --workspace=packages/ui` | Build UI package | — |
| `npm run build-storybook --workspace=packages/ui` | Build Storybook | — |
| `npm run typecheck` | Check types | — |
| `npm run lint` | Run linter | — |
| `npm run test` | Run tests | — |

---

**Happy building! 🚀**
