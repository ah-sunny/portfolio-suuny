import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: "JetBrains Mono, system-ui, sans-serif",
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // You can also add more like "cupcake", "synthwave"
  },
}

