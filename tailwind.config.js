/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#16161a",
        dark_headline: "#fffffe",
        dark_paragraph: "#94a1b2",
        dark_secondary: "#242629",
        dark_tertiary: "#242629",
        dark_highlights: "#7f5af0",
        light: "#fffffe",
        light_headline: "#0d0d0d",
        light_paragraph: "#2a2a2a",
        light_secondary: "#eff0f3",
        light_tertiary: "#d9376e",
        light_highlights: "#ff8e3c",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};
