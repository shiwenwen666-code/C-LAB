import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppSettings } from "../App";

const links = [
  ["HOME", "/"],
  ["WORK", "/work"],
  ["ABOUT", "/about"],
  ["CONTACT", "/contact"],
];

export function Navigation() {
  const { locale, setLocale, theme, setTheme } = useAppSettings();
  const [open, setOpen] = useState(false);

  const navItems = (
    <>
      {links.map(([label, to]) => (
        <NavLink
          key={to}
          to={to}
          onClick={() => setOpen(false)}
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          {label}
        </NavLink>
      ))}
    </>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="site-nav"
    >
      <div className="site-nav-inner">
        <NavLink to="/" className="site-logo">
          CYAN LAB
        </NavLink>

        <nav className="hidden items-center gap-10 text-[15px] font-semibold lg:flex">{navItems}</nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <div className="nav-toggle">
            <button onClick={() => setTheme("light")} className={theme === "light" ? "active" : ""}>
              Light
            </button>
            <button onClick={() => setTheme("dark")} className={theme === "dark" ? "active" : ""}>
              Dark
            </button>
          </div>
          <div className="nav-toggle">
            <button onClick={() => setLocale("en")} className={locale === "en" ? "active" : ""}>
              EN
            </button>
            <button onClick={() => setLocale("zh")} className={locale === "zh" ? "active" : ""}>
              中文
            </button>
          </div>
        </div>

        <button
          className="icon-button lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="site-mobile-nav lg:hidden"
          >
            <nav className="grid gap-3 text-lg">{navItems}</nav>
            <div className="mt-5 flex flex-wrap gap-2">
              <div className="nav-toggle">
                <button onClick={() => setTheme("light")} className={theme === "light" ? "active" : ""}>
                  Light
                </button>
                <button onClick={() => setTheme("dark")} className={theme === "dark" ? "active" : ""}>
                  Dark
                </button>
              </div>
              <div className="nav-toggle">
                <button onClick={() => setLocale("en")} className={locale === "en" ? "active" : ""}>
                  EN
                </button>
                <button onClick={() => setLocale("zh")} className={locale === "zh" ? "active" : ""}>
                  中文
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
