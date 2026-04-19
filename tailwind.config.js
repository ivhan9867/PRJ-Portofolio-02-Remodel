/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      colors: {
        bg:      '#07080f',
        surface: '#0c0e1a',
        card:    '#0f1120',
        accent:  '#c9a84c',
        muted:   '#52526e',
      },
    },
  },
  plugins: [],
}
