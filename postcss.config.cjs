const postcssNested = require('postcss-nested')
const tailwindcss = require('@tailwindcss/jit')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [postcssNested, tailwindcss(), autoprefixer]
}
