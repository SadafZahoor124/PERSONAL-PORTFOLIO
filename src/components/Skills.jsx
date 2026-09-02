"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

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
          description="A versatile toolkit for building modern, responsive, and maintainable web applications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition-shadow hover:shadow-glass dark:border-white/10 dark:bg-white/5"
            >
              {/* Top gradient line */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-sky-400 transition-transform duration-300 group-hover:scale-x-100" />

              {/* Category Title */}
              <h3 className="mb-5 font-display text-lg font-semibold text-ink-800 dark:text-ink-100">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-xl border border-ink-100 bg-white/80 px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm dark:border-white/10 dark:bg-white/5"
                    >
                      <Icon className={`text-xl ${skill.color}`} />

                      <span className="text-sm font-medium text-ink-700 dark:text-ink-200">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}