import React from "react";

// ── Theme context for the dashboard shell ───────────────────────────────────
//
// The dashboard supports a light + dark theme via CSS custom properties on the
// shell wrapper (data-dashboard-theme="dark|light"). All dashboard styling
// reads from these tokens so toggling is a single attribute swap, no
// re-render of styles.
//
// Tokens reference the same Elion brand vocabulary used on the public site:
//   • Dark: obsidian backgrounds, indigo accents (rgba(165,180,252,…))
//   • Light: off-white surfaces with the same indigo accents at higher
//     saturation so they read against bright backgrounds.

type DashboardTheme = "dark" | "light";

const STORAGE_KEY = "elion.dashboard.theme";

interface DashboardThemeContextValue {
  theme: DashboardTheme;
  setTheme: (theme: DashboardTheme) => void;
  toggleTheme: () => void;
}

const DashboardThemeContext = React.createContext<
  DashboardThemeContextValue | undefined
>(undefined);

const readInitialTheme = (): DashboardTheme => {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* localStorage may be blocked — fall back to default */
  }
  return "dark";
};

export const DashboardThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = React.useState<DashboardTheme>(readInitialTheme);

  const setTheme = React.useCallback((next: DashboardTheme) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = React.useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = React.useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <DashboardThemeContext.Provider value={value}>
      {children}
    </DashboardThemeContext.Provider>
  );
};

export const useDashboardTheme = (): DashboardThemeContextValue => {
  const ctx = React.useContext(DashboardThemeContext);
  if (!ctx) {
    throw new Error(
      "useDashboardTheme must be used inside <DashboardThemeProvider>"
    );
  }
  return ctx;
};
