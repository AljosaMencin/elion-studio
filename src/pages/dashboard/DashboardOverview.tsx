import React from "react";

// ── Helpers ─────────────────────────────────────────────────────────────────

const PlaceholderTag: React.FC = () => (
  <span
    className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.22em]"
    style={{
      backgroundColor: "var(--d-accent-soft)",
      color: "var(--d-accent)",
      border: "1px solid var(--d-accent)",
    }}
  >
    <span
      className="h-1 w-1 rounded-full"
      style={{ backgroundColor: "var(--d-accent)" }}
    />
    Placeholder
  </span>
);

const Card: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ className = "", style, children }) => (
  <div
    className={`rounded-2xl ${className}`}
    style={{
      backgroundColor: "var(--d-surface)",
      border: "1px solid var(--d-border)",
      boxShadow: "var(--d-shadow)",
      ...style,
    }}
  >
    {children}
  </div>
);

// ── KPI tile ────────────────────────────────────────────────────────────────

const KpiTile: React.FC<{
  label: string;
  value: string;
  delta: string;
  icon: React.ReactNode;
}> = ({ label, value, delta, icon }) => (
  <Card className="flex flex-col gap-3 p-5">
    <div className="flex items-start justify-between">
      <span
        className="text-[10px] font-bold uppercase tracking-[0.22em]"
        style={{ color: "var(--d-text-muted)" }}
      >
        {label}
      </span>
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg"
        style={{
          backgroundColor: "var(--d-accent-bg)",
          color: "var(--d-accent)",
        }}
      >
        {icon}
      </span>
    </div>
    <div
      className="font-display text-3xl font-bold tracking-tight md:text-4xl"
      style={{
        color: "var(--d-text)",
        fontFamily: "Space Grotesk, Inter, sans-serif",
        letterSpacing: "-0.025em",
      }}
    >
      {value}
    </div>
    <div className="flex items-center gap-2">
      <span
        className="rounded-full px-2 py-0.5 text-[10px] font-bold"
        style={{
          color: "var(--d-positive)",
          backgroundColor: "rgba(52,211,153,0.12)",
          border: "1px solid rgba(52,211,153,0.25)",
        }}
      >
        ↑ {delta}
      </span>
      <span
        className="text-[10px] font-medium"
        style={{ color: "var(--d-text-muted)" }}
      >
        vs. last month
      </span>
    </div>
    {/* Sparkline */}
    <svg
      className="mt-1"
      viewBox="0 0 200 40"
      preserveAspectRatio="none"
      style={{ width: "100%", height: 36 }}
    >
      <defs>
        <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--d-accent)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--d-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 28 L25 22 L50 24 L75 18 L100 20 L125 14 L150 16 L175 9 L200 6 L200 40 L0 40 Z"
        fill={`url(#spark-${label})`}
      />
      <path
        d="M0 28 L25 22 L50 24 L75 18 L100 20 L125 14 L150 16 L175 9 L200 6"
        fill="none"
        stroke="var(--d-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Card>
);

const KPI_ICONS = {
  revenue: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  bookings: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
    </svg>
  ),
  customers: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
    </svg>
  ),
  occupancy: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 9 9h-9z" fill="currentColor" />
    </svg>
  ),
};

// ── Chart placeholder (revenue over time) ───────────────────────────────────

