import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollFadeBlur from "@/components/elion/ScrollFadeBlur";

const steps = [
  {
    n: "01",
    tag: "Discovery",
    title: "We learn your business and shape the plan",
    description: "Whether you're starting from zero or rebuilding what you have, we start by understanding your goals, audience, and market. Then we map a clear plan tailored to where you are and where you want to go.",
    detail: "Goals & positioning · Audience research · Tailored roadmap",
  },
  {
    n: "02",
    tag: "Build",
    title: "We design and ship fast",
    description: "Premium, conversion-focused design built fast. From wireframe to live site in days, not months. Every element has a purpose.",
    detail: "14-day launch · Mobile-first · Performance optimized",
  },
  {
    n: "03",
    tag: "Optimize",
    title: "We improve it every month",
    description: "Your site gets better every week. We run tests, monitor data, and push improvements continuously. You see what changed and why.",
    detail: "A/B testing · Monthly reports · Continuous deployment",
  },
  {
    n: "04",
    tag: "Scale",
    title: "We grow your systems with you",
    description: "As your business grows, we layer in automations, booking tools, and marketing systems. One partner, full stack.",
    detail: "CRM integrations · Automations · Growth campaigns",
  },
];

const Step = ({
  s,
  index,
  active,
  onActivate,
}: {
  s: typeof steps[number];
  index: number;
  active: boolean;
  onActivate: (i: number) => void;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.35) {
            onActivate(index);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: [0.35, 0.5], rootMargin: "-15% 0px -25% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index, onActivate]);

  const bullets = s.detail.split(" · ");

  return (
    <div
      ref={ref}
      className={`group grid grid-cols-1 gap-6 py-12 transition-all duration-500 ease-out md:grid-cols-[120px_1fr_1fr] md:gap-16 md:py-14 md:px-6 ${
        active ? "opacity-100" : "opacity-50"
      } hover:opacity-100`}
    >
      <div
        className={`font-display text-6xl font-bold tracking-tighter transition-all duration-500 md:text-8xl md:leading-none ${
          active
            ? "text-bone drop-shadow-[0_0_18px_rgba(129,140,248,0.35)]"
            : "text-bone/15"
        }`}
      >
        {s.n}
      </div>

      <div className="flex flex-col gap-3">
        <span className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors duration-500 ${active ? "text-indigo-300" : "text-indigo-400/40"}`}>
          {s.tag}
        </span>
        <h3
          className={`font-display text-2xl font-bold tracking-tight transition-all duration-500 md:text-3xl ${
            active ? "text-bone translate-x-0 group-hover:translate-x-1" : "text-bone/60"
          }`}
        >
          {s.title}
        </h3>
        <p className={`max-w-prose text-sm font-medium leading-relaxed transition-colors duration-500 md:text-base ${active ? "text-bone/70" : "text-bone/40"}`}>
          {s.description}
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <div
          className={`rounded-xl border p-7 transition-all duration-500 ease-out ${
            active
              ? "border-indigo-400/30 bg-indigo-950/20 shadow-[0_0_40px_-20px_rgba(99,102,241,0.4)] group-hover:-translate-y-1 group-hover:border-indigo-300/50"
              : "border-white/6 bg-white/3"
          }`}
        >
          {bullets.map((d, i) => (
            <motion.div
              key={d}
              className="flex items-center gap-3.5 py-2"
              initial={false}
              animate={
                active
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0.55, x: -4 }
              }
              transition={{ duration: 0.35, ease: "easeOut", delay: active ? i * 0.08 : 0 }}
            >
              <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full transition-colors ${active ? "bg-indigo-300 shadow-[0_0_8px_rgba(165,180,252,0.6)]" : "bg-indigo-400/50"}`} />
              <span className={`text-[14px] font-semibold leading-tight transition-colors ${active ? "text-bone" : "text-bone/65"}`}>{d}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activated, setActivated] = useState<boolean[]>(() => steps.map(() => false));

  const activate = (i: number) =>
    setActivated((prev) => {
      if (prev[i]) return prev;
      const next = [...prev];
      next[i] = true;
      return next;
    });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="relative px-6 py-32 md:px-12 md:py-40 bg-obsidian-surface">
      <div className="mx-auto max-w-[1440px]">

        <ScrollFadeBlur className="mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
              The process
            </p>
            <h2 className="font-display text-5xl font-bold leading-[0.92] tracking-tighter text-bone md:text-7xl">
              How it <br />
              <span className="text-bone/30">works.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start rounded-full border border-white/10 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-bone/60 transition-all duration-300 hover:border-white/20 hover:text-bone md:self-auto"
          >
            Book a free call
          </a>
        </ScrollFadeBlur>

        <div ref={sectionRef} className="relative">
          {/* Vertical progress rail */}
          <div className="pointer-events-none absolute left-3 top-0 hidden h-full w-px bg-white/[0.06] md:block">
            <motion.div
              className="absolute left-0 top-0 w-px bg-gradient-to-b from-indigo-300/80 via-indigo-400/60 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col divide-y divide-white/[0.06]">
            {steps.map((s, i) => (
              <Step
                key={s.n}
                s={s}
                index={i}
                active={activated[i]}
                onActivate={activate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
