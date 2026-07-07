"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-ink-50/60 py-24 dark:bg-ink-900/40 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="A focused toolkit for building responsive, modern, and maintainable front-end applications."
        />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 text-center shadow-sm backdrop-blur-xl transition-shadow hover:shadow-glass dark:border-white/10 dark:bg-white/5"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-sky-400 transition-transform duration-300 group-hover:scale-x-100" />
                <Icon className={`mx-auto mb-4 text-4xl ${skill.color}`} />
                <p className="font-display text-sm font-semibold text-ink-800 dark:text-ink-100">
                  {skill.name}
                </p>

                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.06 + 0.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-sky-400"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
