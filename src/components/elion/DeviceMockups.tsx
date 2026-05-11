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

// Realistic iPhone frame with mobile dashboard inside — for the hero
export const PhoneDashboard: React.FC = () => (
  <div className="relative h-full w-full">
    {/* Outer iPhone body — light silver metallic frame */}
    <div
      className="relative h-full w-full"
      style={{
        background:
          "linear-gradient(135deg, #f5f5f7 0%, #d8d8dc 35%, #c4c4c9 55%, #e8e8ec 100%)",
        borderRadius: "14%",
        padding: "2.8%",
        boxShadow:
          "0 60px 120px -30px rgba(0,0,0,0.6), 0 30px 60px -20px rgba(99,102,241,0.2), 0 0 0 1px rgba(255,255,255,0.4) inset",
      }}
    >
      {/* Silver side buttons — left side */}
      <div
        className="absolute"
        style={{
          left: "-1.8%",
          top: "16%",
          width: "1.8%",
          height: "5%",
          background: "linear-gradient(90deg, #b8b8bd, #e5e5e9)",
          borderRadius: "2px 0 0 2px",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      />
      <div
        className="absolute"
        style={{
          left: "-1.8%",
          top: "26%",
          width: "1.8%",
          height: "9%",
          background: "linear-gradient(90deg, #b8b8bd, #e5e5e9)",
          borderRadius: "2px 0 0 2px",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      />
      <div
        className="absolute"
        style={{
          left: "-1.8%",
          top: "38%",
          width: "1.8%",
          height: "9%",
          background: "linear-gradient(90deg, #b8b8bd, #e5e5e9)",
          borderRadius: "2px 0 0 2px",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      />
      {/* Power button — right side */}
      <div
        className="absolute"
        style={{
          right: "-1.8%",
          top: "30%",
          width: "1.8%",
          height: "14%",
          background: "linear-gradient(270deg, #b8b8bd, #e5e5e9)",
          borderRadius: "0 2px 2px 0",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      />

      {/* Inner screen with thin dark bezel */}
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          background: "#06070d",
          borderRadius: "11.5%",
          boxShadow:
            "0 0 0 2px #0a0a0e, 0 0 0 3px rgba(255,255,255,0.15)",
        }}
      >
        {/* Notch — classic iPhone notch with speaker and camera */}
        <div
          className="absolute left-1/2 z-20 -translate-x-1/2 flex items-center justify-center gap-2"
          style={{
            top: 0,
            width: "44%",
            height: "3.4%",
            background: "#000",
            borderRadius: "0 0 18px 18px",
          }}
        >
          {/* Speaker grille */}
          <div
            style={{
              width: "32%",
              height: "18%",
              background: "rgba(40,40,48,0.95)",
              borderRadius: 999,
            }}
          />
          {/* Camera */}
          <div
            style={{
              width: "10%",
              aspectRatio: "1",
              background: "#0a0a14",
              borderRadius: 999,
              boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.3)",
            }}
          />
        </div>

        {/* Status bar */}
        <div
          className="absolute z-10 flex w-full items-center justify-between px-[8%]"
          style={{ top: "2.4%", height: "3.2%" }}
        >
          <span style={{ fontSize: "10px", color: "rgba(250,250,250,0.85)", fontWeight: 600 }}>
            9:41
          </span>
          <div className="flex items-center gap-1">
            <span style={{ width: 12, height: 8, background: "rgba(250,250,250,0.85)", borderRadius: 1.5, display: "inline-block" }} />
            <span style={{ width: 10, height: 8, background: "rgba(250,250,250,0.85)", borderRadius: 1.5, display: "inline-block" }} />
            <span style={{ width: 14, height: 8, background: "rgba(250,250,250,0.85)", borderRadius: 2, display: "inline-block" }} />
          </div>
        </div>

        {/* Screen content — dashboard */}
        <div
          className="absolute inset-x-0 flex flex-col gap-2"
          style={{ top: "8%", bottom: "5%", padding: "0 5%" }}
        >
          {/* Greeting header */}
          <div className="flex items-center justify-between" style={{ marginBottom: "2%" }}>
            <div className="flex flex-col gap-0.5">
              <span style={{ fontSize: 8, color: "rgba(250,250,250,0.45)", fontWeight: 600, letterSpacing: "0.08em" }}>
                DASHBOARD
              </span>
              <span style={{ fontSize: 13, color: "rgba(250,250,250,0.92)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Good morning
              </span>
            </div>
            <div
              className="rounded-full"
              style={{
                width: 22,
                height: 22,
                background: "linear-gradient(135deg, rgba(129,140,248,0.6), rgba(99,102,241,0.3))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>

          {/* KPI row — 2 cards */}
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { label: "Revenue", value: "$48k", delta: "+24%", positive: true },
              { label: "Visitors", value: "14.2k", delta: "+12%", positive: true },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-lg flex flex-col gap-0.5"
                style={{
                  padding: "6px 7px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ fontSize: 7, color: "rgba(255,255,255,0.45)", fontWeight: 600, letterSpacing: "0.1em" }}>
                  {k.label.toUpperCase()}
                </span>
                <span style={{ fontSize: 13, color: "rgba(250,250,250,0.95)", fontWeight: 800, letterSpacing: "-0.03em" }}>
                  {k.value}
                </span>
                <span style={{ fontSize: 7, color: "rgba(52,211,153,0.85)", fontWeight: 700 }}>
                  ↑ {k.delta}
                </span>
              </div>
            ))}
          </div>

          {/* Chart card */}
          <div
            className="flex-1 rounded-lg overflow-hidden flex flex-col"
            style={{
              padding: "6px 7px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                Sales · 7d
              </span>
              <span style={{ fontSize: 7, color: "rgba(129,140,248,0.85)", fontWeight: 700 }}>
                +18.4%
              </span>
            </div>
            <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" style={{ flex: 1 }}>
              <defs>
                <linearGradient id="phgrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(99,102,241,0.55)" />
                  <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                </linearGradient>
              </defs>
              <path
                d="M0 45 C20 42 35 32 55 28 C75 24 90 30 110 18 C130 8 150 14 170 8 L200 5 L200 60 L0 60 Z"
                fill="url(#phgrad)"
              />
              <path
                d="M0 45 C20 42 35 32 55 28 C75 24 90 30 110 18 C130 8 150 14 170 8 L200 5"
                fill="none"
                stroke="rgba(129,140,248,0.95)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="200" cy="5" r="2.2" fill="rgba(165,180,252,1)" />
            </svg>
          </div>

          {/* Activity list */}
          <div className="flex flex-col gap-1">
            {[
              { label: "New booking", value: "+$240" },
              { label: "Subscription renewed", value: "+$89" },
              { label: "Cart recovered", value: "+$156" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-md"
                style={{
                  padding: "5px 7px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      background: "rgba(129,140,248,0.85)",
                      borderRadius: 999,
                      boxShadow: "0 0 6px rgba(129,140,248,0.6)",
                    }}
                  />
                  <span style={{ fontSize: 8, color: "rgba(250,250,250,0.8)", fontWeight: 600 }}>
                    {row.label}
                  </span>
                </div>
                <span style={{ fontSize: 8, color: "rgba(52,211,153,0.85)", fontWeight: 700 }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: "1.4%",
            height: 3,
            width: "32%",
            background: "rgba(255,255,255,0.5)",
            borderRadius: 999,
          }}
        />
      </div>
    </div>
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
