/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary accent — hot magenta. Use for CTAs, active states, large/bold elements.
          pink:          '#EC008C',
          // Hover / small-text-on-white variant — darker for WCAG AA on small elements (5.3:1 vs white)
          'pink-dark':   '#C4007A',
          // Lighter tint — glow effects on dark backgrounds
          'pink-light':  '#FF33A8',
          // Very pale tint — icon circles, tag backgrounds, subtle fills
          'pink-tint':   '#FFF0F8',
          // One step up from tint — chip/badge backgrounds
          'pink-subtle': '#FCE4F4',
          // Dark surfaces — hero, footer, CTA bands
          dark:          '#141416',
          'dark-soft':   '#1F1F23',
          'dark-muted':  '#2D2D33',
        },
        neutral: {
          bg:      '#F7F7F8',   // section alternate background
          muted:   '#6B7280',   // secondary text
          body:    '#141416',   // primary text (upgraded to near-black)
          border:  '#E5E5E7',   // subtle borders
          divider: '#F0F0F2',   // section dividers
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Display scale — used for hero headings
        'display-lg': ['5.5rem',  { lineHeight: '1',    letterSpacing: '-0.03em' }],
        'display-md': ['4rem',    { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-sm': ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
        'heading-lg': ['1.875rem',{ lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        card:       '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-md':  '0 4px 12px 0 rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'card-lg':  '0 8px 32px 0 rgb(0 0 0 / 0.1),  0 4px 8px  -4px rgb(0 0 0 / 0.06)',
        nav:        '0 1px 0 0 #E5E5E7',
        'nav-scroll':'0 4px 24px 0 rgb(0 0 0 / 0.08)',
      },
    },
  },
  plugins: [],
}
