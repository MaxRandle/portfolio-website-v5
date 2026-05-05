import { cn } from "tailwind-variants";

type AnimatedXSnakePathProps = {
  size?: number;
  className?: string;
};

const PATH =
  "M60 8L65 0L70 0L65 8L70 16L75 16L70 8L100 8L112 28L120 28L104 52L112 52L100 72L70 72L75 80L70 80L65 72L70 64L65 64L55 80L50 80L55 72L50 64L45 64L50 72L20 72L8 92L16 92L0 116L8 116L20 136L50 136L45 128L50 128L55 136L50 144L55 144L65 128L70 128L65 136L70 144L75 144L70 136L100 136L112 156L120 156L104 180L112 180L100 200L70 200L75 208L70 208L65 200L70 192L65 192L55 208L50 208L55 200L50 192L45 192L50 200L20 200L8 220L16 220L0 244L8 244L20 264L50 264L45 256L50 256L55 264L50 272L55 272L65 256L70 256L65 264L70 272L75 272L70 264L100 264L112 284L120 284L104 308L112 308L100 328L70 328L75 336L70 336L65 328L70 320L65 320L60 328";

export const AnimatedXSnakePath: React.FC<AnimatedXSnakePathProps> = ({
  size,
  className,
}) => {
  return (
    <>
      <style>{`
          .x-snake-path {
            stroke-dasharray: 1;
            stroke-dashoffset: 1;

            animation: draw linear;
            animation-fill-mode: both;
            animation-timeline: view();
            animation-range: entry -50% cover 50%;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
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
        viewBox="0 0 120 336"
        overflow="visible"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        className={cn(className, "x-snake-svg")}
      >
        <path d={PATH} stroke="currentColor" strokeOpacity={0.15} />
        <path className="shadow-glow-sm x-snake-path" d={PATH} pathLength={1} />
      </svg>
    </>
  );
};
