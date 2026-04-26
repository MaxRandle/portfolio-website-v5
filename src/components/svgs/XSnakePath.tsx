import React, { forwardRef, JSX } from "react";

type AuthJsLogoProps = JSX.IntrinsicElements["svg"] & {
  size?: number;
};

export const XSnakePath = forwardRef<SVGSVGElement, AuthJsLogoProps>(
  ({ size, ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
        viewBox="0 0 80 256"
        overflow="visible"
        ref={ref}
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        {...props}
      >
        <path d="M40 256H20L8 236H0l16-24H8l12-20h40l12-20h-8l16-24h-8l-12-20H20L8 108H0l16-24H8l12-20h40l12-20h-8l16-24h-8L60 0H40" />
      </svg>
    );
  },
);

XSnakePath.displayName = "XSnakePath";
