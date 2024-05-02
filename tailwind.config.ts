import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        typing: "typing 4s steps(14, end) 1", 
        "blink-caret": "blink-caret 0.75s step-end infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
