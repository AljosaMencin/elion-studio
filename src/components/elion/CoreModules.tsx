const modules = [
  {
    tag: "BUILD",
    title: "Websites",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    description: "High-converting websites that look great and perform exceptionally. Built fast, optimized continuously.",
    cta: "Explore Websites",
    featured: false,
  },
  {
    tag: "SYSTEMS",
    title: "SaaS & Tools",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    description: "Booking, KPI dashboards and content systems that automate your business and free up your time.",
    cta: "Explore Systems",
    featured: true,
  },
  {
    tag: "GROWTH",
    title: "Marketing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    description: "Data-driven marketing strategies that bring more traffic and conversions, powered by real analytics.",
    cta: "Explore Growth",
    featured: false,
  },
];

import { useState } from "react";

const CoreModules = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-20 flex flex-col items-center text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
            What we do
          </p>
          <h2 className="max-w-[18ch] text-balance font-display text-5xl font-bold leading-[0.92] tracking-tighter text-bone md:text-7xl">
            Three ways we <br />
            <span className="text-bone/30">grow your business.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {modules.map((m, i) => {
            const active = hoveredIndex === i;
            return (
              <div
                key={m.tag}
                className={`group relative flex flex-col rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 ${
                  active
                    ? "border-indigo-500/30 bg-indigo-950/30 shadow-[0_0_60px_-20px_rgba(99,102,241,0.3)]"
                    : "border-white/6 bg-obsidian-surface hover:border-white/12"
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {active && (
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
                )}

                <div className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-500 ${
                  active ? "border-indigo-400/30 bg-indigo-400/10 text-indigo-300" : "border-white/8 bg-white/4 text-bone/60"
                }`}>
                  {m.icon}
                </div>

                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-bone/40">
                  {m.tag}
                </div>
                <h3 className="font-display text-3xl font-bold tracking-tight text-bone md:text-4xl">
                  {m.title}
                </h3>

                <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-bone/50">
                  {m.description}
                </p>

                <a
                  href="#contact"
                  className={`mt-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    active ? "text-indigo-300 hover:text-indigo-200" : "text-bone/40 hover:text-bone"
                  }`}
                >
                  {m.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreModules;
