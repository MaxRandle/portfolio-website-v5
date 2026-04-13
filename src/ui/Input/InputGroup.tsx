import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const InputGroupStyles = tv({
  base: "group/input-group flex",
});

type InputGroupVariants = VariantProps<typeof InputGroupStyles>;

export type InputGroupProps = React.ComponentPropsWithoutRef<"div"> & InputGroupVariants;

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={InputGroupStyles({ className })} {...props} />
    );
  }
);

InputGroup.displayName = "InputGroup";
