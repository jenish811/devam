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
      className="relative inline-flex h-11 w-[84px] items-center rounded-full border border-obsidian/10 bg-white p-1 text-obsidian shadow-[0_10px_28px_rgba(17,16,14,0.08)] transition hover:border-champagne dark:border-porcelain/16 dark:bg-graphite dark:text-porcelain dark:shadow-luxury-dark"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.span
        className="absolute left-1 top-1 h-9 w-9 rounded-full bg-champagne shadow-[0_8px_18px_rgba(190,145,73,0.36)]"
        animate={{ x: isDark ? 38 : 0 }}
        transition={{ type: "spring", stiffness: 430, damping: 28 }}
      />
      <span className="relative z-10 grid h-9 w-9 place-items-center overflow-hidden rounded-full">
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          animate={{
            rotate: isDark ? -90 : 0,
            scale: isDark ? 0.62 : 1,
            opacity: isDark ? 0.46 : 1,
          }}
          transition={{ type: "spring", stiffness: 360, damping: 24 }}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </motion.svg>
      </span>
      <span className="relative z-10 grid h-9 w-9 place-items-center overflow-hidden rounded-full">
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
          animate={{
            rotate: isDark ? 0 : 90,
            scale: isDark ? 1 : 0.62,
            opacity: isDark ? 1 : 0.46,
          }}
          transition={{ type: "spring", stiffness: 360, damping: 24 }}
        >
          <path d="M21 14.6A8.5 8.5 0 0 1 9.4 3a7.7 7.7 0 1 0 11.6 11.6Z" />
          <path d="M17 4.6 17.7 6l1.5.7-1.5.7L17 8.8l-.7-1.4-1.5-.7 1.5-.7L17 4.6Z" />
        </motion.svg>
      </span>
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
