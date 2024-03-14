/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // ...other theme configuration

    extend: {
      animation: {
        "spin-slow": "spin-slow 6s linear infinite",
        "spin-delay": "spin-slow 6s linear infinite -3s",
      },
    },
  },

  // plugins: [require('@tailwindcss/aspect-ratio')],
  plugins: [require("daisyui")],
};

//       mytheme: {

// "primary": "#661AE6",

// "secondary": "#D926AA",

// "accent": "#1FB2A5",

// "neutral": "#191D24",

// "base-100": "#2A303C",

// "info": "#3ABFF8",

// "success": "#36D399",

// "warning": "#FBBD23",

// "error": "#F87272",
//       },
