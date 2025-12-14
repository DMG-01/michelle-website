/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [],
};
