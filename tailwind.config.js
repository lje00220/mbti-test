/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      slate: "oklch(0.279 0.041 260.031)",
      pink: "#ff5a5f",
      white: "oklch(0.985 0.002 247.839)",
      black: "#484848",
      box_color: "#ffffff",
      grey: "oklch(0.708 0 0)",
      bg_color: "#f3f4f6",
      grey_font: "#a9aaaa",
      yellow: "oklch(0.852 0.199 91.936)",
      red: "oklch(0.637 0.237 25.331)",
      blue: "oklch(0.623 0.214 259.815)",
    },
    extend: {},
  },
  plugins: [],
};
