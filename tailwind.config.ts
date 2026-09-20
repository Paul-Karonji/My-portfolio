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
        canvas: "#F7F7F7",
        surface: "#FFFFFF",
        darkCard: "#111111",
        charcoal: "#1F1F1F",
        primaryText: "#111111",
        mutedText: "#6C7179",
        borderHairline: "#D1D3D6",
        accentViolet: "#7430F7",
        accentVioletLight: "#F5F2FF",
        accentGreen: "#00C047",
        accentGreenLight: "#EEFFF3",
        accentYellow: "#EFCE03",
        accentYellowLight: "#FEFEE8",
      },
      borderRadius: {
        bento: "40px",
        card: "24px",
        btn: "16px",
        tag: "12px",
      },
      fontFamily: {
        sans: ["var(--font-instrument)", "sans-serif"],
      },
      boxShadow: {
        "luzia-btn": "0.5px 0.5px 0.7px -0.2px rgba(0,0,0,0.05), 1.3px 1.3px 1.8px -0.4px rgba(0,0,0,0.06), 2.8px 2.8px 4px -0.6px rgba(0,0,0,0.08), 6.3px 6.3px 8.9px -0.8px rgba(0,0,0,0.11), 16px 16px 22.6px -1px rgba(0,0,0,0.2)",
        "luzia-card": "0.7px 0.7px 1px rgba(0,0,0,0.05), 7.8px 7.8px 11px rgba(0,0,0,0.08), 22px 22px 31px rgba(0,0,0,0.13), 40px 40px 56px rgba(0,0,0,0.2)",
        "luzia-subtle": "0px 1px 3px rgba(0,0,0,0.05), 0px 10px 24px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
