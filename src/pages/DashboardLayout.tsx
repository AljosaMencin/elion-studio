import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  DashboardThemeProvider,
  useDashboardTheme,
} from "@/components/dashboard/DashboardThemeProvider";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";

// ── Page metadata per route ─────────────────────────────────────────────────

const PAGE_META: Record<
  string,
  { title: string; subtitle: string }
> = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Overview of your business at a glance.",
  },
  "/dashboard/schedule": {
    title: "Schedule",
    subtitle: "Reservations, availability and bookings.",
  },
  "/dashboard/customers": {
    title: "Customers",
    subtitle: "Profiles, history and ratings.",
  },
  "/dashboard/team": {
    title: "Team",
    subtitle: "Employees, access and payroll.",
  },
  "/dashboard/checkout": {
    title: "Checkout",
    subtitle: "Invoices, sales and daily revenue.",
  },
  "/dashboard/locations": {
    title: "Locations",
    subtitle: "Branches and location-specific settings.",
  },
  "/dashboard/analytics": {
    title: "Analytics",
    subtitle: "Traffic, conversions and key metrics.",
  },
  "/dashboard/reports": {
    title: "Reports",
    subtitle: "Detailed business performance reports.",
  },
  "/dashboard/insights": {
    title: "Insights",
    subtitle: "Growth ideas and AI-assisted recommendations.",
  },
  "/dashboard/settings": {
    title: "Settings",
    subtitle: "Business preferences, notifications and integrations.",
  },
};

const Shell: React.FC = () => {
  const { theme } = useDashboardTheme();
  const location = useLocation();
  const meta =
    PAGE_META[location.pathname] ?? {
      title: "Dashboard",
      subtitle: "",
    };

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  // Close mobile nav whenever we navigate to a new page
  React.useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  // Lock body scroll while mobile nav is open
  React.useEffect(() => {
    if (mobileNavOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileNavOpen]);

  return (
    <div
      data-dashboard-theme={theme}
      className="dashboard-shell relative flex min-h-screen w-full"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ backgroundImage: "var(--d-glow)" }}
      />

      {/* Desktop sidebar */}
      <aside
        className="sticky top-0 hidden h-screen w-[260px] flex-shrink-0 lg:block"
        style={{ borderRight: "1px solid var(--d-border)", zIndex: 20 }}
      >
        <DashboardSidebar />
      </aside>

      {/* Mobile sidebar (drawer) */}
      {mobileNavOpen && (
        <>
          <div
            className="fixed inset-0 z-40 lg:hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
            onClick={() => setMobileNavOpen(false)}
          />
          <aside
            className="fixed left-0 top-0 z-50 h-screen w-[260px] lg:hidden"
            style={{
              borderRight: "1px solid var(--d-border)",
              animation: "menu-in 0.22s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            <DashboardSidebar onNavigate={() => setMobileNavOpen(false)} />
          </aside>
        </>
      )}

      {/* Main column */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <DashboardTopBar
          title={meta.title}
          subtitle={meta.subtitle}
          onMobileMenu={() => setMobileNavOpen(true)}
        />
        <main className="flex-1 px-5 py-6 md:px-8 md:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const DashboardLayout: React.FC = () => (
  <DashboardThemeProvider>
    <Shell />
  </DashboardThemeProvider>
);

export default DashboardLayout;
