"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type AnimatedXSnakePathProps = {
  size?: number;
  className?: string;
};

// Path reversed so it starts at the top (40,0) and ends at the bottom (40,320)
const PATH =
  // "M40 320h20l12-20h-8l16-24h-8l-12-20H20L8 236H0l16-24H8l12-20h40l12-20h-8l16-24h-8l-12-20H20L8 108H0l16-24H8l12-20h40l12-20h-8l16-24h-8L60 0H40";
  "M40 0L60 0L72 20L80 20L64 44L72 44L60 64L20 64L8 84L16 84L0 108L8 108L20 128L60 128L72 148L80 148L64 172L72 172L60 192L20 192L8 212L16 212L0 236L8 236L20 256L60 256L72 276L80 276L64 300L72 300L60 320L40 320";

export const AnimatedXSnakePath: React.FC<AnimatedXSnakePathProps> = ({
  size,
  className,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: svgRef as unknown as React.RefObject<HTMLElement>,
    offset: ["start center", "end center"],
  });

  const dashOffset = useTransform(scrollYProgress, [0, 1], [pathLength, 0]);

  return (
    <motion.svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 80 320"
      overflow="visible"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      className={className}
    >
      <path d={PATH} stroke="currentColor" strokeOpacity={0.15} />
      <motion.path
        className="shadow-glow-sm"
        ref={pathRef}
        d={PATH}
        strokeDasharray={pathLength}
        strokeDashoffset={dashOffset}
      />
    </motion.svg>
  );
};
