"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white py-24 dark:bg-ink-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Projects I've practiced with"
          description="Personal learning and practice projects I built to sharpen my front-end and responsive design skills."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-600/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  <FiCheckCircle className="text-xs" />
                  {project.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:text-ink-200 dark:hover:text-brand-300"
                    >
                      <FiGithub />
                      Code
                    </a>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  ) : (
                    <span
                      title="No live demo is hosted for this practice project"
                      className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full bg-ink-100 px-4 py-2 text-sm font-medium text-ink-400 dark:bg-white/5 dark:text-ink-500"
                    >
                      <FiExternalLink />
                      Live Demo N/A
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
