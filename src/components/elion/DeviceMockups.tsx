// Reusable premium device mockup components
import { motion } from "framer-motion";

export const LaptopFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`relative w-full ${className}`}
    style={{
      perspective: "2400px",
      perspectiveOrigin: "50% 35%",
      paddingBottom: "7%",
    }}
  >
    {/* 3D unit with subtle continuous left/right rotation */}
    <motion.div
      className="relative mx-auto"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
      }}
      animate={{ rotateY: [-11, -5, -11], rotateX: [4, 5.5, 4] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Screen / lid */}
      <div
        className="relative w-full"
        style={{
          aspectRatio: "16/10",
          background: "linear-gradient(180deg, #1c1c20 0%, #101013 100%)",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          boxShadow:
            "0 50px 100px -25px rgba(0,0,0,0.75), 0 90px 180px -50px rgba(99,102,241,0.22), inset 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* Subtle screen-top reflection */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20"
          style={{
            height: "30%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        {/* Webcam */}
        <div
          className="absolute left-1/2 z-10 -translate-x-1/2 rounded-full"
          style={{ top: "1.4%", width: 5, height: 5, background: "#0a0a0c" }}
        />
        {/* Screen bezel → content */}
        <div
          className="absolute overflow-hidden"
          style={{ inset: "3% 2.5% 4% 2.5%", background: "#050507", borderRadius: 5 }}
        >
          {children}
        </div>
      </div>

      {/* Base lip — clean trapezoidal edge below the screen */}
      <div
        className="absolute"
        style={{
          left: "-1.5%",
          right: "-1.5%",
          top: "100%",
          height: "3.2%",
          background:
            "linear-gradient(180deg, #2a2a30 0%, #1a1a20 60%, #0c0c10 100%)",
          clipPath: "polygon(2.5% 0%, 97.5% 0%, 100% 100%, 0% 100%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.06) inset, 0 30px 50px -10px rgba(0,0,0,0.7)",
        }}
      />
      {/* Notch / palm-rest cutout in the front edge */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "calc(100% + 3.05%)",
          width: "16%",
          height: "0.9%",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
          borderRadius: "0 0 4px 4px",
        }}
      />

      {/* Soft floor shadow under the laptop */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: "-8%",
          right: "-8%",
          top: "108%",
          height: "10%",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(8px)",
          transform: "translateZ(-50px)",
        }}
      />
    </motion.div>
  </div>
);

// Phone with e-commerce storefront — Aura Therapeutics
export const PhoneStorefront: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center" style={{ background: "#030305" }}>
    <div className="relative" style={{ height: "86%", aspectRatio: "9/19.5" }}>
      {/* Body */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background: "#0d0d0f",
          borderRadius: 44,
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
        }}
      >
        {/* Dynamic island */}
        <div
          className="absolute left-1/2 z-10 -translate-x-1/2 rounded-full"
          style={{ top: "1.5%", width: "28%", height: "2.2%", background: "#000" }}
        />
        {/* Screen content */}
        <div className="absolute overflow-hidden" style={{ top: "5%", bottom: "4%", left: "3%", right: "3%" }}>
          {/* Nav */}
          <div className="flex items-center justify-between px-2 mb-3" style={{ paddingTop: "3%" }}>
            <div className="rounded" style={{ height: 7, width: 52, background: "rgba(255,255,255,0.14)" }} />
            <div className="rounded-full" style={{ height: 20, width: 20, background: "rgba(255,255,255,0.07)" }} />
          </div>
          {/* Category pills */}
          <div className="flex gap-1.5 px-2 mb-3">
            {[{ w: 44, active: true }, { w: 32 }, { w: 36 }, { w: 28 }].map((p, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{ height: 18, width: p.w, background: p.active ? "rgba(129,140,248,0.35)" : "rgba(255,255,255,0.06)" }}
              />
            ))}
          </div>
          {/* Product grid 2×3 */}
          <div className="grid grid-cols-2 gap-1.5 px-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden"
                style={{ borderRadius: 10, background: "rgba(255,255,255,0.04)", aspectRatio: "1/1.15" }}
              >
                <div style={{ height: "65%", background: `rgba(255,255,255,${0.04 + (i % 3) * 0.02})` }} />
                <div className="flex flex-col gap-1" style={{ padding: "6px 8px" }}>
                  <div className="rounded" style={{ height: 5, width: 40, background: "rgba(255,255,255,0.13)" }} />
                  <div className="rounded" style={{ height: 5, width: 28, background: "rgba(129,140,248,0.4)" }} />
                </div>
              </div>
            ))}
          </div>
          {/* CTA bar */}
          <div
            className="mx-2 mt-2 rounded-full flex items-center justify-center"
            style={{ height: 28, background: "rgba(129,140,248,0.25)" }}
          >
            <div className="rounded" style={{ height: 5, width: 60, background: "rgba(255,255,255,0.3)" }} />
          </div>
        </div>
        {/* Home bar */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{ bottom: "1.5%", height: 3, width: "30%", background: "rgba(255,255,255,0.18)" }}
        />
      </div>
    </div>
  </div>
);

