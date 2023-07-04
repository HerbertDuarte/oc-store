// @type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
      'xs': '375px',
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1720px',
    },
    extend: {
      width: {
        'psm' : 'calc(49% - 4px)',
        'plg' : 'calc(33% - 6px)',
        'pxl' : 'calc(25% - 24px)',
        'p2xl' : 'calc(20% - 24px)',
        'p3xl' : 'calc(16% - 2px)'
      }
    },
  },
  plugins: [],
}

