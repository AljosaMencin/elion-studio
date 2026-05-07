import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedBackdrop from "@/components/elion/AnimatedBackdrop";
import Nav from "@/components/elion/Nav";
import Footer from "@/components/elion/Footer";
import ScrollFadeBlur from "@/components/elion/ScrollFadeBlur";
import CTA from "@/components/elion/CTA";
import { useGetInTouch } from "@/components/elion/GetInTouchDrawer";
import WebsiteGraphic from "@/components/elion/services/WebsiteGraphic";
import SystemsGraphic from "@/components/elion/services/SystemsGraphic";
import GrowthGraphic from "@/components/elion/services/GrowthGraphic";

// ── Service data ────────────────────────────────────────────────────────────

type Service = {
  id: "websites" | "systems" | "growth";
  index: string;
  name: string;
  tag: string;
  title: string;
  lead: string;
  detail: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
  process: { step: string; title: string; description: string }[];
  useCases: string[];
  graphic: React.ReactNode;
  accent: string;
};

const SERVICES: Service[] = [
  {
    id: "websites",
    index: "01",
    name: "Websites",
    tag: "Web Design & SEO",
    title: "Websites that earn their keep.",
    lead: "Modern, fast and conversion-focused. Built to look great and rank higher.",
    detail:
      "We start from your funnel, not a template. Every page earns its spot, every component is measured. Launch is the beginning, not the finish line: pages tighten, copy sharpens, and Core Web Vitals stay green long after handoff.",
    highlights: [
      "Custom design & development",
      "Responsive & SEO-friendly",
      "Performance-optimized",
      "Built on the right stack",
      "Continuous improvement after launch",
      "Analytics & conversion tracking",
    ],
    metrics: [
      { value: "0.4s", label: "Load time" },
      { value: "98", label: "PageSpeed" },
      { value: "3×", label: "More leads" },
    ],
    process: [
      {
        step: "01",
        title: "Audit & strategy",
        description: "Map the funnel, find the gaps, agree on the metric we move.",
      },
      {
        step: "02",
        title: "Design & build",
        description: "Custom UI, fast stack, accessible markup, content that converts.",
      },
      {
        step: "03",
        title: "Ship & optimize",
        description: "Real-user metrics, monthly tune-ups, a roadmap that compounds.",
      },
    ],
    useCases: [
      "Marketing site",
      "SaaS product site",
      "E-commerce",
      "Landing page",
      "Portfolio",
    ],
    graphic: <WebsiteGraphic />,
    accent: "rgba(165,180,252,0.55)",
  },
  {
    id: "systems",
    index: "02",
    name: "Systems",
    tag: "SaaS & Tools",
    title: "Operating systems for your business.",
    lead: "Booking, dashboards and automations. Set up once, working for you forever.",
    detail:
      "We replace spreadsheets, sticky notes and \"someone will remember\" with one connected system. Bookings flow into your calendar, sales flow into your dashboard, and your team gets out of the inbox and back to the work that matters.",
    highlights: [
      "Real-time booking & calendars",
      "Custom KPI dashboards",
      "Automations & integrations",
      "Multi-site content hub",
      "Notifications & reminders",
      "Roles, permissions, audit trail",
    ],
    metrics: [
      { value: "24/7", label: "Always on" },
      { value: "−40%", label: "Admin time" },
      { value: "1×", label: "Source of truth" },
    ],
    process: [
      {
        step: "01",
        title: "Map the workflow",
        description: "Where time leaks, where errors happen, what to automate first.",
      },
      {
        step: "02",
        title: "Build the system",
        description: "Booking, dashboard, content hub, or all three, wired to your data.",
      },
      {
        step: "03",
        title: "Connect & automate",
        description: "Stripe, calendars, email and the tools you already pay for.",
      },
    ],
    useCases: [
      "Restaurants",
      "Clinics & salons",
      "Studios & agencies",
      "Sports venues",
      "Multi-location brands",
    ],
    graphic: <SystemsGraphic />,
    accent: "rgba(167,139,250,0.55)",
  },
  {
    id: "growth",
    index: "03",
    name: "Strategies",
    tag: "Marketing",
    title: "Strategies that move numbers.",
    lead: "Less guessing, more compounding wins. Every move tied to real data.",
    detail:
      "We instrument every page, every channel and every conversion event so growth becomes measurable instead of mystical. Then we run experiments with real budget on the line, and double down on the channels that compound.",
    highlights: [
      "Tracking & analytics setup",
      "Custom growth dashboards",
      "Conversion & behavior analysis",
      "Actionable recommendations",
      "SEO, content & paid channel mix",
      "Weekly or monthly reporting",
    ],
    metrics: [
      { value: "4.2×", label: "Traffic" },
      { value: "+87%", label: "Conversions" },
      { value: "Q1→Q3", label: "Compounding" },
    ],
    process: [
      {
        step: "01",
        title: "Measure",
        description: "Tracking, dashboards and a clean baseline for every channel.",
      },
      {
        step: "02",
        title: "Analyze",
        description: "Find the leak, find the lever, prioritize by impact.",
      },
      {
        step: "03",
        title: "Compound",
        description: "Test, ship, double down on what works, kill what doesn't.",
      },
    ],
    useCases: [
      "SEO & content",
      "Paid ads",
      "Conversion rate",
      "Retention & email",
      "Funnel analytics",
    ],
    graphic: <GrowthGraphic />,
    accent: "rgba(110,231,183,0.5)",
  },
];

