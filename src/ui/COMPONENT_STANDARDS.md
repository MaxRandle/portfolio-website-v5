# UI Component Library Standards & Guidelines

This document outlines the software patterns, file structure, conventions, and standards used throughout the UI component library to ensure consistency and maintainability.

## File Structure & Organization

### Directory Structure

Each component follows a consistent directory structure:

```
src/ui/
├── ComponentName/
│   ├── ComponentName.tsx          # Main component file
│   ├── ComponentSubComponent.tsx  # Related sub-components (if any)
│   └── index.tsx                  # Export barrel file
└── COMPONENT_STANDARDS.md         # This documentation
```

### Naming Conventions

- **Directories**: PascalCase (e.g., `Alert`, `Avatar`, `Container`)
- **Files**: PascalCase matching the component name (e.g., `Alert.tsx`, `AvatarGroup.tsx`)
- **Components**: PascalCase (e.g., `Alert`, `AvatarContainer`)
- **Style objects**: PascalCase with "Styles" suffix (e.g., `AlertStyles`, `AvatarContainerStyles`)
- **Type definitions**: PascalCase with descriptive suffix (e.g., `AlertProps`, `AvatarVariants`)

## Code Patterns & Standards

### 1. Imports

Always follow this import order:

```tsx
import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";
// Other third-party imports
// Local imports
```

### 2. Styling with Tailwind Variants

Use `tailwind-variants` (tv) for all component styling:

```tsx
const ComponentStyles = tv({
  base: "base-classes-here",
  variants: {
    variantName: {
      option1: "classes-for-option1",
      option2: "classes-for-option2",
    },
  },
  defaultVariants: {
    variantName: "defaultOption",
  },
});
```

#### Dark Mode

- Use `dark:` prefix for dark mode styles
- Never use `custom-dark:` or `dark-context:` - always use the standard `dark:` utility

### 3. TypeScript Patterns

#### Type Definitions

```tsx
// Extract variants type
type ComponentVariants = VariantProps<typeof ComponentStyles>;

// Component props type
export type ComponentProps = JSX.IntrinsicElements["div"] &
  ComponentVariants & {
    // Additional custom props
  };
```

#### Required vs Optional Variants

```tsx
// For required variants
export type ComponentProps = JSX.IntrinsicElements["div"] &
  Omit<ComponentVariants, "requiredVariant"> &
  Required<Pick<ComponentVariants, "requiredVariant">> & {
    // other props
  };

// For optional variants (most common)
export type ComponentProps = JSX.IntrinsicElements["div"] &
  ComponentVariants & {
    // other props
  };
```

### 4. Component Implementation

#### forwardRef Pattern

All components must use `forwardRef` for proper ref forwarding:

```tsx
export const ComponentName = forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={ComponentStyles({ variant, className })}
        {...props}
      />
    );
  }
);

ComponentName.displayName = "ComponentName";
```

#### Key Requirements:

- Always use `forwardRef`
- Always set `displayName`
- Pass `className` to the style function
- Spread remaining props with `{...props}`
- Use proper TypeScript generics for ref type

### 5. Prop Documentation

Use JSDoc comments for prop documentation:

```tsx
export type ComponentProps = {
  /**
   * @summary Brief description of the prop
   * @default "defaultValue"
   */
  propName: string;
};
```

### 6. Export Patterns

#### Index Files

Each component directory must have an `index.tsx` file that exports all components:

```tsx
export * from "./ComponentName";
export * from "./ComponentSubComponent";
```

#### Component Files

Export both the type and component:

```tsx
export type ComponentProps = {
  // props definition
};

export const ComponentName = forwardRef<HTMLElement, ComponentProps>();
// implementation
```

## Styling Guidelines

### 1. Base Classes

- Use semantic color tokens (e.g., `text-primary-800`, `bg-success-200`)
- Include both light and dark mode variants
- Group related classes in arrays for better readability

### 2. Responsive Design

- Use responsive prefixes when needed (`sm:`, `md:`, `lg:`, `xl:`)
- Mobile-first approach

### 3. Component Composition

