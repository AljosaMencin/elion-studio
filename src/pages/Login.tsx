import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedBackdrop from "@/components/elion/AnimatedBackdrop";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No real auth yet — placeholder flow drops the user straight onto the
    // dashboard regardless of input.
    navigate("/dashboard");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-obsidian text-bone">
      <AnimatedBackdrop />

      {/* Subtle grid behind card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 75%)",
        }}
      />

      {/* Top-left return link */}
      <Link
        to="/"
        className="absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[12px] font-semibold text-bone/65 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-bone md:left-10 md:top-10"
      >
        <span>←</span> Back to site
      </Link>

      {/* Centered card */}
      <motion.div
        className="relative z-10 mx-6 w-full max-w-[440px]"
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Card halo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-12 -z-10 opacity-70 blur-[80px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.35), transparent 70%)",
          }}
        />

        <div
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0a0e]/85 p-9 backdrop-blur-2xl md:p-10"
          style={{
            boxShadow:
              "0 50px 120px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset",
          }}
        >
          {/* Top accent line */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(165,180,252,0.55), transparent)",
            }}
          />

          {/* Brand mark */}
          <div className="mb-9 flex flex-col items-center gap-5">
            <img
              src={`${import.meta.env.BASE_URL}Text 2.v1.png`}
              alt="Elion"
              className="h-16 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="font-display text-3xl font-bold tracking-tight text-bone md:text-[2rem]">
                Welcome back
              </h1>
              <p className="text-[13px] font-medium leading-relaxed text-bone/55">
                Log in to access your business dashboard.
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="login-email"
                className="text-[10px] font-bold uppercase tracking-[0.22em] text-bone/45"
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@elion.studio"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-[14px] font-medium text-bone placeholder:text-bone/30 outline-none transition-colors duration-200 hover:border-white/[0.14] focus:border-indigo-300/50 focus:bg-white/[0.04]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="login-password"
                  className="text-[10px] font-bold uppercase tracking-[0.22em] text-bone/45"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-[11px] font-semibold text-bone/40 transition-colors hover:text-bone/75"
                  onClick={(e) => e.preventDefault()}
                >
                  Forgot?
                </button>
              </div>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-[14px] font-medium text-bone placeholder:text-bone/30 outline-none transition-colors duration-200 hover:border-white/[0.14] focus:border-indigo-300/50 focus:bg-white/[0.04]"
              />
            </div>

            <button
              type="submit"
              className="group relative mt-3 flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-bone px-6 py-3.5 text-[14px] font-bold text-obsidian transition-transform duration-300 hover:scale-[1.01]"
            >
              <span className="relative z-10">Log in</span>
              <span className="relative z-10 text-[16px] transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
              {/* sheen */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                initial={{ x: "-150%" }}
                animate={{ x: "350%" }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  repeatDelay: 1.6,
                  ease: "easeInOut",
                }}
              />
            </button>
          </form>

          {/* Footer / context */}
          <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/[0.06] pt-6 text-center">
            <p className="text-[11px] font-medium text-bone/35">
              Need access to your studio dashboard?
            </p>
            <a
              href="mailto:hello@elion.studio"
              className="text-[12px] font-semibold text-bone/65 transition-colors hover:text-bone"
            >
              Contact your account manager →
            </a>
          </div>
        </div>

        {/* Trust strip below card */}
        <div className="mt-6 flex items-center justify-center gap-5 text-[10px] font-medium text-bone/30">
          <span>Encrypted in transit</span>
          <span className="h-1 w-1 rounded-full bg-bone/20" />
          <span>SOC 2 aligned</span>
          <span className="h-1 w-1 rounded-full bg-bone/20" />
          <span>SSO-ready</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
