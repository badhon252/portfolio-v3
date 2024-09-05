/* eslint-disable @typescript-eslint/no-var-requires */
// const { pick, omit } = require("lodash");
// const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // Optional: Just-in-Time mode for faster builds
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Use your CSS variables for colors in Tailwind
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        backgroundLight: "var(--gradient-ocean-breeze)",
        backgroundDark: "var(--gradient-cool-night)",
        textPrimary: "var(--text-primary-color)",
        textLight: "var(--text-light-color)",
        accent: "var(--accent-color)",
      },
      backgroundImage: {
        "cool-night": "var(--gradient-cool-night)",
        "sunset-glow": "var(--gradient-sunset-glow)",
        "ocean-breeze": "var(--gradient-ocean-breeze)",
        "purple-haze": "var(--gradient-purple-haze)",
        "midnight-calm": "var(--gradient-midnight-calm)",
      }, // Extend the gradient color stop options if needed
      gradientColorStops: () => ({
        "primary-light": "rgba(79, 70, 229, 0.3)",
        "secondary-light": "rgba(14, 165, 233, 0.3)",
        "primary-dark": "rgba(28, 28, 30, 0.7)",
        "secondary-dark": "rgba(31, 41, 55, 0.7)",
      }),
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
