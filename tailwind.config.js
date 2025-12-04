/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx}",
  // ],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#E5DEFF",
        grey: "#928F99",
        "meteorite-blue": "#2F2175",
        "half-white": "#ffffff80",
        "half-purple": "#e8e6f3",
        "half-black": "#0D0533",
        green: {
          100: "#E8FFEF",
          400: "#6BFCBB",
          700: "#006C49",
        },

        blue: {
          100: "#F7F9FF",
          400: "#CDE5FF",
          700: "#006398",
        },

        yellow: {
          100: "#FFF8F2",
          400: "#FFDEA2",
          700: "#7A5900",
        },

        red: {
          100: "#FFF8F7",
          400: "#FFDAD8",
          700: "#A43A3C",
        },
        "half-purple": {
          100: "#e8e6f3",
          400: "#b5acd6",
          700: "#8373b8",
        },
      },
      boxShadow: {
        default: "inset 0px -1px 0px #E2E2EA",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(red|green|blue|yellow|half-purple)-(100|400|700)/,
    },
  ],
};
