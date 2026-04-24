const logos = [
  "Aura", "Northwind", "Helix", "Lumen", "Forma", "Vantage", "Solace", "Meridian", "Cobalt", "Orbital",
];

const LogoMarquee = () => {
  return (
    <section className="relative border-y border-border bg-obsidian-surface py-12">
      <div className="mx-auto mb-10 max-w-[1440px] px-6 md:px-12">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-bone-dim/60">
          Entrusted by digital leaders
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-24 px-12">
          {[...logos, ...logos].map((name, i) => (
            <span key={i} className="font-display text-xl font-bold tracking-tight text-bone/20 transition-colors hover:text-bone">
              {name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-obsidian-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-obsidian-surface to-transparent" />
      </div>
    </section>
  );
};

export default LogoMarquee;
