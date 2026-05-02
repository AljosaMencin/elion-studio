import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedBackdrop from "@/components/elion/AnimatedBackdrop";
import Nav from "@/components/elion/Nav";
import Footer from "@/components/elion/Footer";
import ScrollFadeBlur from "@/components/elion/ScrollFadeBlur";

// ── Team data — placeholders. Replace name / image / text per card. ─────────
// When you add the role-specific hover effect for each card, put it inside
// the <TeamCard> render (look for the "ROLE-SPECIFIC HOVER PLACEHOLDER" note).

type TeamCardData = {
  name: string;
  image: string; // label used while photo is a placeholder
  text: string;
};

const TEAM: TeamCardData[] = [
  {
    name: "Name Placeholder 1",
    image: "Image Placeholder 1",
    text: "Text Placeholder 1",
  },
  {
    name: "Name Placeholder 2",
    image: "Image Placeholder 2",
    text: "Text Placeholder 2",
  },
  {
    name: "Name Placeholder 3",
    image: "Image Placeholder 3",
    text: "Text Placeholder 3",
  },
  {
    name: "Name Placeholder 4",
    image: "Image Placeholder 4",
    text: "Text Placeholder 4",
  },
];

// ── Team card ───────────────────────────────────────────────────────────────

const TeamCard = ({ data, index }: { data: TeamCardData; index: number }) => (
  <motion.article
    className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-obsidian-surface p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-400/30"
    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Name — top-left */}
    <div className="mb-4 flex items-center justify-between">
      <h3 className="font-display text-lg font-bold tracking-tight text-bone">
        {data.name}
      </h3>
      <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-bone/30">
        0{index + 1}
      </span>
    </div>

    {/* Image placeholder */}
    <div
      className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/[0.04] bg-[#070709]"
      style={{
        background:
          "linear-gradient(145deg, rgba(99,102,241,0.08), rgba(20,20,28,0.9))",
      }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(165,180,252,0.18), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(139,92,246,0.12), transparent 55%)",
        }}
      />

      {/* Placeholder label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full border border-bone/15 bg-obsidian/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-bone/45 backdrop-blur-sm">
          {data.image}
        </span>
      </div>

      {/* ROLE-SPECIFIC HOVER PLACEHOLDER
          When you add the per-role interactive effect, render it here.
          Goal: subtle, intentional motion on group-hover. */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(0deg, rgba(99,102,241,0.18) 0%, transparent 100%)",
          }}
        />
      </div>
    </div>

    {/* Text placeholder */}
    <p className="text-sm font-medium leading-relaxed text-bone/55">
      {data.text}
    </p>
  </motion.article>
);

// ── About page ──────────────────────────────────────────────────────────────

