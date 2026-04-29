import { useState, useEffect } from "react";

const CHART_DATA = [0.28, 0.24, 0.32, 0.38, 0.34, 0.43, 0.50, 0.46, 0.55, 0.62, 0.58, 0.67, 0.64, 0.74, 0.71, 0.83, 0.79, 0.92];
const W = 380;
const H = 68;

function makeSmoothPath(data: number[], w: number, h: number): string {
  const pad = 5;
  const step = w / (data.length - 1);
  const yOf = (v: number) => h - pad - v * (h - pad * 2);
  let d = `M 0 ${yOf(data[0])}`;
  for (let i = 1; i < data.length; i++) {
    const cx = (i - 0.5) * step;
    d += ` C ${cx} ${yOf(data[i - 1])} ${cx} ${yOf(data[i])} ${i * step} ${yOf(data[i])}`;
  }
  return d;
}

const HeroVisual = () => {
  const [revenue, setRevenue] = useState(0);
  const [traffic, setTraffic] = useState(0);
  const [chartW, setChartW] = useState(0);
  const [barsIn, setBarsIn] = useState(false);

  useEffect(() => {
    const dur = 2000;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - (1 - p) ** 3;
      setRevenue(Math.floor(e * 48230));
      setTraffic(Math.floor(e * 1204));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const chartStart = performance.now() + 400;
    let chartRaf: number;
    const chartTick = (now: number) => {
      const p = Math.min(Math.max((now - chartStart) / 2000, 0), 1);
      setChartW((1 - (1 - p) ** 2) * W);
      if (p < 1) chartRaf = requestAnimationFrame(chartTick);
    };
    chartRaf = requestAnimationFrame(chartTick);

    const barTimer = setTimeout(() => setBarsIn(true), 800);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(chartRaf);
      clearTimeout(barTimer);
    };
  }, []);

  const linePath = makeSmoothPath(CHART_DATA, W, H);
  const areaPath = `${linePath} L ${W} ${H} L 0 ${H} Z`;

  return (
    <>
      <style>{`@keyframes heroFloat{0%,100%{transform:translateY(0px)}50%{transform:translateY(-7px)}}`}</style>
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/8 bg-[#0D0D10] shadow-glow overflow-hidden"
        style={{ animation: "heroFloat 4.5s ease-in-out infinite" }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/6 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="ml-3 flex-1 rounded-full bg-white/5 px-3 py-1 text-[10px] text-bone/30 font-mono">
            elion.studio / dashboard
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="flex flex-col items-center gap-3.5 border-r border-white/6 px-3 py-4">
            {[true, false, false, false, false].map((active, i) => (
              <div
                key={i}
                className="rounded-sm"
                style={{
                  width: active ? 16 : 12,
                  height: 3,
                  background: active ? "rgba(129,140,248,0.8)" : "rgba(255,255,255,0.12)",
                  transition: "all 0.2s",
                }}
              />
            ))}
          </div>

          {/* Main panel */}
          <div className="flex-1 min-w-0 p-3.5 flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400/90">Live</span>
                </span>
                <span className="text-[10px] font-semibold text-bone/65">Overview</span>
              </div>
              <span className="text-[8.5px] text-bone/25 border border-white/8 rounded-full px-2.5 py-0.5">
                Last 30 days
              </span>
            </div>

            {/* 4 KPI cards */}
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { label: "Conv. Rate", value: "+81%", delta: "↑ 12% wk", accent: true },
                { label: "Revenue",    value: `$${revenue.toLocaleString()}`, delta: "↑ 24% MoM" },
                { label: "Visitors",   value: traffic.toLocaleString(),       delta: "↑ 37% MoM" },
                { label: "Avg Session",value: "2m 47s",                       delta: "↑ 8% MoM" },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-white/5 bg-white/[0.03] p-2">
                  <p className="text-[7.5px] font-semibold uppercase tracking-widest text-bone/25 mb-1 truncate">{m.label}</p>
                  <p className={`font-display text-[13px] font-bold tracking-tight leading-none ${m.accent ? "text-emerald-400" : "text-bone"}`}>
                    {m.value}
                  </p>
                  <p className="text-[7.5px] text-emerald-400/55 mt-1">{m.delta}</p>
                </div>
              ))}
            </div>

            {/* Area chart */}
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[8.5px] font-semibold uppercase tracking-widest text-bone/30">Performance</span>
                <div className="flex items-center gap-2">
                  {["Jan", "Feb", "Mar", "Apr", "May"].map((m) => (
                    <span key={m} className="text-[7.5px] text-bone/20">{m}</span>
                  ))}
                </div>
              </div>
              <svg
                width="100%"
                viewBox={`0 0 ${W} ${H}`}
                preserveAspectRatio="none"
                style={{ height: 56, display: "block" }}
              >
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(99,102,241,0.4)" />
                    <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                  </linearGradient>
                  <clipPath id="chartClip">
                    <rect x="0" y="0" width={chartW} height={H} />
                  </clipPath>
                </defs>
                <g clipPath="url(#chartClip)">
                  <path d={areaPath} fill="url(#areaGrad)" />
                  {/* Glow line */}
                  <path d={linePath} fill="none" stroke="rgba(99,102,241,0.25)" strokeWidth="5" strokeLinecap="round" />
                  {/* Main line */}
                  <path d={linePath} fill="none" stroke="rgba(129,140,248,0.9)" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              </svg>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-2">
              {/* Top Groups */}
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
                <p className="text-[8px] font-semibold uppercase tracking-widest text-bone/25 mb-2.5">Top Groups</p>
                {[
                  { name: "Referral", pct: 41, color: "rgba(99,102,241,0.8)" },
                  { name: "Direct",   pct: 29, color: "rgba(139,92,246,0.7)" },
                  { name: "Organic",  pct: 17, color: "rgba(168,85,247,0.55)" },
                ].map((g) => (
                  <div key={g.name} className="flex items-center gap-1.5 mb-2 last:mb-0">
                    <span className="text-[7.5px] text-bone/35 w-10 shrink-0">{g.name}</span>
                    <div className="flex-1 h-[3px] rounded-full bg-white/5 overflow-hidden">
                      <div
                        style={{
                          width: barsIn ? `${g.pct}%` : "0%",
                          height: "100%",
                          background: g.color,
                          transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
                        }}
                      />
                    </div>
                    <span className="text-[7.5px] text-bone/25 w-5 text-right shrink-0">{g.pct}%</span>
                  </div>
                ))}
              </div>

              {/* Top Pages */}
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
                <p className="text-[8px] font-semibold uppercase tracking-widest text-bone/25 mb-2.5">Top Pages</p>
                {[
                  { page: "/home",     v: "8,234" },
                  { page: "/services", v: "3,421" },
                  { page: "/contact",  v: "1,204" },
                  { page: "/about",    v: "892" },
                ].map((p) => (
                  <div key={p.page} className="flex items-center justify-between mb-1.5 last:mb-0">
                    <span className="text-[7.5px] text-bone/40 font-mono truncate">{p.page}</span>
                    <span className="text-[7.5px] text-bone/25 shrink-0 ml-1 tabular-nums">{p.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pb-20 pt-32 md:px-12">
      <div className="relative z-10 w-full max-w-[1440px]">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* Left: Copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-bone/60 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
              AI-Powered Web Agency
            </div>

            <h1 className="max-w-[16ch] text-balance font-display text-[3rem] font-bold leading-[0.92] tracking-tighter text-bone md:text-[5rem] lg:text-[5.5rem] animate-fade-in">
              Your growth,{" "}
              <span className="text-bone/30">measured.</span>
            </h1>

            <p
              className="mt-8 max-w-[44ch] text-balance text-sm font-medium leading-relaxed text-sand/70 md:text-base animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Real-time analytics and KPI tracking that turns insights into revenue. We design, build, and continuously improve your site using AI and data.
            </p>

            <div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start animate-fade-in"
              style={{ animationDelay: "180ms" }}
            >
              <a
                href="#contact"
                className="group flex items-center gap-4 rounded-full bg-bone px-8 py-4 text-sm font-bold text-obsidian shadow-soft transition-transform duration-500 hover:scale-[1.02]"
              >
                View full dashboard
                <span className="block h-1.5 w-1.5 rounded-full bg-obsidian/40 transition-colors group-hover:bg-obsidian" />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-semibold text-bone/70 transition-all duration-300 hover:border-white/20 hover:text-bone"
              >
                See how it works
              </a>
            </div>

            {/* Trust strip */}
            <div
              className="mt-12 flex items-center gap-6 animate-fade-in"
              style={{ animationDelay: "260ms" }}
            >
              {["14-day launch", "No lock-in", "Results guaranteed"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-[11px] font-medium text-bone/40">
                  <span className="h-1 w-1 rounded-full bg-bone/20" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard visual */}
          <div
            className="w-full lg:flex-1 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
