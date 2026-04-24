const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pb-20 pt-32 md:px-12">
      <div className="relative z-10 flex w-full max-w-[1440px] flex-col items-center">
        
        {/* Logo */}
        <img 
          src={`${import.meta.env.BASE_URL}elion-logo.png`} 
          alt="Elion Logo" 
          className="mb-8 w-[28rem] md:w-[48rem] invert opacity-90 animate-fade-in" 
        />

        {/* Extreme minimalism: Just the headline and the exact value proposition */}
        <h1 className="max-w-[12ch] text-balance text-center font-display text-[4rem] font-bold leading-[0.9] tracking-tighter md:text-[8rem] lg:text-[10rem] animate-fade-in">
          Built to <span className="text-bone-dim/40">scale.</span>
        </h1>

        <div 
          className="mt-12 md:mt-20 flex flex-col md:flex-row items-center gap-6 animate-fade-in"
          style={{ animationDelay: "150ms" }}
        >
          <p className="max-w-[42ch] text-balance text-center md:text-left text-sm font-medium leading-relaxed text-sand md:text-base">
            Elion is an AI-powered digital agency. We design and ship high-performing websites for founders who value speed and aesthetic excellence.
          </p>
          <div className="hidden h-12 w-px bg-border md:block" />
          <a
            href="#work"
            className="group flex items-center gap-4 rounded-full bg-bone px-8 py-4 text-sm font-semibold text-obsidian shadow-soft transition-transform duration-500 hover:scale-[1.02]"
          >
            Explore our work
            <span className="block h-1.5 w-1.5 rounded-full bg-obsidian/40 transition-colors group-hover:bg-obsidian" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
