import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GetInTouchProvider } from "@/components/elion/GetInTouchDrawer";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Login from "./pages/Login.tsx";
import DashboardLayout from "./pages/DashboardLayout.tsx";
import DashboardOverview from "./pages/dashboard/DashboardOverview.tsx";
import DashboardPlaceholder from "./pages/dashboard/DashboardPlaceholder.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

// ── Placeholder content per dashboard sub-route ─────────────────────────────

const placeholderProps = {
  schedule: {
    title: "Schedule",
    description:
      "Manage reservations, calendar, table and slot availability, and incoming orders.",
    bullets: ["Calendar & reservations", "Orders overview", "Availability management"],
  },
  customers: {
    title: "Customers",
    description:
      "View and manage customer profiles, history, ratings and preferences.",
    bullets: ["Customer profiles", "Visit & order history", "Ratings & notes"],
  },
  team: {
    title: "Team",
    description:
      "Manage employees, access permissions, hours worked and payroll information.",
    bullets: ["Employee management", "Hours tracking", "Payroll overview"],
  },
  checkout: {
    title: "Checkout",
    description:
      "Create invoices, manage sales, payments and daily revenue in one place.",
    bullets: ["Invoices & receipts", "Sales & products", "Payment overview"],
  },
  locations: {
    title: "Locations",
    description:
      "Manage multiple locations, branches and location-specific settings.",
    bullets: ["Location list", "Location settings", "Performance per location"],
  },
  analytics: {
    title: "Analytics",
    description:
      "Track website performance, traffic, conversions and key business metrics.",
    bullets: ["Website KPIs", "Traffic & conversions", "Performance charts"],
  },
  reports: {
    title: "Reports",
    description:
      "Detailed reports about bookings, customers, cancellations and business performance.",
    bullets: ["Booking reports", "Customer reports", "Cancellations & stats"],
  },
  insights: {
    title: "Insights",
    description:
      "AI-powered insights and growth ideas to help you improve and grow faster.",
    bullets: ["Recommendations", "Growth ideas", "Opportunities"],
  },
  settings: {
    title: "Settings",
    description:
      "Configure your business, system preferences, notifications and integrations.",
    bullets: ["Business settings", "Notifications", "Integrations"],
  },
} as const;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <GetInTouchProvider>
        <Routes>
          {/* Public site */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard (post-login) */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route
              path="schedule"
              element={<DashboardPlaceholder {...placeholderProps.schedule} />}
            />
            <Route
              path="customers"
              element={<DashboardPlaceholder {...placeholderProps.customers} />}
            />
            <Route
              path="team"
              element={<DashboardPlaceholder {...placeholderProps.team} />}
            />
            <Route
              path="checkout"
              element={<DashboardPlaceholder {...placeholderProps.checkout} />}
            />
            <Route
              path="locations"
              element={<DashboardPlaceholder {...placeholderProps.locations} />}
            />
            <Route
              path="analytics"
              element={<DashboardPlaceholder {...placeholderProps.analytics} />}
            />
            <Route
              path="reports"
              element={<DashboardPlaceholder {...placeholderProps.reports} />}
            />
            <Route
              path="insights"
              element={<DashboardPlaceholder {...placeholderProps.insights} />}
            />
            <Route
              path="settings"
              element={<DashboardPlaceholder {...placeholderProps.settings} />}
            />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </GetInTouchProvider>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
