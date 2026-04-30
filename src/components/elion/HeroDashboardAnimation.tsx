import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LaptopFrame } from "@/components/elion/DeviceMockups";

// ── Scene definitions ───────────────────────────────────────────────────────

const scenes = ["marketing", "booking", "dashboard", "analytics"] as const;
type SceneKey = (typeof scenes)[number];

const SCENE_URL: Record<SceneKey, string> = {
  marketing: "elion.studio",
  booking: "elion.studio / book",
  dashboard: "elion.studio / dashboard",
  analytics: "elion.studio / analytics",
};

const SCENE_DURATION = 4200; // ms each scene is visible

// Cursor target per scene (% of content area)
const CURSOR_TARGETS: Record<SceneKey, { x: string; y: string }> = {
  marketing: { x: "32%", y: "76%" },
  booking: { x: "75%", y: "55%" },
  dashboard: { x: "30%", y: "26%" },
  analytics: { x: "62%", y: "44%" },
};

const sceneVariants = {
  initial: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 1.04,
    filter: "blur(8px)",
    transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
  },
};

// ── Marketing scene ─────────────────────────────────────────────────────────

const MarketingScene = () => (
  <div className="absolute inset-0 flex flex-col" style={{ background: "#04040a" }}>
    {/* Mini site nav */}
    <div
      className="flex items-center justify-between px-4"
      style={{
        height: 22,
        background: "rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="rounded" style={{ height: 6, width: 38, background: "rgba(255,255,255,0.22)" }} />
      <div className="flex gap-2.5">
        {[26, 22, 22, 18].map((w, i) => (
          <div key={i} className="rounded" style={{ height: 4, width: w, background: "rgba(255,255,255,0.1)" }} />
        ))}
      </div>
      <div className="rounded-full" style={{ height: 14, width: 48, background: "rgba(129,140,248,0.32)" }} />
    </div>

    {/* Hero */}
    <div className="flex-1 flex flex-col items-center justify-center gap-1.5 px-5">
      <div className="rounded" style={{ height: 5, width: 56, background: "rgba(255,255,255,0.14)" }} />
      <motion.div
        className="rounded mt-1"
        style={{ height: 14, background: "rgba(255,255,255,0.22)" }}
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
      />
      <motion.div
        className="rounded"
        style={{ height: 14, background: "rgba(255,255,255,0.1)" }}
        initial={{ width: 0 }}
        animate={{ width: 130 }}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
      />
      <div className="rounded mt-1" style={{ height: 5, width: 200, background: "rgba(255,255,255,0.06)" }} />
      <div className="rounded" style={{ height: 5, width: 160, background: "rgba(255,255,255,0.05)" }} />
      <motion.div
        className="flex gap-2 mt-3"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <div className="rounded-full" style={{ height: 18, width: 70, background: "rgba(250,250,250,0.92)" }} />
        <div
          className="rounded-full"
          style={{ height: 18, width: 70, border: "1px solid rgba(255,255,255,0.18)" }}
        />
      </motion.div>
    </div>

    {/* Feature tiles */}
    <motion.div
      className="grid grid-cols-3 gap-2 px-3 pb-3"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.85 }}
    >
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-lg"
          style={{
            padding: "6px 8px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="rounded-sm mb-1"
            style={{ height: 11, width: 11, background: "rgba(129,140,248,0.45)" }}
          />
          <div className="rounded mb-1" style={{ height: 4, width: 38, background: "rgba(255,255,255,0.16)" }} />
          <div className="rounded" style={{ height: 3, width: 52, background: "rgba(255,255,255,0.06)" }} />
        </div>
      ))}
    </motion.div>
  </div>
);

// ── Booking scene ───────────────────────────────────────────────────────────

