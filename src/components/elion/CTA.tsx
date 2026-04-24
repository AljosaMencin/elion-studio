const CTA = () => {
  return (
    <section id="contact" className="relative flex flex-col items-center justify-center px-6 py-32 text-center md:px-12 md:py-60">
      <h2 className="max-w-[12ch] text-balance font-display text-5xl font-bold leading-[0.9] tracking-tighter text-bone md:text-8xl lg:text-[10rem]">
        Start <br />
        <span className="text-bone-dim/40">scaling.</span>
      </h2>
      <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <a
          href="mailto:hello@elion.studio"
          className="group flex items-center gap-4 rounded-full bg-bone px-8 py-4 text-sm font-bold text-obsidian transition-transform duration-500 hover:scale-[1.02]"
        >
          Contact us
          <span className="block h-1.5 w-1.5 rounded-full bg-obsidian/40 transition-colors group-hover:bg-obsidian" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