// ── Section ─────────────────────────────────────────────────────────────────

const ServiceBlock = ({ service, flip }: { service: Service; flip: boolean }) => {
  // Pre-compute accent variants so the JSX stays readable.
  const baseOpacity = service.accent.match(/0\.5\d/)?.[0] || "0.55";
  const accentSoft = service.accent.replace(baseOpacity, "0.18");
  const accentMid = service.accent.replace(baseOpacity, "0.4");
  const accentSolid = service.accent.replace(baseOpacity, "1");
  const accentStrong = service.accent.replace(baseOpacity, "0.85");

  return (
    <section
      id={service.id}
      className="relative scroll-mt-32 px-6 py-24 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Top — copy + graphic */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Copy */}
          <ScrollFadeBlur
            className={`relative lg:col-span-5 ${flip ? "lg:order-2" : ""}`}
          >
            {/* Giant ghost index */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-12 -left-2 select-none font-display text-[10rem] font-bold leading-none text-bone/[0.04] md:-top-20 md:text-[14rem]"
            >
              {service.index}
            </span>

            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-bone/65">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: service.accent }}
                />
                {service.tag}
              </div>

              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-tight text-bone md:text-6xl">
                {service.title}
              </h2>

              <p className="mt-6 max-w-[40ch] text-base font-medium leading-relaxed text-bone/65 md:text-lg">
                {service.lead}
              </p>

              <p className="mt-5 max-w-[44ch] text-sm font-medium leading-relaxed text-bone/45">
                {service.detail}
              </p>

              {/* Highlights — 2-column */}
              <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {service.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="flex items-center gap-2.5 text-[13px] font-medium text-bone/75"
                  >
                    <span
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: accentSoft,
                        border: `1px solid ${accentMid}`,
                      }}
                    >
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: accentSolid }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {h}
                  </motion.li>
                ))}
              </ul>

              {/* Metrics row */}
              <div className="mt-10 flex items-stretch divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                {service.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className="flex flex-1 flex-col items-start px-4 py-4"
                  >
                    <span
                      className="font-display text-2xl font-bold tracking-tight text-bone md:text-3xl"
                      style={{
                        backgroundImage: `linear-gradient(180deg, hsl(0 0% 98%), ${accentStrong})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {m.value}
                    </span>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-bone/40">
                      {m.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollFadeBlur>

          {/* Graphic */}
          <ScrollFadeBlur
            className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}
          >
            <div className="relative">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-10 rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${service.accent}, transparent 60%)`,
                }}
                animate={{ opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative">{service.graphic}</div>
            </div>
          </ScrollFadeBlur>
        </div>

        {/* Process — full-width below the grid */}
        <ScrollFadeBlur className="mt-20 md:mt-28">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
              How it works
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-bone/15 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.12]"
              >
                {/* Accent bar */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(to right, transparent, ${accentSolid}, transparent)`,
                    opacity: 0.5,
                  }}
                />
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-display text-3xl font-bold leading-none"
                    style={{ color: accentSolid }}
                  >
                    {p.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-bone/40">
                    Step {i + 1}
                  </span>
                </div>
                <h4 className="mt-3 font-display text-xl font-bold tracking-tight text-bone">
                  {p.title}
                </h4>
                <p className="mt-2 text-[13px] font-medium leading-relaxed text-bone/55">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollFadeBlur>

        {/* Use cases */}
        <ScrollFadeBlur className="mt-12 flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-bone/35">
            Built for
          </span>
          {service.useCases.map((u) => (
            <span
              key={u}
              className="rounded-full border border-bone/12 bg-white/[0.02] px-3 py-1.5 text-[11px] font-semibold text-bone/70"
            >
              {u}
            </span>
          ))}
        </ScrollFadeBlur>
      </div>

      {/* Connector ribbon */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -bottom-4 hidden h-12 w-px bg-gradient-to-b from-bone/15 to-transparent md:block"
      />
    </section>
  );
};

// ── Page ────────────────────────────────────────────────────────────────────

const Services = () => {
  const location = useLocation();

  // HashRouter consumes the first `#`. The secondary anchor may live on
  // react-router's location.hash, OR be appended to the raw window hash as
  // `#/services#systems`. Compute it from whichever has it.
  const getAnchorId = () => {
    const raw = window.location.hash || "";
    const parts = raw.split("#").filter(Boolean);
    if (parts.length > 1) return parts[parts.length - 1];
    if (location.hash) return location.hash.replace(/^#/, "");
    return "";
  };

  // Scroll to the anchor section (or top) on mount and on hashchange.
  useEffect(() => {
    const headerOffset = 96;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const tryScroll = () => {
      const id = getAnchorId();
      // Temporarily disable CSS smooth scroll (html { scroll-behavior: smooth })
      // so the jump is reliable, then restore it after.
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";

      if (!id) {
        window.scrollTo(0, 0);
        html.style.scrollBehavior = prev;
        return true;
      }
      const el = document.getElementById(id);
      if (!el) {
        html.style.scrollBehavior = prev;
        return false;
      }
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo(0, top);
      // Restore on next frame
      requestAnimationFrame(() => {
        html.style.scrollBehavior = prev;
      });
      return true;
    };

    const run = () => {
      // Retry across several frames in case framer-motion / blur filters
      // shift layout right after mount.
      [40, 120, 240, 480, 800].forEach((delay) => {
        timers.push(setTimeout(tryScroll, delay));
      });
    };

    run();
    const onHashChange = () => run();
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key, location.hash, location.pathname]);

  const { open } = useGetInTouch();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-obsidian text-bone">
      <AnimatedBackdrop />
      <Nav />
      <main className="relative z-10">
        {/* Hero */}
        <section className="relative px-6 pb-16 pt-44 md:px-12 md:pt-48">
          <div className="mx-auto max-w-[1320px]">
            <ScrollFadeBlur className="flex flex-col items-center text-center">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
                Services
              </p>
              <h1 className="max-w-[18ch] text-balance font-display text-5xl font-bold leading-[0.95] tracking-tighter text-bone md:text-7xl lg:text-[5.5rem]">
                Three ways we{" "}
                <span className="text-bone/30">grow your business.</span>
              </h1>
              <p className="mt-7 max-w-[48ch] text-balance text-base font-medium leading-relaxed text-bone/55 md:text-lg">
                Pick a track. Or stitch all three into a complete growth system.
              </p>
            </ScrollFadeBlur>

            {/* Anchor pills */}
            <ScrollFadeBlur className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() =>
                    document
                      .getElementById(s.id)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="group flex items-center gap-3 rounded-full border border-bone/15 bg-white/[0.02] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-bone/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-bone/40 hover:bg-white/[0.05] hover:text-bone"
                >
                  <span className="font-mono text-bone/40 group-hover:text-bone/80">
                    {s.index}
                  </span>
                  {s.name}
                  <span className="text-bone/40 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-bone">
                    ↓
                  </span>
                </button>
              ))}
            </ScrollFadeBlur>
          </div>
        </section>

        {/* Service sections */}
        {SERVICES.map((s, i) => (
          <ServiceBlock key={s.id} service={s} flip={i % 2 === 1} />
        ))}

        {/* Complete-solution band */}
        <section className="relative px-6 py-20 md:px-12">
          <div className="mx-auto max-w-[1320px]">
            <ScrollFadeBlur className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-indigo-950/40 via-[#0a0a0c] to-[#0a0a0c] p-10 md:p-14">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.45), transparent 60%)",
                }}
                animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
                    The complete system
                  </p>
                  <h3 className="max-w-[22ch] font-display text-3xl font-bold leading-tight tracking-tight text-bone md:text-5xl">
                    Design, data and strategy.
                    <br />
                    One partner.
                  </h3>
                </div>

                <button
                  onClick={open}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-bone px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-obsidian shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Talk to us</span>
                  <span className="relative z-10 block h-1.5 w-1.5 rounded-full bg-obsidian/40 transition-colors group-hover:bg-obsidian" />
                  <motion.span
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    initial={{ x: "-150%" }}
                    animate={{ x: "350%" }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      repeatDelay: 1.4,
                      ease: "easeInOut",
                    }}
                  />
                </button>
              </div>
            </ScrollFadeBlur>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
