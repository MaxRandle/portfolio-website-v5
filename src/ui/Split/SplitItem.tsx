import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const SplitItemStyles = tv({
  base: "",
  variants: {
    side: {
      left: "sm:col-start-1",
      right: "sm:col-start-2",
    },
  },
});

type SplitItemVariants = VariantProps<typeof SplitItemStyles>;

export type SplitItemProps = React.ComponentPropsWithoutRef<"div"> &
  Required<SplitItemVariants>;

export const SplitItem = forwardRef<HTMLDivElement, SplitItemProps>(
  ({ className, side, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={SplitItemStyles({ side, className })}
        {...props}
      />
    );
  }
);

SplitItem.displayName = "SplitItem";
