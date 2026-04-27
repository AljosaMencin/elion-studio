const solutions = [
  {
    tag: "E-Commerce",
    title: "Shopify storefronts that convert",
    description: "Fast, beautiful stores built to turn visitors into buyers. Optimized checkout flows and product pages.",
    metrics: [{ v: "+147%", l: "Conversion" }, { v: "0.84s", l: "LCP" }],
    preview: (
      <div className="flex flex-col gap-2 p-4">
        <div className="h-2 w-3/4 rounded-full bg-white/8" />
        <div className="h-2 w-1/2 rounded-full bg-white/5" />
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[1,2,3,4].map(i => (
            <div key={i} className="aspect-square rounded-lg bg-white/4 border border-white/6 flex items-end p-2">
              <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
        <div className="mt-2 h-8 w-full rounded-lg bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center">
          <div className="h-1.5 w-1/3 rounded-full bg-indigo-400/40" />
        </div>
      </div>
    ),
  },
  {
    tag: "Lead Generation",
    title: "B2B sites that book demos",
    description: "From outdated brochure to a lead engine. Structured to qualify visitors and convert them into booked calls.",
    metrics: [{ v: "8.2×", l: "More demos" }, { v: "1.1s", l: "TTI" }],
    preview: (
      <div className="flex flex-col gap-2 p-4">
        <div className="h-6 w-2/3 rounded-lg bg-white/8" />
        <div className="h-2 w-full rounded-full bg-white/4 mt-1" />
        <div className="h-2 w-4/5 rounded-full bg-white/4" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-lg border border-white/6 bg-white/3 p-2 flex flex-col gap-1">
              <div className="h-3 w-3 rounded bg-white/10" />
              <div className="h-1.5 w-full rounded-full bg-white/6" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/4" />
            </div>
          ))}
        </div>
        <div className="mt-2 h-8 w-2/3 rounded-full bg-white/8 border border-white/8" />
      </div>
    ),
  },
  {
    tag: "SaaS Marketing",
    title: "Marketing sites that drive signups",
    description: "Built for product companies. Clear positioning, feature storytelling, and conversion funnels that get trials.",
    metrics: [{ v: "+241%", l: "Signups" }, { v: "0.9s", l: "LCP" }],
    preview: (
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-5 w-5 rounded bg-indigo-500/30" />
          <div className="h-2 w-20 rounded-full bg-white/10" />
        </div>
        <div className="h-5 w-4/5 rounded-lg bg-white/8" />
        <div className="h-2 w-full rounded-full bg-white/4 mt-1" />
        <div className="mt-3 flex gap-2">
          <div className="h-7 flex-1 rounded-full bg-indigo-500/20 border border-indigo-500/20" />
          <div className="h-7 flex-1 rounded-full bg-white/4 border border-white/6" />
        </div>
        <div className="mt-2 flex items-end gap-1 h-12">
          {[40,60,50,75,65,85,80].map((h,i) => (
            <div key={i} className="flex-1 rounded-sm"
              style={{ height: `${h}%`, background: i >= 4 ? "rgba(99,102,241,0.4)" : "rgba(255,255,255,0.04)" }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    tag: "Brand & Editorial",
    title: "Portfolios that win clients",
    description: "Editorial-grade design for architects, studios, and agencies. Your work deserves a site that commands attention.",
    metrics: [{ v: "12", l: "Inbound/mo" }, { v: "+89%", l: "Engagement" }],
    preview: (
      <div className="flex flex-col gap-2 p-4">
        <div className="aspect-video w-full rounded-lg bg-white/4 border border-white/6 flex items-end p-3">
          <div className="flex flex-col gap-1">
            <div className="h-3 w-24 rounded bg-white/20" />
            <div className="h-1.5 w-16 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[1,2].map(i => (
            <div key={i} className="aspect-square rounded-lg bg-white/3 border border-white/5" />
          ))}
        </div>
      </div>
    ),
  },
];

const SolutionsPreview = () => {
  return (
    <section id="work" className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
              What we build
            </p>
            <h2 className="font-display text-5xl font-bold leading-[0.92] tracking-tighter text-bone md:text-7xl">
              Proof, <br />
              <span className="text-bone/30">not promises.</span>
            </h2>
          </div>
          <p className="max-w-[36ch] text-sm font-medium leading-relaxed text-bone/40 md:text-right">
            Every project is built to convert, measured by results, and improved monthly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {solutions.map((s, i) => (
            <div
              key={s.tag}
              className={`group relative flex flex-col rounded-2xl border border-white/6 bg-obsidian-surface overflow-hidden transition-all duration-500 hover:border-white/12 hover:-translate-y-1 ${
                i % 2 !== 0 ? "md:mt-12" : ""
              }`}
            >
              {/* Preview visual */}
              <div className="border-b border-white/6 bg-[#060608]">
                {s.preview}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-bone/40">{s.tag}</span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-bone md:text-3xl">
                  {s.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-bone/50">
                  {s.description}
                </p>
                <div className="mt-2 grid grid-cols-2 gap-4 border-t border-white/6 pt-5">
                  {s.metrics.map((m) => (
                    <div key={m.l}>
                      <div className="font-display text-2xl font-bold tracking-tight tabular-nums text-bone">{m.v}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-bone/30">{m.l}</div>
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

export default SolutionsPreview;
