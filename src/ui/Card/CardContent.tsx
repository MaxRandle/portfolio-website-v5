import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const CardContentStyles = tv({
  base: "p-6",
});

type CardContentVariants = VariantProps<typeof CardContentStyles>;

export type CardContentProps = React.ComponentPropsWithoutRef<"div"> &
  CardContentVariants;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={CardContentStyles({ className })} {...props} />
    );
  }
);

CardContent.displayName = "CardContent";
