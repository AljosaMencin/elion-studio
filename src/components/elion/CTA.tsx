const CTA = () => {
  return (
    <section id="contact" className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 text-center md:px-12 md:py-60">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.6), transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
          Get started
        </p>

        <h2 className="max-w-[14ch] text-balance font-display text-5xl font-bold leading-[0.92] tracking-tighter text-bone md:text-8xl lg:text-[9rem]">
          Ready to grow your business?
        </h2>

        <p className="mt-8 max-w-[40ch] text-balance text-sm font-medium leading-relaxed text-bone/50 md:text-base">
          Book a free 30-minute strategy call. We'll audit your current setup and show you exactly where you're leaving money on the table.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@elion.studio"
            className="group flex items-center gap-4 rounded-full bg-bone px-10 py-4 text-sm font-bold text-obsidian shadow-soft transition-transform duration-500 hover:scale-[1.02]"
          >
            Book a free call
            <span className="block h-1.5 w-1.5 rounded-full bg-obsidian/40 transition-colors group-hover:bg-obsidian" />
          </a>
          <a
            href="mailto:hello@elion.studio"
            className="text-sm font-semibold text-bone/40 transition-colors duration-300 hover:text-bone"
          >
            Or email us directly →
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {["Free strategy call", "No commitment", "Results in 14 days"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-[11px] font-medium text-bone/30">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="2,6 5,9 10,3" />
              </svg>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
