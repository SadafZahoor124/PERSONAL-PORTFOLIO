"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-ink-50/60 py-24 dark:bg-ink-900/40 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="Whether it's a full build or a quick redesign, here's what I can take off your plate."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex flex-col rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-shadow hover:shadow-glass dark:border-white/10 dark:bg-white/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-sky-400 text-white shadow-lg shadow-brand-500/30">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
