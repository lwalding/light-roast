module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
       'display': ['"Archer A"', '"Archer B"'],
       'subhead': ['"Ringside Regular A"', '"Ringside Regular B"'],
       'body': ['"Ringside Regular A"', '"Ringside Regular B"'],
      }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}