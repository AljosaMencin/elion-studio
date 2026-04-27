const HeroVisual = () => (
  <div className="relative w-full max-w-2xl rounded-2xl border border-white/8 bg-obsidian-surface/80 shadow-glow overflow-hidden backdrop-blur-sm">
    {/* Browser chrome */}
    <div className="flex items-center gap-2 border-b border-white/6 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      <div className="ml-3 flex-1 rounded-full bg-white/5 px-3 py-1 text-[10px] text-bone/30 font-mono">
        elion.studio / dashboard
      </div>
    </div>

    {/* Dashboard content */}
    <div className="p-5 flex flex-col gap-4">
      {/* Stat row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Conversion Rate", value: "+81%", delta: "↑ 12% this week" },
          { label: "Organic Traffic", value: "14.2k", delta: "↑ 37% MoM" },
          { label: "Revenue", value: "$48k", delta: "↑ 24% MoM" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-white/6 bg-white/3 p-3">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-bone/40 mb-1">{s.label}</p>
            <p className="font-display text-xl font-bold text-bone tracking-tight">{s.value}</p>
            <p className="text-[9px] text-emerald-400/70 mt-0.5">{s.delta}</p>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="rounded-xl border border-white/6 bg-white/3 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-bone/40">Site Performance</span>
          <span className="text-[9px] text-bone/20">Last 30 days</span>
        </div>
        <div className="flex items-end gap-1 h-16">
          {[30, 45, 35, 55, 48, 62, 58, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i >= 10
                  ? "linear-gradient(to top, rgba(99,102,241,0.8), rgba(139,92,246,0.4))"
                  : "rgba(255,255,255,0.06)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Task list */}
      <div className="rounded-xl border border-white/6 bg-white/3 p-3 flex flex-col gap-2">
        {[
          { text: "Homepage A/B test deployed", done: true },
          { text: "CTA copy optimized → +14% CTR", done: true },
          { text: "Speed audit: LCP improved to 0.9s", done: false },
        ].map((t) => (
          <div key={t.text} className="flex items-center gap-2.5">
            <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${t.done ? "bg-emerald-400/70" : "bg-white/20"}`} />
            <span className={`text-[10px] font-medium ${t.done ? "text-bone/40 line-through" : "text-bone/60"}`}>{t.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pb-20 pt-32 md:px-12">
      <div className="relative z-10 w-full max-w-[1440px]">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* Left: Copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-bone/60 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
              AI-Powered Web Agency
            </div>

            <h1 className="max-w-[16ch] text-balance font-display text-[3rem] font-bold leading-[0.92] tracking-tighter text-bone md:text-[5rem] lg:text-[5.5rem] animate-fade-in">
              Websites + Systems + Data —{" "}
              <span className="text-bone/30">built to grow your business.</span>
            </h1>

            <p
              className="mt-8 max-w-[44ch] text-balance text-sm font-medium leading-relaxed text-sand/70 md:text-base animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              We design, build, and continuously improve your digital presence using AI and analytics. Not a one-time project — a long-term growth engine.
            </p>

            <div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start animate-fade-in"
              style={{ animationDelay: "180ms" }}
            >
              <a
                href="#contact"
                className="group flex items-center gap-4 rounded-full bg-bone px-8 py-4 text-sm font-bold text-obsidian shadow-soft transition-transform duration-500 hover:scale-[1.02]"
              >
                Start a project
                <span className="block h-1.5 w-1.5 rounded-full bg-obsidian/40 transition-colors group-hover:bg-obsidian" />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-semibold text-bone/70 transition-all duration-300 hover:border-white/20 hover:text-bone"
              >
                See how it works
              </a>
            </div>

            {/* Trust strip */}
            <div
              className="mt-12 flex items-center gap-6 animate-fade-in"
              style={{ animationDelay: "260ms" }}
            >
              {["14-day launch", "No lock-in", "Results guaranteed"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-[11px] font-medium text-bone/40">
                  <span className="h-1 w-1 rounded-full bg-bone/20" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="w-full lg:flex-1 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
