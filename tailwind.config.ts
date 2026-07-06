import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        ink: "#0E0F11",
        panel: "#16181C",
        paper: "#F6F5F1",
        cyanAccent: "#6CD6E8",
        blueAccent: "#8EA7C7",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
