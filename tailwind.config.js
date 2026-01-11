/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}", // Add paths for your specific framework files
  ],
  theme: {
    extend: {
       colors: {
        neptune: {
          50:  '#e6f2f5',
          100: '#cce6eb',
          200: '#99cdd7',
          300: '#66b3c3',
          400: '#339aaf',
          500: '#00819b', // base Neptune
          600: '#006677',
          700: '#004c53',
          800: '#00332f',
          900: '#00191a',
        },
      }
    },
  },
  plugins: [],
}

