import React from "react";

interface DashboardPlaceholderProps {
  title: string;
  description: string;
  bullets?: string[];
  /** Optional 24×24 stroke icon */
  icon?: React.ReactNode;
}

const DashboardPlaceholder: React.FC<DashboardPlaceholderProps> = ({
  title,
  description,
  bullets,
  icon,
}) => (
  <div className="flex flex-col gap-6">
    {/* Section ribbon */}
    <div
      className="flex items-center gap-4 rounded-2xl p-5"
      style={{
        backgroundColor: "var(--d-surface)",
        border: "1px solid var(--d-border)",
        boxShadow: "var(--d-shadow)",
      }}
    >
      <div
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
        style={{
          backgroundColor: "var(--d-accent-bg)",
          color: "var(--d-accent)",
        }}
      >
        {icon ?? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M9 9h6v6H9z" />
          </svg>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.22em]"
          style={{ color: "var(--d-accent)" }}
        >
          Module
        </span>
        <p
          className="text-[14px] font-medium leading-snug"
          style={{ color: "var(--d-text-soft)" }}
        >
          {description}
        </p>
      </div>
    </div>

    {/* Big preview placeholder */}
    <div
      className="relative flex flex-col overflow-hidden rounded-2xl"
      style={{
        backgroundColor: "var(--d-surface)",
        border: "1px dashed var(--d-border-hi)",
        boxShadow: "var(--d-shadow)",
        minHeight: 540,
      }}
    >
      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: "var(--d-text)",
        }}
      />
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 35%, var(--d-accent-soft), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em]"
          style={{
            backgroundColor: "var(--d-accent-soft)",
            color: "var(--d-accent)",
            border: "1px solid var(--d-accent)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--d-accent)" }}
          />
          Placeholder
        </span>

        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{
            color: "var(--d-text)",
            fontFamily: "Space Grotesk, Inter, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          {title} system preview
        </h2>

        <p
          className="max-w-[60ch] text-[14px] font-medium leading-relaxed md:text-[15px]"
          style={{ color: "var(--d-text-muted)" }}
        >
          This area is reserved for the live {title.toLowerCase()} module.
          Future screenshots, system previews, charts and data will be added
          here.
        </p>

        {bullets && bullets.length > 0 && (
          <div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            style={{ width: "100%", maxWidth: 720 }}
          >
            {bullets.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-left"
                style={{
                  backgroundColor: "var(--d-surface-alt)",
                  border: "1px solid var(--d-border)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--d-accent)" }}
                />
                <span
                  className="text-[12px] font-semibold"
                  style={{ color: "var(--d-text-soft)" }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DashboardPlaceholder;