const BookingScene = () => {
  const days = Array.from({ length: 35 });
  const slotIndices = [0, 1, 2, 3, 4];
  const selectedSlot = 2;

  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: "#06060d" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-4"
        style={{
          height: 22,
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
          <div className="rounded" style={{ height: 5, width: 56, background: "rgba(255,255,255,0.22)" }} />
        </div>
        <div className="flex gap-2">
          <div className="rounded-full" style={{ height: 12, width: 12, background: "rgba(255,255,255,0.06)" }} />
          <div className="rounded-full" style={{ height: 12, width: 12, background: "rgba(255,255,255,0.06)" }} />
        </div>
      </div>

      {/* Body: calendar + slots */}
      <div className="flex-1 grid grid-cols-[1.4fr_1fr] gap-3 p-3">
        {/* Calendar */}
        <motion.div
          className="rounded-lg p-2"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="rounded" style={{ height: 4, width: 36, background: "rgba(255,255,255,0.18)" }} />
            <div className="flex gap-1">
              <div className="rounded" style={{ height: 8, width: 8, background: "rgba(255,255,255,0.12)" }} />
              <div className="rounded" style={{ height: 8, width: 8, background: "rgba(255,255,255,0.12)" }} />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-[3px] mb-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="rounded" style={{ height: 3, background: "rgba(255,255,255,0.08)" }} />
            ))}
          </div>
          <div className="grid grid-cols-7 gap-[3px]">
            {days.map((_, i) => {
              const isHighlighted = i === 16;
              const isPast = i < 8;
              return (
                <motion.div
                  key={i}
                  className="aspect-square rounded-[2px]"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isPast ? 0.25 : 1,
                    backgroundColor: isHighlighted
                      ? "rgba(165,180,252,0.85)"
                      : i % 5 === 1
                      ? "rgba(99,102,241,0.18)"
                      : "rgba(255,255,255,0.05)",
                  }}
                  transition={{ duration: 0.25, delay: 0.2 + i * 0.008 }}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Time slots */}
        <motion.div
          className="flex flex-col gap-1.5"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
        >
          <div className="rounded mb-0.5" style={{ height: 4, width: 44, background: "rgba(255,255,255,0.18)" }} />
          {slotIndices.map((i) => (
            <motion.div
              key={i}
              className="rounded-md flex items-center justify-between px-2"
              style={{
                height: 18,
                background:
                  i === selectedSlot ? "rgba(99,102,241,0.32)" : "rgba(255,255,255,0.04)",
                border:
                  i === selectedSlot
                    ? "1px solid rgba(165,180,252,0.5)"
                    : "1px solid rgba(255,255,255,0.06)",
              }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.45 + i * 0.06 }}
            >
              <div
                className="rounded"
                style={{
                  height: 3,
                  width: 30,
                  background:
                    i === selectedSlot ? "rgba(199,210,254,0.9)" : "rgba(255,255,255,0.18)",
                }}
              />
              <div
                className="rounded-full"
                style={{
                  height: 4,
                  width: 4,
                  background:
                    i === selectedSlot ? "rgba(199,210,254,1)" : "rgba(255,255,255,0.15)",
                }}
              />
            </motion.div>
          ))}

          <motion.div
            className="rounded-md flex items-center justify-center mt-1"
            style={{ height: 20, background: "rgba(165,180,252,0.85)" }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.95 }}
          >
            <div className="rounded" style={{ height: 4, width: 36, background: "rgba(15,15,30,0.55)" }} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// ── Dashboard scene ─────────────────────────────────────────────────────────

