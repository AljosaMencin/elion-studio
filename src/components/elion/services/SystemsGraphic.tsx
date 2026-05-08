import { motion } from "framer-motion";

const SystemsGraphic = () => {
  return (
    <div className="relative aspect-[4/3] w-full">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px] blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(99,102,241,0.35), transparent 60%)",
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dashboard frame */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0a0a0c] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#080808] px-5 py-3">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-bone/55">
            <span className="h-2 w-2 rounded-sm bg-indigo-300/80" />
            Operations
          </div>
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-bone/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-bone/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-bone/15" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 p-4">
          {/* KPI tiles */}
          {[
            { label: "Revenue", val: "€48.2k", trend: "+12%" },
            { label: "Bookings", val: "284", trend: "+8%" },
            { label: "Conv.", val: "4.7%", trend: "+0.6" },
          ].map((tile, i) => (
            <motion.div
              key={tile.label}
              className="rounded-md border border-white/[0.06] bg-white/[0.02] p-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            >
              <div className="mb-1 text-[7px] font-bold uppercase tracking-[0.2em] text-bone/40">
                {tile.label}
              </div>
              <div className="font-display text-base font-bold text-bone">
                {tile.val}
              </div>
              <div className="mt-0.5 inline-flex items-center gap-1 text-[8px] font-semibold text-violet-300/85">
                <span>↑</span>
                {tile.trend}
              </div>
            </motion.div>
          ))}

          {/* Chart */}
          <div className="col-span-2 rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="mb-2 text-[7px] font-bold uppercase tracking-[0.2em] text-bone/40">
              Last 30 days
            </div>
            <svg viewBox="0 0 200 60" className="h-16 w-full overflow-visible">
              <defs>
                <linearGradient id="sysFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(165,180,252,0.4)" />
                  <stop offset="100%" stopColor="rgba(165,180,252,0)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,45 L20,42 L40,38 L60,40 L80,30 L100,32 L120,22 L140,24 L160,14 L180,18 L200,8"
                fill="none"
                stroke="rgba(165,180,252,0.9)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
              <motion.path
                d="M0,45 L20,42 L40,38 L60,40 L80,30 L100,32 L120,22 L140,24 L160,14 L180,18 L200,8 L200,60 L0,60 Z"
                fill="url(#sysFill)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              {[
                [40, 38],
                [120, 22],
                [200, 8],
              ].map(([x, y], i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="rgba(165,180,252,1)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
                />
              ))}
            </svg>
          </div>

          {/* Booking calendar */}
          <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="mb-2 text-[7px] font-bold uppercase tracking-[0.2em] text-bone/40">
              Booking
            </div>
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 12 }).map((_, i) => {
                const filled = [1, 3, 5, 6, 9, 11].includes(i);
                return (
                  <motion.div
                    key={i}
                    className={`h-3 rounded-[2px] ${
                      filled ? "bg-indigo-300/80" : "bg-bone/10"
                    }`}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                  />
                );
              })}
            </div>
          </div>

          {/* Status row */}
          <div className="col-span-3 flex items-center gap-3 rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
            <motion.span
              className="h-2 w-2 rounded-full bg-violet-300"
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="text-[9px] font-medium text-bone/55">
              <span className="text-bone/85">3 automations</span> running ·{" "}
              <span className="text-bone/85">12 webhooks</span> healthy
            </div>
            <div className="ml-auto inline-flex items-center gap-1 rounded-full border border-violet-300/30 bg-violet-300/10 px-2 py-0.5 text-[7px] font-bold uppercase tracking-wider text-violet-200">
              All systems go
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating notification */}
      <motion.div
        className="absolute -left-2 top-6 max-w-[180px] rounded-lg border border-white/[0.08] bg-[#0c0c0e]/95 p-2.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] backdrop-blur md:-left-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-indigo-300/30 bg-indigo-300/10 text-indigo-200">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <div>
            <div className="text-[8px] font-bold uppercase tracking-wider text-bone/40">
              New booking
            </div>
            <div className="text-[10px] font-semibold text-bone">Maya Klein · 14:30</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SystemsGraphic;
