import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const HeadingStyles = tv({
  base: "text-base",
  variants: {
    /**
     * @summary specifies the color of the text.
     * @default "weak"
     */
    palette: {
      inherit: "",
      base: "text-black dark:text-white",
      weak: "text-base-900 dark:text-base-400",
      weaker: "text-base-800 dark:text-base-500",
      primary: "text-primary-800 dark:text-primary-500",
    },
    /**
     * @summary specifies the size of the text.
     * @default "body"
     */
    level: {
      h1: "text-5xl sm:text-6xl font-light tracking-tight",
      h2: "text-3xl sm:text-4xl font-light tracking-tight",
      h3: "text-xl sm:text-2xl font-light",
    },
  },
  defaultVariants: {
    palette: "weak",
    level: "h3",
  },
});

type HeadingVariants = VariantProps<typeof HeadingStyles>;

export type HeadingProps = JSX.IntrinsicElements["h1"] &
  JSX.IntrinsicElements["h2"] &
  JSX.IntrinsicElements["h3"] &
  HeadingVariants & {
    /**
     * @summary informs the dom type.
     * @default "h3"
     */
    as?: "h3" | "h2" | "h1";
  };

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ palette, level = "h3", as, className, ...props }, ref) => {
    const Component = as ?? level ?? "h3";

    return (
      <Component
        ref={ref}
        className={HeadingStyles({ palette, level, className })}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";
