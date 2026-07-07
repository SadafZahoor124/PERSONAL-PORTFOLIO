import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-display text-6xl font-bold text-brand-600 dark:text-brand-400">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-ink-500 dark:text-ink-300">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
