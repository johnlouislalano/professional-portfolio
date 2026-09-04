import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#06090A", // page background
          panel: "#0B1310", // card / panel background
          raised: "#101A16", // slightly raised surface (tag pills, inputs)
          line: "#1E2B26", // default hairline border
        },
        accent: {
          DEFAULT: "#33A484", // primary teal-emerald accent (from source design)
          bright: "#4FCBA6",
          dim: "#1E4A3C",
          soft: "#0F2620",
        },
        ivory: "#F3F6F4", // primary text on dark
        mist: "#9FB0AB", // secondary / muted text
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(51,164,132,0.08), rgba(6,9,10,0) 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        blink: "blink 2.2s ease-in-out infinite",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
