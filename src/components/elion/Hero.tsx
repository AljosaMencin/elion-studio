import { useState } from "react";
import { motion } from "framer-motion";
import HeroPhoneVideo from "@/components/elion/HeroPhoneVideo";
import { useGetInTouch } from "@/components/elion/GetInTouchDrawer";

const StartProjectButton = () => {
  const [hovered, setHovered] = useState(false);
  const { open } = useGetInTouch();
  return (
    <button
      type="button"
      onClick={open}
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
    </button>
  );
};

const SeeHowButton = () => {
  const [hovered, setHovered] = useState(false);
  const scrollToHow = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button
      type="button"
      onClick={scrollToHow}
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
    </button>
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

            {/* Buttons + trust strip share a container so they line up */}
            <div className="mt-12 flex flex-col items-stretch gap-5 animate-fade-in" style={{ animationDelay: "180ms" }}>
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
                <StartProjectButton />
                <SeeHowButton />
              </div>

              {/* Trust strip — same width as the button row, items spread end-to-end */}
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-1">
                {["14-day launch", "No lock-in", "Results guaranteed"].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-[13px] font-semibold text-bone/55 md:text-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/70 shadow-[0_0_8px_rgba(129,140,248,0.6)]" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual — desktop only */}
          <div
            className="hidden lg:block w-full lg:flex-[1.15] animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <HeroPhoneVideo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
