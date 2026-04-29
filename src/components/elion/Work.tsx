import {
  LaptopFrame,
  PhoneStorefront,
  LaptopDashboardScreen,
  LaptopMarketingScreen,
  LaptopPortfolioScreen,
} from "@/components/elion/DeviceMockups";

type Case = {
  client: string;
  category: string;
  headline: string;
  metrics: { value: string; label: string }[];
  visual: React.ReactNode;
};

const cases: Case[] = [
  {
    client: "Aura Therapeutics",
    category: "E-commerce / Wellness",
    headline: "Rebuilt the storefront. Doubled checkout conversion in 8 weeks.",
    metrics: [
      { value: "+147%", label: "Conversion" },
      { value: "0.84s", label: "LCP" },
    ],
    visual: <PhoneStorefront />,
  },
  {
    client: "Northwind Capital",
    category: "Finance / B2B",
    headline: "From outdated brochure to lead engine generating qualified demos weekly.",
    metrics: [
      { value: "8.2×", label: "Demos" },
      { value: "1.1s", label: "TTI" },
    ],
    visual: (
      <div className="flex items-center justify-center w-full h-full" style={{ background: "#030305", padding: "10%" }}>
        <LaptopFrame>
          <LaptopDashboardScreen />
        </LaptopFrame>
      </div>
    ),
  },
  {
    client: "Helix Studio",
    category: "SaaS / Product",
    headline: "A new marketing site shipped in 3 weeks. Trial signups up 3.4×.",
    metrics: [
      { value: "+241%", label: "Signups" },
      { value: "0.9s", label: "LCP" },
    ],
    visual: (
      <div className="flex items-center justify-center w-full h-full" style={{ background: "#030305", padding: "10%" }}>
        <LaptopFrame>
          <LaptopMarketingScreen />
        </LaptopFrame>
      </div>
    ),
  },
  {
    client: "Forma Atelier",
    category: "Architecture / Brand",
    headline: "Editorial portfolio that turned awards into inbound clients.",
    metrics: [
      { value: "12", label: "Inbound/mo" },
      { value: "+89%", label: "Engagement" },
    ],
    visual: (
      <div className="flex items-center justify-center w-full h-full" style={{ background: "#030305", padding: "10%" }}>
        <LaptopFrame>
          <LaptopPortfolioScreen />
        </LaptopFrame>
      </div>
    ),
  },
];

const Work = () => {
  return (
    <section id="work" className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tighter text-bone md:text-8xl">
              Proof, <br />
              <span className="text-bone-dim/40">not promises.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {cases.map((c, i) => (
            <article
              key={c.client}
              className={`group relative flex flex-col gap-6 ${i % 2 !== 0 ? "md:mt-32" : ""}`}
            >
              {/* Device visual */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#030305] border border-white/5">
                <div className="absolute inset-0">
                  {c.visual}
                </div>
                <div className="absolute inset-0 border border-border/30" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-sand/60">
                  <span>{c.category}</span>
                </div>
                <h3 className="font-display text-2xl font-medium leading-tight text-bone md:text-3xl">
                  {c.headline}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-2xl font-bold tracking-tight tabular-nums text-bone">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand/50">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
