/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      pink: "#ff5a5f",
      white: "oklch(0.985 0.002 247.839)",
      black: "#484848",
      box_color: "#ffffff",
      grey: "oklch(0.708 0 0)",
      bg_color: "#f3f4f6",
    },
    extend: {},
  },
  plugins: [],
};
