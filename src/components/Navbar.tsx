import { useState, useEffect } from "react";
import { BiMenu, BiX, BiSun, BiMoon } from "react-icons/bi";
import { useScrollspy } from "../hooks/useScrollspy";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const activeId = useScrollspy(
    NAV_ITEMS.map((n) => n.id),
    200
  );

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(id: string) {
    setMobileOpen(false);
    const path = id === "hero" ? "/" : `/${id}`;
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ease-out ${
        scrolled
          ? "py-2.5 bg-white/80 dark:bg-[#0a0a0f]/85 backdrop-blur-[20px] backdrop-saturate-[1.8] border-b border-[var(--card-border)]"
          : "py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
          className="font-heading text-[1.4rem] font-bold tracking-tight gradient-text"
        >
          MZ.
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`relative px-4 py-2 text-[0.88rem] font-medium rounded-full transition-all duration-200 ease-out ${
                activeId === item.id
                  ? "text-white accent-gradient"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <BiSun className="text-xl" /> : <BiMoon className="text-xl" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-[var(--text-primary)] text-xl cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <BiSun /> : <BiMoon />}
          </button>
          <button
            className="bg-transparent border-none cursor-pointer p-2 text-[var(--text-primary)] text-2xl z-[10001]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 dark:bg-[rgba(10,10,15,0.97)] backdrop-blur-[30px] flex flex-col items-center justify-center gap-4 transition-all duration-300 ease-out md:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.id);
            }}
            className={`text-[1.2rem] px-8 py-3.5 rounded-full font-medium transition-all duration-200 ${
              activeId === item.id
                ? "text-white accent-gradient"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