// Laptop with dark analytics dashboard — Northwind Capital
export const LaptopDashboardScreen: React.FC = () => (
  <div className="w-full h-full flex flex-col" style={{ background: "#080810", padding: "8px 10px" }}>
    {/* Top metric row */}
    <div className="grid grid-cols-4 gap-1.5 mb-2">
      {["+81%", "$48k", "14.2k", "0.9s"].map((v, i) => (
        <div key={i} className="rounded-lg flex flex-col gap-1" style={{ padding: "6px 8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="rounded" style={{ height: 4, width: 28, background: "rgba(255,255,255,0.12)" }} />
          <div className="font-display font-bold text-bone" style={{ fontSize: 11, color: i === 0 ? "rgba(52,211,153,0.9)" : "rgba(250,250,250,0.85)" }}>{v}</div>
        </div>
      ))}
    </div>
    {/* Chart area */}
    <div className="flex-1 rounded-lg overflow-hidden mb-2" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
      <svg width="100%" height="100%" viewBox="0 0 300 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(99,102,241,0.45)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </linearGradient>
        </defs>
        <path d="M0 60 C30 55 60 45 90 35 C120 25 150 30 180 18 C210 8 240 12 270 6 L300 4 L300 80 L0 80 Z" fill="url(#dg)" />
        <path d="M0 60 C30 55 60 45 90 35 C120 25 150 30 180 18 C210 8 240 12 270 6 L300 4" fill="none" stroke="rgba(129,140,248,0.85)" strokeWidth="1.5" />
      </svg>
    </div>
    {/* Bottom panels */}
    <div className="grid grid-cols-2 gap-1.5">
      {[["Referral", "41%"], ["Direct", "29%"], ["Organic", "17%"], ["Social", "13%"]].map(([l, v]) => (
        <div key={l} className="flex items-center justify-between rounded" style={{ padding: "4px 7px", background: "rgba(255,255,255,0.03)" }}>
          <div className="rounded" style={{ height: 4, width: 30, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ fontSize: 8, color: "rgba(129,140,248,0.8)", fontWeight: 700 }}>{v}</div>
        </div>
      ))}
    </div>
  </div>
);

// Laptop with marketing/SaaS site — Helix Studio
export const LaptopMarketingScreen: React.FC = () => (
  <div className="w-full h-full flex flex-col" style={{ background: "#04040A" }}>
    {/* Nav bar */}
    <div className="flex items-center justify-between px-4" style={{ height: 22, background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="rounded" style={{ height: 6, width: 40, background: "rgba(255,255,255,0.2)" }} />
      <div className="flex gap-2">
        {[28, 22, 18, 18].map((w, i) => <div key={i} className="rounded" style={{ height: 5, width: w, background: "rgba(255,255,255,0.1)" }} />)}
      </div>
      <div className="rounded-full" style={{ height: 16, width: 52, background: "rgba(129,140,248,0.3)" }} />
    </div>
    {/* Hero section */}
    <div className="flex-1 flex flex-col items-center justify-center gap-2 px-4" style={{ paddingTop: 8 }}>
      <div className="rounded" style={{ height: 5, width: 60, background: "rgba(255,255,255,0.15)" }} />
      <div className="rounded" style={{ height: 16, width: 160, background: "rgba(255,255,255,0.2)" }} />
      <div className="rounded" style={{ height: 16, width: 120, background: "rgba(255,255,255,0.08)" }} />
      <div className="rounded" style={{ height: 6, width: 200, background: "rgba(255,255,255,0.06)", marginTop: 2 }} />
      <div className="rounded" style={{ height: 6, width: 160, background: "rgba(255,255,255,0.04)" }} />
      <div className="flex gap-2 mt-2">
        <div className="rounded-full" style={{ height: 20, width: 80, background: "rgba(250,250,250,0.9)" }} />
        <div className="rounded-full" style={{ height: 20, width: 80, border: "1px solid rgba(255,255,255,0.15)" }} />
      </div>
    </div>
    {/* Feature strip */}
    <div className="grid grid-cols-3 gap-2 px-3 pb-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg" style={{ padding: "6px 8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="rounded-sm mb-1" style={{ height: 12, width: 12, background: "rgba(129,140,248,0.4)" }} />
          <div className="rounded mb-1" style={{ height: 5, width: 40, background: "rgba(255,255,255,0.15)" }} />
          <div className="rounded" style={{ height: 4, width: 55, background: "rgba(255,255,255,0.06)" }} />
        </div>
      ))}
    </div>
  </div>
);

// Laptop with editorial portfolio — Forma Atelier
export const LaptopPortfolioScreen: React.FC = () => (
  <div className="w-full h-full flex flex-col" style={{ background: "#020202" }}>
    {/* Nav */}
    <div className="flex items-center justify-between px-4" style={{ height: 22, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="rounded" style={{ height: 7, width: 55, background: "rgba(255,255,255,0.22)" }} />
      <div className="flex gap-3">
        {[24, 20, 24, 16].map((w, i) => <div key={i} className="rounded" style={{ height: 4, width: w, background: "rgba(255,255,255,0.1)" }} />)}
      </div>
    </div>
    {/* Asymmetric grid */}
    <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-1 p-1.5">
      {/* Large feature card */}
      <div className="col-span-2 row-span-2 rounded overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div style={{ height: "70%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ padding: "8px 10px" }}>
          <div className="rounded mb-1" style={{ height: 6, width: 80, background: "rgba(255,255,255,0.2)" }} />
          <div className="rounded" style={{ height: 4, width: 60, background: "rgba(255,255,255,0.1)" }} />
        </div>
      </div>
      {/* Two smaller cards */}
      {[1, 2].map((i) => (
        <div key={i} className="rounded overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div style={{ height: "60%", background: "rgba(255,255,255,0.04)" }} />
          <div style={{ padding: "5px 6px" }}>
            <div className="rounded" style={{ height: 4, width: 40, background: "rgba(255,255,255,0.15)" }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Analytics dashboard crop — for Results section
export const AnalyticsCrop: React.FC = () => (
  <div
    className="relative w-full overflow-hidden rounded-2xl"
    style={{ background: "#060610", border: "1px solid rgba(255,255,255,0.07)", padding: "20px 24px" }}
  >
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <div className="rounded" style={{ height: 5, width: 50, background: "rgba(255,255,255,0.18)" }} />
      </div>
      <div className="rounded-full" style={{ height: 14, width: 60, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }} />
    </div>
    {/* Big KPI */}
    <div className="mb-4">
      <div className="rounded mb-1" style={{ height: 6, width: 70, background: "rgba(255,255,255,0.1)" }} />
      <div className="font-display font-bold" style={{ fontSize: 36, color: "rgba(250,250,250,0.92)", letterSpacing: "-0.04em", lineHeight: 1 }}>$48,230</div>
      <div style={{ fontSize: 10, color: "rgba(52,211,153,0.8)", marginTop: 4, fontWeight: 600 }}>↑ 24% month over month</div>
    </div>
    {/* Sparkline chart */}
    <div className="mb-4 rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
      <svg width="100%" height="64" viewBox="0 0 400 64" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(99,102,241,0.5)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </linearGradient>
        </defs>
        <path d="M0 50 C40 46 80 38 120 28 C160 18 200 22 240 14 C280 6 320 10 360 4 L400 3 L400 64 L0 64 Z" fill="url(#cg2)" />
        <path d="M0 50 C40 46 80 38 120 28 C160 18 200 22 240 14 C280 6 320 10 360 4 L400 3" fill="none" stroke="rgba(129,140,248,0.9)" strokeWidth="1.5" />
        <circle cx="400" cy="3" r="3" fill="rgba(129,140,248,1)" />
      </svg>
    </div>
    {/* Mini metric row */}
    <div className="grid grid-cols-3 gap-3">
      {[
        { label: "Conv. Rate", value: "+81%", color: "rgba(52,211,153,0.85)" },
        { label: "Visitors",   value: "14.2k", color: "rgba(250,250,250,0.8)" },
        { label: "Avg LCP",    value: "0.9s",  color: "rgba(250,250,250,0.8)" },
      ].map((m) => (
        <div key={m.label} className="rounded-lg" style={{ padding: "10px 12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="rounded mb-1.5" style={{ height: 4, width: 36, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ fontSize: 16, fontWeight: 800, color: m.color, fontFamily: "Space Grotesk", letterSpacing: "-0.03em" }}>{m.value}</div>
        </div>
      ))}
    </div>
  </div>
);
