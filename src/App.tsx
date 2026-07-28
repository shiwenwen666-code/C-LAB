import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { LemniscateLoader } from "./components/LemniscateLoader";
import { Navigation } from "./components/Navigation";
import { About } from "./pages/About";
import { Articles } from "./pages/Articles";
import { Awards } from "./pages/Awards";
import { AestheticIntelligenceBureau } from "./pages/AestheticIntelligenceBureau";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { HomeContra } from "./pages/HomeContra";
import { Practice } from "./pages/Practice";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Work } from "./pages/Work";
import type { Locale } from "./types";

type Theme = "light" | "dark";
const themeStorageKey = "cyan-theme-v2";

type AppContextValue = {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: Theme) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function useAppSettings() {
  const value = useContext(AppContext);
  if (!value) {
    throw new Error("useAppSettings must be used inside AppContext");
  }
  return value;
}

function PageShell() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="app-shell min-h-screen transition-colors duration-500 ease-smooth">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.42, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/contra" element={<HomeContra />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/aesthetic-intelligence-bureau" element={<AestheticIntelligenceBureau />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <LemniscateLoader />
      <CustomCursor />
    </div>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>("zh");
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = window.localStorage.getItem(themeStorageKey);
    if (saved === "light" || saved === "dark") return saved;
    return "dark";
  });

  function setTheme(nextTheme: Theme) {
    window.localStorage.setItem(themeStorageKey, nextTheme);
    setThemeState(nextTheme);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
  }, [theme, locale]);

  const value = useMemo(
    () => ({ locale, theme, setLocale, setTheme }),
    [locale, theme],
  );

  return (
    <AppContext.Provider value={value}>
      <PageShell />
    </AppContext.Provider>
  );
}
