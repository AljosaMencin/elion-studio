import { motion } from "framer-motion";

const WebsiteGraphic = () => {
  return (
    <div className="relative aspect-[4/3] w-full">
      {/* Glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px] blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.35), transparent 60%)",
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Browser frame */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0a0a0c] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#080808] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-bone/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-bone/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-bone/15" />
          <div className="ml-3 flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[9px] font-medium tracking-wider text-bone/40">
            <span className="h-1 w-1 rounded-full bg-indigo-300/70" />
            elion.studio
          </div>
        </div>

        {/* Page content */}
        <div className="relative grid grid-cols-5 gap-3 p-5">
          {/* Side rail */}
          <div className="col-span-2 flex flex-col gap-3">
            <motion.div
              className="h-2 w-3/5 rounded-full bg-bone/10"
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="h-7 w-full rounded-md bg-gradient-to-r from-indigo-500/40 to-indigo-300/10" />
            <div className="h-2 w-full rounded-full bg-bone/8" />
            <div className="h-2 w-4/5 rounded-full bg-bone/8" />
            <div className="h-2 w-3/4 rounded-full bg-bone/8" />
            <motion.div
              className="mt-2 inline-flex items-center gap-1.5 self-start rounded-full bg-bone px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-obsidian"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              Get started <span>→</span>
            </motion.div>
          </div>

          {/* Hero block (image) */}
          <div className="relative col-span-3 overflow-hidden rounded-md bg-gradient-to-br from-indigo-500/30 via-indigo-700/20 to-transparent">
            <motion.div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(165,180,252,0.45), transparent 60%)",
              }}
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Floating UI chips */}
            <motion.div
              className="absolute left-3 top-3 rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-bone/70 backdrop-blur"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              SEO 98
            </motion.div>
            <motion.div
              className="absolute bottom-3 right-3 rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-bone/70 backdrop-blur"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              ⚡ 0.4s
            </motion.div>
          </div>

          {/* Bottom row (3 feature cards) */}
          <div className="col-span-5 mt-1 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <div className="mb-1.5 h-3 w-3 rounded-sm bg-indigo-300/40" />
                <div className="h-1.5 w-3/4 rounded-full bg-bone/15" />
                <div className="mt-1 h-1.5 w-full rounded-full bg-bone/8" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cursor */}
        <motion.div
          className="absolute z-10"
          initial={{ x: 60, y: 60 }}
          animate={{ x: [60, 220, 180, 90], y: [60, 90, 180, 200] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="white"
            className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            <path d="M3 2l7 18 2.4-7.6L20 10z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mobile preview floating */}
      <motion.div
        className="absolute -bottom-6 -right-3 h-32 w-[68px] rounded-[10px] border border-white/[0.08] bg-[#0a0a0c] p-1.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] md:-bottom-10 md:-right-6 md:h-44 md:w-[88px]"
        initial={{ opacity: 0, x: 30, rotate: 10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 6 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-indigo-600/40 to-indigo-300/5">
          <motion.div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, rgba(165,180,252,0.45), transparent 65%)",
            }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative flex h-full flex-col gap-1.5 p-2">
            <div className="h-1 w-2/3 rounded-full bg-bone/40" />
            <div className="h-1 w-1/2 rounded-full bg-bone/25" />
            <div className="mt-auto h-5 w-full rounded-sm bg-bone/85" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WebsiteGraphic;
