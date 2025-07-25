import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: "JetBrains Mono, system-ui, sans-serif",
      }
    },
  },
  plugins: [daisyui],
}

