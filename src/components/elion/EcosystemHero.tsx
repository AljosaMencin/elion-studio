import { motion } from "framer-motion";

// ── Floating UI cards (six infrastructure pieces) ─────────────────────────────

const cardBase =
  "rounded-xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl p-3 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)]";

const AnalyticsCard = () => (
  <div className="flex flex-col gap-2" style={{ width: 180 }}>
    <div className="flex items-center justify-between">
      <span
        style={{
          fontSize: 8,
          letterSpacing: "0.18em",
          color: "rgba(165,180,252,0.85)",
          fontWeight: 700,
        }}
      >
        REVENUE · 30D
      </span>
      <span
        className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.85)]"
      />
    </div>
    <div
      className="font-display"
      style={{
        fontSize: 26,
        fontWeight: 800,
        color: "rgba(250,250,250,0.96)",
        letterSpacing: "-0.04em",
        lineHeight: 1,
      }}
    >
      $48,230
    </div>
    <svg width="100%" height="36" viewBox="0 0 160 36" preserveAspectRatio="none">
      <defs>
        <linearGradient id="ecg-rev" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(99,102,241,0.55)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0)" />
        </linearGradient>
      </defs>
      <path
        d="M0 28 C 20 25 30 18 50 14 C 70 10 85 17 100 9 C 115 4 130 7 160 3 L 160 36 L 0 36 Z"
        fill="url(#ecg-rev)"
      />
      <path
        d="M0 28 C 20 25 30 18 50 14 C 70 10 85 17 100 9 C 115 4 130 7 160 3"
        fill="none"
        stroke="rgba(165,180,252,0.95)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
    <span style={{ fontSize: 9, color: "rgba(52,211,153,0.85)", fontWeight: 700 }}>
      ↑ 24.6% MoM
    </span>
  </div>
);

