/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lake: {
          50: '#effafa',
          100: '#d7f0f0',
          200: '#b3dfdf',
          300: '#80c6c8',
          400: '#4aa5aa',
          500: '#2e8990',
          600: '#276f77',
          700: '#255b62',
          800: '#244b51',
          900: '#213f45',
          950: '#10282d'
        },
        timber: {
          50: '#faf7f2',
          100: '#f2e8d9',
          200: '#e5d0b4',
          300: '#d3ad82',
          400: '#c58e58',
          500: '#b9773e',
          600: '#9f5f32',
          700: '#80492c',
          800: '#6c3f2b',
          900: '#5d3829'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 18px 55px rgba(16, 40, 45, 0.12)'
      }
    }
  },
  plugins: []
};
