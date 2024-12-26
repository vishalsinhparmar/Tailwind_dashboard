/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
      },
      spacing: {
        '5px': '5px',
      },
      margin: {
        '5px': '5px',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

