//const postcssNested = require('postcss-nested')
const tailwindcssNesting = require('tailwindcss/nesting')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  plugins: [
    tailwindcssNesting,
    tailwindcss,
    autoprefixer,
    !dev &&
      cssnano({
        preset: 'default'
      })
  ]
}
