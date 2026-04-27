import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-obsidian/60 border-b border-dim" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#" className="flex items-center gap-2">
          <img 
            src={`${import.meta.env.BASE_URL}Text 2.png`} 
            alt="Elion" 
            className="h-20 w-auto transition-opacity hover:opacity-100" 
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>

        <div className="hidden items-center gap-10 text-[13px] font-medium text-sand md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors duration-300 hover:text-bone">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-soft px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-bone transition-all duration-500 hover:bg-bone hover:text-obsidian"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
};

export default Nav;
