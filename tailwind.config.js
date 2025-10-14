/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#6b5bff",
        dark: "black",
        light: "#e6eaf2",
        muted: "#9ca3af",
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
