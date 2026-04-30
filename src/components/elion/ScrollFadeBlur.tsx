import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max blur in px at the edges of the visibility window. Default 10. */
  intensity?: number;
  /** When true (default), element blurs/fades on the way out as well as in. */
  fadeOut?: boolean;
};

export const ScrollFadeBlur = ({
  children,
  className,
  intensity = 10,
  fadeOut = true,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Progress: 0 = bottom edge entering viewport, 1 = top edge leaving viewport
  // Active "clear" window sits in the middle.
  const blur = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    [intensity, 0, 0, fadeOut ? intensity : 0]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0, 1, 1, fadeOut ? 0 : 1]
  );
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ filter, opacity, willChange: "filter, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeBlur;
