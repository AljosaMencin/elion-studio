import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

// ── Context ──────────────────────────────────────────────────────────────────

type GetInTouchContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const GetInTouchContext = createContext<GetInTouchContextValue | null>(null);

export const useGetInTouch = () => {
  const ctx = useContext(GetInTouchContext);
  if (!ctx) {
    throw new Error("useGetInTouch must be used inside <GetInTouchProvider>");
  }
  return ctx;
};

// ── Form ─────────────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  goal: string;
  budget: string;
  message: string;
  consent: boolean;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  goal: "",
  budget: "",
  message: "",
  consent: false,
};

const GOALS = [
  "New website",
  "Redesign / rebuild",
  "Internal SaaS / tool",
  "Marketing & growth",
  "Not sure yet",
];

const BUDGETS = ["< $5k", "$5k – $15k", "$15k – $40k", "$40k+", "Open"];

// ── Floating-label input ─────────────────────────────────────────────────────

type FieldProps = {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  autoComplete?: string;
};

const Field = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  multiline,
  autoComplete,
}: FieldProps) => {
  const filled = value.trim().length > 0;
  const sharedClass =
    "peer block w-full bg-transparent pt-5 pb-2 text-[14px] font-medium text-bone placeholder-transparent caret-indigo-300 outline-none";

  return (
    <div className="group relative">
      {multiline ? (
        <textarea
          id={id}
          rows={3}
          value={value}
          required={required}
          placeholder={label}
          onChange={(e) => onChange(e.target.value)}
          className={`${sharedClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          required={required}
          autoComplete={autoComplete}
          placeholder={label}
          onChange={(e) => onChange(e.target.value)}
          className={sharedClass}
        />
      )}

      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 origin-left transition-all duration-300 ${
          filled
            ? "top-0 text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-300/80"
            : "top-5 text-[13px] font-medium text-bone/45"
        } peer-focus:top-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.22em] peer-focus:text-indigo-300`}
      >
        {label}
        {required && <span className="ml-1 text-indigo-300/70">*</span>}
      </label>

      {/* Underline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-bone/10" />
      <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-300 via-indigo-200 to-transparent transition-transform duration-500 peer-focus:scale-x-100" />
    </div>
  );
};

// ── Pill chip selector ───────────────────────────────────────────────────────

const ChipGroup = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div>
    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-bone/40">
      {label}
    </p>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(active ? "" : opt)}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold transition-all duration-200 ${
              active
                ? "border-bone bg-bone text-obsidian shadow-soft"
                : "border-bone/15 bg-white/[0.02] text-bone/65 hover:border-bone/35 hover:bg-white/[0.05] hover:text-bone"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  </div>
);

// ── Drawer ───────────────────────────────────────────────────────────────────

const Drawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [mounted, setMounted] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  // Mount drawer when open; keep mounted briefly during exit transition
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    } else if (mounted) {
      const t = setTimeout(() => setMounted(false), 450);
      return () => clearTimeout(t);
    }
  }, [isOpen, mounted]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setForm(EMPTY_FORM);
        setStatus("idle");
      }, 450);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Esc to close + autofocus
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstFieldRef.current?.focus(), 320);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [isOpen, onClose]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const valid =
    form.name.trim() &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.consent &&
    status !== "submitting";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setStatus("submitting");
    // Placeholder — replace with real endpoint later.
    setTimeout(() => setStatus("sent"), 900);
  };

  if (!mounted && !isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[90] bg-obsidian/70 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Get in touch"
        className={`fixed inset-y-0 right-0 z-[100] flex w-full max-w-[520px] flex-col overflow-hidden border-l border-white/[0.06] bg-[#070707] text-bone shadow-[-30px_0_80px_rgba(0,0,0,0.6)] transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
            {/* Ambient glow */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full blur-[160px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)",
              }}
              animate={{ opacity: [0.18, 0.32, 0.18] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_55%)]" />

            {/* Header */}
            <div className="relative flex items-start justify-between gap-6 px-8 pt-8">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
                  Get in touch
                </p>
                <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-bone md:text-4xl">
                  Let's build
                  <br />
                  something good.
                </h2>
                <p className="mt-3 max-w-[34ch] text-[13px] font-medium leading-relaxed text-bone/55">
                  Tell us a bit about your project. We reply within one business day.
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bone/15 bg-white/[0.02] text-bone/70 transition-all duration-300 hover:border-bone/40 hover:bg-white/[0.06] hover:text-bone"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="relative flex-1 overflow-y-auto px-8 pb-8 pt-8">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex h-full flex-col items-start justify-center"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-indigo-300/30 bg-indigo-300/10 text-indigo-200">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bone/40">
                    Message sent
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-bone">
                    Thanks, {form.name.split(" ")[0] || "friend"}.
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[13px] font-medium leading-relaxed text-bone/55">
                    We've got your note and will reply to{" "}
                    <span className="text-bone/80">{form.email}</span> within one
                    business day.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-bone/20 bg-white/[0.02] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-bone/75 transition-all duration-300 hover:border-bone/40 hover:bg-white/[0.06] hover:text-bone"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-7">
                  <Field
                    id="name"
                    label="Your name"
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    required
                    autoComplete="name"
                  />
                  <Field
                    id="email"
                    label="Work email"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    required
                    autoComplete="email"
                  />
                  <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                    <Field
                      id="company"
                      label="Company"
                      value={form.company}
                      onChange={(v) => update("company", v)}
                      autoComplete="organization"
                    />
                    <Field
                      id="role"
                      label="Role"
                      value={form.role}
                      onChange={(v) => update("role", v)}
                      autoComplete="organization-title"
                    />
                  </div>

                  <ChipGroup
                    label="What do you need?"
                    options={GOALS}
                    value={form.goal}
                    onChange={(v) => update("goal", v)}
                  />

                  <ChipGroup
                    label="Budget"
                    options={BUDGETS}
                    value={form.budget}
                    onChange={(v) => update("budget", v)}
                  />

                  <Field
                    id="message"
                    label="Tell us about your project"
                    value={form.message}
                    onChange={(v) => update("message", v)}
                    multiline
                  />

                  {/* Consent */}
                  <label className="flex cursor-pointer items-start gap-3 text-[12px] font-medium leading-relaxed text-bone/55">
                    <span
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border transition-all duration-200 ${
                        form.consent
                          ? "border-bone bg-bone text-obsidian"
                          : "border-bone/30 bg-transparent"
                      }`}
                    >
                      {form.consent && (
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="2,6 5,9 10,3" />
                        </svg>
                      )}
                    </span>
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => update("consent", e.target.checked)}
                      className="sr-only"
                    />
                    I agree to the{" "}
                    <a
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-1 underline decoration-bone/30 underline-offset-2 transition-colors hover:text-bone hover:decoration-bone"
                    >
                      privacy policy
                    </a>
                    .
                  </label>

                  {/* Submit */}
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] font-medium text-bone/35">
                      Or email{" "}
                      <a
                        href="mailto:hello@elion.studio"
                        className="text-bone/65 underline decoration-bone/20 underline-offset-2 transition-colors hover:text-bone hover:decoration-bone"
                      >
                        hello@elion.studio
                      </a>
                    </p>

                    <motion.button
                      type="submit"
                      disabled={!valid}
                      whileHover={valid ? { scale: 1.03 } : undefined}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                      className={`group relative flex items-center gap-3 overflow-hidden rounded-full px-7 py-3 text-[12px] font-bold uppercase tracking-[0.2em] shadow-soft transition-colors ${
                        valid
                          ? "bg-bone text-obsidian"
                          : "cursor-not-allowed bg-bone/30 text-obsidian/60"
                      }`}
                    >
                      <span className="relative z-10">
                        {status === "submitting" ? "Sending…" : "Send"}
                      </span>
                      <span
                        className={`relative z-10 block h-1.5 w-1.5 rounded-full transition-colors ${
                          valid
                            ? "bg-obsidian/40 group-hover:bg-obsidian"
                            : "bg-obsidian/30"
                        }`}
                      />
                      {valid && status === "idle" && (
                        <motion.span
                          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                          initial={{ x: "-150%" }}
                          animate={{ x: "350%" }}
                          transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            repeatDelay: 1.4,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>

            {/* Footer trust strip */}
            {status !== "sent" && (
              <div className="relative border-t border-white/[0.06] bg-[#040404] px-8 py-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {["Reply within 1 day", "No spam", "NDA on request"].map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-bone/35"
                    >
                      <span className="h-1 w-1 rounded-full bg-indigo-300/70 shadow-[0_0_8px_rgba(165,180,252,0.7)]" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            )}
      </aside>
    </>
  );
};

// ── Provider ─────────────────────────────────────────────────────────────────

export const GetInTouchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <GetInTouchContext.Provider value={value}>
      {children}
      <Drawer isOpen={isOpen} onClose={close} />
    </GetInTouchContext.Provider>
  );
};
