module.exports = {
  purge: {
    content: ['./src/**/*.svelte', './public/*.html'],
    whitelistPatterns: [/svelte-/],
  },
  darkMode: 'class', // or 'media' or 'class' or false
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
