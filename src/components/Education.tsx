"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiClock } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="relative bg-white py-24 dark:bg-ink-950 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="My academic journey"
          description="From secondary school to specializing in front-end development at university."
        />

        <div className="relative ml-3 border-l-2 border-dashed border-brand-200 dark:border-brand-500/30">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative mb-10 pl-8 last:mb-0"
            >
              <span
                className={`absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white dark:ring-ink-950 ${
                  item.status === "in-progress"
                    ? "bg-brand-600"
                    : "bg-emerald-500"
                }`}
              >
                {item.status === "in-progress" ? (
                  <FiClock className="text-[10px] text-white" />
                ) : (
                  <FiCheckCircle className="text-[10px] text-white" />
                )}
              </span>

              <div className="rounded-2xl border border-ink-100 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === "in-progress"
                        ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                        : "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                    }`}
                  >
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink-500 dark:text-ink-400">
                  {item.institution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
