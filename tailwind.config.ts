import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "cream-white": "#fffcf2",
        "rich-black": "#040310",
        'light-grey': "444444",
        black: "#000000",
        "dark-blue": "#111D4A",
        "light-blue": "#92B4F4",
        primary: "#507DBC",
        secondary: "#FABC4B",
        red: "#FA462F",
        green: "#84CE64",
        "dark-green": "#2C4620",
        border: "#A9A9A9",
        "light-brown": "#DE9D63",
        slate: {
          200: "#E2E8F0",
          700: "#334155",
        },
    },
  },
  plugins: [],
}, 
}; 

