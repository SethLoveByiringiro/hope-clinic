import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#20B2AA',
          dark: '#1A9B94',
        },
        green: {
          DEFAULT: '#22C55E',
          dark: '#16A34A',
        },
        gray: {
          light: '#F8F9FA',
          medium: '#6B7280',
          dark: '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter Tight', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
