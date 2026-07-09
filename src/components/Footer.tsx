import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/SadafZahoor124", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sadaf-zahoor-447158374?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: FiLinkedin },
  { label: "Email", href: "mailto:your-email@example.com", icon: FiMail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-white dark:border-white/10 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="font-display text-lg font-bold tracking-tight text-ink-900 dark:text-white"
            >
              Sadaf<span className="text-brand-600 dark:text-brand-400">.dev</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-ink-500 dark:text-ink-400">
              Front-End Web Developer building clean, responsive, and
              accessible interfaces.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-2 text-center sm:text-left">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-500 transition-colors hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:text-ink-300 dark:hover:text-brand-300"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-ink-100 pt-6 text-center text-xs text-ink-400 dark:border-white/10">
          &copy; {year} Sadaf Zahoor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
