import React from "react";
import { useNavigate } from "react-router-dom";
import { useDashboardTheme } from "@/components/dashboard/DashboardThemeProvider";

interface DashboardTopBarProps {
  title: string;
  subtitle?: string;
  onMobileMenu: () => void;
}

const SunIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

const BellIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const HamburgerIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="14" y2="18" />
  </svg>
);

const HomeIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const DashboardTopBar: React.FC<DashboardTopBarProps> = ({
  title,
  subtitle,
  onMobileMenu,
}) => {
  const { theme, toggleTheme } = useDashboardTheme();
  const navigate = useNavigate();

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between gap-4 px-5 py-4 md:px-8 md:py-5"
      style={{
        backgroundColor: "var(--d-bg)",
        borderBottom: "1px solid var(--d-border)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Left: hamburger (mobile) + title */}
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMobileMenu}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl lg:hidden"
          style={{
            border: "1px solid var(--d-border)",
            color: "var(--d-text-soft)",
            backgroundColor: "var(--d-surface)",
          }}
          aria-label="Open navigation"
        >
          <HamburgerIcon />
        </button>

        <div className="flex min-w-0 flex-col">
          <h1
            className="truncate text-[20px] font-bold tracking-tight md:text-[24px]"
            style={{
              color: "var(--d-text)",
              fontFamily: "Space Grotesk, Inter, sans-serif",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="truncate text-[12px] font-medium md:text-[13px]"
              style={{ color: "var(--d-text-muted)" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Right: theme toggle, notifications, user */}
      <div className="flex flex-shrink-0 items-center gap-2 md:gap-3">
        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="relative flex h-10 items-center gap-1 rounded-full p-1 transition-colors"
          style={{
            backgroundColor: "var(--d-surface)",
            border: "1px solid var(--d-border)",
            width: 78,
          }}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {/* Slider */}
          <span
            aria-hidden
            className="absolute top-1 h-8 w-8 rounded-full transition-transform duration-300 ease-out"
            style={{
              left: 4,
              backgroundColor: "var(--d-accent-bg)",
              border: "1px solid var(--d-accent)",
              boxShadow: "0 0 16px -2px var(--d-accent)",
              transform:
                theme === "dark" ? "translateX(38px)" : "translateX(0px)",
            }}
          />
          {/* Icons */}
          <span
            className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full"
            style={{
              color:
                theme === "light" ? "var(--d-accent)" : "var(--d-text-muted)",
            }}
          >
            <SunIcon />
          </span>
          <span
            className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full"
            style={{
              color:
                theme === "dark" ? "var(--d-accent)" : "var(--d-text-muted)",
            }}
          >
            <MoonIcon />
          </span>
        </button>

        {/* Notification bell */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
          style={{
            backgroundColor: "var(--d-surface)",
            border: "1px solid var(--d-border)",
            color: "var(--d-text-soft)",
          }}
          aria-label="Notifications"
        >
          <BellIcon />
          <span
            aria-hidden
            className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full"
            style={{
              backgroundColor: "var(--d-accent)",
              boxShadow: "0 0 8px var(--d-accent)",
            }}
          />
        </button>

        {/* User chip */}
        <div
          className="hidden items-center gap-3 rounded-xl px-3 py-2 md:flex"
          style={{
            backgroundColor: "var(--d-surface)",
            border: "1px solid var(--d-border)",
          }}
        >
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold"
            style={{
              background:
                "linear-gradient(135deg, var(--d-accent), rgba(139,92,246,0.6))",
              color: "rgba(15,15,30,0.9)",
            }}
          >
            JN
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[12px] font-semibold" style={{ color: "var(--d-text)" }}>
              Janez Novak
            </span>
            <span
              className="text-[9px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--d-text-muted)" }}
            >
              Owner
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardTopBar;