const RevenueChart: React.FC = () => (
  <Card className="flex flex-col gap-5 p-6">
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h2
          className="text-[18px] font-bold"
          style={{
            color: "var(--d-text)",
            fontFamily: "Space Grotesk, Inter, sans-serif",
          }}
        >
          Revenue over time
        </h2>
        <span
          className="text-[12px] font-medium"
          style={{ color: "var(--d-text-muted)" }}
        >
          Last 30 days · all locations
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        {["7D", "30D", "90D", "1Y"].map((p, i) => (
          <button
            key={p}
            type="button"
            className="rounded-full px-3 py-1.5 text-[11px] font-bold transition-colors"
            style={
              i === 1
                ? {
                    backgroundColor: "var(--d-accent-soft)",
                    color: "var(--d-accent)",
                    border: "1px solid var(--d-accent)",
                  }
                : {
                    color: "var(--d-text-muted)",
                    border: "1px solid var(--d-border)",
                  }
            }
          >
            {p}
          </button>
        ))}
      </div>
    </div>

    {/* Chart */}
    <div className="relative" style={{ height: 240 }}>
      <svg
        viewBox="0 0 600 240"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="rev-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--d-accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--d-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Y grid lines */}
        {[40, 95, 150, 205].map((y) => (
          <line
            key={y}
            x1="0"
            x2="600"
            y1={y}
            y2={y}
            stroke="var(--d-border)"
            strokeDasharray="2 5"
          />
        ))}
        {/* Path */}
        <path
          d="M0 180 C40 170 80 160 120 130 C160 100 200 145 240 110 C280 75 320 95 360 60 C400 30 440 80 480 50 C520 25 560 55 600 30 L600 240 L0 240 Z"
          fill="url(#rev-fill)"
        />
        <path
          d="M0 180 C40 170 80 160 120 130 C160 100 200 145 240 110 C280 75 320 95 360 60 C400 30 440 80 480 50 C520 25 560 55 600 30"
          fill="none"
          stroke="var(--d-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Highlighted point */}
        <circle cx="360" cy="60" r="5" fill="var(--d-accent)" />
        <circle
          cx="360"
          cy="60"
          r="11"
          fill="var(--d-accent)"
          opacity="0.18"
        />
      </svg>
    </div>

    <div className="flex items-center gap-2">
      <PlaceholderTag />
      <span
        className="text-[11px] font-medium"
        style={{ color: "var(--d-text-muted)" }}
      >
        Sample data — live revenue chart will replace this.
      </span>
    </div>
  </Card>
);

// ── Insights panel (3 cards) ────────────────────────────────────────────────

const Insights: React.FC = () => {
  const items = [
    {
      tag: "Trend",
      title: "Bookings up 12% this week",
      body: "Friday peak hours are driving growth. Consider extending evening availability.",
      tone: "positive",
    },
    {
      tag: "Optimize",
      title: "Friday slots underused",
      body: "Average occupancy is 62% on Fridays. Promotional push recommended.",
      tone: "neutral",
    },
    {
      tag: "Retention",
      title: "Top customer dormant",
      body: "Marko K. hasn't booked in 45 days. Send a tailored offer to re-engage.",
      tone: "warning",
    },
  ];

  return (
    <Card className="flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between">
        <h2
          className="text-[16px] font-bold"
          style={{
            color: "var(--d-text)",
            fontFamily: "Space Grotesk, Inter, sans-serif",
          }}
        >
          Insights
        </h2>
        <button
          type="button"
          className="text-[11px] font-bold uppercase tracking-[0.18em] transition-colors"
          style={{ color: "var(--d-text-muted)" }}
        >
          View all
        </button>
      </div>

      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 rounded-xl p-4"
          style={{
            backgroundColor: "var(--d-surface-alt)",
            border: "1px solid var(--d-border)",
          }}
        >
          <span
            className="self-start rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.22em]"
            style={{
              backgroundColor: "var(--d-accent-soft)",
              color: "var(--d-accent)",
              border: "1px solid var(--d-accent)",
            }}
          >
            {item.tag}
          </span>
          <p
            className="text-[13px] font-semibold"
            style={{ color: "var(--d-text)" }}
          >
            {item.title}
          </p>
          <p
            className="text-[12px] font-medium leading-relaxed"
            style={{ color: "var(--d-text-muted)" }}
          >
            {item.body}
          </p>
        </div>
      ))}
    </Card>
  );
};

// ── Today's reservations (table-style placeholder) ──────────────────────────

