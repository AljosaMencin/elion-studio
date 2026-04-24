const quotes = [
  {
    q: "Elion didn't just rebuild our site — they turned it into our most reliable revenue channel. We see weekly improvements without lifting a finger.",
    a: "Maya Hartwell",
    r: "Founder, Aura Therapeutics",
  },
  {
    q: "Three weeks from kickoff to launch. The result outperformed the agency we paid 6× more, last year.",
    a: "Daniel Okafor",
    r: "Head of Growth, Helix",
  },
  {
    q: "What sold us was the continuous optimization. The site we launched with isn't the one we have today — it's measurably better.",
    a: "Sofia Lindqvist",
    r: "CMO, Northwind Capital",
  },
];

const Results = () => {
  return (
    <section id="results" className="relative px-6 py-32 md:px-12 md:py-40 bg-obsidian-surface">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center justify-center text-center">
        <blockquote className="max-w-[18ch] text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-bone md:text-6xl">
          "They didn't just build a site, they built our most reliable revenue channel."
        </blockquote>
        <div className="mt-12 flex flex-col items-center gap-2">
          <span className="font-display text-lg font-bold text-bone">Maya Hartwell</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand/60">
            Founder, Aura Therapeutics
          </span>
        </div>
      </div>
    </section>
  );
};

export default Results;
