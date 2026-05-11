import { motion } from "framer-motion";
import ScrollFadeBlur from "@/components/elion/ScrollFadeBlur";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Built for speed",
    description: "From wireframe to live site in days, not months. Without cutting corners on quality or polish.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Conversion-first design",
    description: "Every element has a job. We design for outcomes like more leads, signups, and sales. Not just aesthetics.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "No lock-in",
    description: "You own your site, code, and data. Cancel anytime. We keep clients because we deliver results, not contracts.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Real analytics, not vanity",
    description: "We track what matters: conversions, revenue, and qualified leads. And we report it clearly every month.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "One team, full stack",
    description: "Design, dev, systems, and marketing under one roof. No handoffs, no gaps, no finger-pointing.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    title: "Continuous improvement",
    description: "We don't disappear after launch. Monthly optimization cycles mean your site compounds value over time.",
  },
];

const WhyElion = () => {
  return (
    <section id="why" className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1440px]">

        <ScrollFadeBlur className="mb-24 flex flex-col items-center text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
            Why Elion
          </p>
          <h2 className="font-display text-5xl font-bold leading-[0.92] tracking-tighter text-bone md:text-7xl">
            Built different, <br />
            <span className="text-bone/30">by design.</span>
          </h2>
        </ScrollFadeBlur>

        <motion.div
          className="grid grid-cols-1 gap-px border md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15, margin: "0px 0px -10% 0px" }}
          variants={{
            hidden: {
              borderColor: "rgba(255,255,255,0)",
              backgroundColor: "rgba(255,255,255,0)",
            },
            visible: {
              borderColor: "rgba(255,255,255,0.06)",
              backgroundColor: "rgba(255,255,255,0.06)",
              transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {features.map((f, i) => {
            const delay = i * 0.14;
            return (
              <motion.div
                key={f.title}
                className="group relative flex flex-col items-center text-center gap-4 bg-obsidian p-8 transition-colors duration-300 hover:bg-obsidian-surface"
                variants={{
                  hidden: { opacity: 0, x: -90, scale: 0.82, filter: "blur(10px)" },
                  visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
                }}
                transition={{
                  delay,
                  opacity: { duration: 0.4, ease: "easeOut" },
                  filter: { duration: 0.4, ease: "easeOut" },
                  x: { type: "spring", stiffness: 220, damping: 18, mass: 0.7 },
                  scale: { type: "spring", stiffness: 260, damping: 14, mass: 0.6 },
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-bone/50 transition-colors duration-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-300">
                  {f.icon}
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight text-bone">
                  {f.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-bone/45">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyElion;