- Use Tailwind's named group functionality for parent-child relationships
- Use `group/group-name` for parent containers
- Use `group-[&]/group-name:` for child targeting in Tailwind v4
- Example: `group-[&]/avatar-group:-ml-4` for overlapping avatars

## Component Architecture

### 1. Single Responsibility

Each component should have a single, well-defined purpose.

### 2. Composition over Inheritance

Build complex components by composing simpler ones (e.g., Avatar, AvatarGroup, AvatarContainer).

### 3. Accessibility

- Always provide proper ARIA attributes
- Ensure keyboard navigation works
- Use semantic HTML elements

## Tailwind CSS v4 Specific Guidelines

### Group Modifiers (Tailwind CSS v4)

- Use `group/group-name` syntax for named groups in parent containers
- Use `group-[&]/group-name:` syntax for targeting group children
- **Syntax Evolution:**
  - Tailwind v3: `group-[]/group-name:` (old syntax)
  - Tailwind v4: `group-[&]/group-name:` (current syntax)
- Example:

  ```tsx
  // Container (parent with named group)
  <div className="group/avatar-group flex">
    <Avatar />
  </div>;

  // Child component styles
  const AvatarStyles = tv({
    base: ["group-[&]/avatar-group:first:ml-0"],
    variants: {
      size: {
        md: [
          "text-xl w-16 h-16",
          "group-[&]/avatar-group:-ml-4",
          "group-[&]/avatar-group:ring-4",
          "group-[&]/avatar-container:mr-4",
        ],
      },
    },
  });
  ```

### Dark Mode

- Continue using `dark:` prefix (unchanged in v4)
- Avoid legacy `custom-dark:` or `dark-context:` prefixes

## Migration Checklist

When migrating or creating new components, ensure:

- [ ] Uses `tailwind-variants` instead of `class-variance-authority`
- [ ] Replaces `custom-dark:` or `dark-context:` with `dark:`
- [ ] Uses correct Tailwind v4 group syntax (`group-[&]/group-name:` instead of v3's `group-[]/group-name:`)
- [ ] Implements `forwardRef` pattern
- [ ] Uses `JSX.IntrinsicElements` for base props
- [ ] Sets `displayName`
- [ ] Has proper TypeScript types
- [ ] Includes `index.tsx` export file
- [ ] Follows naming conventions
- [ ] Includes JSDoc documentation
- [ ] Handles `className` prop correctly
- [ ] Spreads remaining props

## Examples

### Simple Component

```tsx
import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const ButtonStyles = tv({
  base: "px-4 py-2 rounded font-medium",
  variants: {
    variant: {
      primary: "bg-primary-600 text-white dark:bg-primary-500",
      secondary:
        "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100",
    },
    size: {
      sm: "text-sm px-3 py-1",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof ButtonStyles>;

export type ButtonProps = JSX.IntrinsicElements["button"] & ButtonVariants;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={ButtonStyles({ variant, size, className })}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
```

### Component with Required Variants

```tsx
export type AlertProps = JSX.IntrinsicElements["div"] &
  Omit<AlertVariants, "status"> &
  Required<Pick<AlertVariants, "status">> & {
    title: React.ReactNode;
  };
```

## Maintenance & Evolution

### Keeping Standards Current

This documentation should be actively maintained as patterns evolve and new standards are established. When updating this guide:

- **Version Changes**: Update examples and migration checklists when upgrading major dependencies (Tailwind CSS, React, TypeScript, etc.)
- **Pattern Evolution**: Document new patterns as they emerge from component development
- **Breaking Changes**: Clearly mark deprecated patterns and provide migration paths
- **Team Feedback**: Incorporate learnings from component development and code reviews

### Contribution Guidelines

When adding new components or updating existing ones:

1. **Check Standards First**: Always reference this guide before starting component work
2. **Update Documentation**: If you discover new patterns or better approaches, update this guide
3. **Migration Notes**: When changing existing patterns, add migration notes and examples
4. **Review Process**: Include standards compliance in code review checklists

### Version History

- **v1.0**: Initial standards documentation with Tailwind v4 compatibility
- **Future versions**: Document significant changes and their rationale here

This living document ensures consistency across the component library and helps onboard new team members effectively.
