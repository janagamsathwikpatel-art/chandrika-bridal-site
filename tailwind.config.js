/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          text: "#201f1f",
          subText: "#767573",
          black: "#0a0a0a",
        },
        accent: {
          gold: "#ebe9e5",
          sand: "#f5f4f0",
          cream: "#fbfaf8",
        },
      },
      letterSpacing: {
        widest: "0.2em",
        luxury: "0.12em",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
