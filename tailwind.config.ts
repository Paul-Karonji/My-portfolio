import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        ink2: "var(--ink-2)",
        surface: "var(--surface)",
        surface2: "var(--surface-2)",
        hairline: "var(--line)",
        strong: "var(--line-2)",
        text: "var(--text)",
        dim: "var(--text-2)",
        muted: "var(--muted)",
        lav: "var(--lav)",
        lavsoft: "var(--lav-soft)",
        rose: "var(--rose)",
        live: "var(--live)",
        amber: "var(--amber)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "22px",
        tile: "14px",
        pill: "999px",
      },
      maxWidth: {
        shell: "1280px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
        inout: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        caret: {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseDot: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "70%": { transform: "scale(2.4)", opacity: "0" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        caret: "caret 1.05s steps(1) infinite",
        pulseDot: "pulseDot 2.4s cubic-bezier(0,0,.2,1) infinite",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        sweep: "sweep 2.6s cubic-bezier(.4,0,.2,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
