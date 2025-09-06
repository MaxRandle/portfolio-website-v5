import { JSX } from "react";
import { BrandLogoIcon } from "./BrandLogoIcon";
import { tv } from "tailwind-variants";

type LogoBackgroundProps = JSX.IntrinsicElements["div"];

export const LogoBackground: React.FC<LogoBackgroundProps> = ({
  className,
  ...props
}) => {
  const styles = tv({
    base: ["w-[240rem] aspect-square"],
  });

  return (
    <div className={styles({ className })} {...props}>
      <div className="relative w-full aspect-square">
        <BrandLogoIcon className="absolute -translate-1/2 -top-[4%] left-[13%] size-[13%] -rotate-6" />
        <BrandLogoIcon className="absolute -translate-1/2 top-[4%] -left-[13%] size-[13%] -rotate-6" />

        <BrandLogoIcon className="absolute -translate-1/2 -top-[21%] -left-[8%] size-[8%] rotate-6" />
        <BrandLogoIcon className="absolute -translate-1/2 top-[21%] left-[8%] size-[8%] rotate-6" />

        <BrandLogoIcon className="absolute -translate-1/2 -top-[33%] left-[8%] size-[5%] rotate-16" />
        <BrandLogoIcon className="absolute -translate-1/2 top-[33%] -left-[8%] size-[5%] rotate-16" />

        <BrandLogoIcon className="absolute -translate-1/2 top-[38%] left-[20%] size-[5%] rotate-24" />
        <BrandLogoIcon className="absolute -translate-1/2 -top-[38%] -left-[20%] size-[5%] rotate-24" />

        <BrandLogoIcon className="absolute -translate-1/2 top-[12%] left-[30%] size-[3%] -rotate-16" />
        <BrandLogoIcon className="absolute -translate-1/2 -top-[12%] -left-[30%] size-[3%] -rotate-16" />

        <BrandLogoIcon className="absolute -translate-1/2 top-[38%] -left-[30%] size-[3%] -rotate-24" />
        <BrandLogoIcon className="absolute -translate-1/2 -top-[38%] left-[30%] size-[3%] -rotate-24" />
      </div>
    </div>
  );
};
