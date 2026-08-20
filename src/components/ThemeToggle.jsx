"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink-200/70 bg-white/70 text-ink-700 shadow-sm transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-100 dark:hover:text-brand-300"
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {isDark ? <FiMoon size={17} /> : <FiSun size={17} />}
      </motion.span>
    </button>
  );
}