const DashboardScene = () => (
  <div className="absolute inset-0 flex flex-col" style={{ background: "#06060e", padding: 10 }}>
    {/* Stat row */}
    <motion.div
      className="grid grid-cols-3 gap-2 mb-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
      }}
    >
      {[
        { label: "Conv.", value: "+81%", accent: "rgba(52,211,153,0.9)" },
        { label: "Traffic", value: "14.2k", accent: "rgba(250,250,250,0.92)" },
        { label: "Revenue", value: "$48k", accent: "rgba(250,250,250,0.92)" },
      ].map((s) => (
        <motion.div
          key={s.label}
          className="rounded-lg flex flex-col gap-1"
          style={{
            padding: "7px 9px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
          }}
        >
          <div className="rounded" style={{ height: 4, width: 32, background: "rgba(255,255,255,0.14)" }} />
          <div
            className="font-display font-bold"
            style={{
              fontSize: 13,
              color: s.accent,
              letterSpacing: "-0.02em",
              fontFamily: "Space Grotesk",
            }}
          >
            {s.value}
          </div>
          <div className="rounded" style={{ height: 3, width: 22, background: "rgba(52,211,153,0.4)" }} />
        </motion.div>
      ))}
    </motion.div>

    {/* Chart */}
    <motion.div
      className="flex-1 rounded-lg overflow-hidden mb-2 relative"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
        padding: "6px 8px",
      }}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="rounded" style={{ height: 4, width: 50, background: "rgba(255,255,255,0.16)" }} />
        <div className="rounded" style={{ height: 3, width: 30, background: "rgba(255,255,255,0.08)" }} />
      </div>
      <div className="flex items-end gap-[3px] h-[calc(100%-12px)]">
        {[30, 45, 38, 55, 48, 62, 58, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              background:
                i >= 10
                  ? "linear-gradient(to top, rgba(99,102,241,0.85), rgba(139,92,246,0.4))"
                  : "rgba(255,255,255,0.08)",
            }}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.5, delay: 0.55 + i * 0.03, ease: "easeOut" }}
          />
        ))}
      </div>
    </motion.div>

    {/* Task list */}
    <motion.div
      className="rounded-lg flex flex-col gap-1"
      style={{
        padding: "5px 8px",
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1 }}
    >
      {[
        { w: 90, done: true },
        { w: 110, done: true },
        { w: 80, done: false },
      ].map((t, i) => (
        <div key={i} className="flex items-center gap-2">
          <span
            className="h-1 w-1 rounded-full flex-shrink-0"
            style={{ background: t.done ? "rgba(52,211,153,0.85)" : "rgba(255,255,255,0.2)" }}
          />
          <div
            className="rounded"
            style={{
              height: 3,
              width: t.w,
              background: t.done ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.1)",
            }}
          />
        </div>
      ))}
    </motion.div>
  </div>
);

// ── Analytics scene ─────────────────────────────────────────────────────────

