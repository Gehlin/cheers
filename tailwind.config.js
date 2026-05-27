/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink:         '#E91E8C',
          'pink-dark':  '#C2185B',
          // Kept for backward-compat references (hero sections, dark backgrounds)
          blue:         '#1B2A4A',
          'blue-dark':  '#111d34',
        },
        neutral: {
          bg:    '#F8F9FA',
          muted: '#6B7280',
          body:  '#1F2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
