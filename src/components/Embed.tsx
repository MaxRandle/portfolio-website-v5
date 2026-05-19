import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const EmbedStyles = tv({
  base: "mt-8",
  variants: {
    width: {
      full: "w-full",
      fixed: "w-lg max-w-full mx-auto",
    },
    aspect: {
      square: "aspect-square",
      video: "aspect-video",
    },
  },
});

type EmbedVariants = VariantProps<typeof EmbedStyles>;

export type EmbedProps = React.ComponentPropsWithoutRef<"iframe"> & EmbedVariants;

export const Embed = forwardRef<HTMLIFrameElement, EmbedProps>(
  ({ className, width, aspect, ...props }, ref) => {
    return (
      <iframe
        ref={ref}
        className={EmbedStyles({ width, aspect, className })}
        {...props}
      />
    );
  }
);

Embed.displayName = "Embed";
