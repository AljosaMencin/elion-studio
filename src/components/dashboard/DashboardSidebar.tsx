import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// ── Sidebar groups ──────────────────────────────────────────────────────────

type NavItemDef = {
  to: string;
  label: string;
  icon: React.ReactNode;
};

type NavGroupDef = {
  label: string | null;
  items: NavItemDef[];
};

const Icon = {
  grid: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  calendar: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="17" rx="2.5" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="5" />
      <line x1="16" y1="2" x2="16" y2="5" />
    </svg>
  ),
  user: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </svg>
  ),
  team: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
      <path d="M21 19a3.5 3.5 0 0 0-3-3.46" />
    </svg>
  ),
  cart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4h2.2l2 12.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.4 8H7" />
      <circle cx="9.5" cy="20.5" r="1.4" />
      <circle cx="17" cy="20.5" r="1.4" />
    </svg>
  ),
  pin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" />
      <circle cx="12" cy="9" r="2.6" />
    </svg>
  ),
  bars: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="20" x2="6" y2="13" />
      <line x1="12" y1="20" x2="12" y2="9" />
      <line x1="18" y1="20" x2="18" y2="5" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  ),
  doc: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="16" y2="13" />
      <line x1="9" y1="17" x2="14" y2="17" />
    </svg>
  ),
  bulb: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.2 11.1c.5.4.7 1 .7 1.6V17h5v-1.3c0-.6.2-1.2.7-1.6A6 6 0 0 0 12 3Z" />
    </svg>
  ),
  cog: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </svg>
  ),
  logout: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
};

const NAV_GROUPS: NavGroupDef[] = [
  {
    label: null,
    items: [
      { to: "/dashboard", label: "Dashboard", icon: Icon.grid },
      { to: "/dashboard/schedule", label: "Schedule", icon: Icon.calendar },
      { to: "/dashboard/customers", label: "Customers", icon: Icon.user },
    ],
  },
  {
    label: "Operations",
    items: [
      { to: "/dashboard/team", label: "Team", icon: Icon.team },
      { to: "/dashboard/checkout", label: "Checkout", icon: Icon.cart },
      { to: "/dashboard/locations", label: "Locations", icon: Icon.pin },
    ],
  },
  {
    label: "Performance",
    items: [
      { to: "/dashboard/analytics", label: "Analytics", icon: Icon.bars },
      { to: "/dashboard/reports", label: "Reports", icon: Icon.doc },
    ],
  },
  {
    label: "Growth",
    items: [{ to: "/dashboard/insights", label: "Insights", icon: Icon.bulb }],
  },
  {
    label: "System",
    items: [{ to: "/dashboard/settings", label: "Settings", icon: Icon.cog }],
  },
];

// ── Component ───────────────────────────────────────────────────────────────

export const DashboardSidebar: React.FC<{
  onNavigate?: () => void;
}> = ({ onNavigate }) => {
  const navigate = useNavigate();

  return (
    <nav
      className="flex h-full flex-col"
      style={{ backgroundColor: "var(--d-bg-soft)" }}
    >
      {/* Brand */}
      <div
        className="flex items-center gap-3 px-4 pb-5 pt-5"
        style={{ borderBottom: "1px solid var(--d-border)" }}
      >
        <img
          src={`${import.meta.env.BASE_URL}Text 2.v1.png`}
          alt="Elion"
          className="h-24 w-auto -my-4"
          style={{
            filter:
              "var(--d-logo-filter, brightness(0) invert(1))",
            opacity: 0.95,
          }}
        />
      </div>

      {/* Nav groups */}
      <div className="flex flex-1 flex-col gap-7 overflow-y-auto px-4 py-6">
        {NAV_GROUPS.map((group, gi) => (
          <div key={gi} className="flex flex-col gap-1">
            {group.label && (
              <div
                className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{ color: "var(--d-text-faint)" }}
              >
                {group.label}
              </div>
            )}
            {group.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/dashboard"}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors duration-200 ${
                    isActive ? "is-active" : "is-idle"
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: "var(--d-accent-soft)",
                        color: "var(--d-text)",
                        boxShadow:
                          "inset 0 0 0 1px var(--d-accent), 0 0 24px -10px var(--d-accent)",
                      }
                    : { color: "var(--d-text-soft)" }
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-lg"
                      style={{
                        color: isActive ? "var(--d-accent)" : "var(--d-text-muted)",
                      }}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </div>

      {/* Profile / logout */}
      <div
        className="flex flex-col gap-3 px-4 py-5"
        style={{ borderTop: "1px solid var(--d-border)" }}
      >
        <div
          className="flex items-center gap-3 rounded-xl px-3 py-2.5"
          style={{ backgroundColor: "var(--d-surface-alt)" }}
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold"
            style={{
              background:
                "linear-gradient(135deg, var(--d-accent), rgba(139,92,246,0.6))",
              color: "rgba(15,15,30,0.9)",
            }}
          >
            JN
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-[13px] font-semibold" style={{ color: "var(--d-text)" }}>
              Janez Novak
            </span>
            <span
              className="text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "var(--d-text-muted)" }}
            >
              Owner
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-[12px] font-semibold transition-colors duration-200"
          style={{
            border: "1px solid var(--d-border)",
            color: "var(--d-text-soft)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--d-border-hi)";
            e.currentTarget.style.color = "var(--d-text)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--d-border)";
            e.currentTarget.style.color = "var(--d-text-soft)";
          }}
        >
          {Icon.logout}
          Log out
        </button>
      </div>
    </nav>
  );
};

export default DashboardSidebar;
