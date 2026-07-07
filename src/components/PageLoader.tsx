"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-ink-950"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative h-12 w-12">
              <span className="absolute inset-0 animate-spin rounded-full border-2 border-brand-200 border-t-brand-600 dark:border-white/10 dark:border-t-brand-400" />
              <span className="absolute inset-3 rounded-full bg-brand-600/10" />
            </div>
            <p className="font-display text-sm font-semibold tracking-widest text-ink-500 dark:text-ink-300">
              SZ&nbsp;PORTFOLIO
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
