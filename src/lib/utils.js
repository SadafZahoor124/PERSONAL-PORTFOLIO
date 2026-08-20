/**
 * Lightweight class-name combiner (no external dependency needed).
 * Flattens arrays, drops falsy values, and joins the rest with a space.
 */
export function cn(...inputs) {
  const out = [];

  const walk = (value) => {
    if (!value && value !== 0) return;
    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }
    out.push(String(value));
  };

  inputs.forEach(walk);
  return out.join(" ");
}

/** Basic RFC-5322-ish email check, good enough for client-side UX validation. */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
