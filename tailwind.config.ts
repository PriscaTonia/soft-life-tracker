// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--page-bg))",
        card: "hsl(var(--card-bg) / <alpha-value>)",
        foreground: "hsl(var(--primary-text) / <alpha-value>)",
        secondaryText: "hsl(var(--secondary-text) / <alpha-value>)",
        mutedText: "hsl(var(--muted-text) / <alpha-value>)",
        border: "hsl(var(--border-color) / <alpha-value>)",

        sidebar: "hsl(var(--sidebar-bg) / <alpha-value>)",
        sidebarText: "hsl(var(--sidebar-text) / <alpha-value>)",
        sidebarHover: "hsl(var(--sidebar-hover-bg) / <alpha-value>)",

        navbar: "hsl(var(--navbar-bg) / <alpha-value>)",
        navbarText: "hsl(var(--navbar-text) / <alpha-value>)",

        accent: "hsl(var(--color-accent) / <alpha-value>)",
        accentHover: "hsl(var(--color-accent-hover) / <alpha-value>)",
        lavender: "hsl(var(--color-lavender) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
