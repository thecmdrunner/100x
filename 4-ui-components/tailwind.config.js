// https://www.figma.com/file/w7wN1934wsRWZAMhPU0IEX/100x-microblogging?node-id=271%3A2961&mode=dev
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        chirp: ["Chirp", "sans-serif"],
      },

      colors: {
        "twitter-blue": "#1D9BF0",
        "twitter-blue-hover": '#1871CA',
        "twitter-blue-disabled": "#1E5D87",
        "blue-wash": "#75BEEF", // For modal bg, use with 20% opacity
        "button-stroke": "#546A7A",
        "button-stroke-neutral": "rgba(29, 155, 240, 0.24)",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        success: "#00BE74",
        error: "#8B141A",

        "desk-dark": "#040404",

        neutral: {
          50: "#F9F9F9",
          100: "#F4F4F4",
          200: "#E4E4E4",
          300: "#D3D3D3",
          400: "#A2A2A2",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
          1000: "#000000",
        },
      },

      width: {
        // Naming things is hard okay...
        "almost-sm": "334px",
        "almost-md": "426px",
        "almost-md-2": "442px",
      },

      lineHeight: {
        // Naming things is very hard...
        regular: "normal",
      },

      gap: {
        2.5: "0.625rem",
      },

      boxShadow: {
        'neutral': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};