const TodaysReservations: React.FC = () => {
  const rows = [
    { time: "12:00", name: "Martina Horvat", detail: "Table 5 · 2 people", status: "Confirmed" },
    { time: "13:30", name: "Luka Petrič", detail: "Table 8 · 4 people", status: "Confirmed" },
    { time: "16:00", name: "Eva Novak", detail: "Table 2 · 2 people", status: "Pending" },
    { time: "19:00", name: "Ana Kovač", detail: "Table 3 · 3 people", status: "Pending" },
  ];
  return (
    <Card className="flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between">
        <h2
          className="text-[16px] font-bold"
          style={{
            color: "var(--d-text)",
            fontFamily: "Space Grotesk, Inter, sans-serif",
          }}
        >
          Today's reservations
        </h2>
        <button
          type="button"
          className="text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "var(--d-text-muted)" }}
        >
          View calendar →
        </button>
      </div>

      <div className="flex flex-col">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex items-center gap-4 py-3"
            style={{
              borderTop: i === 0 ? "none" : "1px solid var(--d-border)",
            }}
          >
            <span
              className="font-display text-[13px] font-bold"
              style={{
                color: "var(--d-text)",
                fontFamily: "Space Grotesk, Inter, sans-serif",
                width: 56,
              }}
            >
              {row.time}
            </span>
            <div className="flex flex-1 flex-col">
              <span
                className="text-[13px] font-semibold"
                style={{ color: "var(--d-text)" }}
              >
                {row.name}
              </span>
              <span
                className="text-[11px] font-medium"
                style={{ color: "var(--d-text-muted)" }}
              >
                {row.detail}
              </span>
            </div>
            <span
              className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
              style={
                row.status === "Confirmed"
                  ? {
                      color: "var(--d-positive)",
                      backgroundColor: "rgba(52,211,153,0.12)",
                      border: "1px solid rgba(52,211,153,0.25)",
                    }
                  : {
                      color: "var(--d-text-muted)",
                      backgroundColor: "var(--d-surface-alt)",
                      border: "1px solid var(--d-border)",
                    }
              }
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ── Quick actions ───────────────────────────────────────────────────────────

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: "New reservation",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="12" y1="13" x2="12" y2="17" />
          <line x1="10" y1="15" x2="14" y2="15" />
        </svg>
      ),
    },
    {
      title: "Add customer",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="8" r="3.5" />
          <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
          <line x1="18" y1="6" x2="22" y2="6" />
          <line x1="20" y1="4" x2="20" y2="8" />
        </svg>
      ),
    },
  ];

  return (
    <Card className="flex flex-col gap-4 p-5">
      <h2
        className="text-[16px] font-bold"
        style={{
          color: "var(--d-text)",
          fontFamily: "Space Grotesk, Inter, sans-serif",
        }}
      >
        Quick actions
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((a, i) => (
          <button
            key={i}
            type="button"
            className="flex flex-col items-start gap-3 rounded-xl p-4 text-left transition-all"
            style={{
              backgroundColor: "var(--d-surface-alt)",
              border: "1px solid var(--d-border)",
              color: "var(--d-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--d-accent)";
              e.currentTarget.style.boxShadow =
                "0 0 24px -10px var(--d-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--d-border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{
                backgroundColor: "var(--d-accent-bg)",
                color: "var(--d-accent)",
              }}
            >
              {a.icon}
            </span>
            <span className="text-[13px] font-semibold">{a.title}</span>
          </button>
        ))}
      </div>
    </Card>
  );
};

// ── Page ────────────────────────────────────────────────────────────────────

const DashboardOverview: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Goal banner */}
      <div
        className="flex items-center gap-4 rounded-2xl p-5"
        style={{
          background:
            "linear-gradient(135deg, var(--d-accent-soft), transparent 80%)",
          border: "1px solid var(--d-accent)",
        }}
      >
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
          style={{
            backgroundColor: "var(--d-accent-bg)",
            color: "var(--d-accent)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--d-accent)" }}
          >
            Our goal
          </span>
          <p className="text-[13px] font-medium leading-snug md:text-[14px]" style={{ color: "var(--d-text-soft)" }}>
            Give business owners a complete system to run, track and grow their
            business.
          </p>
        </div>
        <div className="ml-auto hidden md:block">
          <PlaceholderTag />
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiTile label="Revenue" value="€12,430" delta="12.5%" icon={KPI_ICONS.revenue} />
        <KpiTile label="Reservations" value="256" delta="8.1%" icon={KPI_ICONS.bookings} />
        <KpiTile label="Customers" value="184" delta="5.7%" icon={KPI_ICONS.customers} />
        <KpiTile label="Occupancy" value="78%" delta="6.3%" icon={KPI_ICONS.occupancy} />
      </div>

      {/* Main grid: chart left, insights right */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
        <RevenueChart />
        <Insights />
      </div>

      {/* Reservations + quick actions */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
        <TodaysReservations />
        <QuickActions />
      </div>
    </div>
  );
};

export default DashboardOverview;
