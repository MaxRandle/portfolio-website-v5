import { JSX } from "react";
import { BrandLogoIcon } from "./BrandLogoIcon";
import { twMerge } from "tailwind-merge";

type LogoBackgroundProps = JSX.IntrinsicElements["div"];

export const LogoBackground: React.FC<LogoBackgroundProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={twMerge("relative aspect-square", className)} {...props}>
      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%-4%)] left-[calc(50%+20%)] size-[13%] -rotate-6" />
      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%+4%)] left-[calc(50%-20%)] size-[13%] -rotate-6" />

      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%-21%)] left-[calc(50%-8%)] size-[8%] rotate-6" />
      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%+21%)] left-[calc(50%+8%)] size-[8%] rotate-6" />

      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%-33%)] left-[calc(50%+8%)] size-[5%] -rotate-16" />
      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%+33%)] left-[calc(50%-8%)] size-[5%] -rotate-16" />

      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%+38%)] left-[calc(50%+20%)] size-[5%] rotate-24" />
      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%-38%)] left-[calc(50%-20%)] size-[5%] rotate-24" />

      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%+12%)] left-[calc(50%+30%)] size-[3%] -rotate-16" />
      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%-12%)] left-[calc(50%-30%)] size-[3%] -rotate-16" />

      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%+24%)] left-[calc(50%-24%)] size-[3%] -rotate-24" />
      <BrandLogoIcon className="absolute -translate-1/2 top-[calc(50%-24%)] left-[calc(50%+24%)] size-[3%] -rotate-24" />
    </div>
  );
};
