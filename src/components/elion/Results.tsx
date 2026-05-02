import { AnalyticsCrop } from "@/components/elion/DeviceMockups";

const quotes = [
  {
    q: "Elion didn't just rebuild our site. They turned it into our most reliable revenue channel. We see weekly improvements without lifting a finger.",
    a: "Maya Hartwell",
    r: "Founder, Aura Therapeutics",
  },
  {
    q: "Three weeks from kickoff to launch. The result outperformed the agency we paid 6× more, last year.",
    a: "Daniel Okafor",
    r: "Head of Growth, Helix",
  },
  {
    q: "What sold us was the continuous optimization. The site we launched with isn't the one we have today. It's measurably better.",
    a: "Sofia Lindqvist",
    r: "CMO, Northwind Capital",
  },
];

const Results = () => {
  return (
    <section id="results" className="relative px-6 py-32 md:px-12 md:py-40 bg-obsidian-surface">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center gap-20 lg:flex-row lg:items-center lg:gap-24">

          {/* Left: analytics visual */}
          <div className="w-full lg:w-[480px] shrink-0">
            <AnalyticsCrop />
          </div>

          {/* Right: testimonial */}
          <div className="flex flex-col items-start gap-12">
            <blockquote className="max-w-[22ch] text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-bone md:text-5xl">
              "They didn't just build a site, they built our most reliable revenue channel."
            </blockquote>
            <div className="flex flex-col gap-2">
              <span className="font-display text-lg font-bold text-bone">Maya Hartwell</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand/60">
                Founder, Aura Therapeutics
              </span>
            </div>

            {/* Mini quote strip */}
            <div className="flex flex-col gap-6 border-l border-white/8 pl-6">
              {quotes.slice(1).map((q) => (
                <div key={q.a} className="flex flex-col gap-2">
                  <p className="text-sm font-medium leading-relaxed text-bone/50">"{q.q}"</p>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-sand/40">
                    <span>{q.a}</span>
                    <span className="text-white/10">·</span>
                    <span>{q.r}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;
