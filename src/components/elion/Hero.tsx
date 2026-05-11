import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGetInTouch } from "@/components/elion/GetInTouchDrawer";
import EcosystemHero from "@/components/elion/EcosystemHero";

const GetInTouchButton = () => {
  const { open } = useGetInTouch();
  return (
    <motion.button
      type="button"
      onClick={open}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-bone px-10 py-4 text-sm font-bold text-obsidian shadow-soft sm:w-auto"
    >
      <span className="relative z-10">Get in touch</span>
      <svg
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
      <motion.span
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        initial={{ x: "-150%" }}
        animate={{ x: "350%" }}
        transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

const MeetTheTeamButton = () => (
  <Link
    to="/about"
    className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-bone/15 bg-white/[0.02] px-10 py-4 text-sm font-semibold text-bone/80 transition-all duration-300 hover:border-bone/35 hover:bg-white/[0.05] hover:text-bone sm:w-auto"
  >
    Meet the team
    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-bone/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-bone/50">
      <svg
        width="9"
        height="9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <circle cx="17" cy="7" r="3" />
        <path d="M21 21v-2a3 3 0 0 0-2-2.83" />
      </svg>
    </span>
  </Link>
);

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center px-6 pb-20 pt-40 md:px-12 md:pt-48">
      <div className="relative z-10 flex w-full max-w-[1100px] flex-col items-center text-center">
        <h1 className="max-w-[20ch] text-balance font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight text-bone md:text-[4.25rem] md:leading-[1.04] lg:text-[5rem] animate-fade-in">
          A smarter digital{" "}
          <span className="text-bone/30">foundation for business growth.</span>
        </h1>

        <div
          className="mt-10 flex w-full max-w-md flex-col items-center gap-6 animate-fade-in"
          style={{ animationDelay: "180ms" }}
        >
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <GetInTouchButton />
            <MeetTheTeamButton />
          </div>

          <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2">
            {["14-day launch", "No lock-in", "Results guaranteed"].map((t) => (
              <div
                key={t}
                className="flex items-center gap-2.5 text-[13px] font-semibold text-bone/65 md:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80 shadow-[0_0_10px_rgba(129,140,248,0.7)]" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ecosystem visual */}
      <motion.div
        className="relative z-10 mt-16 w-full max-w-[1200px] md:mt-20"
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <EcosystemHero />
      </motion.div>
    </section>
  );
};

export default Hero;
