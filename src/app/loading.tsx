export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-ink-950">
      <div className="relative h-10 w-10">
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-brand-200 border-t-brand-600 dark:border-white/10 dark:border-t-brand-400" />
      </div>
    </div>
  );
}
