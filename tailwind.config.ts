import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#dc143c',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      lineClamp: {
        4: '4',
      }
    },
  },
  plugins: [],
} satisfies Config;