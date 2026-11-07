/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-bg': '#180c3c',
        'brand-orange': '#fc783c',
        'cream-bg': '#f5f0ea',
        'pure-black': '#000000',
        'ink-black': '#180c3c',
        'warm-paper': '#f5f0ea',
        'ember-orange': '#fc783c',
        'indigo-deep': '#180c3c',
      },
      fontFamily: {
        condensed: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        display: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        body: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Source Serif 4"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
