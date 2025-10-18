/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B5BFF",
        accent: "#00D1FF",
        dark: "#0B0F14",
        light: "#E6EAF2",
        muted: "#94A3B8",
        background: "#111217",
      },
      dropShadow: {
        glow: "0 0 30px rgba(107, 107, 255, 0.35)",
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
