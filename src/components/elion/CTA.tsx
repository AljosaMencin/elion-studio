import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 text-center md:px-12 md:py-60"
    >
      {/* Breathing radial glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.55), transparent 70%)" }}
        animate={{ opacity: [0.15, 0.32, 0.15], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating orbiting accent dots */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-indigo-300/70 shadow-[0_0_12px_rgba(165,180,252,0.8)]" />
        <span className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-indigo-200/50 shadow-[0_0_8px_rgba(199,210,254,0.7)]" />
        <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-400/60 shadow-[0_0_8px_rgba(129,140,248,0.7)]" />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.p
          className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          Get started
        </motion.p>

        <motion.h2
          className="max-w-[14ch] text-balance font-display text-5xl font-bold leading-[1.04] tracking-tight text-bone md:text-8xl md:leading-[1.05] lg:text-[8.25rem]"
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
        >
          Ready to grow your business?
        </motion.h2>

        <motion.p
          className="mt-8 max-w-[40ch] text-balance text-sm font-medium leading-relaxed text-bone/50 md:text-base"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          Book a free 30-minute strategy call. We'll audit your current setup and show you exactly where you're leaving money on the table.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <motion.a
            href="mailto:hello@elion.studio"
            className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-bone px-10 py-4 text-sm font-bold text-obsidian shadow-soft"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
          >
            <span className="relative z-10">Book a free call</span>
            <span className="relative z-10 block h-1.5 w-1.5 rounded-full bg-obsidian/40 transition-colors group-hover:bg-obsidian" />
            <motion.span
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              initial={{ x: "-150%" }}
              animate={{ x: "350%" }}
              transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
            />
          </motion.a>
          <a
            href="mailto:hello@elion.studio"
            className="text-sm font-semibold text-bone/40 transition-colors duration-300 hover:text-bone"
          >
            Or email us directly →
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          {["Free strategy call", "No commitment", "Results in 14 days"].map((t, i) => (
            <motion.div
              key={t}
              className="flex items-center gap-2 text-[11px] font-medium text-bone/30"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.08 },
                },
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polyline points="2,6 5,9 10,3" />
              </svg>
              {t}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