const BookingsCard = () => {
  const slots: { time: string; state: "booked" | "open" | "highlight" }[] = [
    { time: "09:00", state: "booked" },
    { time: "10:30", state: "open" },
    { time: "11:15", state: "highlight" },
    { time: "13:00", state: "booked" },
    { time: "14:30", state: "open" },
    { time: "16:00", state: "booked" },
  ];
  return (
    <div className="flex flex-col gap-2" style={{ width: 175 }}>
      <div className="flex items-center justify-between">
        <span
          style={{
            fontSize: 8,
            letterSpacing: "0.18em",
            color: "rgba(165,180,252,0.85)",
            fontWeight: 700,
          }}
        >
          BOOKINGS
        </span>
        <span style={{ fontSize: 9, color: "rgba(250,250,250,0.55)", fontWeight: 600 }}>
          Today
        </span>
      </div>

      {/* Week strip */}
      <div className="flex items-center justify-between">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <span style={{ fontSize: 7, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
              {d}
            </span>
            <span
              className="flex items-center justify-center rounded-full"
              style={{
                width: 14,
                height: 14,
                fontSize: 7.5,
                fontWeight: 700,
                background:
                  i === 2
                    ? "linear-gradient(135deg, rgba(129,140,248,0.6), rgba(99,102,241,0.35))"
                    : "rgba(255,255,255,0.04)",
                color:
                  i === 2 ? "rgba(250,250,250,0.95)" : "rgba(255,255,255,0.6)",
                boxShadow:
                  i === 2 ? "0 0 8px rgba(129,140,248,0.5)" : "none",
              }}
            >
              {12 + i}
            </span>
          </div>
        ))}
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-2 gap-1.5">
        {slots.map((s, i) => {
          const isBooked = s.state === "booked";
          const isHighlight = s.state === "highlight";
          return (
            <div
              key={i}
              className="flex items-center justify-between rounded-md"
              style={{
                padding: "3.5px 6px",
                background: isHighlight
                  ? "linear-gradient(135deg, rgba(129,140,248,0.28), rgba(99,102,241,0.12))"
                  : isBooked
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.025)",
                border: isHighlight
                  ? "1px solid rgba(165,180,252,0.45)"
                  : "1px solid rgba(255,255,255,0.05)",
                boxShadow: isHighlight
                  ? "0 0 10px rgba(129,140,248,0.35)"
                  : "none",
              }}
            >
              <span
                style={{
                  fontSize: 8.5,
                  fontWeight: 700,
                  color: isHighlight
                    ? "rgba(250,250,250,0.95)"
                    : isBooked
                    ? "rgba(250,250,250,0.7)"
                    : "rgba(250,250,250,0.45)",
                }}
              >
                {s.time}
              </span>
              <span
                className="h-1 w-1 rounded-full"
                style={{
                  background: isHighlight
                    ? "rgba(165,180,252,0.95)"
                    : isBooked
                    ? "rgba(52,211,153,0.85)"
                    : "rgba(255,255,255,0.2)",
                  boxShadow: isHighlight
                    ? "0 0 4px rgba(165,180,252,0.9)"
                    : isBooked
                    ? "0 0 4px rgba(52,211,153,0.6)"
                    : "none",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CrmCard = () => (
  <div className="flex flex-col gap-2" style={{ width: 175 }}>
    <div className="flex items-center justify-between">
      <span
        style={{
          fontSize: 8,
          letterSpacing: "0.18em",
          color: "rgba(165,180,252,0.85)",
          fontWeight: 700,
        }}
      >
        CUSTOMERS
      </span>
      <span style={{ fontSize: 9, color: "rgba(250,250,250,0.45)", fontWeight: 600 }}>
        128 active
      </span>
    </div>
    <div className="flex flex-col gap-1.5">
      {[
        { initials: "MK", name: "Marko K.", status: "rgba(52,211,153,0.85)" },
        { initials: "AP", name: "Ana P.", status: "rgba(165,180,252,0.85)" },
        { initials: "JN", name: "Janez N.", status: "rgba(250,204,21,0.85)" },
      ].map((row) => (
        <div
          key={row.initials}
          className="flex items-center gap-2 rounded-md"
          style={{
            padding: "4px 6px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 18,
              height: 18,
              fontSize: 8,
              fontWeight: 700,
              background:
                "linear-gradient(135deg, rgba(129,140,248,0.55), rgba(99,102,241,0.3))",
              color: "rgba(250,250,250,0.95)",
              letterSpacing: "0.04em",
            }}
          >
            {row.initials}
          </div>
          <div className="flex-1">
            <div style={{ fontSize: 9.5, fontWeight: 600, color: "rgba(250,250,250,0.88)" }}>
              {row.name}
            </div>
          </div>
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: row.status, boxShadow: `0 0 6px ${row.status}` }}
          />
        </div>
      ))}
    </div>
  </div>
);

const AutomationCard = () => (
  <div className="flex flex-col gap-2.5" style={{ width: 195 }}>
    <span
      style={{
        fontSize: 8,
        letterSpacing: "0.18em",
        color: "rgba(165,180,252,0.85)",
        fontWeight: 700,
      }}
    >
      AUTOMATION FLOW
    </span>
    <div className="relative flex items-center justify-between">
      {["Trigger", "Filter", "Action"].map((label, i) => (
        <div key={label} className="relative z-10 flex flex-col items-center gap-1">
          <div
            className="flex items-center justify-center rounded-lg"
            style={{
              width: 34,
              height: 34,
              background:
                i === 1
                  ? "linear-gradient(135deg, rgba(129,140,248,0.45), rgba(99,102,241,0.25))"
                  : "rgba(255,255,255,0.04)",
              border:
                i === 1
                  ? "1px solid rgba(165,180,252,0.45)"
                  : "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                i === 1 ? "0 0 16px rgba(129,140,248,0.45)" : "none",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: i === 0 ? 999 : i === 2 ? 3 : 4,
                background:
                  i === 1 ? "rgba(165,180,252,0.95)" : "rgba(255,255,255,0.45)",
                transform: i === 1 ? "rotate(45deg)" : "none",
              }}
            />
          </div>
          <span style={{ fontSize: 8, color: "rgba(250,250,250,0.5)", fontWeight: 600 }}>
            {label}
          </span>
        </div>
      ))}
      {/* Connector lines */}
      <div
        aria-hidden
        className="absolute left-[14%] right-[14%] top-[17px] -z-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(129,140,248,0.55), transparent)",
        }}
      />
    </div>
    <div
      className="flex items-center gap-1.5 rounded"
      style={{
        padding: "4px 6px",
        background: "rgba(52,211,153,0.08)",
        border: "1px solid rgba(52,211,153,0.2)",
      }}
    >
      <span className="h-1 w-1 rounded-full bg-emerald-400" />
      <span style={{ fontSize: 8.5, color: "rgba(110,231,183,0.95)", fontWeight: 600 }}>
        12 actions today · 0 errors
      </span>
    </div>
  </div>
);

const AiCard = () => (
  <div className="flex flex-col gap-2" style={{ width: 200 }}>
    <div className="flex items-center gap-2">
      <div
        className="flex h-5 w-5 items-center justify-center rounded-md"
        style={{
          background:
            "linear-gradient(135deg, rgba(165,180,252,0.7), rgba(99,102,241,0.4))",
          boxShadow: "0 0 10px rgba(129,140,248,0.4)",
        }}
      >
        <span style={{ fontSize: 9, fontWeight: 800, color: "rgba(10,10,18,0.9)" }}>
          AI
        </span>
      </div>
      <span
        style={{
          fontSize: 8,
          letterSpacing: "0.18em",
          color: "rgba(165,180,252,0.85)",
          fontWeight: 700,
        }}
      >
        INSIGHT ENGINE
      </span>
    </div>
    <div
      className="rounded-lg"
      style={{
        padding: "8px 10px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <p
        style={{
          fontSize: 10,
          lineHeight: 1.45,
          color: "rgba(230,230,240,0.85)",
          letterSpacing: "-0.005em",
        }}
      >
        Checkout drop-off down{" "}
        <span style={{ color: "rgba(110,231,183,0.95)", fontWeight: 700 }}>−18%</span>{" "}
        after Tuesday's variant push.
      </p>
    </div>
    <div className="flex items-center gap-1.5">
      <span className="h-1 w-1 animate-pulse rounded-full bg-indigo-300" />
      <span style={{ fontSize: 8.5, color: "rgba(250,250,250,0.45)", fontWeight: 500 }}>
        Suggesting next experiment
      </span>
    </div>
  </div>
);

const ConversionCard = () => (
  <div className="flex flex-col gap-1.5" style={{ width: 155 }}>
    <span
      style={{
        fontSize: 8,
        letterSpacing: "0.18em",
        color: "rgba(165,180,252,0.85)",
        fontWeight: 700,
      }}
    >
      CONVERSION
    </span>
    <div className="flex items-baseline gap-2">
      <span
        className="font-display"
        style={{
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          backgroundImage:
            "linear-gradient(180deg, rgba(250,250,250,1), rgba(165,180,252,0.85))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        +147%
      </span>
    </div>
    <span style={{ fontSize: 9, color: "rgba(250,250,250,0.55)", fontWeight: 500 }}>
      vs. last quarter
    </span>
    <div className="mt-1 flex items-end gap-1" style={{ height: 24 }}>
      {[8, 12, 10, 16, 13, 19, 22].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${(h / 24) * 100}%`,
            background:
              i >= 4
                ? "linear-gradient(180deg, rgba(165,180,252,0.95), rgba(99,102,241,0.3))"
                : "rgba(255,255,255,0.12)",
          }}
        />
      ))}
    </div>
  </div>
);

// Card positions — six points around the core on a circle in pixel space
// (so every connection line renders at the same length, regardless of the
// 16:10 container aspect ratio).
//
// Computed in a 16:10 frame with the core at (50%, 50%) and a radial
// distance of 25% of the width. For an angle θ measured clockwise from
// the top:
//   dx_px = R * sin(θ)
//   dy_px = -R * cos(θ)
// Converted to % of width / height (16:10), then offset from 50%/50%.
//
// Angles: 30° (upper-right), 90° (right), 150° (lower-right),
// 210° (lower-left), 270° (left), 330° (upper-left).
//
// `x` / `y` here are the CARD CENTER positions. The card uses
// translate(-50%, -50%) so left/top reference the centre rather than the
// top-left corner.

// Asymmetric card layout — six points scattered around the core at varied
// angles, radii and depths. Some cards sit slightly closer (prominent),
// others slightly further (recessed). Breaks the rigid hex/orbit look.
//
// `scale` / `opacity` together fake depth-of-field without actually blurring
// text. `rot` is intentionally varied for that "naturally floating" feel.

const CARDS = [
  // Upper-left — Bookings (slightly recessed)
  { x: "34.89%", y: "15.49%", rot: -3, scale: 0.95, opacity: 0.92, content: <BookingsCard />,   delay: 0.2,  amp: 9,  dur: 13 },
  // Upper-right — Analytics (prominent, foreground)
  { x: "66.26%", y: "12.87%", rot: 2,  scale: 1.05, opacity: 1,    content: <AnalyticsCard />,  delay: 0.32, amp: 12, dur: 11 },
  // Mid-left — CRM (normal)
  { x: "19.54%", y: "54.27%", rot: -2, scale: 1,    opacity: 0.97, content: <CrmCard />,        delay: 0.45, amp: 11, dur: 13.5 },
  // Mid-right — AI Insight (normal)
  { x: "78.73%", y: "62.32%", rot: 3,  scale: 1,    opacity: 1,    content: <AiCard />,         delay: 0.58, amp: 10, dur: 14 },
  // Lower-left — Conversion (prominent, foreground)
  { x: "34.56%", y: "85.28%", rot: -2, scale: 1.04, opacity: 1,    content: <ConversionCard />, delay: 0.72, amp: 8,  dur: 10 },
  // Lower-right — Automation (slightly recessed)
  { x: "64.96%", y: "84.19%", rot: 4,  scale: 0.96, opacity: 0.94, content: <AutomationCard />, delay: 0.86, amp: 11, dur: 12 },
];

// Connection endpoint per card (matches CARDS order). Used for SVG paths
// and per-line gradients so each line fades as it reaches its card.
const ENDPOINTS = [
  { x: 34.89, y: 15.49 },
  { x: 66.26, y: 12.87 },
  { x: 19.54, y: 54.27 },
  { x: 78.73, y: 62.32 },
  { x: 34.56, y: 85.28 },
  { x: 64.96, y: 84.19 },
];

// ── Connection paths from core to each card (SVG) ─────────────────────────────
//
// Order matches CARDS above. Each path goes from the core (50, 50) to the
// matching card centre, with a soft bezier curve for an elegant arc.

// Organic bezier curves — control points pulled off-axis for a more
// "energy path" feel than a straight diagram. Endpoints match CARDS above.
const CONNECTIONS: { d: string; delay: number }[] = [
  // → Bookings (upper-left)
  { d: "M50 50 C 43 40, 38 28, 34.89 15.49", delay: 0.3 },
  // → Analytics (upper-right)
  { d: "M50 50 C 58 38, 62 24, 66.26 12.87", delay: 0.42 },
  // → CRM (mid-left)
  { d: "M50 50 C 39 47, 28 55, 19.54 54.27", delay: 0.55 },
  // → AI Insight (mid-right)
  { d: "M50 50 C 60 52, 71 60, 78.73 62.32", delay: 0.68 },
  // → Conversion (lower-left)
  { d: "M50 50 C 45 64, 39 78, 34.56 85.28", delay: 0.82 },
  // → Automation (lower-right)
  { d: "M50 50 C 56 65, 61 77, 64.96 84.19", delay: 0.96 },
];

// ── Main visual ───────────────────────────────────────────────────────────────

const EcosystemHero = () => {
  return (
    <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
      {/* Layered atmospheric glow — distant haze plus a tighter core halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 55%, rgba(67,56,202,0.22), transparent 65%)",
          filter: "blur(50px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 30% 30% at 50% 50%, rgba(129,140,248,0.32), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Concentric orbit rings + connection lines (SVG) */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(165,180,252,0.4)" />
            <stop offset="60%" stopColor="rgba(99,102,241,0.18)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </radialGradient>
          {/* Per-line gradients: bright near the core, fading to transparent
              as the line reaches the card. */}
          {ENDPOINTS.map((e, i) => (
            <linearGradient
              key={i}
              id={`lineGrad-${i}`}
              x1={50}
              y1={50}
              x2={e.x}
              y2={e.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(165,180,252,0.55)" />
              <stop offset="45%" stopColor="rgba(129,140,248,0.3)" />
              <stop offset="80%" stopColor="rgba(99,102,241,0.08)" />
              <stop offset="100%" stopColor="rgba(99,102,241,0)" />
            </linearGradient>
          ))}
        </defs>


        {/* Connection lines — softer, more like energy paths than wires */}
        {CONNECTIONS.map((c, i) => (
          <motion.path
            key={i}
            d={c.d}
            fill="none"
            stroke={`url(#lineGrad-${i})`}
            strokeWidth="0.14"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: c.delay, ease: "easeOut" }}
          />
        ))}

        {/* Data pulse dots — 2 per line, offset, so the energy feels continuous */}
        {CONNECTIONS.flatMap((c, i) => [
          <motion.circle
            key={`p-${i}-a`}
            r="0.32"
            fill="rgba(199,210,254,0.9)"
            style={{
              filter: "drop-shadow(0 0 1.4px rgba(165,180,252,0.85))",
              offsetPath: `path('${c.d}')`,
              offsetRotate: "0deg",
            }}
            animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: c.delay + 0.5,
              times: [0, 0.15, 0.85, 1],
            }}
          />,
          <motion.circle
            key={`p-${i}-b`}
            r="0.22"
            fill="rgba(199,210,254,0.6)"
            style={{
              filter: "drop-shadow(0 0 1px rgba(165,180,252,0.6))",
              offsetPath: `path('${c.d}')`,
              offsetRotate: "0deg",
            }}
            animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 0.7, 0.7, 0] }}
            transition={{
              duration: 7 + ((i + 1) % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: c.delay + 2.5,
              times: [0, 0.15, 0.85, 1],
            }}
          />,
        ])}
      </svg>

      {/* ── Central core ─────────────────────────────────────────────────
          Wider than the visible orb: outer wrapper hosts the gravitational
          halo and orbiting particles, inner orb is the bright glass sphere. */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "28%", aspectRatio: "1" }}
      >
        {/* Outer atmospheric halo — soft, layered, breathing */}
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(165,180,252,0.32) 0%, rgba(99,102,241,0.16) 28%, rgba(99,102,241,0.04) 55%, transparent 75%)",
            filter: "blur(14px)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Gravitational "lensing" ring — a darker band hugging the orb */}
        <div
          aria-hidden
          className="absolute rounded-full"
          style={{
            inset: "30%",
            background:
              "radial-gradient(circle, transparent 55%, rgba(8,8,16,0.55) 68%, transparent 85%)",
            mixBlendMode: "multiply",
          }}
        />

        {/* Faint outer ring — single accent stroke, not a wireframe */}
        <motion.div
          aria-hidden
          className="absolute rounded-full"
          style={{
            inset: "26%",
            border: "1px solid rgba(165,180,252,0.18)",
            boxShadow: "0 0 18px -2px rgba(129,140,248,0.35) inset",
          }}
          animate={{ opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glassy orb */}
        <motion.div
          className="absolute rounded-full"
          style={{
            inset: "33%",
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.22), rgba(129,140,248,0.45) 40%, rgba(20,20,40,0.9) 92%)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow:
              "0 0 80px rgba(99,102,241,0.6), 0 0 28px rgba(165,180,252,0.4), inset 0 0 28px rgba(255,255,255,0.1)",
          }}
          animate={{ scale: [1, 1.045, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Top-light reflection */}
          <div
            aria-hidden
            className="absolute inset-[12%] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 38% 30%, rgba(255,255,255,0.55), transparent 50%)",
            }}
          />
          {/* Center symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="42%" height="42%" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5z"
                stroke="rgba(255,255,255,0.95)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="rgba(199,210,254,0.9)"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* Orbiting particles around the core — bright dots that orbit on
            invisible paths so the core feels "alive" without showing rings */}
        {[
          { r: 0.36, dur: 14, delay: 0,    size: 4 },
          { r: 0.36, dur: 14, delay: -4.6, size: 3 },
          { r: 0.36, dur: 14, delay: -9.3, size: 4 },
          { r: 0.44, dur: 22, delay: 0,    size: 3 },
          { r: 0.44, dur: 22, delay: -11,  size: 2 },
          { r: 0.30, dur: 9,  delay: -2.5, size: 3 },
          { r: 0.30, dur: 9,  delay: -6,   size: 2 },
        ].map((p, i) => (
          <motion.div
            key={`orbit-p-${i}`}
            aria-hidden
            className="absolute left-1/2 top-1/2"
            style={{
              width: 0,
              height: 0,
              transformOrigin: "0 0",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          >
            <span
              className="absolute block rounded-full"
              style={{
                width: p.size,
                height: p.size,
                background: "rgba(199,210,254,0.95)",
                boxShadow:
                  "0 0 8px rgba(165,180,252,0.95), 0 0 16px rgba(129,140,248,0.5)",
                transform: `translate(-50%, -50%) translateX(${p.r * 100}%)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating cards — each centred on its (x, y) point via translate(-50%, -50%) */}
      {CARDS.map((card, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: card.x,
            top: card.y,
            transform: "translate(-50%, -50%)",
            willChange: "transform",
          }}
        >
          {/* Static rotation + per-card depth scale on its own wrapper so
              framer-motion's animated transforms never overwrite them */}
          <div
            style={{
              transform: `rotate(${card.rot}deg) scale(${card.scale})`,
            }}
          >
            {/* Entrance — fade + subtle scale only (no y, so it can't fight the float) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
              animate={{ opacity: card.opacity, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: card.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Continuous float — slow, smooth, organic */}
              <motion.div
                className={cardBase}
                style={{ willChange: "transform" }}
                animate={{ y: [0, -card.amp, 0, card.amp * 0.6, 0] }}
                transition={{
                  duration: card.dur,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.55, 0.8, 1],
                  delay: card.delay,
                }}
              >
                {card.content}
              </motion.div>
            </motion.div>
          </div>
        </div>
      ))}

      {/* Drifting particles — three depth tiers for atmospheric depth.
          Background: tiny, dim, slow. Mid: medium, moderate. Foreground:
          slightly larger and brighter, faster drift. */}
      {Array.from({ length: 32 }).map((_, i) => {
        const left = 4 + ((i * 53) % 92);
        const top = 4 + ((i * 31) % 92);
        // Three depth tiers based on index mod
        const tier = i % 3;
        const sizePx = tier === 0 ? 1.5 : tier === 1 ? 2.5 : 3.5;
        const opacityMax = tier === 0 ? 0.4 : tier === 1 ? 0.7 : 1;
        const blurPx = tier === 0 ? 0.6 : 0;
        const dur = 7 + ((i * 1.3) % 6);
        const delay = (i % 9) * 0.4;
        const yAmp = 10 + (tier * 6);
        return (
          <motion.span
            key={`p-${i}`}
            className="pointer-events-none absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: sizePx,
              height: sizePx,
              background: "rgba(199,210,254,0.9)",
              boxShadow:
                tier === 2
                  ? "0 0 7px rgba(165,180,252,0.95), 0 0 14px rgba(129,140,248,0.4)"
                  : "0 0 4px rgba(165,180,252,0.7)",
              filter: blurPx > 0 ? `blur(${blurPx}px)` : undefined,
            }}
            animate={{
              y: [0, -yAmp, 0],
              opacity: [0, opacityMax, 0],
            }}
            transition={{
              duration: dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default EcosystemHero;
