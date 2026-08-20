"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const HIGHLIGHTS = [
  "Passionate about front-end development and pixel-perfect UI",
  "Currently pursuing a BS in Computer Science",
  "Actively seeking a front-end internship to grow professionally",
  "Comfortable building responsive layouts with React & Tailwind CSS",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white py-24 dark:bg-ink-950 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into clean, functional interfaces"
        />

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 to-sky-100 dark:from-brand-500/10 dark:to-sky-500/10" />
              <div className="overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/70 p-2 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/profile-placeholder.svg"
                    alt="Sadaf Zahoor working on a laptop"
                    fill
                    sizes="(min-width: 1024px) 384px, 80vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
              I&apos;m Sadaf Zahoor, a Front-End Web Developer and BS Computer
              Science student based in Pakistan. I love the process of
              turning a design idea into a real, interactive interface —
              writing clean markup, styling it thoughtfully, and bringing it
              to life with smooth interactions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
              My focus is on modern tools like React, Next.js, and Tailwind
              CSS, and I care deeply about building interfaces that are fast,
              accessible, and responsive on every screen size. Alongside my
              studies, I&apos;m actively building projects to sharpen my
              skills and am currently looking for a front-end internship
              where I can learn from experienced developers and contribute to
              real products — as well as freelance opportunities to keep
              growing.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/60 px-4 py-3 text-sm text-ink-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300"
                >
                  <FiCheckCircle className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
