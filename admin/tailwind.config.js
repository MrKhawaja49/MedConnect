/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'Ubuntu', 'sans-serif'], 
      },
      colors: {
        primary: {
          DEFAULT: "#089A98",   // main teal blue
          soft: "#0EA5E9",      // optional alt teal
        },
        secondary: {
          DEFAULT: "#10B981",   // soft green
        },
        accent: {
          DEFAULT: "#3B82F6",   // royal blue
        },
        neutral: {
          white: "#FFFFFF",
          light: "#F9FAFB",     // very light gray
        },
        text: {
          dark: "#1E293B",      // dark navy
          slate: "#334155",     // slate gray
        },
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
}