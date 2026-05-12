import { useState, useRef, useEffect } from "react";
import { useGetInTouch } from "./GetInTouchDrawer";

// ── Service cards data ─────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "websites",
    label: "Websites",
    description: "High-converting sites built for speed and search.",
    href: "#/services",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/15 text-violet-300 border-violet-400/20",
  },
  {
    id: "bookings",
    label: "Bookings",
    description: "Online scheduling and reminders that fill your calendar.",
    href: "#/services",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    accent: "from-indigo-500/20 to-indigo-500/5",
    iconBg: "bg-indigo-500/15 text-indigo-300 border-indigo-400/20",
  },
  {
    id: "strategies",
    label: "Strategies",
    description: "Data-driven marketing that brings more traffic and conversions.",
    href: "#/services",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    accent: "from-sky-500/20 to-sky-500/5",
    iconBg: "bg-sky-500/15 text-sky-300 border-sky-400/20",
  },
];

// ── Services dropdown panel ───────────────────────────────────────────────────

const ServicesPanel = () => (
  <div className="animate-menu-in">
    <div className="mx-auto max-w-[1440px] px-8 py-7">
      <div className="grid grid-cols-3 gap-4">
        {SERVICES.map((s) => (
          <a
            key={s.id}
            href={s.href}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br ${s.accent} p-6 transition-all duration-300 hover:border-white/[0.14] hover:scale-[1.02]`}
          >
            <div className={`mb-4 inline-flex items-center justify-center rounded-xl border p-3 ${s.iconBg}`}>
              {s.icon}
            </div>
            <div className="font-display text-[17px] font-bold tracking-tight text-bone">
              {s.label}
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-bone/55">
              {s.description}
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-bone/40 transition-colors group-hover:text-bone/70">
              Learn more
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/[0.05] pt-5">
        <p className="text-[13px] text-bone/35">
          Not sure where to start?
        </p>
        <a
          href="#/services"
          className="text-[13px] font-semibold text-bone/50 transition-colors hover:text-bone"
        >
          View all services →
        </a>
      </div>
    </div>
  </div>
);

// ── Mobile menu ───────────────────────────────────────────────────────────────

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const { open: openContact } = useGetInTouch();

  return (
    <div className="animate-mobile-in fixed inset-0 z-[60] flex flex-col bg-[#050505]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
        <img
          src={`${import.meta.env.BASE_URL}Text 2.v1.png`}
          alt="Elion"
          className="h-12 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-bone/50 transition-colors hover:text-bone"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div className="flex-1 overflow-y-auto py-2">
        <a
          href="#/"
          onClick={onClose}
          className="flex items-center border-b border-white/[0.06] px-6 py-4 text-[15px] font-semibold text-bone/70 transition-colors hover:text-bone"
        >
          Home
        </a>

        <div className="border-b border-white/[0.06]">
          <button
            onClick={() => setServicesOpen((v) => !v)}
            className="flex w-full items-center justify-between px-6 py-4 text-[15px] font-semibold text-bone/70 transition-colors hover:text-bone"
          >
            Services
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="flex flex-col gap-3 bg-white/[0.02] px-6 pb-5">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  onClick={onClose}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.1]"
                >
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border ${s.iconBg}`}>
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-bone">{s.label}</div>
                    <div className="text-[12px] text-bone/45">{s.description}</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        <a
          href="#/about"
          onClick={onClose}
          className="flex items-center border-b border-white/[0.06] px-6 py-4 text-[15px] font-semibold text-bone/70 transition-colors hover:text-bone"
        >
          About us
        </a>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] px-6 py-6">
        <a
          href="#/login"
          onClick={onClose}
          className="mb-3 flex w-full items-center justify-center gap-3 rounded-full border border-bone/20 bg-white/[0.02] py-3.5 text-sm font-bold text-bone/80 transition-colors hover:border-bone/40 hover:bg-white/[0.05] hover:text-bone"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          My Dashboard
        </a>
        <button
          type="button"
          onClick={() => { onClose(); openContact(); }}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-bone py-3.5 text-sm font-bold text-obsidian"
        >
          Get in touch →
        </button>
      </div>
    </div>
  );
};

// ── Main Nav ──────────────────────────────────────────────────────────────────

const Nav = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { open: openContact } = useGetInTouch();

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setServicesOpen(false); setMobileOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || servicesOpen
            ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
        onMouseLeave={scheduleClose}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-2 md:px-6 md:py-2">
          {/* Logo */}
          <a href="#/" className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}Text 2.v1.png`}
              alt="Elion"
              className="h-24 w-auto transition-opacity hover:opacity-100 md:h-28"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            <a
              href="#/services"
              onMouseEnter={openServices}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-[15px] font-medium transition-colors duration-200 ${
                servicesOpen ? "bg-white/6 text-bone" : "text-bone/60 hover:text-bone"
              }`}
            >
              Services
              <svg
                width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>

            <a
              href="#/about"
              onMouseEnter={scheduleClose}
              className="rounded-full px-5 py-3 text-[15px] font-medium text-bone/60 transition-colors hover:text-bone"
            >
              About us
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="#/login"
              className="hidden items-center gap-2.5 rounded-full border border-bone/15 bg-white/[0.02] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-bone/70 transition-all duration-300 hover:border-bone/35 hover:bg-white/[0.05] hover:text-bone lg:flex"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
              Dashboard
            </a>
            <button
              onClick={() => { setServicesOpen(false); openContact(); }}
              className="hidden rounded-full border border-bone/20 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-bone transition-all duration-300 hover:border-bone hover:bg-bone hover:text-obsidian lg:flex items-center gap-2"
            >
              Get in touch
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 lg:hidden"
              aria-label="Open menu"
            >
              <span className="h-px w-5 bg-bone/70" />
              <span className="h-px w-5 bg-bone/70" />
              <span className="h-px w-3 bg-bone/70" />
            </button>
          </div>
        </nav>

        {/* Services dropdown */}
        {servicesOpen && (
          <div
            className="border-t border-white/[0.04] bg-[#050505]/97 backdrop-blur-xl"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <ServicesPanel />
          </div>
        )}
      </header>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
};

export default Nav;
