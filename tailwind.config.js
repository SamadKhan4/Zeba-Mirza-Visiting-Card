/** @type {import('tailwindcss').Config} */
export default {
    content: [ "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        background: 'oklch(1 0 0)', // Define your custom background color
        foreground: 'oklch(0.145 0 0)',
      },
    },
  },
  plugins: [],
}

