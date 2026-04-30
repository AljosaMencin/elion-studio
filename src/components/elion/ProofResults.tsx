import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollFadeBlur from "@/components/elion/ScrollFadeBlur";

// ── Card 1: Conversion Tracking ─────────────────────────────────────────────

const ConversionTrackingViz = ({ hovered }: { hovered: boolean }) => (
  <div className="relative h-full w-full overflow-hidden">
    {/* Faint UI bubbles */}
    <div className="absolute inset-0">
      <div className="absolute left-[12%] top-[20%] h-2 w-12 rounded-full bg-white/[0.04]" />
      <div className="absolute left-[55%] top-[35%] h-2 w-16 rounded-full bg-white/[0.04]" />
      <div className="absolute left-[20%] top-[65%] h-2 w-10 rounded-full bg-white/[0.04]" />
      <div className="absolute left-[60%] top-[75%] h-2 w-14 rounded-full bg-white/[0.04]" />
    </div>

    {/* Cursor 1 — always present, slow loop */}
    <motion.div
      className="absolute"
      initial={false}
      animate={{
        x: ["10%", "60%", "30%", "10%"],
        y: ["20%", "55%", "75%", "20%"],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
    >
      <Cursor tone="bone" />
    </motion.div>

    {/* Cursor 2 — appears on hover */}
    <AnimatePresence>
      {hovered && (
        <motion.div
          key="cursor2"
          className="absolute"
          initial={{ opacity: 0, x: "70%", y: "70%" }}
          animate={{
            opacity: 1,
            x: ["70%", "25%", "55%", "70%"],
            y: ["70%", "30%", "60%", "70%"],
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.3 },
            x: { duration: 11, repeat: Infinity, ease: "linear" },
            y: { duration: 11, repeat: Infinity, ease: "linear" },
          }}
        >
          <Cursor tone="indigo" />
          <motion.div
            className="absolute left-5 top-3 whitespace-nowrap rounded-md border border-indigo-400/40 bg-indigo-500/15 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-indigo-200 backdrop-blur-sm"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            Customer
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Cursor = ({ tone }: { tone: "bone" | "indigo" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill={tone === "indigo" ? "rgba(165,180,252,0.95)" : "rgba(245,245,240,0.65)"}
  >
    <path d="M5 3l14 8-6.5 1.5L9 19z" />
  </svg>
);

// ── Card 2: Booking Insights ────────────────────────────────────────────────

const BookingInsightsViz = ({ hovered }: { hovered: boolean }) => {
  const days = Array.from({ length: 28 });
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Stack of calendar pages */}
      <div className="relative h-[88px] w-[120px]">
        {[2, 1, 0].map((depth) => (
          <motion.div
            key={depth}
            className="absolute inset-0 rounded-lg border border-indigo-400/25 bg-[#0d0e1a]"
            style={{
              boxShadow: "0 4px 16px -8px rgba(99,102,241,0.35)",
            }}
            initial={false}
            animate={
              hovered
                ? {
                    x: depth * 4 + (depth === 0 ? -40 : 0),
                    y: depth * -4 + (depth === 0 ? -22 : 0),
                    rotate: depth === 0 ? -10 : depth * 1.5,
                    opacity: depth === 0 ? 0 : 1 - depth * 0.2,
                  }
                : { x: depth * 3, y: depth * -3, rotate: 0, opacity: 1 - depth * 0.18 }
            }
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: depth * 0.08,
            }}
          >
            <div className="flex items-center justify-between border-b border-indigo-400/20 px-2 py-1.5">
              <div className="h-1 w-6 rounded-full bg-indigo-300/60" />
              <div className="h-1 w-3 rounded-full bg-indigo-300/30" />
            </div>
            <div className="grid grid-cols-7 gap-[2px] p-1.5">
              {days.map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[2px]"
                  style={{
                    background:
                      i === 9 || i === 14 || i === 22
                        ? "rgba(165,180,252,0.55)"
                        : "rgba(99,102,241,0.12)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Floating page on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="float"
              className="absolute inset-0 rounded-lg border border-indigo-300/40 bg-[#0d0e1a]"
              initial={{ opacity: 0, y: 0, x: 0, rotate: 0 }}
              animate={{ opacity: [0, 1, 1, 0], y: -50, x: 30, rotate: 8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity, repeatDelay: 0.4 }}
            >
              <div className="flex items-center justify-between border-b border-indigo-400/20 px-2 py-1.5">
                <div className="h-1 w-6 rounded-full bg-indigo-300/60" />
              </div>
              <div className="grid grid-cols-7 gap-[2px] p-1.5">
                {days.map((_, i) => (
                  <div key={i} className="aspect-square rounded-[2px] bg-indigo-400/15" />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ── Card 3: Traffic Analytics ───────────────────────────────────────────────

const TrafficAnalyticsViz = ({ hovered }: { hovered: boolean }) => {
  const bars = [40, 60, 50, 75, 55, 80, 65];
  return (
    <div className="relative flex h-full w-full flex-col justify-end gap-3 px-4 pb-4 pt-6">
      {/* Line graph */}
      <div className="relative h-12 w-full">
        <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(165,180,252,0)" />
              <stop offset="50%" stopColor="rgba(165,180,252,0.4)" />
              <stop offset="100%" stopColor="rgba(165,180,252,0.9)" />
            </linearGradient>
          </defs>
          <motion.path
            fill="none"
            stroke={hovered ? "rgba(165,180,252,0.9)" : "rgba(245,245,240,0.4)"}
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{
              d: hovered
                ? [
                    "M0,40 L30,30 L60,38 L90,18 L120,28 L150,12 L180,22 L200,8",
                    "M0,38 L30,28 L60,36 L90,22 L120,24 L150,16 L180,18 L200,12",
                    "M0,42 L30,32 L60,40 L90,16 L120,30 L150,10 L180,24 L200,6",
                  ]
                : "M0,40 L30,32 L60,38 L90,28 L120,32 L150,22 L180,28 L200,18",
            }}
            transition={
              hovered
                ? { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
                : { duration: 0.4 }
            }
          />
          {hovered && (
            <motion.circle
              r="2.5"
              fill="rgba(165,180,252,0.9)"
              animate={{
                cx: [0, 200],
                cy: [40, 8],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 0 4px rgba(165,180,252,0.8))" }}
            />
          )}
        </svg>
      </div>

      {/* Bars */}
      <div className="flex h-10 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            initial={false}
            animate={{
              height: hovered ? `${h + Math.sin(i) * 10}%` : `${h * 0.6}%`,
              backgroundColor: hovered ? "rgba(129,140,248,0.55)" : "rgba(245,245,240,0.12)",
            }}
            transition={{
              duration: 1.4,
              repeat: hovered ? Infinity : 0,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.06,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ── Card 4: Performance Overview ────────────────────────────────────────────

const PerformanceOverviewViz = ({ hovered }: { hovered: boolean }) => {
  const tiles = [
    { w: 60, h: 32 },
    { w: 36, h: 32 },
    { w: 44, h: 24 },
    { w: 52, h: 24 },
    { w: 28, h: 20 },
    { w: 64, h: 20 },
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center px-4 py-4">
      <motion.div
        className="grid grid-cols-3 gap-1.5"
        animate={hovered ? { scale: 1 } : { scale: 0.98 }}
        transition={{ duration: 0.4 }}
      >
        {tiles.map((t, i) => (
          <motion.div
            key={i}
            className="rounded-md border border-white/[0.08] bg-white/[0.04]"
            style={{ width: t.w, height: t.h }}
            initial={false}
            animate={
              hovered
                ? {
                    opacity: 1,
                    borderColor:
                      i === 1 || i === 4
                        ? "rgba(165,180,252,0.5)"
                        : "rgba(245,245,240,0.12)",
                    backgroundColor:
                      i === 1 || i === 4
                        ? "rgba(99,102,241,0.18)"
                        : "rgba(245,245,240,0.05)",
                    boxShadow:
                      i === 1 || i === 4
                        ? "0 0 18px -4px rgba(129,140,248,0.6)"
                        : "0 0 0 0 rgba(0,0,0,0)",
                  }
                : {
                    opacity: [0.7, 0.85, 0.7],
                  }
            }
            transition={
              hovered
                ? { duration: 0.5, ease: "easeOut", delay: i * 0.06 }
                : { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }
            }
          />
        ))}
      </motion.div>

      {/* Scanning line on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="scan"
            className="pointer-events-none absolute inset-x-4 h-px bg-gradient-to-r from-transparent via-indigo-300/70 to-transparent"
            initial={{ top: "10%", opacity: 0 }}
            animate={{ top: ["10%", "90%", "10%"], opacity: [0, 0.9, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Cards data ──────────────────────────────────────────────────────────────

type CardDef = {
  tag: string;
  title: string;
  description: string;
  Viz: React.ComponentType<{ hovered: boolean }>;
};

const cards: CardDef[] = [
  {
    tag: "Conversion Tracking",
    title: "Know exactly where visitors turn into customers",
    description: "Know exactly where visitors turn into customers — and where they don't.",
    Viz: ConversionTrackingViz,
  },
  {
    tag: "Booking Insights",
    title: "Reservations and customer behavior, in real time",
    description: "Track reservations, peak times, and customer behavior in real time.",
    Viz: BookingInsightsViz,
  },
  {
    tag: "Traffic Analytics",
    title: "Understand where your traffic actually performs",
    description: "Understand where your traffic comes from and what actually performs.",
    Viz: TrafficAnalyticsViz,
  },
  {
    tag: "Performance Overview",
    title: "All your key metrics in one place",
    description: "All your key metrics in one place — clear, structured, and actionable.",
    Viz: PerformanceOverviewViz,
  },
];

// ── Section ─────────────────────────────────────────────────────────────────

const ProofResults = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="results" className="relative px-6 py-32 md:px-12 md:py-40 bg-obsidian-surface">
      <div className="mx-auto max-w-[1440px]">

        <ScrollFadeBlur className="mb-20">
          <h2 className="font-display text-5xl font-bold leading-[0.92] tracking-tighter text-bone md:text-7xl">
            See what drives <br />
            <span className="text-bone/30">your business.</span>
          </h2>
        </ScrollFadeBlur>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const active = hoveredIndex === i;
            const Viz = c.Viz;
            return (
              <motion.div
                key={c.tag}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col rounded-2xl border bg-[#0a0a0d] p-5 transition-colors duration-300 ease-out ${
                  active
                    ? "border-indigo-400/35 bg-[#0c0d18]"
                    : "border-white/[0.06]"
                }`}
                animate={
                  active
                    ? { y: -6, scale: 1.015 }
                    : { y: 0, scale: 1 }
                }
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Viz area */}
                <div className="relative h-36 w-full overflow-hidden rounded-xl border border-white/[0.04] bg-[#070709]">
                  <Viz hovered={active} />
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-bone/45">
                    {c.tag}
                  </span>
                  <p className="text-[13px] font-medium leading-relaxed text-bone/65">
                    {c.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <ScrollFadeBlur className="mt-20 flex flex-col items-center gap-5 text-center">
          <p className="max-w-[52ch] text-balance font-display text-2xl font-bold leading-snug tracking-tight text-bone md:text-3xl">
            One partner. One system. Every part designed to grow with your business.
          </p>
          <p className="max-w-[52ch] text-balance text-sm font-medium leading-relaxed text-bone/45 md:text-base">
            No vanity metrics, no guesswork — just a clear picture of what's working, what isn't, and where to grow next. We build the systems, you stay in control.
          </p>
        </ScrollFadeBlur>
      </div>
    </section>
  );
};

export default ProofResults;
