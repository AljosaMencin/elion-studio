const stats = [
  { value: "+81%", label: "Average conversion lift" },
  { value: "14 days", label: "Average time to launch" },
  { value: "3.4×", label: "Average traffic growth" },
  { value: "100%", label: "Clients on retainer" },
];

const testimonials = [
  {
    q: "Elion didn't just rebuild our site — they turned it into our most reliable revenue channel. We see weekly improvements without lifting a finger.",
    a: "Maya Hartwell",
    r: "Founder, Aura Therapeutics",
  },
  {
    q: "Three weeks from kickoff to launch. The result outperformed the agency we paid 6× more last year.",
    a: "Daniel Okafor",
    r: "Head of Growth, Helix",
  },
  {
    q: "What sold us was the continuous optimization. The site we launched with isn't the one we have today — it's measurably better.",
    a: "Sofia Lindqvist",
    r: "CMO, Northwind Capital",
  },
];

const ProofResults = () => {
  return (
    <section id="results" className="relative px-6 py-32 md:px-12 md:py-40 bg-obsidian-surface">
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-24">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
            Results
          </p>
          <h2 className="font-display text-5xl font-bold leading-[0.92] tracking-tighter text-bone md:text-7xl">
            Numbers that <br />
            <span className="text-bone/30">speak for us.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="mb-24 grid grid-cols-2 gap-px border border-white/6 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-2 bg-obsidian-surface p-8 md:p-10 ${
                i < stats.length - 1 ? "border-r-0 md:border-r border-white/6" : ""
              }`}
            >
              <div className="font-display text-4xl font-bold tracking-tighter text-bone md:text-5xl lg:text-6xl">
                {s.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-bone/40">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.a}
              className={`flex flex-col justify-between rounded-2xl border border-white/6 bg-obsidian p-8 ${
                i === 1 ? "md:mt-8" : ""
              }`}
            >
              <div className="mb-8 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="12" height="12" viewBox="0 0 12 12" fill="rgba(255,255,255,0.4)">
                    <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 text-[15px] font-medium leading-relaxed text-bone/70">
                "{t.q}"
              </blockquote>
              <div className="mt-8 border-t border-white/6 pt-6">
                <div className="font-display text-sm font-bold text-bone">{t.a}</div>
                <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-bone/30">{t.r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofResults;
