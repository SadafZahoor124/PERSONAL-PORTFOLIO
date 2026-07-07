"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { isValidEmail } from "@/lib/utils";
import type { ContactFormData, ContactFormErrors } from "@/types";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    icon: FiMail,
  },
];

type Status = "idle" | "submitting" | "success" | "error";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const validate = (data: ContactFormData): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};
    if (!data.name.trim()) nextErrors.name = "Please enter your name.";
    if (!data.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!isValidEmail(data.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!data.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (!data.message.trim()) {
      nextErrors.message = "Please write a message.";
    } else if (data.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }
    return nextErrors;
  };

  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setStatusMessage("Your message has been sent. I'll get back to you soon!");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <section id="contact" className="relative bg-ink-50/60 py-24 dark:bg-ink-900/40 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have an internship opening or a freelance project in mind? I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-2xl border border-white/60 bg-white/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white">
                Get in touch
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                I&apos;m currently open to front-end internships and freelance
                projects. Feel free to reach out through the form or any of
                the links below — I try to respond within a day or two.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.label !== "Email" ? "_blank" : undefined}
                      rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:text-brand-300"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-300">
                        <Icon size={16} />
                      </span>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-white/60 bg-white/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-ink-900/40 dark:text-white dark:focus:ring-brand-500/20"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-ink-900/40 dark:text-white dark:focus:ring-brand-500/20"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                placeholder="Internship opportunity / Project inquiry"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className="w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-ink-900/40 dark:text-white dark:focus:ring-brand-500/20"
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-xs text-red-500">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell me a bit about the role or project..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full resize-none rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-ink-900/40 dark:text-white dark:focus:ring-brand-500/20"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <p
                role="status"
                className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
              >
                <FiCheckCircle /> {statusMessage}
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-300"
              >
                <FiAlertCircle /> {statusMessage}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
