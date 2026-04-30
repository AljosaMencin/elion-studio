const steps = [
  {
    n: "01",
    t: "Discover",
    d: "Audit, analyze, and define metrics that move the needle.",
  },
  {
    n: "02",
    t: "Design",
    d: "Premium, conversion-focused design — built fast, without compromises.",
  },
  {
    n: "03",
    t: "Optimize",
    d: "Continuous testing. Real analytics. Never guess.",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-32">
          <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-tighter text-bone md:text-8xl">
            Our <br />
            <span className="text-bone-dim/40">process.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-32">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group flex flex-col md:flex-row md:items-start md:gap-24"
            >
              <div className="font-display text-8xl font-bold tracking-tighter text-bone-dim/20 transition-colors duration-500 group-hover:text-bone md:text-[12rem] md:leading-[0.8]">
                {s.n}
              </div>
              <div className="mt-8 flex flex-col gap-4 md:mt-0 md:pt-4">
                <h3 className="font-display text-3xl font-bold tracking-tight text-bone md:text-5xl">
                  {s.t}
                </h3>
                <p className="max-w-md text-balance text-lg font-medium text-sand md:text-xl">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
