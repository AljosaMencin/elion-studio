const steps = [
  {
    n: "01",
    tag: "Discovery",
    title: "We audit your current setup",
    description: "We analyze your site, traffic, and conversion data to identify exactly where you're losing customers and revenue. No guesswork.",
    detail: "Competitor audit · Analytics review · KPI baseline",
  },
  {
    n: "02",
    tag: "Build",
    title: "We design and ship fast",
    description: "Premium, conversion-focused design built with AI speed. From wireframe to live site in days, not months. Every element has a purpose.",
    detail: "14-day launch · Mobile-first · Performance optimized",
  },
  {
    n: "03",
    tag: "Optimize",
    title: "We improve it every month",
    description: "Your site gets better every week. We run tests, monitor data, and push improvements continuously. You see what changed and why.",
    detail: "A/B testing · Monthly reports · Continuous deployment",
  },
  {
    n: "04",
    tag: "Scale",
    title: "We grow your systems with you",
    description: "As your business grows, we layer in automations, booking tools, and marketing systems. One partner, full stack.",
    detail: "CRM integrations · Automations · Growth campaigns",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative px-6 py-32 md:px-12 md:py-40 bg-obsidian-surface">
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
              The process
            </p>
            <h2 className="font-display text-5xl font-bold leading-[0.92] tracking-tighter text-bone md:text-7xl">
              How it <br />
              <span className="text-bone/30">works.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start rounded-full border border-white/10 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-bone/60 transition-all duration-300 hover:border-white/20 hover:text-bone md:self-auto"
          >
            Book a free call
          </a>
        </div>

        <div className="flex flex-col gap-0 divide-y divide-white/6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group grid grid-cols-1 gap-6 py-12 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[120px_1fr_1fr] md:gap-16 md:py-14 md:px-6"
            >
              <div className="font-display text-6xl font-bold tracking-tighter text-bone/10 transition-colors duration-500 group-hover:text-bone/20 md:text-8xl md:leading-none">
                {s.n}
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400/70">
                  {s.tag}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-bone md:text-3xl">
                  {s.title}
                </h3>
                <p className="max-w-prose text-sm font-medium leading-relaxed text-bone/50 md:text-base">
                  {s.description}
                </p>
              </div>

              <div className="flex flex-col justify-center">
                <div className="rounded-xl border border-white/6 bg-white/3 p-5">
                  {s.detail.split(" · ").map((d) => (
                    <div key={d} className="flex items-center gap-3 py-1.5">
                      <span className="h-1 w-1 flex-shrink-0 rounded-full bg-indigo-400/50" />
                      <span className="text-[11px] font-medium text-bone/50">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
