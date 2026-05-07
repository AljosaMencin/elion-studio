import { useState, useRef, useEffect } from "react";
import { useGetInTouch } from "./GetInTouchDrawer";

// ── Data ─────────────────────────────────────────────────────────────────────

const SOLUTIONS_COLS = [
  {
    tag: "BUILD", title: "Websites",
    description: "High-converting websites that look great and perform exceptionally.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["Overview", "Web Design", "Development", "SEO & Performance", "Website Packages", "Add ons"],
  },
  {
    tag: "SYSTEMS", title: "SaaS & Tools",
    description: "Smart business automation tools that save time and scale with you.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    items: ["Overview", "KPI Dashboard", "Booking & Calendar", "Blog & Content System", "Automations", "Integrations", "Security & Hosting"],
  },
  {
    tag: "GROWTH", title: "Marketing",
    description: "Data-driven marketing strategies that bring more traffic and conversions.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    items: ["Overview", "Marketing Strategy", "SEO & Analytics", "Social Media Management", "Analytics & Reporting", "Growth Packages"],
  },
];

const CASE_STUDIES_ITEMS = ["All Case Studies", "By Industry", "By Solution", "Success Stories", "Results & KPIs"];

const PRICING_ITEMS = [
  { label: "Overview",       sub: null },
  { label: "Website",        sub: "One-time" },
  { label: "Shopify",        sub: "Monthly" },
  { label: "Growth",         sub: "Monthly" },
  { label: "Compare Plans",  sub: null },
  { label: "3D Packages",    sub: null },
  { label: "FAQ",            sub: null },
  { label: "Custom",         sub: null },
];

const AUDIT_ITEMS = ["Audit Overview", "What You Get", "How It Works", "Sample Audit"];

const FOOTER_COLS = [
  { label: "About",    items: ["Our Story", "Our Team", "Our Approach", "Careers"] },
  { label: "Insights", items: ["Blog", "Guides", "Newsletter", "Resources"] },
  { label: "Contact",  items: ["Contact Us", "Partner With Us", "Referrals", "Support"] },
  { label: "Legal",    items: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Refund Policy"] },
];

// ── Shared primitives ─────────────────────────────────────────────────────────

const MItem = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block text-[13px] font-medium text-bone/50 transition-colors duration-200 hover:text-bone"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-bone/30 transition-colors hover:text-bone">
    {children}
  </a>
);

// ── Menu footer strip (shared across all panels) ──────────────────────────────

