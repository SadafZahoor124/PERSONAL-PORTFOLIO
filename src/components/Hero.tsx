"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import Image from "next/image";

const CODE_LINES = [
  "const developer = {",
  "  name: 'Sadaf Zahoor',",
  "  role: 'Front-End Developer',",
  "  stack: ['React', 'Next.js', 'Tailwind'],",
  "  location: 'Pakistan',",
  "  available: true,",
  "};",
];

function TypedCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;

    const currentLine = CODE_LINES[visibleLines];
    if (visibleChars < currentLine.length) {
      const timeout = setTimeout(() => setVisibleChars((c) => c + 1), 22);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setVisibleLines((l) => l + 1);
      setVisibleChars(0);
    }, 220);
    return () => clearTimeout(timeout);
  }, [visibleChars, visibleLines]);

  return (
    <div className="font-mono text-[13px] leading-6 sm:text-sm">
      {CODE_LINES.map((line, index) => {
        const isCurrent = index === visibleLines;
        const isDone = index < visibleLines;
        const text = isDone ? line : isCurrent ? line.slice(0, visibleChars) : "";

        return (
          <div key={line} className="flex min-h-[1.5rem] whitespace-pre">
            <span className="mr-3 select-none text-ink-400/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-ink-100">{colorizeLine(text)}</span>
            {isCurrent && (
              <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-brand-400" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function colorizeLine(text: string) {
  // Very small, safe "syntax highlight" split — purely presentational.
  if (text.includes(":") && !text.trim().startsWith("const")) {
    const [key, ...rest] = text.split(":");
    return (
      <>
        <span className="text-sky-300">{key}</span>
        <span className="text-ink-300">:{rest.join(":")}</span>
      </>
    );
  }
  return <span className="text-brand-200">{text}</span>;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 dark:bg-ink-950 sm:pt-40"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to Internships &amp; Freelance Work
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-[3.4rem]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-brand-600 to-sky-500 bg-clip-text text-transparent">
              Sadaf Zahoor
            </span>
            <br />
            I build clean, modern front-ends.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
            A Front-End Web Developer and BS Computer Science student from
            Pakistan, focused on crafting responsive, accessible, and
            performant web interfaces with React, Next.js, and Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume-placeholder.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-100 dark:hover:text-brand-300"
            >
              <FiDownload />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink-600 transition-all hover:text-brand-700 dark:text-ink-300 dark:hover:text-brand-300"
            >
              <FiMail />
              Contact Me
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8">
            <div>
              <p className="font-display text-2xl font-bold text-ink-900 dark:text-white">
                2+
              </p>
              <p className="text-xs uppercase tracking-wide text-ink-400">
                Practice Projects
              </p>
            </div>
            <div className="h-10 w-px bg-ink-200 dark:bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-ink-900 dark:text-white">
                BSCS
              </p>
              <p className="text-xs uppercase tracking-wide text-ink-400">
                Computer Science
              </p>
            </div>
            <div className="h-10 w-px bg-ink-200 dark:bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-ink-900 dark:text-white">
                PK
              </p>
              <p className="text-xs uppercase tracking-wide text-ink-400">
                Based in Pakistan
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -top-10 -right-6 h-28 w-28 animate-float rounded-3xl bg-gradient-to-br from-brand-400 to-sky-400 opacity-80 blur-[2px] sm:h-32 sm:w-32" />
          <div className="absolute -bottom-10 -left-6 h-24 w-24 animate-float rounded-full bg-gradient-to-br from-sky-300 to-brand-500 opacity-70 [animation-delay:1.5s]" />

          <div className="relative rounded-3xl border border-white/40 bg-white/60 p-1.5 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-glass-dark">
            <div className="overflow-hidden rounded-[1.35rem] bg-ink-950">
              <div className="flex items-center gap-3 border-b border-white/5 bg-ink-900/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs text-ink-400">profile.ts</span>
              </div>
              <div className="p-5">
                <TypedCode />
              </div>
            </div>
          </div>

          <div className="relative mx-auto -mt-10 flex justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-glass dark:border-ink-900 sm:h-36 sm:w-36">
              <Image
                src="/profile-placeholder.svg"
                alt="Portrait of Sadaf Zahoor"
                fill
                sizes="144px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
