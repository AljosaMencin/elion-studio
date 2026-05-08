import { motion } from "framer-motion";

const GrowthGraphic = () => {
  return (
    <div className="relative aspect-[4/3] w-full">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px] blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgba(99,102,241,0.35), transparent 60%)",
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0a0a0c] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#080808] px-5 py-3">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-bone/55">
            Growth Report — Q3
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-violet-300/30 bg-violet-300/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-violet-200">
            +218% YoY
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-3 gap-3 p-4">
          {/* Big chart */}
          <div className="col-span-2 rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-bone/40">
                Sessions vs Conversions
              </div>
              <div className="flex gap-2 text-[7px] font-semibold text-bone/45">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                  Sessions
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                  Conv.
                </span>
              </div>
            </div>
            <svg viewBox="0 0 220 80" className="h-24 w-full overflow-visible">
              <defs>
                <linearGradient id="growthFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(165,180,252,0.5)" />
                  <stop offset="100%" stopColor="rgba(165,180,252,0)" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[20, 40, 60].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="220"
                  y2={y}
                  stroke="rgba(255,255,255,0.04)"
                  strokeDasharray="2 3"
                />
              ))}

              {/* Sessions line */}
              <motion.path
                d="M0,60 L20,55 L40,52 L60,48 L80,38 L100,42 L120,30 L140,28 L160,22 L180,18 L200,12 L220,6"
                fill="none"
                stroke="rgba(165,180,252,0.95)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
              <motion.path
                d="M0,60 L20,55 L40,52 L60,48 L80,38 L100,42 L120,30 L140,28 L160,22 L180,18 L200,12 L220,6 L220,80 L0,80 Z"
                fill="url(#growthFill)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />

              {/* Conversions line */}
              <motion.path
                d="M0,72 L40,68 L80,62 L120,52 L160,40 L200,28 L220,20"
                fill="none"
                stroke="rgba(216,180,254,0.9)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
              />

              {/* End markers */}
              <motion.circle
                cx="220"
                cy="6"
                r="3"
                fill="rgba(165,180,252,1)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.4 }}
              />
            </svg>

            <div className="mt-2 flex justify-between text-[6px] font-semibold uppercase tracking-wider text-bone/30">
              {["w1", "w4", "w8", "w12"].map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
          </div>

          {/* Score gauge */}
          <div className="flex flex-col items-center justify-center rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="mb-2 text-[7px] font-bold uppercase tracking-[0.2em] text-bone/40">
              Growth Score
            </div>
            <div className="relative h-20 w-20">
              <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(165,180,252,0.95)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 42}
                  initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * 0.13 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-lg font-bold text-bone">87</div>
                  <div className="text-[7px] font-bold uppercase tracking-wider text-bone/40">
                    /100
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Channels list */}
          <div className="col-span-3 rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="mb-2 text-[7px] font-bold uppercase tracking-[0.2em] text-bone/40">
              Top channels
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                { label: "Organic search", pct: 78, color: "from-indigo-400 to-indigo-300" },
                { label: "Direct", pct: 54, color: "from-violet-400 to-violet-300" },
                { label: "Social", pct: 32, color: "from-purple-400 to-purple-300" },
              ].map((c, i) => (
                <div key={c.label} className="flex items-center gap-2">
                  <div className="w-20 text-[8px] font-medium text-bone/55">
                    {c.label}
                  </div>
                  <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-bone/8">
                    <motion.div
                      className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${c.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                    />
                  </div>
                  <div className="w-7 text-right text-[8px] font-bold tabular-nums text-bone/65">
                    {c.pct}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating "trending" pill */}
      <motion.div
        className="absolute -right-2 -top-3 inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#0c0c0e]/95 px-3 py-1.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] backdrop-blur md:-right-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.span
          className="text-[10px]"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          📈
        </motion.span>
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-bone/70">
          Traffic up 4.2×
        </span>
      </motion.div>
    </div>
  );
};

export default GrowthGraphic;
