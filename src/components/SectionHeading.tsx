import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto mb-14 max-w-2xl",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300">
          {description}
        </p>
      )}
    </Reveal>
  );
}
