import { useState } from "react";
import { motion } from "framer-motion";
import HeroDashboardAnimation from "@/components/elion/HeroDashboardAnimation";

const StartProjectButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-bone/30 bg-transparent px-8 py-4 text-sm font-bold text-bone transition-colors duration-300 ease-out hover:border-indigo-300 hover:bg-indigo-300 hover:text-obsidian"
    >
      <span className="relative inline-flex h-4 w-5 items-center justify-center">
        <motion.svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="absolute"
          initial={false}
          animate={
            hovered
              ? { rotate: -20, x: -1, opacity: 1 }
              : { rotate: -10, x: 0, opacity: 0.65 }
          }
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <path d="M14 6l6 6-3 3-6-6z" />
          <path d="M11 9L3 17l3 3 8-8" />
        </motion.svg>
        <motion.svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="absolute"
          initial={false}
          animate={
            hovered
              ? { rotate: 25, x: 1, opacity: 1 }
              : { rotate: 12, x: 0, opacity: 0.65 }
          }
          transition={{ duration: 0.28, ease: "easeOut", delay: 0.04 }}
        >
          <path d="M3 21l4-4" />
          <path d="M14 4l6 6-3 3-6-6z" />
          <path d="M9 11l-2 2 3 3 2-2" />
        </motion.svg>
      </span>
      Start a project
    </a>
  );
};

const SeeHowButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#how-it-works"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-bone/30 bg-transparent px-8 py-4 text-sm font-bold text-bone transition-colors duration-300 ease-out hover:border-indigo-300 hover:bg-indigo-300 hover:text-obsidian"
    >
      See how it works
      <span className="relative inline-flex h-4 w-[22px] items-center justify-center font-mono text-[13px]">
        <motion.span
          className="inline-flex items-center"
          initial={false}
          animate={hovered ? { x: -2, opacity: 1 } : { x: 0, opacity: 0.65 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {"<"}
        </motion.span>
        <motion.span
          className="text-[10px]"
          initial={false}
          animate={
            hovered
              ? { opacity: [0.4, 1, 0.5, 1], scale: 1 }
              : { opacity: 0.55, scale: 0.95 }
          }
          transition={
            hovered
              ? { duration: 0.7, ease: "easeOut" }
              : { duration: 0.22, ease: "easeOut" }
          }
        >
          /
        </motion.span>
        <motion.span
          className="inline-flex items-center"
          initial={false}
          animate={hovered ? { x: 2, opacity: 1 } : { x: 0, opacity: 0.65 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {">"}
        </motion.span>
      </span>
    </a>
  );
};

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pb-20 pt-32 md:px-12">
      <div className="relative z-10 w-full max-w-[1440px]">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* Left: Copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-[0.95]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-bone/60 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
              Digital growth studio
            </div>

            <h1 className="max-w-[18ch] text-balance font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight text-bone md:text-[4.25rem] md:leading-[1.04] lg:text-[4.75rem] animate-fade-in">
              A smarter digital{" "}
              <span className="text-bone/30">foundation for business growth.</span>
            </h1>

            <p
              className="mt-8 max-w-[48ch] text-balance text-sm font-medium leading-relaxed text-sand/70 md:text-base animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              We design, build, and continuously optimize your digital ecosystem — from high-converting websites to booking systems, analytics, and growth marketing. Not a one-time project, but a system that evolves with your business.
            </p>

            <div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start animate-fade-in"
              style={{ animationDelay: "180ms" }}
            >
              <StartProjectButton />
              <SeeHowButton />
            </div>

            {/* Trust strip */}
            <div
              className="mt-12 flex items-center gap-6 animate-fade-in"
              style={{ animationDelay: "260ms" }}
            >
              {["14-day launch", "No lock-in", "Results guaranteed"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-[11px] font-medium text-bone/40">
                  <span className="h-1 w-1 rounded-full bg-bone/20" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="w-full lg:flex-[1.15] animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <HeroDashboardAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
