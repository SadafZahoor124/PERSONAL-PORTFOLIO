import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dbe7fe",
          200: "#bfd6fe",
          300: "#93bcfd",
          400: "#609afa",
          500: "#3b78f6",
          600: "#2657ea",
          700: "#1e44d6",
          800: "#1e3aac",
          900: "#1e3487",
          950: "#172152",
        },
        ink: {
          50: "#f5f7fb",
          100: "#e9edf5",
          200: "#cdd7e6",
          300: "#a2b3cc",
          400: "#7089ad",
          500: "#4d6a91",
          600: "#385278",
          700: "#2e4262",
          800: "#243352",
          900: "#0f1a30",
          950: "#080e1c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(30,68,214,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,68,214,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(147,188,253,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(147,188,253,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(600px circle at 0% 0%, rgba(59,120,246,0.20), transparent 60%), radial-gradient(500px circle at 100% 0%, rgba(96,154,250,0.18), transparent 60%)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(30, 58, 138, 0.15)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
