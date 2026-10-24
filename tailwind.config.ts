import type { Config } from "tailwindcss";

// Newsprint authoritative tokens
// ground #f3efe5 · ink #191916 · secondary #494843 · rule #9b978e · accent #a3231d
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#f3efe5",
        ink: "#191916",
        secondary: "#494843",
        rule: "#9b978e",
        accent: "#a3231d",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        reading: ["var(--font-reading)", "Georgia", "serif"],
      },
      maxWidth: {
        sheet: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
