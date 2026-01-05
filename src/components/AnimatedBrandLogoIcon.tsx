"use client";

import { motion, useAnimate } from "framer-motion";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = Omit<React.ComponentProps<typeof motion.svg>, "className"> & {
  className?: string;
  onAnimationFinish?: () => void;
};

export function AnimatedBrandLogoIcon({
  className,
  onAnimationFinish,
  ...props
}: Props) {
  const [svgScope, animate] = useAnimate();
  const [rightPathScope, _animateRight] = useAnimate();
  const [leftPathScope, _animateLeft] = useAnimate();

  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const handleAnimation = async () => {
      if (isAnimating) {
        return;
      }

      const animation = animate([
        [
          [leftPathScope.current, rightPathScope.current],
          { opacity: [0, 1] },
          { duration: 0 },
        ],
        [
          [leftPathScope.current, rightPathScope.current],
          { pathLength: [0, 1] },
          { duration: 2, ease: "linear" },
        ],
        [
          [leftPathScope.current, rightPathScope.current],
          { fillOpacity: [0, 1] },
          { at: "<", duration: 2, ease: "circIn" },
        ],
        [
          leftPathScope.current,
          { x: [-24, 0] },
          { at: "<", duration: 2, ease: [0.72, 0.01, 0.98, 0.79] },
        ],
        [
          rightPathScope.current,
          { x: [20, 0] },
          { at: "<", duration: 2, ease: [0.72, 0.01, 0.98, 0.79] },
        ],
        [
          [svgScope.current],
          {
            y: [8, 0],
          },
          { duration: 2, ease: "easeOut" },
        ],
        [
          [leftPathScope.current, rightPathScope.current],
          { fillOpacity: 0.075 },
          { at: "-1", duration: 2.5, ease: "easeOut" },
        ],
        [
          leftPathScope.current,
          { x: -72 },
          { at: "-1.5", duration: 1.5, ease: [0.64, 0, 0.36, 1] },
        ],
        [
          rightPathScope.current,
          { x: 72 },
          { at: "<", duration: 1.5, ease: [0.64, 0, 0.36, 1] },
        ],
      ]);

      setIsAnimating(true);
      await animation;
      setIsAnimating(false);
      onAnimationFinish?.();
    };

    handleAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate, leftPathScope, rightPathScope, svgScope]);

  return (
    <motion.svg
      ref={svgScope}
      className={twMerge("h-60 sm:h-80 overflow-visible mx-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      // TODO - figure out why this can't be moved into the `animate()` sequence array.
      variants={{
        dropStart: {
          filter:
            "drop-shadow(0px 0px 96px rgba(255, 255, 255, 0.7)) drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
        },
        dropEnd: {
          filter:
            "drop-shadow(0px 0px 48px rgba(255, 255, 255, 0.4)) drop-shadow(0 25px 25px rgb(0 0 0 / 0.25)) drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))",
        },
      }}
      initial="dropStart"
      animate="dropEnd"
      transition={{
        default: { delay: 2, duration: 2, ease: "easeOut" },
      }}
      {...props}
    >
      <motion.path
        ref={leftPathScope}
        // prevents the path from being visible on load
        variants={{
          initial: {
            opacity: 0,
            pathLength: 0,
          },
        }}
        initial="initial"
        className="fill-primary-600 stroke-primary-600 dark:fill-primary-600 dark:stroke-primary-600"
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="m0 0 20 32L0 64h20l12-20h-8l16-24h-8L20 0H0Z"
      />
      <motion.path
        ref={rightPathScope}
        // prevents the path from being visible on load
        variants={{
          initial: {
            opacity: 0,
            pathLength: 0,
          },
        }}
        initial="initial"
        className="fill-primary-1000 stroke-primary-1000 dark:fill-base-300 dark:stroke-base-300"
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M64 64 44 32 64 0H44L32 20h8L24 44h8l12 20h20Z"
      />
    </motion.svg>
  );
}
