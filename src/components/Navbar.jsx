"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Detect page scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Mobile navigation click
  const handleMobileLinkClick = (href) => {
    setIsOpen(false);

    const section = document.querySelector(href);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 shadow-sm backdrop-blur-md dark:bg-ink-950/80"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-ink-900 dark:text-white"
        >
          Sadaf
          <span className="text-brand-600 dark:text-brand-400">
            .dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeSection === link.href
                  ? "text-brand-600 dark:text-brand-300"
                  : "text-ink-600 hover:text-brand-600 dark:text-ink-300 dark:hover:text-brand-300"
              )}
            >
              {link.label}

              {activeSection === link.href && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-50 dark:bg-brand-500/10"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Desktop Hire Me */}
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition-colors hover:bg-brand-700 lg:inline-flex"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200/70 text-ink-700 dark:border-white/10 dark:text-ink-100 lg:hidden"
          >
            {isOpen ? (
              <FiX size={18} />
            ) : (
              <FiMenu size={18} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden border-t border-ink-100 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-ink-950/95 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">

              {/* Mobile Links */}
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    handleMobileLinkClick(link.href)
                  }
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    activeSection === link.href
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                      : "text-ink-600 dark:text-ink-300"
                  )}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Hire Me */}
              <a
                href="#contact"
                onClick={() =>
                  handleMobileLinkClick("#contact")
                }
                className="mt-2 rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Hire Me
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}