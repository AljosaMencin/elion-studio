import { motion } from "framer-motion";

// Mini-mockup of a booking dashboard: week calendar + today's time slots
// + a quick occupancy stat, plus a floating "new booking" notification.

const WEEK = [
  { day: "M", date: 12, dots: 2 },
  { day: "T", date: 13, dots: 3 },
  { day: "W", date: 14, dots: 4, today: true },
  { day: "T", date: 15, dots: 3 },
  { day: "F", date: 16, dots: 5 },
  { day: "S", date: 17, dots: 2 },
  { day: "S", date: 18, dots: 1 },
];

type SlotState = "booked" | "open" | "pending" | "highlight";
const SLOTS: { time: string; name: string; state: SlotState }[] = [
  { time: "09:00", name: "Maya Klein",    state: "booked" },
  { time: "10:30", name: "Open",          state: "open" },
  { time: "11:15", name: "Jake Pearson",  state: "highlight" },
  { time: "13:00", name: "Sara Marquez",  state: "pending" },
  { time: "14:30", name: "Open",          state: "open" },
  { time: "16:00", name: "Anna L.",       state: "booked" },
];

const slotStyle = (state: SlotState) => {
  switch (state) {
    case "highlight":
      return {
        bg: "linear-gradient(135deg, rgba(165,180,252,0.28), rgba(99,102,241,0.12))",
        border: "1px solid rgba(165,180,252,0.45)",
        dot: "rgba(199,210,254,1)",
        dotGlow: "0 0 6px rgba(199,210,254,0.9)",
        nameColor: "rgba(250,250,250,0.96)",
        timeColor: "rgba(250,250,250,0.96)",
      };
    case "booked":
      return {
        bg: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.05)",
        dot: "rgba(52,211,153,0.85)",
        dotGlow: "0 0 4px rgba(52,211,153,0.6)",
        nameColor: "rgba(250,250,250,0.88)",
        timeColor: "rgba(250,250,250,0.78)",
      };
    case "pending":
      return {
        bg: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.05)",
        dot: "rgba(250,204,21,0.85)",
        dotGlow: "0 0 4px rgba(250,204,21,0.55)",
        nameColor: "rgba(250,250,250,0.82)",
        timeColor: "rgba(250,250,250,0.7)",
      };
    case "open":
    default:
      return {
        bg: "rgba(255,255,255,0.015)",
        border: "1px dashed rgba(255,255,255,0.08)",
        dot: "rgba(255,255,255,0.2)",
        dotGlow: "none",
        nameColor: "rgba(250,250,250,0.4)",
        timeColor: "rgba(250,250,250,0.5)",
      };
  }
};

const SystemsGraphic = () => {
  return (
    <div className="relative aspect-[4/3] w-full">
      {/* Soft glow behind the dashboard */}
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
            Bookings · This week
          </div>
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-bone/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-bone/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-bone/15" />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1.05fr] gap-4 p-4">
          {/* ── Left: Week calendar + occupancy ── */}
          <div className="flex flex-col gap-3">
            {/* Week strip */}
            <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="mb-2.5 text-[7px] font-bold uppercase tracking-[0.2em] text-bone/40">
                May · Week 20
              </div>
              <div className="flex items-start justify-between">
                {WEEK.map((d, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center gap-1.5"
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  >
                    <span className="text-[7px] font-bold uppercase text-bone/35">
                      {d.day}
                    </span>
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-md text-[9px] font-bold"
                      style={{
                        background: d.today
                          ? "linear-gradient(135deg, rgba(165,180,252,0.55), rgba(99,102,241,0.35))"
                          : "rgba(255,255,255,0.04)",
                        color: d.today
                          ? "rgba(250,250,250,0.98)"
                          : "rgba(250,250,250,0.7)",
                        boxShadow: d.today
                          ? "0 0 10px rgba(129,140,248,0.55)"
                          : "none",
                      }}
                    >
                      {d.date}
                    </span>
                    {/* Booking density dots */}
                    <div className="flex flex-col items-center gap-0.5">
                      {Array.from({ length: d.dots }).map((_, di) => (
                        <span
                          key={di}
                          className="h-[3px] w-[3px] rounded-full"
                          style={{
                            background: d.today
                              ? "rgba(165,180,252,0.9)"
                              : "rgba(165,180,252,0.55)",
                            boxShadow: d.today
                              ? "0 0 3px rgba(165,180,252,0.95)"
                              : "none",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Occupancy stat */}
            <motion.div
              className="rounded-md border border-white/[0.06] bg-white/[0.02] p-3"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="mb-1.5 text-[7px] font-bold uppercase tracking-[0.2em] text-bone/40">
                Today
              </div>
              <div className="flex items-baseline justify-between">
                <div className="font-display text-2xl font-bold leading-none text-bone">
                  18
                </div>
                <div className="text-[9px] font-semibold text-bone/55">
                  bookings · 92% full
                </div>
              </div>
              {/* Capacity bar */}
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(129,140,248,0.95), rgba(165,180,252,0.95))",
                    boxShadow: "0 0 8px rgba(129,140,248,0.6)",
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>

          {/* ── Right: Today's slots ── */}
          <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-bone/40">
                Wed 14 · Today
              </div>
              <div className="inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-wider text-violet-200">
                <motion.span
                  className="h-1 w-1 rounded-full bg-violet-300"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
                Live
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {SLOTS.map((slot, i) => {
                const s = slotStyle(slot.state);
                return (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between rounded-md px-2 py-1.5"
                    style={{
                      background: s.bg,
                      border: s.border,
                    }}
                    initial={{ opacity: 0, x: 6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: s.dot, boxShadow: s.dotGlow }}
                      />
                      <span
                        style={{
                          fontSize: 8.5,
                          fontWeight: 700,
                          color: s.timeColor,
                        }}
                      >
                        {slot.time}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 8.5,
                        fontWeight: 600,
                        color: s.nameColor,
                      }}
                    >
                      {slot.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating notification — new booking */}
      <motion.div
        className="absolute -left-2 top-6 max-w-[200px] rounded-lg border border-white/[0.08] bg-[#0c0c0e]/95 p-2.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] backdrop-blur md:-left-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-indigo-300/30 bg-indigo-300/10 text-indigo-200">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </span>
          <div>
            <div className="text-[8px] font-bold uppercase tracking-wider text-bone/40">
              New booking · 11:15
            </div>
            <div className="text-[10px] font-semibold text-bone">
              Jake Pearson · Confirmed
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating notification — reminder sent */}
      <motion.div
        className="absolute -right-2 bottom-8 max-w-[200px] rounded-lg border border-white/[0.08] bg-[#0c0c0e]/95 p-2.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] backdrop-blur md:-right-6"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-emerald-200">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <div>
            <div className="text-[8px] font-bold uppercase tracking-wider text-bone/40">
              SMS reminders sent
            </div>
            <div className="text-[10px] font-semibold text-bone">
              14 clients · tomorrow
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SystemsGraphic;
