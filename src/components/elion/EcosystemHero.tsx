import { motion } from "framer-motion";

// ── Floating UI cards (six infrastructure pieces) ─────────────────────────────

const cardBase =
  "absolute rounded-xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl p-3 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)]";

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

// Card positions around the core — { x%, y%, rotation, content, delay, float }
const CARDS = [
  { x: "6%",  y: "10%", rot: -3.5, content: <AnalyticsCard />,   delay: 0.2,  amp: 10, dur: 11 },
  { x: "70%", y: "6%",  rot: 3,    content: <BookingsCard />,    delay: 0.35, amp: 12, dur: 13 },
  { x: "2%",  y: "62%", rot: 2,    content: <CrmCard />,         delay: 0.5,  amp: 9,  dur: 12 },
  { x: "65%", y: "60%", rot: -2.5, content: <AutomationCard />,  delay: 0.65, amp: 11, dur: 14 },
  { x: "26%", y: "82%", rot: -1.5, content: <ConversionCard />,  delay: 0.8,  amp: 8,  dur: 10 },
  { x: "78%", y: "36%", rot: 2,    content: <AiCard />,          delay: 0.95, amp: 10, dur: 13.5 },
];

// ── Connection paths from core to each card (SVG) ─────────────────────────────

const CONNECTIONS: { d: string; delay: number }[] = [
  // Core ≈ (50, 50). Each path arcs to the approximate card center.
  { d: "M50 50 C 38 42, 24 30, 14 18",      delay: 0.3 },
  { d: "M50 50 C 64 40, 76 26, 84 14",      delay: 0.45 },
  { d: "M50 50 C 38 58, 22 66, 11 72",      delay: 0.6 },
  { d: "M50 50 C 62 56, 74 64, 80 70",      delay: 0.75 },
  { d: "M50 50 C 46 64, 38 78, 33 87",      delay: 0.9 },
  { d: "M50 50 C 64 50, 76 46, 88 42",      delay: 1.05 },
];

// ── Main visual ───────────────────────────────────────────────────────────────

const EcosystemHero = () => {
  return (
    <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
      {/* Atmospheric glow behind the whole scene */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(99,102,241,0.22), transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 78%)",
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
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(165,180,252,0.7)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </linearGradient>
        </defs>

        {/* Slow rotating orbit rings */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        >
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="rgba(165,180,252,0.18)"
            strokeWidth="0.12"
            strokeDasharray="0.6 1.4"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="rgba(165,180,252,0.13)"
            strokeWidth="0.1"
            strokeDasharray="0.4 1.6"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(165,180,252,0.09)"
            strokeWidth="0.08"
            strokeDasharray="0.3 1.8"
          />
        </motion.g>

        {/* Connection lines */}
        {CONNECTIONS.map((c, i) => (
          <motion.path
            key={i}
            d={c.d}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="0.18"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: c.delay, ease: "easeOut" }}
          />
        ))}

        {/* Data pulse dots — travel along each connection */}
        {CONNECTIONS.map((c, i) => (
          <motion.circle
            key={`p-${i}`}
            r="0.35"
            fill="rgba(199,210,254,0.95)"
            style={{
              filter: "drop-shadow(0 0 1.5px rgba(165,180,252,0.9))",
              offsetPath: `path('${c.d}')`,
              offsetRotate: "0deg",
            }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: c.delay + 0.5,
            }}
          />
        ))}
      </svg>

      {/* Central core */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "16%", aspectRatio: "1" }}
      >
        {/* Pulsing halo */}
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(165,180,252,0.5) 0%, rgba(99,102,241,0.2) 40%, transparent 70%)",
            filter: "blur(8px)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Glassy orb */}
        <motion.div
          className="absolute inset-[15%] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.18), rgba(99,102,241,0.35) 45%, rgba(20,20,40,0.85) 90%)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow:
              "0 0 60px rgba(99,102,241,0.55), inset 0 0 25px rgba(255,255,255,0.08)",
          }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Inner highlight */}
          <div
            aria-hidden
            className="absolute inset-[18%] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.5), transparent 55%)",
            }}
          />
          {/* Center symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="38%" height="38%" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5z"
                stroke="rgba(255,255,255,0.92)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="rgba(165,180,252,0.85)"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Floating cards */}
      {CARDS.map((card, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: card.x,
            top: card.y,
            transform: `rotate(${card.rot}deg)`,
            willChange: "transform",
          }}
        >
          {/* Entrance — fade + scale only (no y, so it can't fight the float) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
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
      ))}

      {/* Drifting particles */}
      {Array.from({ length: 14 }).map((_, i) => {
        const left = 10 + ((i * 53) % 80);
        const top = 8 + ((i * 31) % 84);
        const dur = 6 + (i % 5);
        const delay = (i % 7) * 0.3;
        return (
          <motion.span
            key={`p-${i}`}
            className="pointer-events-none absolute h-[3px] w-[3px] rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              background: "rgba(199,210,254,0.7)",
              boxShadow: "0 0 6px rgba(165,180,252,0.85)",
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0, 0.9, 0],
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