const AnalyticsScene = () => (
  <div className="absolute inset-0 flex flex-col" style={{ background: "#05050d", padding: 10 }}>
    {/* Filter row */}
    <motion.div
      className="flex items-center justify-between mb-2"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <div className="rounded" style={{ height: 4, width: 50, background: "rgba(255,255,255,0.18)" }} />
      </div>
      <div className="flex gap-1.5">
        {[
          { w: 26, active: false },
          { w: 22, active: true },
          { w: 28, active: false },
        ].map((p, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              height: 12,
              width: p.w,
              background: p.active ? "rgba(165,180,252,0.7)" : "rgba(255,255,255,0.05)",
              border: p.active ? "1px solid rgba(165,180,252,0.4)" : "1px solid rgba(255,255,255,0.06)",
            }}
          />
        ))}
      </div>
    </motion.div>

    {/* Headline KPI */}
    <motion.div
      className="flex items-end gap-3 mb-2"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.25 }}
    >
      <div
        className="font-display font-bold"
        style={{
          fontSize: 22,
          color: "rgba(250,250,250,0.95)",
          letterSpacing: "-0.04em",
          fontFamily: "Space Grotesk",
          lineHeight: 1,
        }}
      >
        $48,230
      </div>
      <div
        className="rounded-full px-1.5 py-0.5"
        style={{
          fontSize: 7,
          fontWeight: 700,
          color: "rgba(52,211,153,0.95)",
          background: "rgba(52,211,153,0.12)",
          border: "1px solid rgba(52,211,153,0.25)",
        }}
      >
        +24% MoM
      </div>
    </motion.div>

    {/* Big chart */}
    <motion.div
      className="flex-1 rounded-lg overflow-hidden mb-2 relative"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay: 0.4 }}
    >
      <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="heroAnalyticsGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(99,102,241,0.5)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 80 C40 70 80 60 120 50 C160 40 200 45 240 30 C280 18 320 22 360 12 L400 8 L400 100 L0 100 Z"
          fill="url(#heroAnalyticsGrad)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.55 }}
        />
        <motion.path
          d="M0 80 C40 70 80 60 120 50 C160 40 200 45 240 30 C280 18 320 22 360 12 L400 8"
          fill="none"
          stroke="rgba(165,180,252,0.95)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.55, ease: "easeOut" }}
        />
        <motion.circle
          cx="400"
          cy="8"
          r="3"
          fill="rgba(165,180,252,1)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.7 }}
          style={{ filter: "drop-shadow(0 0 4px rgba(165,180,252,0.8))" }}
        />
      </svg>
    </motion.div>

    {/* Small KPIs */}
    <motion.div
      className="grid grid-cols-3 gap-1.5"
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.95 }}
    >
      {[
        { label: 36, value: "+81%", color: "rgba(52,211,153,0.9)" },
        { label: 30, value: "14.2k", color: "rgba(250,250,250,0.85)" },
        { label: 28, value: "0.9s", color: "rgba(250,250,250,0.85)" },
      ].map((m, i) => (
        <div
          key={i}
          className="rounded-lg"
          style={{
            padding: "5px 7px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            className="rounded mb-1"
            style={{ height: 3, width: m.label, background: "rgba(255,255,255,0.1)" }}
          />
          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: m.color,
              fontFamily: "Space Grotesk",
              letterSpacing: "-0.02em",
            }}
          >
            {m.value}
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

// ── Animated cursor ─────────────────────────────────────────────────────────

const AnimatedCursor = ({ scene }: { scene: SceneKey }) => {
  const target = CURSOR_TARGETS[scene];
  return (
    <motion.div
      className="pointer-events-none absolute z-20"
      animate={{ left: target.x, top: target.y }}
      transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="relative">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="rgba(245,245,240,0.92)"
          style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.6))" }}
        >
          <path d="M5 3l14 8-6.5 1.5L9 19z" />
        </svg>
        {/* Click ripple — scheduled to play roughly when cursor reaches target */}
        <motion.span
          key={scene}
          className="absolute"
          style={{
            left: 4,
            top: 4,
            width: 10,
            height: 10,
            borderRadius: "9999px",
            border: "1.5px solid rgba(165,180,252,0.95)",
          }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0.9, 0], scale: [0.4, 2.4, 2.8] }}
          transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

// ── Main animation ──────────────────────────────────────────────────────────

const HeroDashboardAnimation = () => {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSceneIndex((prev) => (prev + 1) % scenes.length);
    }, SCENE_DURATION);
    return () => clearInterval(id);
  }, []);

  const currentScene = scenes[sceneIndex];

  return (
    <LaptopFrame>
      <div className="relative w-full h-full overflow-hidden bg-obsidian-surface/80">
        {/* Browser chrome */}
        <div
          className="relative flex items-center gap-2 border-b border-white/[0.06] px-4 py-3"
          style={{ height: 36 }}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="ml-3 flex-1 rounded-full bg-white/5 px-3 py-1 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentScene}
                className="block text-[10px] text-bone/40 font-mono whitespace-nowrap"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
              >
                {SCENE_URL[currentScene]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Scene area */}
        <div className="relative" style={{ height: "calc(100% - 36px)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene}
              className="absolute inset-0"
              variants={sceneVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {currentScene === "marketing" && <MarketingScene />}
              {currentScene === "booking" && <BookingScene />}
              {currentScene === "dashboard" && <DashboardScene />}
              {currentScene === "analytics" && <AnalyticsScene />}
            </motion.div>
          </AnimatePresence>

          <AnimatedCursor scene={currentScene} />
        </div>

        {/* Scene indicator dots */}
        <div className="pointer-events-none absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
          {scenes.map((s, i) => (
            <motion.span
              key={s}
              className="block rounded-full"
              animate={{
                width: i === sceneIndex ? 14 : 4,
                backgroundColor:
                  i === sceneIndex ? "rgba(165,180,252,0.85)" : "rgba(255,255,255,0.15)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ height: 4 }}
            />
          ))}
        </div>
      </div>
    </LaptopFrame>
  );
};

export default HeroDashboardAnimation;
