import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

const containerVariants = tv({
  base: "mx-auto px-6 lg:px-10 w-full md:max-w-[48rem] lg:max-w-[64rem]",
  variants: {},
});

export type ContainerProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof containerVariants>;

export const Container = React.forwardRef<
  React.ComponentRef<"div">,
  ContainerProps
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={containerVariants({ className })} {...props} />
  );
});

Container.displayName = "Container";