const About = () => {
  // Scroll to top whenever the route mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-obsidian text-bone">
      <AnimatedBackdrop />
      <Nav />

      <main className="relative z-10 pt-32 md:pt-40">
        {/* ── Section 1 — Intro / Vision ───────────────────────────────────── */}
        <section className="relative px-6 pb-24 md:px-12 md:pb-32">
          <div className="mx-auto max-w-[1440px]">
            <ScrollFadeBlur>
              <div className="flex flex-col items-start gap-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
                  About Elion
                </p>

                <h1 className="max-w-[20ch] font-display text-5xl font-bold leading-[1.04] tracking-tight text-bone md:text-7xl">
                  Built around a clear{" "}
                  <span className="text-bone/30">direction.</span>
                </h1>

                <div className="mt-4 flex max-w-[68ch] flex-col gap-6 text-base font-medium leading-relaxed text-bone/65 md:text-[17px]">
                  <p>
                    From the beginning, our focus was never just on building
                    websites. We were drawn to the idea of shaping how companies
                    present themselves in the digital world, long before we fully
                    understood what that would look like or how far it could go.
                    What started as curiosity around design, systems, and online
                    behavior gradually evolved into a clear direction.
                  </p>
                  <p>
                    With Elion, that direction became structured. We are now able
                    to work with companies at every stage of their growth, from
                    early presence to fully developed digital ecosystems. Our role
                    is not limited to creating something that looks good, but to
                    building systems that perform, adapt, and provide real
                    insight. This aligns with the core idea of delivering
                    scalable, data-driven solutions that help businesses grow
                    through modern technologies.
                  </p>
                  <p>
                    We approach every project with the understanding that a
                    company's digital presence is not static. It is something
                    that needs to evolve, be measured, and continuously improved.
                  </p>
                </div>
              </div>
            </ScrollFadeBlur>
          </div>
        </section>

        {/* ── Section 2 — Team / Studio image placeholder ──────────────────── */}
        <section className="relative px-6 pb-24 md:px-12 md:pb-32">
          <div className="mx-auto max-w-[1440px]">
            <ScrollFadeBlur>
              <div
                className="relative w-full overflow-hidden rounded-3xl border border-white/[0.06]"
                style={{
                  aspectRatio: "16/7",
                  background:
                    "linear-gradient(160deg, #0d0d18 0%, #07070b 60%, #0a0a14 100%)",
                }}
              >
                {/* Atmospheric glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 80% at 30% 40%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(ellipse 50% 60% at 75% 70%, rgba(139,92,246,0.14), transparent 55%)",
                  }}
                />
                {/* Faint grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                  }}
                />
                {/* Center label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="rounded-full border border-bone/15 bg-obsidian/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-bone/45 backdrop-blur-sm">
                    Team / Studio image
                  </span>
                  <p className="max-w-[44ch] text-balance text-center text-xs font-medium text-bone/35">
                    Reserved for a natural, slightly editorial photograph of the
                    team and studio environment.
                  </p>
                </div>
                {/* Vignette */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
                  }}
                />
              </div>
            </ScrollFadeBlur>
          </div>
        </section>

        {/* ── Section 3 — Founders / Background story ──────────────────────── */}
        <section className="relative px-6 pb-24 md:px-12 md:pb-32">
          <div className="mx-auto max-w-[1440px]">
            <ScrollFadeBlur>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
                <div>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
                    Founders
                  </p>
                  <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-bone md:text-[2.5rem]">
                    Different perspectives, one system.
                  </h2>
                </div>

                <div className="flex flex-col gap-6 text-base font-medium leading-relaxed text-bone/65 md:text-[17px]">
                  <p>
                    The foundation of Elion comes from combining different
                    perspectives into one system.
                  </p>
                  <p>
                    Each of the founders developed their skills in different
                    areas, ranging from programming and system building, to
                    design and user experience research, to marketing strategy,
                    statistics, and analytical thinking. Individually, these
                    disciplines solve isolated problems. Together, they allow
                    for a complete understanding of how digital products are
                    created, perceived, and optimized.
                  </p>
                  <p>
                    We came together under a shared vision. The goal was to
                    build a company that businesses can rely on when they want
                    to improve, refine, or fully understand their digital
                    presence. Not just visually, but structurally and
                    strategically.
                  </p>
                  <p>
                    Elion is built around that idea. A company that does not
                    operate in fragments, but as a connected system where
                    design, performance, and data all support each other.
                  </p>

                  {/* History placeholder */}
                  <div className="mt-4 rounded-xl border border-dashed border-white/10 bg-white/[0.015] px-5 py-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-bone/35">
                      History · coming soon
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-bone/40">
                      A timeline of the studio's milestones will live here as
                      the company develops.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollFadeBlur>
          </div>
        </section>

        {/* ── Section 4 — Team portrait cards ──────────────────────────────── */}
        <section className="relative px-6 pb-32 md:px-12 md:pb-40">
          <div className="mx-auto max-w-[1440px]">
            <ScrollFadeBlur className="mb-16">
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
                  The team
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-tight text-bone md:text-6xl">
                  Each piece of <br />
                  <span className="text-bone/30">the system.</span>
                </h2>
              </div>
            </ScrollFadeBlur>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member, i) => (
                <TeamCard key={i} data={member} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing return-home strip ────────────────────────────────────── */}
        <section className="relative px-6 pb-32 md:px-12 md:pb-40">
          <div className="mx-auto max-w-[1100px]">
            <div className="flex flex-col items-center gap-6 text-center">
              <p className="max-w-[40ch] text-balance font-display text-2xl font-bold leading-snug tracking-tight text-bone md:text-3xl">
                Want to see what the system looks like in action?
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3 text-[13px] font-semibold text-bone/75 transition-all duration-300 hover:border-bone/40 hover:bg-white/[0.05] hover:text-bone"
              >
                <span>← Back to the studio</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
