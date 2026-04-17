import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "./ThemeContext.jsx";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const navLinkClass = ({ isActive }) =>
  `relative px-1 py-2 text-sm font-semibold transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-champagne after:transition-all after:duration-300 ${isActive
    ? "text-champagne after:w-full"
    : "text-obsidian/72 after:w-0 hover:text-obsidian hover:after:w-full dark:text-porcelain/74 dark:hover:text-porcelain"
  }`;

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group inline-flex h-11 items-center gap-3 rounded-full border border-obsidian/10 bg-white px-3 text-xs font-semibold uppercase tracking-[0.14em] text-obsidian transition hover:border-champagne dark:border-porcelain/16 dark:bg-graphite dark:text-porcelain"
      aria-label="Toggle dark mode"
    >
      <span className="relative h-6 w-11 rounded-full bg-obsidian/10 transition dark:bg-champagne/30">
        <motion.span
          className="absolute left-1 top-1 h-4 w-4 rounded-full bg-champagne shadow-sm"
          animate={{ x: isDark ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
        />
      </span>
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-obsidian/8 bg-white shadow-[0_8px_28px_rgba(17,16,14,0.055)] transition-colors duration-500 dark:border-porcelain/10 dark:bg-obsidian">
      <nav className="luxury-container flex h-[78px] items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="brand-logo">
            <img src="/logo_devam_png_black.png" alt="Wallantq" />
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            to="/products"
            className="rounded-md bg-obsidian px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-champagne hover:text-obsidian dark:bg-champagne dark:text-obsidian dark:hover:bg-champagne-soft"
          >
            Buy Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-obsidian/10 bg-white md:hidden dark:border-porcelain/14 dark:bg-graphite"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Open navigation"
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-obsidian/8 bg-white px-5 py-5 shadow-luxury md:hidden dark:border-porcelain/10 dark:bg-obsidian dark:shadow-luxury-dark"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="flex items-center justify-between gap-3 pt-3">
                <ThemeToggle />
                <Link
                  to="/products"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-obsidian px-4 py-3 text-sm font-semibold text-white dark:bg-champagne dark:text-obsidian"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
