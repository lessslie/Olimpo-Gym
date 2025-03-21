/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#333333",
        tertiary: "#666666",
        accent: "#f3f4f6",
        highlight: "#dc2626",
      },
    },
  },
  plugins: [],
}