const MenuFooter = () => (
  <div className="border-t border-white/[0.06] bg-[#030303]">
    <div className="mx-auto flex max-w-[1440px] items-start justify-between gap-8 px-8 py-5">
      <div className="flex flex-wrap gap-10">
        {FOOTER_COLS.map((col) => (
          <div key={col.label} className="flex flex-col gap-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-bone/25">
              {col.label}
            </span>
            <div className="flex flex-col gap-1.5">
              {col.items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[11px] font-medium text-bone/35 transition-colors hover:text-bone/70"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-1">
        <SocialIcon href="#">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </SocialIcon>
        <SocialIcon href="#">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </SocialIcon>
        <SocialIcon href="#">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
          </svg>
        </SocialIcon>
        <SocialIcon href="#">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
            <polygon fill="#030303" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
          </svg>
        </SocialIcon>
      </div>
    </div>
  </div>
);

// ── Solutions panel ───────────────────────────────────────────────────────────

const SolutionsPanel = () => (
  <div className="animate-menu-in">
    <div className="mx-auto max-w-[1440px] px-8 py-8">
      <div className="grid grid-cols-3 gap-6">
        {SOLUTIONS_COLS.map((col, i) => (
          <div key={col.tag} className={`rounded-xl border p-6 ${i === 1 ? "border-indigo-500/20 bg-indigo-950/20" : "border-white/[0.05] bg-white/[0.02]"}`}>
            <div className="mb-4 flex items-center gap-3">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg border ${i === 1 ? "border-indigo-400/30 bg-indigo-400/10 text-indigo-300" : "border-white/8 bg-white/4 text-bone/50"}`}>
                {col.icon}
              </div>
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-bone/30">{col.tag}</div>
                <div className="font-display text-base font-bold tracking-tight text-bone">{col.title}</div>
              </div>
            </div>
            <p className="mb-4 text-[11px] font-medium leading-relaxed text-bone/40">{col.description}</p>
            <div className="flex flex-col gap-0.5">
              {col.items.map((item) => (
                <MItem key={item}>{item}</MItem>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <MenuFooter />
  </div>
);

// ── Case Studies panel ────────────────────────────────────────────────────────

const CaseStudiesPanel = () => (
  <div className="animate-menu-in">
    <div className="mx-auto max-w-[1440px] px-8 py-8">
      <div className="grid grid-cols-[1fr_320px] gap-8">
        <div>
          <div className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-bone/30">Browse</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
            {CASE_STUDIES_ITEMS.map((item) => (
              <MItem key={item}>{item}</MItem>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-5">
          <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-indigo-400/60">
            Featured Case Study
          </div>
          <div className="font-display text-lg font-bold tracking-tight text-bone">
            Aura Therapeutics
          </div>
          <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-bone/40">
            Rebuilt the storefront. Doubled checkout conversion in 8 weeks.
          </p>
          <div className="mt-3 flex gap-4">
            <div>
              <div className="font-display text-xl font-bold text-bone">+147%</div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-bone/30">Conversion</div>
            </div>
            <div>
              <div className="font-display text-xl font-bold text-bone">0.84s</div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-bone/30">LCP</div>
            </div>
          </div>
          <a href="#" className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
            View Case Studies <span>→</span>
          </a>
        </div>
      </div>
    </div>
    <MenuFooter />
  </div>
);

// ── Pricing panel ─────────────────────────────────────────────────────────────

const PricingPanel = () => (
  <div className="animate-menu-in">
    <div className="mx-auto max-w-[1440px] px-8 py-8">
      <div className="grid grid-cols-[240px_1fr] gap-10">
        <div>
          <div className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-bone/30">Plans</div>
          <div className="flex flex-col gap-0.5">
            {PRICING_ITEMS.map(({ label, sub }) => (
              <a
                key={label}
                href="#"
                className="group flex items-center justify-between rounded-lg px-2 py-1.5 text-[13px] font-medium text-bone/50 transition-colors hover:bg-white/4 hover:text-bone"
              >
                <span>{label}</span>
                {sub && (
                  <span className="text-[9px] font-bold uppercase tracking-wider text-bone/25">{sub}</span>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-8 pt-7">
          <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-5 max-w-xs">
            <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-bone/30">Not sure where to start?</div>
            <p className="text-[12px] font-medium leading-relaxed text-bone/45">
              Book a free 30-minute strategy call. We'll recommend the right plan for your goals.
            </p>
            <a href="mailto:hello@elion.studio" className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-bone/60 hover:text-bone transition-colors">
              Book a free call →
            </a>
          </div>
        </div>
      </div>
    </div>
    <MenuFooter />
  </div>
);

// ── Audit panel ───────────────────────────────────────────────────────────────

const AuditPanel = () => (
  <div className="animate-menu-in">
    <div className="mx-auto max-w-[1440px] px-8 py-8">
      <div className="grid grid-cols-[240px_1fr] gap-10">
        <div>
          <div className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-bone/30">Audit</div>
          <div className="flex flex-col gap-0.5">
            {AUDIT_ITEMS.map((item) => (
              <MItem key={item}>{item}</MItem>
            ))}
          </div>
        </div>

        <div className="flex items-start pt-7">
          <div className="rounded-xl border border-indigo-500/25 bg-indigo-950/25 p-5 max-w-xs">
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.25em] text-indigo-400/60">
              Free Website Audit
            </div>
            <div className="font-display text-base font-bold tracking-tight text-bone">
              Find out where you're losing visitors.
            </div>
            <p className="mt-2 text-[11px] font-medium leading-relaxed text-bone/40">
              Get a full audit of your site's design, speed, and conversion opportunities. For free.
            </p>
            <a
              href="mailto:hello@elion.studio"
              className="mt-4 flex items-center gap-2 rounded-full bg-bone px-5 py-2 text-[11px] font-bold text-obsidian transition-transform hover:scale-[1.02]"
            >
              Start Your Free Audit →
            </a>
          </div>
        </div>
      </div>
    </div>
    <MenuFooter />
  </div>
);

// ── Mobile menu ───────────────────────────────────────────────────────────────

type MobileSection = "solutions" | "case-studies" | "pricing" | "audit" | null;

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const [open, setOpen] = useState<MobileSection>(null);
  const { open: openContact } = useGetInTouch();

  const toggle = (id: MobileSection) => setOpen((prev) => (prev === id ? null : id));

  const Section = ({
    id, label, children,
  }: { id: MobileSection; label: string; children: React.ReactNode }) => (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => toggle(id)}
        className="flex w-full items-center justify-between px-6 py-4 text-sm font-semibold text-bone/70 transition-colors hover:text-bone"
      >
        <span>{label}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className={`transition-transform duration-200 ${open === id ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open === id && (
        <div className="flex flex-col gap-0.5 bg-white/[0.02] px-6 pb-4">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="animate-mobile-in fixed inset-0 z-[60] flex flex-col bg-[#050505]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
        <img
          src={`${import.meta.env.BASE_URL}Text 2.png`}
          alt="Elion"
          className="h-12 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-bone/50 hover:text-bone transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div className="flex-1 overflow-y-auto">
        <a href="#" onClick={onClose} className="flex items-center border-b border-white/[0.06] px-6 py-4 text-sm font-semibold text-bone/70 hover:text-bone transition-colors">
          Home
        </a>

        <Section id="solutions" label="Solutions">
          {SOLUTIONS_COLS.map((col) => (
            <div key={col.tag} className="pt-3 first:pt-1">
              <div className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-bone/25">
                {col.tag} · {col.title}
              </div>
              {col.items.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={onClose}
                  className="block py-1.5 text-[13px] font-medium text-bone/50 transition-colors hover:text-bone"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </Section>

        <Section id="case-studies" label="Case Studies">
          {CASE_STUDIES_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              onClick={onClose}
              className="block py-1.5 text-[13px] font-medium text-bone/50 transition-colors hover:text-bone"
            >
              {item}
            </a>
          ))}
        </Section>

        <Section id="pricing" label="Pricing">
          {PRICING_ITEMS.map(({ label, sub }) => (
            <a
              key={label}
              href="#"
              onClick={onClose}
              className="flex items-center justify-between py-1.5 text-[13px] font-medium text-bone/50 transition-colors hover:text-bone"
            >
              <span>{label}</span>
              {sub && <span className="text-[9px] font-bold uppercase tracking-wider text-bone/25">{sub}</span>}
            </a>
          ))}
        </Section>

        <Section id="audit" label="Get an Audit">
          {AUDIT_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              onClick={onClose}
              className="block py-1.5 text-[13px] font-medium text-bone/50 transition-colors hover:text-bone"
            >
              {item}
            </a>
          ))}
        </Section>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] px-6 py-6">
        <a
          href="#/login"
          onClick={onClose}
          className="mb-3 flex w-full items-center justify-center gap-3 rounded-full border border-bone/20 bg-white/[0.02] py-3.5 text-sm font-bold text-bone/80 transition-colors hover:border-bone/40 hover:bg-white/[0.05] hover:text-bone"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
          className="flex w-full items-center justify-center gap-3 rounded-full bg-bone py-3.5 text-sm font-bold text-obsidian"
        >
          Get in touch →
        </button>
        <div className="mt-5 flex items-center justify-center gap-5">
          {[
            { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
            { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg> },
          ].map((s, i) => (
            <a key={i} href="#" className="text-bone/30 hover:text-bone transition-colors">{s.icon}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Main Nav ──────────────────────────────────────────────────────────────────

type MenuId = "solutions" | "case-studies" | "pricing" | "audit";

const PANELS: Record<MenuId, React.ReactNode> = {
  solutions: <SolutionsPanel />,
  "case-studies": <CaseStudiesPanel />,
  pricing: <PricingPanel />,
  audit: <AuditPanel />,
};

const Nav = () => {
  const [active, setActive] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { open: openContact } = useGetInTouch();

  const open = (id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(id);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActive(null), 120);
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
      if (e.key === "Escape") { setActive(null); setMobileOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems: { id: MenuId; label: string }[] = [
    { id: "solutions",    label: "Solutions" },
    { id: "case-studies", label: "Case Studies" },
    { id: "pricing",      label: "Pricing" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || active ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
        }`}
        onMouseLeave={scheduleClose}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}Text 2.png`}
              alt="Elion"
              className="h-20 w-auto transition-opacity hover:opacity-100 md:h-24"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1.5 lg:flex">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onMouseEnter={() => open(id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors duration-200 ${
                  active === id ? "bg-white/6 text-bone" : "text-bone/55 hover:text-bone"
                }`}
              >
                {label}
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  className={`transition-transform duration-200 ${active === id ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3.5">
            <a
              href="#/login"
              className="hidden items-center gap-2.5 rounded-full border border-bone/15 bg-white/[0.02] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-bone/75 transition-all duration-300 hover:border-bone/40 hover:bg-white/[0.05] hover:text-bone lg:flex"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
              My Dashboard
            </a>
            <button
              onClick={() => { setActive(null); openContact(); }}
              className="hidden rounded-full border border-bone/20 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] text-bone transition-all duration-300 hover:border-bone hover:bg-bone hover:text-obsidian lg:flex items-center gap-2"
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

        {/* Mega-menu panel */}
        {active && (
          <div
            className="border-t border-white/[0.04] bg-[#050505]/97 backdrop-blur-xl"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {PANELS[active]}
          </div>
        )}
      </header>

      {/* Mobile overlay */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
};

export default Nav;
